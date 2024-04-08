/**
 * @type {import('next').NextConfig}
 **/
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  output: 'export',
}

module.exports = withBundleAnalyzer(nextConfig)
