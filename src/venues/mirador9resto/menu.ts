import type { Category } from "@/types/menu";

// From mimenulatech.com/mirador9resto (October 2026), in English where it helps.
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
            "name": "Café espresso",
            "nameEn": "Espresso",
            "price": "4.200"
          },
          {
            "id": "cafeteria-cafe-espresso-c-crema",
            "name": "Café espresso c/ crema",
            "nameEn": "Espresso with whipped cream",
            "price": "4.900"
          },
          {
            "id": "cafeteria-cortado",
            "name": "Cortado",
            "price": "4.200",
            "descriptionEn": "Espresso with a splash of steamed milk."
          },
          {
            "id": "cafeteria-americano",
            "name": "Americano",
            "price": "4.200"
          },
          {
            "id": "cafeteria-americano-c-crema",
            "name": "Americano c/ crema",
            "nameEn": "Americano with whipped cream",
            "price": "4.900"
          },
          {
            "id": "cafeteria-lagrima",
            "name": "Lágrima",
            "price": "4.200",
            "descriptionEn": "Hot milk with just a drop of coffee."
          },
          {
            "id": "cafeteria-macchiato",
            "name": "Macchiato",
            "price": "4.200"
          },
          {
            "id": "cafeteria-cafe-con-leche",
            "name": "Café con leche",
            "nameEn": "Coffee with milk",
            "price": "5.900"
          },
          {
            "id": "cafeteria-latte",
            "name": "Latte",
            "price": "5.900"
          },
          {
            "id": "cafeteria-ice-latte",
            "name": "Ice Latte",
            "nameEn": "Iced latte",
            "price": "5.900"
          },
          {
            "id": "cafeteria-cafe-doble-doble-cortado",
            "name": "Café doble - Doble cortado",
            "nameEn": "Double espresso - Double cortado",
            "price": "5.900"
          },
          {
            "id": "cafeteria-cafe-doble-c-crema",
            "name": "Café doble c/ crema",
            "nameEn": "Double espresso with whipped cream",
            "price": "6.100"
          },
          {
            "id": "cafeteria-te",
            "name": "Té",
            "nameEn": "Tea",
            "price": "4.200"
          },
          {
            "id": "cafeteria-te-con-leche-te-con-limon",
            "name": "Té con leche - Té con limón",
            "nameEn": "Tea with milk - Tea with lemon",
            "price": "4.900"
          },
          {
            "id": "cafeteria-submarino-chocolatada",
            "name": "Submarino - Chocolatada",
            "nameEn": "Submarino (hot milk with a chocolate bar) - Chocolate milk",
            "price": "4.900",
            "descriptionEn": "Submarino: hot milk with a bar of chocolate to melt into it."
          },
          {
            "id": "cafeteria-vaso-de-leche",
            "name": "Vaso de leche",
            "nameEn": "Glass of milk",
            "price": "4.200"
          }
        ]
      },
      {
        "name": "Especiales",
        "nameEn": "Specialty coffee",
        "products": [
          {
            "id": "cafeteria-ice-caramel-latte",
            "name": "Ice Caramel Latte",
            "nameEn": "Iced caramel latte",
            "price": "7.800",
            "description": "Café, leche, hielo y syrup de caramelo.",
            "descriptionEn": "Coffee, milk, ice and caramel syrup."
          },
          {
            "id": "cafeteria-cappuccino",
            "name": "Cappuccino",
            "price": "7.800",
            "description": "Café, leche, crema y canela.",
            "descriptionEn": "Coffee, milk, whipped cream and cinnamon."
          },
          {
            "id": "cafeteria-cafe-mirador",
            "name": "Café Mirador",
            "price": "7.800",
            "description": "Café, coñac, crema, canela y chocolate rallado.",
            "descriptionEn": "Coffee, cognac, whipped cream, cinnamon and grated chocolate."
          },
          {
            "id": "cafeteria-cafe-irlandes",
            "name": "Café Irlandés",
            "nameEn": "Irish coffee",
            "price": "7.800",
            "description": "Café, whisky, crema y chocolate rallado.",
            "descriptionEn": "Coffee, whisky, whipped cream and grated chocolate."
          },
          {
            "id": "cafeteria-cafe-bombon",
            "name": "Café Bombón",
            "nameEn": "Café bombón",
            "price": "7.800",
            "description": "Café, leche condensada, espuma de leche y chocolate rallado.",
            "descriptionEn": "Coffee, condensed milk, milk foam and grated chocolate."
          }
        ]
      }
    ]
  },
  {
    "name": "Desayuno y merienda",
    "nameEn": "Breakfast & tea",
    "icon": "desayuno",
    "featured": true,
    "subcategories": [
      {
        "name": "Desayuno y merienda",
        "nameEn": "Breakfast & afternoon tea",
        "products": [
          {
            "id": "desayuno-y-merienda-natural",
            "name": "Natural",
            "price": "15.500",
            "description": "Café con leche + yoghurt con granola + mix de frutas + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + yogurt with granola + mixed fruit + fresh orange juice."
          },
          {
            "id": "desayuno-y-merienda-waikiki",
            "name": "Waikiki",
            "price": "17.000",
            "description": "Café con leche + budines (consultar sabores) + medio tostado de miga + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + pound cake (ask for flavors) + half a toasted sandwich + fresh orange juice."
          },
          {
            "id": "desayuno-y-merienda-mirador",
            "name": "Mirador",
            "price": "17.000",
            "description": "Café con leche + 2 medialunas + tostadas con 2 dips a elección (queso crema, manteca, mermelada o dulce de leche) + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + 2 medialunas + toast with 2 dips of your choice (cream cheese, butter, jam or dulce de leche) + fresh orange juice."
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
            "id": "pasteleria-alfajor-de-maicena",
            "name": "Alfajor de Maicena",
            "nameEn": "Cornstarch alfajor",
            "price": "5.500",
            "descriptionEn": "Two soft cornstarch cookies filled with dulce de leche."
          },
          {
            "id": "pasteleria-alfajor-de-chocolate",
            "name": "Alfajor de chocolate",
            "nameEn": "Chocolate alfajor",
            "price": "5.500",
            "descriptionEn": "Cookie sandwich filled with dulce de leche and coated in chocolate."
          },
          {
            "id": "pasteleria-alfajor-blanco-con-nueces",
            "name": "Alfajor blanco con nueces",
            "nameEn": "White alfajor with walnuts",
            "price": "5.500"
          },
          {
            "id": "pasteleria-porcion-de-budin-3-rebanadas",
            "name": "Porción de budín (3 rebanadas)",
            "nameEn": "Pound cake (3 slices)",
            "price": "5.500",
            "description": "Consultar sabores.",
            "descriptionEn": "Ask for today’s flavors."
          },
          {
            "id": "pasteleria-medialuna-de-manteca-o-grasa",
            "name": "Medialuna de manteca o grasa",
            "nameEn": "Medialuna (croissant), butter or lard",
            "price": "1.700"
          },
          {
            "id": "pasteleria-medialuna-de-jamon-y-queso",
            "name": "Medialuna de jamón y queso",
            "nameEn": "Ham and cheese medialuna",
            "price": "3.400"
          },
          {
            "id": "pasteleria-tostado-de-miga",
            "name": "Tostado de miga",
            "nameEn": "Toasted sandwich",
            "price": "12.500",
            "descriptionEn": "Toasted ham and cheese sandwich on thin crustless bread."
          },
          {
            "id": "pasteleria-tostado-en-pan-arabe",
            "name": "Tostado en pan árabe",
            "nameEn": "Toasted pita sandwich",
            "price": "12.500"
          },
          {
            "id": "pasteleria-tostadas-de-pan-de-campo-4-unidades",
            "name": "Tostadas de pan de campo (4 unidades)",
            "nameEn": "Country bread toast (4 slices)",
            "price": "3.400"
          },
          {
            "id": "pasteleria-porcion-de-mermelada-o-dulce-de-leche",
            "name": "Porción de mermelada o dulce de leche",
            "nameEn": "Side of jam or dulce de leche",
            "price": "1.700"
          },
          {
            "id": "pasteleria-porcion-de-manteca-o-queso-crema",
            "name": "Porción de manteca o queso crema",
            "nameEn": "Side of butter or cream cheese",
            "price": "1.700"
          },
          {
            "id": "pasteleria-tortas-y-tartas",
            "name": "Tortas y Tartas",
            "nameEn": "Cakes and tarts",
            "price": "8.200",
            "description": "Consultar sabores.",
            "descriptionEn": "Ask for today’s flavors."
          }
        ]
      },
      {
        "name": "Sin TACC",
        "nameEn": "Gluten free",
        "products": [
          {
            "id": "pasteleria-alfajor-de-maicena-2",
            "name": "Alfajor de Maicena",
            "nameEn": "Cornstarch alfajor",
            "price": "5.500",
            "descriptionEn": "Two soft cornstarch cookies filled with dulce de leche."
          },
          {
            "id": "pasteleria-alfajor-de-harina-de-almendras",
            "name": "Alfajor de harina de almendras",
            "nameEn": "Almond flour alfajor",
            "price": "5.500"
          },
          {
            "id": "pasteleria-brownie",
            "name": "Brownie",
            "price": "5.500"
          },
          {
            "id": "pasteleria-cookie-de-chocolate",
            "name": "Cookie de chocolate",
            "nameEn": "Chocolate cookie",
            "price": "5.500"
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
            "name": "Rabas con limón",
            "nameEn": "Fried squid rings with lemon",
            "price": "28.500",
            "description": "Preparadas con calamar fresco y acompañadas de limón.",
            "descriptionEn": "Made with fresh squid, served with lemon."
          },
          {
            "id": "entradas-papas-a-la-crema",
            "name": "Papas a la crema",
            "nameEn": "Creamy potatoes",
            "price": "18.400",
            "description": "Papas con crema, panceta y verdeo.",
            "descriptionEn": "Potatoes with cream, bacon and scallions."
          },
          {
            "id": "entradas-langostinos-empanados",
            "name": "Langostinos Empanados",
            "nameEn": "Breaded prawns",
            "price": "31.100"
          },
          {
            "id": "entradas-bocaditos-de-pollo",
            "name": "Bocaditos de Pollo",
            "nameEn": "Chicken bites",
            "price": "17.600"
          },
          {
            "id": "entradas-gambas-al-ajillo",
            "name": "Gambas al ajillo",
            "nameEn": "Garlic shrimp (gambas al ajillo)",
            "price": "29.000"
          },
          {
            "id": "entradas-tortilla-de-papa",
            "name": "Tortilla de papa",
            "nameEn": "Potato omelette",
            "price": "19.700"
          },
          {
            "id": "entradas-tortilla-espanola",
            "name": "Tortilla Española",
            "nameEn": "Spanish omelette",
            "price": "21.800"
          },
          {
            "id": "entradas-bastoncitos-de-mozzarella",
            "name": "Bastoncitos de Mozzarella",
            "nameEn": "Mozzarella sticks",
            "price": "18.200"
          },
          {
            "id": "entradas-matambre-con-rusa",
            "name": "Matambre con Rusa",
            "nameEn": "Matambre with Russian salad",
            "price": "21.800"
          },
          {
            "id": "entradas-tabla-de-fiambres",
            "name": "Tabla de Fiambres",
            "nameEn": "Cold cuts board",
            "price": "32.000",
            "description": "Variedad de quesos, jamón serrano, jamón cocido, longaniza, lomo ahumado, salamines y matambre casero.",
            "descriptionEn": "Assorted cheeses, serrano ham, cooked ham, longaniza sausage, smoked pork loin, salami and homemade matambre."
          }
        ]
      }
    ]
  },
  {
    "name": "Platos",
    "nameEn": "Dishes",
    "icon": "platos",
    "subcategories": [
      {
        "name": "Pescados",
        "nameEn": "Fish & seafood",
        "products": [
          {
            "id": "platos-abadejo-grille",
            "name": "Abadejo grillé",
            "nameEn": "Grilled abadejo",
            "price": "27.800",
            "description": "Acompañado de vegetales salteados y papas al natural.",
            "descriptionEn": "Served with sautéed vegetables and boiled potatoes."
          },
          {
            "id": "platos-abadejo-con-crema-de-camarones",
            "name": "Abadejo con Crema de Camarones",
            "nameEn": "Abadejo with shrimp cream sauce",
            "price": "31.800",
            "description": "Acompañado de puré de papas.",
            "descriptionEn": "Served with mashed potatoes."
          },
          {
            "id": "platos-abadejo-con-rucula",
            "name": "Abadejo con rúcula",
            "nameEn": "Abadejo with arugula",
            "price": "29.800",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-salmon-rosado",
            "name": "Salmón Rosado",
            "nameEn": "Salmon",
            "price": "34.500",
            "description": "Acompañado de vegetales frescos y papas al natural.",
            "descriptionEn": "Served with fresh vegetables and boiled potatoes."
          },
          {
            "id": "platos-chernia-con-salsa-de-camarones",
            "name": "Chernia con Salsa de Camarones",
            "nameEn": "Chernia (wreckfish) with shrimp sauce",
            "price": "34.500",
            "description": "Acompañada de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-cazuela-de-mariscos",
            "name": "Cazuela de Mariscos",
            "nameEn": "Seafood casserole",
            "price": "49.400",
            "description": "Para 2 personas. Con mejillones, calamares, vieiras, gambas y langostinos.",
            "descriptionEn": "For 2. With mussels, squid, scallops, shrimp and prawns."
          }
        ]
      },
      {
        "name": "Arroces",
        "nameEn": "Rice dishes",
        "products": [
          {
            "id": "platos-paella",
            "name": "Paella",
            "price": "54.400",
            "description": "Para 2 personas.\nCon arroz azafranado, pollo, calamares, mejillones, vieiras y gambas.",
            "descriptionEn": "For 2. Saffron rice with chicken, squid, mussels, scallops and shrimp."
          },
          {
            "id": "platos-caya-chilena",
            "name": "Caya Chilena",
            "price": "46.000",
            "description": "Para 2 personas. Arroz cremoso con champignones, jamón, pollo, lechuga y queso gratinado.",
            "descriptionEn": "For 2. Creamy rice with mushrooms, ham, chicken, lettuce and gratinéed cheese."
          },
          {
            "id": "platos-arroz-con-mariscos",
            "name": "Arroz con Mariscos",
            "nameEn": "Seafood rice",
            "price": "49.500",
            "description": "Para 2 personas. Arroz azafranado, calamares, mejillones, gambas y vieiras.",
            "descriptionEn": "For 2. Saffron rice, squid, mussels, shrimp and scallops."
          }
        ]
      },
      {
        "name": "Carnes",
        "nameEn": "Meat",
        "products": [
          {
            "id": "platos-pechuga-al-verdeo",
            "name": "Pechuga al Verdeo",
            "nameEn": "Chicken breast with scallion sauce",
            "price": "30.000",
            "description": "Con crema de verdeo acompañada de puré.",
            "descriptionEn": "With scallion cream sauce, served with mashed potatoes."
          },
          {
            "id": "platos-bondiola-de-cerdo-grille",
            "name": "Bondiola de cerdo grillé",
            "nameEn": "Grilled pork neck",
            "price": "28.800",
            "description": "Acompañada de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-bondiola-a-la-mostaza-y-miel",
            "name": "Bondiola a la mostaza y miel",
            "nameEn": "Pork neck with mustard and honey",
            "price": "31.900",
            "description": "Acompañada de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-wok-de-lomo",
            "name": "Wok de Lomo",
            "nameEn": "Beef tenderloin stir-fry",
            "price": "27.600",
            "description": "Con vegetales frescos salteados y lomo.",
            "descriptionEn": "Sautéed fresh vegetables with beef tenderloin."
          },
          {
            "id": "platos-wok-de-pollo",
            "name": "Wok de Pollo",
            "nameEn": "Chicken stir-fry",
            "price": "25.200",
            "description": "Con vegetales frescos salteados y pollo.",
            "descriptionEn": "Sautéed fresh vegetables with chicken."
          },
          {
            "id": "platos-lomo-grille",
            "name": "Lomo Grillé",
            "nameEn": "Grilled beef tenderloin",
            "price": "31.800",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-lomo-a-la-mostaza",
            "name": "Lomo a la Mostaza",
            "nameEn": "Beef tenderloin with mustard sauce",
            "price": "34.800",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-lomo-al-champignon",
            "name": "Lomo al Champignon",
            "nameEn": "Beef tenderloin with mushroom sauce",
            "price": "34.800",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          }
        ]
      },
      {
        "name": "Pastas",
        "nameEn": "Pasta",
        "products": [
          {
            "id": "platos-noquis-souffle-a-los-cuatro-quesos",
            "name": "Ñoquis soufflé a los cuatro quesos",
            "nameEn": "Gnocchi soufflé with four cheeses",
            "price": "24.200",
            "description": "Salsa a base de crema y variedad de quesos.",
            "descriptionEn": "Cream sauce with assorted cheeses."
          },
          {
            "id": "platos-sorrentinos-con-salsa-bolognesa",
            "name": "Sorrentinos con salsa Bolognesa",
            "nameEn": "Sorrentinos with Bolognese sauce",
            "price": "28.800",
            "description": "Rellenos de jamón y mozzarella con salsa de tomate fresco.",
            "descriptionEn": "Filled with ham and mozzarella, with fresh tomato sauce."
          }
        ]
      },
      {
        "name": "Ensaladas",
        "nameEn": "Salads",
        "products": [
          {
            "id": "platos-caesar-de-pollo",
            "name": "Caesar de pollo",
            "nameEn": "Chicken Caesar",
            "price": "17.600",
            "description": "Rúcula, lechuga, croutons, queso parmesano, jamón crudo, pechuga de pollo y aderezo caesar.",
            "descriptionEn": "Arugula, lettuce, croutons, Parmesan, cured ham, chicken breast and Caesar dressing."
          },
          {
            "id": "platos-atuna",
            "name": "Atuna",
            "price": "18.700",
            "description": "Arroz, atún, huevo duro, arvejas, albahaca y olivas negras.",
            "descriptionEn": "Rice, tuna, hard-boiled egg, peas, basil and black olives."
          },
          {
            "id": "platos-capresse",
            "name": "Caprese",
            "nameEn": "Caprese",
            "price": "19.300",
            "description": "Mozzarella fresca en cubos, tomate, albahaca y olivas negras.",
            "descriptionEn": "Diced fresh mozzarella, tomato, basil and black olives."
          },
          {
            "id": "platos-mar",
            "name": "Mar",
            "price": "21.300",
            "description": "Lechuga, rúcula, zanahoria, salmón rosado ahumado, queso crema, tomates cherry y alcaparras.",
            "descriptionEn": "Lettuce, arugula, carrot, smoked salmon, cream cheese, cherry tomatoes and capers."
          },
          {
            "id": "platos-mirador",
            "name": "Mirador",
            "price": "18.700",
            "description": "Lechuga, rúcula, tomates cherry, langostinos, queso crema y croutons.",
            "descriptionEn": "Lettuce, arugula, cherry tomatoes, prawns, cream cheese and croutons."
          },
          {
            "id": "platos-vegana",
            "name": "Vegana",
            "nameEn": "Vegan",
            "price": "15.600",
            "description": "Zanahoria, choclo, lechuga, tomate y semillas.",
            "descriptionEn": "Carrot, corn, lettuce, tomato and seeds."
          }
        ]
      },
      {
        "name": "Fast food",
        "nameEn": "Burgers & sandwiches",
        "products": [
          {
            "id": "platos-hamburguesa-completa",
            "name": "Hamburguesa Completa",
            "nameEn": "Deluxe burger",
            "price": "22.300",
            "description": "Contiene jamón, queso cheddar, lechuga, tomate y guarnición de papas fritas.",
            "descriptionEn": "Ham, cheddar, lettuce and tomato, with a side of French fries."
          },
          {
            "id": "platos-milanesa-de-peceto",
            "name": "Milanesa de peceto",
            "nameEn": "Beef milanesa",
            "price": "21.400",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-milanesa-de-peceto-napolitana",
            "name": "Milanesa de peceto Napolitana",
            "nameEn": "Beef milanesa napolitana",
            "price": "26.900",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-suprema",
            "name": "Suprema",
            "nameEn": "Chicken milanesa (suprema)",
            "price": "20.300",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-suprema-napolitana",
            "name": "Suprema Napolitana",
            "nameEn": "Chicken milanesa napolitana",
            "price": "24.300",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-lomito-completo",
            "name": "Lomito Completo",
            "nameEn": "Deluxe steak sandwich",
            "price": "27.200",
            "description": "En sándwich, acompañada de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-pechuga-completa",
            "name": "Pechuga Completa",
            "nameEn": "Deluxe chicken breast sandwich",
            "price": "24.300",
            "description": "En sándwich, acompañada de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-peceto-completa",
            "name": "Peceto Completa",
            "nameEn": "Deluxe roast beef sandwich",
            "price": "27.400",
            "description": "En sándwich, acompañada de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-bondiola-de-cerdo",
            "name": "Bondiola de Cerdo",
            "nameEn": "Pork neck sandwich",
            "price": "21.800",
            "description": "En sándwich, con queso y panceta acompañada de papas fritas.",
            "descriptionEn": "As a sandwich with cheese and bacon, with French fries."
          },
          {
            "id": "platos-omelette-mixto",
            "name": "Omelette Mixto",
            "nameEn": "Ham and cheese omelette",
            "price": "19.400",
            "description": "Relleno de jamón y queso.",
            "descriptionEn": "Filled with ham and cheese."
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
        "name": "Menú infantil",
        "nameEn": "Kids' menu",
        "products": [
          {
            "id": "menu-infantil-chicken-fingers",
            "name": "Chicken Fingers",
            "price": "23.300",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice pop."
          },
          {
            "id": "menu-infantil-milanesa-de-peceto",
            "name": "Milanesa de Peceto",
            "nameEn": "Beef milanesa",
            "price": "23.300",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice pop."
          },
          {
            "id": "menu-infantil-noquis-con-crema",
            "name": "Ñoquis con Crema",
            "nameEn": "Gnocchi with cream sauce",
            "price": "23.300",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice pop."
          },
          {
            "id": "menu-infantil-cheeseburger",
            "name": "Cheeseburger",
            "price": "23.300",
            "description": "Incluye 1 bebida y 1 paleta de helado.",
            "descriptionEn": "Includes 1 drink and 1 ice pop."
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
            "id": "postres-ensalada-de-frutas",
            "name": "Ensalada de Frutas",
            "nameEn": "Fruit salad",
            "price": "7.500"
          },
          {
            "id": "postres-ensalada-de-frutas-con-helado",
            "name": "Ensalada de Frutas con Helado",
            "nameEn": "Fruit salad with ice cream",
            "price": "8.000"
          },
          {
            "id": "postres-frutillas-con-crema",
            "name": "Frutillas con Crema",
            "nameEn": "Strawberries and cream",
            "price": "7.900"
          },
          {
            "id": "postres-helados-3-bochas-a-eleccion",
            "name": "Helados 3 bochas (a elección)",
            "nameEn": "Ice cream, 3 scoops (your choice)",
            "price": "5.700"
          },
          {
            "id": "postres-brownie-con-helado",
            "name": "Brownie con Helado",
            "nameEn": "Brownie with ice cream",
            "price": "7.300"
          },
          {
            "id": "postres-don-pedro",
            "name": "Don Pedro",
            "price": "7.500",
            "descriptionEn": "Ice cream blended with whisky and walnuts."
          },
          {
            "id": "postres-flan-mixto",
            "name": "Flan Mixto",
            "nameEn": "Flan with dulce de leche and cream",
            "price": "6.300"
          },
          {
            "id": "postres-panqueque-de-dulce-de-leche-con-helado",
            "name": "Panqueque de Dulce de Leche con helado",
            "nameEn": "Dulce de leche crepe with ice cream",
            "price": "7.900"
          },
          {
            "id": "postres-panqueque-de-manzanas-con-helado",
            "name": "Panqueque de Manzanas con helado",
            "nameEn": "Apple crepe with ice cream",
            "price": "9.500"
          },
          {
            "id": "postres-copa-mar",
            "name": "Copa MAR",
            "nameEn": "Copa Mar sundae",
            "price": "8.600",
            "description": "Helado de 3 bochas, dulce de leche, nueces, almendras, merengue y charlotte.",
            "descriptionEn": "Three scoops of ice cream, dulce de leche, walnuts, almonds, meringue and chocolate sauce."
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
        "name": "Sin alcohol",
        "nameEn": "Non-alcoholic",
        "products": [
          {
            "id": "bebidas-agua-sin-gas",
            "name": "Agua sin gas",
            "nameEn": "Still water",
            "price": "4.200"
          },
          {
            "id": "bebidas-agua-con-gas",
            "name": "Agua con gas",
            "nameEn": "Sparkling water",
            "price": "4.200"
          },
          {
            "id": "bebidas-aguas-saborizadas",
            "name": "Aguas saborizadas",
            "nameEn": "Flavored water",
            "price": "4.200"
          },
          {
            "id": "bebidas-gaseosas-linea-coca-cola",
            "name": "Gaseosas línea Coca-Cola",
            "nameEn": "Coca-Cola soft drinks",
            "price": "4.200"
          }
        ]
      },
      {
        "name": "Jugos y jarras",
        "nameEn": "Juices & pitchers",
        "products": [
          {
            "id": "bebidas-exprimido-de-naranjas",
            "name": "Exprimido de naranjas",
            "nameEn": "Fresh orange juice",
            "price": "7.500"
          },
          {
            "id": "bebidas-vaso-de-limonada",
            "name": "Vaso de Limonada",
            "nameEn": "Glass of lemonade",
            "price": "7.500"
          },
          {
            "id": "bebidas-licuados-frutales-con-leche-o-jugo-de-naranja",
            "name": "Licuados frutales con leche o jugo de naranja",
            "nameEn": "Fruit smoothies with milk or orange juice",
            "price": "7.500"
          },
          {
            "id": "bebidas-jarra-de-limonada",
            "name": "Jarra de Limonada",
            "nameEn": "Pitcher of lemonade",
            "price": "14.500"
          },
          {
            "id": "bebidas-clerico-de-vino-blanco-dulce",
            "name": "Clericó de vino blanco dulce",
            "nameEn": "Sweet white wine clericó",
            "price": "22.000"
          },
          {
            "id": "bebidas-clerico-de-espumante-extra-brut",
            "name": "Clericó de espumante extra brut",
            "nameEn": "Sparkling wine clericó (extra brut)",
            "price": "27.500",
            "descriptionEn": "Argentine sparkling wine punch with fresh fruit."
          }
        ]
      },
      {
        "name": "Cervezas",
        "nameEn": "Beers",
        "products": [
          {
            "id": "bebidas-stella-artois-1l",
            "name": "Stella Artois 1L",
            "price": "8.500"
          },
          {
            "id": "bebidas-stella-artois-473ml-lata",
            "name": "Stella Artois 473ml (lata)",
            "nameEn": "Stella Artois 473 ml (can)",
            "price": "4.800"
          },
          {
            "id": "bebidas-patagonia-710ml",
            "name": "Patagonia 710ml",
            "price": "8.500"
          },
          {
            "id": "bebidas-patagonia-lata",
            "name": "Patagonia lata",
            "nameEn": "Patagonia (can)",
            "price": "4.800"
          },
          {
            "id": "bebidas-porron-corona",
            "name": "Porrón Corona",
            "nameEn": "Corona (bottle)",
            "price": "5.500"
          }
        ]
      },
      {
        "name": "Espumantes",
        "nameEn": "Sparkling wines",
        "products": [
          {
            "id": "bebidas-trumpeter-extra-brut",
            "name": "Trumpeter extra brut",
            "price": "22.200"
          },
          {
            "id": "bebidas-chandon-extra-brut",
            "name": "Chandon extra brut",
            "price": "28.500"
          },
          {
            "id": "bebidas-chandon-rose-delice-aperitif-extra-brut",
            "name": "Chandon Rosé - Delice - Aperitif extra brut",
            "price": "28.500"
          },
          {
            "id": "bebidas-chandon-187",
            "name": "Chandon 187",
            "price": "11.400"
          },
          {
            "id": "bebidas-baron-b-extra-brut",
            "name": "Baron B Extra Brut",
            "price": "49.400"
          },
          {
            "id": "bebidas-baron-b-brut-nature",
            "name": "Baron B Brut Nature",
            "price": "57.300"
          }
        ]
      }
    ]
  },
  {
    "name": "Cocktails",
    "icon": "cocktails",
    "subcategories": [
      {
        "name": "Cocktails",
        "products": [
          {
            "id": "cocktails-campari",
            "name": "Campari",
            "price": "7.800"
          },
          {
            "id": "cocktails-cinzano-rosso-segundo",
            "name": "Cinzano Rosso / Segundo",
            "price": "7.800"
          },
          {
            "id": "cocktails-cynar-julep",
            "name": "Cynar Julep",
            "price": "9.000"
          },
          {
            "id": "cocktails-cuba-libre",
            "name": "Cuba Libre",
            "price": "7.800"
          },
          {
            "id": "cocktails-negroni",
            "name": "Negroni",
            "price": "9.000"
          },
          {
            "id": "cocktails-aperol-spritz",
            "name": "Aperol Spritz",
            "price": "9.000"
          },
          {
            "id": "cocktails-mojito",
            "name": "Mojito",
            "price": "9.000"
          },
          {
            "id": "cocktails-gancia",
            "name": "Gancia",
            "price": "7.800"
          },
          {
            "id": "cocktails-fernet-coca-cola",
            "name": "Fernet & Coca-Cola",
            "price": "7.800"
          },
          {
            "id": "cocktails-gin-tonic",
            "name": "Gin Tonic",
            "nameEn": "Gin & tonic",
            "price": "9.000"
          },
          {
            "id": "cocktails-gin-tonic-tanqueray",
            "name": "Gin Tonic Tanqueray",
            "nameEn": "Tanqueray gin & tonic",
            "price": "11.000"
          },
          {
            "id": "cocktails-gin-tonic-bull-dog",
            "name": "Gin Tonic Bull Dog",
            "nameEn": "Bulldog gin & tonic",
            "price": "12.500"
          },
          {
            "id": "cocktails-caipirinha",
            "name": "Caipirinha",
            "price": "10.100"
          },
          {
            "id": "cocktails-caipirinha-de-frutos-rojos",
            "name": "Caipirinha de Frutos Rojos",
            "nameEn": "Red berry caipirinha",
            "price": "11.000"
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
        "name": "Bodega La Rural",
        "nameEn": "La Rural Winery",
        "products": [
          {
            "id": "bodega-copa-de-vino",
            "name": "Copa de Vino",
            "nameEn": "Glass of wine",
            "price": "7.900"
          },
          {
            "id": "bodega-trumpeter-malbec",
            "name": "Trumpeter Malbec",
            "price": "20.800"
          },
          {
            "id": "bodega-trumpeter-chardonnay",
            "name": "Trumpeter Chardonnay",
            "price": "20.800"
          }
        ]
      },
      {
        "name": "Rutini Wines",
        "products": [
          {
            "id": "bodega-rutini-malbec",
            "name": "Rutini Malbec",
            "price": "66.500"
          },
          {
            "id": "bodega-rutini-cabernet-malbec",
            "name": "Rutini Cabernet - Malbec",
            "price": "42.400"
          },
          {
            "id": "bodega-rutini-sauvignon-blanc",
            "name": "Rutini Sauvignon Blanc",
            "price": "40.900"
          }
        ]
      },
      {
        "name": "Alamos Wines",
        "products": [
          {
            "id": "bodega-alamos-malbec",
            "name": "Alamos Malbec",
            "price": "19.100"
          },
          {
            "id": "bodega-alamos-cabernet-sauvignon",
            "name": "Alamos Cabernet Sauvignon",
            "price": "19.100"
          },
          {
            "id": "bodega-alamos-chardonnay",
            "name": "Alamos Chardonnay",
            "price": "19.100"
          },
          {
            "id": "bodega-alamos-dulce-natural",
            "name": "Alamos Dulce Natural",
            "price": "19.100"
          }
        ]
      },
      {
        "name": "Bodega Catena Zapata",
        "nameEn": "Catena Zapata Winery",
        "products": [
          {
            "id": "bodega-nicasia-red-blend-malbec",
            "name": "Nicasia red blend Malbec",
            "price": "22.900"
          },
          {
            "id": "bodega-nicasia-red-blend-cabernet-franc",
            "name": "Nicasia red blend Cabernet Franc",
            "price": "22.900"
          },
          {
            "id": "bodega-nicasia-blanc-de-blancs",
            "name": "Nicasia Blanc de Blancs",
            "price": "22.900"
          },
          {
            "id": "bodega-d-v-catena-cabernet-malbec",
            "name": "D.V Catena Cabernet - Malbec",
            "price": "33.600"
          },
          {
            "id": "bodega-d-v-catena-chardonnay-chardonnay",
            "name": "D.V Catena Chardonnay - Chardonnay",
            "price": "36.600"
          }
        ]
      },
      {
        "name": "Bodega Bressia",
        "nameEn": "Bressia Winery",
        "products": [
          {
            "id": "bodega-sylvestra-pinot-rose",
            "name": "Sylvestra Pinot Rosé",
            "price": "19.100"
          },
          {
            "id": "bodega-sylvestra-torrontes",
            "name": "Sylvestra Torrontés",
            "price": "19.100"
          },
          {
            "id": "bodega-sylvestra-malbec",
            "name": "Sylvestra Malbec",
            "price": "19.100"
          },
          {
            "id": "bodega-sylvestra-sauvignon-blanc",
            "name": "Sylvestra Sauvignon Blanc",
            "price": "19.100"
          }
        ]
      }
    ]
  }
];

export const suggestedProductIds: string[] = [];
