import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  env: {
    BUILD_STATIC_EXPORT: "false",
  },
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  
};

export default nextConfig;
