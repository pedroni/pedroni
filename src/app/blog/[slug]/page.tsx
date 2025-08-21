import { BlogPost, getPostBySlug } from '../../../lib/blog'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { notFound } from 'next/navigation'
import BlogAuthor from '../BlogAuthor'
import TableOfContents from '../../../components/TableOfContents'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug'

interface Heading {
  id: string
  text: string
  level: number
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  let post: BlogPost
  let contentHtml = ''
  let headings: Heading[] = []

  try {
    post = getPostBySlug(slug)

    // Process markdown content to HTML with GFM support and autolink headings
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeStringify)
      .process(post.content);

    contentHtml = processedContent.toString()

    // Extract headings from markdown content using the same unified processor
    const headingProcessor = unified()
      .use(remarkParse)

    const headingTree = headingProcessor.parse(post.content)

    headings = headingTree.children
      .filter((node: any) => node.type === 'heading' && (node.depth === 2 || node.depth === 3))
      .map((node: any) => {
        // Extract text from all text nodes, including those nested in links, emphasis, etc.
        const extractText = (children: any[]): string => {
          return children.map((child: any) => {
            if (child.type === 'text') {
              return child.value
            } else if (child.children && Array.isArray(child.children)) {
              return extractText(child.children)
            }
            return ''
          }).join('').trim()
        }

        const text = extractText(node.children)

        const id = text.toLowerCase()
          .replace(/[^a-z0-9\s]+/g, '') // Remove special characters first
          .trim()
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens

        return {
          id,
          text,
          level: node.depth
        }
      })
      .filter((heading: Heading) => heading.text.length > 0) // Filter out empty headings
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="flex-1 max-w-4xl mx-auto">
        <div className="px-4 w-full flex flex-col relative pt-20 pb-10 mb-8 border-b border-white/20">
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
        w-full
        shadow-4xl
        relative
        group
        p-4
    "
        >
          <div
            className="relative max-w-none text-left prose prose-invert font-extralight font-serif tracking-wide mx-auto

            prose-headings:font-mono prose-headings:tracking-normal
            prose-a:font-extralight prose-a:text-[#dd7de3]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
        </div>

        <div className="w-full px-4 xl:px-20 border-t border-white/15 mx-auto pt-10 mt-10 -mb-10">
          <BlogAuthor></BlogAuthor>
        </div>
      </div>

      {/* Sidebar with Table of Contents */}
      <div className="hidden lg:block w-80 flex-shrink-0 sticky top-20 h-fit ml-8 mt-20">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 rounded-xl"></div>
          <div className="relative z-10">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  )
}
