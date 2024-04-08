/**
 * @type {import('next').NextConfig}
 **/
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja-JP'],
    defaultLocale: 'ja-JP',
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  output: 'export',
}

module.exports = withBundleAnalyzer(nextConfig)
