'use server';
import React from 'react'
import HomeBannerAboutButton from './HomeBannerAboutButton'
import styles from './HomeBanner.module.css'
import { getTranslations } from 'next-intl/server'
import HomeBannerScrollImg from './HomeBannerScrollImg'

const HomeBanner = async () => {

  const t = await getTranslations('HomeBanner');

  return (
    <section className={styles.homeBanner}>
      <div>
        <div className="w-full h-screen absolute left-0 top bg-gradient-to-t from-black to-transparent"></div>
        <div className={styles.homeBannerLeft}>
          <img
          className='opacity-50'
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
          <span className="text-primary font-extralight tracking-wider font-mono" >
            {t('title')}
          </span>
          <br />

          <HomeBannerAboutButton className="mt-8">
            {t('actionButton')}
          </HomeBannerAboutButton>

          <HomeBannerScrollImg className={styles.homeBannerScrollDown} />
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
