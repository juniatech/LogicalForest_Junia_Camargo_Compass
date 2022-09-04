<a href="https://compass.uol">
    <img src="https://compass.uol/etc.clientlibs/compass/clientlibs/clientlib-react/resources/static/media/logo.d35fe3b1.svg" alt="Compass.UOL logo" title="Compass.UOL" align="right" height="25" />
</a>

# 📗LogicalForest
![image](https://user-images.githubusercontent.com/95503135/186298686-d428e51f-b91a-4f93-97e3-c5556fe06b68.png)

## INTRODUÇÃO: 
Nessa Sprint, foram abordados diversos assuntos voltados a Javascript e versionamento de código. Estudamos e aprendemos na prática como utilizar Git para versionamento de arquivos, GitHub, Linguagem de programação JavaScript, conhecimento de [KOANS](https://github.com/juniatech/LogicalForest_Junia_Camargo_Compass/tree/develop/JAVASCRIPT_KOANS) para aprendizado e refatoração de testes automatizados, TDD (Test Driven Development) para Desenvolvimento Guiado por Testes, e as bibliotecas Mocha e Chai.

## ESCOPO:
Neste Challenge tivemos vários desafios, como os [15 Mini-Projetos](https://github.com/juniatech/LogicalForest_Junia_Camargo_Compass/tree/develop/Mini-Projetos) em Javascript para fixação do conhecimento de Variáveis, Constantes, Tipos, Objetos, Arrays, Funções, Operadores, Condicionais, Laços de repetição, entre outros, para que pudéssemos exercitar o raciocínio lógico de programação e aprender com mais facilidade a utilizar as outras ferramentas abordadas durante a Sprint, para desenvolvimento dos testes de uma [Calculadora](https://github.com/juniatech/LogicalForest_Junia_Camargo_Compass/blob/develop/MOCHA_CHAI/src/Calculadora.js), com o uso das bibliotecas Mocha e Chai.

Os testes realizados por mim, abordam os seguintes temas: :

* TESTES DE SOMA;
* TESTES DE SUBTRAÇÃO;
* TESTES DE DIVISÃO;
* TESTES DE PORCENTAGEM;
* TESTES DE MULTIPLICAÇÃO;
* TESTES DE POTÊNCIA SIMPLES;
* TESTES DE POTÊNCIA FRACIONÁRIOS;
* TESTES DE POTÊNCIA - EXPOENTES COM SINAIS;
* TESTES DE POTÊNCIA - BASES COM SINAL;
* TESTES DE POTÊNCIA - BASE NEGATIVA COM EXPOENTE FRACIONÁRIO;
* TESTES DE LOGARITMO;
* TESTES DE SENO;
* TESTES DE COSSENO;
* TESTES DE COSSENO HIPERBÓLICO;
* TESTES COM PI;
* TESTES QUE RETORNA O MAIOR NÚMERO;
* TESTES DE TANGENTE HIPERBÓLICA.

## CASOS DE TESTE:

Os [TESTES](https://github.com/juniatech/LogicalForest_Junia_Camargo_Compass/blob/develop/MOCHA_CHAI/test/calculadora.spec.js) foram realizados de acordo com a documentação, utilizando calculos matemáticos e funções disponíveis que a Linguagem Javascript proporciona.

<h1>
   <img width="665px" r src="https://media.giphy.com/media/Wvsb5LC8OApRxBjgd0/giphy.gif">
</h1>

### TESTES DE SOMA:
* CT01 - SOMA SIMPLES: Deve somar 4 e 5 resultando em 9;
* CT02 - NÚMEROS NEGATIVOS: Deve somar -4 e 5 resultando em 1;
* CT03 - TESTE DE ERRO: Deve somar 2 e 2 e não resultar em 5;
* CT04 - PONTO FLUTUANTE: Deve somar 2.2 e 4 e resultar em 6.2;

### TESTES DE SUBTRAÇÃO:
* CT05 - SUBTRAÇÃO SIMPLES: Deve subtrair 4 e 5 resultando em -1;
* CT06 - NÚMEROS NEGATIVOS: Deve subtrair -4 e 5 resultando em -9;
* CT07 - TESTE DE ERRO: Deve subtrair 2 por 2 e não resultar em 1;
* CT08 - PONTO FLUTUANTE: Deve subtrair 4.5 por 2 e resultar em 4.5;

### TESTES DE DIVISÃO:
* CT09 - DIVISÃO SIMPLES: Deve dividir 8 por 4 resultar em 2;
* CT10 - NÚMEROS NEGATIVOS: Deve dividir 4 por 5 resultar em -1;
* CT11 - TESTE DE ERRO: Deve tentar dividir 0 por 0 e trazer um resultado(INDEFINIDO);
* CT12 - PONTO FLUTUANTE: Deve dividir 5 por 2.5 e resultar em 2;

### TESTES DE PORCENTAGEM:
* CT13 - PORCENTAGEM SIMPLES: Deve trazer o resultado 15 sobre 15% de 100;
* CT14 - PONTO FLUTUANTE: Deve trazer o resultado de 45% de 600;
* CT15 - NÚMEROS NEGATIVOS: Deve trazer o resultado de 25% de -100;

### TESTES DE MULTIPLICAÇÃO:
* CT16 - MULTIPLICAÇÃO SIMPLES: Deve multiplicar 5 por 6 resultar em 30;
* CT17 - PONTO FLUTUANTE: Deve multiplicar 5 por 0.8 resultar em 4;
* CT18 - NÚMEROS NEGATIVOS: Deve multiplicar -5 por 0.8 resultar em -4;
* CT19 - TESTE DE ERRO: Deve multiplicar 2 por 2 e não resultar em 5;

### TESTES DE POTÊNCIA SIMPLES:
* CT20 - POTÊNCIA SIMPLES: Deve fazer a potência de 2^4 e resultar em 16;
* CT21 - TESTE DE ERRO: Deve fazer a potência de 2^2 e não resultar em 5;

### TESTES DE POTÊNCIA FRACIONÁRIOS:
* CT22 - RAIZ QUADRADA DE 4: Deve fazer a potência de 4^0.5 e retornar 2;
* CT23 - RAIZ CUBICA DE 8: Deve fazer a potência de 8^1/3 retornar 2;
* CT24 - RAIZ QUADRADA DE 2: Deve fazer a potência de 2^0.5 retornar 1.4142135623730951;
* CT25 - RAIZ QUADRADA DE 4: Deve fazer a potência de 4^0.5 retornar 2

### TESTES DE POTÊNCIA - EXPOENTES COM SINAIS:
* CT26 - POTÊNCIA DE 7^-2: Deve retornar 0.020408163265306124;
* CT27 - POTÊNCIA DE 8^-1/3: Deve retornar 0.5

### TESTES DE POTÊNCIA - BASES COM SINAL:
* CT28 - POTÊNCIA DE -7^2: Deve retornar 49 (quadrados sempre são positivos);
* CT29 - POTÊNCIA DE -7^3: Deve retornar -343 (cubos podem ser negativos conforme a base);
* CT30 - POTÊNCIA DE -7^0.5: Deve retornar NaN (números negativos não tem uma raiz quadrada real);

### TESTES DE POTÊNCIA - BASE NEGATIVA COM EXPOENTE FRACIONÁRIO:
* CT31 - POTÊNCIA DE -7^1/3: Deve sempre retornar NaN

### TESTES DE LOGARITMO:
(expoente a que se deve elevar um número tomado como base para se obter outro número.)
* CT32 - TESTE DE ERRO: Deve fazer log(-1) e retornar NaN;
* CT33 - PONTO FLUTUANTE: Deve fazer log(10) e retornar 2.302585092994046;
* CT34 - -INFINITY: Deve fazer log(0) e retornar -Infinity;
* CT35 - ZERO: Deve fazer log(1) e retornar ZERO;

### TESTES DE SENO: 
(Seno é a razão entre o cateto oposto e a hipotenusa de um triângulo retângulo, ou seja, trata-se de uma razão trigonométrica.)
* CT36 - SENO DE ZERO: Deve fazer Math.sin(0) e resultar em zero;
* CT37 - PONTO FLUTUANTE: Deve fazer Math.sin(1) e resultar em 0.8414709848078965;
* CT38 - SENO DE PI/2: Deve fazer Math.sin(Math.PI / 2) e resultar em 1;

### TESTES DE COSSENO: 
(O cosseno de um ângulo é a razão entre a medida do cateto adjacente e a medida da hipotenusa.)
* CT39 - COSSENO DE ZERO: Deve resultar em 1;
* CT40 - COSSENO DE 1: Deve resultar em 0.5403023058681398;
* CT41 - COSSENO DE PI: Deve resultar em 1;
* CT42 - COSSENO DE 2 x PI: Deve resultar em 1;

### TESTES DE COSSENO HIPERBÓLICO:
(O cosseno hiperbólico é uma função hiperbólica, assim chamadas pois a parametrização de curvas em cosh e senh originam hipérboles, enquanto que as funções trigonométricas dão origem a circunferências.)
* CT43 - Math.cosh(0): Deve retornar 1;
* CT44 - Math.cosh(1): Deve retornar 1.5430806348152437;
* CT45 - Math.cosh(-1): Deve retornar 1.5430806348152437;

### TESTES COM PI:
(Deve calcular a circunferência de um círculo com um dado raio)
* CT46 - PI(2 * Math.PI * raio(1)): Deve retornar 6.283185307179586;

### TESTES QUE RETORNA O MAIOR NÚMERO:
* CT47 - NÚMEROS INTEIROS: Deve comparar 10 e 20 retornar 20
* CT48 - NÚMEROS INTEIROS NEGATIVOS: Deve comparar -10 e -20 retornar -10;
* CT49 - NÚMEROS INTEIROS E NEGATIVOS: Deve comparar -10 e 20 e retornar -20;

### TESTES DE TANGENTE HIPERBÓLICA:
(A tangente hiperbólica é uma função hiperbólica. É obtida a partir da razão entre o seno hiperbólico e o cosseno hiperbólico, de forma similar à relação trigonométrica da tangente)
* CT50 - Math.tanh(0): Deve resultar em ZERO;
* CT51 - Math.tanh(Infinity): Deve resultar me 1;
* CT52 - Math.tanh(1): Deve resultar em 0.7615941559557649. 

## ESTRATÉGIA DE TESTE:

Através das bibliotecas Mocha e Chai pudemos realizar o testes de TDD (que se baseia na aplicação de pequenos ciclos de repetição).

## FERRAMENTAS E TECNOLOGIAS UTILIZADAS:
* [IDE VSCode](https://code.visualstudio.com/download)
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [NodeJS](https://nodejs.org/en/download/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [KOANS](https://github.com/mrdavidlaing/javascript-koans)

## CONCLUSÃO: 
A importancia dos testes TDD, o uso das ferramentas, tecnologias, documentação da linguagem Javascript, bibliotecas, desenvolvimento de Lógica de programação, aprendizado na prática, e com a mão na massa, trouxe ainda mais entendimento das Sprints anteriores, e coesão de conteúdo, assim como desenvolvimento de novas habilidades de analise em metodologias ágeis. 

## REFERÊNCIAS:
* Compass.UOL 
* Rafaella Ballerini - Git e GitHub;
* Canal Dev Aprender - JavaScript; 
* GitHub/mrdavidlaing - KOANS
* Canal The Git Guild - README.md
* MDN_WEB_DOCS - Documentação Javascript

## CREDITOS:
* Aos Colegas de trabalho e estudos e a Scrum Master Larissa por todo apoio.

