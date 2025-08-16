import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-auto`}>
      <div>
        <div>
          <img
            className="logo"
            src="/img/isotipo.svg"
            alt="Lucas Pedroni isotipo"
          />
        </div>
        <div>
          <strong>E-mail</strong>
          <br />
          <a href="mailto:lucas@pedroni.dev">lucas@pedroni.dev</a>
        </div>
        <div>
          <strong>Quer saber mais sobre mim?</strong>
          <br />
          <a href="https://www.linkedin.com/in/lucaspedroni/" target="blank">
            LinkedIn
          </a>
          <br />
          <a href="https://github.com/pedroni" target="blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
