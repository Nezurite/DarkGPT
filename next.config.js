/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // NETLIFY WORKS BETTER WITH THIS
  images: {
    unoptimized: true, // DISABLE IMAGE OPTIMIZATION (NETLIFY HATES IT)
  },
}

module.exports = nextConfig
