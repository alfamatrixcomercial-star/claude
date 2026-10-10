import type { Lang } from "@/types/menu";

export const strings = {
  es: {
    seeMenu: "Ver la carta",
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
    backTo: "Volver a",
    contact: "Contacto",
    language: "Idioma",
    openMenu: "Abrir menú",
    close: "Cerrar",
    previous: "Anterior",
    next: "Siguiente",
    of: "de",
  },
  en: {
    seeMenu: "See the menu",
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
    backTo: "Back to",
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
