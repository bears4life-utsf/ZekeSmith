import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/writing/when-safe-stops-scaling",
        destination: "/writing/when-frameworks-become-the-problem",
        permanent: true,
      },
      {
        source: "/writing/the-art-of-explaining-tradeoffs",
        destination: "/writing/understanding-and-explaining-tradeoffs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
