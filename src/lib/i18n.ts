import type { Lang } from "@/types/menu";

export const strings = {
  es: {
    welcome: "Bienvenidos a Mirador Waikiki",
    tagline: "Sabores de mar, frente al mar.",
    seeMenu: "Ver la carta",
    heroAlt:
      "El complejo visto desde un dron: el restaurante sobre las rocas, la pileta, las carpas sobre la arena y el mar abierto",
    home: "Inicio",
    title: "Nuestra carta",
    intro: "Elegí una sección para ver los platos.",
    allSections: "Todas las secciones",
    suggested: "Sugerencias de la casa",
    suggestedBadge: "Sugerido",
    glutenFree: "Sin TACC",
    favorites: "Tus favoritos",
    addFavorite: "Agregar a favoritos",
    removeFavorite: "Quitar de favoritos",
    payments: "Medios de pago",
    reserve: "Reservar por WhatsApp",
    backToSite: "Volver a miradorwaikiki.com",
    contact: "Contacto",
    language: "Idioma",
    openMenu: "Abrir menú",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    of: "de",
  },
  en: {
    welcome: "Welcome to Mirador Waikiki",
    tagline: "Flavors of the sea, facing the sea.",
    seeMenu: "See the menu",
    heroAlt:
      "The complex seen from a drone: the restaurant on the rocks, the pool, the beach tents on the sand and the open sea",
    home: "Home",
    title: "Our menu",
    intro: "Pick a section to see the dishes.",
    allSections: "All sections",
    suggested: "House recommendations",
    suggestedBadge: "Recommended",
    glutenFree: "Gluten free",
    favorites: "Your favorites",
    addFavorite: "Add to favorites",
    removeFavorite: "Remove from favorites",
    payments: "Payment methods",
    reserve: "Book on WhatsApp",
    backToSite: "Back to miradorwaikiki.com",
    contact: "Contact",
    language: "Language",
    openMenu: "Open menu",
    close: "Close",
    previous: "Previous",
    next: "Next",
    of: "of",
  },
} satisfies Record<Lang, Record<string, string>>;

export type Strings = (typeof strings)["es"];

/** The English text when browsing in English and one exists; Spanish otherwise. */
export function pick(lang: Lang, es: string, en?: string): string;
export function pick(lang: Lang, es: string | undefined, en?: string): string | undefined;
export function pick(lang: Lang, es: string | undefined, en?: string) {
  return lang === "en" && en ? en : es;
}
