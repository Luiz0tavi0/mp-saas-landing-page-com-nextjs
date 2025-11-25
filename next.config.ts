import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    // Desabilita a geração automática de validadores problemáticos
    typedRoutes: false,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}