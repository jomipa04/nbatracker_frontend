import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // Example: Optimize Chakra UI imports
  },
  distDir: "build",
};

module.exports = nextConfig;
export default nextConfig;
