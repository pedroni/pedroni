import SimpleBox from '../../components/SimpleBox'
import { BlogPost } from '../../lib/blog'

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <a href={`/blog/${post.slug}`}>
      <SimpleBox className="transition hover:bg-white/5">
        <p className="text-white/50 text-xs font-mono mb-1">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </p>{' '}
        <h2 className="text-2xl font-bold font-mono mb-2">{post.title}</h2>
        {post.excerpt && <p className="text-white/70 tracking-wider font-light font-serif">{post.excerpt}</p>}
      </SimpleBox>
    </a>
  )
}
