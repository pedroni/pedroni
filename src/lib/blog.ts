import fs from 'fs'
import path from 'path'
import GitHubSlugger from 'github-slugger'

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
  thumbnail?: string
  category?: string
  draft?: boolean
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
  const slugger = new GitHubSlugger()
  let inCodeBlock = false
  const lines = content.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    const match = line.match(/^(#{1,6})\s+(.+)$/)
    if (!match) continue

    const level = match[1].length
    let rawText = match[2].trim()

    rawText = rawText.replace(/\s+#+$/, '')

    let plainText = rawText
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      .replace(/<[^>]+>/g, '')

    plainText = plainText.trim()
    if (!plainText) continue

    const id = slugger.slug(plainText)
    headings.push({ id, text: plainText, level })
  }

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
    .replace(/export\s+(const|let|var)\s+\w+\s*[={].*$/gm, '')
    .trim()
  const wordCount = contentWithoutExports.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

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
  return allPostsData
    .filter(post => !post.draft)
    .sort((a, b) => {
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
