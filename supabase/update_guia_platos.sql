-- ============================================================
-- Actualización completa: Guía de Platos e Ingredientes 2025
-- Ejecutar en el SQL Editor de Supabase Dashboard
-- ============================================================
DO $$
DECLARE
  guide2_id uuid;
  exam2_id  uuid;
BEGIN

  -- Buscar la guía existente por título
  SELECT id INTO guide2_id FROM guides WHERE title = 'Guía de Platos e Ingredientes 2025' LIMIT 1;

  IF guide2_id IS NULL THEN
    -- Si no existe, crearla
    INSERT INTO guides (title, description, content, puestos)
    VALUES (
      'Guía de Platos e Ingredientes 2025',
      'Conocé el detalle de cada plato del menú: ingredientes, preparación y cómo sugerirlo al cliente.',
      '',
      ARRAY['todos']
    )
    RETURNING id INTO guide2_id;
  END IF;

  -- Actualizar contenido completo de la guía
  UPDATE guides SET
    description = 'Conocé el detalle de cada plato del menú: ingredientes, preparación y cómo sugerirlo al cliente.',
    puestos = ARRAY['todos'],
    content = $content$# Guía de Platos e Ingredientes 2025
**Mirador Waikiki — Mar del Plata, Buenos Aires**

---

## Presentación

Bienvenidos a la Guía de Platos e Ingredientes 2025. Este documento está diseñado para que puedan conocer el detalle de cada plato de nuestro menú, con descripciones claras y sencillas. Encontrarán ingredientes principales, acompañamientos y sugerencias para ofrecerlos con seguridad y profesionalismo.

Nuestro objetivo es que todos puedan conocer las preparaciones de nuestros platos para brindar mejor asesoramiento a los clientes y nutrir sus propios conocimientos.

---

## Íconos del Menú

- 🌾 **Sin TACC** — Se puede pedir apto para celíacos
- 🌿 **Vegetariano** — Se puede pedir apto Vegetariano
- 🌱 **Vegano** — Se puede pedir apto Vegano

---

## ENTRADAS

### Rabas
Aros de calamar rebozados en harina y fritos a punto justo, acompañados de salsa tártara (mayonesa, pickles, pepinillos).

**Ingredientes principales:** Calamar, harina, aceite.

**Cómo sugerirlo:** Entrada clásica para compartir.

---

### Gambas al Ajillo
Gambas salteadas con ajo, vino blanco y especias (pimentón, ½ cucharada de ají molido, pimienta y sal). Acompañadas con papas españolas.

**Ingredientes principales:** Gambas, ajo, vino blanco, caldo de pescado, manteca.

**Cómo sugerirlo:** Gambas a base de ajo, aceite de oliva, pimentón, vino blanco y papas españolas.

---

### Langostinos Empanados
Langostinos marinados y empanados en pan rallado, acompañados con ½ porción de papas fritas.

**Ingredientes principales:** Langostinos, huevo, condimentos (provenzal, ají molido y orégano), pan rallado.

**Cómo sugerirlo:** 10 langostinos acompañados con ½ porción de papas fritas, una entrada contundente.

---

### Mejillones a la Provenzal
Mejillones hervidos con caldo de pescado, ajo, limón y perejil.

**Ingredientes principales:** Mejillones, caldo de pescado, ajo, limón y perejil.

**Cómo sugerirlo:** Entrada para dos con aproximadamente 20 mejillones salteados a la provenzal.

---

### Tabla de Mar
Rabas, calamarettes, cornalitos, pesca blanca y langostinos rebozados en harina y fritos.

**Ingredientes principales:** Rabas, cornalitos, calamaretes, pesca blanca, langostinos, harina.

**Cómo sugerirlo:** Para compartir como entrada, de 2 a 4 personas. Ideal para acompañar con una ensalada de hojas verdes como la ensalada Mirador o una porción de papas fritas.

---

### Burrata
Burrata sobre colchón de rúcula acompañada de tomates cherry, tomates confitados y frutos secos.

**Ingredientes principales:** Burrata, rúcula, tomates cherry, tomates confitados, frutos secos.

**Cómo sugerirlo:** Queso de origen italiano elaborado a base de leche de vaca con un interior de crema e hilos de mozzarella, acompañado de hojas verdes, tomates cherry, tomates confitados y frutos secos. Ideal como entrada para 2 personas.

---

### Tortilla de Papa 🌿
Clásica tortilla con papas, cebolla y morrón.

**Ingredientes principales:** Papas, cebolla, morrón, huevos, sal, pimienta.

**Cómo sugerirlo:** Clásica tortilla a base de papas, huevo, cebolla, sal y pimienta.

---

## ARROCES

### Paella ⭐ Plato de la Casa
Cazuela de arroz azafranado con pollo, mariscos y vegetales.

**Ingredientes principales:** Pollo, langostinos, mejillones, vieiras, cayo de vieiras, arroz, caldo de pescado, arvejas, cholitos (mejillones pelados) y calamar.

**Cómo sugerirlo:** Es un arroz azafranado con pollo, langostinos y mariscos, todo cocinado en su propio caldo. Un plato completo, sabroso y bien tradicional.

---

### Risotto con Frutos de Mar
Risotto cremoso con mariscos, vino blanco, manteca y queso.

**Ingredientes principales:** Mariscos (mejillones ½ valva, vieyras, cayo de vieyras, langostinos, calamar), arroz carnaroli, vino blanco, manteca, queso, caldo de pescado.

**Cómo sugerirlo:** Arroz cremoso a base de mariscos, queso rallado y vino blanco.

---

### Caya Chilena
Arroz azafranado con pollo, lechuga, champiñones y jamón. Gratinado con crema y queso.

**Ingredientes principales:** Arroz azafranado, pollo, lechuga, champiñones, jamón, crema y queso gratinado.

**Cómo sugerirlo:** Arroz cremoso azafranado, a base de pollo, champiñones, jamón, lechuga, crema de leche y queso gratinado. Algo sencillo pero que sin dudas no falla.

---

### Risotto Vegetariano 🌿
Risotto suave con vegetales frescos.

**Ingredientes principales:** Arroz carnaroli, vegetales, caldo de vegetales, manteca, queso.

**Cómo sugerirlo:** Arroz cremoso a base de vegetales, con caldo de vegetales, manteca y queso rallado.

---

## PESCADOS

### Cazuela de Mariscos
Cazuela con langostinos, mariscos y salsa de mar.

**Ingredientes principales:** Langostinos, vieyras, cayo de vieyras, mejillones, tentáculo de calamar, aleta de calamar, salsa pomodoro, vino blanco, aceite de oliva, perejil.

**Cómo sugerirlo:** Cazuela con langostinos, callo de vieira, mejillones, aleta y tentáculo de calamar, todo salteado en "fumé de pescado" (caldo de pescado), vino blanco y manteca.

---

### Abadejo Grillé 🌾
El abadejo es un pescado de mar que se encuentra en aguas frías, especialmente frente a las costas argentinas y uruguayas. Es muy apreciado por su carne blanca, firme y delicada, con sabor suave. Se destaca por tener pocas espinas, lo que lo convierte en una opción cómoda y segura para todo tipo de comensales.

**Ingredientes principales:** Abadejo, aceite de oliva y limón con vegetales grillé (zanahoria, zucchini, cebolla, morrón).

**Cómo sugerirlo:** Pescado de carne blanca, con pocas espinas y muy liviano. Ideal para acompañar con vegetales salteados o salsas sin tanto volumen.

---

### Abadejo a la Crema de Limón 🌾
Abadejo con salsa cremosa de limón y cúrcuma. Servido con Puré Duquesa.

**Ingredientes principales:** Abadejo, crema de leche, limón, cúrcuma.

**Salsa:** Crema de leche, jugo de limón, ½ cucharada de cúrcuma, sal y pimienta. Se suma maicena para lograr una salsa más espesa.

**Puré Duquesa:** Puré de papas tradicional mezclado con 2 yemas de huevo y queso rallado para gratinar al horno.

**Cómo sugerirlo:** Pescado de carne blanca, con pocas espinas y muy liviano, con salsa a base de crema de leche, cúrcuma y jugo de limón, acompañado de puré duquesa.

---

### Trucha a la Manteca con Alcaparras
Pez de agua dulce de la Patagonia Argentina, de carne suave y sabrosa con alto contenido graso. Servida con vegetales y salsa de manteca, limón y alcaparras.

**Ingredientes principales:** Trucha, manteca, alcaparras, jugo de limón.

**Cómo sugerirlo:** Pescado suave, de alto contenido graso, a la manteca con alcaparras y jugo de limón, acompañado de vegetales.

---

### Salmón Rosado a la Crema de Camarones
El Salmón Rosado es un pescado de carne firme, grasa y muy sabrosa, con textura suave y mantecosa que se deshace en la boca. Se cocina a la plancha para conservar su jugosidad natural y se acompaña con una salsa cremosa de camarones.

**Ingredientes principales:** Salmón, camarones, crema de leche, cebolla, queso rallado.

**Salsa:** Camarones salteados con cebolla, crema de leche y queso rallado para gratinar.

**Cómo sugerirlo:** Pescado de carne firme, de alto contenido graso y muy sabroso, con una salsa de camarones a base de crema de leche, acompañado de puré duquesa.

---

### Chernia Grillé 🌾
La Chernia es un pez de mar que habita en aguas profundas y frías del Atlántico Sur. Muy apreciada por su carne blanca, firme y de sabor suave. Se cocina a la plancha con aceite de oliva y se acompaña con vegetales grillé como zanahoria, zucchini, cebolla y morrón.

**Ingredientes principales:** Chernia, aceite de oliva, vegetales grillé (zanahoria, zucchini, cebolla, morrón).

**Cómo sugerirlo:** Pescado de carne blanca, firme, con sabor delicado y muy pocas espinas. Ideal para quienes prefieren preparaciones livianas y saludables.

---

### Chernia con Salsa Mar del Plata
Chernia a la plancha con una generosa salsa de mariscos, manteca y vino blanco. La salsa incluye un salteado de cebolla, vieiras, callo de vieiras, gambas y mejillones, ligado con manteca y demi-glace. Se sirve con papas rústicas.

**Ingredientes principales:** Chernia, cebolla, vieiras, callo de vieiras, gambas, mejillones, manteca, vino blanco, salsa demi-glace, papas rústicas.

**Cómo sugerirlo:** Chernia grillada de sabor suave acompañada de una salsa abundante de mariscos salteados en manteca y vino blanco.

> **Salsa Demi-Glace:** Reducción de caldo de carne con verduras y vino, cocinada lentamente hasta lograr una salsa espesa, oscura y muy sabrosa. Ideal para acompañar carnes y pescados.

---

## PASTAS

### Variedades de Pasta

#### Sorrentinos
Sorrentinos de masa suave rellenos de jamón y mozzarella.

**Ingredientes:** Harina, huevo, jamón, mozzarella.

**Cómo sugerirlo:** Sorrentinos livianos rellenos de jamón y mozzarella.

---

#### Ñoquis Soufflé 🌿
Ñoquis de textura aireada con espinaca.

**Ingredientes:** Leche, manteca, harina, huevo, espinaca.

**Cómo sugerirlo:** Ñoquis livianos con textura aireada y espinaca fresca. Ideales para acompañar con salsa 4 quesos o bolognesa.

---

#### Cintas Caseras
Pasta casera en forma de cintas a base de huevo, similar a los fettuccine.

**Ingredientes:** Harina, huevo.

**Cómo sugerirlo:** Pasta casera preparada a base de huevo en forma de cintas.

---

#### Ravioli Nero
Raviolón de masa sepia (tinta de calamar) relleno de salmón rosado y camarones.

**Ingredientes:** Masa de tinta de calamar, salmón, camarones.

**Cómo sugerirlo:** Raviolón relleno de salmón rosado y camarones frescos, elaborado con masa de tinta de calamar, lo que le aporta el color negro característico.

---

### Salsas para Pastas

#### Salsa Blanca 🌿
Salsa a base de leche, manteca y maicena.

#### Crema 🌿
Salsa a base de crema de leche y maicena.

#### Cuatro Quesos 🌿
Salsa contundente a base de crema de leche y variedad de quesos: queso azul, queso gouda, queso pategrás y queso fontina.

#### Pomodoro 🌿 🌱
Salsa liviana a base de tomate triturado con variedad de especias. Ideal para acompañar pastas rellenas.

#### Bolognesa
Salsa clásica a base de tomate triturado y carne (Roast Beef) con condimentos.

**Ingredientes:** Tomate triturado, carne, ají molido, laurel, pimentón, orégano, sal y pimienta.

#### Salteado de Trucha
Vegetales salteados con trucha ahumada.

**Ingredientes:** Trucha, manteca, vegetales (zanahoria, cebolla, morrón, zucchini, tomates cherry), queso parmesano.

**Cómo sugerirlo:** Salteado de vegetales frescos con trucha ahumada, manteca y queso parmesano.

#### Crema de Verdeo 🌿
Salsa a base de crema de leche y verdeo con variedad de vegetales.

**Ingredientes:** Puerro, espinaca, apio, palta, crema, verdeo.

**Cómo sugerirlo:** Salsa a base de crema de leche y verdeo. Ideal para acompañar el Ravioli Nero.

#### Salteado de Mar
Salsa a base de tomate triturado con caldo de pescado, mejillones, calamares y vieyras.

**Ingredientes:** Salsa de tomate, caldo de pescado, mejillones, calamares, vieyras.

> **Caldo de Pescado:** Se hierve en cocción lenta recortes de langostinos, piel de pescado, cabeza de pescado y vegetales hasta lograr un caldo intenso y lleno de sabor.

---

## CARNES

### Cortes Vacunos

#### Bife de Chorizo
Corte emblemático de la parrilla argentina. Proviene del lomo corto y se destaca por su tamaño, jugosidad y capa de grasa externa que aporta mucho sabor durante la cocción. Es sabroso, con textura más firme que el lomo.

#### Bife de Lomo
El corte más tierno de la res. Proviene del lomo, una zona de poco trabajo muscular. Tiene sabor delicado y textura extremadamente suave.

#### Ojo de Bife
Corte tierno y jugoso proveniente del centro del bife ancho (costillar). Se caracteriza por su alto marmoleo, lo que le da sabor intenso y textura muy suave al paladar.

#### Peceto
Corte magro, de forma redonda y textura firme, proveniente de la parte trasera del animal. Es bajo en grasa y muy parejo. En Mirador Waikiki se usa principalmente para milanesas.

---

### Cortes de Cerdo

#### Bondiola
Corte del cerdo extraído de la parte superior del cuello. Es una carne muy sabrosa, ligeramente infiltrada de grasa, lo que la hace jugosa y tierna. Ideal para cocciones lentas, a la parrilla o a la plancha.

#### Solomillo
El corte más tierno del cerdo, ubicado junto al lomo. De textura suave y sabor delicado, se cocina rápidamente. Perfecto para preparaciones a la plancha, al horno o con salsas suaves.

---

### Platos de Carnes

#### Lomo al Champiñón
Lomo con salsa a base de champiñones y demi-glace.

**Ingredientes principales:** Lomo, champiñones, demi-glace, cebolla.

**Cómo sugerirlo:** Medallón de lomo de 250/300 gramos con salsa a base de demi-glace (caldo de carne reducido con huesos), salteado con champiñones y cebolla.

---

#### Pechuga Capresse
Pechuga rellena con queso, tomate cherry, albahaca y panceta. Con salsa a base de verdeo y champiñones.

**Ingredientes principales:** Pechuga, queso, tomate cherry, albahaca, panceta, olivas negras, crema, verdeo, champiñones.

**Cómo sugerirlo:** Pechuga rellena con queso, tomate cherry, albahaca, panceta y olivas negras, con salsa a base de verdeo y champiñones. Acompañada con puré de papas.

---

#### Wok de Lomo 🌾
Salteado de cortes de lomo con vegetales frescos, condimentado con sal, pimienta y salsa de soja.

---

#### Wok de Pollo 🌾
Salteado de cortes de pechuga de pollo con vegetales frescos, condimentado con sal, pimienta y salsa de soja.

---

#### Bife de Chorizo al Malbec
Bife de chorizo con salsa a base de reducción de Malbec, acompañado con papas españolas.

**Ingredientes principales:** Bife de chorizo, reducción de Malbec, salsa demi-glace, papas.

**Cómo sugerirlo:** Se destaca por su salsa a base de reducción de vino Malbec combinada con demi-glace, acompañado de papas españolas.

---

#### Bife de Chorizo a la Pimienta
Bife con salsa a base de pimienta y demi-glace.

**Ingredientes principales:** Bife de chorizo, pimienta, salsa demi-glace.

**Cómo sugerirlo:** Bife de chorizo con salsa a base de pimienta y demi-glace, acompañado de papas a la crema.

---

#### Ojo de Bife con Hongos y Panceta
Ojo de bife con salsa a base de hongos de pino y panceta. Acompañado con papas rústicas.

**Ingredientes principales:** Ojo de bife, hongos de pino, panceta, crema, nuez moscada, papas rústicas.

**Cómo sugerirlo:** Ojo de bife acompañado con salsa a base de crema, hongos de pino y panceta, servido con papas rústicas.

---

#### Solomillo de Cerdo Agridulce
Solomillo con salsa a base de frutas agridulces y demi-glace. Acompañado con batatas españolas.

**Ingredientes principales:** Solomillo de cerdo, frutas (duraznos, ananá, manzana), salsa demi-glace, batatas.

**Cómo sugerirlo:** Cuatro o cinco medalloncitos de solomillo con salsa a base de frutas agridulces (duraznos, ananá, manzana), acompañados de batatas españolas. Ideal para quienes buscan salir de lo tradicional.

---

#### Bondiola a la Mostaza y Miel
Bondiola con salsa a base de mostaza Dijon, miel y cúrcuma.

**Ingredientes principales:** Bondiola, cebolla, mostaza Dijon, miel, cúrcuma.

**Cómo sugerirlo:** Bondiola grillé acompañada de salsa a base de mostaza Dijon, miel y cúrcuma, con guarnición de batatas.

---

## PREGUNTAS FRECUENTES

**¿Cuál es el plato de la casa?**
El plato de la casa es la Paella, ya que representa a la perfección la identidad del lugar: una propuesta abundante, colorida y llena de sabor, ideal para compartir.

**¿Cuándo se construyó Mirador Waikiki?**
El Mirador Waikiki se inauguró en el año 1999, y el salón Ala Wai en el año 2004.

**¿Cuándo se remodeló el lugar?**
El lugar se comenzó a remodelar en el mes de abril del año 2024. A día de hoy aún siguen en proceso ciertas remodelaciones.

**¿Desde cuándo está el Hotel?**
El Hotel ili ili se inauguró en diciembre de 2023. Es un hotel de tipo Boutique con 17 habitaciones.

**¿Quién se encarga de los eventos?**
Todos los eventos en Mirador Waikiki son realizados por la empresa Mar Eventos. En la recepción del restaurante se pueden encontrar las tarjetas para contactarse.

**¿Cuánto tiempo se puede dejar el auto estacionado?**
El tiempo máximo de permanencia en el estacionamiento es de 2 horas habiendo consumido. Superado ese tiempo, o sin haber consumo, el estacionamiento se abonará.

**¿Se permite el ingreso de animales?**
Si bien no somos pet-friendly, se permite la estadía de animales en el sector del balcón.

**¿El lugar cambió de firma?**
El lugar cambió de firma en noviembre de 2023.

**¿Qué es Mirador 9?**
Mirador 9 es un balneario y restaurante a cargo de la misma empresa que Mirador Waikiki. El restaurante está abierto todos los sábados y domingos del año y todos los días en meses de temporada.

**¿Se puede bajar a la playa?**
Si bien no contamos con bajada directa a la playa, pueden acceder a la playa pública saliendo del predio y bajando por las escaleras blancas a pocos metros de la salida del complejo. El estacionamiento gratuito es válido únicamente durante la estadía en el restaurante, no durante el tiempo en la playa.

**¿Me puedo cambiar de mesa?**
En ese caso, permítame llamar a una de las chicas de recepción para que puedan reubicarlos.$content$
  WHERE id = guide2_id;

  -- Buscar o crear el examen
  SELECT id INTO exam2_id FROM exams WHERE guide_id = guide2_id LIMIT 1;

  IF exam2_id IS NULL THEN
    INSERT INTO exams (guide_id, title, passing_score)
    VALUES (guide2_id, 'Examen: Platos e Ingredientes', 70)
    RETURNING id INTO exam2_id;
  ELSE
    UPDATE exams SET title = 'Examen: Platos e Ingredientes', passing_score = 70 WHERE id = exam2_id;
  END IF;

  -- Eliminar preguntas viejas
  DELETE FROM exam_questions WHERE exam_id = exam2_id;

  -- Insertar preguntas nuevas y completas
  INSERT INTO exam_questions (exam_id, question, options, correct_option, "order") VALUES

  -- ENTRADAS
  (exam2_id,
   '¿Con qué salsa se acompañan las Rabas?',
   '["Salsa golf","Salsa tártara (mayonesa, pickles, pepinillos)","Alioli","Salsa pomodoro"]'::jsonb,
   1, 1),

  (exam2_id,
   '¿Cuántos langostinos trae el plato Langostinos Empanados?',
   '["5 langostinos","8 langostinos","10 langostinos","12 langostinos"]'::jsonb,
   2, 2),

  (exam2_id,
   '¿Con qué acompañamiento se sirven los Langostinos Empanados?',
   '["Puré duquesa","Papas rústicas","½ porción de papas fritas","Ensalada verde"]'::jsonb,
   2, 3),

  (exam2_id,
   '¿Aproximadamente cuántos mejillones trae la entrada de Mejillones a la Provenzal?',
   '["10 mejillones","15 mejillones","20 mejillones","25 mejillones"]'::jsonb,
   2, 4),

  (exam2_id,
   '¿Cuántas personas puede compartir la Tabla de Mar como entrada?',
   '["Solo 1 persona","1 a 2 personas","2 a 4 personas","5 a 6 personas"]'::jsonb,
   2, 5),

  (exam2_id,
   '¿Qué ingredientes lleva la Tabla de Mar?',
   '["Solo rabas y langostinos","Rabas, calamaretes, cornalitos, pesca blanca y langostinos","Mejillones, langostinos y gambas","Calamar, langostinos y pesca del día"]'::jsonb,
   1, 6),

  (exam2_id,
   '¿Cómo se describe la Burrata al cliente?',
   '["Queso suizo con nueces","Queso italiano de leche de vaca con interior de crema e hilos de mozzarella","Queso de cabra con tomates","Ricota italiana con frutos secos"]'::jsonb,
   1, 7),

  (exam2_id,
   '¿Qué lleva la Tortilla de Papa además de papa y huevo?',
   '["Cebolla y morrón","Jamón y queso","Espinaca y cebolla","Solo papa y huevo"]'::jsonb,
   0, 8),

  (exam2_id,
   '¿Con qué se acompañan las Gambas al Ajillo?',
   '["Papas fritas","Papas españolas","Puré duquesa","Arroz blanco"]'::jsonb,
   1, 9),

  -- ARROCES
  (exam2_id,
   '¿Cuál es el plato de la casa en Mirador Waikiki?',
   '["Risotto con Frutos de Mar","Cazuela de Mariscos","La Paella","Chernia con Salsa Mar del Plata"]'::jsonb,
   2, 10),

  (exam2_id,
   '¿Qué tipo de arroz se usa en el Risotto con Frutos de Mar?',
   '["Arroz blanco común","Arroz integral","Arroz carnaroli","Arroz jazmín"]'::jsonb,
   2, 11),

  (exam2_id,
   '¿Qué tiene de especial la Paella en Mirador Waikiki?',
   '["Es solo de verduras","Es un arroz azafranado con pollo, langostinos y mariscos cocinado en su propio caldo","Lleva tinta de calamar","Es un arroz negro tradicional"]'::jsonb,
   1, 12),

  (exam2_id,
   '¿Qué ingredientes distinguen a la Caya Chilena de los otros arroces?',
   '["Solo mariscos y azafrán","Pollo, lechuga, champiñones y jamón gratinado con crema y queso","Verduras y pollo sin queso","Langostinos y tinta de calamar"]'::jsonb,
   1, 13),

  (exam2_id,
   '¿El Risotto Vegetariano con qué tipo de caldo se prepara?',
   '["Caldo de pescado","Caldo de pollo","Caldo de vegetales","Agua con sal"]'::jsonb,
   2, 14),

  -- PESCADOS
  (exam2_id,
   '¿De dónde proviene la Trucha que se usa en el restaurante?',
   '["Del Mar Mediterráneo","Del río Paraná","De la Patagonia Argentina","Del Mar del Plata"]'::jsonb,
   2, 15),

  (exam2_id,
   '¿Con qué se acompaña el Abadejo a la Crema de Limón?',
   '["Papas fritas","Vegetales grillé","Puré Duquesa","Ensalada Mirador"]'::jsonb,
   2, 16),

  (exam2_id,
   '¿Qué es el Puré Duquesa?',
   '["Puré de papas con crema de leche","Puré de papas tradicional con 2 yemas de huevo y queso rallado, gratinado al horno","Puré de batatas con manteca","Puré de papas con espinaca"]'::jsonb,
   1, 17),

  (exam2_id,
   '¿Qué ingrediente especial lleva la salsa del Abadejo a la Crema de Limón?',
   '["Azafrán","Cúrcuma","Pimentón","Comino"]'::jsonb,
   1, 18),

  (exam2_id,
   '¿Con qué se sirve la Chernia con Salsa Mar del Plata?',
   '["Puré duquesa","Papas españolas","Papas rústicas","Arroz blanco"]'::jsonb,
   2, 19),

  (exam2_id,
   '¿Qué es la Salsa Demi-Glace?',
   '["Salsa de tomate con especias","Reducción de caldo de carne con verduras y vino, cocida lentamente","Crema de leche con queso","Salsa de mariscos con manteca"]'::jsonb,
   1, 20),

  (exam2_id,
   '¿Cuáles son los mariscos que lleva la Cazuela de Mariscos?',
   '["Solo langostinos y mejillones","Langostinos, vieyras, cayo de vieyras, mejillones y calamar","Solo camarones y almejas","Gambas, calamares y pulpo"]'::jsonb,
   1, 21),

  (exam2_id,
   '¿Por qué el abadejo es ideal para clientes que no suelen pedir pescado?',
   '["Porque es muy barato","Porque tiene pocas espinas, carne blanca y sabor suave","Porque se cocina muy rápido","Porque viene de aguas tropicales"]'::jsonb,
   1, 22),

  (exam2_id,
   '¿Cómo se describe la textura del Salmón Rosado?',
   '["Carne seca y magra","Carne firme, grasa y muy sabrosa que se deshace en la boca","Carne blanda sin sabor","Carne muy dura y con muchas espinas"]'::jsonb,
   1, 23),

  -- PASTAS
  (exam2_id,
   '¿Qué hace especial al Ravioli Nero?',
   '["Está relleno de ricota y espinaca","La masa es de tinta de calamar y está relleno de salmón rosado y camarones","Es el más grande de la carta","Lleva 4 tipos de quesos"]'::jsonb,
   1, 24),

  (exam2_id,
   '¿Qué quesos lleva la salsa Cuatro Quesos?',
   '["Queso azul, gouda, pategrás y fontina","Queso azul, cheddar, provolone y brie","Parmesano, gouda, mozzarella y ricota","Queso azul, gruyere, fontina y mozzarella"]'::jsonb,
   0, 25),

  (exam2_id,
   '¿Qué diferencia tienen los Ñoquis Soufflé de los ñoquis tradicionales?',
   '["Son de batata","Son de textura aireada y llevan espinaca","Son más grandes y rellenos","Son fritos en lugar de hervidos"]'::jsonb,
   1, 26),

  (exam2_id,
   '¿Con qué salsa se recomienda combinar el Ravioli Nero?',
   '["Salsa bolognesa","Pomodoro","Crema de verdeo","Salsa blanca"]'::jsonb,
   2, 27),

  (exam2_id,
   '¿Qué llevan las Cintas Caseras?',
   '["Harina, huevo y espinaca","Harina y huevo solamente","Harina, manteca y leche","Semolín y huevo"]'::jsonb,
   1, 28),

  (exam2_id,
   '¿Qué es el caldo de pescado o fumé?',
   '["Agua con sal y hierbas","Cocción lenta de recortes de langostinos, piel y cabeza de pescado con vegetales","Caldo de pollo con algas","Concentrado de verduras con limón"]'::jsonb,
   1, 29),

  (exam2_id,
   '¿La salsa Pomodoro es apta para veganos?',
   '["No, lleva crema de leche","No, lleva queso","Sí, es a base de tomate triturado con especias","Solo es vegetariana, no vegana"]'::jsonb,
   2, 30),

  -- CARNES
  (exam2_id,
   '¿De qué parte del animal proviene el Bife de Chorizo?',
   '["Del lomo","Del costillar","Del lomo corto","De la paleta"]'::jsonb,
   2, 31),

  (exam2_id,
   '¿Cuál es el corte más tierno de la res según la guía?',
   '["Ojo de bife","Bife de chorizo","Bife de lomo","Peceto"]'::jsonb,
   2, 32),

  (exam2_id,
   '¿Para qué se usa principalmente el Peceto en Mirador Waikiki?',
   '["Para bifes a la plancha","Para wok","Para milanesas tiernas y uniformes","Para cazuelas"]'::jsonb,
   2, 33),

  (exam2_id,
   '¿Qué frutas lleva la salsa del Solomillo Agridulce?',
   '["Mango, papaya y piña","Duraznos, ananá y manzana","Ciruela, higo y pera","Naranja, limón y pomelo"]'::jsonb,
   1, 34),

  (exam2_id,
   '¿Con qué guarnición se sirve el Solomillo de Cerdo Agridulce?',
   '["Papas fritas","Puré duquesa","Batatas españolas","Papas rústicas"]'::jsonb,
   2, 35),

  (exam2_id,
   '¿Qué salsa lleva la Bondiola a la Mostaza y Miel?',
   '["Mostaza común con azúcar","Mostaza Dijon, miel y cúrcuma","Mostaza, crema y champiñones","Miel, soja y jengibre"]'::jsonb,
   1, 36),

  (exam2_id,
   '¿Cuánto pesa aproximadamente el medallón de lomo en el Lomo al Champiñón?',
   '["100/150 gramos","250/300 gramos","400/450 gramos","500 gramos"]'::jsonb,
   1, 37),

  (exam2_id,
   '¿Qué ingredientes lleva la Pechuga Capresse además de pollo?',
   '["Jamón y queso","Queso, tomate cherry, albahaca, panceta y olivas negras","Espinaca, ricota y nuez moscada","Champiñones, morrón y cebolla"]'::jsonb,
   1, 38),

  (exam2_id,
   '¿Con qué se condimentan el Wok de Lomo y el Wok de Pollo?',
   '["Solo sal y pimienta","Sal, pimienta y salsa de soja","Ají molido, pimentón y ajo","Chimichurri y limón"]'::jsonb,
   1, 39),

  (exam2_id,
   '¿Cuál es la diferencia entre la Bondiola y el Solomillo de cerdo?',
   '["No hay diferencia, son el mismo corte","La bondiola viene del cuello (más grasa y sabrosa) y el solomillo es el más tierno junto al lomo","El solomillo es más grande que la bondiola","La bondiola es de vaca y el solomillo de cerdo"]'::jsonb,
   1, 40),

  -- FAQ e HISTORIA
  (exam2_id,
   '¿En qué año se inauguró Mirador Waikiki?',
   '["1995","1999","2002","2004"]'::jsonb,
   1, 41),

  (exam2_id,
   '¿En qué año se inauguró el salón Ala Wai?',
   '["1999","2001","2004","2006"]'::jsonb,
   2, 42),

  (exam2_id,
   '¿Cuándo se inauguró el Hotel ili ili?',
   '["Enero 2023","Junio 2023","Diciembre 2023","Marzo 2024"]'::jsonb,
   2, 43),

  (exam2_id,
   '¿Cuántas habitaciones tiene el Hotel ili ili?',
   '["10 habitaciones","17 habitaciones","25 habitaciones","30 habitaciones"]'::jsonb,
   1, 44),

  (exam2_id,
   '¿Cuánto tiempo máximo se puede dejar el auto estacionado habiendo consumido?',
   '["1 hora","2 horas","3 horas","Sin límite"]'::jsonb,
   1, 45),

  (exam2_id,
   '¿Qué empresa realiza los eventos en Mirador Waikiki?',
   '["Mirador Eventos","ili ili Events","Mar Eventos","Costa Eventos"]'::jsonb,
   2, 46),

  (exam2_id,
   '¿Se permiten mascotas en el restaurante?',
   '["Sí, en todo el restaurante","Solo razas pequeñas","Se permite solo en el sector del balcón","No se permiten bajo ningún concepto"]'::jsonb,
   2, 47),

  (exam2_id,
   '¿En qué mes y año cambió de firma el restaurante?',
   '["Enero 2023","Noviembre 2023","Abril 2024","Diciembre 2022"]'::jsonb,
   1, 48),

  (exam2_id,
   '¿Cuándo está abierto Mirador 9?',
   '["Solo en temporada de verano","Todos los días del año","Todos los sábados y domingos del año y todos los días en temporada","Solo fines de semana en verano"]'::jsonb,
   2, 49),

  (exam2_id,
   '¿Qué ícono del menú indica que un plato es Sin TACC (apto celíaco)?',
   '["🌿","🌱","🌾","⭐"]'::jsonb,
   2, 50);

  RAISE NOTICE 'Guía actualizada correctamente. ID: %', guide2_id;
  RAISE NOTICE 'Examen actualizado. ID: %', exam2_id;
  RAISE NOTICE '50 preguntas insertadas.';

END $$;
