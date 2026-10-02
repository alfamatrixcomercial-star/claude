import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://miradorwaikiki.com",
  output: "static",
  integrations: [
    sitemap({
      /* /giftcard existe pero no se publica, y /gestion es la herramienta
         interna de gift cards: ninguna va al sitemap y las dos llevan
         noindex. Sin esto Google las encuentra igual, aunque no haya un
         solo enlace apuntándoles. */
      filter: (pagina) => !pagina.includes("/giftcard") && !pagina.includes("/gestion"),
    }),
  ],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
