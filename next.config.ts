import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jgservicesllc.com',
      },
    ],
  },
  // Development optimizations
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      // Optimize package imports for faster dev builds
      optimizePackageImports: ['react-hook-form', '@mdx-js/react', 'next-mdx-remote', 'framer-motion'],
    },
  }),
  // Reduce bundle analysis overhead in development
  productionBrowserSourceMaps: false,
}

export default nextConfig
