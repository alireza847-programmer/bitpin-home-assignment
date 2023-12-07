/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.bitpin.org",
        port: "",
        pathname: "/media/market/currency/**",
      },
    ],
  },
};

module.exports = nextConfig;
