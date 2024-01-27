import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sagspot.co.ke',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}