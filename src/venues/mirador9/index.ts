import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// No logo yet: the name is set in type (see Logo.tsx). The photo is a
// placeholder from miradorwaikiki.com until there is one of the place.
export const venue: Venue = {
  id: "mirador9",
  restaurant: {
    name: "Mirador 9",
    city: "Mar del Plata",
    email: "info@miradorwaikiki.com.ar",
    phone: "223 633-3330",
    phoneHref: "tel:+542236333330",
    paymentMethods: ["Visa", "Mastercard", "American Express", "Mercado Pago"],
  },
  categories,
  suggestedProductIds,
  welcome: { es: "Bienvenidos a Mirador 9", en: "Welcome to Mirador 9" },
  tagline: { es: "Café, cocina y algo rico para cada momento.", en: "Coffee, food and something tasty for every moment." },
  description: "La carta de Mirador 9, Mar del Plata.",
  photo: {
    prefix: "/venues/mirador9/mar",
    widths: [640, 1024, 1440],
    position: "center",
    alt: {
      es: "El mar visto desde arriba, con surfistas entre las olas",
      en: "The sea seen from above, with surfers among the waves",
    },
  },
};
