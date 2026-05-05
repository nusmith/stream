import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/discover", destination: "/", permanent: true },
      { source: "/social", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
