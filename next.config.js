const withNextra = require('nextra')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = withNextra(nextConfig);
