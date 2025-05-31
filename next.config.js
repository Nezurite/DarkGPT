/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['replicate.com'],
  },
}

module.exports = nextConfig
