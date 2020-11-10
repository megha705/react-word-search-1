import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import './styles.css';

let concepts = [
  {
    id: 1,
    title: 'Conceitos Básicos',
    text: [
      { 
        text: 'JavaScript é uma linguagem de programação criada em 1995 por Brendan Eich enquanto trabalhava na Netscape Communications Corporation. Originalmente projetada para rodar no Netscape Navigator, ela tinha o propósito de oferecer aos desenvolvedores formas de tornar determinados processos de páginas web mais dinâmicos, tornando seu uso mais agradável. Um ano depois de seu lançamento, a Microsoft portou a linguagem para seu navegador, o que ajudou a consolidar a linguagem e torná-la uma das tecnologias mais importantes e utilizadas na internet.',
        type: 'text'
      },
      { 
        text: 'Embora ela tenha esse nome, não se deve confundir JavaScript com Java, linguagem de programação desenvolvida pela Sun Microsystems: antes, a linguagem criada pela Netscape recebera nomes como LiveScript e Mocha, mas, para aproveitar o grande sucesso da linguagem da Sun no mercado, os executivos da Netscape resolveram mudar o nome de sua linguagem para o atual. Entretanto, Java e Java Script são completamente diferentes e possuem propósitos diversos.',
        type: 'text'
      },
      { 
        text: [
          '<!DOCTYPE html>',
          '<html>',
          '<body>',
          ' ',
          '<h1>What Can JavaScript Do?</h1>',
          ' ',
          '<button type="button"',
          'onclick="document.getElementById("demo").innerHTML = "Hello JavaScript"">',
          'Click Me!</button>',
          ' ',
          '</body>',
          '</html>'
        ],
        type: 'code'
      },
      {
        text: 'Mas como o JavaScript funciona? Ao invés de rodar remotamente em servidores na internet, o JavaScript tem como característica rodar programas localmente - do lado do cliente, como se costuma dizer em TI. Assim sendo, o JavaScript fornece às páginas web a possibilidade de programação, transformação e processamento de dados enviados e recebidos, interagindo com a marcação e exibição de conteúdo da linguagem HTML e com a estilização desse conteúdo proporcionada pelo CSS nessas páginas.',
        type: 'text'
      },
      {
        text: 'Scripts de código escritos nessa linguagem e executados em um navegador permitem, por exemplo, atualizar parte do conteúdo de uma página web sem carregá-la totalmente após preencher um formulário, através de técnicas de programação como o AJAX. Isso permite a criação de uma infinidade de softwares completos e totalmente funcionais para diversas finalidades. O Google Docs jamais funcionaria sem a existência do JavaScript, por exemplo.',
        type: 'text'
      }
    ],
    words: [
      'cliente',
      'navegador',
      'html',
      'linguagem',
      'web',
      'javascript'
    ]
  },
  {
    id: 2,
    title: 'Variáveis',
    text: [
      { 
        text: 'Em JavaScript podemos declarar variáveis de duas formas atualmente, com let ou var, sendo let a forma recomendada. let permite declarar variáveis que existem apenas no escopo no qual desejamos utilizá-las. Esse comportamento é diferente quando utilizamos var, que cria variáveis globais e que podem ser acessadas em qualquer local no arquivo ou função onde foram declaradas.',
        type: 'text'
      },
      {
        text: 'Visão Geral',
        type: 'title'
      },
      { 
        text: 'É importante saber diferenciar entre o comportamento de let e var, do contrário erros difíceis de serem rastreados podem acontecer. Supondo que desejamos incluir em um script o cálculo da média de preços de alguns produtos, dada uma determinada condição. Considere que ao fazer isso o programador nomeie e variável media dentro do if como total por engano, assim como no código abaixo.',
        type: 'text'
      },
      { 
        text: [
          'var precos = [ 1200.8, 345.8, 2543.98 ];',
          ' ',
          'var total = // Total dos valores produtos no array precos',
          ' ',
          'var incluirMedia = true;',
          '   ',
          'if(incluirMedia) {',
          '  var total = total/precos.length;',
          '  // Continuo a lógica',
          '}'
        ],
        type: 'code'
      },
      {
        text: 'Uma vez que declaramos ambas as variáveis com var, tendo elas o mesmo identificador, total, a lógica de execução do script estará errada porque para o interpretador ambas são as mesma variável. Dessa forma, o valor atribuído à variável total utilizada dentro do if sobrescreverá aquele dado a ela em sua declaração, algumas linhas acima.',
        type: 'text'
      },
      {
        text: 'Ao substituirmos a palavra reservada var por let dentro do if, total será considerada uma nova variável, impedindo que o valor atribuído à variável total declarada acima seja sobrescrito. Nesse novo cenário teremos um erro de execução, protegendo o programa de falhar silenciosamente:',
        type: 'text'
      },
      {
        text: [
          'let total = total/precos.length;',
          '  ^',
          'ReferenceError: total is not defined'
        ],
        type: 'code'
      }
    ],
      words: [
      'let',
      'var',
      'identificador',
      'script'
    ]
  },
  {
    id: 3,
    title: 'Loops',
    text: [
      {
        text: 'Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos em uma direção e Y passos em outra; por exemplo, a ideia "vá 5 passos para leste" pode ser expressa em um laço desta forma:',
        type: 'text'
      },
      {
        text: [
          'var passo;',
          'for (passo = 0; passo < 5; passo++) {',
          '  // Executa 5 vezes, com os valores de passos de 0 a 4.',
          '  console.log("Ande um passo para o leste");',
          '}'
        ],
        type: 'code'
      },
      {
        text: 'Existem várias formas diferentes de laços, mas eles essencialmente fazem a mesma coisa: repetir uma ação múltiplas vezes ( inclusive você poderá repetir 0 vezes). Os vários mecanismos diferentes de laços oferecem diferentes formas de determinar quando este irá começar ou terminar. Há várias situações em que é mais fácil resolver um problema utilizando um determinado tipo de laço do que outros.',
        type: 'text'
      },
      {
        text: 'Declaração for',
        type: 'title'
      },
      {
        text: 'Um laço for é repetido até que a condição especificada seja falsa. O laço for no JavaScript é similar ao Java e C. Uma declaração for é feita da seguinte maneira:',
        type: 'text'
      },
      {
        text: [
          'for ([expressaoInicial]; [condicao]; [incremento])',
          '  declaracao'
        ],
        type: 'code'
      },
      {
        text: 'Declaração do...while',
        type: 'title'
      },
      {
        text: 'A instrução do...while repetirá até que a condição especificada seja falsa.',
        type: 'text'
      },
      {
        text: [
          'do',
          '  declaracao',
          'while (condicao);'
        ],
        type: 'code'
      },
      {
        text: 'A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco ({ ... }) para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.',
        type: 'text'
      },
      {
        text: 'Declaração while',
        type: 'title'
      },
      {
        text: 'Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira. Segue uma declaração while: ',
        type: 'text'
      },
      {
        text: [
          'while (condicao)',
          '  declaracao'
        ],
        type: 'code'
      },
      {
        text: 'Se a condição se tornar falsa,  a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.',
        type: 'text'
      },
      {
        text: 'O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.',
        type: 'text'
      }
    ],
    words: [  
      'while',
      'repetir',
      'dowhile',
      'for',
      'lacos'
    ]
  },
  {
    id: 4,
    title: 'Condicionais ',
    text: [
      {
        text: 'A estrutura condicional if permite ao JavaScript executar um trecho de código somente se uma determinada condição for verdadeira.',
        type: 'text'
      },
      {
        text: 'Ela pode ser escrita das seguintes formas:',
        type: 'text'
      },
      {
        text: [
          'if ( condicao ) {',
          ' // códigos que serão executados',
          ' // códigos que serão executados',
          ' // códigos que serão executados',
          '}'
        ],
        type: 'code'
      },
      {
        text: 'Quando há só uma linha de código para ser executado não precisamos usar { e }, fica opcional:',
        type: 'text'
      },
      {
        text: [
          'if ( condicao)',
          ' // código que vai ser executado;'
        ],
        type: 'code'
      },
      {
        text: 'Else',
        type: 'title'
      },
      {
        text: 'Existem casos em que precisamos executar um código caso uma condição seja verdadeira ou um outro, caso ela seja falsa. Para isso utilizamos a palavra-chave else.',
        type: 'text'
      },
      {
        text: [
          'if ( condicao )',
          ' // se condição for verdadeira executa',
          'else',
          ' // se condição for falsa executa'
        ],
        type: 'code'
      },
      {
        text: 'Else If',
        type: 'title'
      },
      {
        text: 'Como vimos, utilizar if e else permite ao JavaScript executar um código dentre duas opções. Porém, há casos em que devemos testar uma nova condição antes de executar o trecho de código alternativo. Uma forma de escrever essa verificação é utilizando else if.',
        type: 'text'
      },
      {
        text: [
          'var preco = 70;',
          'if ( preco > 100 ) {',
          ' console.log("Desconto de 10% liberado");',
          '} else if ( preco > 50 ) {',
          ' console.log("Desconto de 5% liberado");',
          '} else {',
          ' console.log("Nenhum desconto foi liberado");',
          '}'
        ],
        type: 'code'
      }
      
    ],
    words: [
      'condicao',
      'if',
      'decidir',
      'else'
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