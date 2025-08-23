import React from 'react'
import { calculateYears } from '../helpers'


const contents = [
  {
    key: 'ola',
    label: 'Sobre',
    title: 'Olá, me chamo Lucas Pedroni',
    content: (
      <>
        Desde os 13 anos, apaixonado por programação. Tenho{' '}
        {calculateYears('1997-03-30')} anos e trabalho com desenvolvimento de web
        sites, web apps, apps híbridos além de sistemas sob-medida. Atualmente
        sou Team Lead na Voxie Inc. Tenho mais de {calculateYears('2017-03-01')}{' '}
        anos de experiência profissional em desenvolvimento full-stack.
      </>
    )
  },
  {
    key: 'estudos',
    label: 'Estudos',
    title: 'Em constante aprendizado',
    content: (
      <>
        <p className="mb-4">
          Hoje estou estudando <strong>C++</strong> por hobby. Acompanhe meu
          progresso em:{' '}
          <a
            href="https://github.com/pedroni/learning-cpp"
            target="_blank"
            rel="noreferrer"
          >
            pedroni/learning-cpp
          </a>{' '}
          onde coloco os algoritimos que estou aprendendo. Documento cada parte
          através de comentários no código e também com step-by-step em
          diagramas/whiteboard digital.
        </p>
        <p>
          Também tenho sólidos conhecimentos em diversas tecnologias como
          JavaScript, React, Vue, Angular, HTML, CSS, PHP, Laravel, MySQL,
          Servidores Linux, Docker, AWS.
        </p>
      </>
    )
  },
  {
    key: 'objetivos',
    label: 'Objetivos',
    title: 'Entregar sempre o melhor',
    content:
      'Busco sempre evoluir em meu trabalho, e, por isso, meus objetivos também estão sempre mudando. Mas um deles é certo: entregar sempre o melhor. Para mim, não basta apenas entregar, quero sempre entregar o melhor que posso oferecer.'
  }
]

export const getByKey = key => {
  return contents.find(content => content.key === key)
}

export default contents
