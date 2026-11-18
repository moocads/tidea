import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/productx5", destination: "/tc-100", statusCode: 301 },
      { source: "/cordless-stick-vaccum", destination: "/vacuums", statusCode: 301 },
      { source: "/cordless-stick-vaccum-1", destination: "/vacuums", statusCode: 301 },
      { source: "/home-1-1", destination: "/", statusCode: 301 },
      { source: "/aboutus-1", destination: "/aboutus", statusCode: 301 },
      { source: "/terms-and-conditions-1", destination: "/terms-and-conditions", statusCode: 301 },
      { source: "/product-registration-form-1", destination: "/support-tc-100", statusCode: 301 },
      { source: "/product-registration-form-2", destination: "/support-tc-100", statusCode: 301 },
      { source: "/customer-care", destination: "/support-tc-100", statusCode: 301 },
      { source: "/customer-care-1", destination: "/support-tc-100", statusCode: 301 },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
