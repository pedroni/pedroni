import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMdx from 'remark-mdx'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  updatedAt?: string
  excerpt?: string
  content: string
  tags?: string[]
  keywords?: string[]
  image?: string
  category?: string
  draft?: boolean;
  readingTime: number
}

export interface BlogPostWithComponent extends BlogPost {
  Component: React.ComponentType
  headings: Array<{ id: string; text: string; level: number }>
}

function listPostFileNames() {
  return fs
    .readdirSync(postsDirectory)
    .filter(fileName => fileName.endsWith('.mdx'))
}

function formatSlug(fileName: string) {
  return fileName.replace(/\.mdx$/, '')
}

async function extractHeadings(
  content: string
): Promise<Array<{ id: string; text: string; level: number }>> {
  const headings: Array<{ id: string; text: string; level: number }> = []

  await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkRehype)
    .use(rehypeSlug)
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
            headings.push({
              id: node.properties.id as string,
              text,
              level
            })
          }
        }
      })
    })
    .use(rehypeStringify)
    .process(content)

  return headings
}

async function getPostData(slug: string): Promise<BlogPostWithComponent> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Dynamically import the MDX file to get metadata and component
  // Note: This uses Node.js import which works at build time
  const { default: Component, metadata } = await import(`../posts/${slug}.mdx`)

  if (!metadata) {
    throw new Error(`MDX file ${slug}.mdx is missing export const metadata`)
  }

  const postMetadata = metadata as Omit<
    BlogPost,
    'slug' | 'content' | 'readingTime'
  >

  // Calculate reading time from raw file content (excluding exports)
  // Simple word count estimation
  const contentWithoutExports = fileContents
    .replace(/export\s+(const|let|var)\s+\w+\s*=.*$/gm, '')
    .trim()
  const wordCount = contentWithoutExports.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 250))

  // Extract headings for table of contents
  const headings = await extractHeadings(contentWithoutExports)

  return {
    slug,
    ...postMetadata,
    content: contentWithoutExports,
    readingTime,
    Component,
    headings
  }
}

export async function getSortedPosts(): Promise<BlogPost[]> {
  const fileNames = listPostFileNames()

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName): Promise<BlogPost> => {
      const slug = formatSlug(fileName)
      const data = await getPostData(slug)
      // Return without Component and headings for listing
      const { Component, headings, ...post } = data
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = Component
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const __ = headings
      return post
    })
  )

  // Sort posts by date (newest first)
  return allPostsData.filter(post => post.draft).sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs(): string[] {
  return listPostFileNames().map(formatSlug)
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPostWithComponent> {
  return getPostData(slug)
}
