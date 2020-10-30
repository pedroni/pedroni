const contents = [
  {
    key: "aplicativos",
    label: "Aplicativos",
    title: "Aplicativos Android e iOS",
    content:
      "Desenvolvo aplicativos para iOS e Android, criados de forma híbrida, ou seja, o mesmo aplicativo terá as mesmas funcionalidades no iOS e Android, sendo programado apenas uma vez e garantindo qualidade nas duas plataformas. Além disso, por ser criado de forma híbrida, seu aplicativo também poderá ter uma versão web para ser acessada rapidamente em um navegador como o Chrome em seu smartphone preferido ou até mesmo em seu computador.",
  },
  {
    key: "sites",
    label: "Sites",
    title: "Sites institucionais",
    content:
      "Os sites institucionais são de extrema importância para qualquer negócio. É a partir dele que você (seu negócio) será encontrado no Google mais facilmente e, com isso, poderá mostrar todo o trabalho realizado pela sua empresa de forma rápida, atraente e eficaz. Seu site será criado sob medida, atendendo todas suas necessidades, além de ser totalmente responsivo — ou seja, poderá ser acessado tanto por um celular quanto por um computador ou tablet.",
  },
  {
    key: "e-commerces",
    label: "Lojas virtuais",
    title: "E-commerces",
    content:
      "Seja você uma grande ou pequena empresa, precisa vender, e a melhor forma de fazer isso nos dias atuais é pela internet. Cada vez mais as pessoas procuram o que desejam no ambiente online ao invés de irem até uma loja física. Tudo isso por praticidade. Por isso, seu e-commerce é a vitrine ideal do seu negócio. Seu e-commerce será totalmente responsivo — ou seja, poderá ser acessado tanto por um celular quanto por um computador ou tablet.",
  },
  {
    key: "sistemas",
    label: "Sistemas",
    title: "Sistemas sob medida",
    content:
      "Você precisa controlar o estoque de sua empresa? Ou ter uma agenda que possa ser acessada por todos os seus colaboradores? Talvez você precise criar e delegar tarefas que precisam ser realizadas, certo? Qualquer uma dessas soluções pode ser feita através da programação. Para isso, crio sistemas sob medida em que suas necessidades se transformarão em um sistema completo, tornando a sua vida (e também o seu negócio) mais fácil e organizada.",
  },
]

export const getByKey = (key) => {
  return contents.find((content) => content.key === key);
};

export default contents;