import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/atn",
  images: { unoptimized: true },
};

export default nextConfig;
