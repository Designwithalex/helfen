import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Este proyecto es su propia raíz (hay otro lockfile más arriba en el árbol).
  turbopack: { root: __dirname },
};

export default nextConfig;
