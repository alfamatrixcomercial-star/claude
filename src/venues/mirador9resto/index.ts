import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// The photo is Mirador 9's terrace over the sea.
export const venue: Venue = {
  id: "mirador9resto",
  restaurant: {
    name: "Mirador 9 Resto",
    city: "Mar del Plata",
    logo: "/venues/mirador9resto/logo.png",
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
  banda: "turquesa",
  photo: {
    prefix: "/venues/mirador9resto/terraza",
    widths: [640, 1024, 1350],
    position: "40% center",
    alt: {
      es: "La terraza de madera con mesas, sillas blancas y sombrillas, y el mar azul detrás de la baranda",
      en: "The wooden terrace with tables, white chairs and umbrellas, and the blue sea beyond the railing",
    },
  },
};
