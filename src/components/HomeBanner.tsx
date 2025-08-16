import React from 'react'
import Button from './Button'
import { scrollTo } from '../helpers'
import styles from './HomeBanner.module.css'

const HomeBanner = props => {
  return (
    <section className={styles.homeBanner}>
      <div>
        <div className={styles.homeBannerLeft}>
          <img
            src="/img/banner/me.png"
            srcSet="/img/banner/me.png 1x, /img/banner/me@2x.png 2x"
            alt="Lucas Pedroni, foto de perfil"
          />
        </div>
        <div className={styles.homeBannerRight}>
          <img
            className="name"
            src="/img/banner/name.png"
            srcSet="/img/banner/name.png 1x, /img/banner/name@2x.png 2x"
            alt="Lucas Pedroni, nome"
          />
          <span className="subtitle">DESENVOLVEDOR FULL STACK</span>
          <br />

          <Button
            className="mt-8"
            onClick={() =>
              scrollTo('#about')
            }
          >
            Me conheça
          </Button>

          <br />
          <img
            className={styles.homeBannerScrollDown}
            onClick={() =>
              scrollTo('#about')
            }
            src="/icon/scroll-down.svg"
            role="button"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
