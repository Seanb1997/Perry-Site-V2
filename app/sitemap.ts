import { MetadataRoute } from 'next'

// ─── SITEMAP ────────────────────────────────────────────────────────────────
// Auto-served at /sitemap.xml — submit this URL to Google Search Console.
// Update lastModified when content changes significantly.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://perryhowardpt.co.uk',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://perryhowardpt.co.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://perryhowardpt.co.uk/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
