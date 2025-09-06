import classNames from 'classnames'
import { BlogPost } from '../../../lib/blog'
import { getLocale, getTranslations } from 'next-intl/server'
import BlogMetadata from './[slug]/BlogMetadata'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { Link } from '../../../i18n/navigation'

export default async function BlogPostCard(props: {
  className?: string
  post: BlogPost
  small?: boolean
}) {
  const locale = await getLocale()
  const t = await getTranslations()

  return (
    <Link
      href={`/blog/${props.post.slug}`}
      className={classNames(
        `block
        rounded-tl-2xl
        rounded-br-2xl
          border border-white/20
          shadow-lg
          relative
          group
          transition

          hover:border-primary-light/50
          hover:shadow-primary/30
          hover:-translate-y-0.5

          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90

          `,
        props.className
      )}
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]
          top-0.5
          left-0.5
          backdrop-blur-2xl bg-white/5
          rounded-tl-xl
          rounded-br-xl
          transition
         group-hover:bg-white/10
      "
      ></div>
      <div className="relative px-6 py-4">
        <h2
          className={classNames(
            ' font-normal font-serif group-hover:text-primary',
            {
              'text-xl': props.small,
              'mb-2 text-3xl': !props.small
            }
          )}
        >
          {props.post.title}
        </h2>
        {!props.small && props.post.excerpt && (
          <p className="text-white/70 tracking-wider font-light font-sans leading-relaxed">
            {props.post.excerpt}
          </p>
        )}
        <div className="flex gap-4 opacity-75">
          <BlogMetadata icon={faCalendar}>
            {new Date(props.post.date).toLocaleDateString(locale, {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </BlogMetadata>

          <BlogMetadata icon={faClock}>
            {props.post.readingTime} {t('Words.minutes')}
          </BlogMetadata>
        </div>{' '}
      </div>
    </Link>
  )
}
