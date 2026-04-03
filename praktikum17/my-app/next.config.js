/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.bing.net",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
      },
    ],
  },
};

module.exports = nextConfig;