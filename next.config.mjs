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

export default nextConfig;
