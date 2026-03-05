import { MetadataRoute } from 'next'
import { getUrl } from '../helpers'
import { routing } from '../i18n/routing'
import { getSortedPosts } from '../lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = []

  routing.locales.forEach(locale => {
    staticPages.push({
      url: getUrl(`${locale}`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    })

    staticPages.push({
      url: getUrl(`${locale}/blog`),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    })
  })

  const blogPages: MetadataRoute.Sitemap = []
  const posts = await getSortedPosts()

  routing.locales.forEach(locale => {
    posts.forEach(post => {
      blogPages.push({
        url: getUrl(`${locale}/blog/${post.slug}`),
        lastModified: new Date(post.updatedAt || post.createdAt),
        changeFrequency: 'monthly',
        priority: 0.7
      })
    })
  })

  return [...staticPages, ...blogPages]
}