import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki from '@shikijs/rehype'
import { h } from 'hastscript'

const withNextIntl = createNextIntlPlugin()
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
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
        }
      ],
      [
        rehypeShiki,
        {
          themes: {
            dark: 'gruvbox-dark-hard',
            light: 'gruvbox-dark-hard'
          }
        }
      ]
    ]
  }
})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    // mdxRs: true
  }
}

export default withNextIntl(withMDX(nextConfig))
