import { BlogPost } from '../../lib/blog'

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="rounded-2xl
          border border-white/20
          shadow-2xl
          relative
          group
      "
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]
          top-0.5
          left-0.5
          backdrop-blur-2xl bg-white/5
          rounded-xl
          transition
         group-hover:bg-white/10
      "
      ></div>
      <div className="relative px-6 py-4">
        <p className="text-white/50 text-xs font-mono mb-1">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>{' '}
        <h2 className="text-2xl font-bold font-mono mb-2">{post.title}</h2>
        {post.excerpt && (
          <p className="text-white/70 tracking-wider font-light font-serif">
            {post.excerpt}
          </p>
        )}
      </div>
    </a>
  )
}
