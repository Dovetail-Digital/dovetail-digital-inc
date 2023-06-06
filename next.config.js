/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dovetail-strapi-backend.herokuapp.com",
      },
    ],
  },
};

module.exports = nextConfig;
