import { existsSync } from "node:fs";
import type { NextConfig } from "next";

// One codebase, one static site per menu: `CARTA=hulakai next build`.
// Each menu lives in src/venues/<carta>/ and is served from
// miradorwaikiki.com/carta/<carta>/.
const carta = process.env.CARTA ?? "miradorwaikiki";
if (!existsSync(`./src/venues/${carta}/index.ts`)) {
  throw new Error(`Unknown CARTA "${carta}": there is no src/venues/${carta}/index.ts.`);
}
const basePath = `/carta/${carta}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    resolveAlias: { "@venue": `./src/venues/${carta}/index.ts` },
  },
};

export default nextConfig;
