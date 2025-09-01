import rehypeShiki from '@shikijs/rehype'
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
import { BlogPost, getPostBySlug } from '../../../../lib/blog'
import { Heading } from '../../../../components/TableOfContents'

export default async function getParsedPost(
  locale: string,
  slug: string,
  draft: boolean
): Promise<{
  post: BlogPost
  html: string
  headings: Heading[]
  readingTime: number
}> {
  try {
    const post = getPostBySlug(locale, draft ? `${slug}.draft` : slug)

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
          light: 'gruvbox-dark-hard'
        }
      })
      .use(rehypeSlug)
      .use(rehypeAddClasses, {
        'h1, h2, h3, h4, h5, h6': 'group'
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

    return {
      post: post,
      html: processedContent.toString(),
      headings: extractedHeadings,
      readingTime: Math.max(
        1,
        Math.ceil(post.content.split(/\s+/).length / 250)
      )
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}
