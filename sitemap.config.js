const SITE_URL = 'https://sagspot.co.ke';

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: ['/404', '/500', '/api', '/api/*'] },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/404', '/500', '/api', '/api/*'],
};
