/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './lib/imagekit-loader.ts',
  },
};

module.exports = nextConfig;
