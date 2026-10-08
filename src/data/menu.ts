import type { Category, Restaurant } from "@/types/menu";

// Extracted from mimenulatech.com/miradorwaikiki (Firestore data, October 2026).
export const restaurant: Restaurant = {
  slug: "miradorwaikiki",
  logo: "/images/brand/isologo.svg",
  email: "info@miradorwaikiki.com.ar",
  phone: "2236333330",
  // Same number and message as the restaurant button on miradorwaikiki.com.
  whatsappUrl:
    "https://wa.me/5492235466065?text=" +
    encodeURIComponent("Hola! Quiero reservar una mesa en el restaurante de Mirador Waikiki."),
};

export const categories: Category[] = [
  {
    "name": "Menu Ejecutivo",
    "icon": "/images/categories/generico.png",
    "subcategories": [
      {
        "name": "Menu Ejecutivo",
        "products": [
          {
            "id": "menu-ejecutivo-lunes",
            "name": "Lunes",
            "price": "21.500",
            "description": "Plato principal: Merluza a la romana acompañada de puré de papas.\n\nBebida: Agua, Gaseosa, Lata de Stella, Lata de Stella 0.0% o Kombucha.\n\nCafé: Espresso, Americano o cortado."
          },
          {
            "id": "menu-ejecutivo-martes",
            "name": "Martes",
            "price": "21.500",
            "description": "Plato principal: Ensalada César de pollo\n\n\nBebida: Agua, Gaseosa, Lata de Stella, Lata de Stella 0.0% o Kombucha.\n\nCafé: Espresso, Americano o cortado."
          },
          {
            "id": "menu-ejecutivo-miercoles",
            "name": "Miércoles",
            "price": "21.500",
            "description": "Plato principal: Bondiola a la mostaza y miel acompañada de papas españolas.\n\n\nBebida: Agua, Gaseosa, Lata de Stella, Lata de Stella 0.0% o Kombucha.\n\nCafé: Espresso, Americano o cortado."
          },
          {
            "id": "menu-ejecutivo-jueves",
            "name": "Jueves",
            "price": "21.500",
            "description": "Plato principal: Risotto Cremoso de pollo y vegetales.\n\n\nBebida: Agua, Gaseosa, Lata de Stella, Lata de Stella 0.0% o Kombucha.\n\nCafé: Espresso, Americano o cortado."
          },
          {
            "id": "menu-ejecutivo-viernes",
            "name": "Viernes",
            "price": "21.500",
            "description": "Plato principal: Cintas Caseras con salsa mediterránea.\n\n\nBebida: Agua, Gaseosa, Lata de Stella, Lata de Stella 0.0% o Kombucha.\n\nCafé: Espresso, Americano o cortado."
          }
        ]
      }
    ]
  },
  {
    "name": "Cafetería",
    "icon": "/images/categories/cafeteria.png",
    "subcategories": [
      {
        "name": "Tradicional",
        "products": [
          {
            "id": "cafeteria-cafe-espresso",
            "name": "CAFÉ ESPRESSO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-cafe-espresso-c-crema",
            "name": "CAFÉ ESPRESSO C/ CREMA",
            "price": "6.000"
          },
          {
            "id": "cafeteria-cortado",
            "name": "CORTADO",
            "price": "5.100",
            "image": "https://mimenu.nyc3.digitaloceanspaces.com/Imagenes/Productos/ZaGkEnvttDfhH3oERWWNWStc5Ag2/lvvc57e0"
          },
          {
            "id": "cafeteria-americano",
            "name": "AMERICANO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-americano-c-crema",
            "name": "AMERICANO C/ CREMA",
            "price": "6.000"
          },
          {
            "id": "cafeteria-lagrima",
            "name": "LÁGRIMA",
            "price": "5.100"
          },
          {
            "id": "cafeteria-macchiato",
            "name": "MACCHIATO",
            "price": "5.100"
          },
          {
            "id": "cafeteria-cafe-con-leche",
            "name": "CAFE CON LECHE",
            "price": "7.200"
          },
          {
            "id": "cafeteria-latte",
            "name": "LATTE",
            "price": "7.200"
          },
          {
            "id": "cafeteria-ice-latte",
            "name": "ICE LATTE",
            "price": "7.200"
          },
          {
            "id": "cafeteria-cafe-doble-doble-cortado",
            "name": "CAFÉ DOBLE - DOBLE CORTADO",
            "price": "7.200"
          },
          {
            "id": "cafeteria-tazon-de-cafe-con-leche",
            "name": "TAZÓN DE CAFÉ CON LECHE",
            "price": "9.000"
          },
          {
            "id": "cafeteria-cafe-doble-c-crema",
            "name": "CAFÉ DOBLE C/ CREMA",
            "price": "7.400"
          },
          {
            "id": "cafeteria-te",
            "name": "TÉ",
            "price": "5.100"
          },
          {
            "id": "cafeteria-submarino-chocolatada",
            "name": "SUBMARINO - CHOCOLATADA",
            "price": "6.000"
          },
          {
            "id": "cafeteria-vaso-de-leche",
            "name": "VASO DE LECHE",
            "price": "5.100"
          },
          {
            "id": "cafeteria-descafeinado",
            "name": "DESCAFEINADO",
            "price": "5.500"
          }
        ]
      },
      {
        "name": "Especial",
        "products": [
          {
            "id": "cafeteria-caramel-latte",
            "name": "CARAMEL LATTE",
            "price": "9.100",
            "description": "Café, leche, crema y syrup de caramelo"
          },
          {
            "id": "cafeteria-pistaccio-latte",
            "name": "PISTACCIO LATTE",
            "price": "9.100",
            "description": "Café, leche, crema y syrup de pistaccio"
          },
          {
            "id": "cafeteria-capuccino",
            "name": "CAPUCCINO",
            "price": "9.100",
            "description": "Café, leche, canela, crema y chocolate rallado."
          },
          {
            "id": "cafeteria-ice-pistaccio-latte",
            "name": "ICE PISTACCIO LATTE",
            "price": "9.100",
            "description": "Café, leche, hielo y syrup de pistaccio."
          },
          {
            "id": "cafeteria-ice-carmel-latte",
            "name": "ICE CARMEL LATTE",
            "price": "9.100",
            "description": "Café, leche, hielo y syrup de caramelo."
          },
          {
            "id": "cafeteria-cafe-irlandes",
            "name": "CAFÉ IRLANDES",
            "price": "9.100",
            "description": "Café, whisky, crema, chocolate rallado."
          }
        ]
      },
      {
        "name": "Desayunos y Meriendas",
        "products": [
          {
            "id": "cafeteria-natural",
            "name": "NATURAL",
            "price": "18.700",
            "description": "Café c/ leche + yogur con granola + mix de frutas + exprimido de naranjas.",
            "suggested": true
          },
          {
            "id": "cafeteria-waikiki",
            "name": "WAIKIKI",
            "price": "20.600",
            "description": "Café c/ leche + budines (consultar sabores) + medio tostado de miga + exprimido.",
            "suggested": true
          },
          {
            "id": "cafeteria-clasico",
            "name": "CLÁSICO",
            "price": "20.600",
            "description": "Café c/ leche + 2 medialunas + tostadas con 2 dips a elección + exprimido.",
            "suggested": true
          },
          {
            "id": "cafeteria-mirador",
            "name": "MIRADOR",
            "price": "22.700",
            "description": "Café c/ leche + tostadas con huevos revueltos, palta, semillas y tomates cherry + exprimido de naranjas.",
            "suggested": true
          },
          {
            "id": "cafeteria-ala-wai",
            "name": "ALA WAI",
            "price": "21.400",
            "description": "Café c/ leche + tostón con hummus de remolacha, palta, semillas y tomates cherry + exprimido.",
            "suggested": true
          }
        ]
      }
    ]
  },
  {
    "name": "Pastelería",
    "icon": "/images/categories/big-cake.png",
    "subcategories": [
      {
        "name": "Tradicional",
        "products": [
          {
            "id": "pasteleria-scon-de-queso",
            "name": "SCON DE QUESO",
            "price": "6.800"
          },
          {
            "id": "pasteleria-alfajor-de-maicena",
            "name": "ALFAJOR DE MAICENA",
            "price": "6.600"
          },
          {
            "id": "pasteleria-alfajor-de-chocolate",
            "name": "ALFAJOR DE CHOCOLATE",
            "price": "6.600"
          },
          {
            "id": "pasteleria-alfajor-blanco-con-nueces",
            "name": "ALFAJOR BLANCO CON NUECES",
            "price": "6.600"
          },
          {
            "id": "pasteleria-alfajor-de-pistaccio",
            "name": "ALFAJOR DE PISTACCIO",
            "price": "8.800"
          },
          {
            "id": "pasteleria-porcion-de-budin-2-rebanadas",
            "name": "PORCIÓN DE BUDIN (2 REBANADAS)",
            "price": "7.900"
          },
          {
            "id": "pasteleria-medialuna-dulce-o-salada",
            "name": "MEDIALUNA DULCE O SALADA",
            "price": "2.100"
          },
          {
            "id": "pasteleria-medialuna-de-jamon-y-queso",
            "name": "MEDIALUNA DE JAMÓN Y QUESO",
            "price": "4.000"
          },
          {
            "id": "pasteleria-croissant-relleno",
            "name": "CROISSANT RELLENO",
            "price": "8.200",
            "description": "De dulce de leche, crema pastelera o jamón y queso."
          },
          {
            "id": "pasteleria-tostado-de-miga",
            "name": "TOSTADO DE MIGA",
            "price": "15.200"
          },
          {
            "id": "pasteleria-tostado-en-pan-arabe",
            "name": "TOSTADO EN PAN ÁRABE",
            "price": "15.200",
            "description": "De jamón y queso."
          },
          {
            "id": "pasteleria-tostadas-de-masa-madre-2-unidades",
            "name": "TOSTADAS DE MASA MADRE (2 UNIDADES)",
            "price": "4.100"
          },
          {
            "id": "pasteleria-porcion-de-mermelada-o-dulce-de-leche",
            "name": "PORCIÓN DE MERMELADA O DULCE DE LECHE",
            "price": "2.100"
          },
          {
            "id": "pasteleria-porcion-de-manteca-o-queso-crema",
            "name": "PORCIÓN DE MANTECA O QUESO CREMA",
            "price": "2.100"
          }
        ]
      },
      {
        "name": "sin tacc",
        "products": [
          {
            "id": "pasteleria-alfajor-de-maicena-2",
            "name": "ALFAJOR DE MAICENA",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-alfajor-de-harina-de-almendra",
            "name": "ALFAJOR DE HARINA DE ALMENDRA",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-brownie-c-nuez",
            "name": "BROWNIE C/ NUEZ",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-cookie-de-chocolate",
            "name": "COOKIE DE CHOCOLATE",
            "price": "5.500",
            "glutenFree": true
          },
          {
            "id": "pasteleria-torta-tarta",
            "name": "TORTA/TARTA",
            "price": "9.900",
            "description": "Consultar variedades."
          }
        ]
      },
      {
        "name": "tortas",
        "products": [
          {
            "id": "pasteleria-imperial-de-frutillas",
            "name": "IMPERIAL DE FRUTILLAS",
            "price": "9.900",
            "description": "Bizcochuelo de vainilla, dulce de leche, crema, merengue y jalea de frutillas."
          },
          {
            "id": "pasteleria-anos-locos",
            "name": "AÑOS LOCOS",
            "price": "9.900",
            "description": "Base de brownie con nuez, dulce de leche y merengue italiano."
          },
          {
            "id": "pasteleria-chocotorta",
            "name": "CHOCOTORTA",
            "price": "9.900",
            "description": "Preparada con galletitas Chocolinas.",
            "suggested": true
          },
          {
            "id": "pasteleria-torta-bruce",
            "name": "TORTA BRUCE",
            "price": "9.900",
            "description": "",
            "suggested": true
          },
          {
            "id": "pasteleria-red-velvet",
            "name": "RED VELVET",
            "price": "9.900",
            "description": "Bizcochuelo a base de cacao con frosting de queso crema."
          },
          {
            "id": "pasteleria-torta-blondie",
            "name": "TORTA BLONDIE",
            "price": "9.900",
            "description": "Brownie de chocolate blanco con crema chantilly y reducción de frutos rojos."
          }
        ]
      },
      {
        "name": "tartas",
        "products": [
          {
            "id": "pasteleria-lemon-pie",
            "name": "LEMON PIE",
            "price": "9.000",
            "suggested": true
          },
          {
            "id": "pasteleria-tarta-de-manzanas",
            "name": "TARTA DE MANZANAS",
            "price": "9.000"
          },
          {
            "id": "pasteleria-tarta-de-frutillas",
            "name": "TARTA DE FRUTILLAS",
            "price": "9.000",
            "description": "Con crema pastelera y decoración de crema."
          },
          {
            "id": "pasteleria-cheese-cake-de-arandanos",
            "name": "CHEESE CAKE DE ARÁNDANOS",
            "price": "9.600"
          },
          {
            "id": "pasteleria-cheese-cake-new-york",
            "name": "CHEESE CAKE NEW YORK",
            "price": "9.600",
            "description": "",
            "suggested": true
          },
          {
            "id": "pasteleria-cheese-cake-de-oreo",
            "name": "CHEESE CAKE DE OREO",
            "price": "9.600"
          }
        ]
      }
    ]
  },
  {
    "name": "Entradas",
    "icon": "/images/categories/pie.png",
    "subcategories": [
      {
        "name": "Entradas",
        "products": [
          {
            "id": "entradas-rabas-con-limon",
            "name": "RABAS CON LIMÓN",
            "price": "31.400",
            "description": "Preparadas con calamar fresco y acompañadas de limón y salsa alioli.",
            "suggested": true
          },
          {
            "id": "entradas-papas-a-la-crema",
            "name": "PAPAS A LA CREMA",
            "price": "20.300",
            "description": "Papas con crema, panceta y verdeo"
          },
          {
            "id": "entradas-tortilla-espanola",
            "name": "TORTILLA ESPAÑOLA",
            "price": "24.000",
            "description": "Preparada con papa, cebolla y chorizo colorado."
          },
          {
            "id": "entradas-langostinos-empanados",
            "name": "LANGOSTINOS EMPANADOS",
            "price": "34.300",
            "description": "Con guarnición de papas fritas."
          },
          {
            "id": "entradas-burrata",
            "name": "BURRATA",
            "price": "30.600",
            "description": "Sobre colchón de hojas verdes, tomates confitados, cherrys y nueces.",
            "suggested": true
          },
          {
            "id": "entradas-gambas-al-ajillo",
            "name": "GAMBAS AL AJILLO",
            "price": "31.900",
            "description": "Acompañadas de papas españolas."
          },
          {
            "id": "entradas-tabla-de-mar",
            "name": "TABLA DE MAR",
            "price": "36.200",
            "description": "Contiene fritura de rabas, calamarettes, langostinos, cornalitos y pesca blanca"
          },
          {
            "id": "entradas-pulpo-a-la-gallega",
            "name": "PULPO A LA GALLEGA",
            "price": "71.500",
            "description": "Acompañado de papas al natural con pimentón español dip de oliva"
          },
          {
            "id": "entradas-calamarettes-a-la-leonesa",
            "name": "CALAMARETTES A LA LEONESA",
            "price": "36.200",
            "description": "Acompañados de papas españolas."
          }
        ]
      },
      {
        "name": "Tapeos",
        "products": [
          {
            "id": "entradas-toston-veggie-vegetariano",
            "name": "TOSTÓN VEGGIE (VEGETARIANO)",
            "price": "15.800",
            "description": "Peras caramelizadas, queso azul, rúcula, nueces y miel."
          },
          {
            "id": "entradas-tapeo-de-quesos",
            "name": "TAPEO DE QUESOS",
            "price": "26.200",
            "description": "Queso pepato, queso reggianito, queso gouda, queso azul y queso pategras."
          },
          {
            "id": "entradas-tapeo-de-fiambres",
            "name": "TAPEO DE FIAMBRES",
            "price": "26.200",
            "description": "Jamón serrano, jamón cocido, lomo ahumado, bondiola, salamines y matambre casero."
          },
          {
            "id": "entradas-boquerones",
            "name": "BOQUERONES",
            "price": "17.200",
            "description": "Acompañados de manteca y pan de masa madre tostado."
          },
          {
            "id": "entradas-toston-rose",
            "name": "TOSTÓN ROSÉ",
            "price": "20.400",
            "description": "Queso philadelphia, salmón rosado, palta y brotes de rúcula."
          }
        ]
      }
    ]
  },
  {
    "name": "Platos",
    "icon": "/images/categories/platos.png",
    "subcategories": [
      {
        "name": "ensaladas",
        "products": [
          {
            "id": "platos-caesar-de-pollo",
            "name": "CAESAR DE POLLO",
            "price": "22.300",
            "description": "Rúcula, lechuga, croutons, queso parmesano, jamón crudo, cherrys, pechuga de pollo y aderezo caesar."
          },
          {
            "id": "platos-ensalada-fresca-de-mar",
            "name": "ENSALADA FRESCA DE MAR",
            "price": "29.000",
            "description": "Tomate, lechuga, cebolla, palta, morrón, langostinos y calamar al escabeche."
          },
          {
            "id": "platos-ensalada-capresse",
            "name": "ENSALADA CAPRESSE",
            "price": "24.500",
            "description": "Queso fresco en cubos,\ntomate, albahaca y olivas negras"
          },
          {
            "id": "platos-ensalada-salmon-rose",
            "name": "ENSALADA SALMÓN ROSE",
            "price": "27.000",
            "description": "Lechuga, rúcula, zanahoria, salmón rosado ahumado, queso crema, tomates cherry y alcaparras."
          },
          {
            "id": "platos-ensalada-mirador",
            "name": "ENSALADA MIRADOR",
            "price": "23.700",
            "description": "Lechuga, rúcula, tomates cherry, langostinos, queso crema y croutons."
          },
          {
            "id": "platos-ensalada-vegana",
            "name": "ENSALADA VEGANA",
            "price": "22.300",
            "description": "Zanahoria, choclo, lechuga, palta, tomate, quinoa y semillas."
          }
        ]
      },
      {
        "name": "arroces",
        "products": [
          {
            "id": "platos-paella-waikiki",
            "name": "PAELLA WAIKIKI",
            "price": "65.800",
            "description": "Para 2 personas. Arroz azafranado, pollo, calamares, mejillones, gambas y vieyras.",
            "suggested": true
          },
          {
            "id": "platos-caya-chilena",
            "name": "CAYA CHILENA",
            "price": "55.700",
            "description": "Para 2 personas. Arroz cremoso con champignones, jamón, pollo, lechuga y queso gratinado."
          },
          {
            "id": "platos-risotto-con-frutos-de-mar",
            "name": "RISOTTO CON FRUTOS DE MAR",
            "price": "43.900",
            "description": "Arroz cremoso con calamares, mejillones, gambas y vieyras."
          },
          {
            "id": "platos-risotto-con-pollo-y-vegetales",
            "name": "RISOTTO CON POLLO Y VEGETALES",
            "price": "33.700",
            "description": "Arroz cremoso con variedad de vegetales frescos y pollo"
          },
          {
            "id": "platos-risotto-vegetariano",
            "name": "RISOTTO VEGETARIANO",
            "price": "30.300",
            "description": "Arroz cremoso con variedad de vegetales frescos."
          }
        ]
      },
      {
        "name": "pescados",
        "products": [
          {
            "id": "platos-abadejo-grille",
            "name": "ABADEJO GRILLÉ",
            "price": "33.700",
            "description": "Acompañado de vegetales salteados y papas al natural."
          },
          {
            "id": "platos-abadejo-con-crema-de-limon",
            "name": "ABADEJO CON CREMA DE LIMÓN",
            "price": "36.000",
            "description": "Acompañado de puré duquesa."
          },
          {
            "id": "platos-trucha-a-la-manteca-con-alcaparras",
            "name": "TRUCHA A LA MANTECA CON ALCAPARRAS",
            "price": "40.200",
            "description": "Acompañada de vegetales."
          },
          {
            "id": "platos-salmon-rosado-grille",
            "name": "SALMÓN ROSADO GRILLÉ",
            "price": "41.800",
            "description": "Acompañado de vegetales salteados y papas al natural."
          },
          {
            "id": "platos-salmon-rosado-a-la-crema-de-camarones",
            "name": "SALMÓN ROSADO A LA CREMA DE CAMARONES",
            "price": "47.500",
            "description": "Acompañado de puré duquesa."
          },
          {
            "id": "platos-mero-grille",
            "name": "MERO GRILLÉ",
            "price": "34.700",
            "description": "Acompañado de vegetales y papas al natural."
          },
          {
            "id": "platos-mero-con-salsa-mar-del-plata",
            "name": "MERO CON SALSA MAR DEL PLATA",
            "price": "41.800",
            "description": "Acompañado de papas rústicas."
          },
          {
            "id": "platos-cazuela-de-mariscos",
            "name": "CAZUELA DE MARISCOS",
            "price": "59.800",
            "description": "Para 2 personas. Con mejillones, calamares, vieyras, gambas y langostinos."
          }
        ]
      },
      {
        "name": "Carnes",
        "products": [
          {
            "id": "platos-lomo-al-champignon",
            "name": "LOMO AL CHAMPIGNON",
            "price": "42.200",
            "description": "Acompañado de papas rústicas."
          },
          {
            "id": "platos-bife-de-chorizo-al-malbec",
            "name": "BIFE DE CHORIZO AL MALBEC",
            "price": "46.800",
            "description": "Acompañado de papas españolas.",
            "suggested": true
          },
          {
            "id": "platos-bondiola-a-la-mostaza-y-miel",
            "name": "BONDIOLA A LA MOSTAZA Y MIEL",
            "price": "38.700",
            "description": "Acompañado de puré de papas.",
            "suggested": true
          },
          {
            "id": "platos-bife-de-chorizo-a-la-pimienta",
            "name": "BIFE DE CHORIZO A LA PIMIENTA",
            "price": "42.400",
            "description": "Acompañado de papas a la crema."
          },
          {
            "id": "platos-ojo-de-bife-con-panceta-y-hongos",
            "name": "OJO DE BIFE CON PANCETA Y HONGOS",
            "price": "45.100",
            "description": "Acompañado de papines salteados.",
            "suggested": true
          },
          {
            "id": "platos-wok-de-lomo",
            "name": "WOK DE LOMO",
            "price": "33.500",
            "description": "Con arroz yamaní, vegetales frescos salteados y lomo."
          },
          {
            "id": "platos-wok-de-pollo",
            "name": "WOK DE POLLO",
            "price": "30.500",
            "description": "Con arroz yamaní, vegetales frescos salteados y pollo."
          }
        ]
      },
      {
        "name": "pastas",
        "products": [
          {
            "id": "platos-cintas-caseras-con-trucha-ahumada",
            "name": "CINTAS CASERAS CON TRUCHA AHUMADA",
            "price": "36.700",
            "description": "Acompañado de vegetales salteados."
          },
          {
            "id": "platos-ravioli-nero-a-la-crema-de-verdeo",
            "name": "RAVIOLI NERO A LA CREMA DE VERDEO",
            "price": "39.600",
            "description": "Raviolón de masa sepia relleno de salmón rosado y camarones.",
            "suggested": true
          },
          {
            "id": "platos-cintas-caseras-con-frutos-de-mar",
            "name": "CINTAS CASERAS CON FRUTOS DE MAR",
            "price": "42.500",
            "description": "Con mejillones, calamares y vieyras."
          },
          {
            "id": "platos-noquis-souffle-a-los-4-quesos",
            "name": "ÑOQUIS SOUFFLÉ A LOS 4 QUESOS",
            "price": "29.300",
            "description": "Salsa a base de crema y variedad de quesos."
          },
          {
            "id": "platos-sorrentinos-con-salsa-bolognesa",
            "name": "SORRENTINOS CON SALSA BOLOGNESA",
            "price": "35.000",
            "description": "Rellenos de jamón y mozzarella con salsa de tomate fresco."
          },
          {
            "id": "platos-sorrentinos-de-cabutia-asada-caramelizada-con-miel",
            "name": "SORRENTINOS DE CABUTIA ASADA CARAMELIZADA CON MIEL",
            "price": "35.000",
            "description": "Rellenos de cabutia y mozzarella con crema de champiñones y hongos de pino"
          }
        ]
      },
      {
        "name": "fast food",
        "products": [
          {
            "id": "platos-hamburguesa-vegetariana",
            "name": "HAMBURGUESA VEGETARIANA",
            "price": "25.600",
            "description": "Consultar sabores disponibles. Con rúcula, tomates confitados, hummus y papas fritas."
          },
          {
            "id": "platos-hamburguesa-clasica",
            "name": "HAMBURGUESA CLASICA",
            "price": "27.000",
            "description": "Contiene queso cheddar y panceta, acompañado de papas fritas."
          },
          {
            "id": "platos-hamburguesa-completa",
            "name": "HAMBURGUESA COMPLETA",
            "price": "27.000",
            "description": "Contiene jamón, queso cheddar, lechuga y tomate.\nAcompañada de papas fritas"
          },
          {
            "id": "platos-milanesa-de-peceto",
            "name": "MILANESA DE PECETO",
            "price": "25.900",
            "description": "Al plato, acompañada de papas fritas."
          },
          {
            "id": "platos-milanesa-de-peceto-napolitana",
            "name": "MILANESA DE PECETO NAPOLITANA",
            "price": "32.600",
            "description": "Al plato, acompañada de papas fritas."
          },
          {
            "id": "platos-suprema",
            "name": "SUPREMA",
            "price": "24.600",
            "description": "Al plato, acompañada de papas fritas."
          },
          {
            "id": "platos-suprema-napolitana",
            "name": "SUPREMA NAPOLITANA",
            "price": "29.400",
            "description": "Al plato, acompañada de papas fritas."
          }
        ]
      }
    ]
  },
  {
    "name": "Menú infantil",
    "icon": "/images/categories/children.png",
    "subcategories": [
      {
        "name": "Menu Infantil",
        "products": [
          {
            "id": "menu-infantil-chicken-fingers",
            "name": "CHICKEN FINGERS",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado."
          },
          {
            "id": "menu-infantil-milanesa-de-peceto",
            "name": "MILANESA DE PECETO",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado."
          },
          {
            "id": "menu-infantil-noquis-con-crema",
            "name": "ÑOQUIS CON CREMA",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado."
          },
          {
            "id": "menu-infantil-cheeseburguer",
            "name": "CHEESEBURGUER",
            "price": "25.700",
            "description": "Incluye 1 bebida y 1 paleta de helado."
          }
        ]
      }
    ]
  },
  {
    "name": "Postres",
    "icon": "/images/categories/postres.png",
    "subcategories": [
      {
        "name": "Postres",
        "products": [
          {
            "id": "postres-flan-mixto",
            "name": "FLAN MIXTO",
            "price": "7.600"
          },
          {
            "id": "postres-baileys-frozen",
            "name": "BAILEYS FROZEN",
            "price": "9.600"
          },
          {
            "id": "postres-baileys-pistaccio-frozen",
            "name": "BAILEYS PISTACCIO FROZEN",
            "price": "12.000"
          },
          {
            "id": "postres-don-pedro",
            "name": "DON PEDRO",
            "price": "9.200"
          },
          {
            "id": "postres-frutillas-con-crema",
            "name": "FRUTILLAS CON CREMA",
            "price": "9.600"
          },
          {
            "id": "postres-mousse-de-chocolate",
            "name": "MOUSSE DE CHOCOLATE",
            "price": "8.800"
          },
          {
            "id": "postres-tiramisu",
            "name": "TIRAMISÚ",
            "price": "7.600"
          },
          {
            "id": "postres-brownie-con-helado",
            "name": "BROWNIE CON HELADO",
            "price": "8.800"
          },
          {
            "id": "postres-ensalada-de-frutas-c-helado",
            "name": "ENSALADA DE FRUTAS C/ HELADO",
            "price": "9.700"
          },
          {
            "id": "postres-panqueque-de-manzanas-con-helado",
            "name": "PANQUEQUE DE MANZANAS CON HELADO",
            "price": "11.600"
          },
          {
            "id": "postres-panqueque-de-dulce-de-leche-c-helado",
            "name": "PANQUEQUE DE DULCE DE LECHE C/ HELADO",
            "price": "9.600"
          },
          {
            "id": "postres-marquise-de-chocolate-con-helado",
            "name": "MARQUISE DE CHOCOLATE CON HELADO",
            "price": "10.400"
          },
          {
            "id": "postres-queso-y-dulce",
            "name": "QUESO Y DULCE",
            "price": "12.900"
          },
          {
            "id": "postres-mousse-de-chocolate-blanco-con-frutos-rojos",
            "name": "MOUSSE DE CHOCOLATE BLANCO CON FRUTOS ROJOS",
            "price": "9.600"
          }
        ]
      }
    ]
  },
  {
    "name": "Bebidas",
    "icon": "https://mimenu.nyc3.digitaloceanspaces.com/Imagenes/Categorias/botella%20y%20vaso%20de%20whisky.png",
    "subcategories": [
      {
        "name": "Jugos y Licuados",
        "products": [
          {
            "id": "bebidas-exprimido-de-naranjas",
            "name": "EXPRIMIDO DE NARANJAS",
            "price": "8.300"
          },
          {
            "id": "bebidas-vaso-de-limonada",
            "name": "VASO DE LIMONADA",
            "price": "8.300"
          },
          {
            "id": "bebidas-licuados-frutales-con-leche-o-jugo-de-naranja",
            "name": "LICUADOS FRUTALES CON LECHE O JUGO DE NARANJA",
            "price": "8.300",
            "description": "Consultar frutas disponibles."
          }
        ]
      },
      {
        "name": "Sin alcohol",
        "products": [
          {
            "id": "bebidas-agua-sin-gas-eco-de-los-andes",
            "name": "AGUA SIN GAS ECO DE LOS ANDES",
            "price": "5.100"
          },
          {
            "id": "bebidas-agua-con-gas-eco-de-los-andes",
            "name": "AGUA CON GAS ECO DE LOS ANDES",
            "price": "5.100"
          },
          {
            "id": "bebidas-aguas-saborizadas-aquarius",
            "name": "AGUAS SABORIZADAS AQUARIUS",
            "price": "5.100"
          },
          {
            "id": "bebidas-gaseosas-linea-coca-cola",
            "name": "GASEOSAS LINEA COCA-COLA",
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
        "products": [
          {
            "id": "bebidas-clerico-de-vino-blanco",
            "name": "CLERICO DE VINO BLANCO",
            "price": "26.400"
          },
          {
            "id": "bebidas-clerico-de-espumante-extra-brut",
            "name": "CLERICO DE ESPUMANTE EXTRA BRUT",
            "price": "33.300"
          },
          {
            "id": "bebidas-jarra-de-limonada",
            "name": "JARRA DE LIMONADA",
            "price": "17.600",
            "description": "Con menta y jengibre"
          }
        ]
      },
      {
        "name": "Cervezas",
        "products": [
          {
            "id": "bebidas-stella-artois-473ml-lata",
            "name": "STELLA ARTOIS 473ML (LATA)",
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
            "price": "7.400"
          }
        ]
      },
      {
        "name": "Espumantes",
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
    "icon": "/images/categories/tragos.png",
    "subcategories": [
      {
        "name": "Cocktail’s",
        "products": [
          {
            "id": "cocktail-s-pisco-sour",
            "name": "PISCO SOUR",
            "price": "12.600",
            "description": "Pisco, jugo de lima, almíbar y clara de huevo.",
            "suggested": true
          },
          {
            "id": "cocktail-s-mai-tai",
            "name": "MAI TAI",
            "price": "12.600",
            "description": "Ron dorado, triple sec, jugo de lima, almíbar de almendras.",
            "suggested": true
          },
          {
            "id": "cocktail-s-malibu-pina-colada",
            "name": "MALIBU PIÑA COLADA",
            "price": "12.600",
            "description": "Malibú, jugo de ananá, limón y leche de coco.",
            "suggested": true
          },
          {
            "id": "cocktail-s-margarita-de-mango",
            "name": "MARGARITA DE MANGO",
            "price": "12.600",
            "description": "Tequila, limón, almíbar, triple sec y mango.",
            "suggested": true
          },
          {
            "id": "cocktail-s-espresso-martini",
            "name": "ESPRESSO MARTINI",
            "price": "12.600",
            "description": "Vodka, café, licor de café y almíbar.",
            "suggested": true
          },
          {
            "id": "cocktail-s-johnnie-collins",
            "name": "JOHNNIE COLLINS",
            "price": "16.300",
            "description": "Johnnie Walker Black Label, jugo de limón, almíbar, soda y gajo de limón."
          },
          {
            "id": "cocktail-s-johnnie-lemon",
            "name": "JOHNNIE & LEMON",
            "price": "14.200",
            "description": "Johnnie Walker Red Label, Sprite, jugo de lima y rodaja de limón."
          }
        ]
      },
      {
        "name": "Cocktail's",
        "products": [
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
            "description": "Campari, Jugo de naranja, rodaja de naranja."
          },
          {
            "id": "cocktail-s-campari-tonic",
            "name": "CAMPARI TONIC",
            "price": "9.900",
            "description": "Campari, Agua tónica, rodaja de limón."
          },
          {
            "id": "cocktail-s-cinzano-con-soda",
            "name": "CINZANO CON SODA",
            "price": "9.900",
            "description": "Cinzano Rosso, Soda, rodaja de limón."
          },
          {
            "id": "cocktail-s-cynar-pomelo",
            "name": "CYNAR POMELO",
            "price": "11.400",
            "description": "Cynar, gaseosa de pomelo, rodaja de pomelo."
          },
          {
            "id": "cocktail-s-aperol-spritz",
            "name": "APEROL SPRITZ",
            "price": "11.400",
            "description": "Aperol, Cinzano To-Spritz, splash de soda y rodaja de naranja."
          },
          {
            "id": "cocktail-s-cuba-libre",
            "name": "CUBA LIBRE",
            "price": "9.900",
            "description": "Ron dorado Bacardí y Coca-Cola"
          },
          {
            "id": "cocktail-s-negroni",
            "name": "NEGRONI",
            "price": "11.400",
            "description": "Gin, Campari y Vermouth Rosso"
          },
          {
            "id": "cocktail-s-mojito",
            "name": "MOJITO",
            "price": "11.400",
            "description": "Ron blanco Bacardí, lima, hojas de menta, y almibar."
          },
          {
            "id": "cocktail-s-gin-tonic-blu",
            "name": "GIN TONIC BLU",
            "price": "11.400",
            "description": "De limón, pepino o frutos rojos."
          },
          {
            "id": "cocktail-s-gin-tonic-tanqueray",
            "name": "GIN TONIC TANQUERAY",
            "price": "14.000",
            "description": "De limón o frutos rojos."
          },
          {
            "id": "cocktail-s-gin-tonic-bull-dog",
            "name": "GIN TONIC BULL DOG",
            "price": "15.900",
            "description": "De limón, pepino o frutos rojos."
          },
          {
            "id": "cocktail-s-caipirinha",
            "name": "CAIPIRINHA",
            "price": "12.800",
            "description": "Cachaça Belo Barreiro, lima, jugo de lima y azúcar"
          },
          {
            "id": "cocktail-s-caipirinha-de-frutos-rojos",
            "name": "CAIPIRINHA DE FRUTOS ROJOS",
            "price": "14.000",
            "description": "Cachaça Belo Barreiro, lima, jugo de lima, frutos rojos y azúcar"
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
            "price": "14.000"
          },
          {
            "id": "cocktail-s-gin-tonic-tanqueray-sevilla",
            "name": "GIN TONIC TANQUERAY SEVILLA",
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
    "icon": "/images/categories/bodega.png",
    "subcategories": [
      {
        "name": "Bodega Catena Zapata",
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
            "description": "Saint Felicien Malbec es un vino elegante y complejo, de color violeta oscuro y profundo, típico de los malbecs argentinos.\n\nA la nariz, intenso y concentrado, presenta aromas de moras maduras con notas ligeras de vainilla, tabaco y licor.\n\nEn boca, de impacto dulce y gran complejidad, es untuoso, con taninos suaves y redondos característicos del viñedo Angélica. De final largo y persistente, este vino muestra el gran potencial de los Malbec de Argentina."
          },
          {
            "id": "bodega-saint-felicien-cabernet-franc",
            "name": "SAINT FELICIEN CABERNET FRANC",
            "price": "33.700",
            "description": "Saint Felicien Cabernet Franc es un vino elegante y complejo, de color rojo rubí profundo.\n\nSus aromas recuerdan a frutas rojas, como cassis y grosellas, suavemente entrelazadas con pimienta negra y clavo de olor.\n\nEn boca es un vino complejo, de excelente estructura, con taninos suaves y aterciopelados."
          },
          {
            "id": "bodega-saint-felicien-chardonnay",
            "name": "SAINT FELICIEN CHARDONNAY",
            "price": "33.700",
            "description": "Saint Felicien refleja características propias de la zona que le da origen. Con días soleados y cálidos, y noches frescas, las uvas de Chardonnay adquieren una madurez plena y bien balanceada.\n\nSu color es amarillo intenso con reflejos verdosos claros.\n\nDe gran complejidad y elegancia, en nariz se presenta concentrado e intenso, con aromas de frutas tropicales maduras, peras, durazno blanco y vainilla.\n\nEn boca, de impacto dulce y untuoso , muy bien balanceado por la acidez, con sabores a frutas maduras y notas ligeras de vainilla y tostado, que le brindan un excelente y prolongado final."
          },
          {
            "id": "bodega-d-v-catena-cabernet-malbec",
            "name": "D.V CATENA CABERNET - MALBEC",
            "price": "40.700",
            "description": "DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas.\n\nA la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble.\n\nEn boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente."
          },
          {
            "id": "bodega-d-v-catena-chardonnay-chardonnay",
            "name": "D.V CATENA CHARDONNAY - CHARDONNAY",
            "price": "44.400",
            "description": "D.V. Catena Chardonnay - Chardonnay refleja características propias de las zonas que le dan origen. Con días soleados y cálidos, y noches frescas, las uvas Chardonnay adquieren una madurez plena y bien balanceada.\n\nSu color es amarillo oro con reflejos verdosos claros.\n\nDe gran complejidad y elegancia, en nariz se presenta concentrado e intenso: el viñedo La Pirámide aporta aromas de frutas tropicales maduras, ananá y durazno blanco. El viñedo Domingo confiere aromas cítricos y minerales.\n\nEn boca, de impacto dulce y untuoso, se perciben sabores a frutas maduras y una acidez vivaz que le brinda un fresco y prolongado final."
          },
          {
            "id": "bodega-d-v-catena-malbec-malbec",
            "name": "D.V CATENA MALBEC - MALBEC",
            "price": "74.100",
            "description": "Domingo Vicente Catena Malbec es un blend proveniente de uvas Malbec de dos diferentes viñedos.\n\nEl viñedo Angelica aporta aromas de mermeladas de ciruelas maduras y moras negras, suavidad y volumen al paladar.\n\nLa Pirámide entrega aromas de frutos negros de carozo y notas de especias como pimienta negra y clavo de olor.\n\nSe conjugan de manera excepcional para dar origen a este vino, intenso y concentrado, de final largo y muy persistente."
          },
          {
            "id": "bodega-malbec-argentino",
            "name": "MALBEC ARGENTINO",
            "price": "184.800",
            "description": "El Catena Zapata Malbec Argentino Catena presenta un profundo e intenso color violeta.\n\nSu aroma remite a cassis, moca, clavo de olor y marcadas notas terrosas.\n\nEn boca combina densidad y dulzor con atractivos dejos minerales, suaves notas de tabaco, frutos negros y especias. El final es largo y persistente, con sabores a frutos negros dulces."
          }
        ]
      },
      {
        "name": "Bodega Bressia",
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
            "description": "Color: Rojo granate límpido con reflejos violáceos.\n\nNariz: En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.\n\nBoca: En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada."
          },
          {
            "id": "bodega-rutini-antologia-xxxviii",
            "name": "RUTINI ANTOLOGÍA XXXVIII",
            "price": "135.300",
            "description": "Rojo muy intenso, con matiz azulado.\n\nRegala una nariz con acentos florales de violeta, combinados con otros -frutales- de cereza y guinda. También, surgen notas de menta y especias.\n\nEn boca, se aprecia la jugosidad de la uva Malbec (mayoritaria en el corte), así como también la riqueza de sus aromas. Redondo, de gran longitud, destaca su persistente y sedoso final."
          },
          {
            "id": "bodega-rutini-sauvignon-blanc",
            "name": "RUTINI SAUVIGNON BLANC",
            "price": "49.500",
            "description": "Amarillo dorado verdoso.\n\nIntenso, en sus fragantes notas cítricas (pomelo rosado) y características de la variedad (hierbas, pasto recién cortado, mineral), tiene también un equilibrado parangón azúcar-acidez en el que además tiene cabida un dejo a vainilla, recreado por el discreto tiempo de crianza en roble."
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
        "products": [
          {
            "id": "bodega-copa-del-dia",
            "name": "COPA DEL DÍA",
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
  "pasteleria-lemon-pie",
  "pasteleria-cheese-cake-new-york",
  "pasteleria-chocotorta",
  "pasteleria-torta-bruce",
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
