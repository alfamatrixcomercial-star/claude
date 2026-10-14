import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// The photo is Mirador 9 from the air; landscape, so wider files than the rest.
export const venue: Venue = {
  id: "mirador9",
  restaurant: {
    name: "Mirador 9",
    city: "Mar del Plata",
    logo: "/venues/mirador9/logo.png",
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
  banda: "turquesa",
  photo: {
    prefix: "/venues/mirador9/aerea",
    widths: [1080, 1440],
    position: "35% center",
    alt: {
      es: "Mirador 9 desde el aire: el restaurante con su deck de madera sobre las rocas, la pileta, las carpas sobre la arena y el bosque detrás",
      en: "Mirador 9 from the air: the restaurant and its wooden deck above the rocks, the pool, the beach tents and the woods behind",
    },
  },
};
