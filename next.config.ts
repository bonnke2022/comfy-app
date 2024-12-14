import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/landing",
      },
    ];
  },
};

export default nextConfig;
