/** @type {import('next').NextConfig} */
module.exports = {
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
        source: '/categorieen/:categorySlug',
        destination: '/categories/:categorySlug'
      },
      {
        source: '/producten/:productSlug',
        destination: '/products/:productSlug'
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
