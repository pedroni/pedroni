

export interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
}

export default function TableOfContents({ headings, className = '' }: TableOfContentsProps) {

  if (headings.length === 0) {
    return (
      <div className={`${className}`}>
        <h3 className="font-mono text-sm font-semibold text-white mb-4 uppercase tracking-wider">
          Table of Contents
        </h3>
        <p className="text-sm text-gray-400 italic">No headings available</p>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <h3 className="font-mono text-sm font-semibold text-white mb-4 uppercase tracking-wider">
        Table of Contents
      </h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-all duration-200 py-1.5 rounded-md hover:bg-white/5 hover:pl-3 ${
              heading.level === 2
                ? 'font-medium text-white pl-2 border-l-2 border-[#dd7de3]'
                : 'font-light text-gray-300 pl-4 border-l border-white/20'
            }`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
