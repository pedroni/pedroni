'use client'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollTo } from '../helpers'
import { MouseEvent } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

export interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
}

export default function TableOfContents({
  headings,
  className = ''
}: TableOfContentsProps) {
  const t = useTranslations('Words')

  if (headings.length === 0) {
    return null
  }

  const handleHeadingClick =
    (heading: Heading) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      scrollTo(`#${heading.id}`, 1)
    }
  return (
    <div className={`${className}`}>
      <h3 className="font-mono flex items-center gap-2 text-xs font-extralight mb-2">
        <FontAwesomeIcon icon={faFolderOpen} fixedWidth></FontAwesomeIcon>
        <span>{t('tableOfContents')}</span>
      </h3>
      <nav className="flex flex-col gap-3 pl-0 py-2 ml-2 border-l border-dashed border-l-white/10 max-h-screen overflow-auto">
        {headings.map(heading => (
          <a
            key={heading.id}
            onClick={handleHeadingClick(heading)}
            href={`#${heading.id}`}
            className={classNames(
              `block font-extralight text-sm transition-all underline decoration-white/20 decoration-1 hover:translate-x-2 text-primary`
            )}
            style={{
              marginLeft: `${heading.level * 8}px`
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
