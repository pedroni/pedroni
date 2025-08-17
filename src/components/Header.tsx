'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'

const HeaderLink = (props: {
  href: string
  className?: string
  onClick?: (ev: MouseEvent<HTMLAnchorElement>) => void
  children: ReactNode
}) => {
  const pathname = usePathname()
  const href = props.href.split('#')[0]
  const active = href == '/' ? pathname == href : pathname.startsWith(href)

  return (
    <div className="relative h-full flex flex-col items-center justify-center">
      <Link
        href={props.href}
        onClick={props.onClick}
        className={classNames(
          'transition  px-2.5 py-1 rounded-sm hover:bg-white/10 hover:text-white',
          active ? 'text-white' : 'text-white/50',
          props.className
        )}
      >
        {props.children}

        {active && (
          <div className="absolute w-[calc(100%-20px)] h-px bg-primary-light left-2.5 bottom-px"></div>
        )}
      </Link>
    </div>
  )
}

export const Header = () => {
  return (
    <header
      className="  z-10 mt-6 rounded-2xl  mx-auto px-12
     border border-white/20
     shadow-2xl
     fixed left-1/2 -translate-x-1/2 top-4
     h-16
      "
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]  left-0.5 top-0.5
        backdrop-blur-2xl bg-white/5
        rounded-xl"
      ></div>
      <div className="h-16 relative gap-8 flex items-center justify-center">
        <Link href="/">
          <img width={50} src="/img/isotipo.svg" alt="logo pedroni.dev" />
        </Link>
        <nav className="h-full flex font-mono">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink className="flex gap-2 items-center" href="/blog">
            Blog
          </HeaderLink>
        </nav>
        <ul className="flex items-center gap-2">
          <li>
            <a
              target="_blank"
              href="http://github.com/pedroni"
              rel="noreferrer"
            >
              <img width="19" height="19" src="/icon/github.svg" alt="" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucaspedroni/"
              rel="noreferrer"
            >
              <img width="17" height="17" src="/icon/linkedin.svg" alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:lucas@pedroni.dev" rel="noreferrer">
              <img width="19" height="14" src="/icon/mail.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
