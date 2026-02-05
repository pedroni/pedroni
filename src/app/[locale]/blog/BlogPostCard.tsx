'use client'

import classNames from 'classnames'
import { BlogPost } from '../../../lib/blog'
import { useLocale, useTranslations } from 'next-intl'
import BlogMetadata from './[slug]/BlogMetadata'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { Link } from '../../../i18n/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function BlogPostCard(props: {
  className?: string
  post: BlogPost
  small?: boolean
}) {
  const locale = useLocale()
  const t = useTranslations()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLAnchorElement>(null)
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
    <Link
      ref={itemRef}
      href={`/blog/${props.post.slug}`}
      className={classNames(
        `block
        rounded-tl-2xl
        rounded-br-2xl
          border border-white/20
          shadow-lg
          relative
          group
          transition

          hover:border-primary-light/50
          hover:shadow-primary/30
          hover:-translate-y-0.5

          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90

          `,
        props.className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]
          top-0.5
          left-0.5
          backdrop-blur-2xl bg-white/5
          rounded-tl-xl
          rounded-br-xl
          transition
         group-hover:bg-white/10
      "
      ></div>
      <div className="relative px-6 py-4">
        <h2
          className={classNames(
            ' font-normal font-serif group-hover:text-primary',
            {
              'text-xl': props.small,
              'mb-2 text-3xl': !props.small
            }
          )}
        >
          {props.post.title}
        </h2>
        {!props.small && props.post.excerpt && (
          <p className="text-white/70 tracking-wider font-light font-sans leading-relaxed">
            {props.post.excerpt}
          </p>
        )}
        <div className="flex gap-4 opacity-75">
          <BlogMetadata icon={faCalendar}>
            {new Date(props.post.date).toLocaleDateString(locale, {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </BlogMetadata>

          <BlogMetadata icon={faClock}>
            {props.post.readingTime} {t('Words.minutes')}
          </BlogMetadata>
        </div>
      </div>
      {props.post.thumbnail && (
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
              src={props.post.thumbnail}
              alt={props.post.title}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </Link>
  )
}
