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
      {
        protocol: "https",
        hostname: "dovetail-digital-corpsite.s3.ca-central-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "dovetail-digital-corpsite-dev.s3.ca-central-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
