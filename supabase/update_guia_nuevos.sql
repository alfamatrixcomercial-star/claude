DO $$
DECLARE
  v_guide_id uuid;
  v_exam_id uuid;
BEGIN

-- ============================================================
-- GUÍA PARA NUEVOS Y NO TAN NUEVOS (2025)
-- Mozos · Runners · Comisses — reconstruida completa desde el PDF oficial
-- ============================================================

SELECT id INTO v_guide_id FROM guides WHERE title = 'Guía para Nuevos y No Tan Nuevos';

IF v_guide_id IS NULL THEN
  INSERT INTO guides (title, description, content)
  VALUES ('Guía para Nuevos y No Tan Nuevos', 'Guía completa para mozos, runners y comisses: roles y tareas de cada puesto, estándar de servicio, tareas diarias de apertura y cierre, los 21 criterios de evaluación con sus 4 niveles, propinas, pagos y preguntas frecuentes.', $GUIDE$
# Guía para Nuevos y No Tan Nuevos

**Mozos · Runners · Comisses**
*Mirador Waikiki — Mar del Plata, Buenos Aires · 2025*

---

## PRESENTACIÓN

Bienvenidos a todos los lectores a la **Guía para Nuevos y No Tan Nuevos 2025**.

En Mirador Waikiki entendemos que un gran servicio no depende de una sola persona, sino de un equipo bien organizado, comprometido y alineado. Por eso creamos esta guía con el objetivo de definir claramente los roles y responsabilidades de cada integrante del salón: **mozos, runners y commis**.

Esta guía también incluye una lista de tareas para garantizar que todos arranquemos y terminemos bien cada jornada.

> **Nuestro objetivo es que todos crezcan, aprendan y puedan alcanzar el 100% del rendimiento y las propinas.** Y para eso necesitamos compromiso, comunicación y ganas de hacer las cosas cada vez mejor.

---

## 1. CÓMO EMPEZAR

### Introducción

Mirador Waikiki es mucho más que un restaurante: es un espacio icónico frente al mar que ofrece una experiencia 360°, con una propuesta cuidada, ambiente relajado y un servicio profesional. Acá no solo se trabaja bien, se trabaja en equipo, con la meta de que cada cliente se lleve algo más que una comida: una sensación positiva.

Ser parte de este lugar significa integrarse a un equipo grande, con roles bien definidos (mozos, runners, comisses, recepcionistas, bacha, ensaladas, encargados, barra y cocina), donde cada persona cumple un papel fundamental.

**No hay tareas chicas ni roles menos importantes:** todo lo que hacés impacta directamente en el funcionamiento del salón y en la experiencia del cliente.

### Primeros Pasos

| Pregunta | Respuesta |
|---|---|
| ¿Cuándo llego? | **15 minutos antes** del horario pautado. |
| ¿Dónde dejo mis cosas? | En los **lockers**. Si todavía no tenés uno asignado, consultá con el encargado. |
| ¿Qué ropa uso hasta tener el uniforme? | **Ropa de color negro** (pantalón y remera o camisa negra). |
| ¿A quién le aviso que llegué? | A **Facundo o Enzo** (encargados de salón). |

**🔒 Detalles importantes**

- El celular **NO** se usa durante el turno (salvo excepciones autorizadas).
- Si tenés una duda, **preguntá antes de equivocarte**.
- La imagen del equipo es parte del servicio.

---

## 2. FILOSOFÍA Y VALORES

### Los 6 Principios de Mirador Waikiki

**1. Todo impacta**
Cada acción, por pequeña que parezca, tiene un efecto en la experiencia del cliente y en el ambiente del equipo. Nada es insignificante.

**2. El cliente es sagrado**
El cliente es nuestra razón de ser. Su experiencia, comodidad y satisfacción están por encima de todo. No importa cómo sea el día: el cliente siempre merece lo mejor.

**3. El servicio es colectivo**
No importa tu rol: si ves una necesidad, atendela. Si podés ayudar a un compañero, hacelo. El éxito del equipo es el éxito de todos.

**4. La actitud abre puertas**
La predisposición, el compromiso y las ganas de hacer las cosas bien son valoradas más que cualquier habilidad técnica. Acá se aprende, pero la actitud se trae.

**5. Ser profesional no es ser frío**
Se puede ser amable, cálido y cercano siendo completamente profesional. El trato humano es parte de nuestro servicio diferencial.

**6. Nos cuidamos entre todos**
El equipo se protege mutuamente. Eso significa hablar con respeto, cubrirse cuando alguien lo necesita, y construir un ambiente donde todos puedan trabajar bien.

### Qué se espera de vos

- Llegar a horario (o antes).
- Presentarte en condiciones (uniforme, higiene, actitud).
- Conocer tu rol y cumplirlo con responsabilidad.
- Comunicarte con el equipo de forma clara y respetuosa.
- Reportar problemas o dudas a los encargados, no guardártelos.
- Cuidar el espacio, los materiales y los equipos.
- Tratar a cada cliente como si fuera el más importante.

---

## 3. HORARIOS Y FUNCIONAMIENTO

### Horarios

Los horarios se comunican semanalmente por **WhatsApp**. Es responsabilidad de cada persona revisar su turno con anticipación.

### Fichaje

El fichaje se realiza a través de **WhatsApp**, con el sistema de registro habilitado por la empresa. Debés fichar al entrar y al salir de cada turno. No fichar puede generar inconsistencias en el cálculo de horas.

### Descanso (Media Hora)

Cada turno incluye un descanso de **30 minutos**:

| Turno | Horario del descanso |
|---|---|
| Almuerzo | **11:00 a 11:30** |
| Cena | **19:00 a 19:30** |

Durante ese tiempo podés comer, descansar o hacer una pausa. No se extiende el descanso más allá del tiempo asignado.

### Ausencias

Si no podés asistir a un turno, debés **avisar con la mayor anticipación posible** al encargado por WhatsApp. Las ausencias por enfermedad requieren **certificado médico**. Las ausencias sin justificación pueden tener consecuencias en la evaluación de desempeño.

### Reducción de Personal

En casos de **baja demanda** (temporada baja, días de lluvia, etc.), la empresa puede aplicar una reducción de personal por turno. Esto se comunica en el momento. No implica despido ni penalización: es parte del funcionamiento operativo del negocio.

---

## 4. NORMAS Y CONVIVENCIA (Reglamento Interno)

### 4.1 Respeto

El respeto es la base de todo. No se tolera ningún tipo de discriminación, maltrato, insulto ni conducta violenta, ya sea hacia clientes, compañeros, encargados o cualquier persona que circule por el espacio.

### 4.2 Presentación Personal

- Uniforme completo y en buen estado.
- Higiene personal adecuada.
- Cabello recogido o prolijo.
- Sin accesorios que interfieran con el servicio o representen un riesgo.
- Sin perfumes fuertes que puedan molestar a los clientes.

### 4.3 Puntualidad

La puntualidad es un valor central. Llegar tarde afecta a todo el equipo. Se contemplan situaciones excepcionales, pero las llegadas tarde reiteradas son consideradas en la evaluación de desempeño.

### 4.4 Celular

El uso del celular durante el turno está **prohibido**, salvo en situaciones de emergencia o con autorización expresa del encargado. Los celulares deben estar guardados durante todo el servicio. Esto aplica también en los momentos de menor actividad.

### 4.5 Ámbitos de Descanso

Los espacios de descanso (vestuarios, locker, zona de personal) son para uso exclusivo del personal. No se pueden llevar clientes a esas áreas ni utilizarlas para situaciones ajenas al descanso autorizado.

### 4.6 Responsabilidad en las Tareas

Cada persona es responsable de su área y sus tareas asignadas. Si algo no está claro, se consulta al encargado. No se abandona una tarea sin completarla o sin haberla delegado formalmente.

### 4.7 Prohibiciones

- **Consumir comida sin autorización** del encargado (incluye probar platillos sin permiso).
- **Fumar** dentro del establecimiento o en las áreas de trabajo.
- **Consumir alcohol o sustancias** antes o durante el turno.

### 4.8 Manejo de Conflictos

Si hay un problema o conflicto con un compañero o una situación de trabajo, el camino correcto es hablarlo con el encargado, no manejarlo de manera informal o confrontacional. Los conflictos no resueltos afectan el ambiente de todo el equipo.

---

## 5. LOS TRES ROLES DEL SALÓN

Esta guía está dedicada especialmente a los tres roles que sostienen el servicio en el salón. Cada uno tiene una función distinta, y los tres son igual de necesarios.

---

### 🧹 COMISSES

#### Introducción

El rol del commis es **fundamental para que el servicio funcione de forma fluida y profesional**. Su principal responsabilidad es mantener el salón en orden y apoyar al equipo en todas las tareas de limpieza, reposición y armado.

> El commis tiene que ser **rápido, atento y ordenado**. Es el primer eslabón para que todo el salón se mantenga limpio, presentable y operativo durante el servicio.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Fajinado** | Fajinado constante de la vajilla del salón. |
| **Paneras y cortesía** | Gestionar el pan todos los días (verificar estado) y, en el momento de despacho, armar paneras con su respectiva cortesía del día. |
| **Reposición constante** | Servilletas, cubiertos, copas, vasos y lo necesario en las estaciones de servicio. |
| **Limpieza del salón** | Mantener mesas, sillas y pisos limpios durante todo el turno. Limpiar derrames y desechos de forma inmediata. |
| **Armado de mesas** | Repasar y montar correctamente las mesas cuando se desocupan. |
| **Orden de zonas de trabajo** | Mantener limpios y ordenados los descansos, sin acumulación de objetos innecesarios. |
| **Soporte general** | Ayudar a mozos y runners si el salón está exigido o hay tareas puntuales que lo requieran. |

---

### 🏃 RUNNERS

#### Introducción

El runner cumple un **rol clave como nexo entre cocina y salón**. Es quien se encarga de que los platos lleguen bien a la mesa, que no falte nada y que el cliente tenga todo lo necesario sin tener que pedirlo.

> El runner tiene que estar en **movimiento constante**, con mirada general del salón y actitud resolutiva. Su aporte eleva la experiencia del cliente y sostiene el ritmo del servicio.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Entrega de platos** | Llevar los platos a la mesa con agilidad y cuidado, confirmando que sean correctos (comanda, punto de cocción, guarnición, etc.). |
| **Control de calidad visual** | Verificar que la presentación sea adecuada y que no falte ningún componente antes de salir de cocina. |
| **Atención post-entrega** | Al volver al salón, observar si alguna mesa necesita algo (pan, hielo, servilletas, cubiertos, etc.). |
| **Reposición espontánea** | Llevar lo que falte a la mesa **sin esperar a que lo pidan**. |
| **Colaboración con mozos** | Ayudar en lo que se necesite para que el servicio sea fluido (armado, limpieza rápida, soporte en momentos de alta demanda). |
| **Tareas de apertura y cierre** | Participar activamente en el armado del salón (abrir sombrillas, armar queseras, revisar copas y aderezos, etc.). |
| **Buena actitud y agilidad** | Circular con energía, sin quedarse quieto, siempre atento al salón. |

---

### 🍷 MOZOS

#### Introducción

El mozo es **quien tiene el contacto directo con el cliente y quien lidera la experiencia en la mesa**. Su rol va más allá de tomar pedidos: se trata de brindar un servicio profesional, atento, y generar confianza desde el primer momento.

> El mozo tiene que ser **líder de su sector**, con mirada atenta, excelente comunicación y ganas de brindar una experiencia que supere las expectativas del cliente.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Presentación inicial** | Saludar cordialmente, presentarse con nombre y predisposición. |
| **Toma de pedidos (comandas)** | Saber escuchar, sugerir platos, detallar ingredientes y comandar correctamente en el sistema. |
| **Conocimiento de carta y menú** | Estar al tanto de los platos, promociones, tiempos de cocina, productos fuera de carta o no disponibles. |
| **Atención constante** | Asegurar que a la mesa no le falte nada (hielo, pan, cubiertos, agua, servilletas) sin que el cliente tenga que pedirlo. |
| **Gestión de tiempos** | Organizar bien sus mesas, anticiparse a las necesidades y avisar de cualquier demora. |
| **Resolución de conflictos** | Actuar con empatía frente a reclamos o errores. No justificarse, sino ofrecer soluciones rápidas. |
| **Manejo de sistema** | Usar correctamente la terminal, separar platos, cargar extras y cerrar cuentas sin errores. |
| **Prolijidad y presencia** | Uniforme limpio, buena postura, cero celular visible y actitud profesional. |

---

## 6. ORGANIGRAMA Y OTROS ROLES

### Dirección y Gestión

| Rol | Nombre |
|-----|--------|
| Director | Agustín Di Iorio |
| Director | Daniel Urcabe |
| Jefe de Cocina | Ángel Sachett |
| Encargado de Salón | Facundo Núñez |
| Encargado de Salón | Enzo Espiño |
| Barra | Bruno Molina |
| Recepción | Paz Rave |
| Administrativa | Romina Márquez |
| Colaborador | Germán Zeluk |

### Otros roles del equipo

**Recepción**
Es el primer contacto del cliente con el local. Recibe, asigna mesas, maneja las reservas y coordina la llegada y salida de los grupos. Es fundamental para la organización del salón.

**Bacha**
Se encarga de la limpieza de vajilla, cubiertos y utensilios. Es un rol clave para mantener el flujo de materiales en cocina y salón. Sin bacha, nada funciona.

**Barra**
Prepara bebidas (alcohólicas y no alcohólicas), café, infusiones y cocktails. Colabora también con el servicio de salón cuando es necesario.

**Calientaplatos**
Tiene a cargo mantener la temperatura de los platos antes de que salgan al salón. Es un rol de soporte a la cocina y al servicio, clave en momentos de alta demanda.

**Cocina**
Prepara todos los platos del menú. Trabaja bajo la dirección del Jefe de Cocina. La coordinación entre cocina y salón es fundamental para el éxito del servicio.

**Caja**
Maneja los cobros, tanto en efectivo como con tarjeta. Emite facturas y tickets. Coordina con los mozos el cierre de cada mesa.

**Encargados**
Son la autoridad operativa del salón. Coordinan al personal, resuelven problemas, atienden las necesidades especiales de los clientes, y son el canal de comunicación entre el equipo y la dirección.

---

## 7. CÓMO INICIAR

El correcto desarrollo de las tareas diarias es **tan importante como la atención al cliente**.

Cada acción —desde armar una panera hasta cerrar el salón— impacta directamente en la experiencia del comensal y en el funcionamiento del equipo.

Esta sección detalla las responsabilidades operativas que todo camarero debe dominar. No se trata solo de "hacer por hacer", sino de hacerlo con **criterio, prolijidad, sentido común y compromiso**.

El objetivo es lograr que cada jornada empiece y termine con orden, limpieza, eficiencia y respeto por el equipo y el cliente.

> ⚠️ **Estas tareas no son opcionales ni "para cuando sobra tiempo": son parte esencial del trabajo.**

Ser parte del staff de Mirador Waikiki implica cumplir con los siguientes puntos fundamentales para asegurar un servicio de calidad, profesional y en sintonía con los valores del equipo.

### 🧍 Presentación y actitud

- Buena presencia (uniforme limpio, higiene, postura profesional).
- Puntualidad y asistencia constante.
- Actitud de servicio: predisposición, empatía y buena energía con clientes y compañeros.
- Comunicación verbal y no verbal adecuada (trato cordial, sin modismos fuera de lugar).
- Aceptar correcciones con humildad y disposición a mejorar.

### 🛠️ Habilidades técnicas

- Manejo correcto de la bandeja (cafetería, bebidas y platos).
- Conocimiento completo de la carta (comidas, bebidas y promociones).
- Saber explicar platos **sin TACC**, opciones veggies y vegetarianas.
- Conocer los tiempos estimados de cada preparación.
- Capacidad de sugerir platos y bebidas con enfoque en la venta.
- Apertura y servicio correcto de vinos.
- Toma de comandas precisa y manejo del sistema de adición sin errores.
- Buen armado de bandejas y presentación prolija en desayunos y meriendas.
- Armado del servicio correcto en ambos turnos.

### 🧩 Comportamiento en equipo

- Colaborar en cualquier tarea asignada, sin excusas.
- Adaptación a los ritmos del salón (saber rendir en días de alto flujo y no "colgarse" en los días tranquilos).
- Disposición a cambiar de rol o repetir plaza cuando sea necesario.
- Participación activa en reuniones y capacitaciones.

### 🚀 Actitud de crecimiento

- Demostrar interés genuino por aprender y mejorar.
- Escuchar devoluciones sin ponerse a la defensiva.
- Buscar oportunidades para aportar al equipo y al servicio.

---

## 8. TAREAS DIARIAS

### 🌅 Apertura

- **Apertura prolija**: limpiar mesas, barrer salón, abrir balcón completo, preparar descansos.
- **Queseras**, teniendo en cuenta los cuidados para no desperdiciar la materia prima.
- **Limones**: cortar y diferenciar cuándo están buenos o malos, para saber si hace falta preparar más cantidad.
- **Aceites**: saber sobre la preparación del aceite, limpiar botellas de aceiteros y accetos.
- **Paneras y cortesías**.
- **Completar aderezos**.
- **Limpieza de bandejas y bandejeros**.
- **Completar servilleteros**, con azúcar, edulcorantes y servilletas.
- **Cambiar fundas** de los sillones interior/exterior cuando no estén para seguir usando.
- **Fajinada completa** de la vajilla.
- **Preparar el servicio a la perfección**.

### 🍽️ Durante el servicio

- Armado y desarmado de servicio.
- Servicio de vino.
- Servicio de trinche.
- Flambear panqueques en la mesa.
- Reponer tés.

### 🌙 Cierre

Realizar un buen cierre implica:

- Limpieza de mesas.
- Barrido del salón.
- Vajilla fajinada.
- Descansos desarmados (interior y exterior).
- Puertas y ventanas cerradas.
- Balcón con sillas acomodadas y sombrillas cerradas.
- Sin papeles ni sobres de azúcar en el suelo.
- Retirar o achicar bolsas de consorcio y tirar si es necesario.

---

## 9. CRITERIOS DE EVALUACIÓN

En Mirador Waikiki creemos que **la forma en que se hacen las cosas es tan importante como las tareas en sí**. Por eso definimos una escala de evaluación clara que nos permite medir el desempeño diario no solo en base al cumplimiento de tareas, sino también a la actitud, el compromiso y el trato con compañeros y clientes.

Esta sección busca dejar en claro qué consideramos un buen comportamiento, qué cosas no se toleran, y cuáles son las actitudes que realmente marcan la diferencia dentro del equipo.

> **La idea no es castigar, sino ordenar y mejorar.** Reconocer a quienes hacen las cosas bien y también dar herramientas para corregir lo que no suma.

### La escala

| Nivel | Qué significa |
|---|---|
| 🟥 **Muy mal** | Comportamientos que afectan gravemente el funcionamiento del equipo o la experiencia del cliente. Pueden derivar en un **apercibimiento, suspensión** o en no tenerte en cuenta para futuras oportunidades (como responsabilidad o continuidad en el puesto). |
| 🟧 **Mal** | Actitudes que no suman, generan desgaste o muestran poca responsabilidad. Se corrigen hablando, pero **si se repiten, bajan la imagen** que el equipo y los encargados tienen de vos. |
| 🟨 **Bien** | Lo mínimo esperable. Se valora, pero **no se premia lo que simplemente es una obligación básica**. |
| 🟩 **Muy bien** | Actitudes que suman, elevan al equipo y generan confianza. Estas personas son consideradas para **liderar, crecer y mantenerse siempre en el grupo**. Acá es donde aparecen las oportunidades. |

---

### Los criterios, uno por uno

| Estación de trabajo | |
|---|---|
| 🟥 Muy mal | Terminar el turno y dejar todo sucio para que otro limpie. |
| 🟧 Mal | Limpiar por encima sin verificar bien. |
| 🟨 Bien | Limpiar su puesto correctamente al retirarse. |
| 🟩 Muy bien | Limpiar su puesto y, si hay tiempo, ayudar a dejar todo en orden general. |

| Comida de personal | |
|---|---|
| 🟥 Muy mal | Quejarse con tono irónico, burlón o generando mal ambiente. |
| 🟧 Mal | Quejarse abiertamente sin buscar solución. |
| 🟨 Bien | Expresar el descontento de forma respetuosa. |
| 🟩 Muy bien | Expresar el descontento de forma amable, calmar el ambiente si fue tenso y proponer una mejora. |

| Llegadas tarde | |
|---|---|
| 🟥 Muy mal | No avisar y encima llegar relajado como si nada. |
| 🟧 Mal | Avisar cuando ya se pasó la hora o llegar seguido tarde. |
| 🟨 Bien | Avisar con tiempo cuando surge algo puntual. |
| 🟩 Muy bien | Avisar con antelación, ofrecer recuperar el tiempo o ayudar más ese día. |

| Uso del celular | |
|---|---|
| 🟥 Muy mal | Revisar el celular en zona de salón o mientras hay clientes. |
| 🟧 Mal | Usarlo en pasillos o cocina sin que haya pausa real. |
| 🟨 Bien | Revisarlo solo en momentos de pausa y fuera de la vista del cliente (baño). |
| 🟩 Muy bien | Usarlo exclusivamente para temas laborales o de emergencia, con discreción total, habiendo pedido permiso y estando fuera del salón. |

| Trato entre compañeros | |
|---|---|
| 🟥 Muy mal | Gritar, burlarse o generar peleas delante de clientes o equipo. |
| 🟧 Mal | Tratar con indiferencia o responder mal bajo presión. |
| 🟨 Bien | Ser respetuoso incluso si hay diferencias. |
| 🟩 Muy bien | Fomentar el buen clima de trabajo, contener a otros si están tensos, dar el ejemplo. |

| Menús | |
|---|---|
| 🟥 Muy mal | No mencionarlos nunca, actuar de manera indiferente. |
| 🟧 Mal | Mencionarlos pero sin ganas ni información clara. |
| 🟨 Bien | Ofrecer los menús como una opción más, sabiendo lo que incluyen. |
| 🟩 Muy bien | Sugerir los menús destacando sus beneficios (precio, rapidez, sabor), y venderlos con entusiasmo y conocimiento. |

| Expresarse | |
|---|---|
| 🟥 Muy mal | Guardarse todo y explotar después, o hacerlo saber de mala manera. |
| 🟧 Mal | No decir nada y dejar que el enojo se note en la atención. |
| 🟨 Bien | Hablar a solas con quien corresponde cuando algo molesta. |
| 🟩 Muy bien | Expresar malestares con respeto, pedir un momento para charlar con los encargados y proponer soluciones o mejoras para que no se repita. |

| Esperar órdenes | |
|---|---|
| 🟥 Muy mal | Estar parado sin hacer nada cuando hay cosas para hacer. |
| 🟧 Mal | Cumplir solo las tareas básicas sin iniciativa. |
| 🟨 Bien | Consultar si pueden ayudar en algo más. |
| 🟩 Muy bien | Anticiparse a las necesidades, mantener todo ordenado, y resolver sin esperar órdenes. |

| Equivocaciones | |
|---|---|
| 🟥 Muy mal | Ocultar un error y dejar que lo descubran otros o los clientes. |
| 🟧 Mal | Admitirlo pero sin buscar solución. |
| 🟨 Bien | Informar el error a tiempo para que se pueda corregir. |
| 🟩 Muy bien | Avisar rápido, proponer cómo arreglarlo y asumir la responsabilidad sin drama. |

| Comandas | |
|---|---|
| 🟥 Muy mal | Anotar mal seguido y responsabilizar a cocina o barra. |
| 🟧 Mal | Olvidarse cosas por no verificar bien. |
| 🟨 Bien | Anotar con claridad y repasar antes de enviar. |
| 🟩 Muy bien | Confirmar con el cliente, detallar bien y asegurar que salga perfecto. |

| Atención al cliente | |
|---|---|
| 🟥 Muy mal | Mostrar desgano, mala cara o ignorar al cliente. |
| 🟧 Mal | Atender por cumplir, sin conexión. |
| 🟨 Bien | Ser correcto, amable y responder dudas. |
| 🟩 Muy bien | Mostrar entusiasmo, recomendar con criterio, anticiparse a lo que el cliente puede necesitar y generar una experiencia memorable. |

| Roturas | |
|---|---|
| 🟥 Muy mal | Reírse como si nada, hacer chistes o burlarse frente a clientes o compañeros. |
| 🟧 Mal | No reaccionar, minimizar la situación o dejar que otros lo limpien. |
| 🟨 Bien | Asumir el error, levantar rápido los restos y avisar a quien corresponda. |
| 🟩 Muy bien | Resolver con agilidad, pedir disculpas si hizo ruido o molestó, y reponer la copa si corresponde sin que lo tengan que pedir. |

| Desayuno / Merienda | |
|---|---|
| 🟥 Muy mal | No se presta atención a la plaza por estar desayunando o merendando. Se abandona la atención al cliente. Falta de respeto al grupo y al trabajo. |
| 🟧 Mal | Se extiende demasiado el desayuno o se charla más de lo necesario. |
| 🟨 Bien | Merienda breve, sin perder totalmente la atención. Se mantiene el respeto por el ritmo de trabajo. |
| 🟩 Muy bien | Se toma el café o la merienda de manera ágil, sin descuidar la plaza. Si hay otro mozo en la misma plaza, se turnan correctamente. |

| Conducta y vocabulario | |
|---|---|
| 🟥 Muy mal | Carcajadas, gritos, lenguaje vulgar o desubicado. Afecta directamente la imagen del lugar. |
| 🟧 Mal | Risas fuertes o comentarios que se escuchan desde el sector cliente. |
| 🟨 Bien | Buena conducta, con algún tono relajado pero respetuoso. |
| 🟩 Muy bien | Actitud profesional. Voz baja, respeto por el entorno y por los compañeros. Se transmite seriedad y calidad. |

| Plazas y mozos a la vista | |
|---|---|
| 🟥 Muy mal | La plaza queda completamente desatendida. El mozo está boludeando o en otro sector sin motivo. **Falta grave.** |
| 🟧 Mal | No hay nadie visible durante varios minutos. El cliente empieza a buscar atención. |
| 🟨 Bien | Aunque no esté siempre visible, el mozo responde con rapidez y atención. |
| 🟩 Muy bien | Siempre hay un mozo a la vista, atento y disponible. El cliente se siente cuidado desde el primer momento. |

| Carta | |
|---|---|
| 🟥 Muy mal | Decir "no sé" o inventar lo que incluye un plato. |
| 🟧 Mal | Dudar o no transmitir seguridad al explicarlo. |
| 🟨 Bien | Conocer los básicos del menú, y consultar en caso de duda. |
| 🟩 Muy bien | Saber cada ítem, recomendar con fundamento y transmitir confianza. |

| Reposición | |
|---|---|
| 🟥 Muy mal | Ver que falta algo y seguir trabajando igual, dejando que otro lo note. |
| 🟧 Mal | Avisar pero no reponer. |
| 🟨 Bien | Reponer o avisar en el momento. |
| 🟩 Muy bien | Reponer, organizar y dejar mejor de lo que estaba. Anticiparse a lo que pueda faltar. |

| Cigarrillo | |
|---|---|
| 🟥 Muy mal | Fumar en el salón, cocina o espacios visibles al cliente. Fumar durante el turno sin permiso. |
| 🟧 Mal | Fumar en momentos inapropiados. |
| 🟨 Bien | Fumar en zonas autorizadas, en pausas designadas y sin afectar el servicio. |
| 🟩 Muy bien | Evitar fumar durante el turno, dar prioridad al servicio y mantener el uniforme impecable (sin olor ni residuos). |

| Versatilidad | |
|---|---|
| 🟥 Muy mal | Negarse sistemáticamente a ayudar en tareas que no son "de su rol", incluso en momentos de necesidad. No colaborar aunque haya compañeros desbordados. |
| 🟧 Mal | Aceptar a regañadientes, con mala actitud, o sólo si se lo ordenan directamente. |
| 🟨 Bien | Estar dispuesto a colaborar en otras tareas cuando se lo piden, aunque no sea habitual. |
| 🟩 Muy bien | Ofrecer ayuda sin que se lo pidan, asumir tareas fuera del rol con buena actitud, entender que el objetivo es que el equipo funcione, no sólo su puesto. |

---

### Cumplimiento de los descansos

En Mirador Waikiki entendemos que **el descanso es necesario** para rendir bien y tener buena energía durante el turno. Pero también es clave que ese descanso se cumpla con responsabilidad y en función del ritmo real del salón.

El descanso estipulado es de **30 minutos**, y debe tomarse en el momento indicado por los encargados o cuando la operación lo permite. Lo que no puede pasar es que el descanso se estire a 40 minutos o más, especialmente en **feriados, fines de semana largos o eventos especiales**, donde el salón está exigido y cada persona cuenta.

> A veces no se nota, pero un descanso más largo en esos momentos deja al equipo con menos manos, genera más estrés y termina perjudicando al cliente.

| 📉 Evaluación del cumplimiento del descanso | |
|---|---|
| 🟥 Muy mal | Tomarse más de 30 minutos sabiendo que no corresponde, especialmente en momentos de alta demanda. Hacerlo sin pedir permiso, desentendiéndose del servicio. En esos casos, además de afectar el funcionamiento, se interpreta como una **falta de respeto al grupo y al trabajo**. |
| 🟧 Mal | Pasarse de los 30 minutos con frecuencia o hacerlo justo cuando más se necesita apoyo, aunque no sea con mala intención. |
| 🟨 Bien | Cumplir los 30 minutos, estar atento al reloj y volver con buena actitud. |
| 🟩 Muy bien | Cumplir siempre el descanso en tiempo y forma. Acortar o postergar su descanso si ve que el equipo lo necesita, sin que se lo pidan y con conciencia de grupo. |

---

### Predisposición horaria

En gastronomía hay momentos del año donde el trabajo se intensifica: **fines de semana, feriados, vacaciones o eventos especiales**. Son días clave para el funcionamiento y la rentabilidad del restaurante, y como equipo necesitamos que todos lo entiendan.

La predisposición horaria **no significa estar disponible 24/7**, sino tener la actitud correcta cuando el restaurante más lo necesita. Es saber que hay días donde quedarse una hora más, cubrir un compañero o dar una mano fuera de tarea directa puede marcar la diferencia entre un buen servicio y un caos.

**Se espera que el equipo:**

- Esté dispuesto a quedarse un poco más si el salón lo requiere.
- No ponga "cara larga" ni genere mal clima en esos días.
- Pregunte si puede ayudar, especialmente cuando se ve que hay presión o faltan manos.

| 📉 Evaluación de la predisposición horaria | |
|---|---|
| 🟥 Muy mal | No tener predisposición nunca. No ofrecer ayuda ni siquiera en días de máximo trabajo. Poner mala cara, evadir tareas o desentenderse del equipo. |
| 🟧 Mal | Hacer lo justo, evitar involucrarse o mostrar incomodidad constante cuando se necesita apoyo extra. |
| 🟨 Bien | Estar dispuesto a colaborar si se lo piden y hacerlo con actitud neutra o respetuosa. |
| 🟩 Muy bien | Anticiparse, ofrecer ayuda sin que lo pidan, quedarse con buena onda cuando se necesita y dar ejemplo al resto. |

---

## 10. PROPINAS

### Cuándo se cobran

Las propinas se distribuyen los **días 2 y 17 de cada mes**.

### Distribución

| Sector | Porcentaje |
|---|---|
| **Salón** (mozos, runners, comisses, recepción, barra, etc.) | **60%** |
| **Cocina** (incluyendo bacha y calientaplatos) | **40%** |

### Cálculo

La distribución se calcula en base a las **horas trabajadas** por cada persona en el período correspondiente. A más horas trabajadas, mayor parte de la propina.

### Mozos y Runners

Los mozos y runners tienen un **sistema diferente** de distribución de propinas. El detalle de ese sistema está en la guía específica para esos roles.

---

## 11. PAGOS

| Concepto | Detalle |
|---|---|
| **Frecuencia** | Mensual. |
| **Escala salarial** | Escala de **UTHGRA** (Unión de Trabajadores del Turismo, Hotelería y Gastronomía de la República Argentina). |
| **Cálculo de días** | La jornada laboral estándar equivale a **8.5 horas = 1 día** trabajado. |
| **Feriados** | Se pagan al **doble** de la jornada normal. |

---

## 12. EMPRESAS DEL COMPLEJO

Mirador Waikiki forma parte de un complejo más amplio. Estas son las empresas que integran el grupo:

**ili ili Hotel Boutique**
Hotel boutique con **17 habitaciones** ubicado dentro del complejo. Ofrece alojamiento de categoría frente al mar.

**Balneario Waikiki**
Espacio de playa y pileta del complejo. Funciona en temporada estival y es parte de la experiencia de ocio del lugar.

**Mar Eventos**
Empresa de organización de eventos: **bodas, fiestas de XV años, eventos corporativos** y más. Utiliza los espacios del complejo para sus celebraciones.

**Mirador 9**
Restaurante y espacio de eventos dentro del complejo. **En verano funciona todos los días**; el **resto del año, fines de semana y feriados**. Es el espacio principal donde trabajamos.

---

## 13. PREGUNTAS FRECUENTES

**¿Cómo consigo mi locker?**
Solicitá la llave al encargado de turno. Se te asignará uno disponible.

**¿Dónde están los vestuarios?**
Los vestuarios están disponibles para todo el personal. Consultá la ubicación con tu encargado si no la conocés.

**¿Cómo registro mi asistencia?**
El fichaje se realiza por **WhatsApp** usando el sistema habilitado por la empresa. Hacelo al entrar y al salir.

**¿Tengo descuento en el consumo?**
Sí. El personal tiene un **50% de descuento** en el consumo del restaurante, **excepto en bebidas alcohólicas**.

**¿Hay café de personal?**
Sí, hay café disponible para el personal. Consultá con el encargado el horario y lugar habilitado.

**¿Qué hago si me enfermo?**
Avisá lo antes posible al encargado y presentá el **certificado médico** correspondiente.

**¿La empresa provee el uniforme?**
Sí, el uniforme es provisto por la empresa. Sin embargo, cada empleado debe traer su propio **destapador, lapicera y anotador**.

**¿Quién desayuna?**
Solo los empleados con turnos que comienzan a las **7:30, 8:00 o 9:00** tienen desayuno incluido.

**¿Dónde están los baños?**
- **Personal**: baños de uso exclusivo ubicados en **planta baja**.
- **Clientes**: dos baños bajando las escaleras + uno en el sector **Ala Wai**.

**¿Qué hago al terminar mi turno?**
Al finalizar el turno, salís sin uniforme y te retirás de las zonas de trabajo. No podés quedarte en las áreas operativas del local fuera de tu turno.

**¿Puedo estar en el área de trabajo antes de que empiece mi turno?**
No. Antes de que empiece tu turno, debés esperar **fuera del área de servicio**. Ingresás cuando el encargado te lo indique.

**¿Dónde puedo consultar los platos del menú?**
Toda la información sobre platos, ingredientes y preparaciones está en la **Guía de Platos e Ingredientes**, disponible en la aplicación.

---

*Guía para Nuevos y No Tan Nuevos — Mar del Plata, Buenos Aires. 2025*

**¡SIGAMOS CRECIENDO JUNTOS!**

$GUIDE$)
  RETURNING id INTO v_guide_id;
ELSE
  UPDATE guides SET description = 'Guía completa para mozos, runners y comisses: roles y tareas de cada puesto, estándar de servicio, tareas diarias de apertura y cierre, los 21 criterios de evaluación con sus 4 niveles, propinas, pagos y preguntas frecuentes.', content = $GUIDE$
# Guía para Nuevos y No Tan Nuevos

**Mozos · Runners · Comisses**
*Mirador Waikiki — Mar del Plata, Buenos Aires · 2025*

---

## PRESENTACIÓN

Bienvenidos a todos los lectores a la **Guía para Nuevos y No Tan Nuevos 2025**.

En Mirador Waikiki entendemos que un gran servicio no depende de una sola persona, sino de un equipo bien organizado, comprometido y alineado. Por eso creamos esta guía con el objetivo de definir claramente los roles y responsabilidades de cada integrante del salón: **mozos, runners y commis**.

Esta guía también incluye una lista de tareas para garantizar que todos arranquemos y terminemos bien cada jornada.

> **Nuestro objetivo es que todos crezcan, aprendan y puedan alcanzar el 100% del rendimiento y las propinas.** Y para eso necesitamos compromiso, comunicación y ganas de hacer las cosas cada vez mejor.

---

## 1. CÓMO EMPEZAR

### Introducción

Mirador Waikiki es mucho más que un restaurante: es un espacio icónico frente al mar que ofrece una experiencia 360°, con una propuesta cuidada, ambiente relajado y un servicio profesional. Acá no solo se trabaja bien, se trabaja en equipo, con la meta de que cada cliente se lleve algo más que una comida: una sensación positiva.

Ser parte de este lugar significa integrarse a un equipo grande, con roles bien definidos (mozos, runners, comisses, recepcionistas, bacha, ensaladas, encargados, barra y cocina), donde cada persona cumple un papel fundamental.

**No hay tareas chicas ni roles menos importantes:** todo lo que hacés impacta directamente en el funcionamiento del salón y en la experiencia del cliente.

### Primeros Pasos

| Pregunta | Respuesta |
|---|---|
| ¿Cuándo llego? | **15 minutos antes** del horario pautado. |
| ¿Dónde dejo mis cosas? | En los **lockers**. Si todavía no tenés uno asignado, consultá con el encargado. |
| ¿Qué ropa uso hasta tener el uniforme? | **Ropa de color negro** (pantalón y remera o camisa negra). |
| ¿A quién le aviso que llegué? | A **Facundo o Enzo** (encargados de salón). |

**🔒 Detalles importantes**

- El celular **NO** se usa durante el turno (salvo excepciones autorizadas).
- Si tenés una duda, **preguntá antes de equivocarte**.
- La imagen del equipo es parte del servicio.

---

## 2. FILOSOFÍA Y VALORES

### Los 6 Principios de Mirador Waikiki

**1. Todo impacta**
Cada acción, por pequeña que parezca, tiene un efecto en la experiencia del cliente y en el ambiente del equipo. Nada es insignificante.

**2. El cliente es sagrado**
El cliente es nuestra razón de ser. Su experiencia, comodidad y satisfacción están por encima de todo. No importa cómo sea el día: el cliente siempre merece lo mejor.

**3. El servicio es colectivo**
No importa tu rol: si ves una necesidad, atendela. Si podés ayudar a un compañero, hacelo. El éxito del equipo es el éxito de todos.

**4. La actitud abre puertas**
La predisposición, el compromiso y las ganas de hacer las cosas bien son valoradas más que cualquier habilidad técnica. Acá se aprende, pero la actitud se trae.

**5. Ser profesional no es ser frío**
Se puede ser amable, cálido y cercano siendo completamente profesional. El trato humano es parte de nuestro servicio diferencial.

**6. Nos cuidamos entre todos**
El equipo se protege mutuamente. Eso significa hablar con respeto, cubrirse cuando alguien lo necesita, y construir un ambiente donde todos puedan trabajar bien.

### Qué se espera de vos

- Llegar a horario (o antes).
- Presentarte en condiciones (uniforme, higiene, actitud).
- Conocer tu rol y cumplirlo con responsabilidad.
- Comunicarte con el equipo de forma clara y respetuosa.
- Reportar problemas o dudas a los encargados, no guardártelos.
- Cuidar el espacio, los materiales y los equipos.
- Tratar a cada cliente como si fuera el más importante.

---

## 3. HORARIOS Y FUNCIONAMIENTO

### Horarios

Los horarios se comunican semanalmente por **WhatsApp**. Es responsabilidad de cada persona revisar su turno con anticipación.

### Fichaje

El fichaje se realiza a través de **WhatsApp**, con el sistema de registro habilitado por la empresa. Debés fichar al entrar y al salir de cada turno. No fichar puede generar inconsistencias en el cálculo de horas.

### Descanso (Media Hora)

Cada turno incluye un descanso de **30 minutos**:

| Turno | Horario del descanso |
|---|---|
| Almuerzo | **11:00 a 11:30** |
| Cena | **19:00 a 19:30** |

Durante ese tiempo podés comer, descansar o hacer una pausa. No se extiende el descanso más allá del tiempo asignado.

### Ausencias

Si no podés asistir a un turno, debés **avisar con la mayor anticipación posible** al encargado por WhatsApp. Las ausencias por enfermedad requieren **certificado médico**. Las ausencias sin justificación pueden tener consecuencias en la evaluación de desempeño.

### Reducción de Personal

En casos de **baja demanda** (temporada baja, días de lluvia, etc.), la empresa puede aplicar una reducción de personal por turno. Esto se comunica en el momento. No implica despido ni penalización: es parte del funcionamiento operativo del negocio.

---

## 4. NORMAS Y CONVIVENCIA (Reglamento Interno)

### 4.1 Respeto

El respeto es la base de todo. No se tolera ningún tipo de discriminación, maltrato, insulto ni conducta violenta, ya sea hacia clientes, compañeros, encargados o cualquier persona que circule por el espacio.

### 4.2 Presentación Personal

- Uniforme completo y en buen estado.
- Higiene personal adecuada.
- Cabello recogido o prolijo.
- Sin accesorios que interfieran con el servicio o representen un riesgo.
- Sin perfumes fuertes que puedan molestar a los clientes.

### 4.3 Puntualidad

La puntualidad es un valor central. Llegar tarde afecta a todo el equipo. Se contemplan situaciones excepcionales, pero las llegadas tarde reiteradas son consideradas en la evaluación de desempeño.

### 4.4 Celular

El uso del celular durante el turno está **prohibido**, salvo en situaciones de emergencia o con autorización expresa del encargado. Los celulares deben estar guardados durante todo el servicio. Esto aplica también en los momentos de menor actividad.

### 4.5 Ámbitos de Descanso

Los espacios de descanso (vestuarios, locker, zona de personal) son para uso exclusivo del personal. No se pueden llevar clientes a esas áreas ni utilizarlas para situaciones ajenas al descanso autorizado.

### 4.6 Responsabilidad en las Tareas

Cada persona es responsable de su área y sus tareas asignadas. Si algo no está claro, se consulta al encargado. No se abandona una tarea sin completarla o sin haberla delegado formalmente.

### 4.7 Prohibiciones

- **Consumir comida sin autorización** del encargado (incluye probar platillos sin permiso).
- **Fumar** dentro del establecimiento o en las áreas de trabajo.
- **Consumir alcohol o sustancias** antes o durante el turno.

### 4.8 Manejo de Conflictos

Si hay un problema o conflicto con un compañero o una situación de trabajo, el camino correcto es hablarlo con el encargado, no manejarlo de manera informal o confrontacional. Los conflictos no resueltos afectan el ambiente de todo el equipo.

---

## 5. LOS TRES ROLES DEL SALÓN

Esta guía está dedicada especialmente a los tres roles que sostienen el servicio en el salón. Cada uno tiene una función distinta, y los tres son igual de necesarios.

---

### 🧹 COMISSES

#### Introducción

El rol del commis es **fundamental para que el servicio funcione de forma fluida y profesional**. Su principal responsabilidad es mantener el salón en orden y apoyar al equipo en todas las tareas de limpieza, reposición y armado.

> El commis tiene que ser **rápido, atento y ordenado**. Es el primer eslabón para que todo el salón se mantenga limpio, presentable y operativo durante el servicio.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Fajinado** | Fajinado constante de la vajilla del salón. |
| **Paneras y cortesía** | Gestionar el pan todos los días (verificar estado) y, en el momento de despacho, armar paneras con su respectiva cortesía del día. |
| **Reposición constante** | Servilletas, cubiertos, copas, vasos y lo necesario en las estaciones de servicio. |
| **Limpieza del salón** | Mantener mesas, sillas y pisos limpios durante todo el turno. Limpiar derrames y desechos de forma inmediata. |
| **Armado de mesas** | Repasar y montar correctamente las mesas cuando se desocupan. |
| **Orden de zonas de trabajo** | Mantener limpios y ordenados los descansos, sin acumulación de objetos innecesarios. |
| **Soporte general** | Ayudar a mozos y runners si el salón está exigido o hay tareas puntuales que lo requieran. |

---

### 🏃 RUNNERS

#### Introducción

El runner cumple un **rol clave como nexo entre cocina y salón**. Es quien se encarga de que los platos lleguen bien a la mesa, que no falte nada y que el cliente tenga todo lo necesario sin tener que pedirlo.

> El runner tiene que estar en **movimiento constante**, con mirada general del salón y actitud resolutiva. Su aporte eleva la experiencia del cliente y sostiene el ritmo del servicio.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Entrega de platos** | Llevar los platos a la mesa con agilidad y cuidado, confirmando que sean correctos (comanda, punto de cocción, guarnición, etc.). |
| **Control de calidad visual** | Verificar que la presentación sea adecuada y que no falte ningún componente antes de salir de cocina. |
| **Atención post-entrega** | Al volver al salón, observar si alguna mesa necesita algo (pan, hielo, servilletas, cubiertos, etc.). |
| **Reposición espontánea** | Llevar lo que falte a la mesa **sin esperar a que lo pidan**. |
| **Colaboración con mozos** | Ayudar en lo que se necesite para que el servicio sea fluido (armado, limpieza rápida, soporte en momentos de alta demanda). |
| **Tareas de apertura y cierre** | Participar activamente en el armado del salón (abrir sombrillas, armar queseras, revisar copas y aderezos, etc.). |
| **Buena actitud y agilidad** | Circular con energía, sin quedarse quieto, siempre atento al salón. |

---

### 🍷 MOZOS

#### Introducción

El mozo es **quien tiene el contacto directo con el cliente y quien lidera la experiencia en la mesa**. Su rol va más allá de tomar pedidos: se trata de brindar un servicio profesional, atento, y generar confianza desde el primer momento.

> El mozo tiene que ser **líder de su sector**, con mirada atenta, excelente comunicación y ganas de brindar una experiencia que supere las expectativas del cliente.

#### Tareas principales

| Tarea | En qué consiste |
|---|---|
| **Presentación inicial** | Saludar cordialmente, presentarse con nombre y predisposición. |
| **Toma de pedidos (comandas)** | Saber escuchar, sugerir platos, detallar ingredientes y comandar correctamente en el sistema. |
| **Conocimiento de carta y menú** | Estar al tanto de los platos, promociones, tiempos de cocina, productos fuera de carta o no disponibles. |
| **Atención constante** | Asegurar que a la mesa no le falte nada (hielo, pan, cubiertos, agua, servilletas) sin que el cliente tenga que pedirlo. |
| **Gestión de tiempos** | Organizar bien sus mesas, anticiparse a las necesidades y avisar de cualquier demora. |
| **Resolución de conflictos** | Actuar con empatía frente a reclamos o errores. No justificarse, sino ofrecer soluciones rápidas. |
| **Manejo de sistema** | Usar correctamente la terminal, separar platos, cargar extras y cerrar cuentas sin errores. |
| **Prolijidad y presencia** | Uniforme limpio, buena postura, cero celular visible y actitud profesional. |

---

## 6. ORGANIGRAMA Y OTROS ROLES

### Dirección y Gestión

| Rol | Nombre |
|-----|--------|
| Director | Agustín Di Iorio |
| Director | Daniel Urcabe |
| Jefe de Cocina | Ángel Sachett |
| Encargado de Salón | Facundo Núñez |
| Encargado de Salón | Enzo Espiño |
| Barra | Bruno Molina |
| Recepción | Paz Rave |
| Administrativa | Romina Márquez |
| Colaborador | Germán Zeluk |

### Otros roles del equipo

**Recepción**
Es el primer contacto del cliente con el local. Recibe, asigna mesas, maneja las reservas y coordina la llegada y salida de los grupos. Es fundamental para la organización del salón.

**Bacha**
Se encarga de la limpieza de vajilla, cubiertos y utensilios. Es un rol clave para mantener el flujo de materiales en cocina y salón. Sin bacha, nada funciona.

**Barra**
Prepara bebidas (alcohólicas y no alcohólicas), café, infusiones y cocktails. Colabora también con el servicio de salón cuando es necesario.

**Calientaplatos**
Tiene a cargo mantener la temperatura de los platos antes de que salgan al salón. Es un rol de soporte a la cocina y al servicio, clave en momentos de alta demanda.

**Cocina**
Prepara todos los platos del menú. Trabaja bajo la dirección del Jefe de Cocina. La coordinación entre cocina y salón es fundamental para el éxito del servicio.

**Caja**
Maneja los cobros, tanto en efectivo como con tarjeta. Emite facturas y tickets. Coordina con los mozos el cierre de cada mesa.

**Encargados**
Son la autoridad operativa del salón. Coordinan al personal, resuelven problemas, atienden las necesidades especiales de los clientes, y son el canal de comunicación entre el equipo y la dirección.

---

## 7. CÓMO INICIAR

El correcto desarrollo de las tareas diarias es **tan importante como la atención al cliente**.

Cada acción —desde armar una panera hasta cerrar el salón— impacta directamente en la experiencia del comensal y en el funcionamiento del equipo.

Esta sección detalla las responsabilidades operativas que todo camarero debe dominar. No se trata solo de "hacer por hacer", sino de hacerlo con **criterio, prolijidad, sentido común y compromiso**.

El objetivo es lograr que cada jornada empiece y termine con orden, limpieza, eficiencia y respeto por el equipo y el cliente.

> ⚠️ **Estas tareas no son opcionales ni "para cuando sobra tiempo": son parte esencial del trabajo.**

Ser parte del staff de Mirador Waikiki implica cumplir con los siguientes puntos fundamentales para asegurar un servicio de calidad, profesional y en sintonía con los valores del equipo.

### 🧍 Presentación y actitud

- Buena presencia (uniforme limpio, higiene, postura profesional).
- Puntualidad y asistencia constante.
- Actitud de servicio: predisposición, empatía y buena energía con clientes y compañeros.
- Comunicación verbal y no verbal adecuada (trato cordial, sin modismos fuera de lugar).
- Aceptar correcciones con humildad y disposición a mejorar.

### 🛠️ Habilidades técnicas

- Manejo correcto de la bandeja (cafetería, bebidas y platos).
- Conocimiento completo de la carta (comidas, bebidas y promociones).
- Saber explicar platos **sin TACC**, opciones veggies y vegetarianas.
- Conocer los tiempos estimados de cada preparación.
- Capacidad de sugerir platos y bebidas con enfoque en la venta.
- Apertura y servicio correcto de vinos.
- Toma de comandas precisa y manejo del sistema de adición sin errores.
- Buen armado de bandejas y presentación prolija en desayunos y meriendas.
- Armado del servicio correcto en ambos turnos.

### 🧩 Comportamiento en equipo

- Colaborar en cualquier tarea asignada, sin excusas.
- Adaptación a los ritmos del salón (saber rendir en días de alto flujo y no "colgarse" en los días tranquilos).
- Disposición a cambiar de rol o repetir plaza cuando sea necesario.
- Participación activa en reuniones y capacitaciones.

### 🚀 Actitud de crecimiento

- Demostrar interés genuino por aprender y mejorar.
- Escuchar devoluciones sin ponerse a la defensiva.
- Buscar oportunidades para aportar al equipo y al servicio.

---

## 8. TAREAS DIARIAS

### 🌅 Apertura

- **Apertura prolija**: limpiar mesas, barrer salón, abrir balcón completo, preparar descansos.
- **Queseras**, teniendo en cuenta los cuidados para no desperdiciar la materia prima.
- **Limones**: cortar y diferenciar cuándo están buenos o malos, para saber si hace falta preparar más cantidad.
- **Aceites**: saber sobre la preparación del aceite, limpiar botellas de aceiteros y accetos.
- **Paneras y cortesías**.
- **Completar aderezos**.
- **Limpieza de bandejas y bandejeros**.
- **Completar servilleteros**, con azúcar, edulcorantes y servilletas.
- **Cambiar fundas** de los sillones interior/exterior cuando no estén para seguir usando.
- **Fajinada completa** de la vajilla.
- **Preparar el servicio a la perfección**.

### 🍽️ Durante el servicio

- Armado y desarmado de servicio.
- Servicio de vino.
- Servicio de trinche.
- Flambear panqueques en la mesa.
- Reponer tés.

### 🌙 Cierre

Realizar un buen cierre implica:

- Limpieza de mesas.
- Barrido del salón.
- Vajilla fajinada.
- Descansos desarmados (interior y exterior).
- Puertas y ventanas cerradas.
- Balcón con sillas acomodadas y sombrillas cerradas.
- Sin papeles ni sobres de azúcar en el suelo.
- Retirar o achicar bolsas de consorcio y tirar si es necesario.

---

## 9. CRITERIOS DE EVALUACIÓN

En Mirador Waikiki creemos que **la forma en que se hacen las cosas es tan importante como las tareas en sí**. Por eso definimos una escala de evaluación clara que nos permite medir el desempeño diario no solo en base al cumplimiento de tareas, sino también a la actitud, el compromiso y el trato con compañeros y clientes.

Esta sección busca dejar en claro qué consideramos un buen comportamiento, qué cosas no se toleran, y cuáles son las actitudes que realmente marcan la diferencia dentro del equipo.

> **La idea no es castigar, sino ordenar y mejorar.** Reconocer a quienes hacen las cosas bien y también dar herramientas para corregir lo que no suma.

### La escala

| Nivel | Qué significa |
|---|---|
| 🟥 **Muy mal** | Comportamientos que afectan gravemente el funcionamiento del equipo o la experiencia del cliente. Pueden derivar en un **apercibimiento, suspensión** o en no tenerte en cuenta para futuras oportunidades (como responsabilidad o continuidad en el puesto). |
| 🟧 **Mal** | Actitudes que no suman, generan desgaste o muestran poca responsabilidad. Se corrigen hablando, pero **si se repiten, bajan la imagen** que el equipo y los encargados tienen de vos. |
| 🟨 **Bien** | Lo mínimo esperable. Se valora, pero **no se premia lo que simplemente es una obligación básica**. |
| 🟩 **Muy bien** | Actitudes que suman, elevan al equipo y generan confianza. Estas personas son consideradas para **liderar, crecer y mantenerse siempre en el grupo**. Acá es donde aparecen las oportunidades. |

---

### Los criterios, uno por uno

| Estación de trabajo | |
|---|---|
| 🟥 Muy mal | Terminar el turno y dejar todo sucio para que otro limpie. |
| 🟧 Mal | Limpiar por encima sin verificar bien. |
| 🟨 Bien | Limpiar su puesto correctamente al retirarse. |
| 🟩 Muy bien | Limpiar su puesto y, si hay tiempo, ayudar a dejar todo en orden general. |

| Comida de personal | |
|---|---|
| 🟥 Muy mal | Quejarse con tono irónico, burlón o generando mal ambiente. |
| 🟧 Mal | Quejarse abiertamente sin buscar solución. |
| 🟨 Bien | Expresar el descontento de forma respetuosa. |
| 🟩 Muy bien | Expresar el descontento de forma amable, calmar el ambiente si fue tenso y proponer una mejora. |

| Llegadas tarde | |
|---|---|
| 🟥 Muy mal | No avisar y encima llegar relajado como si nada. |
| 🟧 Mal | Avisar cuando ya se pasó la hora o llegar seguido tarde. |
| 🟨 Bien | Avisar con tiempo cuando surge algo puntual. |
| 🟩 Muy bien | Avisar con antelación, ofrecer recuperar el tiempo o ayudar más ese día. |

| Uso del celular | |
|---|---|
| 🟥 Muy mal | Revisar el celular en zona de salón o mientras hay clientes. |
| 🟧 Mal | Usarlo en pasillos o cocina sin que haya pausa real. |
| 🟨 Bien | Revisarlo solo en momentos de pausa y fuera de la vista del cliente (baño). |
| 🟩 Muy bien | Usarlo exclusivamente para temas laborales o de emergencia, con discreción total, habiendo pedido permiso y estando fuera del salón. |

| Trato entre compañeros | |
|---|---|
| 🟥 Muy mal | Gritar, burlarse o generar peleas delante de clientes o equipo. |
| 🟧 Mal | Tratar con indiferencia o responder mal bajo presión. |
| 🟨 Bien | Ser respetuoso incluso si hay diferencias. |
| 🟩 Muy bien | Fomentar el buen clima de trabajo, contener a otros si están tensos, dar el ejemplo. |

| Menús | |
|---|---|
| 🟥 Muy mal | No mencionarlos nunca, actuar de manera indiferente. |
| 🟧 Mal | Mencionarlos pero sin ganas ni información clara. |
| 🟨 Bien | Ofrecer los menús como una opción más, sabiendo lo que incluyen. |
| 🟩 Muy bien | Sugerir los menús destacando sus beneficios (precio, rapidez, sabor), y venderlos con entusiasmo y conocimiento. |

| Expresarse | |
|---|---|
| 🟥 Muy mal | Guardarse todo y explotar después, o hacerlo saber de mala manera. |
| 🟧 Mal | No decir nada y dejar que el enojo se note en la atención. |
| 🟨 Bien | Hablar a solas con quien corresponde cuando algo molesta. |
| 🟩 Muy bien | Expresar malestares con respeto, pedir un momento para charlar con los encargados y proponer soluciones o mejoras para que no se repita. |

| Esperar órdenes | |
|---|---|
| 🟥 Muy mal | Estar parado sin hacer nada cuando hay cosas para hacer. |
| 🟧 Mal | Cumplir solo las tareas básicas sin iniciativa. |
| 🟨 Bien | Consultar si pueden ayudar en algo más. |
| 🟩 Muy bien | Anticiparse a las necesidades, mantener todo ordenado, y resolver sin esperar órdenes. |

| Equivocaciones | |
|---|---|
| 🟥 Muy mal | Ocultar un error y dejar que lo descubran otros o los clientes. |
| 🟧 Mal | Admitirlo pero sin buscar solución. |
| 🟨 Bien | Informar el error a tiempo para que se pueda corregir. |
| 🟩 Muy bien | Avisar rápido, proponer cómo arreglarlo y asumir la responsabilidad sin drama. |

| Comandas | |
|---|---|
| 🟥 Muy mal | Anotar mal seguido y responsabilizar a cocina o barra. |
| 🟧 Mal | Olvidarse cosas por no verificar bien. |
| 🟨 Bien | Anotar con claridad y repasar antes de enviar. |
| 🟩 Muy bien | Confirmar con el cliente, detallar bien y asegurar que salga perfecto. |

| Atención al cliente | |
|---|---|
| 🟥 Muy mal | Mostrar desgano, mala cara o ignorar al cliente. |
| 🟧 Mal | Atender por cumplir, sin conexión. |
| 🟨 Bien | Ser correcto, amable y responder dudas. |
| 🟩 Muy bien | Mostrar entusiasmo, recomendar con criterio, anticiparse a lo que el cliente puede necesitar y generar una experiencia memorable. |

| Roturas | |
|---|---|
| 🟥 Muy mal | Reírse como si nada, hacer chistes o burlarse frente a clientes o compañeros. |
| 🟧 Mal | No reaccionar, minimizar la situación o dejar que otros lo limpien. |
| 🟨 Bien | Asumir el error, levantar rápido los restos y avisar a quien corresponda. |
| 🟩 Muy bien | Resolver con agilidad, pedir disculpas si hizo ruido o molestó, y reponer la copa si corresponde sin que lo tengan que pedir. |

| Desayuno / Merienda | |
|---|---|
| 🟥 Muy mal | No se presta atención a la plaza por estar desayunando o merendando. Se abandona la atención al cliente. Falta de respeto al grupo y al trabajo. |
| 🟧 Mal | Se extiende demasiado el desayuno o se charla más de lo necesario. |
| 🟨 Bien | Merienda breve, sin perder totalmente la atención. Se mantiene el respeto por el ritmo de trabajo. |
| 🟩 Muy bien | Se toma el café o la merienda de manera ágil, sin descuidar la plaza. Si hay otro mozo en la misma plaza, se turnan correctamente. |

| Conducta y vocabulario | |
|---|---|
| 🟥 Muy mal | Carcajadas, gritos, lenguaje vulgar o desubicado. Afecta directamente la imagen del lugar. |
| 🟧 Mal | Risas fuertes o comentarios que se escuchan desde el sector cliente. |
| 🟨 Bien | Buena conducta, con algún tono relajado pero respetuoso. |
| 🟩 Muy bien | Actitud profesional. Voz baja, respeto por el entorno y por los compañeros. Se transmite seriedad y calidad. |

| Plazas y mozos a la vista | |
|---|---|
| 🟥 Muy mal | La plaza queda completamente desatendida. El mozo está boludeando o en otro sector sin motivo. **Falta grave.** |
| 🟧 Mal | No hay nadie visible durante varios minutos. El cliente empieza a buscar atención. |
| 🟨 Bien | Aunque no esté siempre visible, el mozo responde con rapidez y atención. |
| 🟩 Muy bien | Siempre hay un mozo a la vista, atento y disponible. El cliente se siente cuidado desde el primer momento. |

| Carta | |
|---|---|
| 🟥 Muy mal | Decir "no sé" o inventar lo que incluye un plato. |
| 🟧 Mal | Dudar o no transmitir seguridad al explicarlo. |
| 🟨 Bien | Conocer los básicos del menú, y consultar en caso de duda. |
| 🟩 Muy bien | Saber cada ítem, recomendar con fundamento y transmitir confianza. |

| Reposición | |
|---|---|
| 🟥 Muy mal | Ver que falta algo y seguir trabajando igual, dejando que otro lo note. |
| 🟧 Mal | Avisar pero no reponer. |
| 🟨 Bien | Reponer o avisar en el momento. |
| 🟩 Muy bien | Reponer, organizar y dejar mejor de lo que estaba. Anticiparse a lo que pueda faltar. |

| Cigarrillo | |
|---|---|
| 🟥 Muy mal | Fumar en el salón, cocina o espacios visibles al cliente. Fumar durante el turno sin permiso. |
| 🟧 Mal | Fumar en momentos inapropiados. |
| 🟨 Bien | Fumar en zonas autorizadas, en pausas designadas y sin afectar el servicio. |
| 🟩 Muy bien | Evitar fumar durante el turno, dar prioridad al servicio y mantener el uniforme impecable (sin olor ni residuos). |

| Versatilidad | |
|---|---|
| 🟥 Muy mal | Negarse sistemáticamente a ayudar en tareas que no son "de su rol", incluso en momentos de necesidad. No colaborar aunque haya compañeros desbordados. |
| 🟧 Mal | Aceptar a regañadientes, con mala actitud, o sólo si se lo ordenan directamente. |
| 🟨 Bien | Estar dispuesto a colaborar en otras tareas cuando se lo piden, aunque no sea habitual. |
| 🟩 Muy bien | Ofrecer ayuda sin que se lo pidan, asumir tareas fuera del rol con buena actitud, entender que el objetivo es que el equipo funcione, no sólo su puesto. |

---

### Cumplimiento de los descansos

En Mirador Waikiki entendemos que **el descanso es necesario** para rendir bien y tener buena energía durante el turno. Pero también es clave que ese descanso se cumpla con responsabilidad y en función del ritmo real del salón.

El descanso estipulado es de **30 minutos**, y debe tomarse en el momento indicado por los encargados o cuando la operación lo permite. Lo que no puede pasar es que el descanso se estire a 40 minutos o más, especialmente en **feriados, fines de semana largos o eventos especiales**, donde el salón está exigido y cada persona cuenta.

> A veces no se nota, pero un descanso más largo en esos momentos deja al equipo con menos manos, genera más estrés y termina perjudicando al cliente.

| 📉 Evaluación del cumplimiento del descanso | |
|---|---|
| 🟥 Muy mal | Tomarse más de 30 minutos sabiendo que no corresponde, especialmente en momentos de alta demanda. Hacerlo sin pedir permiso, desentendiéndose del servicio. En esos casos, además de afectar el funcionamiento, se interpreta como una **falta de respeto al grupo y al trabajo**. |
| 🟧 Mal | Pasarse de los 30 minutos con frecuencia o hacerlo justo cuando más se necesita apoyo, aunque no sea con mala intención. |
| 🟨 Bien | Cumplir los 30 minutos, estar atento al reloj y volver con buena actitud. |
| 🟩 Muy bien | Cumplir siempre el descanso en tiempo y forma. Acortar o postergar su descanso si ve que el equipo lo necesita, sin que se lo pidan y con conciencia de grupo. |

---

### Predisposición horaria

En gastronomía hay momentos del año donde el trabajo se intensifica: **fines de semana, feriados, vacaciones o eventos especiales**. Son días clave para el funcionamiento y la rentabilidad del restaurante, y como equipo necesitamos que todos lo entiendan.

La predisposición horaria **no significa estar disponible 24/7**, sino tener la actitud correcta cuando el restaurante más lo necesita. Es saber que hay días donde quedarse una hora más, cubrir un compañero o dar una mano fuera de tarea directa puede marcar la diferencia entre un buen servicio y un caos.

**Se espera que el equipo:**

- Esté dispuesto a quedarse un poco más si el salón lo requiere.
- No ponga "cara larga" ni genere mal clima en esos días.
- Pregunte si puede ayudar, especialmente cuando se ve que hay presión o faltan manos.

| 📉 Evaluación de la predisposición horaria | |
|---|---|
| 🟥 Muy mal | No tener predisposición nunca. No ofrecer ayuda ni siquiera en días de máximo trabajo. Poner mala cara, evadir tareas o desentenderse del equipo. |
| 🟧 Mal | Hacer lo justo, evitar involucrarse o mostrar incomodidad constante cuando se necesita apoyo extra. |
| 🟨 Bien | Estar dispuesto a colaborar si se lo piden y hacerlo con actitud neutra o respetuosa. |
| 🟩 Muy bien | Anticiparse, ofrecer ayuda sin que lo pidan, quedarse con buena onda cuando se necesita y dar ejemplo al resto. |

---

## 10. PROPINAS

### Cuándo se cobran

Las propinas se distribuyen los **días 2 y 17 de cada mes**.

### Distribución

| Sector | Porcentaje |
|---|---|
| **Salón** (mozos, runners, comisses, recepción, barra, etc.) | **60%** |
| **Cocina** (incluyendo bacha y calientaplatos) | **40%** |

### Cálculo

La distribución se calcula en base a las **horas trabajadas** por cada persona en el período correspondiente. A más horas trabajadas, mayor parte de la propina.

### Mozos y Runners

Los mozos y runners tienen un **sistema diferente** de distribución de propinas. El detalle de ese sistema está en la guía específica para esos roles.

---

## 11. PAGOS

| Concepto | Detalle |
|---|---|
| **Frecuencia** | Mensual. |
| **Escala salarial** | Escala de **UTHGRA** (Unión de Trabajadores del Turismo, Hotelería y Gastronomía de la República Argentina). |
| **Cálculo de días** | La jornada laboral estándar equivale a **8.5 horas = 1 día** trabajado. |
| **Feriados** | Se pagan al **doble** de la jornada normal. |

---

## 12. EMPRESAS DEL COMPLEJO

Mirador Waikiki forma parte de un complejo más amplio. Estas son las empresas que integran el grupo:

**ili ili Hotel Boutique**
Hotel boutique con **17 habitaciones** ubicado dentro del complejo. Ofrece alojamiento de categoría frente al mar.

**Balneario Waikiki**
Espacio de playa y pileta del complejo. Funciona en temporada estival y es parte de la experiencia de ocio del lugar.

**Mar Eventos**
Empresa de organización de eventos: **bodas, fiestas de XV años, eventos corporativos** y más. Utiliza los espacios del complejo para sus celebraciones.

**Mirador 9**
Restaurante y espacio de eventos dentro del complejo. **En verano funciona todos los días**; el **resto del año, fines de semana y feriados**. Es el espacio principal donde trabajamos.

---

## 13. PREGUNTAS FRECUENTES

**¿Cómo consigo mi locker?**
Solicitá la llave al encargado de turno. Se te asignará uno disponible.

**¿Dónde están los vestuarios?**
Los vestuarios están disponibles para todo el personal. Consultá la ubicación con tu encargado si no la conocés.

**¿Cómo registro mi asistencia?**
El fichaje se realiza por **WhatsApp** usando el sistema habilitado por la empresa. Hacelo al entrar y al salir.

**¿Tengo descuento en el consumo?**
Sí. El personal tiene un **50% de descuento** en el consumo del restaurante, **excepto en bebidas alcohólicas**.

**¿Hay café de personal?**
Sí, hay café disponible para el personal. Consultá con el encargado el horario y lugar habilitado.

**¿Qué hago si me enfermo?**
Avisá lo antes posible al encargado y presentá el **certificado médico** correspondiente.

**¿La empresa provee el uniforme?**
Sí, el uniforme es provisto por la empresa. Sin embargo, cada empleado debe traer su propio **destapador, lapicera y anotador**.

**¿Quién desayuna?**
Solo los empleados con turnos que comienzan a las **7:30, 8:00 o 9:00** tienen desayuno incluido.

**¿Dónde están los baños?**
- **Personal**: baños de uso exclusivo ubicados en **planta baja**.
- **Clientes**: dos baños bajando las escaleras + uno en el sector **Ala Wai**.

**¿Qué hago al terminar mi turno?**
Al finalizar el turno, salís sin uniforme y te retirás de las zonas de trabajo. No podés quedarte en las áreas operativas del local fuera de tu turno.

**¿Puedo estar en el área de trabajo antes de que empiece mi turno?**
No. Antes de que empiece tu turno, debés esperar **fuera del área de servicio**. Ingresás cuando el encargado te lo indique.

**¿Dónde puedo consultar los platos del menú?**
Toda la información sobre platos, ingredientes y preparaciones está en la **Guía de Platos e Ingredientes**, disponible en la aplicación.

---

*Guía para Nuevos y No Tan Nuevos — Mar del Plata, Buenos Aires. 2025*

**¡SIGAMOS CRECIENDO JUNTOS!**

$GUIDE$
  WHERE id = v_guide_id;
END IF;

SELECT id INTO v_exam_id FROM exams WHERE guide_id = v_guide_id;

IF v_exam_id IS NULL THEN
  INSERT INTO exams (guide_id, title, passing_score)
  VALUES (v_guide_id, 'Examen: Guía para Nuevos y No Tan Nuevos', 70)
  RETURNING id INTO v_exam_id;
ELSE
  UPDATE exams SET title = 'Examen: Guía para Nuevos y No Tan Nuevos', passing_score = 70 WHERE id = v_exam_id;
END IF;

DELETE FROM exam_questions WHERE exam_id = v_exam_id;

INSERT INTO exam_questions (exam_id, question, options, correct_option) VALUES
(v_exam_id,
 '¿Con cuánta anticipación se recomienda llegar antes del horario pautado?',
 '["5 minutos", "10 minutos", "15 minutos", "30 minutos"]',
 2),

(v_exam_id,
 '¿Qué ropa debés usar hasta recibir el uniforme oficial?',
 '["Ropa de cualquier color", "Ropa de color negro", "Ropa de color blanco", "No importa la ropa"]',
 1),

(v_exam_id,
 '¿A quién debés presentarte al llegar tu primer día?',
 '["Al director Agustín Di Iorio", "A Facundo o Enzo (encargados de salón)", "A Bruno Molina (barra)", "A Paz Rave (recepción)"]',
 1),

(v_exam_id,
 '¿Dónde podés guardar tus pertenencias personales durante el turno?',
 '["En la barra", "En la cocina", "En los lockers", "En la recepción"]',
 2),

(v_exam_id,
 '¿Cuál es el primer principio de Mirador Waikiki?',
 '["El cliente es sagrado", "Todo impacta", "La actitud abre puertas", "Nos cuidamos entre todos"]',
 1),

(v_exam_id,
 '¿Qué significa el principio "El servicio es colectivo"?',
 '["Cada uno hace solo su tarea asignada", "Si ves una necesidad, atendela; si podés ayudar, hacelo", "El mozo hace todo el trabajo", "Los encargados son responsables de todo"]',
 1),

(v_exam_id,
 'Según la filosofía de Mirador Waikiki, ¿qué se valora más que las habilidades técnicas?',
 '["Los años de experiencia", "Los títulos académicos", "La actitud, predisposición y ganas de trabajar bien", "El aspecto físico"]',
 2),

(v_exam_id,
 '¿Qué implica el principio "Ser profesional no es ser frío"?',
 '["Hay que ser distante con los clientes", "Se puede ser amable y cercano siendo completamente profesional", "La frialdad es parte del servicio de calidad", "No se debe hablar con los clientes"]',
 1),

(v_exam_id,
 '¿Cuál es la principal responsabilidad del commis?',
 '["Tomar los pedidos de las mesas", "Mantener el salón en orden y apoyar en limpieza, reposición y armado", "Preparar las bebidas en la barra", "Cobrar las cuentas de los clientes"]',
 1),

(v_exam_id,
 'Según la guía, ¿qué tres cualidades debe tener el commis?',
 '["Creativo, independiente y silencioso", "Rápido, atento y ordenado", "Carismático, vendedor y extrovertido", "Fuerte, veloz y callado"]',
 1),

(v_exam_id,
 '¿Qué tarea del commis consiste en gestionar el pan y armar las paneras con la cortesía del día?',
 '["Fajinado", "Paneras y cortesía", "Reposición constante", "Armado de mesas"]',
 1),

(v_exam_id,
 '¿Qué debe hacer el commis cuando una mesa se desocupa?',
 '["Esperar a que el mozo la arme", "Repasar y montar correctamente la mesa", "Dejarla sin armar hasta el cierre", "Avisar a recepción únicamente"]',
 1),

(v_exam_id,
 '¿Qué rol cumple el runner dentro del servicio?',
 '["Es el nexo entre cocina y salón", "Es el responsable de la caja", "Es el encargado de las reservas", "Es quien dirige la cocina"]',
 0),

(v_exam_id,
 'Antes de salir de cocina con un plato, ¿qué debe verificar el runner?',
 '["Solo que el plato esté caliente", "Que la presentación sea adecuada y que no falte ningún componente", "Que el mozo esté disponible", "Que la mesa haya pagado"]',
 1),

(v_exam_id,
 '¿Qué debe hacer el runner al volver al salón después de entregar un plato?',
 '["Ir directo a la cocina por el siguiente pedido", "Observar si alguna mesa necesita algo (pan, hielo, servilletas, cubiertos)", "Esperar en la estación hasta que lo llamen", "Tomar un descanso breve"]',
 1),

(v_exam_id,
 '¿Qué significa la "reposición espontánea" en el rol del runner?',
 '["Reponer solo cuando el cliente lo pide", "Llevar lo que falte a la mesa sin esperar a que lo pidan", "Reponer únicamente al cierre del turno", "Avisar al mozo para que reponga él"]',
 1),

(v_exam_id,
 '¿Qué caracteriza principalmente al rol del mozo?',
 '["Tiene el contacto directo con el cliente y lidera la experiencia en la mesa", "Se ocupa exclusivamente de la limpieza", "Trabaja siempre dentro de la cocina", "Solo cobra las cuentas"]',
 0),

(v_exam_id,
 'Frente a un reclamo o un error, ¿cómo debe actuar el mozo?',
 '["Justificarse y explicar de quién fue la culpa", "Actuar con empatía y ofrecer soluciones rápidas, sin justificarse", "Derivar siempre al encargado sin intervenir", "Ignorar el reclamo si no fue su error"]',
 1),

(v_exam_id,
 '¿Qué incluye la tarea de "atención constante" del mozo?',
 '["Estar parado junto a la mesa todo el tiempo", "Asegurar que a la mesa no le falte nada sin que el cliente tenga que pedirlo", "Preguntar cada cinco minutos si necesitan algo", "Atender solo cuando el cliente levanta la mano"]',
 1),

(v_exam_id,
 'Respecto a la prolijidad y presencia, ¿qué exige la guía al mozo?',
 '["Uniforme limpio, buena postura, cero celular visible y actitud profesional", "Solo uniforme limpio", "Usar el celular únicamente para comandas", "Vestimenta libre mientras sea prolija"]',
 0),

(v_exam_id,
 'Según la guía, las tareas operativas diarias son...',
 '["Opcionales, para cuando sobra tiempo", "Parte esencial del trabajo, no opcionales", "Responsabilidad exclusiva del commis", "Solo obligatorias en temporada alta"]',
 1),

(v_exam_id,
 '¿Qué habilidad técnica menciona la guía respecto a las opciones alimentarias?',
 '["Saber explicar platos sin TACC, opciones veggies y vegetarianas", "Saber preparar los platos sin TACC", "Derivar esas consultas a cocina siempre", "Ofrecer solo platos tradicionales"]',
 0),

(v_exam_id,
 'Dentro de "Comportamiento en equipo", ¿qué implica la adaptación a los ritmos del salón?',
 '["Trabajar siempre al mismo ritmo", "Rendir en días de alto flujo y no colgarse en los días tranquilos", "Reducir el ritmo en días tranquilos", "Pedir cambio de plaza en días exigidos"]',
 1),

(v_exam_id,
 '¿Qué actitud describe la "Actitud de crecimiento"?',
 '["Escuchar devoluciones sin ponerse a la defensiva", "Evitar las devoluciones para no generar conflicto", "Aceptar solo devoluciones de los directores", "Responder a cada devolución con una explicación"]',
 0),

(v_exam_id,
 '¿Qué incluye la apertura prolija del salón?',
 '["Limpiar mesas, barrer salón, abrir balcón completo y preparar descansos", "Solo abrir las puertas y encender luces", "Únicamente armar las mesas", "Esperar indicaciones del encargado"]',
 0),

(v_exam_id,
 'Respecto a los limones, ¿qué debe saber el personal?',
 '["Cortarlos y diferenciar cuándo están buenos o malos para saber si hace falta más cantidad", "Cortarlos solo si lo pide el mozo", "Usar únicamente limones ya cortados por cocina", "Cortarlos al final del turno"]',
 0),

(v_exam_id,
 '¿Cuál de estas es una tarea de servicio mencionada en la guía?',
 '["Flambear panqueques en la mesa", "Preparar los postres en cocina", "Diseñar la carta de vinos", "Cargar el stock de bebidas"]',
 0),

(v_exam_id,
 '¿Qué implica realizar un buen cierre?',
 '["Solo limpiar las mesas y retirarse", "Limpieza de mesas, barrido, vajilla fajinada, descansos desarmados, puertas y ventanas cerradas, balcón acomodado y sin residuos", "Cerrar la caja y apagar las luces", "Dejar el salón armado para el día siguiente sin limpiar"]',
 1),

(v_exam_id,
 '¿Cuántos niveles tiene la escala de evaluación de Mirador Waikiki?',
 '["Tres", "Cuatro", "Cinco", "Seis"]',
 1),

(v_exam_id,
 '¿Qué representa el nivel 🟨 (Bien) en la escala de evaluación?',
 '["Un desempeño sobresaliente que se premia", "Lo mínimo esperable: se valora, pero no se premia lo que es una obligación básica", "Un desempeño que requiere corrección", "Una falta leve"]',
 1),

(v_exam_id,
 '¿Qué puede derivar de un comportamiento calificado como 🟥 (Muy mal)?',
 '["Una simple charla informal", "Apercibimiento, suspensión o no ser tenido en cuenta para futuras oportunidades", "Una advertencia escrita únicamente", "Ninguna consecuencia si no se repite"]',
 1),

(v_exam_id,
 'Según la guía, ¿cuál es la idea detrás del sistema de evaluación?',
 '["Castigar a quienes no cumplen", "Ordenar y mejorar: reconocer a quienes hacen las cosas bien y dar herramientas para corregir", "Definir despidos", "Comparar el rendimiento entre compañeros"]',
 1),

(v_exam_id,
 'En el criterio "Uso del celular", ¿qué se considera 🟩 Muy bien?',
 '["Usarlo solo en la cocina", "Usarlo exclusivamente para temas laborales o de emergencia, con discreción, con permiso y fuera del salón", "Revisarlo en los momentos de pausa dentro del salón", "No llevar celular al trabajo"]',
 1),

(v_exam_id,
 'En el criterio "Equivocaciones", ¿qué se considera 🟥 Muy mal?',
 '["Admitir el error sin buscar solución", "Ocultar un error y dejar que lo descubran otros o los clientes", "Informar el error tarde", "Pedir ayuda para resolverlo"]',
 1),

(v_exam_id,
 'En el criterio "Esperar órdenes", ¿qué comportamiento es 🟩 Muy bien?',
 '["Consultar si pueden ayudar en algo más", "Anticiparse a las necesidades, mantener todo ordenado y resolver sin esperar órdenes", "Cumplir las tareas básicas asignadas", "Esperar instrucciones para no equivocarse"]',
 1),

(v_exam_id,
 'En el criterio "Plazas y mozos a la vista", ¿qué se considera falta grave?',
 '["No estar visible durante un minuto", "Que la plaza quede completamente desatendida estando el mozo en otro sector sin motivo", "Atender dos mesas al mismo tiempo", "Responder con demora a un llamado"]',
 1),

(v_exam_id,
 'En el criterio "Carta", ¿qué se considera 🟥 Muy mal?',
 '["Consultar en caso de duda", "Decir \"no sé\" o inventar lo que incluye un plato", "Explicar el plato con inseguridad", "Recomendar un plato sin probarlo"]',
 1),

(v_exam_id,
 'En el criterio "Versatilidad", ¿qué se considera 🟥 Muy mal?',
 '["Aceptar tareas de mala gana", "Negarse sistemáticamente a ayudar en tareas que no son de su rol, incluso en momentos de necesidad", "Colaborar solo cuando se lo piden", "Priorizar su puesto antes de ayudar"]',
 1),

(v_exam_id,
 '¿Cuántos minutos dura el descanso estipulado?',
 '["20 minutos", "30 minutos", "40 minutos", "45 minutos"]',
 1),

(v_exam_id,
 '¿En qué horario es el descanso del turno almuerzo?',
 '["10:00 a 10:30", "11:00 a 11:30", "12:00 a 12:30", "13:00 a 13:30"]',
 1),

(v_exam_id,
 'Tomarse más de 30 minutos de descanso en un momento de alta demanda y sin pedir permiso se interpreta como...',
 '["Un descuido menor", "Una falta de respeto al grupo y al trabajo", "Algo aceptable si se avisa después", "Un problema solo si se repite"]',
 1),

(v_exam_id,
 '¿Qué significa la predisposición horaria según la guía?',
 '["Estar disponible 24/7", "Tener la actitud correcta cuando el restaurante más lo necesita", "Aceptar cualquier cambio de turno sin aviso", "Trabajar todos los feriados obligatoriamente"]',
 1),

(v_exam_id,
 '¿Qué se espera del equipo en días de alta demanda?',
 '["Cumplir estrictamente el horario y retirarse", "Estar dispuesto a quedarse un poco más, no poner mala cara y preguntar si puede ayudar", "Pedir horas extras por adelantado", "Reducir el ritmo para no agotarse"]',
 1),

(v_exam_id,
 '¿Está permitido el uso del celular durante el turno?',
 '["Sí, en cualquier momento", "No, salvo emergencias o autorización expresa del encargado", "Sí, solo en el salón", "Sí, durante los momentos de menor actividad"]',
 1),

(v_exam_id,
 '¿Qué se requiere para justificar una ausencia por enfermedad?',
 '["Un aviso por WhatsApp únicamente", "Certificado médico", "La autorización de un compañero", "Nada, alcanza con avisar"]',
 1),

(v_exam_id,
 '¿Cuál de estas es una prohibición explícita del reglamento interno?',
 '["Hablar con los clientes fuera del pedido", "Consumir comida sin autorización del encargado", "Cambiar de plaza durante el turno", "Tomar agua durante el servicio"]',
 1),

(v_exam_id,
 'Si tenés un conflicto con un compañero, ¿cuál es el camino correcto?',
 '["Resolverlo directamente en el momento", "Hablarlo con el encargado", "Comentarlo con el resto del equipo", "Ignorarlo hasta que se resuelva solo"]',
 1),

(v_exam_id,
 '¿Qué días se distribuyen las propinas?',
 '["Los días 1 y 15", "Los días 2 y 17", "Los días 5 y 20", "El último día de cada mes"]',
 1),

(v_exam_id,
 '¿Cómo se reparten las propinas entre salón y cocina?',
 '["50% y 50%", "60% salón y 40% cocina", "70% salón y 30% cocina", "40% salón y 60% cocina"]',
 1),

(v_exam_id,
 '¿Cuántas horas equivalen a un día trabajado?',
 '["8 horas", "8.5 horas", "9 horas", "10 horas"]',
 1),

(v_exam_id,
 '¿Cómo se pagan los feriados?',
 '["Igual que un día normal", "Al doble de la jornada normal", "Con un 50% adicional", "Con un día de franco compensatorio"]',
 1),

(v_exam_id,
 '¿Cuántas habitaciones tiene ili ili Hotel Boutique?',
 '["12", "15", "17", "20"]',
 2),

(v_exam_id,
 '¿Qué descuento tiene el personal en el consumo del restaurante?',
 '["25%, incluyendo bebidas alcohólicas", "50%, excepto bebidas alcohólicas", "50%, incluyendo todo", "30%, excepto postres"]',
 1),

(v_exam_id,
 '¿Quiénes tienen derecho al desayuno en el local?',
 '["Todos los empleados sin excepción", "Solo los mozos y encargados", "Los empleados con turnos desde las 7:30, 8:00 o 9:00", "Solo los encargados"]',
 2),

(v_exam_id,
 '¿Dónde están los baños de uso exclusivo del personal?',
 '["En el primer piso", "En la planta baja", "En el sector Ala Wai", "Junto a la cocina"]',
 1),

(v_exam_id,
 '¿Qué artículos personales debe traer cada empleado aunque el uniforme sea provisto por la empresa?',
 '["Zapatos negros y medias", "Destapador, lapicera y anotador", "Delantal y guantes", "Ninguno, la empresa provee todo"]',
 1),

(v_exam_id,
 '¿Podés estar en el área de servicio antes de que empiece tu turno?',
 '["Sí, para preparar tu estación", "No, debés esperar fuera hasta que el encargado lo indique", "Sí, si ya fichaste", "Sí, hasta 30 minutos antes"]',
 1);

RAISE NOTICE 'Guia para Nuevos actualizada: 57 preguntas.';

END $$;
