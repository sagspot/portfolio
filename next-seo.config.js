const SITE_URL = 'https://sagspot.co.ke';
const title = 'Oliver Sagala Portfolio';
const description =
  'Self-taught web developer with passion to transform lives through tech. I believe tech should ultimately make life easier.';
const siteName = 'Sagspot';

const SEO = {
  title,
  description,
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en-US',
    site_name: siteName,
    url: SITE_URL,
    title,
    description,
    images: [
      {
        url: `${SITE_URL}/sagala.jpg`,
        width: 600,
        height: 600,
        alt: 'Oliver Sagala',
        type: 'image/jpeg',
      },
      {
        url: `${SITE_URL}/sagspot-logo.png`,
        width: 556,
        height: 152,
        alt: 'Sagspot Logo',
        type: 'image/jpeg',
      },
    ],
    site_name: siteName,
  },
  twitter: {
    handle: '@sagspot',
    site: '@sagspot',
    cardType: 'summary_large_image',
  },
};

export default SEO;
