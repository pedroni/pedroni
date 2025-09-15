import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface ButtonProps {
  className?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  [key: string]: any
}

const Button = ({ className = '', href, onClick, children, ...props }: ButtonProps) => {
  const buttonClass = classNames(
    `
    cursor-pointer
    relative
    px-6 py-3
    border
    border-primary/80
    shadow-transparent
    shadow-lg
    bg-[url(/img/bg-pattern.jpg)]
    bg-black
    rounded-br-2xl
    rounded-tl-2xl
    transition
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/90
    overflow-clip
    hover:-translate-y-1
    active:translate-y-0
    hover:shadow-primary/50
    hover:text-white
    `,
    className
  )

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        <div className="absolute left-0 top-0 w-full h-full bg-white/10"></div>
        <span className="relative text-nowrap"> {children}</span>
      </Link>
    )
  }

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      <div className="absolute left-0 top-0 w-full h-full bg-white/10"></div>
      <span className="relative text-nowrap"> {children}</span>
    </button>
  )
}

export default Button