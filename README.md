# Picante 🌶️ · The Spicy Game for Couples

Micro app low ticket para parejas +18, para vender en USA en dólares desde Argentina. Truth or dare en 4 niveles, ruleta, dados, mensajes para mandar y un desafío de 7 noches. Se vende con ugly ads o contenido orgánico y se entrega con un link + código.

## Qué hay acá

```
sitio/                      ← VERSIÓN USA (inglés). Esto es lo que se sube a internet
  index.html                  Landing de venta
  thanks.html                 Página de gracias (abre el juego con ?code=)
  terms.html                  Términos, privacidad y reembolsos
  img/                        Capturas de la app
  app/                        El juego (se instala como app en el celu)

sitio-es/                   Versión en español (Latinoamérica), por si la querés usar después

negocio/
  ESTRATEGIA.md               USA: oferta, precios, Impultienda, números, plan de lanzamiento, legal
  UGLY-ADS.md                 USA: ganchos, guiones, textos y reglas de Meta/TikTok
  anuncios/                   5 anuncios en inglés (1080×1350) + sus fuentes HTML
  latam/                      Todo lo mismo pero para Latinoamérica, en español

herramientas/
  generar-codigo.html         Genera nuevos códigos de acceso (abrilo en tu compu, NO lo subas)

MODO-NOCHE.md               Cómo dejar a Claude trabajando mientras dormís
TAREAS.md                   Lista de tareas para el modo noche
scripts/modo-noche.sh       Versión para correr Claude Code en tu propia compu
```

## Ponerlo a vender

1. **Subir `sitio/` a internet:** Netlify, conectado a este repositorio de GitHub (carpeta de publicación: `sitio`).
2. **Impultienda:** producto principal + Unfiltered Pack como order bump, con los links de entrega y el redirect a `thanks.html?code=…`.
3. **Pegar el link de checkout** en `sitio/index.html` → `OFERTA.linkPago` y en `sitio/app/index.html` → `CONFIG.linkCompra` y `linkPackExtra`.
4. **Completar** `sitio/terms.html` y el email de soporte (`OFERTA.email` y `ENTREGA.email`).
5. **Compra de prueba** de punta a punta.

Los pasos 1 y 2 los hace Claude en el navegador con el prompt que te pasé en el chat. Los códigos de acceso reales **no están en este repositorio**: en la app solo hay sus huellas.

## Probarlo ya

Abrí `sitio/app/index.html` en el navegador. La demo gratis funciona sin código.
