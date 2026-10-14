import { existsSync } from "node:fs";
import type { NextConfig } from "next";

// One codebase, one static site per menu: `CARTA=hulakai next build`.
// Each menu lives in src/venues/<carta>/ and is served from
// miradorwaikiki.com/carta/<carta>/. `CARTA=gestion` builds the admin of all
// of them instead, served from miradorwaikiki.com/gestion/cartas/.
const carta = process.env.CARTA ?? "miradorwaikiki";
const gestion = carta === "gestion";
if (!gestion && !existsSync(`./src/venues/${carta}/index.ts`)) {
  throw new Error(`Unknown CARTA "${carta}": there is no src/venues/${carta}/index.ts.`);
}
const basePath = gestion ? "/gestion/cartas" : `/carta/${carta}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    resolveAlias: {
      // The admin wears the group's brand: Mirador Waikiki's.
      "@venue": `./src/venues/${gestion ? "miradorwaikiki" : carta}/index.ts`,
      "@inicio": `./src/inicio/${gestion ? "gestion" : "carta"}.tsx`,
    },
  },
};

export default nextConfig;
