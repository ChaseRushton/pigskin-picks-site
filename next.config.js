/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pigskin-picks-site',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './lib/imagekit-loader.ts',
  },
};

module.exports = nextConfig;
