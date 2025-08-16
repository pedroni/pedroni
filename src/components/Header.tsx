'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { scrollTo } from '../helpers'

export const Header = ({ nav }) => {
  const [small, setSmall] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setSmall(true)
    } else {
      setSmall(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${small ? styles.small : ''}`}>
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
                  ev.preventDefault()
                  scrollTo(link.ref)
                }}
              >
                <a href={`#${link.ref.current.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul className="social">
            <li>
              <a target="_blank" href="http://github.com/pedroni" rel="noreferrer">
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
        </nav>
      </div>
    </header>
  )
}

export default Header
