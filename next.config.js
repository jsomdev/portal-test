/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
  productionBrowserSourceMaps: true,

  async redirects() {
    return process.env.Node_ENV === 'production'
      ? [
          {
            source: '/docs/i18n',
            destination: '/404',
            permanent: false
          },
          {
            source: '/dev/user',
            destination: '/404',
            permanent: true
          }
        ]
      : [];
  },
  async rewrites() {
    return [
      {
        /*added a very generic rewrite with no real use,
        as not having any rewrites breaks some of the expected i18n behavior.
        https://github.com/vercel/next.js/issues/25019 */
        source: '/home',
        destination: '/'
      },
      {
        source: '/account',
        destination: '/account/overview'
      },
      {
        source: '/frontend-api/:path*',
        destination: '/api/:path*'
      }
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['spray.widen.net']
  },
  i18n: {
    locales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(','),
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE
  }
};

module.exports = withBundleAnalyzer(nextConfig);
