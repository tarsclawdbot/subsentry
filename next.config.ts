import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure we can use the latest features
  experimental: {
    
  }
};

export default nextConfig;
