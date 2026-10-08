import type { Lang } from "@/types/menu";

// UI strings from the original bundle's es/en locale files.
export const strings = {
  es: {
    skip: "Omitir",
    welcome: "BIENVENIDO",
    chose: "ELEGÍ",
    find: "Encuentra en cada sección del menú lo que quieres pedir",
    suggested: "SUGERIDOS",
    info: "En la esquina superior derecha puedes consultar nuestras ofertas destacadas",
    cards: "Aceptamos las siguientes tarjetas",
    home: "HOME",
    spanish: "Español",
    english: "Inglés",
  },
  en: {
    skip: "Skip",
    welcome: "WELCOME",
    chose: "I CHOSE",
    find: "Find in each section of the menu what you want to order",
    suggested: "SUGGESTED",
    info: "In the upper right corner you can check our featured offers",
    cards: "We accept the following cards",
    home: "HOME",
    spanish: "Spanish",
    english: "English",
  },
} satisfies Record<Lang, Record<string, string>>;

export type Strings = (typeof strings)["es"];
