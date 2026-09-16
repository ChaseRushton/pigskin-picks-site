/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pigskin-picks-site',
  images: {
    loader: 'custom',
    loaderFile: './lib/imagekit-loader.ts',
  },
};

module.exports = nextConfig;
