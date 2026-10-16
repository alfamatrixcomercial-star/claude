# Estrategia: cómo vender Picante (low ticket + ugly ads)

> Versión para Latinoamérica (en español). La versión principal para USA está en `negocio/ESTRATEGIA.md` y `negocio/UGLY-ADS.md`; el sitio en español está en `sitio-es/`.

## 1. La idea en una línea

Un juego para parejas que se abre desde el celu, se vende barato (lo que sale una birra), se compra por impulso desde un anuncio “feo” en Reels/TikTok y se entrega al instante con un link + código.

**Por qué funciona este nicho:**
- El dolor es universal: rutina, cansancio, cada uno con su celu.
- La compra es por impulso y para *esta noche*: no hay que pensarla.
- El precio bajo elimina la objeción (“si no sirve, perdí una birra”).
- Es privado: no hay que ir a un sex shop ni pedirle nada a nadie.
- Margen casi 100%: el producto es digital, se vende infinitas veces.

**Importante:** no uses el nombre, diseño ni textos de “El Juego del Deseo” ni de ningún competidor. Picante es tuyo, con nombre, contenido y diseño propios. Si querés otro nombre, se cambia en un rato.

---

## 2. La oferta

| Pieza | Qué es | Precio sugerido |
|---|---|---|
| **Producto principal** | Picante: niveles Romántico, Picante y Fuego (117 cartas) + ruleta + dados + 30 mensajes + Reto 7 Noches | Equivalente a **USD 4 a 7** |
| **Order bump** (casilla al pagar) | Pack Sin Filtro: nivel 4 (35 cartas) + dados con todas las zonas | **USD 2 a 4** |
| **Upsell** (después de pagar) | Segundo producto, por ejemplo “Noche Perfecta: 30 citas en casa” (ver TAREAS.md) | USD 7 a 12 |
| **Garantía** | 7 días, devolución total | — |

**Precio en Argentina:** tomá como referencia el precio de una cerveza de litro o un atado de cigarrillos *del día* y poné el producto en ese número o un poquito abajo. Así el anuncio “sale menos que una birra” es verdad. En la landing se cambia en `sitio-es/index.html` → `OFERTA.precio`.

**No inventes un “precio antes”.** Si nunca lo vendiste más caro, dejá `precioAntes` vacío. Si hacés precio de lanzamiento, que sea real: después subilo.

---

## 3. El embudo (de punta a punta)

```
Anuncio feo (Reels / TikTok / Stories)
        │  toca “Más información”
        ▼
Landing  sitio-es/index.html ──►  “Probá la demo gratis” (app en modo prueba)
        │  toca el botón verde                   │ se le acaban las 5 cartas
        ▼                                        ▼
Checkout (Hotmart / Kiwify / Mercado Pago)  ◄── “Desbloquear todo”
   + casilla Pack Sin Filtro (order bump)
        │  paga
        ▼
Página de gracias  sitio-es/gracias.html →  botón “ENTRAR AL JUEGO” (link con código)
   + mail automático de la plataforma con link y código
        ▼
Juegan esa noche  →  le pedís un mensaje/captura de cómo les fue (testimonios reales)
```

La demo gratis es clave: el que la prueba y se queda con ganas compra mucho más que el que solo leyó la landing.

---

## 4. Dónde cobrar

| Opción | Para quién | Pros | Contras |
|---|---|---|---|
| **Hotmart** | Vender a toda Latinoamérica | Cobra en moneda local en muchos países, tiene order bump, upsell, garantía y afiliados | Revisa el producto: tiene que presentarse como juego para parejas, sin contenido explícito |
| **Kiwify** | Alternativa a Hotmart | Checkout rápido, order bump | Más fuerte en Brasil |
| **Mercado Pago (link de pago)** | Solo Argentina, para validar rápido | Todo el mundo lo tiene, confianza total | La entrega del código es manual (por WhatsApp) salvo que armes la automatización (TAREAS.md, tarea de códigos únicos) |

**Recomendación:** arrancá con lo que puedas activar hoy. Si es Mercado Pago, perfecto para las primeras 20–50 ventas (entregás por WhatsApp y de paso juntás testimonios). Cuando funcione, pasá a Hotmart para automatizar y escalar.

Las comisiones de cada plataforma cambian; antes de fijar el precio, mirá la tabla actual de la que elijas.

**Cómo describir el producto en la plataforma** (para que no te lo rechacen): “Juego digital para parejas adultas: preguntas, retos y dinámicas para mejorar la conexión y salir de la rutina. +18.” Sin fotos con piel, sin palabras explícitas.

---

## 5. Cómo entregar el acceso

1. Elegí tus códigos (no uses los de ejemplo). Abrí `herramientas/generar-codigo.html`, escribí el código y copiá la “huella”.
2. Pegá la huella en `sitio-es/app/index.html` → `CONFIG.codigosCompleto` (y la del pack en `codigosExtra`).
3. Poné el código principal en `sitio-es/gracias.html` → `ENTREGA.codigo`.
4. En la plataforma de pago:
   - **Página de agradecimiento / redirect:** `https://TU-DOMINIO/gracias.html`
   - **Mail de entrega del producto principal:** el link `https://TU-DOMINIO/app/?codigo=TUCODIGO`
   - **Mail de entrega del Pack Sin Filtro:** `https://TU-DOMINIO/app/?codigo=TUCODIGOEXTRA`
5. En la app, `CONFIG.linkCompra` y `CONFIG.linkPackExtra` → tus links de checkout (para el botón “Todavía no tengo código”).
6. En la landing, `OFERTA.linkPago` → tu link de checkout.

**Sobre la seguridad:** es un sistema simple de código compartido. Alguien puede pasarle el link a un amigo. Para un producto de USD 5 está bien (el costo de perder alguna venta es menor que el de complicar la compra). Si empieza a venderse mucho, la mejora es un código único por comprador (está en TAREAS.md).

Cada tanto cambiá el código (agregás la huella nueva y dejás la vieja para no romperle el acceso a los que ya compraron).

---

## 6. Subirlo a internet en 5 minutos (gratis)

1. Entrá a **app.netlify.com/drop** (o creá cuenta gratis en Netlify).
2. Arrastrá la carpeta **`sitio-es`** entera.
3. Te da un link tipo `https://algo-raro.netlify.app`. En “Site settings” le cambiás el nombre (ej. `picante-juego.netlify.app`).
4. Listo: `/` es la landing, `/app/` es el juego, `/gracias.html` es la de gracias.

Más adelante podés comprar un dominio propio (ej. `jugapicante.com`) y conectarlo en Netlify. Alternativas igual de buenas: Vercel, Cloudflare Pages, GitHub Pages.

---

## 7. Los números (para no perder plata)

Fórmulas:
- **Ticket promedio** = precio + (precio del bump × % que lo agrega)
- **Ingreso neto por venta** = ticket promedio − comisión de la plataforma
- **CPA máximo (punto de equilibrio)** = ingreso neto por venta
- **CPA esperado** = CPM ÷ (1000 × CTR × conversión de la landing)

Ejemplo con USD 5,90 + bump de USD 2,90 que agrega el 30%, y ~10% de comisión:
- Ticket promedio ≈ 5,90 + 0,87 = **USD 6,77**
- Neto ≈ **USD 6,00** → si cada venta te cuesta menos de USD 6 en anuncios, ganás.

| CPM | CTR | Conversión landing | CPA | ¿Gana? |
|---|---|---|---|---|
| USD 2 | 1,0% | 2% | USD 10,00 | ❌ perdés |
| USD 2 | 1,5% | 3% | USD 4,44 | ✅ ganás ~1,50 por venta |
| USD 2 | 2,0% | 4% | USD 2,50 | ✅✅ ganás ~3,50 por venta |

Lo que más mueve los números es el **CTR** (el gancho del anuncio) y la **conversión** (landing + demo). Por eso se testean muchos anuncios.

En low ticket la ganancia por venta es chica: el negocio está en el **volumen** y en el **upsell**. Un upsell de USD 9 que compra 1 de cada 10 suma +USD 0,90 por cliente sin gastar más en anuncios.

---

## 8. Plan de lanzamiento (primeras 2 semanas)

**Día 1–2: dejarlo andando**
- [ ] Cambiar códigos de ejemplo, precio y links (punto 5).
- [ ] Subir `sitio-es/` a Netlify y probar la compra completa con tu propia tarjeta (después te devolvés la plata).
- [ ] Crear el Pixel de Meta y conectarlo a la landing y a la plataforma de pago.

**Día 3: anuncios**
- [ ] Subir los 5 anuncios estáticos de `negocio/latam/anuncios/` + grabar 3 videos de `negocio/latam/UGLY-ADS.md`.
- [ ] Campaña de Ventas, presupuesto chico (USD 5–10 por día por conjunto), público abierto +18.

**Día 4–10: testear**
- [ ] Cada 48 h, apagar lo que no vende y duplicar lo que vende (reglas en `negocio/latam/UGLY-ADS.md`).
- [ ] Mandar 2 creativos nuevos por semana. Los anuncios se “queman”: hay que reponerlos.

**Día 7+: prueba social real**
- [ ] A cada comprador, a los 2 días: “¿Cómo les fue con el juego? 😏”. Con permiso, usar las respuestas como testimonios (sin nombre ni foto si no quieren).
- [ ] Activar la sección de testimonios de la landing (está oculta hasta que tengas reales).

**Día 10+: escalar**
- [ ] Subir presupuesto 20–30% cada 48 h en lo que funciona.
- [ ] Lanzar versión para otros países (TAREAS.md) y el upsell.

---

## 9. Lo legal y lo que NO hacer

- **+18 siempre:** público de anuncios mayor de 18, aviso en la app y en la landing (ya está).
- **No inventes testimonios, números de ventas, ni “quedan 3 lugares”.** Además de ser ilegal en muchos países, Meta te cierra la cuenta publicitaria.
- **No prometas resultados** tipo “salvá tu matrimonio”. Prometé lo que es: un juego divertido para esta noche.
- **Argentina:** si vendés online a consumidores tenés que tener un **“Botón de arrepentimiento”** visible (ya está en el pie de la landing, apuntando a términos). Y para facturar necesitás estar inscripto (monotributo). Consultalo con un contador.
- **Términos y privacidad:** completá `sitio-es/terminos.html` con tus datos.
- **Contenido:** el juego es picante pero no explícito, y siempre consensuado (regla del “paso”). Mantenelo así: es lo que te deja anunciar y cobrar sin que te bloqueen.
