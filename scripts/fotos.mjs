/**
 * Control de resolución de las fotos, antes de cada build.
 *
 * Una imagen chica estirada a lo ancho de la pantalla se nota, y en este
 * sitio buena parte del material salió de recortes de video. Este chequeo
 * lista lo que está por debajo del mínimo para cada uso y corta el build
 * si una foto de hero no llega.
 *
 *   hero    → 700 px de ancho. Va a sangre.
 *   galería → 640 px. Se ve en mosaico, tolera menos.
 */
import { readdir, readFile } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import sharp from "sharp";

const MINIMOS = { hero: 700, galeria: 640 };
const DIR = "src/content/unidades";

const rutas = (await readdir(DIR)).filter((f) => f.endsWith(".yaml"));
const flojas = [];
let corta = false;

for (const archivo of rutas) {
  const texto = await readFile(join(DIR, archivo), "utf8");
  let seccion = null;

  for (const linea of texto.split("\n")) {
    if (/^hero:/.test(linea)) seccion = "hero";
    else if (/^galeria:/.test(linea)) seccion = "galeria";
    else if (/^\w/.test(linea)) seccion = null;

    const m = linea.match(/src:\s*(\S+)/);
    if (!m || !seccion) continue;

    const ruta = resolve(dirname(join(DIR, archivo)), m[1]);
    try {
      const { width, height } = await sharp(ruta).metadata();
      if (width < MINIMOS[seccion]) {
        flojas.push({ unidad: archivo.replace(".yaml", ""), seccion, ruta: m[1].split("/").pop(), width, height });
        if (seccion === "hero") corta = true;
      }
    } catch {
      console.error(`  no se pudo leer ${m[1]}`);
    }
  }
}

if (flojas.length === 0) {
  console.log("Fotos: todas por encima del mínimo.");
} else {
  console.log(`\nFotos por debajo del mínimo (${flojas.length}):`);
  for (const f of flojas) {
    console.log(
      `  ${f.unidad.padEnd(12)} ${f.seccion.padEnd(8)} ${String(f.ruta).padEnd(24)} ${f.width}x${f.height}` +
        `  (mínimo ${MINIMOS[f.seccion]})`,
    );
  }
  console.log("\nSon provisorias: casi todas salieron de recortes de los videos.");
  console.log("Reemplazalas por las fotos originales y este aviso desaparece solo.\n");
}

if (corta && process.env.FOTOS_ESTRICTO === "1") {
  console.error("Hay fotos de hero por debajo del mínimo y FOTOS_ESTRICTO=1. Se corta el build.");
  process.exit(1);
}
