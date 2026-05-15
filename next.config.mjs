/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 图片优化
  },
  basePath: '/OwnerPages',  // 替换成你的仓库名
  assetPrefix: '/OwnerPages',  // 替换成你的仓库名
}

export default nextConfig
