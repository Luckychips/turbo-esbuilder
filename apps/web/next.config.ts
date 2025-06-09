import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'turbo-build-ui': path.resolve(__dirname, '../../../packages/ui/dist'),
    };
    return config;
  },
};

export default nextConfig;
