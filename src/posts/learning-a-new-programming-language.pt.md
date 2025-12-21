---
title: 'Aprendendo uma Nova Linguagem de Programação Após 8 Anos de Experiência'
date: '2025-08-30'
excerpt: 'Eu programo profissionalmente há mais de 8 anos. Programar pra mim é um hobby, mas em algum momento comecei a perder minha paixão. Usar somente PHP e JavaScript fez meu trabalho parecer repetitivo, como se eu estivesse preso em um loop infinito, repetindo os mesmos padrões. Eu quero voltar ao começo. De volta à época em que eu ficava empolgado em aprender algo novo. Eu quero começar do zero. Eu quero aprender uma nova linguagem. Mas como?'
tags: ['programação', 'aprendizado', 'linguagens', 'hobby']
keywords:
  ['linguagens de programação', 'aprender', 'engenharia de software', 'hobby']
category: 'Aprendizado'
---

Por oito anos, programar tem sido minha profissão, mas tudo começou como um hobby pelo qual eu era apaixonado. Aos poucos, ao longo de meses ou talvez anos, fui perdendo esse amor pela programação.

Sinto falta daqueles momentos em que um conceito finalmente fazia sentido, ou quando eu trabalhava em um problema por horas, mas parecia um minuto. A diversão de descobrir algo novo tinha sumido. PHP e JavaScript são tão confortáveis para mim que agora programar havia se tornado uma tarefa repetitiva. Repetindo o mesmo padrão denovo e denovo. Como se eu estivesse em um loop infinito.

Eu quero recuperar a paixão que eu tinha. Acho que preciso voltar ao começo. Preciso aprender algo novo. Mas como posso aprender uma nova linguagem?

## Todas parecem iguais

Eu tentei aprender Python e foi horrível, meus olhos doíam. Então eu fui pra Lua, parecia tão simples, tão bonito, e então decidi aprender Lua. Aprendi Lua enquanto tentava configurar o Neovim (passei muitas horas tentando configurar LSPs). Eventualmente, me senti confortável com Lua, a linguagem era fácil.

Mas eu não parecia que eu tava aprendendo. Tudo que eu fazia era pesquisar no Google "Como fazer X em Lua?". _Algo parecia errado_.

Decidi dar outra chance pra Python, e depois de um tempo, percebi. Python e Lua são linguagens de script. Por que aprender uma nova linguagem de script se eu já sei PHP e JavaScript?

Aprender uma nova linguagem de script foi entediante, elas eram muito similares, sua sintaxe e funções também eram muito parecidas. Eu estava em um loop, novamente, repetindo a mesma coisa que eu já sabia. **Eu não estava aprendendo**.

## Tentando algo diferente

Foi aí que me dei conta. Eu tinha que tentar algo diferente. Algo que pudesse me deixar apaixonado novamente. Afinal, programar é um hobby para mim, um hobby no qual eu estava lentamente perdendo o interesse, um hobby que havia se tornado um trabalho.

Às vezes, até considerei encontrar um novo hobby, uma nova paixão, um hobby que pudesse me empolgar. Só que, eu não queria um novo hobby, eu gosto de mesmo de programar.

Eu precisava de algo que pudesse ativar meu cérebro e me deixar animado novamente. PHP e JavaScript eram tão automáticos para mim que eu não precisava mais pensar. Qualquer problema ou projeto que eu tinha para fazer, eu simplesmente fazia. Não precisava pensar muito. Mesmo quando eu tinha uma ideia "brilhante" e ficava motivado para colocar em prática, após algumas horas a motivação sumia, eu estava apenas fazendo a mesma coisa de novo, nada novo. Apenas repetindo o mesmo código, de novo e de novo.

## Encontrando algo diferente

Havia um jogo que eu gostava muito de jogar quando era criança, chamado Forsaken World. Os servidores foram desligados no Brasil em 2017 e os servidores dos EUA/Europa foram desligados em 2022. Quem jogava ficou sem nada. A única coisa que restou foram servidores privados.

Esse jogo foi escrito em C++. Com o que eu sabia, consegui editar o código do jogo e alterar algumas mecânicas. Eu até construí meu próprio servidor privado com a ajuda de alguns bons amigos.

Mudar algumas linhas de código e fazê-lo funcionar não era o suficiente. Eu não entendia por inteiro o que estava alterando ou o que estava escrito nos código-fonte. O código-fonte parecia 5 projetos diferentes, cada um com sua própria pasta, cada pasta compilada em um único binário. Parecia um monolito modular. Eu não conseguia entender como aqueles binários se comunicavam entre si.

Eu queria entender C++. Entender era desafiador. Eu finalmente encontrei uma linguagem que iria me deixar apaixonado novamente: **C++**.

## Como eu poderia aprender uma nova linguagem?

Tentei aprender algumas coisas aqui e ali pesquisando no Google, assim como fiz com Lua, mas isso não foi suficiente com C++. O código-fonte era muito grande e antiga. Ela foi escrita no padrão C++98. Simplesmente pesquisar no Google como fazer certas coisas não era suficiente. Eu queria entender de verdade o que eu tava lendo.

Quero o mesmo nível de entendimento que tenho com PHP e JavaScript: em poucos minutos olhando o código-fonte, eu quero ser capaz de entender e alterar. Não quero simplesmente alterar uma parte do código e torcer para dar certo.

### Encontrando o caminho de aprendizado certo

Primeiro, pesquisei na internet a melhor forma para aprender C++. Havia vários conteúdos e vídeos gratuitos disponíveis, espalhados por muitos resultados de busca. Comecei assintindo alguns tutoriais, mas logo desisti. Assistir tutoriais parecia muito lento porque eu já sabia programar.

Eventualmente, encontrei um livro: **"A Tour of C++"** de Bjarne Stroustrup. Eu nunca li um livro para aprender algo. Então pensei, por que não tentar? Agora eu tinha dois desafios: Aprender uma nova linguagem de programação e ler um livro. Esses dois foram suficientes para ativar meu cérebro e me deixar animado com o que viria a seguir.

### Aprendendo novos conceitos

No livro tinha várias coisas que eu não sabia. Tinha um conceito meio confuso sobre ponteiros e referências. Quando finalmente entendi, foi muito satisfatório aprender esse conceito novo.

Também aprendi que poderíamos criar nossos próprios operadores, por exemplo, eu poderia escrever minha própria implementação para o operador `++` para a classe `TrafficLight`:

```cpp
TrafficLight& operator++(TrafficLight& t) {
  switch (t) {
    case TrafficLight::green: return t=TrafficLight::yellow;
    case TrafficLight::yellow: return t=TrafficLight::red;
    case TrafficLight::red: return t=TrafficLight::green;
  }
}

TrafficLight next = ++light; // next becomes TrafficLight::green
```

Muito louco.

## Ta, e agora?

Depois de ler o livro, fiquei tipo: ta, e agora? Ainda não sentia que entendia completamente a linguagem. Como chego a um bom nível de compreensão? Preciso praticar. Não sabia exatamente como praticar.

Eu tinha o código-fonte do jogo para praticar. Mas ainda era muito difícil. Sempre ouvi falar do LeetCode, mas nunca tentei. Me pareceu uma boa coisa para praticar.

Depois de muitos de loops e ifs, consegui resolver alguns Problemas Fáceis. E quando eu enviava minha solução, eu também olhava as soluções dos outros, e nossa, elas eram muito curtas! Eu com certeza tava fazendo algo errado. Foi um pesadelo para mim resolver, muito difícil. Agora havia outra questão: Como eu poderia resolver os problemas do LeetCode mais facilmente? Eles pareciam complicados demais. Foi aí que descobri DSA.

### Descobrindo DSA

DSA significa Estruturas de Dados e Algoritmos (Data Structures and Algorithms), algo que se aprenderia na faculdade. Eu pulei a faculdade. Então esse era mais um desafio que eu poderia enfrentar: Aprender DSA.

Vi que um dos tópicos era "Árvores Binárias", algo que eu sempre ouvi falar, mas nunca procurei saber. Assisti a um [vídeo do YouTube](https://www.youtube.com/watch?v=fAAZixBzIAI), Binary Tree Algorithms do freeCodeCamp.org por AlvinTheProgrammer. Foi interessante, era um tópico sobre programação que eu não conhecia e que provavelmente não prestaria atenção se estivesse em uma sala de aula.

Foi um bom exercício pra praticar C++. Eu consegui meu primeiro erro de segfault.

## Quebrando o loop

Aprender uma nova linguagem de programação leva tempo. Primeiro, precisei encontrar meu propósito: entender um código-fonte antigo escrito em C++. Para aprender C++, eu precisava de uma introdução rápida e abrangente, o livro "A Tour of C++" me deu exatamente isso. E depois preciso praticar.

Vou praticar enquanto aprendo DSA. [Encontrei este curso na Udemy](https://www.udemy.com/course/data-structures-algorithms-cpp/) de Scott Barrett, as aulas são bem apresentadas, os exercícios são divertidos e desafiadores de fazer. Depois que me cansar disso, vou iniciar um projeto pessoal para poder construir algo do 0 ao 1. Tenho certeza que depois disso vou ter um bom nível de entendimento da linguagem.

Estou empolgado e amando programação de novo. Cada etapa para aprender C++ e DSA está sendo muito divertida. **Consegui resgatar meu hobby!**

Essa foi a primeira vez que resolvi um problema sozinho após aprender o algoritmo da "Tartaruga e a Lebre" (Tortoise and the Hare). A satisfação de resolver esse problema foi muit recompensadora!

![Solução no Quadro Branco para Encontrar o K-ésimo Nó do Fim em uma Lista Ligada](/img/blog/learning-a-new-programming-language/01.png)

[pedroni/learning-cpp](https://github.com/pedroni/learning-cpp)
