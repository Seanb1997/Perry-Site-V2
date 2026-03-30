import { MetadataRoute } from 'next'

// ─── ROBOTS ─────────────────────────────────────────────────────────────────
// Auto-served at /robots.txt
// Allows all crawlers and references the sitemap.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://perryhowardpt.co.uk/sitemap.xml',
  }
}
