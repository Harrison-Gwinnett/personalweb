import type { MetadataRoute } from 'next'

const baseUrl = 'https://harrisongwinnett.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
