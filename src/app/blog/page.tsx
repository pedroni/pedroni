import BlogPostCard from './BlogPostCard'
import { BlogPost, getSortedPosts } from '../../lib/blog'

type PostsByYear = { year: number; posts: BlogPost[] }
export default function BlogPage() {
  const postsByYear: PostsByYear[] = getSortedPosts().reduce(
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

  if (process.env.NODE_ENV === 'production' || !postsByYear.length) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-6xl text-primary font-mono tracking-widest">
          No posts yet
        </h1>
      </div>
    )
  }

  const firstPost = postsByYear[0].posts.shift()

  return (
    <div className="relative min-h-[calc(100vh-600px)] py-20 px-4">
      <div className="relative max-w-4xl mx-auto">
        {firstPost && (
          <div className="pb-10 mb-10 not-last:border-b border-b-white/10">
            <div className="mb-6">
              <h2 className="text-primary-light font-mono text-3xl">
                Latest Post
              </h2>
            </div>
            <div>

              <BlogPostCard post={firstPost} />
            </div>
          </div>
        )}

        {postsByYear.map(({ year, posts }) => (
          <div
            key={year}
            className="pb-10 mb-10 not-last:border-b border-b-white/10"
          >
            <div className="mb-6">
              <h2 className="text-primary-light font-mono text-3xl">{year}</h2>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {posts.map(post => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
