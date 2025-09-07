import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import BlogPostCard from './BlogPostCard'
import { BlogPost, getSortedPosts } from '../../../lib/blog'
import { getUrl } from '../../../helpers'
import Dashes from '../../../components/Dashes'

type PostsByYear = { year: number; posts: BlogPost[] }

type BlogPageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(
  props: BlogPageProps
): Promise<Metadata> {
  const { locale } = await props.params
  const t = await getTranslations('Blog')

  const title = `Blog | Lucas Pedroni`
  const description = t('metaDescription')

  return {
    title,
    description,
    keywords: t('keywords')
      .split(',')
      .map(keyword => keyword.trim()),
    authors: [{ name: 'Lucas Pedroni' }],
    creator: 'Lucas Pedroni',
    publisher: 'Lucas Pedroni',
    metadataBase: new URL(getUrl()),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: '/en/blog',
        pt: '/pt/blog'
      }
    },
    openGraph: {
      title,
      description,
      url: getUrl(`/${locale}/blog`),
      siteName: 'Lucas Pedroni',
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@pedronidev'
    },
    robots: 'index, follow'
  }
}

export default async function BlogPage(props: BlogPageProps) {
  const { locale } = await props.params
  const t = await getTranslations('Blog')

  const postsByYear: PostsByYear[] = getSortedPosts(locale).reduce(
    (acc: PostsByYear[], post: BlogPost) => {
      const year = new Date(post.date).getFullYear()
      const yearGroup = acc.find(group => group.year === year)
      if (yearGroup) {
        yearGroup.posts.push(post)
      } else {
        acc.push({ year, posts: [post] })
      }
      return acc
    },
    []
  )

  const firstPost = postsByYear[0]?.posts[0]

  // JSON-LD structured data for blog listing
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Lucas Pedroni Blog',
    description:
      'Programming and software development insights by Lucas Pedroni',
    url: getUrl(`${locale}/blog`),
    author: {
      '@type': 'Person',
      name: 'Lucas Pedroni',
      url: getUrl()
    },
    publisher: {
      '@type': 'Person',
      name: 'Lucas Pedroni',
      url: getUrl()
    },
    inLanguage: locale
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative min-h-[calc(100vh-600px)] py-20 px-4">
        <div className="relative max-w-4xl mx-auto">
          <header className="mb-14 text-center">
            <h1 className="sr-only">Blog</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </header>

          {firstPost && (
            <div className="pb-10 mb-10">
              <div>
                <BlogPostCard post={firstPost} />
              </div>
            </div>
          )}

          <div className="my-12">
            <Dashes></Dashes>
          </div>

          {postsByYear.map(({ year, posts }) => (
            <div
              key={year}
              className="pb-10 mb-10 not-last:border-b border-b-white/10"
            >
              <div className="mb-6">
                <h2 className="text-primary-light font-mono text-3xl">
                  {year}
                </h2>
              </div>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-1">
                {posts.map(post => (
                  <BlogPostCard key={post.slug} post={post} small={true} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
