import Link from 'next/link'
import Box from '../components/Box'
import BoxContent from '../components/BoxContent'
import HomeContactForm from '../components/HomeContactForm'
import Layout from '../components/Layout'
import Title from '../components/Title'
const Page404 = () => {
  return (
    <Layout>
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
        <Title
          subTitle="PÁGINA NÃO ENCONTRADA"
          title={<h1>O que você procura?</h1>}
        ></Title>
        <BoxContent>
          Volte para a página inicial <Link href="/">clicando aqui</Link> ou
          entre em contato comigo no formulário abaixo ou envie um e-mail para{' '}
          <a href="mailto:lucas@pedroni.dev">
            <strong>lucas@pedroni.dev</strong>
          </a>
          .
          <br />
          <br />
        </BoxContent>
        <HomeContactForm></HomeContactForm>
      </Box>
    </Layout>
  )
}

export default Page404
