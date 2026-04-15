import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6b62-2405-201-2036-4845-ad87-fe59-2ed9-b189.ngrok-free.app/",
      },
    ],
  },
};

export default nextConfig;
