# miradorwaikiki.com

Sitio del complejo Mirador Waikiki (Mar del Plata): restaurante, Hotel Ili Ili
Boutique, balneario y espacio para eventos.

Astro 5, salida estática, sin CMS y sin base de datos. Todo el contenido
editable vive en archivos YAML tipados; la maquetación no tiene ni un texto
ni un número escritos adentro.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # valida tipos y contenido sin compilar
```

---

## Cómo editar el contenido

Todo está en `src/content/`. **No hace falta tocar componentes para cambiar
textos, horarios, platos o números de teléfono.**

| Querés cambiar… | Editá |
|---|---|
| Dirección, cómo llegar, WhatsApp por unidad, link de Woki | `src/content/sitio/sitio.yaml` |
| Textos, horarios, carta, habitaciones, servicios de una unidad | `src/content/unidades/<unidad>.yaml` |
| Lo que se anuncia este mes en el home | `src/content/agenda/*.yaml` |
| Términos y privacidad | `src/content/legales/*.md` |

Los esquemas están en `src/content.config.ts`. **Si un dato está mal, el build
falla y te dice qué corregir** — esa validación es lo que reemplaza al panel de
administración de un CMS. Entre otras cosas caza dos errores fáciles de cometer
en YAML y difíciles de ver:

- Una coma sin comillas dentro de `{ }` parte el valor en dos y se publica sólo
  la mitad. Escribí `valor: "Sí, con reserva previa"`.
- Un `# TODO` dentro de un bloque de texto `>-` **no es un comentario**: es
  texto y sale publicado. Poné la nota en su propia línea.

### La carta y las habitaciones viven fuera del sitio

La carta es un link a la plataforma de menú digital, y las habitaciones se ven
y se reservan en el sitio propio del hotel. El sitio muestra el lugar y deriva,
igual que hace con eventos:

```yaml
# src/content/unidades/restaurante.yaml
cartaUrl: "https://mimenulatech.com/miradorwaikiki"

# src/content/unidades/hotel.yaml
ctas:
  - { texto: Ver habitaciones y reservar, tipo: externo, href: "https://iliilihotelboutique.com.ar" }
derivacion:
  titulo: Las habitaciones se ven en el sitio del hotel
  url: "https://iliilihotelboutique.com.ar"
```

### Cambiar a dónde va un botón

```yaml
# src/content/sitio/sitio.yaml
contacto:
  restaurante:
    whatsapp: "5492235466065"     # sólo dígitos, con código de país, sin el +
    mensaje: "Hola! Quiero reservar una mesa en el restaurante de Mirador Waikiki."
```

Ningún componente arma un `wa.me` a mano: todos pasan por `waLink()` en
`src/lib/contacto.ts`. Cambiar un número es cambiar esa línea.

**Woki:** el link cargado es
`https://www.wokiapp.com/restaurante/mirador-waikiki`. **Abrilo una vez para
confirmarlo:** el entorno de desarrollo tiene bloqueado wokiapp.com, así que
no lo pude verificar. Si redirige a otra dirección, cambiá esa línea. Si
alguna vez lo ponés en `null`, los botones de Woki desaparecen solos y queda
el de WhatsApp.

### Horarios y temporada

Cada unidad declara sus horarios; el sitio calcula y muestra el estado de hoy
(«Abierto hasta las 00:00», «Temporada desde el 1 de diciembre»).

```yaml
horarios:
  - dias: [5, 6]              # 0 es domingo
    etiqueta: Viernes y sábados
    franjas:
      - { desde: "20:00", hasta: "23:59" }
    nota: Cena show desde las 22, entrada sin cargo.

temporada:                    # para el balneario
  desde: "12-01"
  hasta: "03-31"
  abierta: Temporada abierta
  cerrada: Temporada desde el 1 de diciembre
```

> **Importante:** el sitio es estático, así que el estado se congela en el
> momento del build. Configurá un *Deploy Hook* diario en Vercel (Settings →
> Git → Deploy Hooks) y llamalo con un cron para que el estado se mantenga al
> día sin tocar nada.

---

## Cómo agregar fotos

1. Dejá el archivo en `src/assets/fotos/<unidad>/`, sin comprimir y en el
   tamaño más grande que tengas. Astro genera AVIF, WebP y JPEG en varios
   anchos, con las dimensiones puestas en el HTML.
2. Declarala en el YAML de la unidad:

```yaml
hero:
  src: ../../assets/fotos/restaurante/salon-atardecer.jpg
  alt: El salón del restaurante al atardecer, con las mesas puestas y la rompiente detrás
  foco: centro          # centro | arriba | abajo, para cuando la foto se recorta

galeria:
  - src: ../../assets/fotos/restaurante/terraza.jpg
    alt: La terraza del restaurante con sombrillas y el mar de fondo al mediodía
```

**El `alt` es contenido, no relleno para el linter:** el esquema exige al menos
15 caracteres y el build falla si ponés «foto del hotel». Describí lo que se ve.

Mientras una unidad no tenga foto, el sitio muestra un marcador honesto con el
color de esa unidad en vez de una foto de stock. Cargar la foto es lo único que
hace falta para que desaparezca.

La galería de `/galeria` no tiene contenido propio: es una vista agrupada de
las fotos que ya declaraste en cada unidad. No hay que cargar nada dos veces.

---

## Fuentes

Ramona y Apparel son de licencia comprada. Dejá los archivos acá:

```
public/fonts/ramona-bold.woff2
public/fonts/ramona-light.woff2
public/fonts/apparel-italic.woff2
```

y **descomentá el bloque `@font-face` en `src/styles/fuentes.css`**. Está
comentado a propósito: pedir archivos que no existen ensucia la consola con
404. Hasta entonces el sitio usa Poppins, que es la pila de reserva prevista.

Poppins se sirve desde Google Fonts. Si querés self-hostearla —vale la pena
para el escenario de conexión móvil mediocre— dejá los `woff2` en la misma
carpeta, agregá sus `@font-face` y sacá el `<link>` de `src/layouts/Base.astro`.

---

## Deploy

Vercel, salida estática. Sin funciones serverless, sin variables de entorno y
sin base de datos: no hay backend que mantener.

- **Framework preset:** Astro
- **Build:** `npm run build`
- **Output:** `dist`

`sitemap-index.xml` y `robots.txt` se generan solos. Antes de publicar,
cambiá `site` en `astro.config.mjs` si el dominio final no es
`https://miradorwaikiki.com`.

---

## Decisiones que conviene no revertir sin pensarlo

- **El ámbar `#C3802F` es sólo acción.** Si algo es ámbar, se puede tocar.
- **Nunca texto blanco sobre ámbar** (contraste 3.26). El botón es ámbar con
  tinta verde profundo (5.11).
- **No hay una sola sombra en el sitio.** Las secciones se separan por cambio
  de material y por la onda de pincel del manual de marca.
- **Cada unidad tiene su color** y ese color es la señalética: verde
  restaurante, arena hotel, teal balneario, terracota eventos.
- **Las cuatro puertas van en el primer scroll del home.** Nadie tiene que
  atravesar tres secciones de casamientos para reservar una mesa.

---

## Pendientes

Marcados con `# TODO` en los YAML:

- **Confirmar la dirección.** `Av. de los Trabajadores 4320` la saqué de
  fichas del hotel en directorios, no de vos. Faltan las coordenadas exactas.
- **Confirmar el link de Woki** con un click (ver arriba).
- WhatsApp, teléfono e Instagram propios de cada unidad (hoy todos usan el
  número del brandboard, `223 546 6065`).
- URL pública de Woki.
- Servicios y modalidades del balneario, capacidades por montaje en eventos,
  y confirmar horarios y datos del restaurante.
- Fotos de cada unidad y los `woff2` de Ramona y Apparel.
- Logo en vectorial original. El que usa el sitio
  (`src/assets/marca/isologo.svg`) está extraído del PDF del brandboard: se ve
  perfecto, pero conviene reemplazarlo por el archivo del estudio.
