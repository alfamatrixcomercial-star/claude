import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://miradorwaikiki.com",
  output: "static",
  integrations: [
    sitemap({
      /* /gestion es la herramienta interna de gift cards: no va al sitemap
         y lleva noindex. Sin esto Google la encuentra igual, aunque no haya
         un solo enlace apuntándole. */
      filter: (pagina) => !pagina.includes("/gestion"),
    }),
  ],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
