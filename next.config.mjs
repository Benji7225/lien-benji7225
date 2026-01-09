/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
