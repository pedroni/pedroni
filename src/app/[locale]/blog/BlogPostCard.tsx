import classNames from 'classnames'
import { BlogPost } from '../../../lib/blog'
import { getLocale } from 'next-intl/server'

export default async function BlogPostCard(props: {
  className?: string
  post: BlogPost
  small?: boolean
}) {
  const locale = await getLocale();
  return (
    <a
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
        <p className="text-white/50 text-xs font-mono mb-1">
          {new Date(props.post.date).toLocaleDateString(locale, {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>{' '}
        <h2 className="text-2xl font-normal font-serif mb-2 group-hover:text-primary">{props.post.title}</h2>
        {!props.small && props.post.excerpt && (
          <p className="text-white/70 tracking-wider font-light font-sans leading-relaxed">
            {props.post.excerpt}
          </p>
        )}
      </div>
    </a>
  )
}
