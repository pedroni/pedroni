import Box from './Box'
import BoxContent from './BoxContent'
import HomeContactForm from './HomeContactForm'
import Title from './Title'
import { useTranslations } from 'next-intl'


const HomeContact = props => {


  const t = useTranslations('HomeContact')

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
      aside={<div className="hidden xl:block"><HomeContactAside /></div>}
    >
      <Title
        direction="right"
        subTitle={t('subTitle')}
        title={<h2>{t('title')}</h2>}
      />
      <BoxContent>
        {t('content')}
        <div className="xl:hidden"><HomeContactAside /></div>
        <HomeContactForm style={{ marginTop: 32 }} />
      </BoxContent>
    </Box>
  )
}

const HomeContactAside = () => {
  const t = useTranslations('HomeContact')

  return (
    <>
      <img
        src="/img/04.png"
        height="160"
        srcSet="/img/04.png 1x, /img/04@2x.png 2x,"
        alt=""
        className="brightness--2 hidden xl:block"
        style={{ marginBottom: 16 }}
      />
      <div>
        {t.rich('asideContent', {
          email: (chunks) => (
            <a href="mailto:lucas@pedroni.dev">
              {chunks}
            </a>
          ),
          linkedin: (chunks) => (
            <a href="https://www.linkedin.com/in/lucaspedroni/" target="blank">
              {chunks}
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomeContact
