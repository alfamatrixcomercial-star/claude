#!/usr/bin/env python3
"""
Arma una vista previa de una sola página a partir de dist/index.html.

No copia nada a mano: toma el home construido y embebe todo lo que en el
sitio se sirve por separado — hojas de estilo, fuentes, imágenes y el video
del hero — para que el archivo funcione solo, sin servidor.

    npm run build && python3 scripts-preview.py
"""
import base64
import pathlib
import re

DIST = pathlib.Path(__file__).parent / "dist"
SALIDA = pathlib.Path(__file__).parent / "preview-home.html"

html = (DIST / "index.html").read_text()
head = re.search(r"<head>(.*?)</head>", html, re.S).group(1)
body = re.search(r"<body[^>]*>(.*?)</body>", html, re.S).group(1)
titulo = re.search(r"<title>(.*?)</title>", head, re.S).group(1)


def uri(ruta: str, tipo: str) -> str:
    datos = base64.b64encode((DIST / ruta.lstrip("/")).read_bytes()).decode()
    return f"data:{tipo};base64,{datos}"


# ── CSS: los <style> del head y las hojas externas ───────────────────────
css = "".join(re.findall(r"<style>(.*?)</style>", head, re.S))
externas = re.findall(r'<link rel="stylesheet" href="(/[^"]+\.css)"', head)
for ruta in externas:
    css += "\n" + (DIST / ruta.lstrip("/")).read_text()

# ── Fuentes: se sirven del propio dominio, así que hay que embeberlas ────
def _fuente(m: re.Match) -> str:
    ruta = m.group(1)
    if not (DIST / ruta.lstrip("/")).exists():
        return m.group(0)
    return f'url("{uri(ruta, "font/woff2")}")'


# El build minifica y saca las comillas de url(), así que se aceptan las dos formas.
css = re.sub(r'url\(\s*["\']?(/fonts/[^)"\']+\.woff2)["\']?\s*\)', _fuente, css)

# ── Imágenes: se deja una sola fuente por <img>, embebida ────────────────
IMG = {"jpeg": "image/jpeg", "jpg": "image/jpeg", "webp": "image/webp",
       "avif": "image/avif", "svg": "image/svg+xml", "png": "image/png"}

body = re.sub(r"<source[^>]*srcset[^>]*>", "", body)
body = body.replace("<picture", "<div").replace("</picture>", "</div>")


def _img(m: re.Match) -> str:
    etiqueta = m.group(0)
    src = re.search(r'src="([^"]+)"', etiqueta).group(1)
    ext = pathlib.Path(src).suffix.lstrip(".")
    if ext not in IMG or not (DIST / src.lstrip("/")).exists():
        return etiqueta
    etiqueta = re.sub(r'\ssrcset="[^"]*"', "", etiqueta)
    return etiqueta.replace(f'src="{src}"', f'src="{uri(src, IMG[ext])}"')


body = re.sub(r"<img\b[^>]*>", _img, body)

# ── Video del hero ───────────────────────────────────────────────────────
# En el sitio el componente pide sus fuentes por JavaScript a
# /video/<base>.<ext>. Acá se embeben dentro del <video>, se le pone
# autoplay y se saca el data-video para que el script no intervenga.
for base in re.findall(r'data-video="([^"]+)"', body):
    fuentes = ""
    for ext, tipo in (("webm", "video/webm"), ("mp4", "video/mp4")):
        archivo = DIST / (base.lstrip("/") + "." + ext)
        if archivo.exists():
            fuentes += f'<source src="{uri(base + "." + ext, tipo)}" type="{tipo}">'
    body = body.replace(f' data-video="{base}"', "")
    body = body.replace(
        "<video muted loop playsinline",
        '<video class="visible" autoplay muted loop playsinline',
    )
    body = re.sub(r"(<video[^>]*>)", lambda m: m.group(1) + fuentes, body, count=1)

# ── Links internos: en una sola página no llevan a ningún lado ───────────
body = re.sub(r'href="/(?!/)[^"]*"', 'href="#" data-interno="1"', body)

SALIDA.write_text(
    f"<title>{titulo}</title>\n<style>{css}\n[data-interno]{{cursor:default}}</style>\n{body}"
)
print(f"{SALIDA.name}: {SALIDA.stat().st_size / 1024 / 1024:.2f} MB · "
      f"{len(externas)} hojas de estilo, fuentes y video embebidos")
