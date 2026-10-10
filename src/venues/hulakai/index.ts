import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// No logo yet: the name is set in type (see Logo.tsx). The photo is a
// placeholder from miradorwaikiki.com until there is one of the place.
export const venue: Venue = {
  id: "hulakai",
  restaurant: {
    name: "Hula Kai",
    city: "Mar del Plata",
    website: "https://miradorwaikiki.com",
    email: "info@miradorwaikiki.com.ar",
    phone: "223 633-3330",
    phoneHref: "tel:+542236333330",
    paymentMethods: ["Visa", "Mastercard", "American Express", "Mercado Pago"],
  },
  categories,
  suggestedProductIds,
  welcome: { es: "Bienvenidos a Hula Kai", en: "Welcome to Hula Kai" },
  tagline: { es: "Algo rico, a pasos del mar.", en: "Something tasty, steps from the sea." },
  description: "La carta de Hula Kai, Mar del Plata.",
  photo: {
    prefix: "/venues/hulakai/carpas",
    widths: [640, 1024],
    position: "center",
    alt: {
      es: "Las carpas del balneario sobre la arena, vistas desde un dron",
      en: "The beach club tents on the sand, seen from a drone",
    },
  },
};
