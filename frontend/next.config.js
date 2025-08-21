/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 👈 enables static export (replaces next export)
  images: {
    unoptimized: true // 👈 required for GitHub Pages (no image optimization server)
  },
  basePath: '/aegis-ics', // 👈 project path for GitHub Pages
  assetPrefix: '/aegis-ics/', // 👈 ensures assets load correctly
}

module.exports = nextConfig
