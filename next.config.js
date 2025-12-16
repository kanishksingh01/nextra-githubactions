const nextra = require('nextra')
const withNextra = (nextra.default || nextra)({
  // Use the built-in docs theme. See https://nextra.site/docs/docs-theme for details.
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export is required for GitHub Pages. It generates pre-rendered HTML into the 'out' directory.
  output: 'export',
  images: {
    // Disable the built-in Image Optimization because GitHub Pages can only serve static files.
    unoptimized: true
  }
}

module.exports = withNextra(nextConfig)
