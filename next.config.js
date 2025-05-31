/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // FOR FASTER API CALLS
  },
  images: {
    domains: ['replicate.com'], // IF YOU ADD AI-GENERATED IMGS LATER
  },
}

module.exports = nextConfig
