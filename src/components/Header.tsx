'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'
import classNames from 'classnames'
import { Logo } from '../../Logo'
import { SocialButton } from './SocialButton'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
          <div className="absolute w-[calc(100%-20px)] h-px bg-primary left-2.5 bottom-px"></div>
        )}
      </Link>
    </div>
  )
}

export const Header = () => {
  return (
    <header
      className=" z-10 rounded-2xl  mx-auto px-12
     border border-white/20
     shadow-2xl
     fixed left-1/2 -translate-x-1/2
     top-2
     w-[calc(100%-32px)]
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
      <div className="relative gap-4 flex items-center justify-center

        h-14
        lg:h-16">
        <Link href="/" className='shrink-0 w-10 pr-1 lg:w-20 lg:pr-8'>
          <Logo></Logo>
        </Link>
        <nav className="h-full border-x border-white/10
           flex font-mono

          px-4
           lg:px-8
           ">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink className="flex gap-2 items-center" href="/blog">
            Blog
          </HeaderLink>
        </nav>

        <div className='flex'>
          <SocialButton
            href="https://www.linkedin.com/in/lucaspedroni/"
            icon={faLinkedin}
          ></SocialButton>
          <SocialButton
            href="https://github.com/pedroni"
            icon={faGithub}
          ></SocialButton>

        </div>
      </div>
    </header>
  )
}

export default Header
