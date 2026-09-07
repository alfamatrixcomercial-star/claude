#!/usr/bin/env python3
"""
Arma una vista previa de una sola página a partir de dist/index.html.
No copia nada a mano: toma el home construido, mete el CSS (inline y las
hojas externas) y las imágenes como data URI, y neutraliza los links
internos, que en una sola página no llevan a ningún lado.

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

fuentes = "".join(re.findall(r'<link rel="stylesheet" href="https://fonts\.googleapis[^>]*>', head))

css = "".join(re.findall(r"<style>(.*?)</style>", head, re.S))
externas = re.findall(r'<link rel="stylesheet" href="(/[^"]+\.css)"', head)
for ruta in externas:
    css += "\n" + (DIST / ruta.lstrip("/")).read_text()

TIPOS = {
    "jpeg": "image/jpeg", "jpg": "image/jpeg",
    "webp": "image/webp", "avif": "image/avif", "svg": "image/svg+xml",
}


def data_uri(ruta: str) -> str:
    p = DIST / ruta.lstrip("/")
    return f"data:{TIPOS[p.suffix.lstrip('.')]};base64," + base64.b64encode(p.read_bytes()).decode()


body = re.sub(r"<source[^>]*>", "", body).replace("<picture", "<div").replace("</picture>", "</div>")


def embeber(m: re.Match) -> str:
    etiqueta = m.group(0)
    src = re.search(r'src="([^"]+)"', etiqueta).group(1)
    return re.sub(r'\ssrcset="[^"]*"', "", etiqueta).replace(f'src="{src}"', f'src="{data_uri(src)}"')


body = re.sub(r"<img\b[^>]*>", embeber, body)
body = re.sub(r'href="/(?!/)[^"]*"', 'href="#" data-interno="1"', body)

SALIDA.write_text(
    f"<title>{titulo}</title>\n{fuentes}\n<style>{css}\n"
    "[data-interno]{cursor:default}</style>\n" + body
)
print(f"{SALIDA.name}: {SALIDA.stat().st_size / 1024 / 1024:.2f} MB, "
      f"{len(externas)} hojas de estilo embebidas")
