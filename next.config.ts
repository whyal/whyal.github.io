import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Required for static export
    images: {
        unoptimized: true, // GitHub Pages doesn't support the Image Optimization API
    },
};

export default nextConfig;
