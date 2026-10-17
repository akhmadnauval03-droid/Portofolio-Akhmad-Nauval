import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Menaikkan batas ukuran upload dari 1 MB ke 5 MB
    },
  },
};

export default nextConfig;

