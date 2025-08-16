import { BlogPost, getPostBySlug } from '../../../lib/blog'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'

export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params;
  let post: BlogPost;
  let contentHtml = ''

  try {
    post = getPostBySlug(slug)

    // Process markdown content to HTML
    const processedContent = await remark().use(html).process(post.content)
    contentHtml = processedContent.toString()
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return (
    <div className='bg-gradient-to-b to-transparent from-black'>
        <div className="text-center py-20 ">
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          <p className="mb-6">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
        <div className="w-full  pb-20">
          <div
            className="w-full my-20 flex-grow text-left prose prose-invert mx-auto lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
      </div>
    </div>
  )
}
