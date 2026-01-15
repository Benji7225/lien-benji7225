/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "fr.pinterest.com",
      },
      
    ],
  },
};

export default nextConfig;
