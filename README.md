# Picante 🌶️ · El juego para encender la pareja

Micro app low ticket para parejas +18: verdad o reto en 4 niveles, ruleta, dados, mensajes para WhatsApp y Reto 7 Noches. Se vende con ugly ads y se entrega con un link + código.

## Qué hay acá

```
sitio/                      ← ESTO es lo que se sube a internet (Netlify, Vercel…)
  index.html                  Landing de venta
  gracias.html                Página después de pagar (botón “Entrar al juego”)
  terminos.html               Términos, privacidad y botón de arrepentimiento
  img/                        Capturas de la app para la landing
  app/                        El juego (se instala como app en el celu)

negocio/
  ESTRATEGIA.md               Oferta, precio, embudo, plataformas de pago, números, plan de lanzamiento
  UGLY-ADS.md                 Ganchos, 6 guiones de video, textos y reglas de Meta/TikTok
  anuncios/                   5 anuncios estáticos listos (1080×1350) + sus fuentes HTML

herramientas/
  generar-codigo.html         Genera tus códigos de acceso (abrilo en tu compu, NO lo subas)

MODO-NOCHE.md               Cómo dejar a Claude trabajando mientras dormís
TAREAS.md                   Lista de tareas que Claude va haciendo en modo noche
scripts/modo-noche.sh       Versión para correr Claude Code en tu propia compu
```

## Ponerlo a vender (checklist)

1. **Códigos:** abrí `herramientas/generar-codigo.html`, inventá tu código y pegá la huella en `sitio/app/index.html` → `CONFIG`. Poné el mismo código en `sitio/gracias.html` → `ENTREGA`. (Los de ejemplo, `PICANTE2026` y `SINFILTRO2026`, cambialos.)
2. **Precio y links:** `sitio/index.html` → `OFERTA` (precio, link de pago, WhatsApp). `sitio/app/index.html` → `CONFIG.linkCompra` y `linkPackExtra`.
3. **Términos:** completá los datos entre corchetes de `sitio/terminos.html`.
4. **Subirlo:** arrastrá la carpeta `sitio` a app.netlify.com/drop.
5. **Checkout:** configurá en tu plataforma de pago la página de gracias y los mails de entrega (detalle en `negocio/ESTRATEGIA.md`, punto 5).
6. **Probar:** hacé una compra de prueba de punta a punta.
7. **Anuncios:** subí los de `negocio/anuncios/` y seguí `negocio/UGLY-ADS.md`.

## Probarlo ya

Abrí `sitio/app/index.html` en el navegador. Para desbloquear todo usá el código `SINFILTRO2026`.
