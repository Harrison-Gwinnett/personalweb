import type { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/schema'
import { profileUpdated } from '@/lib/profile'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: profileUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: profileUpdated,
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ]
}
