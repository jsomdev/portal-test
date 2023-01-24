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
  ]
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
