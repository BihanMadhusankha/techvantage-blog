import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // අනිවාර්යයෙන්ම මේ line එක තියෙන්න ඕනේ
  trailingSlash: true, // Fixes 403 errors on static hosts
  images: {
    unoptimized: true, // Static export එකේදී images වැඩ කරන්න මේක ඕනේ
  },
};

export default nextConfig;