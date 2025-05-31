/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  # NETLIFY NEEDS THIS
  images: {
    domains: ['replicate.com'],
  },
}

module.exports = nextConfig
