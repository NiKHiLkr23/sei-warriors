/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sei-warriors.s3.amazonaws.com",
      },
    ],
  },
};

const withVideos = require("next-videos");

module.exports = withVideos();
module.exports = nextConfig;
