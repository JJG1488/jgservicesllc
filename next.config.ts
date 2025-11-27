import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Image optimization
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

  // Performance optimizations
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Production bundle optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'], // Remove console.log in production
      },
    },
  }),

  // Experimental optimizations for both dev and prod
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'firebase/firestore',
      'firebase/auth',
      'react-hook-form',
      '@mdx-js/react',
      'next-mdx-remote',
    ],
    // Reduce memory usage
    webpackMemoryOptimizations: true,
  },

  // Disable source maps in production for smaller bundles
  productionBrowserSourceMaps: false,

  // Custom webpack configuration for further optimization
  webpack: (config, { isServer }) => {
    // Optimize client-side bundles
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Split Framer Motion into its own chunk (it's heavy)
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },
            // Split Firebase into its own chunk
            firebase: {
              name: 'firebase',
              test: /[\\/]node_modules[\\/](@firebase|firebase)[\\/]/,
              priority: 35,
              reuseExistingChunk: true,
            },
            // Common React libraries
            react: {
              name: 'react',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },
            // All other node_modules
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name: 'lib',
              priority: 20,
              minChunks: 1,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Add custom headers for better caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig
