# Mirador Waikiki — Recomendación de stack y plan de diseño

Documento de aprobación. No hay código de producción hasta que esto esté aprobado.
Fuentes: brief `promptmiradorwaikiki.md` + Brandboard (Mélange ideas lab, 19 páginas).

---

## 1. Stack recomendado: Astro

**Astro 5 + Content Collections tipadas con Zod + Tailwind v4 (capa de tokens) + deploy estático.**

Por qué, en tres frases: el sitio es 95 % contenido estático con mucha foto y video y
cero lógica de aplicación —toda la conversión sale a WhatsApp y a Woki—, así que el
runtime de React que Next.js envía de arriba es peso puro para un menú, una galería y
un acordeón de carta. Astro entrega **0 KB de JavaScript por defecto** y sólo hidrata
las tres o cuatro islas que realmente lo necesitan, que es exactamente la diferencia
entre abrir bien y abrir mal con 3G marplatense en enero. Además, sus Content
Collections con esquema Zod son literalmente el requisito «contenido separado de la
maquetación y tipado»: el sitio no compila si falta un `alt`, un horario o una foto.

Lo que se pierde y por qué no importa acá: no hay ISR, ni server actions, ni middleware
de sesión. Nada de eso aplica a un sitio sin login, sin base de datos y sin checkout.

| Pieza | Elección |
|---|---|
| Framework | Astro 5, `output: 'static'` |
| Estilos | Tailwind v4 con `@theme` para los tokens de marca; sin CSS global suelto |
| Contenido | `src/content/**.yaml` + esquemas Zod en `src/content.config.ts` |
| Imágenes | `astro:assets` (`<Picture>`), AVIF + WebP + fallback, `width`/`height` siempre |
| Video | Cloudflare Stream para el clip largo; MP4 auto-hosteado de ≤2 MB para el loop corto |
| Formulario de eventos | endpoint serverless único + Resend (o Formspree si prefieren cero infra) |
| Deploy | Vercel o Netlify, ambos estáticos; decisión suya, da igual técnicamente |
| Tipografías | self-hosted `woff2`, `font-display: swap`, subset latino |

**Nota sobre tu experiencia con Next.js:** el salto es chico. Astro usa la misma
sintaxis de expresiones JSX en los `.astro`, mismo file-based routing, mismo mental
model de componentes. Lo que cambia es que por defecto todo es HTML.

---

## 2. Plan de diseño

### 2.1 La tensión que hay que resolver primero

El brandboard le da a Mirador Waikiki **exactamente la misma paleta que Mar Eventos**:
Arena / Teal / Verde / Terracota / Ámbar. Si además le pongo la misma gramática
editorial (crema + serif de alto contraste), los dos sitios van a ser el mismo sitio con
otro logo, que es justo lo que el brief pide evitar.

La separación no la hago cambiando pigmentos —la marca ya está definida y no es mía—
sino **cambiando la gramática**:

|  | Mar Eventos | Mirador Waikiki |
|---|---|---|
| Voz tipográfica | Cormorant Garamond, editorial de lujo | **Ramona**: rotulada, redondeada, cortada a mano |
| Superficie base | crema | **hueso frío + verde profundo casi negro** |
| Recursos | filetes finos, aire | **kits de tinta y pincel del manual** (conchas, ondas, flora) |
| Registro | ceremonia, atemporal | **costa, oficio, estacionalidad, «desde 1999»** |

Mismos pigmentos, tono opuesto. Se sienten de la misma familia sin ser el mismo diseño.

### 2.2 Paleta

Todos los valores salen del manual. Mi aporte es la **asignación de rol**: en este sitio
el color es señalética, no decoración.

```
ESTRUCTURA
--mw-verde-profundo  #052319   tinta principal + superficie oscura (es el verde de los títulos del manual)
--mw-hueso           #F1F1F1   superficie clara base
--mw-crudo           #EEEBDB   superficie cálida alternativa (textura papel del manual)

UNIDADES  (el color identifica la unidad en todo el sitio)
--mw-verde           #4C6F39   RESTAURANTE
--mw-teal            #5D878A   BALNEARIO
--mw-arena           #BDA38C   HOTEL ILI ILI
--mw-terracota       #A2745E   EVENTOS

ACCIÓN  (reservado, no se usa para nada más en todo el sitio)
--mw-ambar           #C3802F   CTA y estados activos

DERIVADOS (sólo por contraste, ver abajo)
--mw-teal-700        #53797C   texto chico sobre teal
--mw-terracota-700   #916854   texto chico sobre terracota
```

**El ámbar reservado sólo para acciones es la decisión de color más importante del
plan.** Significa que cualquier cosa naranja en pantalla es algo en lo que se puede
hacer clic, y que un CTA nunca se confunde con una sección. También impide que el sitio
caiga en el default «todo crema con acento terracota»: acá la terracota es el color de
Eventos y nada más.

**Contrastes medidos (WCAG 2.1):**

| Combinación | Ratio | |
|---|---|---|
| `#052319` sobre `#F1F1F1` | 14.75 | AAA — texto corrido |
| Blanco sobre `#052319` | 16.65 | AAA — modo oscuro |
| Blanco sobre `#4C6F39` | 5.77 | AA |
| **`#052319` sobre ámbar `#C3802F`** | **5.11** | **AA — así van los botones** |
| Blanco sobre ámbar | 3.26 | ✗ falla — **prohibido** |
| Ámbar como texto sobre hueso | 2.88 | ✗ falla — **prohibido** |
| Blanco sobre teal `#5D878A` | 3.96 | sólo ≥24 px |
| Blanco sobre terracota `#A2745E` | 4.04 | sólo ≥24 px |

Reglas que salen de esa tabla y quedan escritas en el sistema:
- El botón primario es **fondo ámbar con tinta verde profundo**, nunca con texto blanco.
- Teal y terracota son colores de superficie y de borde. Para texto chico sobre ellos se
  usan los `-700`.
- Todo texto sobre foto va sobre un velo de `#052319` al 55–70 %, no sobre gradiente
  transparente al azar. El velo se valida contra la foto más clara del set.

### 2.3 Tipografía

Del manual salen cuatro familias. Cuatro en una web es ruido, así que **dos trabajan y
dos quedan de excepción**:

| Rol | Familia | Uso |
|---|---|---|
| Display | **Ramona Bold** | H1, H2, nombres de unidad, números grandes. Tracking cerrado (-0.02em), nunca en cuerpo de texto |
| Texto y UI | **Poppins** Regular/Medium | todo lo demás: párrafos, carta, horarios, botones, nav, footer |
| Firma editorial | **Apparel Regular Italic** | **una sola línea por página**. Ej. «Una propuesta diferente, frente al mar». Si aparece dos veces en una página, sobra |
| Burford Rustic | — | **fuera de la web.** Queda para piezas gráficas. En pantalla chica se rompe y compite con Ramona |

Escala tipográfica fluida con `clamp()`, base 17 px móvil / 18 px desktop, medida de
línea 62–70 caracteres.

⚠ **Ramona, Apparel y Burford son fuentes comerciales.** Una licencia de escritorio
—la que se compra para diseñar en Illustrator— **no habilita a servirlas desde la web**.
Necesito saber si la licencia comprada incluye webfont. Si no:
- **Ramona** es la identidad; vale la pena comprar la licencia web. Es el único gasto
  de fuentes que recomiendo hacer.
- **Poppins** ya es libre (OFL, Google Fonts). Sin problema.
- **Apparel**: si no hay licencia web, la reemplazo por *Bodoni Moda Italic* (libre),
  que comparte el contraste alto y el eje vertical. Al usarse en una sola línea por
  página, la sustitución es casi invisible.
- Si tampoco se puede Ramona: se cae a *Poppins Bold* muy trackeada y **el logo carga
  el peso de identidad solo**. Es la peor de las opciones y hay que evitarla.

### 2.4 Concepto de layout: «La cornisa»

El logo del complejo es literalmente **un techo sobre una ola**, y el predio está
literalmente sobre las rocas mirando el agua. Ese es el sistema: **todo se organiza
respecto de una línea de horizonte**.

Una onda de pincel del *Kit Pincel* del manual, de 2 px, recorre el sitio como divisor
estructural. Las secciones no se separan con márgenes y sombras: se separan porque
**cambia el material** —hueso, crudo, verde profundo, foto a sangre— y la línea marca el
corte. Consecuencia dura del sistema: **no hay `box-shadow` en ningún lado del sitio.**
Ni una. Eso solo ya lo saca del 90 % de los sitios de hotelería.

### 2.5 Wireframe — Home

```
┌────────────────────────────────────────────────────────────────────────┐
│ ⌂MW   Restaurante  Hotel  Balneario  Eventos   Contacto  [ Reservar ]  │ barra hueso, 64px, sin sombra
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ███ FOTO A SANGRE — el predio desde el aire, agua verde-gris ███     │ 62vh desktop / 52vh mobile
│                                                                        │ imagen fija, NO video
│   MAR DEL PLATA · DESDE 1999                       ← eyebrow Poppins   │
│   Cuatro maneras de estar                          ← H1 Ramona Bold    │
│   frente al mar.                                      alineado izq.    │
│                                                                        │
│  ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿  │ ← horizonte de pincel
├──────────────┬──────────────┬──────────────┬──────────────────────────┤
│ ▌RESTAURANTE │ ▌HOTEL       │ ▌BALNEARIO   │ ▌EVENTOS                 │ ← LAS CUATRO PUERTAS
│ ▌   verde    │ ▌   arena    │ ▌   teal     │ ▌  terracota             │   borde 5px = color de unidad
│              │              │              │                          │
│   [ foto ]   │   [ foto ]   │   [ foto ]   │   [ foto ]               │   4:5, misma familia de encuadre
│              │              │              │                          │
│  Cocina de   │  Ili Ili     │  Carpas y    │  Casamientos             │
│  mar y fuego │  Boutique    │  sombrillas  │  frente al mar           │
│              │              │              │                          │
│  ● Abierto   │  ● Abierto   │  ○ Temporada │  ● Agenda 2026           │ ← ESTADO REAL, desde datos
│    hoy 20-00 │    todo el   │    desde 1/12│    abierta               │
│              │    año       │              │                          │
│  Reservar    │  Consultar   │  Reservar    │  Pedir                   │ ← CTA ámbar/tinta verde
│  mesa  →     │  dispon. →   │  carpa  →    │  presupuesto →           │   dice exactamente qué hace
└──────────────┴──────────────┴──────────────┴──────────────────────────┘
   ↑ Esto entra en el primer scroll. Nadie atraviesa casamientos para reservar mesa.

┌────────────────────────────────────────────────────────────────────────┐
│  fondo VERDE PROFUNDO #052319                                          │
│                                                                        │
│   « Una propuesta diferente, frente al mar. »   ← Apparel italic, la   │
│                                                    única del home      │
│   Un mismo predio sobre las rocas: se almuerza donde se veranea,       │
│   se duerme donde se casa. 26 años en el mismo lugar.                  │
│                                                                        │
│   [ ▶ video 20s, muteado, poster, sólo desktop ]  El predio desde arriba│
└────────────────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────────────────┐
│  LA TEMPORADA AHORA        fondo crudo                                 │
│  Tira horizontal con lo que está pasando este mes, desde `agenda.yaml`:│
│  Cena show viernes y sábados · Brunch de fin de semana · Carpas 25/26  │
├────────────────────────────────────────────────────────────────────────┤
│  CÓMO LLEGAR — mapa estático + dirección + estacionamiento + horarios  │
├────────────────────────────────────────────────────────────────────────┤
│  Footer verde profundo: 4 unidades / WhatsApp por unidad / IG / legales │
└────────────────────────────────────────────────────────────────────────┘
```

**Móvil:** hero 52vh, y las cuatro puertas inmediatamente debajo como cuatro franjas
apiladas de ~150 px (foto a la izquierda 40 %, texto y CTA a la derecha). Las cuatro
entran en un scroll y medio. Nada de carrusel: un carrusel esconde tres de las cuatro
unidades, que es exactamente el problema que hay que resolver.

### 2.6 Wireframe — Página de unidad (Restaurante)

Las cuatro páginas comparten esqueleto y cambian color, contenido y bloque específico.
Cada una funciona como landing de entrada directa: `<h1>` propio, `estado` arriba de
todo, CTA visible sin scroll.

```
┌────────────────────────────────────────────────────────────────────────┐
│ ⌂MW  Restaurante* Hotel  Balneario  Eventos  Contacto  [ Reservar mesa ]│ * activo = subrayado verde
├────────────────────────────────────────────────────────────────────────┤
│  ███ FOTO A SANGRE del salón con el mar detrás ███          45vh       │
│  ▌ RESTAURANTE                                    ← barra verde 5px    │
│  Cocina de mar y fuego, sobre las rocas.          ← H1 Ramona          │
│  ● Abierto hoy hasta las 00:00                    ← estado calculado   │
│  [ Reservar en Woki ]  [ Reservar por WhatsApp ]  ← primario / secund. │
│ ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿  │
├──────────────────────────────────┬─────────────────────────────────────┤
│  EL LUGAR                        │  HORARIOS            fondo crudo    │
│  2 o 3 párrafos reales sobre la  │  Lun a jue  20:00 – 00:00           │
│  cocina, la terraza, la vista,   │  Vie y sáb  12:00–16:00 · 20:00–01:00│
│  los grupos. Sin «bienvenidos a  │  Domingo    brunch 10:00 – 15:00    │
│  nuestro restaurante».           │  ─────────────────────────────────  │
│                                  │  Terraza · Vista al mar · Grupos    │
│  ✦ conchilla en tinta del Kit    │    hasta 40 · Cena show vie y sáb   │
│    Mar, marca de agua a 8 %      │  Tel · WhatsApp · Cómo llegar       │
├──────────────────────────────────┴─────────────────────────────────────┤
│  LA CARTA                                                              │
│  Acordeón por sección, HTML de verdad, no un PDF.                      │
│  ▼ Entradas   ▼ Del mar   ▼ De la parrilla   ▼ Postres   ▼ Bebidas     │
│  ┌──────────────────────────────────────────────────────────────┐      │
│  │ Rabas de la casa                                    $ 00.000 │      │
│  │ con alioli de limón y pimentón ahumado                       │      │
│  └──────────────────────────────────────────────────────────────┘      │
│  Nota de vigencia de precios · [ Descargar carta en PDF ] (secundario) │
├────────────────────────────────────────────────────────────────────────┤
│  GALERÍA — 6 a 9 fotos, grilla asimétrica, lightbox sin librería       │
├────────────────────────────────────────────────────────────────────────┤
│  TAMBIÉN EN EL COMPLEJO      fondo verde profundo                      │
│  → Hotel Ili Ili   → Balneario   → Eventos     ← el cross-sell del brief│
├────────────────────────────────────────────────────────────────────────┤
│  Footer                                                                │
└────────────────────────────────────────────────────────────────────────┘

MÓVIL: barra inferior fija de 56px, sólo con [ Reservar mesa ], fondo ámbar,
que aparece recién después de pasar el hero y se oculta al llegar al footer.
No tapa contenido: el <main> lleva padding-bottom equivalente.
```

### 2.7 Los cuatro principios

1. **Un solo horizonte.** Todo se ordena respecto de una línea. Las secciones se separan
   por cambio de material y por la onda de pincel del manual, nunca por sombras.
   Cero `box-shadow` en el sitio.
2. **El color es señalética.** Verde = restaurante, arena = hotel, teal = balneario,
   terracota = eventos, ámbar = acción y nada más. Se sabe en qué unidad se está por el
   color del borde antes de leer el título.
3. **Cuatro puertas arriba de todo.** La bifurcación se resuelve en el primer scroll,
   con estado real y CTA explícito en cada puerta. La historia del complejo integrado va
   después, no antes.
4. **El sitio sabe en qué mes está.** Cada unidad declara sus rangos de temporada y sus
   horarios en el archivo de contenido, y el sitio calcula y muestra el estado
   («abierto hoy hasta las 00», «temporada desde el 1/12»). Un complejo costero de Mar
   del Plata vive de la estacionalidad; ocultarla es la mentira más común del rubro.

### 2.8 Autocrítica contra los defaults del rubro

El brief pedía revisar el plan y cambiar lo que fuera genérico. Esto es lo que cambié:

| Default del rubro | Qué hice |
|---|---|
| Hero de video a pantalla completa, headline de tres palabras centrado, flecha hacia abajo | **Eliminado.** Foto fija, headline alineado a la izquierda, y el primer scroll son las cuatro puertas. El video se mudó a mitad de página, donde tiene una razón concreta —mostrar la escala del predio desde el aire— y donde se puede no descargar en móvil. La flecha hacia abajo no existe: las puertas ya asoman. |
| Crema + serif de alto contraste + acento terracota | **Reasignado.** La tinta es verde profundo `#052319`, el display es una rotulada redondeada y no una Didone, la terracota bajó a ser el color de una unidad, y el ámbar quedó exclusivo de acciones. Es la paleta del manual con otra jerarquía. |
| Grilla de cards idénticas con la misma sombra suave | **Eliminado.** Bloques a sangre con borde de color, sin sombra, sin radio, con encuadres distintos por unidad. |
| Animaciones de entrada por sección y transición en cada card | **Un solo momento orquestado:** la línea de horizonte del home se dibuja una vez, y los bordes de color de las cuatro puertas entran con 120 ms de desfase. Nada más se anima en todo el sitio salvo hover, foco y el acordeón. Con `prefers-reduced-motion`, todo aparece en estado final. |
| «Bienvenidos a nuestro complejo, un lugar único…» | **Copy de la marca real**, tomado del tono del propio brandboard: «Una propuesta diferente, frente al mar», «Cena show todos los viernes y sábados», «Un brunch a tu medida». |
| Fotos de stock de agua turquesa | **El agua de Mar del Plata es verde-gris.** La foto principal del brandboard (surfistas desde arriba, agua oscura) manda: el tratamiento fotográfico va a favor de ese color, no de un Caribe que no existe acá. |
| «Desde 1999» escondido en el footer | **Sube al hero.** 26 años en el mismo lugar es la diferencia contra el balneario nuevo de al lado, no un dato legal. |

---

## 3. Ajustes propuestos a la arquitectura de información

Estructura del brief, con tres cambios:

```
/                    Home — cuatro puertas arriba
/restaurante         + carta en acordeón en la misma página (sin subruta, sin PDF principal)
/eventos
/hotel
/balneario
/galeria             ← SÍ, pero como vista filtrada de las mismas fotos ya declaradas
/contacto
/legales
```

1. **La galería queda, pero sin costo de contenido.** Cada unidad ya declara sus fotos
   con `alt` en su YAML; `/galeria` es una vista agregada con filtro por unidad. No hay
   que cargar nada dos veces, y captura las búsquedas de «mirador waikiki fotos» y el
   tráfico de Instagram que no busca una unidad puntual.
2. **La carta va en HTML en `/restaurante`, no en PDF.** Un PDF en móvil se abre en un
   visor, pesa, no se indexa como contenido y obliga a pellizcar para leer precios. El
   PDF queda como descarga secundaria.
3. **Eventos: recomiendo la Opción A** (landing completa con contenido, galería y
   formulario propios, mencionando a Mar Eventos como productora, con link claro a
   `mareventos.com.ar` para la producción integral). Razón: la búsqueda «salón para
   casamientos frente al mar Mar del Plata» tiene que aterrizar en el sitio del venue,
   que es el activo. Derivar antes de mostrar el espacio regala esa consulta. La
   profundidad de producción sí vive en Mar Eventos.

---

## 4. Estructura de carpetas y archivos de contenido

Cómo vas a editar el sitio después de que esté hecho:

```
src/
├── content/
│   ├── complejo.yaml            nombre, «desde 1999», dirección, coordenadas, redes
│   ├── contacto.yaml            WhatsApp y teléfono POR UNIDAD + mensajes prellenados
│   ├── agenda.yaml              lo que pasa este mes (cena show, brunch, apertura)
│   ├── unidades/
│   │   ├── restaurante.yaml     hero, intro, horarios, temporada, carta, galería, SEO
│   │   ├── hotel.yaml           + habitaciones[], servicios[], check-in/out
│   │   ├── balneario.yaml       + servicios[], modalidades[], tarifas[]
│   │   └── eventos.yaml         + tipos[], capacidades[], espacios[], qué incluye
│   └── legales/
│       ├── terminos.md
│       └── privacidad.md
├── content.config.ts            ESQUEMAS ZOD — la red de seguridad
├── assets/fotos/<unidad>/       originales pesados; Astro genera AVIF/WebP
└── components/, layouts/, pages/, styles/tokens.css
```

Ejemplo de lo que vas a tocar para cambiar un plato:

```yaml
# src/content/unidades/restaurante.yaml
carta:
  - seccion: Del mar
    items:
      - nombre: Rabas de la casa
        descripcion: con alioli de limón y pimentón ahumado
        precio: 18500          # borrar la línea = el plato sale sin precio
```

Y para cambiar a dónde va un botón:

```yaml
# src/content/contacto.yaml
restaurante:
  whatsapp: "5492235466065"
  mensaje: "Hola! Quiero reservar una mesa en Mirador Waikiki."
  woki: "https://..."
```

Ningún componente contiene un `wa.me` ni un texto de venta. Todos los CTA se arman con
un helper `waLink(unidad, contexto)` que lee de ese archivo. Cambiar un número es tocar
una línea.

Los esquemas Zod hacen que el build **falle** si falta un `alt`, si un horario está mal
formado o si una foto referenciada no existe. Es el reemplazo del CMS: la validación la
hace el compilador en vez de un panel.

---

## 5. Lo que necesito para seguir

### Decisiones (bloquean la estructura, las necesito antes de codear)
1. **Idioma:** ¿sólo español, o español + inglés? Cambia rutas y archivos desde el día uno.
2. **Eventos:** ¿Opción A (landing completa, mi recomendación) u Opción B (derivar)?
3. **Deploy:** Vercel o Netlify.
4. **Precios:** ¿la carta va con precios? ¿Las tarifas del balneario van en el sitio?
5. **Licencia de fuentes:** ¿la licencia de Ramona / Apparel incluye uso web?

### Contenido (bloquea las páginas, no el arranque)
- Carta del restaurante, tipo de cocina, horarios y días reales.
- Habitaciones del hotel: tipos, capacidad, servicios, check-in/out, canal de reserva.
- Balneario: temporada, servicios, modalidades, tarifas.
- Eventos: tipos, capacidades por montaje, qué incluye, espacios del predio.
- Dirección exacta y coordenadas, estacionamiento, cómo llegar.
- WhatsApp, teléfono e Instagram **por unidad**.
- URL del widget o link público de **Woki**.

### Assets
- Logo en **vectorial (SVG o AI)**: isologo completo, isotipo solo y monograma MW.
  Del PDF puedo extraerlo, pero prefiero el original.
- Fotos por unidad, las mejores 8–12 de cada una, sin comprimir.
- Videos, con una línea de qué muestra cada uno.

Del brandboard ya tomé el WhatsApp **223 546 6065** (aparece en la pieza de Cena Show).
Lo asumo como el del restaurante hasta que me digas lo contrario.

---

## Apéndice — Decisiones tomadas durante la implementación

El sitio está construido. Tres cosas cambiaron respecto de este plan, y
conviene que queden escritas:

1. **Tailwind quedó afuera.** Astro alcanza los estilos por componente y les
   pone un hash, así que el problema que el brief marcaba —selectores que se
   cancelan entre sí en los espaciados entre secciones— ya está resuelto de
   fábrica. Agregar Tailwind sumaba una dependencia y un paso de build sin
   comprar nada a cambio. Quedó CSS propio con `src/styles/tokens.css` como
   única fuente de verdad.

2. **En móvil las cuatro puertas van en grilla de 2×2, no en franjas
   apiladas.** Apiladas, la cuarta unidad quedaba fuera de la primera
   pantalla. En 2×2 entran las cuatro juntas, que es el principio que había
   que defender.

3. **El logo y los recursos gráficos salieron del PDF del brandboard.** El
   isologo, la onda del Kit Pincel que separa las secciones y las cuatro
   piezas del Kit Mar están extraídos como vectores limpios y se pintan con
   `currentColor`. Son los archivos reales de la marca, no aproximaciones.
   Igual conviene reemplazarlos por los originales del estudio.

Además: **Eventos quedó en Opción B**, como decidiste. La página muestra el
espacio y deriva la producción a mareventos.com.ar. Mantengo mi recomendación
de que la Opción A capturaría mejor la búsqueda de «salón para casamientos
frente al mar Mar del Plata», pero el sitio está armado de manera que pasar de
B a A es agregar contenido en `eventos.yaml`, no rehacer nada.
