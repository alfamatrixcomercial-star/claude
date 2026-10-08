import type { NextConfig } from "next";

// Served as a static site under miradorwaikiki.com/carta.
const basePath = "/carta";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
