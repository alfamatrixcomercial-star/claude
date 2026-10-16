# Estrategia USA: vender Picante en dólares desde Argentina

> La versión para Latinoamérica (en español) está en `negocio/latam/`. El sitio en español, en `sitio-es/`.

## 1. La idea

Mismo juego, mercado más grande y que paga en dólares. Un juego para parejas que se abre desde el celu, se compra por impulso desde un anuncio con pinta casera (ugly ad) y se entrega al instante con un link + código.

**Lo que cambia en USA:**
- **Los anuncios cuestan bastante más** (en Meta, mostrar un anuncio 1.000 veces en USA cuesta varias veces más que en Argentina). Con un ticket bajo, el negocio solo cierra si cada cliente compra algo más (order bump + upsell) y si los anuncios enganchan mucho.
- **El contenido orgánico vale oro:** TikTok, Reels y YouTube Shorts en inglés traen ventas sin pagar anuncios. Empezá por ahí.
- **No hace falta que hables inglés en cámara:** se puede hacer todo con videos sin cara (texto en pantalla y grabaciones de la app) o contratando creadores de USA (ver `UGLY-ADS.md`).

---

## 2. La oferta

| Pieza | Qué es | Precio inicial |
|---|---|---|
| **Producto principal** | Picante: niveles Romantic, Spicy y Fire (117 cartas) + Spin the Wheel + Spicy Dice + 30 Flirty Texts + 7-Night Challenge | **USD 7,99** |
| **Order bump** | Unfiltered Pack: nivel 4 (35 cartas) + dados con todas las zonas | **USD 4,99** |
| **Upsell** (después de pagar) | Segundo producto, a crear (ver TAREAS.md) | USD 14,99–19,99 |
| **Garantía** | 30 días, devolución total | — |

Después probá USD 9,99 contra USD 7,99: a veces el precio un poco más alto vende casi igual y deja más margen.

**No inventes un “precio regular” tachado** si nunca lo cobraste. En USA la FTC lo considera publicidad engañosa.

Dónde se cambia: `sitio/index.html` → `OFERTA` (precio, bump, días de garantía, email de soporte, link de pago).

---

## 3. El embudo

```
Anuncio o video orgánico (TikTok / Reels / Shorts)
        ▼
Landing  sitio/index.html  ──►  “Try the free demo” (la app en modo prueba)
        ▼                                  ▼ se terminan las 5 cartas gratis
Checkout de Impultienda (USD)  ◄────  “Unlock everything”
   + casilla Unfiltered Pack (order bump)
   + upsell de 1 clic (cuando exista)
        ▼
thanks.html?code=TU-CODIGO  →  “OPEN THE GAME” (abre la app ya desbloqueada)
   + mail de entrega con el link
```

---

## 4. Cobrar con Impultienda

Según su web, Impultienda cobra en **USD con Stripe, PayPal o Whop sin necesidad de abrir una LLC**, el dinero va directo a tu cuenta y tiene **order bumps y upsells de 1 clic**. En el plan Max la comisión que publican es del 2%, más lo que cobre el procesador de pago.

**Antes de lanzar, confirmá (en su soporte, hola@impultienda.ar):**
1. Que el checkout se puede mostrar **en inglés y en USD**.
2. Cómo te llega la plata a Argentina con cada procesador, y en cuánto tiempo.
3. Si permite poner un **link de entrega** por producto y un **redirect a tu página de gracias**.
4. Si permite instalar el **Pixel de Meta** (y el de TikTok) en el checkout.

### ⚠️ Lo más importante: las reglas de los procesadores de pago

Stripe y PayPal restringen el contenido sexual. Picante es un juego de texto, sin imágenes ni nada gráfico, pero tiene retos sexuales (sobre todo el pack Unfiltered). Si un procesador decide que tu producto entra en su lista de prohibidos, te puede **cerrar la cuenta y retener la plata durante meses**.

- **Leé la lista de negocios restringidos** de cada procesador antes de conectar (Stripe: “Prohibited and restricted businesses”; PayPal: “Acceptable Use Policy”).
- **Describí el producto tal cual es:** “juego digital para parejas adultas con preguntas y retos picantes”. No lo disfraces de otra cosa: si lo descubren después, es peor.
- **Si no entra en las reglas de uno, usá otro.** Preguntale al soporte de Impultienda cuál de sus procesadores (Stripe, PayPal o Whop) acepta este tipo de producto, y confirmalo en las reglas de ese procesador. Tener varios para elegir sirve justamente para esto.
- **Retirá la plata seguido** y no dependas de un solo procesador.

---

## 5. Entrega del acceso (ya configurado)

Ya generé códigos nuevos y privados. En la app están solo sus “huellas” (el código real no aparece en ningún archivo público). Los códigos te los paso por el chat, no están en el repositorio.

En Impultienda:
- **Link de entrega del producto principal:** `https://TU-SITIO/app/?code=CODIGO-PRINCIPAL`
- **Link de entrega del Unfiltered Pack:** `https://TU-SITIO/app/?code=CODIGO-EXTRA`
- **Página de gracias (redirect):** `https://TU-SITIO/thanks.html?code=CODIGO-PRINCIPAL`

Para cambiar los códigos más adelante: `herramientas/generar-codigo.html` → pegás la huella nueva en `sitio/app/index.html` → `CONFIG`, sin borrar la vieja (así los que ya compraron siguen entrando).

---

## 6. Los números en USA

Fórmulas:
- **Ticket promedio** = precio + (bump × % que lo agrega) + (upsell × % que lo compra)
- **CPA máximo** = ticket promedio − comisiones
- **CPA esperado** = CPM ÷ (1000 × CTR × conversión de la landing)

Ejemplo: USD 7,99 + bump de 4,99 que agrega el 35% + upsell de 14,99 que compra el 10% → ticket promedio ≈ **USD 11,24**. Con ~8% de comisiones, neto ≈ **USD 10,30**.

| CPM (USA) | CTR | Conversión landing | CPA | ¿Gana? |
|---|---|---|---|---|
| USD 15 | 1,0% | 3% | USD 50 | ❌ perdés mucho |
| USD 15 | 2,0% | 5% | USD 15 | ❌ perdés |
| USD 12 | 2,5% | 6% | USD 8 | ✅ ganás ~2,30 por venta |
| USD 10 | 3,0% | 8% | USD 4,17 | ✅✅ ganás ~6 por venta |

**Conclusión:** en USA, con anuncios pagos solo ganás si el anuncio engancha mucho (CTR de 2,5% o más) y la landing convierte bien (5% o más). Por eso:
1. **Arrancá con orgánico** (gratis) para descubrir qué ganchos funcionan.
2. Los videos orgánicos que exploten, **promocionalos** como anuncio (Spark Ads en TikTok, “impulsar” en Instagram).
3. **Armá el upsell rápido:** es lo que hace que los anuncios cierren.

Los CPM de la tabla son de referencia. Medí los tuyos en los primeros días y recalculá.

---

## 7. Plan de lanzamiento

**Semana 1: dejarlo andando y orgánico**
- [ ] Subir el sitio a Netlify (lo hace el prompt de Claude en el navegador).
- [ ] Configurar producto, bump y entrega en Impultienda (también el prompt).
- [ ] Compra de prueba real de punta a punta y después pedir la devolución.
- [ ] Crear cuentas de TikTok, Instagram y YouTube para la marca y publicar 2 o 3 videos por día (`UGLY-ADS.md`).

**Semana 2: primeros anuncios**
- [ ] Pixel de Meta instalado (landing + checkout).
- [ ] Promocionar los 2 o 3 videos orgánicos que mejor anduvieron, más los 5 estáticos de `negocio/anuncios/`.
- [ ] Público: USA, 21–55 años, abierto. USD 10–20 por día para empezar.

**Semana 3 en adelante**
- [ ] Apagar lo que no vende y escalar lo que sí (reglas en `UGLY-ADS.md`).
- [ ] Lanzar el upsell.
- [ ] Juntar testimonios reales: a los 2 días de cada compra, mandale un mail al cliente preguntando cómo les fue.

---

## 8. Lo legal

**En USA (FTC):**
- **Nada de reseñas ni testimonios inventados.** Desde 2024 la FTC multa las reseñas falsas. La sección de testimonios de la landing está oculta hasta que tengas reales.
- **Si le pagás a un creador por un video, el anuncio tiene que decirlo** (#ad o “paid partnership”).
- Nada de urgencia falsa (“quedan 3”, relojes que se reinician).
- **Cumplí la garantía de 30 días** que promete la landing.
- Público de anuncios **18+** (mejor 21+). La app tiene aviso de +18.

**Impuestos:**
- **En USA:** algunos estados cobran impuesto a las ventas sobre productos digitales una vez que superás cierto volumen de ventas en ese estado. Con Stripe o PayPal directos, ese tema es tuyo. Cuando empiece a haber volumen, consultalo con un contador que conozca ventas a USA, o evaluá una plataforma que cobre y pague los impuestos por vos.
- **En Argentina:** cobrar en dólares desde el exterior es exportación de servicios. Necesitás estar inscripto (monotributo o el régimen que corresponda) y facturar. Hablalo con tu contador **antes** de vender en volumen.

**Términos:** completá los datos entre corchetes de `sitio/terms.html`.

**Nombre:** “Picante” suena latino y se entiende en USA (muchos conocen “picante sauce”), y te diferencia de las apps de parejas que ya existen. Antes de invertir fuerte, buscá que no haya una marca registrada igual en tu rubro (en el buscador de marcas de la USPTO).
