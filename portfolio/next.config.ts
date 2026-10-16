import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Permite abrir o servidor de desenvolvimento pela rede local (ex.: 192.168.15.100:3000, celular).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*"],
  partialPrefetching: true,
  // Capas das prévias oficiais da Apple Music (player da hero).
  images: {
    remotePatterns: [{ protocol: "https", hostname: "is1-ssl.mzstatic.com" }],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
