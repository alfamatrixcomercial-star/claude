/**
 * La gift card digital: una imagen de 1080 × 1350 (la proporción que el
 * celular muestra entera en WhatsApp), dibujada en un canvas con la foto
 * de la propuesta, el logo y una placa de vidrio con los datos.
 *
 * Es la misma tarjeta de muestra de /giftcard, pero ya emitida: con número,
 * código de verificación y vencimiento.
 */

export type DatosTarjeta = {
  para: string;
  de: string;
  mensaje?: string | null;
  propuesta: string;
  paraCuantos?: string | null;
  numero?: number | null;
  codigo?: string | null;
  /** AAAA-MM-DD */
  venceEn?: string | null;
  estado?: "activa" | "canjeada" | "anulada" | "vencida";
  /** URL de la foto de fondo, del mismo sitio. */
  foto: string;
};

export type Recursos = {
  /** El isologo en SVG, tal cual; se pinta en blanco. */
  logoSvg: string;
  /** Línea de pie: cómo reservar. */
  pie: string;
};

export const ANCHO = 1080;
export const ALTO = 1350;

const COLOR = {
  placa: "rgba(235, 228, 209, 0.94)",
  borde: "rgba(255, 255, 255, 0.65)",
  tinta: "#1f2d27",
  suave: "#4f5d55",
  verde: "#445b4d",
  linea: "#cab892",
  sello: "#b3322b",
};

const imagenes = new Map<string, Promise<HTMLImageElement>>();
function cargar(src: string): Promise<HTMLImageElement> {
  if (!imagenes.has(src)) {
    imagenes.set(
      src,
      new Promise((ok, mal) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => ok(img);
        img.onerror = () => mal(new Error(`No se pudo cargar ${src}`));
        img.src = src;
      }),
    );
  }
  return imagenes.get(src)!;
}

let fuentesListas: Promise<unknown> | undefined;
function fuentes() {
  fuentesListas ??= Promise.all([
    document.fonts.load('600 80px "Poppins"'),
    document.fonts.load('500 30px "Poppins"'),
    document.fonts.load('400 30px "Poppins"'),
    document.fonts.load('italic 400 40px "Bodoni Moda"'),
  ]).catch(() => undefined);
  return fuentesListas;
}

/** Corta un texto en renglones que entren en `ancho`; el último lleva «…» si sobra. */
function renglones(ctx: CanvasRenderingContext2D, texto: string, ancho: number, max: number) {
  const palabras = texto.trim().split(/\s+/);
  const lineas: string[] = [];
  let actual = "";
  for (const p of palabras) {
    const prueba = actual ? `${actual} ${p}` : p;
    if (ctx.measureText(prueba).width <= ancho) actual = prueba;
    else {
      if (actual) lineas.push(actual);
      actual = p;
    }
  }
  if (actual) lineas.push(actual);
  if (lineas.length > max) {
    const cortadas = lineas.slice(0, max);
    let ultima = cortadas[max - 1];
    while (ultima && ctx.measureText(`${ultima}…`).width > ancho) ultima = ultima.slice(0, -1);
    cortadas[max - 1] = `${ultima.trimEnd()}…`;
    return cortadas;
  }
  return lineas;
}

/** Texto con espaciado entre letras, para los rótulos en mayúscula. */
function espaciado(ctx: CanvasRenderingContext2D, texto: string, x: number, y: number, aire: number) {
  let cx = x;
  for (const letra of texto) {
    ctx.fillText(letra, cx, y);
    cx += ctx.measureText(letra).width + aire;
  }
}

function rectRedondo(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

const fecha = (iso: string) => {
  const [a, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${a}`;
};

export async function dibujarTarjeta(canvas: HTMLCanvasElement, datos: DatosTarjeta, recursos: Recursos) {
  canvas.width = ANCHO;
  canvas.height = ALTO;
  const ctx = canvas.getContext("2d")!;

  const svgBlanco = recursos.logoSvg.replace(/currentColor/g, "#ffffff");
  const [foto, logo] = await Promise.all([
    cargar(datos.foto),
    cargar(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgBlanco)}`),
    fuentes(),
  ]);

  /* La foto, recortada para llenar el cuadro. */
  const escala = Math.max(ANCHO / foto.naturalWidth, ALTO / foto.naturalHeight);
  const fw = foto.naturalWidth * escala;
  const fh = foto.naturalHeight * escala;
  ctx.drawImage(foto, (ANCHO - fw) / 2, (ALTO - fh) / 2, fw, fh);

  /* El logo, blanco con sombra propia: es una marca, no texto para leer. */
  ctx.save();
  ctx.shadowColor = "rgba(2, 18, 16, 0.55)";
  ctx.shadowBlur = 24;
  const lw = 190;
  ctx.drawImage(logo, 72, 68, lw, (lw * 270.5) / 342.2);
  ctx.restore();

  /* La placa. El contenido se recorre dos veces con la misma función: la
     primera sólo mide (para saber el alto de la placa), la segunda dibuja.
     Así el alto nunca se desfasa del contenido. */
  const X = 56;
  const W = ANCHO - X * 2;
  const P = 56;
  const interior = W - P * 2;
  const x = X + P;

  ctx.font = 'italic 400 40px "Bodoni Moda", Georgia, serif';
  const lineasMensaje = datos.mensaje ? renglones(ctx, `“${datos.mensaje.trim()}”`, interior, 3) : [];
  ctx.font = '600 84px "Poppins", sans-serif';
  const lineasPropuesta = renglones(ctx, datos.propuesta, interior, 2);

  /** Recorre la placa desde `y0` (su borde de arriba) y devuelve dónde termina. */
  const contenido = (y0: number, dibujar: boolean) => {
    const texto = (t: string, px: number, py: number) => dibujar && ctx.fillText(t, px, py);
    let y = y0 + P;

    y += 24;
    ctx.fillStyle = COLOR.verde;
    ctx.font = '600 24px "Poppins", sans-serif';
    if (dibujar) espaciado(ctx, "GIFT CARD", x, y, 6);

    y += 58;
    ctx.fillStyle = COLOR.tinta;
    ctx.font = '400 38px "Poppins", sans-serif';
    texto("Para ", x, y);
    const anchoPara = ctx.measureText("Para ").width;
    ctx.font = '600 38px "Poppins", sans-serif';
    texto(renglones(ctx, datos.para, interior - anchoPara, 1)[0] ?? "", x + anchoPara, y);

    ctx.fillStyle = COLOR.verde;
    ctx.font = '600 84px "Poppins", sans-serif';
    lineasPropuesta.forEach((l, i) => {
      y += i === 0 ? 100 : 90;
      texto(l, x - 3, y);
    });
    if (datos.paraCuantos) {
      y += 48;
      ctx.fillStyle = COLOR.suave;
      ctx.font = '500 34px "Poppins", sans-serif';
      texto(`para ${datos.paraCuantos}`, x, y);
    }

    if (lineasMensaje.length) {
      y += 12;
      ctx.fillStyle = COLOR.tinta;
      ctx.font = 'italic 400 40px "Bodoni Moda", Georgia, serif';
      for (const l of lineasMensaje) {
        y += 52;
        texto(l, x, y);
      }
    }

    y += 62;
    ctx.fillStyle = COLOR.tinta;
    ctx.font = '400 32px "Poppins", sans-serif';
    texto("De ", x, y);
    const anchoDe = ctx.measureText("De ").width;
    ctx.font = '600 32px "Poppins", sans-serif';
    texto(renglones(ctx, datos.de, interior - anchoDe, 1)[0] ?? "", x + anchoDe, y);

    y += 34;
    if (dibujar) {
      ctx.fillStyle = COLOR.linea;
      ctx.fillRect(x, y, interior, 2);
    }

    /* Número y código a la izquierda; vencimiento a la derecha, alineados
       a los mismos dos renglones. */
    y += 48;
    ctx.fillStyle = COLOR.tinta;
    ctx.font = '600 30px "Poppins", sans-serif';
    texto(datos.numero ? `N° ${String(datos.numero).padStart(4, "0")}` : "N° ----", x, y);
    ctx.textAlign = "right";
    ctx.fillStyle = COLOR.suave;
    ctx.font = '400 24px "Poppins", sans-serif';
    texto("Válida hasta", x + interior, y);
    ctx.textAlign = "left";

    y += 36;
    ctx.fillStyle = COLOR.suave;
    ctx.font = '500 24px "Poppins", sans-serif';
    if (dibujar) espaciado(ctx, datos.codigo ?? "MW-0000-XXXX", x, y, 2);
    ctx.textAlign = "right";
    ctx.fillStyle = COLOR.tinta;
    ctx.font = '600 30px "Poppins", sans-serif';
    texto(datos.venceEn ? fecha(datos.venceEn) : "--/--/----", x + interior, y);
    ctx.textAlign = "left";

    y += 46;
    ctx.fillStyle = COLOR.suave;
    ctx.font = '400 22px "Poppins", sans-serif';
    texto(renglones(ctx, recursos.pie, interior, 1)[0] ?? "", x, y);

    return y + P - 10;
  };

  const alto = contenido(0, false);
  const Y = ALTO - X - alto;

  ctx.save();
  rectRedondo(ctx, X, Y, W, alto, 36);
  ctx.fillStyle = COLOR.placa;
  ctx.shadowColor = "rgba(31, 45, 39, 0.25)";
  ctx.shadowBlur = 50;
  ctx.shadowOffsetY = 16;
  ctx.fill();
  ctx.restore();
  rectRedondo(ctx, X, Y, W, alto, 36);
  ctx.strokeStyle = COLOR.borde;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.textBaseline = "alphabetic";
  contenido(Y, true);

  /* Sello para las que ya no valen: así una captura vieja no pasa por buena. */
  if (datos.estado && datos.estado !== "activa") {
    const texto = { canjeada: "CANJEADA", anulada: "ANULADA", vencida: "VENCIDA" }[datos.estado];
    ctx.save();
    ctx.translate(ANCHO / 2, ALTO * 0.36);
    ctx.rotate(-0.22);
    ctx.font = '700 120px "Poppins", sans-serif';
    const tw = ctx.measureText(texto).width;
    ctx.lineWidth = 10;
    ctx.strokeStyle = COLOR.sello;
    ctx.fillStyle = "rgba(255, 255, 255, 0.82)";
    rectRedondo(ctx, -tw / 2 - 44, -112, tw + 88, 156, 20);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = COLOR.sello;
    ctx.textAlign = "center";
    ctx.fillText(texto, 0, 6);
    ctx.restore();
  }
}

/** La tarjeta como archivo, para descargar o compartir. JPEG: pesa la décima parte que un PNG con foto. */
export function aArchivo(canvas: HTMLCanvasElement, nombre: string): Promise<File> {
  return new Promise((ok, mal) =>
    canvas.toBlob(
      (b) => (b ? ok(new File([b], nombre, { type: "image/jpeg" })) : mal(new Error("No se pudo generar la imagen"))),
      "image/jpeg",
      0.92,
    ),
  );
}
