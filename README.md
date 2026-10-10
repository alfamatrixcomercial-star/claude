# Cartas · Mirador Waikiki, Mirador 9 y Hula Kai

Cartas digitales del grupo, todas con la misma estética. Es un solo proyecto Next.js 16 + Tailwind v4 que
genera un sitio estático por carta, cada uno servido desde miradorwaikiki.com:

| Carta | Carpeta | Dirección |
| --- | --- | --- |
| Mirador Waikiki | `src/venues/waikiki` | `miradorwaikiki.com/carta` |
| Mirador 9 | `src/venues/mirador9` | `miradorwaikiki.com/mirador9` |
| Mirador 9 Resto | `src/venues/mirador9resto` | `miradorwaikiki.com/mirador9resto` |
| Hula Kai | `src/venues/hulakai` | `miradorwaikiki.com/hulakai` |

Las direcciones están en `cartas.json`.

```bash
npm install
npm run dev                       # Waikiki en http://localhost:3000/carta
CARTA=hulakai npm run dev         # otra carta: http://localhost:3000/hulakai
npm run build:cartas              # las cuatro, en dist/carta, dist/mirador9, …
npm run build:cartas -- hulakai   # solo una
npm run lint
```

## Qué editar

| Querés cambiar… | Editá |
| --- | --- |
| Platos, precios, descripciones, sugeridos, sin TACC | `src/venues/<carta>/menu.ts` |
| Nombre, teléfono, mail, WhatsApp, medios de pago, frase de bienvenida, foto | `src/venues/<carta>/index.ts` |
| Horario de cena de Waikiki (secciones que pasan al final y foto de noche) | `dinner` en `src/venues/waikiki/index.ts` |
| Logo y fotos | `public/venues/<carta>/` (sin `logo`, el nombre se escribe en letras) |
| Colores | variables `--mw-*` en `src/app/globals.css` (mismos valores que la web) |
| Textos de la interfaz (es / en) | `src/lib/i18n.ts` |

Las fotos de portada van en tres tamaños, `<nombre>-640.webp`, `-1024.webp` y `-1440.webp`, uno por
densidad de pantalla.

## Publicar

Cada carta vive dentro del sitio de miradorwaikiki.com: después de `npm run build:cartas`, cada carpeta de
`dist/` se copia a `public/` del proyecto Astro de la web (`dist/carta` → `public/carta`, etc.). Al subir
esa rama, GitHub Actions la publica por FTP en DonWeb.
