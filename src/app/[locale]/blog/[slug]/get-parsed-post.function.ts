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
import { visit } from 'unist-util-visit'
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
      .use(() => tree => {
        // Simple plugin to wrap images in clickable links
        visit(tree, 'element', (node, index, parent) => {
          if (
            node.tagName === 'img' &&
            node.properties?.src &&
            parent &&
            index !== undefined
          ) {
            const linkNode = {
              type: 'element',
              tagName: 'a',
              properties: {
                href: node.properties.src,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              children: [node]
            }
            parent.children[index] = linkNode
          }
        })
      })
      .use(rehypeAddClasses, {
        'h1, h2, h3, h4, h5, h6': 'group'
      })
      .use(() => tree => {
        visit(tree, 'element', node => {
          if (
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName) &&
            node.properties?.id
          ) {
            let text = ''
            visit(node, 'text', textNode => {
              text += textNode.value
            })
            text = text.trim()
            if (text) {
              const level = parseInt(node.tagName.substring(1))
              extractedHeadings.push({
                id: node.properties.id,
                text,
                level
              })
            }
          }
        })
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

      .use(rehypeStringify)
      .process(post.content)

    return {
      post: post,
      html: processedContent.toString(),
      headings: extractedHeadings,
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }
}
