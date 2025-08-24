import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
}

function listPostFileNames(locale: string) {
  return fs
    .readdirSync(postsDirectory)
    .filter(
      fileName =>
        fileName.endsWith(`${locale}.md`) && !fileName.endsWith('.draft.md')
    )
}

function formatSlug(fileName: string) {
  return fileName.split('.')[0]
}

export function getSortedPosts(locale: string): BlogPost[] {
  // Get file names under /posts
  const fileNames = listPostFileNames(locale)

  const allPostsData = fileNames
    .map((fileName): BlogPost => {
      // Remove locale and ".md" from file name to get slug
      const slug = formatSlug(fileName)

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
        content: matterResult.content
      } as BlogPost
    })
    // Sort posts by date
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return allPostsData
}

export function getAllPostSlugs(locale: string): string[] {
  return listPostFileNames(locale).map(formatSlug)
}

export function getPostBySlug(locale: string, slug: string): BlogPost {
  let fullPath: string

  if (slug.endsWith('.draft')) {
    fullPath = path.join(postsDirectory, `${slug}.md`)
  } else {
    fullPath = path.join(postsDirectory, `${slug}.${locale}.md`)
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the slug
  return {
    slug,
    ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    content: matterResult.content
  } as BlogPost
}
