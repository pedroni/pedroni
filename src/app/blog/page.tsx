import BlogPostCard from './BlogPostCard'
import { getSortedPosts } from '../../lib/blog'

export default function BlogPage() {
  const posts = getSortedPosts()

  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="py-20 text-center">
        <h1 className='text-6xl text-primary font-mono uppercase tracking-widest'>Em breve...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog</h1>

      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
