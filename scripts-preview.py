#!/usr/bin/env python3
"""
Arma una vista previa navegable del sitio en UN SOLO archivo HTML.

Toma las páginas ya construidas en dist/, las mete todas en el mismo
documento y les pone un router mínimo por hash, así los links internos
funcionan sin servidor. Todo lo que el sitio sirve por separado —hojas de
estilo, fuentes, imágenes y videos— queda embebido.

Las imágenes y los videos se guardan UNA sola vez en un mapa y se asignan
en tiempo de ejecución: si no, la misma foto repetida en dos páginas
duplicaría su peso.

    npm run build && python3 scripts-preview.py
"""
import base64
import json
import pathlib
import re

RAIZ = pathlib.Path(__file__).parent
DIST = RAIZ / "dist"
SALIDA = RAIZ / "preview-home.html"

PAGINAS = [
    ("/", "index.html", "Inicio"),
    ("/restaurante", "restaurante/index.html", "Restaurante"),
    ("/hotel", "hotel/index.html", "Hotel"),
    ("/balneario", "balneario/index.html", "Balneario"),
    ("/eventos", "eventos/index.html", "Eventos"),
    ("/galeria", "galeria/index.html", "Galería"),
    ("/contacto", "contacto/index.html", "Contacto"),
    ("/legales", "legales/index.html", "Legales"),
]

TIPO = {"jpeg": "image/jpeg", "jpg": "image/jpeg", "webp": "image/webp",
        "avif": "image/avif", "png": "image/png", "svg": "image/svg+xml"}

recursos: dict[str, str] = {}   # clave → data URI, una sola vez
_clave = [0]


def guardar(ruta: str, tipo: str) -> str | None:
    archivo = DIST / ruta.lstrip("/")
    if not archivo.exists():
        return None
    for clave, valor in recursos.items():
        if valor.startswith(f"data:{tipo}") and valor.endswith(_hash(archivo)):
            return clave
    _clave[0] += 1
    clave = f"r{_clave[0]}"
    recursos[clave] = f"data:{tipo};base64,{base64.b64encode(archivo.read_bytes()).decode()}"
    return clave


_hashes: dict[pathlib.Path, str] = {}


def _hash(archivo: pathlib.Path) -> str:
    if archivo not in _hashes:
        _hashes[archivo] = base64.b64encode(archivo.read_bytes()).decode()[-24:]
    return _hashes[archivo]


def elegir_variante(etiqueta: str, src: str) -> str:
    """Del srcset elige la variante webp más cercana a 1000 px de ancho."""
    m = re.search(r'srcset="([^"]+)"', etiqueta)
    if not m:
        return src
    candidatos = []
    for parte in m.group(1).split(","):
        trozos = parte.strip().split()
        if len(trozos) == 2 and trozos[1].endswith("w"):
            candidatos.append((int(trozos[1][:-1]), trozos[0]))
    if not candidatos:
        return src
    webp = [c for c in candidatos if c[1].endswith(".webp")] or candidatos
    return min(webp, key=lambda c: abs(c[0] - 1000))[1]


css_partes: list[str] = []
scripts: list[str] = []
cuerpos: list[str] = []

for ruta, archivo, nombre in PAGINAS:
    html = (DIST / archivo).read_text()
    head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
    body = re.search(r"<body[^>]*>(.*?)</body>", html, re.S).group(1)

    for estilo in re.findall(r"<style>(.*?)</style>", head, re.S):
        if estilo not in css_partes:
            css_partes.append(estilo)
    for hoja in re.findall(r'<link rel="stylesheet" href="(/[^"]+\.css)"', head):
        texto = (DIST / hoja.lstrip("/")).read_text()
        if texto not in css_partes:
            css_partes.append(texto)

    for guion in re.findall(r'<script type="module">(.*?)</script>', body, re.S):
        if guion not in scripts:
            scripts.append(guion)
    body = re.sub(r'<script type="module">.*?</script>', "", body, flags=re.S)
    body = re.sub(r'<script type="application/ld\+json">.*?</script>', "", body, flags=re.S)

    # Imágenes: una variante por <img>, guardada una sola vez.
    body = re.sub(r"<source[^>]*srcset[^>]*>", "", body)
    body = body.replace("<picture", "<div").replace("</picture>", "</div>")

    def _img(m: re.Match) -> str:
        etiqueta = m.group(0)
        src_m = re.search(r'src="([^"]+)"', etiqueta)
        if not src_m:
            return etiqueta
        elegida = elegir_variante(etiqueta, src_m.group(1))
        ext = pathlib.Path(elegida).suffix.lstrip(".")
        clave = guardar(elegida, TIPO.get(ext, "image/jpeg")) if ext in TIPO else None
        if not clave:
            return etiqueta
        etiqueta = re.sub(r'\ssrcset="[^"]*"', "", etiqueta)
        etiqueta = re.sub(r'\ssizes="[^"]*"', "", etiqueta)
        return etiqueta.replace(f'src="{src_m.group(1)}"', f'data-img="{clave}"')

    body = re.sub(r"<img\b[^>]*>", _img, body)

    # Video del hero: se embebe sólo el mp4, que reproduce cualquier navegador.
    for base in re.findall(r'data-video="([^"]+)"', body):
        clave = guardar(base + ".mp4", "video/mp4")
        body = body.replace(f'data-video="{base}"', f'data-vid="{clave}"' if clave else "")

    # <video> con <source> propios (el del restaurante)
    def _video_fuentes(m: re.Match) -> str:
        etiqueta = m.group(0)
        src_m = re.search(r'src="([^"]+\.mp4)"', etiqueta)
        if not src_m:
            return ""
        clave = guardar(src_m.group(1), "video/mp4")
        return f'<source data-vid="{clave}" type="video/mp4">' if clave else ""

    body = re.sub(r'<source[^>]*\.webm"[^>]*>', "", body)
    body = re.sub(r'<source[^>]*\.mp4"[^>]*>', _video_fuentes, body)

    # Poster de <video>
    def _poster(m: re.Match) -> str:
        clave = guardar(m.group(1), "image/jpeg")
        return f'data-poster="{clave}"' if clave else ""

    body = re.sub(r'poster="(/video/[^"]+\.jpg)"', _poster, body)

    # Links internos → router por hash
    body = re.sub(r'href="/(?!/)([^"#]*)"', lambda m: f'href="#/{m.group(1)}"', body)

    oculta = "" if ruta == "/" else " hidden"
    cuerpos.append(f'<div class="pv-pagina" data-ruta="{ruta}"{oculta}>{body}</div>')

# Fuentes dentro del CSS
css = "\n".join(css_partes)


def _fuente(m: re.Match) -> str:
    archivo = DIST / m.group(1).lstrip("/")
    if not archivo.exists():
        return m.group(0)
    return f'url("data:font/woff2;base64,{base64.b64encode(archivo.read_bytes()).decode()}")'


css = re.sub(r'url\(\s*["\']?(/fonts/[^)"\']+\.woff2)["\']?\s*\)', _fuente, css)

router = """
const RECURSOS = __RECURSOS__;

/* Las imágenes y los videos se asignan desde el mapa: así cada archivo
   aparece una sola vez aunque se repita en varias páginas. */
for (const el of document.querySelectorAll("[data-img]")) {
  el.src = RECURSOS[el.dataset.img];
}
for (const el of document.querySelectorAll("[data-poster]")) {
  el.poster = RECURSOS[el.dataset.poster];
}
for (const el of document.querySelectorAll("source[data-vid]")) {
  el.src = RECURSOS[el.dataset.vid];
  el.parentElement.load();
}
for (const el of document.querySelectorAll("[data-vid]:not(source)")) {
  const v = el.querySelector("video");
  if (!v) continue;
  v.src = RECURSOS[el.dataset.vid];
  v.classList.add("visible");
  v.autoplay = true;
  v.muted = true;
  v.play().catch(() => {});
}

const paginas = [...document.querySelectorAll(".pv-pagina")];
const quietud = window.matchMedia("(prefers-reduced-motion: reduce)");
const barra = document.createElement("div");
barra.className = "cargando";
document.body.appendChild(barra);

function pintar(ruta) {
  let encontrada = false;
  for (const p of paginas) {
    const coincide = p.dataset.ruta === ruta;
    p.hidden = !coincide;
    encontrada = encontrada || coincide;
  }
  if (!encontrada) paginas[0].hidden = false;
  window.scrollTo(0, 0);
}

/* Mismo fundido que el sitio real, para que la vista previa no engañe. */
function mostrar(ruta) {
  if (quietud.matches || !document.startViewTransition) {
    pintar(ruta);
    return;
  }
  barra.classList.add("activa");
  document.startViewTransition(() => pintar(ruta)).finished.finally(() => {
    barra.classList.remove("activa");
    barra.classList.add("lista");
    setTimeout(() => barra.classList.remove("lista"), 460);
  });
}
function desdeHash() {
  const h = location.hash.replace(/^#/, "") || "/";
  mostrar(h.replace(/\\/$/, "") || "/");
}
window.addEventListener("hashchange", desdeHash);
desdeHash();
"""

script = router.replace("__RECURSOS__", json.dumps(recursos))

SALIDA.write_text(
    "<title>Mirador Waikiki · Mar del Plata</title>\n"
    f"<style>{css}\n.pv-pagina[hidden]{{display:none!important}}</style>\n"
    + "\n".join(cuerpos)
    + "\n<script>"
    + script
    + "</script>\n"
    + "\n".join(f"<script type=module>{g}</script>" for g in scripts)
)
print(f"{SALIDA.name}: {SALIDA.stat().st_size / 1024 / 1024:.2f} MB · "
      f"{len(PAGINAS)} páginas, {len(recursos)} recursos embebidos")
