import { MetadataRoute } from 'next'
import { getUrl } from '../helpers'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '*?draft=true', '*?draft=1']
      },
    ],
    sitemap: getUrl('sitemap.xml'),
    host: getUrl()
  }
}
