import { BlogPost, getPostBySlug } from '../../../lib/blog'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import { notFound } from 'next/navigation'
import BlogAuthor from '../BlogAuthor'

export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  let post: BlogPost
  let contentHtml = ''

  try {
    post = getPostBySlug(slug)

    // Process markdown content to HTML with GFM support
    const processedContent = await remark()
      .use(html)
      .use(gfm)
      .process(post.content)
    contentHtml = processedContent
      .toString()
      .replace(/user-content-user-content-/g, 'user-content-')
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return (
      <div className="">
        <div className="px-4 max-w-3xl w-full mx-auto flex flex-col relative pt-20 pb-10 mb-8 border-b border-white/20">
          <div className="flex gap-4">
            <p className="font-mono text-sm font-light mb-2">
              Lucas Pedroni,{' '}
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>{' '}
          <h1 className="text-3xl font-mono font-bold text-white">
            {post.title}
          </h1>
        </div>

        <div
          className="
          mx-auto
        max-w-3xl
        shadow-4xl
        relative
        group
        p-4
    "
        >
          <div
            className="relative max-w-none text-left prose prose-invert font-light font-serif tracking-wide mx-auto

            prose-headings:font-mono prose-headings:tracking-normal
            prose-a:font-light prose-a:text-[#dd7de3]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
        </div>

      <div className="max-w-5xl px-4 xl:px-20 border-t border-white/15  mx-auto pt-10 mt-10 -mb-10">
        <BlogAuthor></BlogAuthor>
      </div>
    </div>
  )
}
