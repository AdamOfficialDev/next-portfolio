/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [], // Add your image domains here if needed
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
