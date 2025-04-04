import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // Example: Optimize Chakra UI imports
  },
};

export default nextConfig;
