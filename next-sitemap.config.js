const supportedLocales = process.env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(',');

const isDefaultLocalePath = path =>
  !supportedLocales.some(locale => path.startsWith(`/${locale}`));

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  generateRobotsTxt: true,
  exclude: [
    '/api',
    '/api/*',
    '*/account',
    '*/account/*',
    '*/cart',
    '*/cart/*',
    '*/compare',
    '*/compare/*',
    '*/dev/user',
    '*/docs',
    '*/docs/*',
    '*/employee-sign-in',
    '*/500',
    '*/404'
  ],
  transform: async (config, path) => {
    if (isDefaultLocalePath(path)) {
      return null;
    }
    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    };
  }
};

if (process.env.ROBOTS_DISALLOW_ALL === 'true') {
  config.robotsTxtOptions = {
    policies: [
      {
        userAgent: '*',
        disallow: ['/']
      }
    ]
  };
}

module.exports = config;
