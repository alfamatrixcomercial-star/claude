# Cartas · Mirador Waikiki, Mirador 9 y Hula Kai

Cartas digitales del grupo, todas con la misma estética. Es un solo proyecto Next.js 16 + Tailwind v4 que
genera un sitio estático por carta. Cada carta es una carpeta de `src/venues/` y se sirve desde
`miradorwaikiki.com/carta/<carpeta>/`:

| Carta | Dirección |
| --- | --- |
| Mirador Waikiki | `miradorwaikiki.com/carta/miradorwaikiki` |
| Mirador 9 | `miradorwaikiki.com/carta/mirador9` |
| Mirador 9 Resto | `miradorwaikiki.com/carta/mirador9resto` |
| Hula Kai | `miradorwaikiki.com/carta/hulakai` |

`miradorwaikiki.com/carta/` lleva a la de Mirador Waikiki, que estuvo ahí antes que las otras.

```bash
npm install
npm run dev                       # Mirador Waikiki en http://localhost:3000/carta/miradorwaikiki
CARTA=hulakai npm run dev         # otra carta: http://localhost:3000/carta/hulakai
npm run build:cartas              # las cuatro, en dist/carta/<carta>/
npm run build:cartas -- hulakai   # solo una
npm run lint
```

## Cambiar precios sin publicar

Cada carta tiene un panel en `/carta/<carta>/admin/` (por ejemplo `miradorwaikiki.com/carta/hulakai/admin/`;
también hay accesos en `miradorwaikiki.com/gestion`). Se entra con el mismo usuario de la app de Mirador
Waikiki, y solo pueden guardar sus administradores. Desde ahí se cambian precios y descripciones, y se
oculta un plato que no hay; la carta toma los cambios al abrirse, sin publicar de nuevo.

Los cambios viven en la tabla `carta_cambios` del Supabase del grupo (`supabase/carta-cambios.sql`, que se
corre una vez en el editor SQL del proyecto) y van por encima de lo publicado en `menu.ts`: sin conexión,
la carta muestra lo publicado. Platos nuevos o secciones nuevas se siguen agregando en `menu.ts`.

## Qué editar

| Querés cambiar… | Editá |
| --- | --- |
| Platos, precios, descripciones, sugeridos, sin TACC | `src/venues/<carta>/menu.ts` |
| Nombre, teléfono, mail, WhatsApp, medios de pago, frase de bienvenida, foto | `src/venues/<carta>/index.ts` |
| Horario de cena de Waikiki (secciones que pasan al final y foto de noche) | `dinner` en `src/venues/miradorwaikiki/index.ts` |
| Logo y fotos | `public/venues/<carta>/` (sin `logo`, el nombre se escribe en letras) |
| Colores | variables `--mw-*` en `src/app/globals.css` (mismos valores que la web) |
| Textos de la interfaz (es / en) | `src/lib/i18n.ts` |

Las fotos de portada van en tres tamaños, `<nombre>-640.webp`, `-1024.webp` y `-1440.webp`, uno por
densidad de pantalla. El sitio guarda las imágenes en caché un año: para cambiar una foto, usá otro nombre
de archivo.

## Publicar

Las cartas viven dentro del sitio de miradorwaikiki.com: después de `npm run build:cartas`, `dist/carta/`
reemplaza a `public/carta/` del proyecto Astro de la web. Al subir esa rama, GitHub Actions la publica por
FTP en DonWeb.
