import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@quitpo/ui'],
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
};

export default nextConfig;
