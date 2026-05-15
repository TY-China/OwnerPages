/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/OwnerPages',
  assetPrefix: '/OwnerPages',
}

export default nextConfig