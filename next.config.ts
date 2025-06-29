import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  //loading images from githubusercontent.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  //rewrite only works on client components
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: process.env.GITHUB_IMAGE_URL
          ? process.env.GITHUB_IMAGE_URL + "/images/:path*"
          : "/images/:path*",
      },
    ];
  },
};

export default nextConfig;
