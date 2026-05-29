DO $$
DECLARE
  v_guide_id uuid;
  v_exam_id uuid;
BEGIN

-- ============================================================
-- GUÍA PARA NUEVOS Y NO TAN NUEVOS
-- ============================================================

SELECT id INTO v_guide_id FROM guides WHERE title = 'Guía para Nuevos y No Tan Nuevos';

IF v_guide_id IS NULL THEN
  INSERT INTO guides (title, description, content)
  VALUES (
    'Guía para Nuevos y No Tan Nuevos',
    'Guía de incorporación para todo el personal de Mirador Waikiki: filosofía, normas, roles, evaluación, propinas, pagos y preguntas frecuentes.',
    $GUIDE$
# Guía para Nuevos y No Tan Nuevos

## PRESENTACIÓN

Bienvenidos a todos los lectores a la Guía para Nuevos y No Tan Nuevos. Este archivo fue creado especialmente para todas las personas que se suman a nuestro equipo. Acá vas a encontrar la información clave que necesitás para empezar a trabajar con nosotros de forma clara, organizada y sabiendo qué se espera de vos.

Queremos que este material te sirva como guía para conocer nuestra filosofía, entender cómo funciona el día a día en el salón, qué conductas valoramos, cómo se organizan las tareas, y también para que te familiarices con el espacio y el equipo.

Nuestro objetivo es que te sientas parte desde el primer momento. Por eso, te invitamos a leer este archivo completo, con atención, y a consultarlo siempre que tengas dudas.

¡Bienvenido/a!

---

## 1. CÓMO EMPEZAR

### Introducción

Mirador Waikiki es mucho más que un restaurante: es un espacio icónico frente al mar que ofrece una experiencia 360°, con una propuesta cuidada, ambiente relajado y un servicio profesional. Acá no solo se trabaja bien, se trabaja en equipo, con la meta de que cada cliente se lleve algo más que una comida: una sensación positiva.

Ser parte de este lugar significa integrarse a un equipo grande, con roles bien definidos (mozos, runners, comisses, recepcionistas, bacha, ensaladas, encargados, barra y cocina), donde cada persona cumple un papel fundamental.

No hay tareas chicas ni roles menos importantes: todo lo que hacés impacta directamente en el funcionamiento del salón y en la experiencia del cliente.

### Primeros Pasos

Para arrancar con el pie derecho, estos son algunos puntos importantes que tenés que tener en cuenta antes y durante tu primer día en Mirador Waikiki:

**¿Cuándo llego?**
Lo ideal es llegar **15 minutos antes** del horario pautado.

**¿Dónde dejo mis cosas?**
Contamos con **lockers** disponibles para guardar tus pertenencias. Si todavía no tenés uno asignado, consultá con el encargado.

**¿Qué ropa uso hasta tener el uniforme?**
Hasta que recibas tu uniforme oficial, usá **ropa de color negro** (pantalón y remera o camisa negra). La imagen del equipo es parte del servicio.

**¿A quién le aviso que llegué?**
Al llegar, presentate con **Facundo o Enzo** (encargados de salón). Ellos te van a indicar cómo arrancar y dónde estar.

**🔒 Detalles importantes:**
- El celular NO se usa durante el turno (salvo excepciones autorizadas).
- Dentro del área de trabajo, siempre con actitud profesional.
- Si tenés alguna duda, preguntá. Es preferible consultar antes que equivocarse.
- Las tareas se hacen completas: no "a medias".
- Tratá bien a todos: clientes, compañeros y encargados.

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
- **Turno almuerzo**: el descanso es entre las **11:00 y las 11:30**.
- **Turno cena**: el descanso es entre las **19:00 y las 19:30**.

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

## 5. ROLES Y ORGANIGRAMA

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

### Descripción de Roles

**Recepción**
Es el primer contacto del cliente con el local. Recibe, asigna mesas, maneja las reservas y coordina la llegada y salida de los grupos. Es fundamental para la organización del salón.

**Bacha**
Se encarga de la limpieza de vajilla, cubiertos y utensilios. Es un rol clave para mantener el flujo de materiales en cocina y salón. Sin bacha, nada funciona.

**Mozos**
Atienden las mesas, toman los pedidos, sirven los platos y cobran. Son la cara visible del servicio y tienen una responsabilidad directa en la experiencia del cliente. Trabajan en conjunto con runners y comisses.

**Barra**
Prepara bebidas (alcohólicas y no alcohólicas), café, infusiones y cocktails. Colabora también con el servicio de salón cuando es necesario.

**Calientaplatos**
Tiene a cargo mantener la temperatura de los platos antes de que salgan al salón. Es un rol de soporte a la cocina y al servicio, clave en momentos de alta demanda.

**Runners**
Llevan los platos desde la cocina hasta las mesas. Trabajan de forma coordinada con mozos y cocina. Deben conocer la carta para poder orientarse.

**Comisses**
Apoyan al mozo en las tareas operativas: montar mesas, reponer insumos, desbarazar platos, rellenar agua, llevar pan, etc.

**Cocina**
Prepara todos los platos del menú. Trabaja bajo la dirección del Jefe de Cocina. La coordinación entre cocina y salón es fundamental para el éxito del servicio.

**Caja**
Maneja los cobros, tanto en efectivo como con tarjeta. Emite facturas y tickets. Coordina con los mozos el cierre de cada mesa.

**Encargados**
Son la autoridad operativa del salón. Coordinan al personal, resuelven problemas, atienden las necesidades especiales de los clientes, y son el canal de comunicación entre el equipo y la dirección.

---

## 6. CRITERIOS DE EVALUACIÓN

La empresa evalúa el desempeño del personal con un sistema de colores:

- 🟥 **Rojo**: Conducta inaceptable / problema grave
- 🟧 **Naranja**: Necesita mejorar
- 🟨 **Amarillo**: Aceptable, pero con margen de mejora
- 🟩 **Verde**: Bueno / Ejemplar

### Ítems Evaluados

| Ítem | Descripción |
|------|-------------|
| Estación de trabajo | Orden y limpieza de tu área |
| Comida de personal | Uso correcto del beneficio (horario, lugar, porción) |
| Llegadas tarde | Puntualidad en los turnos |
| Uso del celular | Ausencia del celular durante el servicio |
| Expresarse | Comunicación clara y respetuosa |
| Trato entre compañeros | Respeto y colaboración con el equipo |
| Esperar órdenes | No actuar sin indicación cuando hay duda |
| Equivocaciones | Cómo se manejan los errores |
| Roturas | Cuidado del material y la vajilla |
| Conducta y vocabulario | Lenguaje apropiado dentro del trabajo |
| Versatilidad | Capacidad de adaptarse a distintos roles o tareas |
| Reposición | Mantener insumos completos en el área de trabajo |
| Cigarrillo | Cumplimiento de la norma de no fumar |
| Cumplimiento de descansos | Respetar los tiempos de descanso asignados |
| Predisposición horaria | Disponibilidad y actitud frente a cambios de turno |

---

## 7. PROPINAS

### Cuándo se cobran

Las propinas se distribuyen los **días 2 y 17 de cada mes**.

### Distribución

- **60%** corresponde al **salón** (mozos, runners, comisses, recepción, barra, etc.)
- **40%** corresponde a **cocina** (incluyendo bacha y calientaplatos)

### Cálculo

La distribución se calcula en base a las **horas trabajadas** por cada persona en el período correspondiente. A más horas trabajadas, mayor parte de la propina.

### Mozos y Runners

Los mozos y runners tienen un **sistema diferente** de distribución de propinas. El detalle de ese sistema está en la guía específica para esos roles.

---

## 8. PAGOS

### Frecuencia

Los pagos se realizan de forma **mensual**.

### Escala Salarial

Los salarios se rigen por la escala de **UTHGRA** (Unión de Trabajadores del Turismo, Hotelería y Gastronomía de la República Argentina).

### Cálculo de días

La jornada laboral estándar equivale a **8.5 horas = 1 día** trabajado.

### Feriados

Los **feriados** se pagan al **doble** de la jornada normal.

---

## 9. EMPRESAS DEL COMPLEJO

Mirador Waikiki forma parte de un complejo más amplio. Estas son las empresas que integran el grupo:

### ili ili Hotel Boutique
Hotel boutique con **17 habitaciones** ubicado dentro del complejo. Ofrece alojamiento de categoría frente al mar.

### Balneario Waikiki
Espacio de playa y pileta del complejo. Funciona en temporada estival y es parte de la experiencia de ocio del lugar.

### Mar Eventos
Empresa de organización de eventos: **bodas, fiestas de XV años, eventos corporativos** y más. Utiliza los espacios del complejo para sus celebraciones.

### Mirador 9
Restaurante y espacio de eventos dentro del complejo. **En verano funciona todos los días**; el **resto del año, fines de semana y feriados**. Es el espacio principal donde trabajamos.

---

## 10. PREGUNTAS FRECUENTES

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
$GUIDE$
  )
  RETURNING id INTO v_guide_id;
ELSE
  UPDATE guides
  SET
    description = 'Guía de incorporación para todo el personal de Mirador Waikiki: filosofía, normas, roles, evaluación, propinas, pagos y preguntas frecuentes.',
    content = $GUIDE$
# Guía para Nuevos y No Tan Nuevos

## PRESENTACIÓN

Bienvenidos a todos los lectores a la Guía para Nuevos y No Tan Nuevos. Este archivo fue creado especialmente para todas las personas que se suman a nuestro equipo. Acá vas a encontrar la información clave que necesitás para empezar a trabajar con nosotros de forma clara, organizada y sabiendo qué se espera de vos.

Queremos que este material te sirva como guía para conocer nuestra filosofía, entender cómo funciona el día a día en el salón, qué conductas valoramos, cómo se organizan las tareas, y también para que te familiarices con el espacio y el equipo.

Nuestro objetivo es que te sientas parte desde el primer momento. Por eso, te invitamos a leer este archivo completo, con atención, y a consultarlo siempre que tengas dudas.

¡Bienvenido/a!

---

## 1. CÓMO EMPEZAR

### Introducción

Mirador Waikiki es mucho más que un restaurante: es un espacio icónico frente al mar que ofrece una experiencia 360°, con una propuesta cuidada, ambiente relajado y un servicio profesional. Acá no solo se trabaja bien, se trabaja en equipo, con la meta de que cada cliente se lleve algo más que una comida: una sensación positiva.

Ser parte de este lugar significa integrarse a un equipo grande, con roles bien definidos (mozos, runners, comisses, recepcionistas, bacha, ensaladas, encargados, barra y cocina), donde cada persona cumple un papel fundamental.

No hay tareas chicas ni roles menos importantes: todo lo que hacés impacta directamente en el funcionamiento del salón y en la experiencia del cliente.

### Primeros Pasos

Para arrancar con el pie derecho, estos son algunos puntos importantes que tenés que tener en cuenta antes y durante tu primer día en Mirador Waikiki:

**¿Cuándo llego?**
Lo ideal es llegar **15 minutos antes** del horario pautado.

**¿Dónde dejo mis cosas?**
Contamos con **lockers** disponibles para guardar tus pertenencias. Si todavía no tenés uno asignado, consultá con el encargado.

**¿Qué ropa uso hasta tener el uniforme?**
Hasta que recibas tu uniforme oficial, usá **ropa de color negro** (pantalón y remera o camisa negra). La imagen del equipo es parte del servicio.

**¿A quién le aviso que llegué?**
Al llegar, presentate con **Facundo o Enzo** (encargados de salón). Ellos te van a indicar cómo arrancar y dónde estar.

**Detalles importantes:**
- El celular NO se usa durante el turno (salvo excepciones autorizadas).
- Dentro del área de trabajo, siempre con actitud profesional.
- Si tenés alguna duda, preguntá. Es preferible consultar antes que equivocarse.
- Las tareas se hacen completas: no "a medias".
- Tratá bien a todos: clientes, compañeros y encargados.

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
- **Turno almuerzo**: el descanso es entre las **11:00 y las 11:30**.
- **Turno cena**: el descanso es entre las **19:00 y las 19:30**.

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

## 5. ROLES Y ORGANIGRAMA

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

### Descripción de Roles

**Recepción**
Es el primer contacto del cliente con el local. Recibe, asigna mesas, maneja las reservas y coordina la llegada y salida de los grupos. Es fundamental para la organización del salón.

**Bacha**
Se encarga de la limpieza de vajilla, cubiertos y utensilios. Es un rol clave para mantener el flujo de materiales en cocina y salón. Sin bacha, nada funciona.

**Mozos**
Atienden las mesas, toman los pedidos, sirven los platos y cobran. Son la cara visible del servicio y tienen una responsabilidad directa en la experiencia del cliente. Trabajan en conjunto con runners y comisses.

**Barra**
Prepara bebidas (alcohólicas y no alcohólicas), café, infusiones y cocktails. Colabora también con el servicio de salón cuando es necesario.

**Calientaplatos**
Tiene a cargo mantener la temperatura de los platos antes de que salgan al salón. Es un rol de soporte a la cocina y al servicio, clave en momentos de alta demanda.

**Runners**
Llevan los platos desde la cocina hasta las mesas. Trabajan de forma coordinada con mozos y cocina. Deben conocer la carta para poder orientarse.

**Comisses**
Apoyan al mozo en las tareas operativas: montar mesas, reponer insumos, desbarazar platos, rellenar agua, llevar pan, etc.

**Cocina**
Prepara todos los platos del menú. Trabaja bajo la dirección del Jefe de Cocina. La coordinación entre cocina y salón es fundamental para el éxito del servicio.

**Caja**
Maneja los cobros, tanto en efectivo como con tarjeta. Emite facturas y tickets. Coordina con los mozos el cierre de cada mesa.

**Encargados**
Son la autoridad operativa del salón. Coordinan al personal, resuelven problemas, atienden las necesidades especiales de los clientes, y son el canal de comunicación entre el equipo y la dirección.

---

## 6. CRITERIOS DE EVALUACIÓN

La empresa evalúa el desempeño del personal con un sistema de colores:

- Rojo: Conducta inaceptable / problema grave
- Naranja: Necesita mejorar
- Amarillo: Aceptable, pero con margen de mejora
- Verde: Bueno / Ejemplar

### Ítems Evaluados

| Ítem | Descripción |
|------|-------------|
| Estación de trabajo | Orden y limpieza de tu área |
| Comida de personal | Uso correcto del beneficio (horario, lugar, porción) |
| Llegadas tarde | Puntualidad en los turnos |
| Uso del celular | Ausencia del celular durante el servicio |
| Expresarse | Comunicación clara y respetuosa |
| Trato entre compañeros | Respeto y colaboración con el equipo |
| Esperar órdenes | No actuar sin indicación cuando hay duda |
| Equivocaciones | Cómo se manejan los errores |
| Roturas | Cuidado del material y la vajilla |
| Conducta y vocabulario | Lenguaje apropiado dentro del trabajo |
| Versatilidad | Capacidad de adaptarse a distintos roles o tareas |
| Reposición | Mantener insumos completos en el área de trabajo |
| Cigarrillo | Cumplimiento de la norma de no fumar |
| Cumplimiento de descansos | Respetar los tiempos de descanso asignados |
| Predisposición horaria | Disponibilidad y actitud frente a cambios de turno |

---

## 7. PROPINAS

### Cuándo se cobran

Las propinas se distribuyen los **días 2 y 17 de cada mes**.

### Distribución

- **60%** corresponde al **salón** (mozos, runners, comisses, recepción, barra, etc.)
- **40%** corresponde a **cocina** (incluyendo bacha y calientaplatos)

### Cálculo

La distribución se calcula en base a las **horas trabajadas** por cada persona en el período correspondiente. A más horas trabajadas, mayor parte de la propina.

### Mozos y Runners

Los mozos y runners tienen un **sistema diferente** de distribución de propinas. El detalle de ese sistema está en la guía específica para esos roles.

---

## 8. PAGOS

### Frecuencia

Los pagos se realizan de forma **mensual**.

### Escala Salarial

Los salarios se rigen por la escala de **UTHGRA** (Unión de Trabajadores del Turismo, Hotelería y Gastronomía de la República Argentina).

### Cálculo de días

La jornada laboral estándar equivale a **8.5 horas = 1 día** trabajado.

### Feriados

Los **feriados** se pagan al **doble** de la jornada normal.

---

## 9. EMPRESAS DEL COMPLEJO

Mirador Waikiki forma parte de un complejo más amplio. Estas son las empresas que integran el grupo:

### ili ili Hotel Boutique
Hotel boutique con **17 habitaciones** ubicado dentro del complejo. Ofrece alojamiento de categoría frente al mar.

### Balneario Waikiki
Espacio de playa y pileta del complejo. Funciona en temporada estival y es parte de la experiencia de ocio del lugar.

### Mar Eventos
Empresa de organización de eventos: **bodas, fiestas de XV años, eventos corporativos** y más. Utiliza los espacios del complejo para sus celebraciones.

### Mirador 9
Restaurante y espacio de eventos dentro del complejo. **En verano funciona todos los días**; el **resto del año, fines de semana y feriados**. Es el espacio principal donde trabajamos.

---

## 10. PREGUNTAS FRECUENTES

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
$GUIDE$
  WHERE id = v_guide_id;
END IF;

-- ============================================================
-- EXAMEN
-- ============================================================

SELECT id INTO v_exam_id FROM exams WHERE guide_id = v_guide_id;

IF v_exam_id IS NULL THEN
  INSERT INTO exams (guide_id, title, passing_score)
  VALUES (v_guide_id, 'Examen: Guía para Nuevos y No Tan Nuevos', 70)
  RETURNING id INTO v_exam_id;
ELSE
  UPDATE exams SET title = 'Examen: Guía para Nuevos y No Tan Nuevos', passing_score = 70
  WHERE id = v_exam_id;
END IF;

DELETE FROM exam_questions WHERE exam_id = v_exam_id;

-- ============================================================
-- PREGUNTAS DEL EXAMEN (50 preguntas)
-- ============================================================

INSERT INTO exam_questions (exam_id, question, options, correct_option, explanation) VALUES

-- PRIMEROS PASOS
(v_exam_id,
 '¿Con cuánta anticipación se recomienda llegar antes del horario pautado?',
 '["5 minutos", "10 minutos", "15 minutos", "30 minutos"]',
 2,
 'Lo ideal es llegar 15 minutos antes del horario pautado para estar listo a tiempo.'),

(v_exam_id,
 '¿Qué ropa debés usar hasta recibir el uniforme oficial?',
 '["Ropa de cualquier color", "Ropa de color negro", "Ropa de color blanco", "No importa la ropa"]',
 1,
 'Hasta recibir el uniforme oficial, se debe usar ropa de color negro (pantalón y remera o camisa negra).'),

(v_exam_id,
 '¿A quién debés presentarte al llegar tu primer día?',
 '["Al director Agustín Di Iorio", "A Facundo o Enzo (encargados de salón)", "A Bruno Molina (barra)", "A Paz Rave (recepción)"]',
 1,
 'Al llegar, debés presentarte con Facundo o Enzo, los encargados de salón.'),

(v_exam_id,
 '¿Dónde podés guardar tus pertenencias personales durante el turno?',
 '["En la barra", "En la cocina", "En los lockers", "En la recepción"]',
 2,
 'El local cuenta con lockers disponibles para guardar las pertenencias del personal.'),

(v_exam_id,
 'Si tenés una duda sobre una tarea, ¿qué debés hacer según la guía?',
 '["Actuar por tu cuenta para no molestar", "Ignorar la duda y seguir", "Preguntar antes de equivocarte", "Esperar a que alguien te explique sin preguntar"]',
 2,
 'La guía indica que es preferible consultar antes que equivocarse.'),

-- FILOSOFÍA Y VALORES
(v_exam_id,
 '¿Cuál es el primer principio de Mirador Waikiki?',
 '["El cliente es sagrado", "Todo impacta", "La actitud abre puertas", "Nos cuidamos entre todos"]',
 1,
 'El primer principio es "Todo impacta": cada acción tiene un efecto en la experiencia del cliente y el equipo.'),

(v_exam_id,
 '¿Qué significa el principio "El servicio es colectivo"?',
 '["Cada uno hace solo su tarea asignada", "Si ves una necesidad, atendela; si podés ayudar, hacelo", "El mozo hace todo el trabajo", "Los encargados son responsables de todo"]',
 1,
 'El servicio es colectivo significa que todos ayudan sin importar el rol: si ves una necesidad, atendela.'),

(v_exam_id,
 'Según la filosofía de Mirador Waikiki, ¿qué se valora más que las habilidades técnicas?',
 '["Los años de experiencia", "Los títulos académicos", "La actitud, predisposición y ganas de trabajar bien", "El aspecto físico"]',
 2,
 'La actitud abre puertas: la predisposición y el compromiso son valorados más que cualquier habilidad técnica.'),

(v_exam_id,
 '¿Qué implica el principio "Ser profesional no es ser frío"?',
 '["Hay que ser distante con los clientes", "Se puede ser amable y cercano siendo completamente profesional", "La frialdad es parte del servicio de calidad", "No se debe hablar con los clientes"]',
 1,
 'Se puede ser amable, cálido y cercano siendo completamente profesional. El trato humano es parte del servicio.'),

(v_exam_id,
 '¿Qué describe mejor la experiencia que ofrece Mirador Waikiki?',
 '["Solo un lugar para comer rápido", "Una experiencia 360° con propuesta cuidada y servicio profesional", "Un bar de playa informal", "Un restaurante de comida rápida"]',
 1,
 'Mirador Waikiki ofrece una experiencia 360°, con propuesta cuidada, ambiente relajado y servicio profesional.'),

-- HORARIOS Y FUNCIONAMIENTO
(v_exam_id,
 '¿Cómo se comunican los horarios de trabajo?',
 '["Por correo electrónico", "Por cartelera en el local", "Semanalmente por WhatsApp", "Por llamada telefónica del director"]',
 2,
 'Los horarios se comunican semanalmente por WhatsApp.'),

(v_exam_id,
 '¿Cómo se realiza el fichaje de entrada y salida?',
 '["En papel firmado al encargado", "A través de WhatsApp con el sistema habilitado", "Con una tarjeta magnética", "Solo al entrar, no al salir"]',
 1,
 'El fichaje se realiza a través de WhatsApp usando el sistema de registro habilitado por la empresa.'),

(v_exam_id,
 '¿A qué hora es el descanso en el turno de almuerzo?',
 '["10:00 a 10:30", "11:00 a 11:30", "12:00 a 12:30", "13:00 a 13:30"]',
 1,
 'El descanso del turno almuerzo es entre las 11:00 y las 11:30.'),

(v_exam_id,
 '¿A qué hora es el descanso en el turno de cena?',
 '["18:00 a 18:30", "19:00 a 19:30", "20:00 a 20:30", "21:00 a 21:30"]',
 1,
 'El descanso del turno cena es entre las 19:00 y las 19:30.'),

(v_exam_id,
 '¿Qué duración tiene el descanso por turno?',
 '["15 minutos", "20 minutos", "30 minutos", "45 minutos"]',
 2,
 'Cada turno incluye un descanso de 30 minutos.'),

(v_exam_id,
 '¿Qué se requiere para justificar una ausencia por enfermedad?',
 '["Un mensaje de WhatsApp es suficiente", "Certificado médico", "Avisar con 24 horas de anticipación", "Ningún trámite es necesario"]',
 1,
 'Las ausencias por enfermedad requieren certificado médico.'),

(v_exam_id,
 '¿Qué significa la "reducción de personal" en días de baja demanda?',
 '["Un despido definitivo del empleado", "Una multa por baja productividad", "Una reducción operativa temporal que no implica despido", "Una suspensión con descuento de salario"]',
 2,
 'La reducción de personal en baja demanda es parte del funcionamiento operativo y no implica despido ni penalización.'),

-- NORMAS Y CONVIVENCIA
(v_exam_id,
 '¿Cuál es la norma respecto al uso del celular durante el turno?',
 '["Se puede usar libremente en los momentos tranquilos", "Está prohibido salvo emergencias o autorización del encargado", "Se puede usar solo para música", "Solo los mozos tienen permitido usarlo"]',
 1,
 'El celular está prohibido durante el turno, salvo emergencias o autorización expresa del encargado.'),

(v_exam_id,
 '¿Cuál de estos está prohibido según el reglamento interno?',
 '["Tomar agua durante el servicio", "Consumir alcohol antes o durante el turno", "Usar el locker asignado", "Hablar con el encargado ante una duda"]',
 1,
 'El reglamento prohíbe el consumo de alcohol o sustancias antes o durante el turno.'),

(v_exam_id,
 '¿Qué se debe hacer si hay un conflicto con un compañero?',
 '["Manejarlo directamente de forma confrontacional", "Ignorarlo para no generar problemas", "Hablarlo con el encargado", "Publicarlo en las redes sociales del local"]',
 2,
 'Si hay un conflicto, el camino correcto es hablarlo con el encargado, no manejarlo de forma informal o confrontacional.'),

(v_exam_id,
 '¿Qué incluye la presentación personal correcta según el reglamento?',
 '["Cualquier ropa limpia", "Uniforme completo, higiene adecuada y cabello prolijo", "Ropa casual y accesorios personales", "Solo importa el uniforme, no la higiene"]',
 1,
 'La presentación personal incluye uniforme completo y en buen estado, higiene personal adecuada, y cabello recogido o prolijo.'),

(v_exam_id,
 '¿Para quiénes son los espacios de descanso (vestuarios, lockers)?',
 '["Para clientes que lo soliciten", "Para uso exclusivo del personal", "Para encargados únicamente", "Para cualquier persona que esté en el local"]',
 1,
 'Los espacios de descanso son para uso exclusivo del personal del local.'),

(v_exam_id,
 '¿Qué se debe hacer si una tarea no está clara?',
 '["Hacerla como uno crea conveniente", "No hacerla y esperar", "Consultar al encargado", "Pedir ayuda a un cliente"]',
 2,
 'Si algo no está claro, se consulta al encargado. No se abandona una tarea sin completarla o delegarla formalmente.'),

(v_exam_id,
 '¿Se puede fumar dentro del establecimiento o en las áreas de trabajo?',
 '["Sí, en zonas designadas", "Sí, durante los descansos", "No, está prohibido", "Solo en la cocina"]',
 2,
 'El reglamento prohíbe fumar dentro del establecimiento o en las áreas de trabajo.'),

-- ROLES Y ORGANIGRAMA
(v_exam_id,
 '¿Quiénes son los encargados de salón en Mirador Waikiki?',
 '["Agustín Di Iorio y Daniel Urcabe", "Bruno Molina y Paz Rave", "Facundo Núñez y Enzo Espiño", "Ángel Sachett y Romina Márquez"]',
 2,
 'Los encargados de salón son Facundo Núñez y Enzo Espiño.'),

(v_exam_id,
 '¿Quién es el Jefe de Cocina de Mirador Waikiki?',
 '["Bruno Molina", "Ángel Sachett", "Germán Zeluk", "Paz Rave"]',
 1,
 'El Jefe de Cocina es Ángel Sachett.'),

(v_exam_id,
 '¿Cuál es la función principal de los Runners?',
 '["Tomar pedidos y cobrar", "Llevar los platos desde la cocina hasta las mesas", "Preparar bebidas en la barra", "Manejar la caja registradora"]',
 1,
 'Los Runners llevan los platos desde la cocina hasta las mesas, trabajando coordinados con mozos y cocina.'),

(v_exam_id,
 '¿Cuál es la función principal de los Comisses?',
 '["Preparar los platos en cocina", "Cobrar a los clientes", "Apoyar al mozo: montar mesas, reponer insumos, desbarazar, rellenar agua", "Coordinar los horarios del personal"]',
 2,
 'Los Comisses apoyan al mozo en tareas operativas: montar mesas, reponer insumos, desbarazar platos, rellenar agua, llevar pan.'),

(v_exam_id,
 '¿Qué función cumple la Recepción en el salón?',
 '["Preparar los platos del menú", "Recibir clientes, asignar mesas y manejar reservas", "Cobrar todas las mesas", "Limpiar la vajilla y cubiertos"]',
 1,
 'La Recepción es el primer contacto del cliente: recibe, asigna mesas, maneja reservas y coordina llegadas y salidas de grupos.'),

(v_exam_id,
 '¿Quién es la responsable administrativa del complejo?',
 '["Paz Rave", "Romina Márquez", "Facundo Núñez", "Bruno Molina"]',
 1,
 'La responsable administrativa es Romina Márquez.'),

(v_exam_id,
 '¿Qué hace el rol de Calientaplatos?',
 '["Atiende las mesas del salón", "Mantiene la temperatura de los platos antes de que salgan al salón", "Prepara las bebidas", "Limpia los pisos del restaurante"]',
 1,
 'El Calientaplatos mantiene la temperatura de los platos antes de que salgan al salón. Es clave en momentos de alta demanda.'),

(v_exam_id,
 '¿Quién es el encargado de la barra en Mirador Waikiki?',
 '["Enzo Espiño", "Facundo Núñez", "Bruno Molina", "Germán Zeluk"]',
 2,
 'Bruno Molina es el encargado de la barra.'),

-- CRITERIOS DE EVALUACIÓN
(v_exam_id,
 '¿Qué color indica una conducta inaceptable o problema grave en la evaluación?',
 '["Verde", "Amarillo", "Naranja", "Rojo"]',
 3,
 'El color rojo indica conducta inaceptable o problema grave en el sistema de evaluación.'),

(v_exam_id,
 '¿Qué color indica que el desempeño es bueno o ejemplar?',
 '["Rojo", "Naranja", "Amarillo", "Verde"]',
 3,
 'El color verde indica buen desempeño o ejemplar.'),

(v_exam_id,
 '¿Cuál de los siguientes es un ítem evaluado en el desempeño del personal?',
 '["Cantidad de mesas atendidas por turno", "Uso del celular durante el servicio", "Velocidad para limpiar las mesas", "Número de clientes que atiende por hora"]',
 1,
 'El uso del celular es uno de los ítems evaluados: se espera que el celular no sea usado durante el servicio.'),

(v_exam_id,
 '¿Qué mide el criterio "Predisposición horaria"?',
 '["La velocidad con que cumple cada tarea", "La disponibilidad y actitud frente a cambios de turno", "La puntualidad para llegar al trabajo", "El tiempo de descanso utilizado"]',
 1,
 'La predisposición horaria mide la disponibilidad y actitud frente a cambios de turno o pedidos especiales de horario.'),

(v_exam_id,
 '¿Qué evalúa el criterio "Versatilidad"?',
 '["La velocidad de atención al cliente", "El conocimiento de idiomas extranjeros", "La capacidad de adaptarse a distintos roles o tareas", "La habilidad para manejar la caja"]',
 2,
 'La versatilidad evalúa la capacidad de adaptarse a distintos roles o tareas según la necesidad del turno.'),

(v_exam_id,
 '¿Qué evalúa el criterio "Estación de trabajo"?',
 '["La distancia entre el empleado y la cocina", "El orden y limpieza del área asignada", "El número de tareas completadas", "La velocidad de atención"]',
 1,
 'La estación de trabajo evalúa el orden y la limpieza del área asignada a cada empleado.'),

-- PROPINAS
(v_exam_id,
 '¿Qué días del mes se distribuyen las propinas?',
 '["1 y 15", "5 y 20", "2 y 17", "10 y 25"]',
 2,
 'Las propinas se distribuyen los días 2 y 17 de cada mes.'),

(v_exam_id,
 '¿Qué porcentaje de las propinas corresponde al salón?',
 '["40%", "50%", "60%", "70%"]',
 2,
 'El 60% de las propinas corresponde al salón (mozos, runners, comisses, recepción, barra, etc.).'),

(v_exam_id,
 '¿Qué porcentaje de las propinas corresponde a cocina?',
 '["20%", "30%", "40%", "50%"]',
 2,
 'El 40% de las propinas corresponde a cocina, incluyendo bacha y calientaplatos.'),

(v_exam_id,
 '¿Cómo se calcula la distribución de propinas entre los empleados?',
 '["Partes iguales para todos", "En base a las horas trabajadas en el período", "Solo para los que tuvieron más ventas", "El encargado decide quién recibe más"]',
 1,
 'La distribución se calcula en base a las horas trabajadas: a más horas, mayor parte de la propina.'),

(v_exam_id,
 '¿Los mozos y runners tienen el mismo sistema de propinas que el resto del personal de salón?',
 '["Sí, exactamente igual", "No, tienen un sistema diferente detallado en su guía específica", "No reciben propinas", "Solo reciben propinas en verano"]',
 1,
 'Los mozos y runners tienen un sistema diferente de distribución de propinas, detallado en la guía específica para esos roles.'),

-- PAGOS
(v_exam_id,
 '¿Con qué frecuencia se realizan los pagos del personal?',
 '["Semanal", "Quincenal", "Mensual", "Bimestral"]',
 2,
 'Los pagos se realizan de forma mensual.'),

(v_exam_id,
 '¿Bajo qué escala salarial se rigen los sueldos de Mirador Waikiki?',
 '["Convenio colectivo gastronómico provincial", "UTHGRA (Unión de Trabajadores del Turismo, Hotelería y Gastronomía)", "Salario mínimo vital y móvil únicamente", "Acuerdo individual con cada empleado"]',
 1,
 'Los salarios se rigen por la escala de UTHGRA (Unión de Trabajadores del Turismo, Hotelería y Gastronomía de la República Argentina).'),

(v_exam_id,
 '¿Cuántas horas equivalen a 1 día trabajado a efectos del cálculo de salario?',
 '["6 horas", "7 horas", "8 horas", "8.5 horas"]',
 3,
 'La jornada laboral estándar equivale a 8.5 horas = 1 día trabajado.'),

(v_exam_id,
 '¿Cómo se pagan los feriados?',
 '["Igual que cualquier otro día", "Al doble de la jornada normal", "Con un 50% de recargo", "No se trabaja en feriados"]',
 1,
 'Los feriados se pagan al doble de la jornada normal.'),

-- EMPRESAS DEL COMPLEJO
(v_exam_id,
 '¿Cuántas habitaciones tiene el ili ili Hotel Boutique?',
 '["10 habitaciones", "15 habitaciones", "17 habitaciones", "20 habitaciones"]',
 2,
 'El ili ili Hotel Boutique tiene 17 habitaciones ubicadas dentro del complejo.'),

(v_exam_id,
 '¿Qué tipo de eventos organiza Mar Eventos?',
 '["Conciertos y festivales", "Bodas, XV años y eventos corporativos", "Torneos deportivos", "Eventos políticos"]',
 1,
 'Mar Eventos organiza bodas, fiestas de XV años, eventos corporativos y más.'),

(v_exam_id,
 '¿En qué temporada funciona Mirador 9 todos los días?',
 '["Todo el año", "En invierno", "En verano", "Solo en fines de semana"]',
 2,
 'Mirador 9 funciona todos los días en verano; el resto del año, fines de semana y feriados.'),

-- PREGUNTAS FRECUENTES
(v_exam_id,
 '¿Qué descuento tienen los empleados en el consumo del restaurante?',
 '["10% de descuento en todo", "25% de descuento", "50% de descuento (excepto bebidas alcohólicas)", "Consumo gratis durante el turno"]',
 2,
 'El personal tiene un 50% de descuento en el consumo del restaurante, excepto en bebidas alcohólicas.'),

(v_exam_id,
 '¿Quiénes tienen derecho al desayuno en el local?',
 '["Todos los empleados sin excepción", "Solo los mozos y encargados", "Los empleados con turnos desde las 7:30, 8:00 o 9:00", "Solo los encargados"]',
 2,
 'Solo los empleados con turnos que comienzan a las 7:30, 8:00 o 9:00 tienen desayuno incluido.'),

(v_exam_id,
 '¿Dónde están los baños de uso exclusivo del personal?',
 '["En el primer piso", "En la planta baja", "En el sector Ala Wai", "Junto a la cocina"]',
 1,
 'Los baños del personal están en planta baja, de uso exclusivo para el equipo de trabajo.'),

(v_exam_id,
 '¿Qué artículos personales debe traer cada empleado aunque el uniforme sea provisto por la empresa?',
 '["Zapatos negros y medias", "Destapador, lapicera y anotador", "Delantal y guantes", "Ninguno, la empresa provee todo"]',
 1,
 'Aunque el uniforme es provisto por la empresa, cada empleado debe traer su propio destapador, lapicera y anotador.'),

(v_exam_id,
 '¿Qué debés hacer antes de que empiece tu turno respecto al área de servicio?',
 '["Podés ingresar y preparar tu área libremente", "Debés esperar fuera del área de servicio hasta que el encargado indique", "Podés sentarte en las mesas del restaurante", "Debés fichar y luego esperar en la barra"]',
 1,
 'Antes de que empiece tu turno, debés esperar fuera del área de servicio e ingresar solo cuando el encargado lo indique.');

RAISE NOTICE 'Guía para Nuevos y No Tan Nuevos actualizada correctamente con 50 preguntas.';

END $$;
