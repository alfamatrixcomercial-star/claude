import type { Category } from "@/types/menu";

// From mimenulatech.com/mirador9 (October 2026), in English where it helps.
export const categories: Category[] = [
  {
    "name": "Cafetería",
    "nameEn": "Coffee",
    "icon": "cafe",
    "featured": true,
    "subcategories": [
      {
        "name": "Desayunos y meriendas",
        "nameEn": "Breakfast & afternoon tea",
        "products": [
          {
            "id": "cafeteria-mirador",
            "name": "Mirador",
            "price": "19.600",
            "description": "Café con leche + 2 medialunas tostadas con 2 dips a elección (queso crema, manteca, mermelada o dulce de leche) + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + 2 toasted medialunas with 2 dips of your choice (cream cheese, butter, jam or dulce de leche) + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-waikiki",
            "name": "Waikiki",
            "price": "19.600",
            "description": "Café con leche + budines (consultar sabores) + medio tostado de miga + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + pound cake (ask for flavors) + half a toasted sandwich + fresh orange juice.",
            "suggested": true
          },
          {
            "id": "cafeteria-natural",
            "name": "Natural",
            "price": "17.800",
            "description": "Café con leche + yoghurt con granola + mix de frutas + exprimido de naranjas.",
            "descriptionEn": "Coffee with milk + yogurt with granola + mixed fruit + fresh orange juice.",
            "suggested": true
          }
        ]
      },
      {
        "name": "Tradicional",
        "nameEn": "Classics",
        "products": [
          {
            "id": "cafeteria-cafe-espresso",
            "name": "Café espresso",
            "nameEn": "Espresso",
            "price": "4.800"
          },
          {
            "id": "cafeteria-cafe-espresso-con-crema",
            "name": "Café espresso con crema",
            "nameEn": "Espresso with whipped cream",
            "price": "5.700"
          },
          {
            "id": "cafeteria-cortado",
            "name": "Cortado",
            "price": "4.800",
            "descriptionEn": "Espresso with a splash of steamed milk."
          },
          {
            "id": "cafeteria-americano",
            "name": "Americano",
            "price": "4.800"
          },
          {
            "id": "cafeteria-americano-con-crema",
            "name": "Americano con crema",
            "nameEn": "Americano with whipped cream",
            "price": "5.700"
          },
          {
            "id": "cafeteria-lagrima",
            "name": "Lágrima",
            "price": "4.800",
            "descriptionEn": "Hot milk with just a drop of coffee."
          },
          {
            "id": "cafeteria-macchiato",
            "name": "Macchiato",
            "price": "4.800"
          },
          {
            "id": "cafeteria-cafe-con-leche",
            "name": "Café con leche",
            "nameEn": "Coffee with milk",
            "price": "6.800"
          },
          {
            "id": "cafeteria-latte",
            "name": "Latte",
            "price": "6.800"
          },
          {
            "id": "cafeteria-cafe-doble-doble-cortado",
            "name": "Café doble | Doble cortado",
            "nameEn": "Double espresso | Double cortado",
            "price": "6.800"
          },
          {
            "id": "cafeteria-cafe-doble-con-crema",
            "name": "Café doble con crema",
            "nameEn": "Double espresso with whipped cream",
            "price": "7.000"
          },
          {
            "id": "cafeteria-te",
            "name": "Té",
            "nameEn": "Tea",
            "price": "4.800"
          },
          {
            "id": "cafeteria-te-con-leche",
            "name": "Té con leche",
            "nameEn": "Tea with milk",
            "price": "5.700"
          },
          {
            "id": "cafeteria-submarino-chocolatada",
            "name": "Submarino | Chocolatada",
            "nameEn": "Submarino (hot milk with a chocolate bar) | Chocolate milk",
            "price": "5.700"
          },
          {
            "id": "cafeteria-vaso-de-leche",
            "name": "Vaso de leche",
            "nameEn": "Glass of milk",
            "price": "4.800"
          },
          {
            "id": "cafeteria-ice-latte",
            "name": "Ice latte",
            "nameEn": "Iced latte",
            "price": "6.800"
          },
          {
            "id": "cafeteria-te-con-limon",
            "name": "Té con limón",
            "nameEn": "Tea with lemon",
            "price": "5.700"
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
            "price": "8.600",
            "description": "Café, leche, hielo y syrup de caramelo.",
            "descriptionEn": "Coffee, milk, ice and caramel syrup."
          },
          {
            "id": "cafeteria-cappuccino",
            "name": "Cappuccino",
            "price": "8.600",
            "description": "Café, leche, crema y canela.",
            "descriptionEn": "Coffee, milk, whipped cream and cinnamon."
          },
          {
            "id": "cafeteria-cafe-mirador",
            "name": "Café Mirador",
            "price": "8.600",
            "description": "Café, coñac, crema, canela y chocolate rallado.",
            "descriptionEn": "Coffee, cognac, whipped cream, cinnamon and grated chocolate."
          },
          {
            "id": "cafeteria-cafe-irlandes",
            "name": "Café Irlandés",
            "nameEn": "Irish coffee",
            "price": "8.600",
            "description": "Café, whisky, crema y chocolate rallado.",
            "descriptionEn": "Coffee, whisky, whipped cream and grated chocolate."
          },
          {
            "id": "cafeteria-cafe-bombon",
            "name": "Café Bombón",
            "nameEn": "Café bombón",
            "price": "8.600",
            "description": "Café, leche condensada, espuma de leche y chocolate rallado.",
            "descriptionEn": "Coffee, condensed milk, milk foam and grated chocolate."
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
            "id": "pasteleria-tortas-y-tartas",
            "name": "Tortas y tartas",
            "nameEn": "Cakes and tarts",
            "price": "9.400",
            "description": "Consultar sabores.",
            "descriptionEn": "Ask for today’s flavors."
          },
          {
            "id": "pasteleria-alfajor-de-maicena",
            "name": "Alfajor de maicena",
            "nameEn": "Cornstarch alfajor",
            "price": "6.300",
            "descriptionEn": "Two soft cornstarch cookies filled with dulce de leche."
          },
          {
            "id": "pasteleria-alfajor-de-chocolate",
            "name": "Alfajor de chocolate",
            "nameEn": "Chocolate alfajor",
            "price": "6.300",
            "descriptionEn": "Cookie sandwich filled with dulce de leche and coated in chocolate."
          },
          {
            "id": "pasteleria-porcion-de-budin-3-rebanadas",
            "name": "Porción de budín (3 rebanadas)",
            "nameEn": "Pound cake (3 slices)",
            "price": "7.500"
          },
          {
            "id": "pasteleria-medialuna-dulce-o-salada",
            "name": "Medialuna dulce o salada",
            "nameEn": "Medialuna (croissant), sweet or savory",
            "price": "2.000",
            "descriptionEn": "Argentine-style croissant."
          },
          {
            "id": "pasteleria-medialuna-de-jamon-y-queso",
            "name": "Medialuna de jamón y queso",
            "nameEn": "Ham and cheese medialuna",
            "price": "3.800"
          },
          {
            "id": "pasteleria-tostado-de-miga",
            "name": "Tostado de miga",
            "nameEn": "Toasted sandwich",
            "price": "14.400",
            "descriptionEn": "Toasted ham and cheese sandwich on thin crustless bread."
          },
          {
            "id": "pasteleria-tostado-en-pan-arabe",
            "name": "Tostado en pan árabe",
            "nameEn": "Toasted pita sandwich",
            "price": "14.400"
          },
          {
            "id": "pasteleria-tostadas-de-masa-madre",
            "name": "Tostadas de masa madre",
            "nameEn": "Sourdough toast",
            "price": "3.900"
          },
          {
            "id": "pasteleria-porcion-de-queso-crema",
            "name": "Porción de queso crema",
            "nameEn": "Side of cream cheese",
            "price": "2.000"
          },
          {
            "id": "pasteleria-porcion-de-mermelada",
            "name": "Porción de mermelada",
            "nameEn": "Side of jam",
            "price": "2.000"
          },
          {
            "id": "pasteleria-porcion-de-dulce-de-leche",
            "name": "Porción de dulce de leche",
            "nameEn": "Side of dulce de leche",
            "price": "2.000"
          },
          {
            "id": "pasteleria-porcion-de-manteca",
            "name": "Porción de manteca",
            "nameEn": "Side of butter",
            "price": "2.000"
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
        "name": "Entradas",
        "nameEn": "Starters",
        "products": [
          {
            "id": "platos-rabas-con-limon",
            "name": "Rabas con limón",
            "nameEn": "Fried squid rings with lemon",
            "price": "29.800",
            "description": "Preparadas con calamar fresco y acompañadas de limón.",
            "descriptionEn": "Made with fresh squid, served with lemon."
          },
          {
            "id": "platos-papas-a-la-crema",
            "name": "Papas a la crema",
            "nameEn": "Creamy potatoes",
            "price": "19.300",
            "description": "Papas con crema, panceta y verdeo.",
            "descriptionEn": "Potatoes with cream, bacon and scallions."
          },
          {
            "id": "platos-langostinos-empanados",
            "name": "Langostinos empanados",
            "nameEn": "Breaded prawns",
            "price": "32.600",
            "description": "Con guarnición de papas fritas.",
            "descriptionEn": "With a side of French fries."
          },
          {
            "id": "platos-bocaditos-de-pollo",
            "name": "Bocaditos de pollo",
            "nameEn": "Chicken bites",
            "price": "18.400",
            "description": "Sobre colchón de hojas verdes, acompañados de papas fritas.",
            "descriptionEn": "On a bed of greens, with French fries."
          },
          {
            "id": "platos-gambas-al-ajillo",
            "name": "Gambas al ajillo",
            "nameEn": "Garlic shrimp (gambas al ajillo)",
            "price": "30.300",
            "description": "Acompañadas de papas españolas.",
            "descriptionEn": "Served with Spanish-style potatoes."
          },
          {
            "id": "platos-tortilla-de-papa",
            "name": "Tortilla de papa",
            "nameEn": "Potato omelette",
            "price": "20.600",
            "description": "Preparada con papa y cebolla.",
            "descriptionEn": "Made with potato and onion."
          },
          {
            "id": "platos-tortilla-espanola",
            "name": "Tortilla española",
            "nameEn": "Spanish omelette",
            "price": "22.800",
            "description": "Preparada con papa, chorizo colorado y cebolla.",
            "descriptionEn": "Made with potato, chorizo and onion."
          },
          {
            "id": "platos-bastoncitos-de-mozzarella",
            "name": "Bastoncitos de mozzarella",
            "nameEn": "Mozzarella sticks",
            "price": "19.000",
            "description": "Bastones de mozzarella empanados.",
            "descriptionEn": "Breaded mozzarella sticks."
          }
        ]
      },
      {
        "name": "Pescados",
        "nameEn": "Fish & seafood",
        "products": [
          {
            "id": "platos-abadejo-grille",
            "name": "Abadejo grillé",
            "nameEn": "Grilled abadejo",
            "price": "32.000",
            "description": "Acompañado de vegetales salteados y papas al natural.",
            "descriptionEn": "Served with sautéed vegetables and boiled potatoes."
          },
          {
            "id": "platos-abadejo-con-crema-de-camarones",
            "name": "Abadejo con crema de camarones",
            "nameEn": "Abadejo with shrimp cream sauce",
            "price": "39.200",
            "description": "Acompañado de puré de papas.",
            "descriptionEn": "Served with mashed potatoes."
          },
          {
            "id": "platos-abadejo-con-rucula",
            "name": "Abadejo con rúcula",
            "nameEn": "Abadejo with arugula",
            "price": "33.400",
            "description": "Acompañado de papas al natural.",
            "descriptionEn": "Served with boiled potatoes."
          },
          {
            "id": "platos-salmon-rosado",
            "name": "Salmón rosado",
            "nameEn": "Salmon",
            "price": "39.700",
            "description": "Con vegetales frescos salteados y papas al natural.",
            "descriptionEn": "With sautéed fresh vegetables and boiled potatoes."
          },
          {
            "id": "platos-cazuela-de-mariscos-para-2",
            "name": "Cazuela de mariscos (para 2)",
            "nameEn": "Seafood casserole (for 2)",
            "price": "56.800",
            "description": "Con mejillones, calamares, vieiras, gambas y langostinos.",
            "descriptionEn": "With mussels, squid, scallops, shrimp and prawns."
          },
          {
            "id": "platos-salmon-rosado-con-salsa-de-camarones",
            "name": "Salmón rosado con salsa de camarones",
            "nameEn": "Salmon with shrimp sauce",
            "price": "45.000",
            "description": "Acompañado de puré de papas.",
            "descriptionEn": "Served with mashed potatoes."
          }
        ]
      },
      {
        "name": "Arroces y mariscos",
        "nameEn": "Rice & seafood",
        "products": [
          {
            "id": "platos-paella-para-2",
            "name": "Paella (para 2)",
            "nameEn": "Paella (for 2)",
            "price": "62.500",
            "description": "Arroz azafranado, pollo, calamares, mejillones, gambas y vieiras.",
            "descriptionEn": "Saffron rice, chicken, squid, mussels, shrimp and scallops."
          },
          {
            "id": "platos-caya-chilena-para-2",
            "name": "Caya chilena (para 2)",
            "nameEn": "Caya chilena (for 2)",
            "price": "52.900",
            "description": "Arroz cremoso con champiñones, jamón, pollo, lechuga y queso gratinado.",
            "descriptionEn": "Creamy rice with mushrooms, ham, chicken, lettuce and gratinéed cheese."
          },
          {
            "id": "platos-arroz-con-mariscos-para-2",
            "name": "Arroz con mariscos (para 2)",
            "nameEn": "Seafood rice (for 2)",
            "price": "56.900",
            "description": "Arroz azafranado, calamares, mejillones, gambas y vieiras.",
            "descriptionEn": "Saffron rice, squid, mussels, shrimp and scallops."
          }
        ]
      },
      {
        "name": "Pastas",
        "nameEn": "Pasta",
        "products": [
          {
            "id": "platos-noquis-souffle-a-los-4-quesos",
            "name": "Ñoquis soufflé a los 4 quesos",
            "nameEn": "Gnocchi soufflé with four cheeses",
            "price": "27.800",
            "description": "Salsa a base de crema y variedad de quesos.",
            "descriptionEn": "Cream sauce with assorted cheeses."
          },
          {
            "id": "platos-sorrentinos-bolognesa",
            "name": "Sorrentinos bolognesa",
            "nameEn": "Sorrentinos with Bolognese sauce",
            "price": "33.300",
            "description": "Rellenos de jamón y mozzarella con salsa de tomate fresco.",
            "descriptionEn": "Filled with ham and mozzarella, with fresh tomato sauce."
          }
        ]
      },
      {
        "name": "Carnes",
        "nameEn": "Meat",
        "products": [
          {
            "id": "platos-pechuga-al-verdeo",
            "name": "Pechuga al verdeo",
            "nameEn": "Chicken breast with scallion sauce",
            "price": "36.700",
            "description": "Con crema de verdeo, acompañada de puré.",
            "descriptionEn": "With scallion cream sauce, served with mashed potatoes."
          },
          {
            "id": "platos-bondiola-de-cerdo-grille",
            "name": "Bondiola de cerdo grillé",
            "nameEn": "Grilled pork neck",
            "price": "34.100",
            "description": "Acompañada de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-bondiola-a-la-mostaza-y-miel",
            "name": "Bondiola a la mostaza y miel",
            "nameEn": "Pork neck with mustard and honey",
            "price": "36.800",
            "description": "Acompañada de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-wok-de-lomo",
            "name": "Wok de lomo",
            "nameEn": "Beef tenderloin stir-fry",
            "price": "31.800",
            "description": "Con vegetales frescos salteados y lomo.",
            "descriptionEn": "Sautéed fresh vegetables with beef tenderloin."
          },
          {
            "id": "platos-wok-de-pollo",
            "name": "Wok de pollo",
            "nameEn": "Chicken stir-fry",
            "price": "29.000",
            "description": "Con vegetales frescos salteados y pollo.",
            "descriptionEn": "Sautéed fresh vegetables with chicken."
          },
          {
            "id": "platos-lomo-grille",
            "name": "Lomo grillé",
            "nameEn": "Grilled beef tenderloin",
            "price": "36.700",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-lomo-a-la-mostaza",
            "name": "Lomo a la mostaza",
            "nameEn": "Beef tenderloin with mustard sauce",
            "price": "40.100",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
          },
          {
            "id": "platos-lomo-al-champignon",
            "name": "Lomo al champignon",
            "nameEn": "Beef tenderloin with mushroom sauce",
            "price": "40.100",
            "description": "Acompañado de papas rústicas.",
            "descriptionEn": "Served with rustic potatoes."
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
            "price": "21.200",
            "description": "Rúcula, lechuga, croutons, queso parmesano, jamón crudo, pechuga de pollo y aderezo caesar.",
            "descriptionEn": "Arugula, lettuce, croutons, Parmesan, cured ham, chicken breast and Caesar dressing."
          },
          {
            "id": "platos-atuna",
            "name": "Atuna",
            "price": "22.500",
            "description": "Arroz, atún, huevo duro, arvejas, tomate y choclo.",
            "descriptionEn": "Rice, tuna, hard-boiled egg, peas, tomato and corn."
          },
          {
            "id": "platos-capresse",
            "name": "Caprese",
            "nameEn": "Caprese",
            "price": "23.300",
            "description": "Queso fresco en cubos, tomate, albahaca y olivas negras.",
            "descriptionEn": "Diced fresh cheese, tomato, basil and black olives."
          },
          {
            "id": "platos-mar",
            "name": "Mar",
            "price": "25.700",
            "description": "Lechuga, rúcula, zanahoria, salmón rosado ahumado, queso crema, tomates cherry y alcaparras.",
            "descriptionEn": "Lettuce, arugula, carrot, smoked salmon, cream cheese, cherry tomatoes and capers."
          },
          {
            "id": "platos-mirador",
            "name": "Mirador",
            "price": "22.500",
            "description": "Lechuga, rúcula, tomates cherry, langostinos, queso crema y croutons.",
            "descriptionEn": "Lettuce, arugula, cherry tomatoes, prawns, cream cheese and croutons."
          },
          {
            "id": "platos-vegana",
            "name": "Vegana",
            "nameEn": "Vegan",
            "price": "21.200",
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
            "name": "Hamburguesa completa",
            "nameEn": "Deluxe burger",
            "price": "25.700",
            "description": "Jamón, queso cheddar, lechuga y tomate, acompañada de papas fritas.",
            "descriptionEn": "Ham, cheddar, lettuce and tomato, with French fries."
          },
          {
            "id": "platos-milanesa-de-peceto",
            "name": "Milanesa de peceto",
            "nameEn": "Beef milanesa",
            "price": "24.600",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-milanesa-de-peceto-napolitana",
            "name": "Milanesa de peceto napolitana",
            "nameEn": "Beef milanesa napolitana",
            "price": "31.000",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-suprema",
            "name": "Suprema",
            "nameEn": "Chicken milanesa (suprema)",
            "price": "23.400",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-suprema-napolitana",
            "name": "Suprema napolitana",
            "nameEn": "Chicken milanesa napolitana",
            "price": "27.900",
            "description": "Al plato, acompañada de papas fritas.",
            "descriptionEn": "On the plate, with French fries."
          },
          {
            "id": "platos-lomito-completo",
            "name": "Lomito completo",
            "nameEn": "Deluxe steak sandwich",
            "price": "31.400",
            "description": "En sándwich, acompañado de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-pechuga-completa",
            "name": "Pechuga completa",
            "nameEn": "Deluxe chicken breast sandwich",
            "price": "28.000",
            "description": "En sándwich, acompañada de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-peceto-completo",
            "name": "Peceto completo",
            "nameEn": "Deluxe roast beef sandwich",
            "price": "31.400",
            "description": "En sándwich, acompañado de papas fritas.",
            "descriptionEn": "As a sandwich, with French fries."
          },
          {
            "id": "platos-bondiola-de-cerdo",
            "name": "Bondiola de cerdo",
            "nameEn": "Pork neck sandwich",
            "price": "24.400",
            "description": "En sándwich, con queso y panceta, acompañada de papas fritas.",
            "descriptionEn": "As a sandwich with cheese and bacon, with French fries."
          },
          {
            "id": "platos-omelette-mixto",
            "name": "Omelette mixto",
            "nameEn": "Ham and cheese omelette",
            "price": "22.300",
            "description": "Relleno de jamón y queso.",
            "descriptionEn": "Filled with ham and cheese."
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
            "name": "Flan mixto",
            "nameEn": "Flan with dulce de leche and cream",
            "price": "7.200"
          },
          {
            "id": "postres-don-pedro",
            "name": "Don Pedro",
            "price": "8.700",
            "descriptionEn": "Ice cream blended with whisky and walnuts."
          },
          {
            "id": "postres-ensalada-de-frutas",
            "name": "Ensalada de frutas",
            "nameEn": "Fruit salad",
            "price": "6.600"
          },
          {
            "id": "postres-ensalada-de-frutas-con-helado",
            "name": "Ensalada de frutas con helado",
            "nameEn": "Fruit salad with ice cream",
            "price": "9.200"
          },
          {
            "id": "postres-frutillas-con-crema",
            "name": "Frutillas con crema",
            "nameEn": "Strawberries and cream",
            "price": "9.100"
          },
          {
            "id": "postres-helado-3-bochas-a-eleccion",
            "name": "Helado 3 bochas (a elección)",
            "nameEn": "Ice cream, 3 scoops (your choice)",
            "price": "6.600"
          },
          {
            "id": "postres-brownie-con-helado",
            "name": "Brownie con helado",
            "nameEn": "Brownie with ice cream",
            "price": "8.400"
          },
          {
            "id": "postres-copa-mar",
            "name": "Copa MAR",
            "nameEn": "Copa Mar sundae",
            "price": "9.900",
            "description": "Helado de 3 bochas, dulce de leche, nueces, almendras, merengue y charlotte.",
            "descriptionEn": "Three scoops of ice cream, dulce de leche, walnuts, almonds, meringue and chocolate sauce."
          },
          {
            "id": "postres-panqueque-de-dulce-de-leche-con-helado",
            "name": "Panqueque de dulce de leche con helado",
            "nameEn": "Dulce de leche crepe with ice cream",
            "price": "9.100"
          },
          {
            "id": "postres-panqueque-de-manzanas-con-helado",
            "name": "Panqueque de manzanas con helado",
            "nameEn": "Apple crepe with ice cream",
            "price": "11.000"
          }
        ]
      }
    ]
  },
  {
    "name": "Vinos",
    "nameEn": "Wines",
    "icon": "bodega",
    "subcategories": [
      {
        "name": "Vinos tintos",
        "nameEn": "Red wines",
        "products": [
          {
            "id": "vinos-trumpeter-malbec",
            "name": "Trumpeter Malbec",
            "price": "27.500"
          },
          {
            "id": "vinos-rutini-cabernet-malbec",
            "name": "Rutini Cabernet - Malbec",
            "price": "48.700"
          },
          {
            "id": "vinos-rutini-malbec",
            "name": "Rutini Malbec",
            "price": "76.500"
          },
          {
            "id": "vinos-alamos-malbec",
            "name": "Alamos Malbec",
            "price": "23.700"
          },
          {
            "id": "vinos-alamos-cabernet-sauvignon",
            "name": "Alamos Cabernet Sauvignon",
            "price": "23.700"
          },
          {
            "id": "vinos-nicasia-red-blend-malbec",
            "name": "Nicasia Red Blend Malbec",
            "price": "26.400"
          },
          {
            "id": "vinos-nicasia-red-blend-cabernet-franc",
            "name": "Nicasia Red Blend Cabernet Franc",
            "price": "26.400"
          },
          {
            "id": "vinos-d-v-catena-cabernet-malbec",
            "name": "D.V. Catena Cabernet - Malbec",
            "price": "38.700"
          },
          {
            "id": "vinos-manos-negras-malbec",
            "name": "Manos Negras Malbec",
            "price": "25.700"
          },
          {
            "id": "vinos-manos-negras-pinot-noir",
            "name": "Manos Negras Pinot Noir",
            "price": "28.000"
          },
          {
            "id": "vinos-copa-de-vino",
            "name": "Copa de vino",
            "nameEn": "Glass of wine",
            "price": "9.100"
          }
        ]
      },
      {
        "name": "Vinos blancos y rosados",
        "nameEn": "White & rosé wines",
        "products": [
          {
            "id": "vinos-trumpeter-chardonnay",
            "name": "Trumpeter Chardonnay",
            "price": "27.500"
          },
          {
            "id": "vinos-rutini-sauvignon-blanc",
            "name": "Rutini Sauvignon Blanc",
            "price": "47.000"
          },
          {
            "id": "vinos-sylvestra-pinot-rose",
            "name": "Sylvestra Pinot Rosé",
            "price": "25.500"
          },
          {
            "id": "vinos-sylvestra-torrontes",
            "name": "Sylvestra Torrontés",
            "price": "25.500"
          },
          {
            "id": "vinos-alamos-chardonnay",
            "name": "Alamos Chardonnay",
            "price": "23.700"
          },
          {
            "id": "vinos-alamos-dulce-natural",
            "name": "Alamos Dulce Natural",
            "price": "23.700"
          },
          {
            "id": "vinos-nicasia-blanc-de-blancs",
            "name": "Nicasia Blanc de Blancs",
            "price": "26.400"
          },
          {
            "id": "vinos-d-v-catena-chardonnay-chardonnay",
            "name": "D.V. Catena Chardonnay - Chardonnay",
            "price": "42.200"
          },
          {
            "id": "vinos-trumpeter-sauvignon-blanc",
            "name": "Trumpeter Sauvignon Blanc",
            "price": "27.500"
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
            "price": "4.800"
          },
          {
            "id": "bebidas-agua-con-gas",
            "name": "Agua con gas",
            "nameEn": "Sparkling water",
            "price": "4.800"
          },
          {
            "id": "bebidas-aguas-saborizadas",
            "name": "Aguas saborizadas",
            "nameEn": "Flavored water",
            "price": "4.800"
          },
          {
            "id": "bebidas-gaseosas-linea-coca-cola",
            "name": "Gaseosas línea Coca-Cola",
            "nameEn": "Coca-Cola soft drinks",
            "price": "4.800"
          }
        ]
      },
      {
        "name": "Jugos y licuados",
        "nameEn": "Juices & smoothies",
        "products": [
          {
            "id": "bebidas-exprimido-de-naranjas",
            "name": "Exprimido de naranjas",
            "nameEn": "Fresh orange juice",
            "price": "7.900"
          },
          {
            "id": "bebidas-vaso-de-limonada",
            "name": "Vaso de limonada",
            "nameEn": "Glass of lemonade",
            "price": "7.900"
          },
          {
            "id": "bebidas-licuados-con-leche-o-jugo-de-naranja",
            "name": "Licuados con leche o jugo de naranja",
            "nameEn": "Smoothies with milk or orange juice",
            "price": "7.900",
            "description": "Consultar frutas disponibles.",
            "descriptionEn": "Ask which fruits are available."
          },
          {
            "id": "bebidas-jarra-de-limonada",
            "name": "Jarra de limonada",
            "nameEn": "Pitcher of lemonade",
            "price": "16.700"
          }
        ]
      },
      {
        "name": "Cervezas",
        "nameEn": "Beers",
        "products": [
          {
            "id": "bebidas-stella-artois-lata",
            "name": "Stella Artois lata",
            "nameEn": "Stella Artois (can)",
            "price": "6.100"
          },
          {
            "id": "bebidas-stella-artois-1l",
            "name": "Stella Artois 1L",
            "price": "10.700"
          },
          {
            "id": "bebidas-patagonia-710-ml",
            "name": "Patagonia 710 ml",
            "price": "10.700"
          },
          {
            "id": "bebidas-porron-de-corona",
            "name": "Porrón de Corona",
            "nameEn": "Corona (bottle)",
            "price": "7.000"
          }
        ]
      },
      {
        "name": "Jarras",
        "nameEn": "Pitchers",
        "products": [
          {
            "id": "bebidas-clerico-de-vino-blanco-dulce",
            "name": "Clericó de vino blanco dulce",
            "nameEn": "Sweet white wine clericó",
            "price": "25.100"
          },
          {
            "id": "bebidas-clerico-de-espumante-extra-brut",
            "name": "Clericó de espumante extra brut",
            "nameEn": "Sparkling wine clericó (extra brut)",
            "price": "31.600"
          }
        ]
      },
      {
        "name": "Espumantes",
        "nameEn": "Sparkling wines",
        "products": [
          {
            "id": "bebidas-trumpeter-extra-brut",
            "name": "Trumpeter Extra Brut",
            "price": "29.000"
          },
          {
            "id": "bebidas-chandon-extra-brut",
            "name": "Chandon Extra Brut",
            "price": "36.300"
          },
          {
            "id": "bebidas-chandon-rose-delice-aperitif",
            "name": "Chandon Rosé / Délice / Aperitif",
            "price": "36.300"
          },
          {
            "id": "bebidas-chandon-187-ml",
            "name": "Chandon 187 ml",
            "price": "15.400"
          },
          {
            "id": "bebidas-baron-b-extra-brut",
            "name": "Baron B Extra Brut",
            "price": "56.800"
          },
          {
            "id": "bebidas-baron-b-brut-nature",
            "name": "Baron B Brut Nature",
            "price": "65.800"
          }
        ]
      },
      {
        "name": "Whiskys",
        "nameEn": "Whiskies",
        "products": [
          {
            "id": "bebidas-j-b",
            "name": "J&B",
            "price": "7.900"
          },
          {
            "id": "bebidas-chivas-regal",
            "name": "Chivas Regal",
            "price": "16.200"
          },
          {
            "id": "bebidas-johnnie-walker-red-label",
            "name": "Johnnie Walker Red Label",
            "price": "11.700"
          },
          {
            "id": "bebidas-jack-daniel-s",
            "name": "Jack Daniel's",
            "price": "17.300"
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
            "price": "9.400"
          },
          {
            "id": "cocktails-cinzano-rosso",
            "name": "Cinzano Rosso",
            "price": "9.400"
          },
          {
            "id": "cocktails-cynar-julep",
            "name": "Cynar Julep",
            "price": "10.800"
          },
          {
            "id": "cocktails-cuba-libre",
            "name": "Cuba Libre",
            "price": "9.400"
          },
          {
            "id": "cocktails-negroni",
            "name": "Negroni",
            "price": "10.800"
          },
          {
            "id": "cocktails-aperol-spritz",
            "name": "Aperol Spritz",
            "price": "10.800"
          },
          {
            "id": "cocktails-mojito",
            "name": "Mojito",
            "price": "10.800"
          },
          {
            "id": "cocktails-gancia",
            "name": "Gancia",
            "price": "9.400"
          },
          {
            "id": "cocktails-fernet",
            "name": "Fernet",
            "price": "9.400"
          },
          {
            "id": "cocktails-gin-tonic",
            "name": "Gin Tonic",
            "nameEn": "Gin & tonic",
            "price": "10.800"
          },
          {
            "id": "cocktails-gin-tonic-tanqueray",
            "name": "Gin Tonic Tanqueray",
            "nameEn": "Tanqueray gin & tonic",
            "price": "13.300"
          },
          {
            "id": "cocktails-gin-tonic-bulldog",
            "name": "Gin Tonic Bulldog",
            "nameEn": "Bulldog gin & tonic",
            "price": "15.100"
          },
          {
            "id": "cocktails-caipirinha",
            "name": "Caipirinha",
            "price": "12.200"
          },
          {
            "id": "cocktails-caipirinha-de-frutos-rojos",
            "name": "Caipirinha de frutos rojos",
            "nameEn": "Red berry caipirinha",
            "price": "13.300"
          }
        ]
      }
    ]
  }
];

export const suggestedProductIds: string[] = [
  "cafeteria-mirador",
  "cafeteria-waikiki",
  "cafeteria-natural"
];
