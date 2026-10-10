import type { NextConfig } from "next";
import basePaths from "./cartas.json";

// One codebase, one static site per menu: `CARTA=hulakai next build`.
// cartas.json lists each menu and the path it is served from on miradorwaikiki.com.

const carta = (process.env.CARTA ?? "waikiki") as keyof typeof basePaths;
if (!(carta in basePaths)) {
  throw new Error(`Unknown CARTA "${carta}". Use one of: ${Object.keys(basePaths).join(", ")}.`);
}
const basePath = basePaths[carta];

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
