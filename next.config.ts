import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/ideas', destination: '/', permanent: true },
      { source: '/ideas/:path*', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
