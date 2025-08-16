'use client';
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
  ];

  return (
    <header className={`${styles.header}`}>
      <div>
        <Link href="/">
          <span className={styles.headerLogo}>
            <img src="/img/isotipo.svg" alt="" />
          </span>
        </Link>
        <nav className={styles.headerNav}>
          <ul className="pages">
            {nav.map(link => (
              <li
                key={link.label}
                onClick={ev => {
                  if (document.getElementById(link.id)){
                    ev.preventDefault()
                    scrollTo(`#${link.id}`)
                  }
                }}
              >
                <a href={`/#${link.id}`}>{link.label}</a>
              </li>
            ))}
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <ul className="social">
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
              <a
                target="_blank"
                href="mailto:lucas@pedroni.dev"
                rel="noreferrer"
              >
                <img width="19" height="14" src="/icon/mail.svg" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
