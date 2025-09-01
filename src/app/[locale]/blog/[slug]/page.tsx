import {
  faCalendar,
  faClock,
  faFile,
  faUser
} from '@fortawesome/free-regular-svg-icons'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SimpleButton } from '../../../../components/SimpleButton'
import TableOfContents from '../../../../components/TableOfContents'
import { Link } from '../../../../i18n/navigation'
import { routing } from '../../../../i18n/routing'
import { getAllPostSlugs, getPostBySlug } from '../../../../lib/blog'
import BlogAuthor from '../BlogAuthor'
import getParsedPost from './get-parsed-post.function'
import { getUrl } from '../../../../helpers'
import BlogMetadata from './BlogMetadata'

type PostPageProps = {
  params: Promise<{ locale: string; slug: string }>
  searchParams: Promise<{ draft: string }>
}

export async function generateStaticParams() {
  const params: {
    locale: string
    slug: string
  }[] = []

  routing.locales.forEach(locale => {
    const slugs = getAllPostSlugs(locale)
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

  const post = getPostBySlug(locale, slug.split('.')[0])

  const title = `${post.title} | Lucas Pedroni`
  const description = post.excerpt || `Read ${post.title} by Lucas Pedroni`
  const url = getUrl(`/${locale}/blog/${slug}`)
  const publishedTime = new Date(post.date).toISOString()

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
      authors: ['Lucas Pedroni'],
      images: [
        {
          url: post.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@pedronidev',
      images: [post.image || '/og-image.jpg']
    },
    robots: 'index, follow'
  }
}

export default async function PostPage(props: PostPageProps) {
  const { locale, slug } = await props.params
  const { draft } = await props.searchParams
  const t = await getTranslations('BlogPost')

  const isDraft = draft === 'true' || draft === '1'

  const { post, headings, html, readingTime } = await getParsedPost(
    locale,
    slug,
    isDraft
  )

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || `Read ${post.title} by Lucas Pedroni`,
    image: getUrl(`${post.image || '/og-image.jpg'}`),
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
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.updatedAt || post.date).toISOString(),
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
          <div className="w-full flex flex-col relative pt-20 px-6 mb-10 lg:px-0">
            {isDraft && (
              <div className="left-1/2 z-10 -translate-1/2 bottom-2 fixed flex items-center font-mono text-primary gap-2 lg:bottom-auto lg:top-32">
                <Link href="?" className="-ml-6">
                  <SimpleButton icon={faLongArrowLeft}>
                    {t('publishedButton')}
                  </SimpleButton>
                </Link>
              </div>
            )}

            <div className="font-mono flex gap-4 text-sm font-light mt-2 not-print:opacity-80">
              <BlogMetadata icon={faUser}>Lucas Pedroni</BlogMetadata>
              <BlogMetadata icon={faCalendar}>
                {new Date(post.date).toLocaleDateString(locale, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </BlogMetadata>

              {readingTime && (
                <BlogMetadata icon={faClock}>{readingTime} minutes</BlogMetadata>
              )}

              {!isDraft && (
                <Link
                  href="?draft=true"
                  className="hover:text-primary"
                >
                  <BlogMetadata icon={faFile}>{t('draftButton')}</BlogMetadata>
                </Link>
              )}
            </div>

            <h1 className="text-5xl font-serif font-light text-primary">
              {post.title}
            </h1>

            <div className="overflow-hidden w-full mt-10 flex gap-2 h-4">
              {Array.from({ length: 70 }).map((_, index) => (
                <div
                  key={index}
                  className="shrink-0 h-px w-2 bg-white/20"
                ></div>
              ))}
            </div>
          </div>

          <div
            className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-10
          mx-auto
          w-full
          relative
        "
          >
            <div
              className="            col-span-3
"
            >
              <div
                className={classNames(`
              relative max-w-full w-full text-left prose prose-invert font-extralight tracking-wide mx-auto


              px-6
              prose-img:-mx-6
              prose-img:max-w-[calc(100%+48px)]!
              lg:px-0
              lg:prose-img:mx-0
              lg:prose-img:max-w-full
              lg:prose-img:w-full

              prose-headings:group
              prose-headings:relative
              prose-headings:border-b
              prose-headings:border-dashed
              prose-headings:border-white/10
              prose-headings:font-light
              prose-headings:pb-3
              [&_h1,h2,h3,h4,h5,h6_a]:no-underline
              prose-headings:text-primary
              prose-headings:font-mono prose-headings:tracking-normal

              prose-p:font-sans
              prose-p:text-lg
              prose-p:leading-relaxed

              [&_p_code]:text-lg

              prose-a:font-extralight prose-a:text-primary

              `)}
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>

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
          <div className="overflow-hidden w-full mt-20 flex gap-2 h-4">
            {Array.from({ length: 70 }).map((_, index) => (
              <div key={index} className="shrink-0 h-px w-2 bg-white/20"></div>
            ))}
          </div>
          <div className="w-full px-4 lg:px-20 mx-auto pt-10 ">
            <BlogAuthor></BlogAuthor>
          </div>
        </div>
      </div>
    </>
  )
}
