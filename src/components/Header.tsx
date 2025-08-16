'use client'
import Link from 'next/link'
import styles from './Header.module.css'
import { scrollTo } from '../helpers'

export const Header = () => {
  const nav = [
    {
      label: 'Início',
      id: 'banner'
    },
    {
      label: 'Sobre',
      id: 'about'
    },
    {
      label: 'Conhecimentos',
      id: 'skills'
    },
    {
      label: 'Serviços',
      id: 'services'
    },
    {
      label: 'Contato',
      id: 'contact'
    }
  ]

  return (
    <header
      className="  z-10 mt-6 rounded-2xl  mx-auto px-12 py-4
     border border-white/20
     shadow-2xl
     sticky top-4
      "
    >
      <div
        className="absolute w-[calc(100%-4px)] h-[calc(100%-4px)]  left-0.5 top-0.5
        backdrop-blur-2xl bg-white/5
        rounded-xl"
      ></div>
      <div className="relative gap-8 flex items-center justify-center">
        <Link href="/">
          <img width={50} src="/img/isotipo.svg" alt="logo pedroni.dev" />
        </Link>
        <nav className="flex gap-4 font-mono">
          {nav.map(link => (
            <Link
              className="hidden transition text-white/50 hover:text-white lg:block"
              key={link.label}
              href={`/#${link.id}`}
              onClick={ev => {
                if (document.getElementById(link.id)) {
                  ev.preventDefault()
                  scrollTo(`#${link.id}`)
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="flex gap-2 items-center transition text-white/50 hover:text-white"
            href="/blog"
          >
            Blog
            <div className="w-1.5 h-1.5 bg-primary-light rounded-full animate-pulse"></div>
          </Link>
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
