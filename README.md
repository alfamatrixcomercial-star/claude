# Carta · Mirador Waikiki

Carta digital del restaurante Mirador Waikiki. Next.js 16 + Tailwind v4, exportada como sitio estático
para servirse en `miradorwaikiki.com/carta`.

```bash
npm install
npm run dev     # http://localhost:3000/carta
npm run build   # genera out/ (estático, con base /carta)
npm run lint
```

## Qué editar

| Querés cambiar… | Editá |
| --- | --- |
| Platos, precios, descripciones, sugeridos, sin TACC | `src/data/menu.ts` |
| Teléfono, mail, WhatsApp, medios de pago | `restaurant` en `src/data/menu.ts` |
| Colores | variables `--mw-*` en `src/app/globals.css` (mismos valores que la web) |
| Textos de la interfaz (es / en) | `src/lib/i18n.ts` |
| Logo | `public/images/brand/isologo.svg` |

## Publicar

La carta vive dentro del sitio de miradorwaikiki.com: después de `npm run build`, el contenido de `out/`
se copia a `public/carta/` del proyecto Astro de la web y se publica con su deploy de Vercel.
