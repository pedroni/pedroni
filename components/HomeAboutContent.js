import React from 'react'
const contents = [
  {
    key: 'ola',
    label: 'Sobre',
    title: 'Olá, me chamo Lucas Pedroni',
    content:
      'Desde os 13 anos, apaixonado por programação. Sou desenvolvedor de software de 25 anos com um forte conhecmento em front-end e back-end. Atualmente construo interfaces pixel-perfect com APIs de alto desempenho, com código bem projetado, testável e eficiente.'
  },
  {
    key: 'estudos',
    label: 'Estudos',
    title: 'Em constante aprendizado',
    content: (
      <>
        Estudo constantemente novas tecnologias para trazer a melhor performance
        e resultado para cada projeto que construo.
        <br />
        Hoje estudo design de interfaces de usuário e experiência do usuário,
        que você deve conhecer como UI/UX. Também tenho sólidos conhecimentos em
        diversas tecnologias como JavaScript, React, Vue, Angular, HTML, CSS,
        PHP, Laravel, MySQL, Servidores Linux, Docker, AWS.
      </>
    )
  },
  {
    key: 'objetivos',
    label: 'Objetivos',
    title: 'Entregar sempre o melhor',
    content:
      'Busco sempre evoluir em meu trabalho, e, por isso, meus objetivos também estão sempre mudando. Mas um deles é certo e imutável: entregar sempre o melhor. Para mim, não basta apenas entregar, quero sempre entregar o melhor que posso oferecer.'
  }
]

export const getByKey = key => {
  return contents.find(content => content.key === key)
}

export default contents
