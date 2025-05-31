/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { domains: ['replicate.com'] },
  experimental: {
    serverActions: true,
    optimizePackageImports: ['replicate']  # SPEED BOOST
  }
}
module.exports = nextConfig
