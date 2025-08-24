import Box from './Box'
import BoxContent from './BoxContent'
import HomeContactForm from './HomeContactForm'
import Title from './Title'



const HomeContact = props => {


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
        subTitle="Contato"
        title={<h2>Me mande uma mensagem</h2>}
      />
      <BoxContent>
        Está pensando em criar algo novo? Precisa de um desenvolvedor para fazer
        isso? Entre em contato comigo.
        <div className="xl:hidden"><HomeContactAside /></div>
        <HomeContactForm style={{ marginTop: 32 }} />
      </BoxContent>
    </Box>
  )
}

const HomeContactAside = () => {
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
        Quer uma resposta mais rápida? Envie um e-mail para{' '}
        <a href="mailto:lucas@pedroni.dev">
          <strong>lucas@pedroni.dev</strong>
        </a>
        . Você também pode me mandar uma mensagem no{' '}
        <a href="https://www.linkedin.com/in/lucaspedroni/" target="blank">
          <strong>LinkedIn</strong>
        </a>
        .
      </div>
    </>
  )
}

export default HomeContact
