/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ja-JP'],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
}

module.exports = nextConfig
