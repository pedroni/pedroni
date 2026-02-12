import type { MDXComponents } from 'mdx/types'
import React, { ReactNode } from 'react'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

function truncateMiddle(text: string, maxLength: number = 30): string {
  if (text.length <= maxLength) return text
  const half = Math.floor(maxLength / 2)
  const first = text.substring(0, half - 1)
  const last = text.substring(text.length - half + 1)
  return `${first}...${last}`
}

const components = {
  a: ({ children, href }: { children?: ReactNode; href?: string }) => {
    const shouldTruncate =
      typeof children === 'string' &&
      typeof href === 'string' &&
      children.trim() === href.trim() &&
      (children.startsWith('http') || children.startsWith('https'))

    const childText = shouldTruncate
        ? truncateMiddle(children)
        : children

    return (
      <a
        href={href}
        className="text-primary underline decoration-white/20 decoration-1 hover:text-primary-light break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {childText}
      </a>
    )
  },
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // Wrap images in clickable links (replicating existing behavior)
    <a
      href={props.src as string}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        {...props}
        alt={props.alt || ''}
        className="rounded-lg max-w-[calc(100%+48px)] -mx-6 lg:mx-0 lg:max-w-full lg:w-full"
      />
    </a>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="text-lg font-mono px-1 py-0.5 rounded">{children}</code>
  ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="overflow-x-auto rounded-lg p-4">{children}</pre>
  )
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
