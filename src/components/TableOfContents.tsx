'use client';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { scrollTo } from '../helpers'
import { MouseEvent } from 'react'

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
      <h3 className="font-mono text-xs font-extralight mb-2">
        <FontAwesomeIcon icon={faFolderOpen} fixedWidth></FontAwesomeIcon> Table
        of Contents
      </h3>
      <nav className="flex flex-col gap-3 pl-[18px] py-2 ml-2 border-l border-l-white/10">
        {headings.map(heading => (
          <a
            key={heading.id}
            onClick={handleHeadingClick(heading)}
            href={`#${heading.id}`}
            className={`block font-extralight text-sm transition-all underline decoration-white/20 decoration-1 hover:translate-x-2 text-primary`}
            style={{
              marginLeft: `${heading.level - 1 * 4}px`
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
