import { faCalendar, faFile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { getTranslations } from 'next-intl/server'
import { SimpleButton } from '../../../../components/SimpleButton'
import TableOfContents from '../../../../components/TableOfContents'
import { Link } from '../../../../i18n/navigation'
import { routing } from '../../../../i18n/routing'
import { getAllPostSlugs } from '../../../../lib/blog'
import BlogAuthor from '../BlogAuthor'
import getParsedPost from './get-parsed-post.function'

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

export default async function PostPage(props: PostPageProps) {
  const { locale, slug } = await props.params
  const { draft } = await props.searchParams
  const t = await getTranslations('BlogPost')

  const isDraft = draft === 'true' || draft === '1'

  const { post, headings, html } = await getParsedPost(locale, slug, isDraft)

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="flex-1 w-full max-w-[991px] mx-auto">
        <div className="w-full flex flex-col relative pt-20 px-6 mb-10 lg:px-0">
          {isDraft && (
            <div className="left-1/2 z-10 -translate-1/2 top-32 fixed flex items-center font-mono text-primary gap-2">
              <Link href="?" className="-ml-6">
                <SimpleButton icon={faLongArrowLeft}>
                  {t('publishedButton')}
                </SimpleButton>
              </Link>
            </div>
          )}

          <div className="font-mono flex gap-2 text-sm font-light mt-2 not-print:opacity-80">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon fixedWidth icon={faUser}></FontAwesomeIcon>
              <span className="text-xs">Lucas Pedroni</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon fixedWidth icon={faCalendar}></FontAwesomeIcon>
              <span className="text-xs">
                {new Date(post.date).toLocaleDateString(locale, {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            {!isDraft && (
              <Link
                href="?draft=true"
                className="flex items-center gap-1 hover:text-primary"
              >
                <FontAwesomeIcon fixedWidth icon={faFile}></FontAwesomeIcon>
                <span className="text-xs">{t('draftButton')}</span>
              </Link>
            )}
          </div>
          <h1 className="text-5xl font-serif font-light text-primary">
            {post.title}
          </h1>

          <div className="overflow-hidden w-full mt-10 flex gap-2 h-4">
            {Array.from({ length: 70 }).map((_, index) => (
              <div key={index} className="shrink-0 h-px w-2 bg-white/20"></div>
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
            className={classNames(`
            col-span-3
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
  )
}
