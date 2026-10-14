import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

// No logo yet: the name is set in type (see Logo.tsx). The photo is Hula
// Kai's pool, from mareventos.com.ar/salon-hula-kai.
export const venue: Venue = {
  id: "hulakai",
  restaurant: {
    name: "Hula Kai",
    city: "Mar del Plata",
    website: "https://miradorwaikiki.com/hula-kai",
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
    // Landscape, so it is cropped hard on a phone: wider files than the rest.
    prefix: "/venues/hulakai/pileta",
    widths: [1280, 2000],
    position: "40% center",
    alt: {
      es: "La pileta de Hula Kai, de agua turquesa, con sombrillas y camastros alrededor y el mar y la ciudad al fondo",
      en: "Hula Kai's turquoise pool, with umbrellas and loungers around it and the sea and the city beyond",
    },
  },
};
