import type { Category } from "@/types/menu";

// From mimenulatech.com/waikikisnack (October 2026), in English where it helps.
export const categories: Category[] = [
  {
    "name": "Cafetería",
    "nameEn": "Coffee",
    "icon": "cafe",
    "featured": true,
    "subcategories": [
      {
        "name": "Tradicional",
        "nameEn": "Classics",
        "products": [
          {
            "id": "cafeteria-cafe-espresso",
            "name": "CAFÉ ESPRESSO",
            "nameEn": "ESPRESSO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-cafe-espresso-c-crema",
            "name": "CAFÉ ESPRESSO C/ CREMA",
            "nameEn": "ESPRESSO WITH WHIPPED CREAM",
            "price": "6.000"
          },
          {
            "id": "cafeteria-cortado",
            "name": "CORTADO",
            "nameEn": "CORTADO",
            "price": "5.100",
            "descriptionEn": "Espresso with a splash of steamed milk."
          },
          {
            "id": "cafeteria-americano",
            "name": "AMERICANO",
            "nameEn": "AMERICANO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-americano-c-crema",
            "name": "AMERICANO C/ CREMA",
            "nameEn": "AMERICANO WITH WHIPPED CREAM",
            "price": "6.000"
          },
          {
            "id": "cafeteria-lagrima",
            "name": "LÁGRIMA",
            "nameEn": "LÁGRIMA",
            "price": "5.100",
            "descriptionEn": "Hot milk with just a drop of coffee."
          },
          {
            "id": "cafeteria-macchiato",
            "name": "MACCHIATO",
            "nameEn": "MACCHIATO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-cafe-con-leche",
            "name": "CAFE CON LECHE",
            "nameEn": "COFFEE WITH MILK",
            "price": "7.200"
          },
          {
            "id": "cafeteria-latte",
            "name": "LATTE",
            "nameEn": "LATTE",
            "price": "7.200"
          },
          {
            "id": "cafeteria-ice-latte",
            "name": "ICE LATTE",
            "nameEn": "ICED LATTE",
            "price": "7.200"
          },
          {
            "id": "cafeteria-cafe-doble-doble-cortado",
            "name": "CAFÉ DOBLE - DOBLE CORTADO",
            "nameEn": "DOUBLE ESPRESSO - DOUBLE CORTADO",
            "price": "7.200"
          },
          {
            "id": "cafeteria-tazon-de-cafe-con-leche",
            "name": "TAZÓN DE CAFÉ CON LECHE",
            "nameEn": "LARGE COFFEE WITH MILK",
            "price": "9.000"
          },
          {
            "id": "cafeteria-cafe-doble-c-crema",
            "name": "CAFÉ DOBLE C/ CREMA",
            "nameEn": "DOUBLE ESPRESSO WITH WHIPPED CREAM",
            "price": "7.400"
          },
          {
            "id": "cafeteria-te",
            "name": "TÉ",
            "nameEn": "TEA",
            "price": "5.100"
          },
          {
            "id": "cafeteria-submarino-chocolatada",
            "name": "SUBMARINO - CHOCOLATADA",
            "nameEn": "SUBMARINO - CHOCOLATE MILK",
            "price": "6.000",
            "descriptionEn": "Submarino: hot milk with a bar of chocolate to melt into it."
          },
          {
            "id": "cafeteria-vaso-de-leche",
            "name": "VASO DE LECHE",
            "nameEn": "GLASS OF MILK",
            "price": "5.100"
          },
          {
            "id": "cafeteria-descafeinado",
            "name": "DESCAFEINADO",
            "nameEn": "DECAF COFFEE",
            "price": "5.500"
          }
        ]
      },
      {
        "name": "Especial",
        "nameEn": "Specialty coffee",
        "products": [
          {
            "id": "cafeteria-caramel-latte",
            "name": "CARAMEL LATTE",
            "nameEn": "CARAMEL LATTE",
            "price": "9.100",
            "description": "Café, leche, crema y syrup de caramelo",
            "descriptionEn": "Coffee, milk, cream and caramel syrup."
          },
          {
            "id": "cafeteria-pistaccio-latte",
            "name": "PISTACCIO LATTE",
            "nameEn": "PISTACHIO LATTE",
            "price": "9.100",
            "description": "Café, leche, crema y syrup de pistaccio",
            "descriptionEn": "Coffee, milk, cream and pistachio syrup."
          },
          {
            "id": "cafeteria-capuccino",
            "name": "CAPUCCINO",
            "nameEn": "CAPPUCCINO",
            "price": "9.100",
            "description": "Café, leche, canela, crema y chocolate rallado.",
            "descriptionEn": "Coffee, milk, cinnamon, cream and grated chocolate."
          },
          {
            "id": "cafeteria-ice-pistaccio-latte",
            "name": "ICE PISTACCIO LATTE",
            "nameEn": "ICED PISTACHIO LATTE",
            "price": "9.100",
            "description": "Café, leche, hielo y syrup de pistaccio.",
            "descriptionEn": "Coffee, milk, ice and pistachio syrup."
          },
          {
            "id": "cafeteria-ice-carmel-latte",
            "name": "ICE CARMEL LATTE",
            "nameEn": "ICED CARAMEL LATTE",
            "price": "9.100",
            "description": "Café, leche, hielo y syrup de caramelo.",
            "descriptionEn": "Coffee, milk, ice and caramel syrup."
          },
          {
            "id": "cafeteria-cafe-irlandes",
            "name": "CAFÉ IRLANDES",
            "nameEn": "IRISH COFFEE",
            "price": "9.100",
            "description": "Café, whisky, crema, chocolate rallado.",
            "descriptionEn": "Coffee, whisky, cream and grated chocolate."
          }
        ]
      },
      {
        "name": "Desayunos y Meriendas",
        "nameEn": "Breakfast & afternoon tea",
        "products": [
          {
            "id": "cafeteria-natural",
            "name": "NATURAL",
            "nameEn": "NATURAL",
            "price": "18.700",
            "description": "Café c/ leche + yogur con granola + mix de frutas + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + yogurt with granola + mixed fruit + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-waikiki",
            "name": "WAIKIKI",
            "nameEn": "WAIKIKI",
            "price": "20.600",
            "description": "Café c/ leche + budines (consultar sabores) + medio tostado de miga + exprimido.",
            "descriptionEn": "Coffee with milk + loaf cake (ask for flavors) + half a toasted ham and cheese sandwich + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-clasico",
            "name": "CLÁSICO",
            "nameEn": "CLASSIC",
            "price": "20.600",
            "description": "Café c/ leche + 2 medialunas + tostadas con 2 dips a elección + exprimido.",
            "descriptionEn": "Coffee with milk + 2 medialunas (Argentine croissants) + toast with 2 spreads of your choice + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-mirador",
            "name": "MIRADOR",
            "nameEn": "MIRADOR",
            "price": "22.700",
            "description": "Café c/ leche + tostadas con huevos revueltos, palta, semillas y tomates cherry + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + toast with scrambled eggs, avocado, seeds and cherry tomatoes + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-ala-wai",
            "name": "ALA WAI",
            "nameEn": "ALA WAI",
            "price": "21.400",
            "description": "Café c/ leche + tostón con hummus de remolacha, palta, semillas y tomates cherry + exprimido.",
            "descriptionEn": "Coffee with milk + toast with beet hummus, avocado, seeds and cherry tomatoes + fresh orange juice.",
            "suggested": true
          }
        ]
      }
    ]
  },
  {
    "name": "Pastelería",
    "nameEn": "Pastries",
    "icon": "pasteleria",
    "featured": true,
    "subcategories": [
      {
        "name": "Tradicional",
        "nameEn": "Classics",
        "products": [
          {
            "id": "pasteleria-scon-de-queso",
            "name": "SCON DE QUESO",
            "nameEn": "CHEESE SCONE",
            "price": "6.800"
          },
          {
            "id": "pasteleria-alfajor-de-maicena",
            "name": "ALFAJOR DE MAICENA",
            "nameEn": "CORNSTARCH ALFAJOR",
            "price": "6.600",
            "descriptionEn": "Two soft cornstarch cookies filled with dulce de leche."
          },
          {
            "id": "pasteleria-alfajor-de-chocolate",
            "name": "ALFAJOR DE CHOCOLATE",
            "nameEn": "CHOCOLATE ALFAJOR",
            "price": "6.600",
            "descriptionEn": "Cookie sandwich filled with dulce de leche and coated in chocolate."
          },
          {
            "id": "pasteleria-alfajor-blanco-con-nueces",
            "name": "ALFAJOR BLANCO CON NUECES",
            "nameEn": "WHITE ALFAJOR WITH WALNUTS",
            "price": "6.600"
          },
          {
            "id": "pasteleria-alfajor-de-pistaccio",
            "name": "ALFAJOR DE PISTACCIO",
            "nameEn": "PISTACHIO ALFAJOR",
            "price": "8.800"
          },
          {
            "id": "pasteleria-porcion-de-budin-2-rebanadas",
            "name": "PORCIÓN DE BUDIN (2 REBANADAS)",
            "nameEn": "LOAF CAKE (2 SLICES)",
            "price": "7.900"
          },
          {
            "id": "pasteleria-medialuna-dulce-o-salada",
            "name": "MEDIALUNA DULCE O SALADA",
            "nameEn": "MEDIALUNA, SWEET OR SAVORY",
            "price": "2.100",
            "descriptionEn": "Argentine-style croissant."
          },
          {
            "id": "pasteleria-medialuna-de-jamon-y-queso",
            "name": "MEDIALUNA DE JAMÓN Y QUESO",
            "nameEn": "HAM AND CHEESE MEDIALUNA",
            "price": "4.000"
          },
          {
            "id": "pasteleria-croissant-relleno",
            "name": "CROISSANT RELLENO",
            "nameEn": "FILLED CROISSANT",
            "price": "8.200",
            "description": "De dulce de leche, crema pastelera o jamón y queso.",
            "descriptionEn": "With dulce de leche, pastry cream, or ham and cheese."
          },
          {
            "id": "pasteleria-tostado-de-miga",
            "name": "TOSTADO DE MIGA",
            "nameEn": "TOASTED SANDWICH",
            "price": "15.200",
            "descriptionEn": "Toasted ham and cheese sandwich on thin crustless bread."
          },
          {
            "id": "pasteleria-tostado-en-pan-arabe",
            "name": "TOSTADO EN PAN ÁRABE",
            "nameEn": "TOASTED PITA SANDWICH",
            "price": "15.200",
            "description": "De jamón y queso.",
            "descriptionEn": "Ham and cheese."
          },
          {
            "id": "pasteleria-tostadas-de-masa-madre-2-unidades",
            "name": "TOSTADAS DE MASA MADRE (2 UNIDADES)",
            "nameEn": "SOURDOUGH TOAST (2 SLICES)",
            "price": "4.100"
          },
          {
            "id": "pasteleria-porcion-de-mermelada-o-dulce-de-leche",
            "name": "PORCIÓN DE MERMELADA O DULCE DE LECHE",
            "nameEn": "SIDE OF JAM OR DULCE DE LECHE",
            "price": "2.100"
          },
          {
            "id": "pasteleria-porcion-de-manteca-o-queso-crema",
            "name": "PORCIÓN DE MANTECA O QUESO CREMA",
            "nameEn": "SIDE OF BUTTER OR CREAM CHEESE",
            "price": "2.100"
          }
        ]
      },
      {
        "name": "sin tacc",
        "nameEn": "Gluten free",
        "products": [
          {
            "id": "pasteleria-alfajor-de-maicena-2",
            "name": "ALFAJOR DE MAICENA",
            "nameEn": "CORNSTARCH ALFAJOR",
            "price": "5.500",
            "descriptionEn": "Two soft cornstarch cookies filled with dulce de leche.",
            "glutenFree": true
          },
          {
            "id": "pasteleria-alfajor-de-harina-de-almendra",
            "name": "ALFAJOR DE HARINA DE ALMENDRA",
            "nameEn": "ALMOND FLOUR ALFAJOR",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-brownie-c-nuez",
            "name": "BROWNIE C/ NUEZ",
            "nameEn": "BROWNIE WITH WALNUTS",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-cookie-de-chocolate",
            "name": "COOKIE DE CHOCOLATE",
            "nameEn": "CHOCOLATE COOKIE",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-torta-tarta",
            "name": "TORTA/TARTA",
            "nameEn": "CAKE / TART",
            "price": "9.900",
            "description": "Consultar variedades.",
            "descriptionEn": "Ask about today's options."
          }
        ]
      },
      {
        "name": "tortas",
        "nameEn": "Cakes",
        "products": [
          {
            "id": "pasteleria-imperial-de-frutillas",
            "name": "IMPERIAL DE FRUTILLAS",
            "nameEn": "STRAWBERRY IMPERIAL",
            "price": "9.900",
            "description": "Bizcochuelo de vainilla, dulce de leche, crema, merengue y jalea de frutillas.",
            "descriptionEn": "Vanilla sponge cake, dulce de leche, cream, meringue and strawberry jelly."
          },
          {
            "id": "pasteleria-anos-locos",
            "name": "AÑOS LOCOS",
            "nameEn": "AÑOS LOCOS",
            "price": "9.900",
            "description": "Base de brownie con nuez, dulce de leche y merengue italiano.",
            "descriptionEn": "Brownie base with walnuts, dulce de leche and Italian meringue."
          },
          {
            "id": "pasteleria-chocotorta",
            "name": "CHOCOTORTA",
            "nameEn": "CHOCOTORTA",
            "price": "9.900",
            "description": "Preparada con galletitas Chocolinas.",
            "descriptionEn": "The Argentine classic: Chocolinas chocolate cookies layered with dulce de leche and cream cheese.",
            "suggested": true
          },
          {
            "id": "pasteleria-torta-bruce",
            "name": "TORTA BRUCE",
            "nameEn": "TORTA BRUCE",
            "price": "9.900",
            "suggested": true
          },
          {
            "id": "pasteleria-red-velvet",
            "name": "RED VELVET",
            "nameEn": "RED VELVET",
            "price": "9.900",
            "description": "Bizcochuelo a base de cacao con frosting de queso crema.",
            "descriptionEn": "Cocoa sponge cake with cream cheese frosting."
          },
          {
            "id": "pasteleria-torta-blondie",
            "name": "TORTA BLONDIE",
            "nameEn": "BLONDIE CAKE",
            "price": "9.900",
            "description": "Brownie de chocolate blanco con crema chantilly y reducción de frutos rojos.",
            "descriptionEn": "White chocolate brownie with Chantilly cream and a red berry reduction."
          }
        ]
      },
      {
        "name": "tartas",
        "nameEn": "Tarts & cheesecakes",
        "products": [
          {
            "id": "pasteleria-lemon-pie",
            "name": "LEMON PIE",
            "nameEn": "LEMON PIE",
            "price": "9.000",
            "suggested": true
          },
          {
            "id": "pasteleria-tarta-de-manzanas",
            "name": "TARTA DE MANZANAS",
            "nameEn": "APPLE TART",
            "price": "9.000"
          },
          {
            "id": "pasteleria-tarta-de-frutillas",
            "name": "TARTA DE FRUTILLAS",
            "nameEn": "STRAWBERRY TART",
            "price": "9.000",
            "description": "Con crema pastelera y decoración de crema.",
            "descriptionEn": "With pastry cream and whipped cream."
          },
          {
            "id": "pasteleria-cheese-cake-de-arandanos",
            "name": "CHEESE CAKE DE ARÁNDANOS",
            "nameEn": "BLUEBERRY CHEESECAKE",
            "price": "9.600"
          },
          {
            "id": "pasteleria-cheese-cake-new-york",
            "name": "CHEESE CAKE NEW YORK",
            "nameEn": "NEW YORK CHEESECAKE",
            "price": "9.600",
            "suggested": true
          },
          {
            "id": "pasteleria-cheese-cake-de-oreo",
            "name": "CHEESE CAKE DE OREO",
            "nameEn": "OREO CHEESECAKE",
            "price": "9.600"
          }
        ]
      }
    ]
  },
  {
    "name": "Entradas",
    "nameEn": "Starters",
    "icon": "entradas",
    "subcategories": [
      {
        "name": "Entradas",
        "nameEn": "Starters",
        "products": [
          {
            "id": "entradas-rabas-con-limon",
            "name": "RABAS CON LIMÓN",
            "nameEn": "FRIED SQUID RINGS (RABAS)",
            "price": "31.400",
            "description": "Aros de calamar fresco, rebozados y fritos en el momento, con limón y salsa alioli. El clásico para compartir.",
            "descriptionEn": "Fresh squid rings, battered and fried to order, with lemon and aioli. The classic to share.",
            "suggested": true
          },
          {
            "id": "entradas-papas-a-la-crema",
            "name": "PAPAS A LA CREMA",
            "nameEn": "CREAMY POTATOES",
            "price": "20.300",
            "description": "Papas con crema, panceta y verdeo",
            "descriptionEn": "Potatoes in cream with bacon and green onion."
          },
          {
            "id": "entradas-tortilla-espanola",
            "name": "TORTILLA ESPAÑOLA",
            "nameEn": "SPANISH OMELETTE",
            "price": "24.000",
            "description": "Tortilla de papa, cebolla y huevo, con chorizo colorado.",
            "descriptionEn": "Potato, onion and egg omelette with chorizo."
          },
          {
            "id": "entradas-langostinos-empanados",
            "name": "LANGOSTINOS EMPANADOS",
            "nameEn": "BREADED PRAWNS",
            "price": "34.300",
            "description": "Langostinos marinados con provenzal y un toque de ají, empanados y fritos. Con papas fritas.",
            "descriptionEn": "Prawns marinated with garlic, parsley and a touch of chili, breaded and fried. With French fries."
          },
          {
            "id": "entradas-burrata",
            "name": "BURRATA",
            "nameEn": "BURRATA",
            "price": "30.600",
            "description": "Queso italiano de corazón cremoso, sobre hojas verdes, con tomates cherry, tomates confitados y nueces. Ideal para dos.",
            "descriptionEn": "Italian cheese with a creamy heart, on greens, with cherry tomatoes, confit tomatoes and walnuts. Ideal for two.",
            "suggested": true
          },
          {
            "id": "entradas-gambas-al-ajillo",
            "name": "GAMBAS AL AJILLO",
            "nameEn": "GARLIC SHRIMP (GAMBAS AL AJILLO)",
            "price": "31.900",
            "description": "Gambas salteadas en aceite de oliva con ajo, vino blanco, pimentón y un toque de ají. Con papas españolas.",
            "descriptionEn": "Shrimp sautéed in olive oil with garlic, white wine, paprika and a touch of chili. With Spanish-style fried potatoes."
          },
          {
            "id": "entradas-tabla-de-mar",
            "name": "TABLA DE MAR",
            "nameEn": "SEAFOOD PLATTER",
            "price": "36.200",
            "description": "Fritura de rabas, calamarettes, langostinos, cornalitos y pesca blanca. Para compartir entre dos y cuatro personas.",
            "descriptionEn": "Fried squid rings, baby squid, prawns, whitebait and white fish. To share between two and four people."
          },
          {
            "id": "entradas-pulpo-a-la-gallega",
            "name": "PULPO A LA GALLEGA",
            "nameEn": "GALICIAN-STYLE OCTOPUS",
            "price": "71.500",
            "description": "Pulpo con pimentón español y aceite de oliva, sobre papas al natural.",
            "descriptionEn": "Octopus with Spanish paprika and olive oil over boiled potatoes."
          },
          {
            "id": "entradas-calamarettes-a-la-leonesa",
            "name": "CALAMARETTES A LA LEONESA",
            "nameEn": "BABY SQUID LYONNAISE",
            "price": "36.200",
            "description": "Acompañados de papas españolas.",
            "descriptionEn": "With Spanish-style fried potatoes."
          }
        ]
      },
      {
        "name": "Tapeos",
        "nameEn": "Tapas & boards",
        "products": [
          {
            "id": "entradas-toston-veggie-vegetariano",
            "name": "TOSTÓN VEGGIE (VEGETARIANO)",
            "nameEn": "VEGGIE TOAST (VEGETARIAN)",
            "price": "15.800",
            "description": "Peras caramelizadas, queso azul, rúcula, nueces y miel.",
            "descriptionEn": "Caramelized pears, blue cheese, arugula, walnuts and honey."
          },
          {
            "id": "entradas-tapeo-de-quesos",
            "name": "TAPEO DE QUESOS",
            "nameEn": "CHEESE BOARD",
            "price": "26.200",
            "description": "Queso pepato, queso reggianito, queso gouda, queso azul y queso pategras.",
            "descriptionEn": "Pepato, reggianito, gouda, blue and pategrás cheeses."
          },
          {
            "id": "entradas-tapeo-de-fiambres",
            "name": "TAPEO DE FIAMBRES",
            "nameEn": "CHARCUTERIE BOARD",
            "price": "26.200",
            "description": "Jamón serrano, jamón cocido, lomo ahumado, bondiola, salamines y matambre casero.",
            "descriptionEn": "Serrano ham, cooked ham, smoked pork loin, cured pork neck, salami and homemade matambre (rolled beef)."
          },
          {
            "id": "entradas-boquerones",
            "name": "BOQUERONES",
            "nameEn": "MARINATED ANCHOVIES (BOQUERONES)",
            "price": "17.200",
            "description": "Acompañados de manteca y pan de masa madre tostado.",
            "descriptionEn": "With butter and toasted sourdough bread."
          },
          {
            "id": "entradas-toston-rose",
            "name": "TOSTÓN ROSÉ",
            "nameEn": "ROSÉ TOAST",
            "price": "20.400",
            "description": "Queso philadelphia, salmón rosado, palta y brotes de rúcula.",
            "descriptionEn": "Cream cheese, pink salmon, avocado and arugula sprouts."
          }
        ]
      }
    ]
  },
  {
    "name": "Platos",
    "nameEn": "Mains",
    "icon": "platos",
    "subcategories": [
      {
        "name": "ensaladas",
        "nameEn": "Salads",
        "products": [
          {
            "id": "platos-caesar-de-pollo",
            "name": "CAESAR DE POLLO",
            "nameEn": "CHICKEN CAESAR",
            "price": "22.300",
            "description": "Rúcula, lechuga, croutons, queso parmesano, jamón crudo, cherrys, pechuga de pollo y aderezo caesar.",
            "descriptionEn": "Arugula, lettuce, croutons, parmesan, cured ham, cherry tomatoes, chicken breast and Caesar dressing."
          },
          {
            "id": "platos-ensalada-fresca-de-mar",
            "name": "ENSALADA FRESCA DE MAR",
            "nameEn": "FRESH SEAFOOD SALAD",
            "price": "29.000",
            "description": "Tomate, lechuga, cebolla, palta, morrón, langostinos y calamar al escabeche.",
            "descriptionEn": "Tomato, lettuce, onion, avocado, bell pepper, prawns and pickled squid."
          },
          {
            "id": "platos-ensalada-capresse",
            "name": "ENSALADA CAPRESSE",
            "nameEn": "CAPRESE SALAD",
            "price": "24.500",
            "description": "Queso fresco en cubos, tomate, albahaca y olivas negras.",
            "descriptionEn": "Diced fresh cheese, tomato, basil and black olives."
          },
          {
            "id": "platos-ensalada-salmon-rose",
            "name": "ENSALADA SALMÓN ROSE",
            "nameEn": "PINK SALMON SALAD",
            "price": "27.000",
            "description": "Lechuga, rúcula, zanahoria, salmón rosado ahumado, queso crema, tomates cherry y alcaparras.",
            "descriptionEn": "Lettuce, arugula, carrot, smoked pink salmon, cream cheese, cherry tomatoes and capers."
          },
          {
            "id": "platos-ensalada-mirador",
            "name": "ENSALADA MIRADOR",
            "nameEn": "MIRADOR SALAD",
            "price": "23.700",
            "description": "Lechuga, rúcula, tomates cherry, langostinos, queso crema y croutons.",
            "descriptionEn": "Lettuce, arugula, cherry tomatoes, prawns, cream cheese and croutons."
          },
          {
            "id": "platos-ensalada-vegana",
            "name": "ENSALADA VEGANA",
            "nameEn": "VEGAN SALAD",
            "price": "22.300",
            "description": "Zanahoria, choclo, lechuga, palta, tomate, quinoa y semillas.",
            "descriptionEn": "Carrot, corn, lettuce, avocado, tomato, quinoa and seeds."
          }
        ]
      },
      {
        "name": "arroces",
        "nameEn": "Rice dishes",
        "products": [
          {
            "id": "platos-paella-waikiki",
            "name": "PAELLA WAIKIKI",
            "nameEn": "PAELLA WAIKIKI",
            "price": "65.800",
            "description": "El plato de la casa. Arroz azafranado cocinado en caldo de pescado, con pollo, calamares, mejillones, gambas y vieiras. Para 2 personas.",
            "descriptionEn": "Our signature dish. Saffron rice cooked in fish stock with chicken, squid, mussels, shrimp and scallops. For 2.",
            "suggested": true
          },
          {
            "id": "platos-caya-chilena",
            "name": "CAYA CHILENA",
            "nameEn": "CAYA CHILENA",
            "price": "55.700",
            "description": "Arroz azafranado y cremoso con pollo, champiñones, jamón y lechuga, gratinado con crema y queso. Para 2 personas.",
            "descriptionEn": "Creamy saffron rice with chicken, mushrooms, ham and lettuce, gratinéed with cream and cheese. For 2."
          },
          {
            "id": "platos-risotto-con-frutos-de-mar",
            "name": "RISOTTO CON FRUTOS DE MAR",
            "nameEn": "SEAFOOD RISOTTO",
            "price": "43.900",
            "description": "Arroz carnaroli cocinado en caldo de pescado y vino blanco, terminado con manteca y queso, con calamares, mejillones, gambas y vieiras.",
            "descriptionEn": "Carnaroli rice cooked in fish stock and white wine, finished with butter and cheese, with squid, mussels, shrimp and scallops."
          },
          {
            "id": "platos-risotto-con-pollo-y-vegetales",
            "name": "RISOTTO CON POLLO Y VEGETALES",
            "nameEn": "CHICKEN AND VEGETABLE RISOTTO",
            "price": "33.700",
            "description": "Risotto de arroz carnaroli con pollo y vegetales frescos, terminado con manteca y queso.",
            "descriptionEn": "Carnaroli risotto with chicken and fresh vegetables, finished with butter and cheese."
          },
          {
            "id": "platos-risotto-vegetariano",
            "name": "RISOTTO VEGETARIANO",
            "nameEn": "VEGETARIAN RISOTTO",
            "price": "30.300",
            "description": "Risotto de arroz carnaroli con vegetales frescos, cocinado en caldo de verduras y terminado con manteca y queso.",
            "descriptionEn": "Carnaroli risotto with fresh vegetables, cooked in vegetable stock and finished with butter and cheese."
          }
        ]
      },
      {
        "name": "pescados",
        "nameEn": "Fish & seafood",
        "products": [
          {
            "id": "platos-abadejo-grille",
            "name": "ABADEJO GRILLÉ",
            "nameEn": "GRILLED ABADEJO",
            "price": "33.700",
            "description": "Pescado de mar de carne blanca y delicada, con pocas espinas, a la plancha con oliva y limón. Con vegetales salteados y papas al natural.",
            "descriptionEn": "A local sea fish with delicate white flesh and few bones, grilled with olive oil and lemon. With sautéed vegetables and boiled potatoes."
          },
          {
            "id": "platos-abadejo-con-crema-de-limon",
            "name": "ABADEJO CON CREMA DE LIMÓN",
            "nameEn": "ABADEJO WITH LEMON CREAM",
            "price": "36.000",
            "description": "Abadejo con una salsa cremosa de limón y cúrcuma. Con puré duquesa gratinado.",
            "descriptionEn": "Abadejo in a creamy lemon and turmeric sauce. With gratinéed duchess potatoes."
          },
          {
            "id": "platos-trucha-a-la-manteca-con-alcaparras",
            "name": "TRUCHA A LA MANTECA CON ALCAPARRAS",
            "nameEn": "TROUT WITH BUTTER AND CAPERS",
            "price": "40.200",
            "description": "Trucha patagónica de carne suave y sabrosa, con salsa de manteca, limón y alcaparras. Con vegetales.",
            "descriptionEn": "Patagonian trout, mild and flavorful, with a butter, lemon and caper sauce. With vegetables."
          },
          {
            "id": "platos-salmon-rosado-grille",
            "name": "SALMÓN ROSADO GRILLÉ",
            "nameEn": "GRILLED PINK SALMON",
            "price": "41.800",
            "description": "Salmón rosado a la plancha, jugoso y de textura mantecosa. Con vegetales salteados y papas al natural.",
            "descriptionEn": "Grilled pink salmon, juicy with a buttery texture. With sautéed vegetables and boiled potatoes."
          },
          {
            "id": "platos-salmon-rosado-a-la-crema-de-camarones",
            "name": "SALMÓN ROSADO A LA CREMA DE CAMARONES",
            "nameEn": "PINK SALMON WITH SHRIMP CREAM",
            "price": "47.500",
            "description": "Salmón rosado a la plancha con salsa de camarones salteados con cebolla y crema, gratinada con queso. Con puré duquesa.",
            "descriptionEn": "Grilled pink salmon with a sauce of shrimp sautéed with onion and cream, gratinéed with cheese. With duchess potatoes."
          },
          {
            "id": "platos-mero-grille",
            "name": "MERO GRILLÉ",
            "nameEn": "GRILLED MERO (WRECKFISH)",
            "price": "34.700",
            "description": "Pescado de aguas profundas del Atlántico Sur, de carne blanca y firme, a la plancha con aceite de oliva. Con vegetales y papas al natural.",
            "descriptionEn": "A deep-water South Atlantic fish with firm white flesh, grilled with olive oil. With vegetables and boiled potatoes."
          },
          {
            "id": "platos-mero-con-salsa-mar-del-plata",
            "name": "MERO CON SALSA MAR DEL PLATA",
            "nameEn": "MERO WITH MAR DEL PLATA SAUCE",
            "price": "41.800",
            "description": "Mero a la plancha con nuestra salsa Mar del Plata: vieiras, gambas y mejillones salteados en manteca y vino blanco. Con papas rústicas.",
            "descriptionEn": "Grilled mero with our Mar del Plata sauce: scallops, shrimp and mussels sautéed in butter and white wine. With rustic potatoes."
          },
          {
            "id": "platos-cazuela-de-mariscos",
            "name": "CAZUELA DE MARISCOS",
            "nameEn": "SEAFOOD CASSEROLE",
            "price": "59.800",
            "description": "Mejillones, calamares, vieiras, gambas y langostinos en salsa de tomate, caldo de pescado y vino blanco. Para 2 personas.",
            "descriptionEn": "Mussels, squid, scallops, shrimp and prawns in a tomato, fish stock and white wine sauce. For 2."
          }
        ]
      },
      {
        "name": "Carnes",
        "nameEn": "Meat",
        "products": [
          {
            "id": "platos-lomo-al-champignon",
            "name": "LOMO AL CHAMPIGNON",
            "nameEn": "TENDERLOIN WITH MUSHROOM SAUCE",
            "price": "42.200",
            "description": "Medallón de lomo, el corte más tierno, con salsa de champiñones, cebolla y demi-glace. Con papas rústicas.",
            "descriptionEn": "Beef tenderloin medallion, the most tender cut, with a mushroom, onion and demi-glace sauce. With rustic potatoes."
          },
          {
            "id": "platos-bife-de-chorizo-al-malbec",
            "name": "BIFE DE CHORIZO AL MALBEC",
            "nameEn": "STRIP STEAK (BIFE DE CHORIZO) WITH MALBEC",
            "price": "46.800",
            "description": "El corte emblemático de la parrilla argentina, jugoso y sabroso, con salsa de reducción de Malbec. Con papas españolas.",
            "descriptionEn": "The iconic cut of the Argentine grill, juicy and flavorful, with a Malbec reduction. With Spanish-style fried potatoes.",
            "suggested": true
          },
          {
            "id": "platos-bondiola-a-la-mostaza-y-miel",
            "name": "BONDIOLA A LA MOSTAZA Y MIEL",
            "nameEn": "PORK NECK WITH MUSTARD AND HONEY",
            "price": "38.700",
            "description": "Bondiola grillé, jugosa y sabrosa, con salsa de mostaza Dijon, miel y cúrcuma. Con puré de papas.",
            "descriptionEn": "Grilled pork neck (bondiola), juicy and flavorful, with a Dijon mustard, honey and turmeric sauce. With mashed potatoes.",
            "suggested": true
          },
          {
            "id": "platos-bife-de-chorizo-a-la-pimienta",
            "name": "BIFE DE CHORIZO A LA PIMIENTA",
            "nameEn": "PEPPER STRIP STEAK",
            "price": "42.400",
            "description": "Bife de chorizo con salsa de pimienta y demi-glace. Con papas a la crema.",
            "descriptionEn": "Strip steak with a pepper and demi-glace sauce. With creamy potatoes."
          },
          {
            "id": "platos-ojo-de-bife-con-panceta-y-hongos",
            "name": "OJO DE BIFE CON PANCETA Y HONGOS",
            "nameEn": "RIBEYE WITH BACON AND MUSHROOMS",
            "price": "45.100",
            "description": "Ojo de bife, tierno y marmolado, con salsa de crema, hongos de pino y panceta. Con papines salteados.",
            "descriptionEn": "Tender, marbled ribeye with a cream, pine mushroom and bacon sauce. With sautéed baby potatoes.",
            "suggested": true
          },
          {
            "id": "platos-wok-de-lomo",
            "name": "WOK DE LOMO",
            "nameEn": "BEEF TENDERLOIN STIR-FRY",
            "price": "33.500",
            "description": "Tiras de lomo salteadas al wok con vegetales frescos y salsa de soja. Con arroz yamaní.",
            "descriptionEn": "Strips of tenderloin stir-fried with fresh vegetables and soy sauce. With brown rice."
          },
          {
            "id": "platos-wok-de-pollo",
            "name": "WOK DE POLLO",
            "nameEn": "CHICKEN STIR-FRY",
            "price": "30.500",
            "description": "Pechuga de pollo salteada al wok con vegetales frescos y salsa de soja. Con arroz yamaní.",
            "descriptionEn": "Chicken breast stir-fried with fresh vegetables and soy sauce. With brown rice."
          }
        ]
      },
      {
        "name": "pastas",
        "nameEn": "Pasta",
        "products": [
          {
            "id": "platos-cintas-caseras-con-trucha-ahumada",
            "name": "CINTAS CASERAS CON TRUCHA AHUMADA",
            "nameEn": "HOMEMADE RIBBON PASTA WITH SMOKED TROUT",
            "price": "36.700",
            "description": "Cintas caseras al huevo con trucha ahumada y vegetales salteados.",
            "descriptionEn": "Homemade egg ribbon pasta with smoked trout and sautéed vegetables."
          },
          {
            "id": "platos-ravioli-nero-a-la-crema-de-verdeo",
            "name": "RAVIOLI NERO A LA CREMA DE VERDEO",
            "nameEn": "RAVIOLI NERO WITH GREEN ONION CREAM",
            "price": "39.600",
            "description": "Raviolón negro, hecho con tinta de calamar, relleno de salmón rosado y camarones, en crema de verdeo.",
            "descriptionEn": "Black squid-ink ravioli filled with pink salmon and shrimp, in a green onion cream sauce.",
            "suggested": true
          },
          {
            "id": "platos-cintas-caseras-con-frutos-de-mar",
            "name": "CINTAS CASERAS CON FRUTOS DE MAR",
            "nameEn": "HOMEMADE RIBBON PASTA WITH SEAFOOD",
            "price": "42.500",
            "description": "Cintas caseras al huevo en salsa de tomate y caldo de pescado, con mejillones, calamares y vieiras.",
            "descriptionEn": "Homemade egg ribbon pasta in a tomato and fish stock sauce, with mussels, squid and scallops."
          },
          {
            "id": "platos-noquis-souffle-a-los-4-quesos",
            "name": "ÑOQUIS SOUFFLÉ A LOS 4 QUESOS",
            "nameEn": "GNOCCHI SOUFFLÉ WITH FOUR CHEESES",
            "price": "29.300",
            "description": "Ñoquis livianos y aireados, con un toque de espinaca, en salsa de crema con queso azul, gouda, pategrás y fontina.",
            "descriptionEn": "Light, airy gnocchi with a touch of spinach, in a cream sauce with blue cheese, gouda, pategrás and fontina."
          },
          {
            "id": "platos-sorrentinos-con-salsa-bolognesa",
            "name": "SORRENTINOS CON SALSA BOLOGNESA",
            "nameEn": "SORRENTINOS WITH BOLOGNESE",
            "price": "35.000",
            "description": "Sorrentinos rellenos de jamón y mozzarella, con salsa bolognesa de tomate y carne.",
            "descriptionEn": "Large round pasta filled with ham and mozzarella, with a tomato and beef Bolognese sauce."
          },
          {
            "id": "platos-sorrentinos-de-cabutia-asada-caramelizada-con-miel",
            "name": "SORRENTINOS DE CABUTIA ASADA CARAMELIZADA CON MIEL",
            "nameEn": "SORRENTINOS WITH HONEY-ROASTED SQUASH",
            "price": "35.000",
            "description": "Rellenos de cabutia y mozzarella con crema de champiñones y hongos de pino",
            "descriptionEn": "Filled with roasted squash and mozzarella, with a mushroom cream and pine mushrooms."
          }
        ]
      },
      {
        "name": "fast food",
        "nameEn": "Burgers & milanesas",
        "products": [
          {
            "id": "platos-hamburguesa-vegetariana",
            "name": "HAMBURGUESA VEGETARIANA",
            "nameEn": "VEGGIE BURGER",
            "price": "25.600",
            "description": "Consultar sabores disponibles. Con rúcula, tomates confitados, hummus y papas fritas.",
            "descriptionEn": "Ask for available flavors. With arugula, confit tomatoes, hummus and French fries."
          },
          {
            "id": "platos-hamburguesa-clasica",
            "name": "HAMBURGUESA CLASICA",
            "nameEn": "CLASSIC BURGER",
            "price": "27.000",
            "description": "Contiene queso cheddar y panceta, acompañado de papas fritas.",
            "descriptionEn": "With cheddar cheese and bacon, served with French fries."
          },
          {
            "id": "platos-hamburguesa-completa",
            "name": "HAMBURGUESA COMPLETA",
            "nameEn": "DELUXE BURGER",
            "price": "27.000",
            "description": "Contiene jamón, queso cheddar, lechuga y tomate.\nAcompañada de papas fritas",
            "descriptionEn": "With ham, cheddar cheese, lettuce and tomato. Served with French fries."
          },
          {
            "id": "platos-milanesa-de-peceto",
            "name": "MILANESA DE PECETO",
            "nameEn": "BEEF MILANESA",
            "price": "25.900",
            "description": "Milanesa de peceto, un corte magro y tierno. Al plato, con papas fritas.",
            "descriptionEn": "Breaded eye of round (peceto), a lean and tender cut. Served with French fries."
          },
          {
            "id": "platos-milanesa-de-peceto-napolitana",
            "name": "MILANESA DE PECETO NAPOLITANA",
            "nameEn": "BEEF MILANESA NAPOLITANA",
            "price": "32.600",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "Breaded beef topped with ham, tomato sauce and melted cheese. Served with French fries."
          },
          {
            "id": "platos-suprema",
            "name": "SUPREMA",
            "nameEn": "CHICKEN MILANESA (SUPREMA)",
            "price": "24.600",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "Breaded chicken breast. Served with French fries."
          },
          {
            "id": "platos-suprema-napolitana",
            "name": "SUPREMA NAPOLITANA",
            "nameEn": "CHICKEN MILANESA NAPOLITANA",
            "price": "29.400",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "Breaded chicken breast topped with ham, tomato sauce and melted cheese. Served with French fries."
          }
        ]
      }
    ]
  },
  {
    "name": "Menú infantil",
    "nameEn": "Kids' Menu",
    "icon": "infantil",
    "subcategories": [
      {
        "name": "Menu Infantil",
        "nameEn": "Kids' menu",
        "products": [
          {
            "id": "menu-infantil-chicken-fingers",
            "name": "CHICKEN FINGERS",
            "nameEn": "CHICKEN FINGERS",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice cream pop."
          },
          {
            "id": "menu-infantil-milanesa-de-peceto",
            "name": "MILANESA DE PECETO",
            "nameEn": "BEEF MILANESA",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice cream pop."
          },
          {
            "id": "menu-infantil-fettuccines-con-crema",
            "name": "FETTUCCINES CON CREMA",
            "nameEn": "FETTUCCINE WITH CREAM SAUCE",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice cream pop.",
            "price": "25.700"
          },
          {
            "id": "menu-infantil-cheeseburguer",
            "name": "CHEESEBURGUER",
            "nameEn": "CHEESEBURGER",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice cream pop."
          }
        ]
      }
    ]
  },
  {
    "name": "Postres",
    "nameEn": "Desserts",
    "icon": "postres",
    "subcategories": [
      {
        "name": "Postres",
        "nameEn": "Desserts",
        "products": [
          {
            "id": "postres-flan-mixto",
            "name": "FLAN MIXTO",
            "nameEn": "FLAN WITH DULCE DE LECHE AND CREAM",
            "price": "7.600"
          },
          {
            "id": "postres-baileys-frozen",
            "name": "BAILEYS FROZEN",
            "nameEn": "BAILEYS FROZEN",
            "price": "9.600"
          },
          {
            "id": "postres-baileys-pistaccio-frozen",
            "name": "BAILEYS PISTACCIO FROZEN",
            "nameEn": "BAILEYS PISTACHIO FROZEN",
            "price": "12.000"
          },
          {
            "id": "postres-don-pedro",
            "name": "DON PEDRO",
            "nameEn": "DON PEDRO",
            "price": "9.200",
            "descriptionEn": "Ice cream blended with whisky and walnuts."
          },
          {
            "id": "postres-frutillas-con-crema",
            "name": "FRUTILLAS CON CREMA",
            "nameEn": "STRAWBERRIES AND CREAM",
            "price": "9.600"
          },
          {
            "id": "postres-mousse-de-chocolate",
            "name": "MOUSSE DE CHOCOLATE",
            "nameEn": "CHOCOLATE MOUSSE",
            "price": "8.800"
          },
          {
            "id": "postres-tiramisu",
            "name": "TIRAMISÚ",
            "nameEn": "TIRAMISU",
            "price": "7.600"
          },
          {
            "id": "postres-brownie-con-helado",
            "name": "BROWNIE CON HELADO",
            "nameEn": "BROWNIE WITH ICE CREAM",
            "price": "8.800"
          },
          {
            "id": "postres-ensalada-de-frutas-c-helado",
            "name": "ENSALADA DE FRUTAS C/ HELADO",
            "nameEn": "FRUIT SALAD WITH ICE CREAM",
            "price": "9.700"
          },
          {
            "id": "postres-panqueque-de-manzanas-con-helado",
            "name": "PANQUEQUE DE MANZANAS CON HELADO",
            "nameEn": "APPLE CREPE WITH ICE CREAM",
            "price": "11.600"
          },
          {
            "id": "postres-panqueque-de-dulce-de-leche-c-helado",
            "name": "PANQUEQUE DE DULCE DE LECHE C/ HELADO",
            "nameEn": "DULCE DE LECHE CREPE WITH ICE CREAM",
            "price": "9.600"
          },
          {
            "id": "postres-marquise-de-chocolate-con-helado",
            "name": "MARQUISE DE CHOCOLATE CON HELADO",
            "nameEn": "CHOCOLATE MARQUISE WITH ICE CREAM",
            "price": "10.400"
          },
          {
            "id": "postres-queso-y-dulce",
            "name": "QUESO Y DULCE",
            "nameEn": "CHEESE AND SWEET PASTE",
            "price": "12.900",
            "descriptionEn": "Fresh cheese with quince or sweet potato paste."
          },
          {
            "id": "postres-mousse-de-chocolate-blanco-con-frutos-rojos",
            "name": "MOUSSE DE CHOCOLATE BLANCO CON FRUTOS ROJOS",
            "nameEn": "WHITE CHOCOLATE MOUSSE WITH RED BERRIES",
            "price": "9.600"
          }
        ]
      }
    ]
  },
  {
    "name": "Bebidas",
    "nameEn": "Drinks",
    "icon": "bebidas",
    "subcategories": [
      {
        "name": "Jugos y Licuados",
        "nameEn": "Juices & smoothies",
        "products": [
          {
            "id": "bebidas-exprimido-de-naranjas",
            "name": "EXPRIMIDO DE NARANJAS",
            "nameEn": "FRESH ORANGE JUICE",
            "price": "8.300"
          },
          {
            "id": "bebidas-vaso-de-limonada",
            "name": "VASO DE LIMONADA",
            "nameEn": "GLASS OF LEMONADE",
            "price": "8.300"
          },
          {
            "id": "bebidas-licuados-frutales-con-leche-o-jugo-de-naranja",
            "name": "LICUADOS FRUTALES CON LECHE O JUGO DE NARANJA",
            "nameEn": "FRUIT SMOOTHIES WITH MILK OR ORANGE JUICE",
            "price": "8.300",
            "description": "Consultar frutas disponibles.",
            "descriptionEn": "Ask for available fruits."
          }
        ]
      },
      {
        "name": "Sin alcohol",
        "nameEn": "Non-alcoholic",
        "products": [
          {
            "id": "bebidas-agua-sin-gas-eco-de-los-andes",
            "name": "AGUA SIN GAS ECO DE LOS ANDES",
            "nameEn": "STILL WATER ECO DE LOS ANDES",
            "price": "5.100"
          },
          {
            "id": "bebidas-agua-con-gas-eco-de-los-andes",
            "name": "AGUA CON GAS ECO DE LOS ANDES",
            "nameEn": "SPARKLING WATER ECO DE LOS ANDES",
            "price": "5.100"
          },
          {
            "id": "bebidas-aguas-saborizadas-aquarius",
            "name": "AGUAS SABORIZADAS AQUARIUS",
            "nameEn": "AQUARIUS FLAVORED WATER",
            "price": "5.100"
          },
          {
            "id": "bebidas-gaseosas-linea-coca-cola",
            "name": "GASEOSAS LINEA COCA-COLA",
            "nameEn": "COCA-COLA SOFT DRINKS",
            "price": "5.100"
          },
          {
            "id": "bebidas-bravia-kombucha",
            "name": "BRAVÍA KOMBUCHA",
            "price": "5.800",
            "description": "Mango · Ginger · Superberry"
          }
        ]
      },
      {
        "name": "Jarras",
        "nameEn": "Pitchers",
        "products": [
          {
            "id": "bebidas-clerico-de-vino-blanco",
            "name": "CLERICO DE VINO BLANCO",
            "nameEn": "WHITE WINE CLERICÓ",
            "price": "26.400",
            "descriptionEn": "Argentine white wine punch with fresh fruit."
          },
          {
            "id": "bebidas-clerico-de-espumante-extra-brut",
            "name": "CLERICO DE ESPUMANTE EXTRA BRUT",
            "nameEn": "SPARKLING WINE CLERICÓ (EXTRA BRUT)",
            "price": "33.300",
            "descriptionEn": "Argentine sparkling wine punch with fresh fruit."
          },
          {
            "id": "bebidas-jarra-de-limonada",
            "name": "JARRA DE LIMONADA",
            "nameEn": "PITCHER OF LEMONADE",
            "price": "17.600",
            "description": "Con menta y jengibre",
            "descriptionEn": "With mint and ginger."
          }
        ]
      },
      {
        "name": "Cervezas",
        "nameEn": "Beers",
        "products": [
          {
            "id": "bebidas-stella-artois-473ml-lata",
            "name": "STELLA ARTOIS 473ML (LATA)",
            "nameEn": "STELLA ARTOIS 473ML (CAN)",
            "price": "6.400"
          },
          {
            "id": "bebidas-patagonia-710ml",
            "name": "PATAGONIA 710ML",
            "price": "11.300",
            "description": "- Amber Lager\n- IPA 24.7\n- Lager del Sur"
          },
          {
            "id": "bebidas-stella-artois-1l",
            "name": "STELLA ARTOIS 1L",
            "price": "11.300"
          },
          {
            "id": "bebidas-porron-corona-0-0",
            "name": "PORRON CORONA 0.0.",
            "nameEn": "CORONA 0.0 (BOTTLE)",
            "price": "7.400"
          },
          {
            "id": "bebidas-patagonia-473ml-24-7",
            "name": "PATAGONIA 473ML 24.7",
            "price": "7.400"
          },
          {
            "id": "bebidas-porron-corona",
            "name": "PORRÓN CORONA",
            "nameEn": "CORONA (BOTTLE)",
            "price": "7.400"
          }
        ]
      },
      {
        "name": "Espumantes",
        "nameEn": "Sparkling wines",
        "products": [
          {
            "id": "bebidas-trumpeter-extra-brut",
            "name": "TRUMPETER EXTRA BRUT",
            "price": "30.500"
          },
          {
            "id": "bebidas-chandon-extra-brut",
            "name": "CHANDON EXTRA BRUT",
            "price": "38.200"
          },
          {
            "id": "bebidas-chandon-rose-delice-aperitif-extra-brut",
            "name": "CHANDON ROSÉ - DELICE - APERITIF EXTRA BRUT",
            "price": "38.200"
          },
          {
            "id": "bebidas-chandon-187",
            "name": "CHANDON 187",
            "price": "16.200"
          },
          {
            "id": "bebidas-baron-b-extra-brut",
            "name": "BARON B EXTRA BRUT",
            "price": "59.800"
          },
          {
            "id": "bebidas-baron-b-brut-nature",
            "name": "BARON B BRUT NATURE",
            "price": "69.300"
          },
          {
            "id": "bebidas-salentein-brut-rose",
            "name": "SALENTEIN BRUT ROSE",
            "price": "27.900"
          },
          {
            "id": "bebidas-salentein-brut-nature",
            "name": "SALENTEIN BRUT NATURE",
            "price": "27.900"
          },
          {
            "id": "bebidas-salentein-blanc-de-blancs",
            "name": "SALENTEIN BLANC DE BLANCS",
            "price": "27.900"
          },
          {
            "id": "bebidas-veuve-clicquot",
            "name": "VEUVE CLICQUOT",
            "price": "398.100"
          }
        ]
      },
      {
        "name": "Whiskys",
        "nameEn": "Whiskies",
        "products": [
          {
            "id": "bebidas-chivas-regal",
            "name": "CHIVAS REGAL",
            "price": "17.000"
          },
          {
            "id": "bebidas-johnnie-walker-red-label",
            "name": "JOHNNIE WALKER RED LABEL",
            "price": "12.300"
          },
          {
            "id": "bebidas-johnnie-walker-black-label",
            "name": "JOHNNIE WALKER BLACK LABEL",
            "price": "15.400"
          },
          {
            "id": "bebidas-johnnie-walker-double-black",
            "name": "JOHNNIE WALKER DOUBLE BLACK",
            "price": "19.400"
          },
          {
            "id": "bebidas-johnnie-walker-gold-label",
            "name": "JOHNNIE WALKER GOLD LABEL",
            "price": "38.800"
          },
          {
            "id": "bebidas-johnnie-walker-green-label",
            "name": "JOHNNIE WALKER GREEN LABEL",
            "price": "46.700"
          },
          {
            "id": "bebidas-johnnie-walker-blue-label",
            "name": "JOHNNIE WALKER BLUE LABEL",
            "price": "130.300"
          },
          {
            "id": "bebidas-jack-daniel-s",
            "name": "JACK DANIEL'S",
            "price": "18.200"
          }
        ]
      }
    ]
  },
  {
    "name": "Cocktail's",
    "nameEn": "Cocktails",
    "icon": "cocktails",
    "subcategories": [
      {
        "name": "Cocktail's",
        "nameEn": "Cocktails",
        "products": [
          {
            "id": "cocktail-s-pisco-sour",
            "name": "PISCO SOUR",
            "price": "12.600",
            "description": "Pisco, jugo de lima, almíbar y clara de huevo.",
            "descriptionEn": "Pisco, lime juice, simple syrup and egg white.",
            "suggested": true
          },
          {
            "id": "cocktail-s-mai-tai",
            "name": "MAI TAI",
            "price": "12.600",
            "description": "Ron dorado, triple sec, jugo de lima, almíbar de almendras.",
            "descriptionEn": "Golden rum, triple sec, lime juice and almond syrup.",
            "suggested": true
          },
          {
            "id": "cocktail-s-malibu-pina-colada",
            "name": "MALIBU PIÑA COLADA",
            "price": "12.600",
            "description": "Malibú, jugo de ananá, limón y leche de coco.",
            "descriptionEn": "Malibu, pineapple juice, lemon and coconut milk.",
            "suggested": true
          },
          {
            "id": "cocktail-s-margarita-de-mango",
            "name": "MARGARITA DE MANGO",
            "nameEn": "MANGO MARGARITA",
            "price": "12.600",
            "description": "Tequila, limón, almíbar, triple sec y mango.",
            "descriptionEn": "Tequila, lemon, simple syrup, triple sec and mango.",
            "suggested": true
          },
          {
            "id": "cocktail-s-espresso-martini",
            "name": "ESPRESSO MARTINI",
            "price": "12.600",
            "description": "Vodka, café, licor de café y almíbar.",
            "descriptionEn": "Vodka, coffee, coffee liqueur and simple syrup.",
            "suggested": true
          },
          {
            "id": "cocktail-s-johnnie-collins",
            "name": "JOHNNIE COLLINS",
            "price": "16.300",
            "description": "Johnnie Walker Black Label, jugo de limón, almíbar, soda y gajo de limón.",
            "descriptionEn": "Johnnie Walker Black Label, lemon juice, simple syrup, soda and a lemon wedge."
          },
          {
            "id": "cocktail-s-johnnie-lemon",
            "name": "JOHNNIE & LEMON",
            "price": "14.200",
            "description": "Johnnie Walker Red Label, Sprite, jugo de lima y rodaja de limón.",
            "descriptionEn": "Johnnie Walker Red Label, Sprite, lime juice and a lemon slice."
          },
          {
            "id": "cocktail-s-fernet",
            "name": "FERNET",
            "price": "9.900"
          },
          {
            "id": "cocktail-s-carpano-originale",
            "name": "CARPANO ORIGINALE",
            "price": "9.900"
          },
          {
            "id": "cocktail-s-carpano-orange",
            "name": "CARPANO ORANGE",
            "price": "9.900"
          },
          {
            "id": "cocktail-s-campari-orange",
            "name": "CAMPARI ORANGE",
            "price": "9.900",
            "description": "Campari, Jugo de naranja, rodaja de naranja.",
            "descriptionEn": "Campari, orange juice and an orange slice."
          },
          {
            "id": "cocktail-s-campari-tonic",
            "name": "CAMPARI TONIC",
            "price": "9.900",
            "description": "Campari, Agua tónica, rodaja de limón.",
            "descriptionEn": "Campari, tonic water and a lemon slice."
          },
          {
            "id": "cocktail-s-cinzano-con-soda",
            "name": "CINZANO CON SODA",
            "nameEn": "CINZANO AND SODA",
            "price": "9.900",
            "description": "Cinzano Rosso, Soda, rodaja de limón.",
            "descriptionEn": "Cinzano Rosso, soda and a lemon slice."
          },
          {
            "id": "cocktail-s-cynar-pomelo",
            "name": "CYNAR POMELO",
            "nameEn": "CYNAR AND GRAPEFRUIT",
            "price": "11.400",
            "description": "Cynar, gaseosa de pomelo, rodaja de pomelo.",
            "descriptionEn": "Cynar, grapefruit soda and a grapefruit slice."
          },
          {
            "id": "cocktail-s-aperol-spritz",
            "name": "APEROL SPRITZ",
            "price": "11.400",
            "description": "Aperol, Cinzano To-Spritz, splash de soda y rodaja de naranja.",
            "descriptionEn": "Aperol, Cinzano To-Spritz, a splash of soda and an orange slice."
          },
          {
            "id": "cocktail-s-cuba-libre",
            "name": "CUBA LIBRE",
            "price": "9.900",
            "description": "Ron dorado Bacardí y Coca-Cola",
            "descriptionEn": "Bacardí golden rum and Coca-Cola."
          },
          {
            "id": "cocktail-s-negroni",
            "name": "NEGRONI",
            "price": "11.400",
            "description": "Gin, Campari y Vermouth Rosso",
            "descriptionEn": "Gin, Campari and Rosso vermouth."
          },
          {
            "id": "cocktail-s-mojito",
            "name": "MOJITO",
            "price": "11.400",
            "description": "Ron blanco Bacardí, lima, hojas de menta, y almibar.",
            "descriptionEn": "Bacardí white rum, lime, mint leaves and simple syrup."
          },
          {
            "id": "cocktail-s-gin-tonic-blu",
            "name": "GIN TONIC BLU",
            "nameEn": "BLU GIN & TONIC",
            "price": "11.400",
            "description": "De limón, pepino o frutos rojos.",
            "descriptionEn": "Lemon, cucumber or red berries."
          },
          {
            "id": "cocktail-s-gin-tonic-tanqueray",
            "name": "GIN TONIC TANQUERAY",
            "nameEn": "TANQUERAY GIN & TONIC",
            "price": "14.000",
            "description": "De limón o frutos rojos.",
            "descriptionEn": "Lemon or red berries."
          },
          {
            "id": "cocktail-s-gin-tonic-bull-dog",
            "name": "GIN TONIC BULL DOG",
            "nameEn": "BULLDOG GIN & TONIC",
            "price": "15.900",
            "description": "De limón, pepino o frutos rojos.",
            "descriptionEn": "Lemon, cucumber or red berries."
          },
          {
            "id": "cocktail-s-caipirinha",
            "name": "CAIPIRINHA",
            "price": "12.800",
            "description": "Cachaça Belo Barreiro, lima, jugo de lima y azúcar",
            "descriptionEn": "Belo Barreiro cachaça, lime, lime juice and sugar."
          },
          {
            "id": "cocktail-s-caipirinha-de-frutos-rojos",
            "name": "CAIPIRINHA DE FRUTOS ROJOS",
            "nameEn": "RED BERRY CAIPIRINHA",
            "price": "14.000",
            "description": "Cachaça Belo Barreiro, lima, jugo de lima, frutos rojos y azúcar",
            "descriptionEn": "Belo Barreiro cachaça, lime, lime juice, red berries and sugar."
          },
          {
            "id": "cocktail-s-gancia",
            "name": "GANCIA",
            "price": "8.600"
          },
          {
            "id": "cocktail-s-gancia-cero",
            "name": "GANCIA CERO",
            "price": "7800"
          },
          {
            "id": "cocktail-s-gin-tonic-tanqueray-london",
            "name": "GIN TONIC TANQUERAY LONDON",
            "nameEn": "TANQUERAY LONDON GIN & TONIC",
            "price": "14.000"
          },
          {
            "id": "cocktail-s-gin-tonic-tanqueray-sevilla",
            "name": "GIN TONIC TANQUERAY SEVILLA",
            "nameEn": "TANQUERAY SEVILLA GIN & TONIC",
            "price": "16.500"
          },
          {
            "id": "cocktail-s-smirnoff-caipi",
            "name": "SMIRNOFF CAIPI",
            "price": "12.800"
          }
        ]
      }
    ]
  },
  {
    "name": "Bodega",
    "nameEn": "Wine List",
    "icon": "bodega",
    "subcategories": [
      {
        "name": "Bodega Catena Zapata",
        "nameEn": "Catena Zapata Winery",
        "products": [
          {
            "id": "bodega-nicasia-vineyards-red-blend-malbec",
            "name": "NICASIA VINEYARDS RED BLEND MALBEC",
            "price": "27.800"
          },
          {
            "id": "bodega-nicasia-vineyards-red-blend-cabernet-franc",
            "name": "NICASIA VINEYARDS RED BLEND CABERNET FRANC",
            "price": "27.800"
          },
          {
            "id": "bodega-nicasia-vineyards-blanc-de-blancs",
            "name": "NICASIA VINEYARDS BLANC DE BLANCS",
            "price": "27.800"
          },
          {
            "id": "bodega-saint-felicien-malbec",
            "name": "SAINT FELICIEN MALBEC",
            "price": "33.700",
            "description": "Saint Felicien Malbec es un vino elegante y complejo, de color violeta oscuro y profundo, típico de los malbecs argentinos.\n\nA la nariz, intenso y concentrado, presenta aromas de moras maduras con notas ligeras de vainilla, tabaco y licor.\n\nEn boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos característicos del viñedo Angélica. De final largo y persistente, este vino muestra el gran potencial de los Malbec de Argentina.",
            "descriptionEn": "Elegant, deep violet Malbec with ripe blackberry, vanilla and tobacco notes, smooth round tannins and a long finish."
          },
          {
            "id": "bodega-saint-felicien-cabernet-franc",
            "name": "SAINT FELICIEN CABERNET FRANC",
            "price": "33.700",
            "description": "Saint Felicien Cabernet Franc es un vino elegante y complejo, de color rojo rubí profundo.\n\nSus aromas recuerdan a frutas rojas, como cassis y grosellas, suavemente entrelazadas con pimienta negra y clavo de olor.\n\nEn boca es un vino complejo, de excelente estructura, con taninos suaves y aterciopelados.",
            "descriptionEn": "Deep ruby red, with red fruit, black pepper and clove; well structured, with velvety tannins."
          },
          {
            "id": "bodega-saint-felicien-chardonnay",
            "name": "SAINT FELICIEN CHARDONNAY",
            "price": "33.700",
            "description": "Saint Felicien refleja características propias de la zona que le da origen. Con días soleados y cálidos, y noches frescas, las uvas de Chardonnay adquieren una madurez plena y bien balanceada.\n\nSu color es amarillo intenso con reflejos verdosos claros.\n\nDe gran complejidad y elegancia, en nariz se presenta concentrado e intenso, con aromas de frutas tropicales maduras, peras, durazno blanco y vainilla.\n\nEn boca, de impacto dulce y untuoso , muy bien balanceado por la acidez, con sabores a frutas maduras y notas ligeras de vainilla y tostado, que le brindan un excelente y prolongado final.",
            "descriptionEn": "Intense yellow Chardonnay with ripe tropical fruit, pear, white peach and vanilla; rich, balanced by fresh acidity."
          },
          {
            "id": "bodega-d-v-catena-cabernet-malbec",
            "name": "D.V CATENA CABERNET - MALBEC",
            "price": "40.700",
            "description": "DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas.\n\nA la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble.\n\nEn boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.",
            "descriptionEn": "Cabernet Sauvignon and Malbec: spice, ripe blackberries and plums, oak notes of vanilla and tobacco, round tannins."
          },
          {
            "id": "bodega-d-v-catena-chardonnay-chardonnay",
            "name": "D.V CATENA CHARDONNAY - CHARDONNAY",
            "price": "44.400",
            "description": "D.V. Catena Chardonnay - Chardonnay refleja características propias de las zonas que le dan origen. Con días soleados y cálidos, y noches frescas, las uvas Chardonnay adquieren una madurez plena y bien balanceada.\n\nSu color es amarillo oro con reflejos verdosos claros.\n\nDe gran complejidad y elegancia, en nariz se presenta concentrado e intenso: el viñedo La Pirámide aporta aromas de frutas tropicales maduras, ananá y durazno blanco. El viñedo Domingo confiere aromas cítricos y minerales.\n\nEn boca, de impacto dulce y untuoso, se perciben sabores a frutas maduras y una acidez vivaz que le brinda un fresco y prolongado final.",
            "descriptionEn": "Chardonnay from two vineyards: ripe tropical fruit, pineapple and white peach with citrus and mineral notes and lively acidity."
          },
          {
            "id": "bodega-d-v-catena-malbec-malbec",
            "name": "D.V CATENA MALBEC - MALBEC",
            "price": "74.100",
            "description": "Domingo Vicente Catena Malbec es un blend proveniente de uvas Malbec de dos diferentes viñedos.\n\nEl viñedo Angelica aporta aromas de mermeladas de ciruelas maduras y moras negras, suavidad y volumen al paladar.\n\nLa Pirámide entrega aromas de frutos negros de carozo y notas de especias como pimienta negra y clavo de olor.\n\nSe conjugan de manera excepcional para dar origen a este vino, intenso y concentrado, de final largo y muy persistente.",
            "descriptionEn": "Malbec from two vineyards: plum jam, black fruit and spice; intense, smooth and persistent."
          },
          {
            "id": "bodega-malbec-argentino",
            "name": "MALBEC ARGENTINO",
            "price": "184.800",
            "description": "El Catena Zapata Malbec Argentino Catena presenta un profundo e intenso color violeta.\n\nSu aroma remite a cassis, moca, clavo de olor y marcadas notas terrosas.\n\nEn boca combina densidad y dulzor con atractivos dejos minerales, suaves notas de tabaco, frutos negros y especias. El final es largo y persistente, con sabores a frutos negros dulces.",
            "descriptionEn": "Deep violet Malbec with cassis, mocha, clove and earthy notes; dense and mineral, with a long finish."
          }
        ]
      },
      {
        "name": "Bodega Bressia",
        "nameEn": "Bressia Winery",
        "products": [
          {
            "id": "bodega-sylvestra-pinot-rose",
            "name": "SYLVESTRA PINOT ROSÉ",
            "price": "26.800"
          },
          {
            "id": "bodega-sylvestra-torrontes",
            "name": "SYLVESTRA TORRONTES",
            "price": "26.800"
          },
          {
            "id": "bodega-sylvestra-sauvignon-blanc",
            "name": "SYLVESTRA SAUVIGNON BLANC",
            "price": "25.500"
          },
          {
            "id": "bodega-sylvestra-malbec",
            "name": "SYLVESTRA MALBEC",
            "price": "25.500"
          }
        ]
      },
      {
        "name": "Alamos Wines",
        "products": [
          {
            "id": "bodega-alamos-malbec",
            "name": "ALAMOS MALBEC",
            "price": "24.900"
          },
          {
            "id": "bodega-alamos-sauvignon-blanc",
            "name": "ALAMOS SAUVIGNON BLANC",
            "price": "24.900"
          },
          {
            "id": "bodega-alamos-chardonnay",
            "name": "ALAMOS CHARDONNAY",
            "price": "24.900"
          },
          {
            "id": "bodega-alamos-dulce-natural",
            "name": "ALAMOS DULCE NATURAL",
            "price": "24.900"
          }
        ]
      },
      {
        "name": "Rutini Wines",
        "products": [
          {
            "id": "bodega-rutini-dominio-malbec",
            "name": "RUTINI DOMINIO MALBEC",
            "price": "61.600",
            "description": "Color: Rojo granate límpido con reflejos violáceos.\n\nNariz: En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.\n\nBoca: En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada.",
            "descriptionEn": "Bright garnet red with plum, violet and a hint of licorice; juicy and fresh with balanced acidity."
          },
          {
            "id": "bodega-rutini-antologia-xxxviii",
            "name": "RUTINI ANTOLOGÍA XXXVIII",
            "price": "135.300",
            "description": "Rojo muy intenso, con matiz azulado.\n\nRegala una nariz con acentos florales de violeta, combinados con otros -frutales- de cereza y guinda. También, surgen notas de menta y especias.\n\nEn boca, se aprecia la jugosidad de la uva Malbec (mayoritaria en el corte), así como también la riqueza de sus aromas. Redondo, de gran longitud, destaca su persistente y sedoso final.",
            "descriptionEn": "Malbec-led blend with violet, cherry, mint and spice; juicy, round and long."
          },
          {
            "id": "bodega-rutini-sauvignon-blanc",
            "name": "RUTINI SAUVIGNON BLANC",
            "price": "49.500",
            "description": "Amarillo dorado verdoso.\n\nIntenso, en sus fragantes notas cítricas (pomelo rosado) y características de la variedad (hierbas, pasto recién cortado, mineral), tiene también un equilibrado parangón azúcar-acidez en el que además tiene cabida un dejo a vainilla, recreado por el discreto tiempo de crianza en roble.",
            "descriptionEn": "Greenish gold, with pink grapefruit, fresh-cut grass and mineral notes and a touch of vanilla from oak."
          },
          {
            "id": "bodega-trumpeter-malbec",
            "name": "TRUMPETER MALBEC",
            "price": "28.900"
          },
          {
            "id": "bodega-trumpeter-chardonnay",
            "name": "TRUMPETER CHARDONNAY",
            "price": "28.900"
          }
        ]
      },
      {
        "name": "Bodega Manos Negras",
        "nameEn": "Manos Negras Winery",
        "products": [
          {
            "id": "bodega-manos-negras-malbec",
            "name": "MANOS NEGRAS MALBEC",
            "price": "27.100"
          },
          {
            "id": "bodega-manos-negras-pinot-noir",
            "name": "MANOS NEGRAS PINOT NOIR",
            "price": "29.500"
          },
          {
            "id": "bodega-manos-negras-chardonnay",
            "name": "MANOS NEGRAS CHARDONNAY",
            "price": "27.100"
          }
        ]
      },
      {
        "name": "Copas de vino",
        "nameEn": "Wine by the glass",
        "products": [
          {
            "id": "bodega-copa-del-dia",
            "name": "COPA DEL DÍA",
            "nameEn": "WINE OF THE DAY (GLASS)",
            "price": "5.500"
          },
          {
            "id": "bodega-nicasia-malbec",
            "name": "NICASIA MALBEC",
            "price": "9.600"
          },
          {
            "id": "bodega-nicasia-blanc-de-blancs",
            "name": "NICASIA BLANC DE BLANCS",
            "price": "9.600"
          }
        ]
      },
      {
        "name": "Bodega Trapiche",
        "nameEn": "Trapiche Winery",
        "products": [
          {
            "id": "bodega-fond-de-cave-malbec",
            "name": "FOND DE CAVE MALBEC",
            "price": "23.000"
          },
          {
            "id": "bodega-fond-de-cave-chardonnay",
            "name": "FOND DE CAVE CHARDONNAY",
            "price": "23.000"
          },
          {
            "id": "bodega-medalla-malbec",
            "name": "MEDALLA MALBEC",
            "price": "32.200"
          },
          {
            "id": "bodega-medalla-chardonnay",
            "name": "MEDALLA CHARDONNAY",
            "price": "32.200"
          },
          {
            "id": "bodega-costa-pampa-albarino",
            "name": "COSTA & PAMPA ALBARIÑO",
            "price": "39.400"
          },
          {
            "id": "bodega-costa-pampa-sauvignon-blanc",
            "name": "COSTA & PAMPA SAUVIGNON BLANC",
            "price": "39.400"
          },
          {
            "id": "bodega-costa-pampa-pinot-noir",
            "name": "COSTA & PAMPA PINOT NOIR",
            "price": "44.700"
          }
        ]
      },
      {
        "name": "Mascota Vineyards",
        "products": [
          {
            "id": "bodega-la-mascota-cabernet-sauvignon",
            "name": "LA MASCOTA CABERNET SAUVIGNON",
            "price": "27.700"
          },
          {
            "id": "bodega-la-mascota-cabernet-franc",
            "name": "LA MASCOTA CABERNET FRANC",
            "price": "27.700"
          },
          {
            "id": "bodega-la-mascota-rose",
            "name": "LA MASCOTA ROSÉ",
            "price": "27.700"
          }
        ]
      },
      {
        "name": "Bodega Domaine Bousquet (Orgánicos)",
        "nameEn": "Domaine Bousquet Winery (organic)",
        "products": [
          {
            "id": "bodega-domaine-reserva-pinot-noir",
            "name": "DOMAINE RESERVA PINOT NOIR",
            "price": "26.700"
          },
          {
            "id": "bodega-domaine-reserva-chardonnay",
            "name": "DOMAINE RESERVA CHARDONNAY",
            "price": "26.700"
          },
          {
            "id": "bodega-gaia-rose",
            "name": "GAIA ROSÉ",
            "price": "34.900"
          }
        ]
      },
      {
        "name": "Salentein Wines",
        "products": [
          {
            "id": "bodega-salentein-cabernet-franc",
            "name": "SALENTEIN CABERNET FRANC",
            "price": "29.900"
          },
          {
            "id": "bodega-salentein-pinot-noir",
            "name": "SALENTEIN PINOT NOIR",
            "price": "29.900"
          },
          {
            "id": "bodega-salentein-chardonnay",
            "name": "SALENTEIN CHARDONNAY",
            "price": "28.600"
          },
          {
            "id": "bodega-salentein-sauvignon-blanc",
            "name": "SALENTEIN SAUVIGNON BLANC",
            "price": "28.600"
          },
          {
            "id": "bodega-salentein-syrah-rose",
            "name": "SALENTEIN SYRAH ROSÉ",
            "price": "28.600"
          }
        ]
      },
      {
        "name": "Piattelli Vineyards",
        "products": [
          {
            "id": "bodega-piattelli-malbec-tanat-salta",
            "name": "PIATTELLI MALBEC - TANAT SALTA",
            "price": "25.200"
          },
          {
            "id": "bodega-piattelli-reserva-malbec-salta",
            "name": "PIATTELLI RESERVA MALBEC SALTA",
            "price": "25.200"
          },
          {
            "id": "bodega-piattelli-reserva-torrontes-salta",
            "name": "PIATTELLI RESERVA TORRONTES SALTA",
            "price": "25.200"
          },
          {
            "id": "bodega-piattelli-sweet-natural",
            "name": "PIATTELLI SWEET NATURAL",
            "price": "25.200"
          }
        ]
      }
    ]
  }
];

export const suggestedProductIds: string[] = [
  "cafeteria-natural",
  "cafeteria-waikiki",
  "cafeteria-clasico",
  "cafeteria-mirador",
  "cafeteria-ala-wai",
  "pasteleria-chocotorta",
  "pasteleria-torta-bruce",
  "pasteleria-lemon-pie",
  "pasteleria-cheese-cake-new-york",
  "entradas-rabas-con-limon",
  "entradas-burrata",
  "platos-paella-waikiki",
  "platos-bife-de-chorizo-al-malbec",
  "platos-bondiola-a-la-mostaza-y-miel",
  "platos-ojo-de-bife-con-panceta-y-hongos",
  "platos-ravioli-nero-a-la-crema-de-verdeo",
  "cocktail-s-pisco-sour",
  "cocktail-s-mai-tai",
  "cocktail-s-malibu-pina-colada",
  "cocktail-s-margarita-de-mango",
  "cocktail-s-espresso-martini"
];
