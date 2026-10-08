/**
 * El ícono del sitio (la pestaña, los favoritos, la pantalla de inicio del
 * celular): el isologo en tinta sobre un cuadrado crema, como aparece en la
 * cabecera.
 *
 * Se arma al compilar a partir del mismo isologo.svg de la cabecera, así hay
 * un solo logo. Los archivos los sirven src/pages/icono.svg.ts,
 * favicon.ico.ts y apple-touch-icon.png.ts.
 *
 * Ojo con la caché: el .htaccess deja los .svg y .png un año en el
 * navegador. Si el ícono cambia, hay que cambiarle el nombre al .svg (así se
 * pasó de favicon.svg a icono.svg); si no, quien ya entró sigue viendo el
 * viejo.
 */
import sharp from "sharp";
import isologo from "~/assets/marca/isologo.svg?raw";

const CREMA = "#dbd2b5";
const TINTA = "#1f2d27";

const [, , anchoLogo, altoLogo] = isologo.match(/viewBox="([^"]+)"/)![1].split(/[\s,]+/).map(Number);
const dibujo = isologo.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");

type Opciones = {
  /** Cuánto del lado ocupa el logo, sobre 100. */
  ancho?: number;
  /** La curva de las esquinas, sobre 100. 0 para el de iPhone, que las redondea solo. */
  radio?: number;
};

/** El ícono en SVG, en un lienzo de 100 × 100. */
export function iconoSvg({ ancho = 88, radio = 18 }: Opciones = {}) {
  const escala = ancho / anchoLogo;
  const x = (100 - ancho) / 2;
  const y = (100 - altoLogo * escala) / 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
    `<rect width="100" height="100" rx="${radio}" fill="${CREMA}"/>` +
    `<g transform="translate(${x} ${y.toFixed(2)}) scale(${escala.toFixed(5)})" fill="${TINTA}" fill-rule="evenodd">` +
    dibujo.replace(/currentColor/g, TINTA) +
    `</g></svg>`
  );
}

/** El ícono en PNG de `lado` × `lado`. */
export async function iconoPng(lado: number, opciones?: Opciones) {
  /* Se rasteriza grande y se achica: así los bordes salen suaves. */
  return sharp(Buffer.from(iconoSvg(opciones)), { density: 300 }).resize(lado, lado).png().toBuffer();
}

/** Un .ico con los PNG adentro: lo que piden Safari y los lectores viejos que no leen SVG. */
export async function iconoIco(lados = [16, 32, 48]) {
  const pngs = await Promise.all(lados.map((l) => iconoPng(l)));
  const cabecera = Buffer.alloc(6 + 16 * pngs.length);
  cabecera.writeUInt16LE(0, 0);
  cabecera.writeUInt16LE(1, 2); // 1 = ícono
  cabecera.writeUInt16LE(pngs.length, 4);
  let desde = cabecera.length;
  pngs.forEach((png, i) => {
    const e = 6 + 16 * i;
    cabecera.writeUInt8(lados[i] % 256, e); // 0 quiere decir 256
    cabecera.writeUInt8(lados[i] % 256, e + 1);
    cabecera.writeUInt16LE(1, e + 4); // planos
    cabecera.writeUInt16LE(32, e + 6); // bits por píxel
    cabecera.writeUInt32LE(png.length, e + 8);
    cabecera.writeUInt32LE(desde, e + 12);
    desde += png.length;
  });
  return Buffer.concat([cabecera, ...pngs]);
}
