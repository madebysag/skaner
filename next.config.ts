import type { NextConfig } from "next";
// const path = require("path")

const nextConfig: NextConfig = {
  /* config options here */
  turbopack : {
    root: __dirname
  },
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/skaner"
};

export default nextConfig;
