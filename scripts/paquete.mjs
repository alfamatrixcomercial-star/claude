/**
 * Arma el paquete para subir a un hosting compartido (Ferozo / DonWeb).
 *
 * Hace tres cosas sobre dist/:
 *  1. Borra los originales que Astro copia a _astro/ y que ninguna página
 *     referencia. Son los .jpg tal cual salieron de la cámara: 15 MB que
 *     nadie descarga nunca, porque el sitio sirve las versiones avif/webp
 *     que genera al lado.
 *  2. Escribe el .htaccess: tipos MIME, 404, compresión y caché.
 *  3. Comprime todo en un zip para subirlo de una y descomprimir allá.
 *
 *   npm run paquete
 */
import { readdir, readFile, writeFile, unlink, stat } from "node:fs/promises";
import { join, basename } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const ejecutar = promisify(execFile);
const DIST = "dist";
const ZIP = "miradorwaikiki-sitio.zip";

/* ── 1. Originales huérfanos ──────────────────────────────────────────── */

/** Todo el texto del build donde puede aparecer una referencia a un asset. */
async function textoDelSitio(dir) {
  let texto = "";
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, e.name);
    if (e.isDirectory()) texto += await textoDelSitio(ruta);
    else if (/\.(html|css|js|xml|txt|json)$/.test(e.name)) texto += await readFile(ruta, "utf8");
  }
  return texto;
}

const texto = await textoDelSitio(DIST);
const astro = join(DIST, "_astro");
let borrados = 0;
let liberado = 0;

for (const nombre of await readdir(astro)) {
  /* Sólo los originales: las variantes que genera Astro terminan en
     .jpeg, .avif o .webp. Un .jpg acá es la foto sin tocar. */
  if (!/\.(jpg|png)$/i.test(nombre)) continue;
  if (texto.includes(nombre)) continue;
  const ruta = join(astro, nombre);
  liberado += (await stat(ruta)).size;
  await unlink(ruta);
  borrados++;
}

/* ── 2. .htaccess ─────────────────────────────────────────────────────── */

const HTACCESS = `# Mirador Waikiki · sitio estático
# Generado por scripts/paquete.mjs. No editar a mano: se pisa en el próximo
# paquete. Los cambios van en ese script.

# ── Tipos MIME ────────────────────────────────────────────────────────────
# Sin esto, un Apache viejo manda las imágenes modernas y los videos como
# "descargá esto" en vez de mostrarlos.
AddType image/avif            .avif
AddType image/webp            .webp
AddType image/svg+xml         .svg
AddType video/mp4             .mp4
AddType video/webm            .webm
AddType font/woff2            .woff2
AddType application/xml       .xml

# ── Cuál es la home ───────────────────────────────────────────────────────
# Casi todos los hostings compartidos vienen con DirectoryIndex probando
# index.php ANTES que index.html, y traen un index.php de bienvenida en
# public_html. Sin esta línea, el visitante ve la página del hosting y no
# el sitio, aunque index.html esté ahí al lado.
DirectoryIndex index.html index.htm

# ── Página de error propia ────────────────────────────────────────────────
ErrorDocument 404 /404.html

# ── Compresión ────────────────────────────────────────────────────────────
# Sólo lo que comprime de verdad. Las imágenes y los videos ya vienen
# comprimidos: pasarlos por gzip gasta CPU y no baja un byte.
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/xml
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE application/xml image/svg+xml
</IfModule>

# ── Caché ─────────────────────────────────────────────────────────────────
# Todo lo de /_astro/ lleva un hash en el nombre: si el archivo cambia,
# cambia el nombre. Por eso puede cachearse para siempre sin miedo.
# El HTML no se cachea nunca, así un cambio de texto se ve enseguida.
<IfModule mod_headers.c>
  <FilesMatch "\\.(avif|webp|jpe?g|png|svg|css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(woff2|mp4|webm)$">
    Header set Cache-Control "public, max-age=2592000"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

# ── HTTPS ─────────────────────────────────────────────────────────────────
# Descomentar DESPUÉS de activar el certificado en el panel de Ferozo.
# Si se activa antes, el sitio entra en un bucle de redirecciones.
# <IfModule mod_rewrite.c>
#   RewriteEngine On
#   RewriteCond %{HTTPS} !=on
#   RewriteCond %{HTTP:X-Forwarded-Proto} !https
#   RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
# </IfModule>
`;

await writeFile(join(DIST, ".htaccess"), HTACCESS, "utf8");

/* ── 3. Zips ──────────────────────────────────────────────────────────────
   Uno solo daría más de 50 MB y muchos administradores de archivos no lo
   aceptan. Se parte en piezas INDEPENDIENTES —no en un zip multivolumen,
   que los descompresores web no saben abrir—: cada una se descomprime sola
   dentro de public_html y los archivos se van sumando. El orden no importa.

   La primera lleva la estructura del sitio (páginas, tipografías, videos);
   las siguientes, las imágenes de /_astro/ repartidas por peso. */

const TOPE = 27 * 1024 * 1024;
const mb = (n) => (n / 1024 / 1024).toFixed(1);

async function pesar(dir, base = dir) {
  const salida = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const ruta = join(dir, e.name);
    if (e.isDirectory()) salida.push(...(await pesar(ruta, base)));
    else salida.push({ rel: ruta.slice(base.length + 1), bytes: (await stat(ruta)).size });
  }
  return salida;
}

const todos = await pesar(DIST);
const esImagen = (f) => f.rel.startsWith("_astro/") && /\.(avif|webp|jpe?g|png)$/i.test(f.rel);

/* La estructura va entera en la primera pieza. */
const grupos = [todos.filter((f) => !esImagen(f))];

/* Las imágenes, de mayor a menor, en piezas que no pasen el tope. */
let actual = [];
let peso = 0;
for (const f of todos.filter(esImagen).sort((a, b) => b.bytes - a.bytes)) {
  if (peso + f.bytes > TOPE && actual.length) {
    grupos.push(actual);
    actual = [];
    peso = 0;
  }
  actual.push(f);
  peso += f.bytes;
}
if (actual.length) grupos.push(actual);

await ejecutar("sh", ["-c", "rm -f miradorwaikiki-sitio*.zip"]);

console.log(`Originales huérfanos borrados: ${borrados} (${mb(liberado)} MB)`);
console.log(`.htaccess escrito en ${DIST}/`);

const nombres = [];
for (const [i, grupo] of grupos.entries()) {
  const nombre = `miradorwaikiki-sitio-${i + 1}de${grupos.length}.zip`;
  /* La lista va por stdin: son cientos de rutas y no entran en un argumento. */
  await ejecutar("sh", [
    "-c",
    `cd ${DIST} && printf '%s\\n' ${grupo.map((f) => `'${f.rel}'`).join(" ")} | zip -q -9 "../${nombre}" -@`,
  ]);
  const bytes = (await stat(nombre)).size;
  nombres.push(nombre);
  console.log(`  ${nombre}: ${mb(bytes)} MB · ${grupo.length} archivos`);
}
console.log(`Total: ${grupos.length} piezas, ${todos.length} archivos.`);
