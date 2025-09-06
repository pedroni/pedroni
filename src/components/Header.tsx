'use client'
import { MouseEvent, ReactNode, useState } from 'react'
import classNames from 'classnames'
import { Logo } from './Logo'
import { IconButton } from './IconButton'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Link, usePathname } from '../i18n/navigation'

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
          'transition px-2.5 py-1 rounded-sm hover:bg-white/10 hover:text-white',
          active ? 'text-white' : 'text-white/50',
          props.className
        )}
      >
        {props.children}

        {active && (
          <div className="absolute w-[calc(100%-20px)] h-px bg-primary left-2.5 bottom-px"></div>
        )}
      </Link>
    </div>
  )
}

export const Header = () => {
  const realPathname = usePathname()

  const [choosingLanguage, setChoosingLanguage] = useState(false)

  const pathname = realPathname.replace(/^\/(en|pt)\/?/, '/')

  return (
    <header
      className=" z-10 rounded-2xl  mx-auto px-12
     border border-white/20
     shadow-2xl
     fixed left-1/2 -translate-x-1/2
     top-2
     max-w-[calc(100%-32px)]
     lg:w-auto
     lg:top-10

     print:hidden
      "
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]  left-0.5 top-0.5
        backdrop-blur-2xl bg-white/5
        rounded-xl"
      ></div>
      <div
        className="relative gap-4 flex items-center justify-center

        h-14
        lg:h-16"
      >
        <Link
          title="Home Lucas Pedroni"
          href="/"
          className="shrink-0 w-10 pr-1 lg:w-20 lg:pr-8"
        >
          <Logo></Logo>
        </Link>
        <nav
          className="h-full border-x border-white/10
           flex font-mono

          px-4
           lg:px-8
           "
        >
          <HeaderLink className="flex gap-2 items-center" href="/blog">
            Blog
          </HeaderLink>
        </nav>

        <div className="flex">
          <div
            className={classNames('flex transition', {
              'opacity-0 pointer-events-none': choosingLanguage
            })}
          >
            <IconButton
              title="LinkedIn Lucas Pedroni"
              href="https://www.linkedin.com/in/lucaspedroni/"
              icon={faLinkedin}
            ></IconButton>
            <IconButton
              title="Github Pedroni"
              href="https://github.com/pedroni"
              icon={faGithub}
            ></IconButton>
          </div>

          <div
            className={classNames(
              'border-l ml-2 pl-2 relative flex gap-2 transition',
              {
                '-translate-x-16 border-transparent': choosingLanguage,
                'border-white/10': !choosingLanguage
              }
            )}
          >
            <IconButton
              title="Choose a Language"
              onClick={ev => {
                ev.preventDefault()
                setChoosingLanguage(!choosingLanguage)
              }}
              icon={faLanguage}
            ></IconButton>
            <div
              className={classNames('flex absolute translate-x-10', {
                'opacity-100': choosingLanguage,
                'opacity-0 pointer-events-none': !choosingLanguage
              })}
            >
              <a href={`/en${pathname}`}>
                <IconButton>EN</IconButton>
              </a>

              <a href={`/pt${pathname}`}>
                <IconButton>PT</IconButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
