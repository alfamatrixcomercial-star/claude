# TAREAS

Lista de trabajo para el modo noche (ver `MODO-NOCHE.md`). Claude toma la primera de **Pendientes**, la hace, la prueba, la marca `[x]` con una línea de qué hizo, la mueve a **Hechas** y hace commit + push. Si algo necesita una decisión del dueño, va a **Preguntas para la mañana**.

**Reglas fijas:** no cambiar precios, códigos, huellas ni links de pago; no escribir nunca un código de acceso en texto plano en el repo; no borrar archivos ajenos; no publicar nada fuera del repo; contenido siempre +18, consensuado y no explícito (regla del “pass”); todo lo que ve el cliente en **inglés de USA natural** (la versión principal es `sitio/`); probar en el navegador a 360 px y 390 px de ancho sin errores en consola.

---

## Pendientes

- [ ] **1. Pixel de Meta y TikTok.** Agregar a `sitio/index.html` y `sitio/thanks.html` el código del Pixel de Meta y del Pixel de TikTok, con IDs vacíos en una constante de configuración (`PIXELS = { meta: "", tiktok: "" }`). Eventos: `PageView` en todas las páginas, `InitiateCheckout` al tocar cualquier botón de pago y `Purchase` en thanks. Con los IDs vacíos no se carga nada. Actualizar la sección de privacidad de `terms.html`. *Terminado:* sin errores en consola con los IDs vacíos, y explicado en `negocio/ESTRATEGIA.md` dónde se pegan.

- [ ] **2. Upsell “Date Night at Home”.** Segundo producto para ofrecer como upsell de 1 clic: mini app en inglés con 30 ideas de citas en casa (sin gastar plata, con lo que hay en casa), cada una con pasos y un reto de Picante. Carpeta `sitio/date-night/`, mismo estilo y mismo sistema de códigos, con una huella de ejemplo y una nota en Preguntas para la mañana pidiendo que el dueño genere su código real. *Terminado:* funciona y está explicado en `ESTRATEGIA.md`.

- [ ] **3. 10 anuncios estáticos más en inglés.** En `negocio/anuncios/` siguiendo `negocio/UGLY-ADS.md`: 7 en 1080×1350 y 3 en 1080×1920 (historias). Fuentes en `negocio/anuncios/fuente/`. Cumplir las reglas de Meta del documento (nada sexual explícito en la imagen). *Terminado:* PNG generados y listados en `UGLY-ADS.md`.

- [ ] **4. 30 días de contenido orgánico.** `negocio/CONTENIDO-30-DIAS.md`: 90 ideas de videos sin cara para TikTok, Reels y Shorts (3 por día), cada una con gancho, texto en pantalla, qué grabar de la app y caption con hashtags. En inglés, con una línea en español que explique cada idea. *Terminado:* archivo creado.

- [ ] **5. +40 cartas nuevas en inglés.** 10 truths + 10 dares en Spicy y 10 truths + 10 dares en Fire, en `sitio/app/index.html`. Inglés natural de USA, sin repetir ideas, usando `{B}` y “they/them” para la pareja. Actualizar los números que aparecen en la landing, en el modal de la app y en los anuncios si cambian. *Terminado:* la app funciona y todos los números son exactos.

- [ ] **6. Revisión de inglés nativo.** Revisar todos los textos de `sitio/` (cartas, mensajes, landing, thanks, terms) para que suenen 100% naturales para alguien de USA. Corregir lo que suene traducido. *Terminado:* lista de cambios en la línea de esta tarea.

- [ ] **7. Mails de seguimiento.** `negocio/EMAILS.md`: 5 mails en inglés para después de la compra (bienvenida, “¿cómo les fue?” pidiendo testimonio con permiso, tip del Reto 7 Noches, oferta del upsell, recordatorio de la garantía). Con asunto y texto, listos para pegar en Impultienda o en una herramienta de email. *Terminado:* archivo creado.

- [ ] **8. Plan de códigos únicos (solo documento).** `negocio/V2-CODIGOS-UNICOS.md`: cómo generar un código único por comprador usando el webhook de Impultienda (si lo tiene) + una base de datos (por ejemplo Supabase) + validación en la app. Paso a paso para alguien no técnico, con costos. No crear nada en servicios externos. *Terminado:* documento creado.

- [ ] **9. Pasar las mejoras de instalación a la versión en español.** Copiar a `sitio-es/app/index.html` y `sitio-es/gracias.html` lo que se agregó en inglés: avisos para iPhone, navegadores internos de Instagram/TikTok y app instalada sin desbloquear, y el código que queda en la dirección. Textos en español rioplatense. *Terminado:* mismas pruebas que en inglés, sin errores.

- [ ] **10. Versión Brasil (más adelante).** `sitio-br/` en portugués de Brasil con tono popular, mismo sistema de códigos. *Terminado:* se abre sin errores y no quedan textos en otro idioma.

---

## Preguntas para la mañana

_(vacío)_

---

## Hechas

- [x] **App Picante en español** (`sitio-es/`), landing, gracias, términos, anuncios y guías LatAm (`negocio/latam/`). — 16/10/2026
- [x] **Versión USA en inglés** (`sitio/`): app, landing, thanks con `?code=`, terms, 5 anuncios en inglés, estrategia y guía de ugly ads para USA, códigos nuevos privados. — 16/10/2026
- [x] **Guía del modo noche** y script local. — 16/10/2026
- [x] **Instalación como app web mejorada** (inglés): aviso para iPhone, aviso y “copiar link” en navegadores internos de Instagram/TikTok, aviso en la app instalada sin desbloquear, y el código queda en la dirección para que lo herede la app instalada. — 16/10/2026
