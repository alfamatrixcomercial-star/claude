import type { Venue } from "@/types/menu";
import { categories, suggestedProductIds } from "./menu";

export const venue: Venue = {
  id: "waikiki",
  restaurant: {
    name: "Mirador Waikiki",
    city: "Mar del Plata",
    logo: "/venues/waikiki/logo.svg",
    website: "https://miradorwaikiki.com",
    email: "info@miradorwaikiki.com.ar",
    // Restaurant line, same as the WhatsApp buttons on miradorwaikiki.com.
    phone: "223 546-6065",
    phoneHref: "tel:+542235466065",
    whatsappUrl:
      "https://wa.me/5492235466065?text=" +
      encodeURIComponent("Hola! Quiero reservar una mesa en el restaurante de Mirador Waikiki."),
    paymentMethods: ["Visa", "Mastercard", "American Express", "Mercado Pago"],
  },
  categories,
  suggestedProductIds,
  welcome: { es: "Bienvenidos a Mirador Waikiki", en: "Welcome to Mirador Waikiki" },
  tagline: { es: "Sabores de mar, frente al mar.", en: "Flavors of the sea, facing the sea." },
  description: "La carta del restaurante Mirador Waikiki, Mar del Plata.",
  photo: {
    prefix: "/venues/waikiki/complejo",
    widths: [640, 1024, 1440],
    position: "60% center",
    alt: {
      es: "El complejo visto desde un dron: el restaurante sobre las rocas, la pileta, las carpas sobre la arena y el mar abierto",
      en: "The complex seen from a drone: the restaurant on the rocks, the pool, the beach tents on the sand and the open sea",
    },
  },
  // From 20:00 the menu leads with dinner: coffee, pastries and the weekday
  // lunch menu move to the end, and the welcome photo turns to a dinner dish.
  dinner: {
    from: 20,
    until: 6,
    late: ["cafe", "pasteleria", "ejecutivo"],
    photo: {
      prefix: "/venues/waikiki/cazuela",
      widths: [640, 1024],
      position: "65% center",
      alt: {
        es: "Una cazuela de mariscos con langostinos y vieiras, con copas de vino tinto en la mesa",
        en: "A seafood casserole with prawns and scallops, with glasses of red wine on the table",
      },
    },
  },
};
