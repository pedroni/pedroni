import { getTranslations } from 'next-intl/server'
import Box from '../../components/Box'
import BoxContent from '../../components/BoxContent'
import HomeContactForm from '../../components/HomeContactForm'
import Title from '../../components/Title'

const Page404 = async () => {
  const t = await getTranslations('NotFound')
  return (
    <Box
      style={{
        margin: '200px auto'
      }}
      aside={
        <img
          src="/img/01.png"
          height="160"
          srcSet="/img/01.png 1x, /img/01@2x.png 2x,"
          alt=""
          className="brightness--2"
          style={{ marginBottom: 16 }}
        />
      }
    >
      <Title subTitle={t('subTitle')} title={t('title')}></Title>
      <BoxContent>
        {t.rich('content', {
          homeLink: chunks => <a href="https://pedroni.dev">{chunks}</a>
        })}{' '}
        <a href="mailto:lucas@pedroni.dev">
          <strong>lucas@pedroni.dev</strong>
        </a>
        .
        <br />
        <br />
      </BoxContent>
      <HomeContactForm></HomeContactForm>
    </Box>
  )
}

export default Page404
