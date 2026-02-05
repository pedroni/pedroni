'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BlogPost } from '../lib/blog'
import BlogMetadata from '../app/[locale]/blog/[slug]/BlogMetadata'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { Link } from '../i18n/navigation'

interface BlogPostHoverItemProps {
  post: BlogPost
  locale: string
  minutesText: string
}

const BlogPostHoverItem: React.FC<BlogPostHoverItemProps> = ({
  post,
  locale,
  minutesText
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!itemRef.current) return

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = itemRef.current!.getBoundingClientRect()
      const offsetX = e.clientX - rect.left
      const offsetY = e.clientY - rect.top

      setPosition({ x: offsetX, y: offsetY })
    })
  }, [])

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!itemRef.current) return

    const rect = itemRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    setPosition({ x: offsetX, y: offsetY })
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <li
      ref={itemRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group hover:text-primary-light transition-colors block"
      >
        <div className="flex gap-4">
          <BlogMetadata size="xs" icon={faCalendar}>
            {new Date(post.date).toLocaleDateString(locale, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </BlogMetadata>

          <BlogMetadata size="xs" icon={faClock}>
            {post.readingTime} {minutesText}
          </BlogMetadata>
        </div>
        <div className="transition-colors group-hover:text-primary-light text-white/90">
          {post.title}
        </div>
      </Link>
      {post.thumbnail && (
        <div
          className={`absolute z-50 pointer-events-none ${isVisible ? 'block' : 'hidden'}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(10px, -100%)'
          }}
        >
          <div className="max-w-48 max-h-48 overflow-hidden rounded-lg shadow-lg bg-black border border-white/20">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </li>
  )
}

export default BlogPostHoverItem
