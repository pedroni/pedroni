'use client'
import { useState } from 'react'
import Box from './Box'
import BoxContent from './BoxContent'
import Title from './Title'
import styles from './HomeSkills.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslations } from 'next-intl'

const HomeSkills = props => {
  const t = useTranslations('HomeSkills')
  return (
    <Box
      {...props}
      direction="bottom right"
      asideProps={{
        style: {
          width: '250px',
          flex: '0 0 250px',
          textAlign: 'left'
        }
      }}
      aside={<HomeSkillsAside />}
      bottom={<HomeSkillsSwiper />}
    >
      <Title
        direction="right"
        subTitle={t('subTitle')}
        title={<h2>{t('title')}</h2>}
      />
      <BoxContent>
        {t('content')}
      </BoxContent>
    </Box>
  )
}

const HomeSkillsAside = () => {
  return (
    <>
      <img
        src="/img/02.png"
        height="160"
        srcSet="/img/02.png 1x, /img/02@2x.png 2x,"
        alt=""
        className="brightness--2 hidden lg:block"
        style={{ marginBottom: 16 }}
      />
    </>
  )
}

export const HomeSkillsSwiper = () => {
  const [, setSwiper] = useState(null)

  const list = [
    {
      background: '/img/skills/01.jpg',
      icon: 'devicon-apple-original',
      label: 'iOS / iPadOS'
    },
    {
      background: '/img/skills/02.jpg',
      icon: 'devicon-android-plain',
      label: 'Android'
    },
    {
      background: '/img/skills/03.jpg',
      icon: 'devicon-angularjs-plain',
      label: 'Angular'
    },
    {
      background: '/img/skills/01.jpg',
      icon: 'devicon-react-plain',
      label: 'React'
    },
    {
      background: '/img/skills/02.jpg',
      icon: 'devicon-vuejs-plain',
      label: 'Vue'
    },
    {
      background: '/img/skills/03.jpg',
      icon: 'devicon-nodejs-plain',
      label: 'Node.js'
    },
    {
      background: '/img/skills/01.jpg',
      icon: 'devicon-mongodb-plain',
      label: 'MongoDB'
    },
    {
      background: '/img/skills/02.jpg',
      icon: 'devicon-php-plain',
      label: 'PHP'
    },
    {
      background: '/img/skills/03.jpg',
      icon: 'devicon-laravel-plain',
      label: 'Laravel'
    },
    {
      background: '/img/skills/01.jpg',
      icon: 'devicon-mysql-plain',
      label: 'MySQL'
    },
    {
      background: '/img/skills/02.jpg',
      icon: 'devicon-amazonwebservices-plain',
      label: 'DynamoDB'
    }
  ]
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        spaceBetween={16}
        style={{
          marginTop: 32
        }}
        navigation
        slidesPerView={1.3}
        onSwiper={setSwiper}
        breakpoints={{
          400: {
            slidesPerView: 1.3
          },
          1024: {
            slidesPerView: 4
          },
        }}
      >
        {list.map(({ background, icon, label }) => (
          <SwiperSlide key={icon}>
            <div className={styles.skillCard}>
              <img src={background} alt={label} />
              <i className={icon}></i>
              <span>{label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeSkills
