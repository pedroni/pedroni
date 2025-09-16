import { getTranslations } from 'next-intl/server'
import Box from './Box'
import BoxContent from './BoxContent'
import Title from './Title'
import HomeSkillsSwiper from './HomeSkillsSwiper'

const HomeSkills = async () => {
  const t = await getTranslations('HomeSkills')
  return (
    <Box
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
      <BoxContent>{t('content')}</BoxContent>
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

export default HomeSkills
