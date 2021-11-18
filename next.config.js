const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();
/** @type {import('next').NextConfig} */
module.exports = withNextPluginPreval({
  async redirects() {
    return process.env.Node_ENV === 'production'
      ? [
          {
            source: '/docs/i18n',
            destination: '/404',
            permanent: false,
          },
        ]
      : [];
  },
  reactStrictMode: true,
  i18n: {
    locales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(','),
    defaultLocale: 'en',
  },
});
