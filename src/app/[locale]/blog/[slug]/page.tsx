import classNames from 'classnames'
import { h } from 'hastscript'
import { notFound } from 'next/navigation'
import rehypeAddClasses from 'rehype-add-classes'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypeShiki from '@shikijs/rehype'
import TableOfContents from '../../../../components/TableOfContents'
import { BlogPost, getAllPostSlugs, getPostBySlug } from '../../../../lib/blog'
import BlogAuthor from '../BlogAuthor'

interface Heading {
  id: string
  text: string
  level: number
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }))
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
    let extractedHeadings: Heading[] = []

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeShiki, {
        themes: {
          dark: 'gruvbox-dark-hard',
          light: 'gruvbox-dark-hard',
        },
      })
      .use(rehypeSlug)
      .use(rehypeAddClasses, {
        'h1, h2, h3, h4, h5, h6': 'group pl-4 -ml-4'
      })
      .use(rehypeAutolinkHeadings, {
        content() {
          return [
            h(
              'div',
              {
                class:
                  'no-underline rounded-lg py-1 border bg-white/10 border-white/20 absolute right-full top-0 text-base px-2.5 transition opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              },
              '🔗'
            )
          ]
        }
      })
      .use(() => tree => {
        // Extract only top-level h2 headings from the processed AST
        if (tree && tree.children && Array.isArray(tree.children)) {
          extractedHeadings = tree.children
            .filter(
              (node: any) =>
                node.type === 'element' &&
                node.tagName === 'h2' &&
                node.properties?.id
            )
            .map((node: any): Heading | null => {
              // Extract text content from direct text children only
              let text = ''
              if (node.children && Array.isArray(node.children)) {
                node.children.forEach((child: any) => {
                  if (child.type === 'text' && child.value) {
                    text += child.value
                  }
                })
              }

              text = text.trim()

              if (text) {
                return {
                  id: node.properties.id,
                  text,
                  level: 2
                }
              }
              return null
            })
            .filter(Boolean)
        }
      })
      .use(rehypeStringify)
      .process(post.content)

    contentHtml = processedContent.toString()
    headings = extractedHeadings
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="flex-1 max-w-[991px] mx-auto">
        <div className="w-full flex flex-col relative pt-20 mb-8">
          <div className="flex gap-4">
            <p className="font-mono text-sm font-light mb-2 not-print:opacity-60">
              Lucas Pedroni,{' '}
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
          <h1 className="text-5xl font-mono font-light text-primary">
            {post.title}
          </h1>
          <div className="overflow-hidden w-full mt-4 flex gap-2 h-4">
            {Array.from({ length: 70 }).map((_, index) => (
              <div key={index} className="shrink-0 h-px w-2 bg-white/20"></div>
            ))}
          </div>
        </div>

        <div
          className="
          grid
          xl:grid-cols-4
          gap-10
          mx-auto
          w-full
          relative
        "
        >
          <div
            className={classNames(`
            col-span-3
            relative max-w-none text-left prose prose-invert font-extralight tracking-wide mx-auto


            px-6
            prose-img:-mx-6
            prose-img:max-w-[calc(100%+48px)]!
            lg:px-0
            lg:prose-img:mx-0
            lg:prose-img:max-w-full
            lg:prose-img:w-full

            prose-headings:group
            prose-headings:relative
            prose-headings:border-b
            prose-headings:border-dashed
            prose-headings:border-white/10
            prose-headings:font-light
            prose-headings:pb-3
            [&_h1,h2,h3,h4,h5,h6_a]:no-underline
            prose-headings:text-orange-400
            prose-headings:font-mono prose-headings:tracking-normal

            prose-p:font-serif
            prose-p:text-2xl

            [&_p_code]:text-lg

            prose-a:font-extralight prose-a:text-primary

            `)}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>

          <div className="hidden xl:block col-span-1">
            <TableOfContents className="sticky top-10" headings={headings} />
          </div>
        </div>
        <div className="overflow-hidden w-full mt-20 flex gap-2 h-4">
          {Array.from({ length: 70 }).map((_, index) => (
            <div key={index} className="shrink-0 h-px w-2 bg-white/20"></div>
          ))}
        </div>
        <div className="w-full px-4 xl:px-20 mx-auto pt-10 ">
          <BlogAuthor></BlogAuthor>
        </div>
      </div>
    </div>
  )
}
