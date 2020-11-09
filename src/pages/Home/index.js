import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import './styles.css';

let concepts = [
  {
    id: 1,
    title: 'Conceitos Básicos',
    text: 'JavaScript é uma linguagem de script orientada a objetos e que funciona entre plataformas. É uma linguagem pequena e simples. Ela pode ser rodada num ambiente anfitrião (por exemplo, o browser),  o código JavaScript pode estar ligado a objetos do ambiente e  fornece controle programático sobre os mesmos.' +
    'O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos. O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos. O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.O JavaScript contém uma biblioteca padrão de objetos, tais como Array, Date, Math, e um conjunto fundamental de elementos da linguagem tais como operadores, estruturas de controle, e statements. Os elementos básicos do JavaScript podem ser extendidos com objetos adicionais para uma variedade de propósitos.',
    words: [
      'array',
      'date',
      'math',
      'objetos',
      'javascript'
    ]
  },
  {
    id: 2,
    title: 'Variáveis',
    text: 'Variável é um dos conceitos mais importantes no estudo de programação, independente da plataforma ou linguagem utilizada. Uma variável referencia a um espaço na memória do computador utilizado para guardar informações que serão usadas em seus programas.',
    words: [
      'memoria',
      'informacoes',
      'programas'
    ]
  },
  {
    id: 3,
    title: 'Loops',
    text: 'Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma'+
    'Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.',
    words: [  
      'lacos',
      'repetir',
      'problema'
    ]
  },
  {
    id: 4,
    title: 'Condicionais ',
    text: 'A estrutura condicional permite avaliar uma condição e, a partir dela, executar diferentes linhas de código. Condicao é a estrutura de condição a ser verificada para decidir se as linhas do bloco de código serão executadas ou não.',
    words: [
      'condicao',
      'executar',
      'decidir'
    ]
  },
]

export default function Home() {
  return (
    <div className="container">
      <Header title="Bem Vindo !" />
      <div className="buttons">
        {concepts.map(concept => {
          return <MainButton concept={concept} />
        })}
      </div>
      <Footer className="container-footer" />
    </div>
  )
} 