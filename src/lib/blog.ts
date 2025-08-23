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

const filterFileNames = (fileName: string): boolean => {
  return fileName.endsWith('.md') && !fileName.endsWith('.raw.md');
}

export function getSortedPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames
    .filter(filterFileNames)
    .map((fileName): BlogPost => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
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

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(filterFileNames)
    .map(fileName => fileName.replace(/\.md$/, ''))
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the slug
  return {
    slug,
    ...(matterResult.data as Omit<BlogPost, 'slug' | 'content'>),
    content: matterResult.content,
  } as BlogPost
}
