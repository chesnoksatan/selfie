import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Без явного root Turbopack может принять за корень соседний чекаут
  // с собственным package-lock.json (git worktree)
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
