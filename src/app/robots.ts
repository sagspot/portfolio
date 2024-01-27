import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404', '/500', '/api', '/api/*'],
    },
    sitemap: 'https://sagspot.co.ke/sitemap.xml',
  };
}
