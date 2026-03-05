import {
  faCalendar,
  faClock,
  faUser
} from '@fortawesome/free-regular-svg-icons'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TableOfContents from '../../../../components/TableOfContents'
import { routing } from '../../../../i18n/routing'
import { getAllPostSlugs, getPostBySlug } from '../../../../lib/blog'
import BlogAuthor from '../BlogAuthor'
import { getUrl } from '../../../../helpers'
import BlogMetadata from './BlogMetadata'
import Dashes from '../../../../components/Dashes'

export const dynamic = 'force-static'

type PostPageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const params: {
    locale: string
    slug: string
  }[] = []

  const slugs = getAllPostSlugs()
  routing.locales.forEach(locale => {
    slugs.forEach(slug => {
      params.push({
        locale,
        slug
      })
    })
  })

  return params
}

export async function generateMetadata(
  props: PostPageProps
): Promise<Metadata> {
  const { locale, slug } = await props.params

  const post = await getPostBySlug(slug)

  const title = `${post.title} | Lucas Pedroni`
  const description = post.summary || `Read ${post.title} by Lucas Pedroni`
  const url = getUrl(`/${locale}/blog/${slug}`)
  const publishedTime = new Date(post.createdAt).toISOString()

  return {
    title,
    description,
    keywords: post.keywords || [
      'programming',
      'software development',
      'Lucas Pedroni',
      'tech blog'
    ],
    authors: [{ name: 'Lucas Pedroni' }],
    creator: 'Lucas Pedroni',
    publisher: 'Lucas Pedroni',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(getUrl()),
    alternates: {
      canonical: url,
      languages: {
        en: `/en/blog/${slug}`,
        pt: `/pt/blog/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Lucas Pedroni',
      locale,
      type: 'article',
      publishedTime,
      authors: ['Lucas Pedroni']
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

export default async function PostPage(props: PostPageProps) {
  const { locale, slug } = await props.params
  const t = await getTranslations({ locale: locale })

  const { Component, headings, ...post } = await getPostBySlug(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary || `Read ${post.title} by Lucas Pedroni`,
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
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt || post.createdAt).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getUrl(`/${locale}/blog/${slug}`)
    },
    url: getUrl(`/${locale}/blog/${slug}`),
    inLanguage: locale,
    articleBody: post.content,
    ...(post.tags && { keywords: post.tags }),
    ...(post.category && { articleSection: post.category })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 w-full max-w-[991px] mx-auto">
          <div className="w-full flex flex-col relative lg:pt-20 px-6 lg:px-0">
            {post.thumbnail && (
              <div className="mb-10 flex justify-center">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-auto h-auto max-h-96 object-contain rounded-lg"
                />
              </div>
            )}
            <div className="font-mono flex flex-wrap gap-x-4 text-sm font-light mb-3 not-print:opacity-80">
              <BlogMetadata icon={faUser}>Lucas Pedroni</BlogMetadata>
              <BlogMetadata icon={faCalendar}>
                {new Date(post.createdAt).toLocaleDateString(locale, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </BlogMetadata>

              <BlogMetadata icon={faClock}>
                {post.readingTime} {t('Words.minutes')}
              </BlogMetadata>
            </div>

            <h1 className="text-5xl font-serif font-light text-primary">
              {post.title}
            </h1>

            <div className="my-10">
              <Dashes></Dashes>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mx-auto w-full relative">
            <div className="col-span-3">
              <div className="relative max-w-full w-full text-left prose prose-invert tracking-wide mx-auto px-6 prose-img:rounded-lg prose-img:-mx-6 prose-img:max-w-[calc(100%+48px)]! lg:px-0 lg:prose-img:mx-0 lg:prose-img:max-w-full lg:prose-img:w-full prose-headings:group prose-headings:relative prose-headings:border-b prose-headings:border-dashed prose-headings:border-white/10 prose-headings:font-light prose-headings:pb-3 [&_h1,h2,h3,h4,h5,h6_a]:no-underline prose-headings:text-primary prose-headings:font-mono prose-headings:tracking-normal prose-p:font-sans prose-p:text-lg prose-p:leading-relaxed [&_p_code]:text-base [&_p_code]:font-normal  prose-a:text-primary prose-blockquote:border-l-primary/80 prose-blockquote:bg-white/10 prose-blockquote:rounded prose-blockquote:py-3">
                <Component />
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/5 text-white/30 rounded-md font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block col-span-1">
              <TableOfContents className="sticky top-10" headings={headings} />
            </div>
          </div>
          <div className="overflow-hidden w-full mt-20 flex items-center gap-2 h-4">
            <Dashes></Dashes>
          </div>
          <div className="w-full px-4 lg:px-20 mx-auto pt-10">
            <BlogAuthor />
          </div>
        </div>
      </div>
    </>
  )
}