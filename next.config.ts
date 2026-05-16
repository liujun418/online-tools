import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*\\.(woff2?|ttf|otf|eot))",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // Trailing slash normalization: remove trailing slash
      { source: "/:path+/", destination: "/:path+", permanent: true },
    ];
  },

  // Image optimization domains
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.giphy.com" },
      { protocol: "https", hostname: "**.bing.com" },
      { protocol: "https", hostname: "**.nasa.gov" },
      { protocol: "https", hostname: "**.openstreetmap.org" },
    ],
  },
};

export default nextConfig;
