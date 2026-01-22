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

  routing.locales.forEach(locale => {
    const slugs = getAllPostSlugs(locale)
    slugs.forEach(slug => {
      params.push({ locale, slug: slug + '.draft' })

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

  const isDraft = slug.endsWith('.draft')

  const post = getPostBySlug(locale, slug)

  const title = isDraft
    ? `${post.title} (Draft) | Lucas Pedroni`
    : `${post.title} | Lucas Pedroni`

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
      publishedTime: isDraft ? undefined : publishedTime,
      authors: ['Lucas Pedroni']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@pedronidev'
    },
    robots: isDraft ? 'noindex, nofollow' : 'index, follow'
  }
}

export default async function PostPage(props: PostPageProps) {
  const { locale, slug } = await props.params
  const t = await getTranslations({ locale: locale })

  const isDraft = slug.endsWith('.draft')
  const cleanSlug = isDraft ? slug.replace('.draft', '') : slug

  const { post, headings, html } = await getParsedPost(
    locale,
    cleanSlug,
    isDraft
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || `Read ${post.title} by Lucas Pedroni`,
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
      '@id': getUrl(`/${locale}/blog/${cleanSlug}`)
    },
    url: getUrl(`/${locale}/blog/${cleanSlug}`),
    inLanguage: locale,
    articleBody: post.content,
    ...(post.tags && { keywords: post.tags }),
    ...(post.category && { articleSection: post.category })
  }

  return (
    <>
      {!isDraft && jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 w-full max-w-[991px] mx-auto">
          <div className="w-full flex flex-col relative lg:pt-20 px-6 lg:px-0">
            {isDraft && (
              <div className="left-1/2 z-10 -translate-1/2 bottom-2 fixed flex items-center font-mono text-primary gap-2 lg:bottom-auto lg:top-32">
                <Link href={`/blog/${cleanSlug}`} className="-ml-6">
                  <SimpleButton icon={faLongArrowLeft}>
                    {t('BlogPost.publishedButton')}
                  </SimpleButton>
                </Link>
              </div>
            )}

            <div className="font-mono flex flex-wrap gap-x-4 text-sm font-light mb-3 not-print:opacity-80">
              <BlogMetadata icon={faUser}>Lucas Pedroni</BlogMetadata>
              <BlogMetadata icon={faCalendar}>
                {new Date(post.date).toLocaleDateString(locale, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </BlogMetadata>

              <BlogMetadata icon={faClock}>
                {post.readingTime} {t('Words.minutes')}
              </BlogMetadata>

              {isDraft ? (
                <Link
                  href={`/blog/${cleanSlug}`}
                  className="hover:text-primary"
                >
                  <BlogMetadata icon={faFile}>
                    {t('BlogPost.publishedButton')}
                  </BlogMetadata>
                </Link>
              ) : (
                <Link
                  href={`/blog/${cleanSlug}.draft`}
                  className="hover:text-primary"
                >
                  <BlogMetadata icon={faFile}>
                    {t('BlogPost.draftButton')}
                  </BlogMetadata>
                </Link>
              )}
            </div>

            <h1 className="text-5xl font-serif font-light text-primary">
              {post.title}
              {isDraft && ' (Draft)'}
            </h1>

            <div className="my-10">
              <Dashes></Dashes>
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
              prose-img:rounded-lg
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
          <div className="overflow-hidden w-full mt-20 flex items-center  gap-2 h-4">
            <Dashes></Dashes>
          </div>
          <div className="w-full px-4 lg:px-20 mx-auto pt-10 ">
            <BlogAuthor></BlogAuthor>
          </div>
        </div>
      </div>
    </>
  )
}
