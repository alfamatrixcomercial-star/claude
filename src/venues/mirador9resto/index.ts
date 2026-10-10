import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// No logo yet: the name is set in type (see Logo.tsx). The photo is a
// placeholder from miradorwaikiki.com until there is one of the place.
export const venue: Venue = {
  id: "mirador9resto",
  restaurant: {
    name: "Mirador 9 Resto",
    city: "Mar del Plata",
    email: "info@mareventos.com.ar",
    phone: "223 633-3330",
    phoneHref: "tel:+542236333330",
    paymentMethods: ["Visa", "Mastercard", "American Express", "Mercado Pago"],
  },
  categories,
  suggestedProductIds,
  welcome: { es: "Bienvenidos a Mirador 9 Resto", en: "Welcome to Mirador 9 Resto" },
  tagline: { es: "Cocina de mar, carnes y pastas.", en: "Seafood, meats and pasta." },
  description: "La carta de Mirador 9 Resto, Mar del Plata.",
  photo: {
    prefix: "/venues/mirador9resto/tallarines",
    widths: [640, 1024, 1440],
    position: "center",
    alt: {
      es: "Tallarines con salsa de tomate, una copa de vino blanco y una botella de Nicasia sobre la mesa",
      en: "Tagliatelle with tomato sauce, a glass of white wine and a bottle of Nicasia on the table",
    },
  },
};
