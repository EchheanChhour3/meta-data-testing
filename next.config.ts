import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV ==="production"
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
   
    ]
  },
  experimental:{
    serverActions: {
      allowedOrigins:[]
    }
  }
};

export default nextConfig;

// https://upload.wikimedia.org/wikipedia/commons/e/e8/2017_Mazda_CX-3_Sport_NAV_Automatic_2.0_Front.jpg