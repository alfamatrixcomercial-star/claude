# TAREAS

Lista de trabajo para el modo noche (ver `MODO-NOCHE.md`). Claude toma la primera de **Pendientes**, la hace, la prueba, la marca `[x]` con una línea de qué hizo, la mueve a **Hechas** y hace commit + push. Si algo necesita una decisión del dueño, va a **Preguntas para la mañana**.

**Reglas fijas:** no cambiar precios, códigos ni links de pago; no borrar archivos ajenos; no publicar nada fuera del repo; contenido siempre +18, consensuado y no explícito (ver regla del “paso”); español rioplatense con tono de barrio; probar en el navegador a 360 px y 390 px de ancho sin errores en consola.

---

## Pendientes

- [ ] **1. Pixel de Meta.** Agregar a `sitio/index.html` y `sitio/gracias.html` el código del Pixel de Meta con un ID de marcador `TU_PIXEL_ID` en una constante de configuración. Eventos: `PageView` en todas, `InitiateCheckout` al tocar cualquier botón de pago de la landing, `Purchase` en gracias. Si el ID está vacío o es el marcador, no cargar nada. *Terminado:* sin errores en consola con el ID vacío, y explicado en `negocio/ESTRATEGIA.md` dónde se pega el ID.

- [ ] **2. +40 cartas nuevas.** Sumar 10 verdades y 10 retos al nivel Picante y 10 verdades y 10 retos al nivel Fuego en `sitio/app/index.html`. Mismo tono, sin repetir ideas existentes, usando `{B}` para el nombre de la pareja. Actualizar los números que aparecen en la landing, el modal de la app y los anuncios si cambian. *Terminado:* la app funciona y los conteos son exactos.

- [ ] **3. Versión Brasil.** Crear `sitio-br/` con la landing, la app y la página de gracias traducidas a portugués de Brasil con tono popular (no traducción literal: adaptar humor y modismos). Mismo sistema de códigos. *Terminado:* se abre sin errores y no quedan textos en español.

- [ ] **4. Versión México / Colombia.** Crear `sitio-latam/` adaptando todo al tuteo y modismos neutros de LatAm (sin “vos”, “boliche”, “birra”, “laburo”). *Terminado:* idem tarea 3.

- [ ] **5. 10 anuncios estáticos más.** En `negocio/anuncios/` siguiendo los formatos de `negocio/UGLY-ADS.md`: 7 en 1080×1350 y 3 en 1080×1920 (historias). Fuentes HTML en `negocio/anuncios/fuente/`. Respetar las reglas de Meta del documento. *Terminado:* PNG generados y listados en `UGLY-ADS.md`.

- [ ] **6. 10 guiones de video nuevos.** En `negocio/GUIONES-EXTRA.md`, con gancho, desarrollo segundo a segundo y cierre, para grabar con el celu. Variar ángulos: humor, demostración, curiosidad, precio. *Terminado:* archivo creado.

- [ ] **7. Upsell “Noche Perfecta”.** Diseñar un segundo producto barato para ofrecer después de la compra: una mini app con 30 ideas de citas en casa (sin gastar plata, con lo que hay), cada una con pasos y un reto de Picante. Carpeta `sitio/noche-perfecta/`, mismo estilo y sistema de códigos (código nuevo de ejemplo `NOCHE2026`). *Terminado:* funciona y está explicado en `ESTRATEGIA.md`.

- [ ] **8. Plan de códigos únicos (solo documento).** Escribir `negocio/V2-CODIGOS-UNICOS.md`: cómo generar un código único por comprador usando el webhook de la plataforma de pago + una base de datos (por ejemplo Supabase) + validación en la app. Paso a paso para alguien no técnico, con costos. No crear nada en servicios externos. *Terminado:* documento creado.

- [ ] **9. Revisión de calidad.** Revisar ortografía, tildes y tono de todas las cartas, mensajes y textos de la landing. Probar la app completa a 360 px. Revisar contraste y que todos los botones tengan al menos 44 px. *Terminado:* lista de cambios hechos en la línea de esta tarea.

---

## Preguntas para la mañana

_(vacío)_

---

## Hechas

- [x] **App Picante** (`sitio/app/`): verdad o reto en 4 niveles, ruleta, dados, mensajes para WhatsApp, Reto 7 Noches, modo prueba, desbloqueo con código, instalable como app. — 16/10/2026
- [x] **Landing de venta** (`sitio/index.html`), página de gracias y términos. — 16/10/2026
- [x] **5 ugly ads estáticos** (`negocio/anuncios/`), guía de anuncios y estrategia. — 16/10/2026
- [x] **Guía del modo noche** y script local. — 16/10/2026
