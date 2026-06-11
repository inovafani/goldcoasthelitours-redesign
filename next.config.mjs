/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats; Next/Vercel generates these on the fly.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
