import React from "react";
const contents = [
  {
    key: "ola",
    label: "Sobre",
    title: "Olá, me chamo Lucas Pedroni",
    content:
      "Estudo programação desde os 13 anos. Atualmente, aos 23, estou me formando em Análise e Desenvolvimento de Sistemas. Trabalho há 4 anos de forma profissional com desenvolvimento de aplicativos, sites, e-commerce, plataformas, além de qualquer sistema sob medida que você precise.",
  },
  {
    key: "estudos",
    label: "Estudos",
    title: "Em constante aprendizado",
    content: (
      <>
        Estou me graduando em Análise e Desenvolvimento de Sistemas, faculdade
        iniciada em 2017. Além da graduação, estudo constantemente novas
        tecnologias para trazer a melhor performance e resultado para cada
        projeto que construo.
        <br />
        Hoje estudo arduamente React, Node.JS e microservices, além de design de
        interfaces de usuário e experiência do usuário, que você deve conhecer
        como UI/UX. Também tenho sólidos conhecimentos em diversas tecnologias
        como JavaScript, Vue, Angular, HTML, CSS, PHP, Laravel, MySQL,
        Servidores Linux
      </>
    ),
  },
  {
    key: "objetivos",
    label: "Objetivos",
    title: "Entregar sempre o melhor",
    content:
      "Busco sempre evoluir em meu trabalho, e, por isso, meus objetivos também estão sempre mudando. Mas um deles é certo e imutável: entregar sempre o melhor. Para mim, não basta apenas entregar, quero sempre entregar o melhor que posso oferecer.",
  },
];

export const getByKey = (key) => {
  return contents.find((content) => content.key === key);
};

export default contents;