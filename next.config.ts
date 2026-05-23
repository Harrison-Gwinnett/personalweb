import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/ideas', destination: '/', permanent: false },
      { source: '/ideas/:path*', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
