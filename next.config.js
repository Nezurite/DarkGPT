/** @type {import('next').NextConfig} */
const nextConfig = {
  // NO NEED FOR EXPERIMENTAL SHIT IN PROD
  output: 'standalone', // BEST FOR VERCEL
  images: {
    domains: ['replicate.com'],
  },
}

module.exports = nextConfig
