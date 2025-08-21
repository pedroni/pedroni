import { BlogPost, getPostBySlug } from '../../../lib/blog'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { notFound } from 'next/navigation'
import BlogAuthor from '../BlogAuthor'
import TableOfContents from '../../../components/TableOfContents'

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
    // while extracting headings during the processing phase
    let extractedHeadings: Heading[] = [];

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(() => (tree) => {
        // Extract only top-level h2 headings from the processed AST
        if (tree && tree.children && Array.isArray(tree.children)) {
          extractedHeadings = tree.children
            .filter((node: any) =>
              node.type === 'element' &&
              node.tagName === 'h2' &&
              node.properties?.id
            )
            .map((node: any) => {
              // Extract text content from direct text children only
              let text = '';
              if (node.children && Array.isArray(node.children)) {
                node.children.forEach((child: any) => {
                  if (child.type === 'text' && child.value) {
                    text += child.value;
                  }
                });
              }

              text = text.trim();

              if (text) {
                return {
                  id: node.properties.id,
                  text,
                  level: 2
                };
              }
              return null;
            })
            .filter(Boolean) as Heading[];
        }
      })
      .use(rehypeStringify)
      .process(post.content);

    contentHtml = processedContent.toString();
    headings = extractedHeadings;
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
