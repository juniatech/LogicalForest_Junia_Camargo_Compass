import assert from 'assert'
import chai from 'chai' 
import { callbackify } from 'util'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

// TESTES DE SOMA
describe('TESTES DE SOMA:', () => {
    
    it('SOMA SIMPLES: Deve somar 4 e 5 resultando em 9', () => { 
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('NÚMEROS NEGATIVOS: Deve somar -4 e 5 resultando em 1', () => { 
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    it('TESTE DE ERRO: Deve somar 2 e 2 e não resultar em 5', () => { 
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(5)
    })
    it('PONTO FLUTUANTE: Deve somar 2.2 e 4 e resultar em 6.2', () => { 
        let resultado = Calculadora.soma(2.2, 4)
        expect(resultado).to.be.eq(6.2)
    })
})

// TESTES DE SUBTRAÇÃO
describe('TESTES DE SUBTRAÇÃO', () => {
    
    it('SUBTRAÇÃO SIMPLES: Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.subtracao(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('NÚMEROS NEGATIVOS: Deve subtrair -4 e 5 resultando em -9', () => {
        let resultado = Calculadora.subtracao(-4, 5)
        expect(resultado).to.be.eq(-9)
    })
    it('TESTE DE ERRO: Deve subtrair 2 por 2 e não resultar em 1', () => {
        let resultado = Calculadora.subtracao(2, 2)
        expect(resultado).not.be.eq(1)
    })
    it('PONTO FLUTUANTE: Deve subtrair 4.5 por 2 e resultar em 2.5', () => {
        let resultado = Calculadora.subtracao(4.5, 2)
        expect(resultado).to.be.eq(2.5)
    })
})

//TESTES DE DIVISÃO
describe('TESTES DE DIVISÃO', () => {
    
    it('DIVISÃO SIMPLES: Deve dividir 8 por 4 resultar em 2', () => {
        let resultado = Calculadora.divisao(8, 4)
        expect(resultado).to.be.eq(2)
    })
    it('NUMEROS NEGATIVOS: Deve dividir -10 por 2 resultar em -5', () => {
        let resultado = Calculadora.divisao(-10, 2)
        expect(resultado).to.be.eq(-5)
    })
    it('TESTE DE ERRO: Deve tentar dividir 0 por 0 e trazer um resultado (INDEFINIDO)', () => {
        let resultado = Calculadora.divisao(0, 0)
        expect(resultado).not.be.eq(resultado)
    })
    it('PONTO FLUTUANTE: Deve dividir 5 por 2.5 e resultar em 2,4761904761904762', () => {
        let resultado = Calculadora.divisao(5, 2.5)
        expect(resultado).to.be.eq(2)
    })
})

// TESTES DE PORCENTAGEM
describe('TESTES DE PORCENTAGEM:', () => {
    
    it('PORCENTAGEM SIMPLES: Deve trazer o resultado 15 sobre 15% de 100', () => {
        let resultado = Calculadora.porcentagem(15, 100)
        expect(resultado).to.be.eq(15)
    })
    it('PONTO FLUTUANTE: Deve trazer o resultado de 45% de 600', () => {
        let resultado = Calculadora.porcentagem(45.5, 600) //
        expect(resultado).to.be.eq(273)
    })
    it('NÚMEROS NEGATIVOS: Deve trazer o resultado de 25% de -100', () => {
        let resultado = Calculadora.porcentagem(25, -100) 
        expect(resultado).to.be.eq(-25)
    })
})

// TESTES DE MULTIPLICAÇÃO
describe('TESTES DE MULTIPLICAÇÃO', () => {
    
    it('MULTIPLICAÇÃO SIMPLES: Deve multiplicar 5 por 6 resultar em 30', () => {
        let resultado = Calculadora.multiplicacao(5, 6)
        expect(resultado).to.be.eq(30)
    })
    it('PONTO FLUTUANTE: Deve multiplicar 5 por 0.8 resultar em 4', () => {
        let resultado = Calculadora.multiplicacao(5, 0.8)
        expect(resultado).to.be.eq(4)
    })
    it('NÚMEROS NEGATIVOS: Deve multiplicar -5 por 0.8 resultar em -4', () => {
        let resultado = Calculadora.multiplicacao(-5, 0.8)
        expect(resultado).to.be.eq(-4)
    })
    it('TESTE DE ERRO: Deve multiplicar 2 por 2 e não resultar em 5', () => {
        let resultado = Calculadora.multiplicacao(2, 2)
        expect(resultado).not.be.eq(5)
    })

})

// TESTES DE POTÊNCIA SIMPLES
describe('TESTES DE POTÊNCIA SIMPLES', () => {
    
    it('POTENCIA SIMPLES: Deve fazer a potência de 2^4 e resultar em 16', () => {
        let resultado = Calculadora.potencia(2, 4)
        expect(resultado).to.be.eq(16)
    })
    it('TESTE DE ERRO: Deve fazer a potência de 2^2 e não resultar em 5', () => {
        let resultado = Calculadora.potencia(2, 2)
        expect(resultado).not.be.eq(5)
    })
})

// TESTES DE POTÊNCIA FRACIONÁRIOS
describe('TESTES DE POTÊNCIA FRACIONÁRIOS', () => {
    
    it('RAIZ QUADRADA DE 4: Deve fazer a potência de 4^0.5 e retornar 2', () => {
        let resultado = Calculadora.potencia(4, 0.5);
        expect(resultado).to.be.eq(2);
    })
    it('RAIZ CUBICA DE 8: Deve fazer a potência de 8^1/3 retornar 2', () => {
        let resultado = Calculadora.potencia(8, 1/3);
        expect(resultado).to.be.eq(2);
    })
    it('RAIZ QUADRADA DE 2: Deve fazer a potência de 2^0.5 retornar 1.4142135623730951', () => {
        let resultado = Calculadora.potencia(2, 0.5);
        expect(resultado).to.be.eq(1.4142135623730951);
    })
    it('RAIZ QUADRADA DE 4: Deve fazer a potência de 4^0.5 retornar 2', () => {
        let resultado = Calculadora.potencia(4, 0.5);
        expect(resultado).to.be.eq(2);
    })
})

// TESTES DE POTÊNCIA - EXPOENTES COM SINAIS
describe('TESTES DE POTÊNCIA - EXPOENTES COM SINAIS', () => {
    
    it('POTÊNCIA DE 7^-2: Deve retornar 0.020408163265306124', () => {
        let resultado = Calculadora.potencia(7, -2); 
        expect(resultado).to.be.eq(0.020408163265306124);
    })
    it('POTÊNCIA DE 8^-1/3: Deve retornar 0.5', () => {
        let resultado = Calculadora.potencia(8, -1/3); 
        expect(resultado).to.be.eq(0.5);
    })
})

// TESTES DE POTÊNCIA - BASES COM SINAL
describe('TESTES DE POTÊNCIA - BASES COM SINAL', () => {
    
    it('POTÊNCIA DE -7^2: Deve retornar 49 (quadrados sempre são positivos)', () => {
        let resultado = Calculadora.potencia(-7, 2);
        expect(resultado).to.be.eq(49);
    })
    it('POTÊNCIA DE -7^3: Deve retornar -343 (cubos podem ser negativos conforme a base)', () => {
        let resultado = Calculadora.potencia(-7, 3);
        expect(resultado).to.be.eq(-343);
    })
    it('POTÊNCIA DE -7^0.5: Deve retornar NaN (números negativos não tem uma raiz quadrada real)', () => {
        let resultado = Calculadora.potencia(-7, 0.5);
        expect(resultado.toString()).to.be.eq('NaN');
    })
})

// TESTES DE POTÊNCIA - BASE NEGATIVA COM EXPOENTE FRACIONÁRIO
describe('TESTES DE POTÊNCIA - BASE NEGATIVA COM EXPOENTE FRACIONÁRIO', () => {
    it('POTÊNCIA DE -7^1/3: Deve sempre retornar NaN', () => {
        let resultado = Calculadora.potencia(-7, 1/3);
        expect(resultado.toString()).to.be.eq('NaN');
    })
})

// TESTES DE LOGARITMO (expoente a que se deve elevar um número tomado como 
// base para se obter outro número.)
describe('TESTES DE LOGARITMO', () => {
    
    it('TESTE DE ERRO: Deve fazer Math.log(-1) e retornar NaN', () => {
        let resultado = Calculadora.logaritmo(-1);
        expect(resultado.toString()).to.be.eq('NaN');
    })
    it('PONTO FLUTUANTE: Deve fazer Math.log(10) e retornar 2.302585092994046', () => {
        let resultado = Calculadora.logaritmo(10);
        expect(resultado).to.be.eq(2.302585092994046);
    })
    it('INDEFINIDO: Deve fazer Math.log(0) e retornar -Infinity', () => {
        let resultado = Calculadora.logaritmo(0);
        expect(resultado).to.be.eq(-Infinity);
    })
    it('ZERO: Deve fazer Math.log(1) e retornar ZERO', () => {
        let resultado = Calculadora.logaritmo(1);
        expect(resultado).to.be.eq(0);
    })
})

// TESTES DE SENO (Seno é a razão entre o cateto oposto e a hipotenusa de um 
// triângulo retângulo, ou seja, trata-se de uma razão trigonométrica.)
describe('TESTES DE SENO', () => {
    
    it('SENO DE ZERO: Deve fazer Math.sin(0) e resultar em zero', () => {
      let resultado = Calculadora.seno(0);
      expect(resultado).to.be.eq(0);  
    })
    it('PONTO FLUTUANTE: Deve fazer Math.sin(1) e resultar em 0.8414709848078965', () => {
        let resultado = Calculadora.seno(1);
        expect(resultado).to.be.eq(0.8414709848078965);  
    })
    it('SENO DE PI/2: Deve fazer Math.sin(Math.PI / 2) e resultar em 1', () => {
        let resultado = Calculadora.seno(Math.PI / 2);
        expect(resultado).to.be.eq(1);  
    })
})

// TESTES DE COSSENO (O cosseno de um ângulo é a razão entre a medida do cateto 
// adjacente e a medida da hipotenusa.)
describe('TESTES DE COSSENO', () => {
    
    it('COSSENO DE ZERO: Deve resultar em 1', () => {
        let resultado = Calculadora.cosseno(0);
        expect(resultado).to.be.eq(1);
    })
    it('COSSENO DE 1: Deve resultar em 0.5403023058681398', () => {
        let resultado = Calculadora.cosseno(1);
        expect(resultado).to.be.eq(0.5403023058681398);
    })
    it('COSSENO DE PI: Deve resultar em 1', () => {
        let resultado = Calculadora.cosseno(Math.PI);
        expect(resultado).to.be.eq(-1);
    })
    it('COSSENO DE 2 x PI: Deve resultar em 1', () => {
        let resultado = Calculadora.cosseno(2 * Math.PI);
        expect(resultado).to.be.eq(1);
    })
})

// TESTES DE COSSENOS HIPERBOLICO (O cosseno hiperbólico é uma função 
// hiperbólica, assim chamadas pois a parametrização de curvas em cosh e senh 
// originam hipérboles, enquanto que as funções trigonométricas dão origem a circunferências.)
describe('TESTES DE COSSENOS HIPERBOLICO', () => {
    
    it('Math.cosh(0): Deve retornar 1', () => {
        let resultado = Calculadora.cosHiperbolico(0);
        expect(resultado).to.be.eq(1);
    })
    it('Math.cosh(1): Deve retornar 1.5430806348152437', () => {
        let resultado = Calculadora.cosHiperbolico(1);
        expect(resultado).to.be.eq(1.5430806348152437);
    })
    it('Math.cosh(-1): Deve retornar 1.5430806348152437', () => {
        let resultado = Calculadora.cosHiperbolico(-1);
        expect(resultado).to.be.eq(1.5430806348152437);
    })
})

// TESTES COM PI (Deve calcular a circunferência de um círculo com um dado raio)
describe('Testes com PI', () => {
    
    it('PI(2 * Math.PI * raio(1)): Deve retornar 6.283185307179586', () => {
        let resultado = Calculadora.PI(1);
        expect(resultado).to.be.eq(6.283185307179586);
    })
})

// TESTES QUE RETORNA O MAIOR NUMERO 
describe('TESTES QUE RETORNA O MAIOR NUMERO ', () => {
    
    it('NUMEROS INTEIROS: Deve comparar 10 e 20 retornar 20', () => {
        let resultado = Calculadora.max(10, 20);
        expect(resultado).to.be.eq(20);
    })
    it('NUMEROS INTEIROS NEGATIVOS: Deve comparar -10 e -20 retornar -10', () => {
        let resultado = Calculadora.max(-10, -20);
        expect(resultado).to.be.eq(-10);
    })
    it('NUMEROS INTEIROS E NEGATIVOS: Deve comparar -10 e 20 e retornar 20', () => {
        let resultado = Calculadora.max(-10, 20);
        expect(resultado).to.be.eq(20);
    })
})

// TESTES DE TANGENTE HIPERBOLICA (A tangente hiperbólica é uma função
// hiperbólica. É obtida a partir da razão entre o seno hiperbólico e o cosseno 
//hiperbólico, de forma similar à relação trigonométrica da tangente.)
describe('TESTES DE TANGENTE HIPERBOLICA', () => {
    
    it('Math.tanh(0): Deve resultar em ZERO', () => {
        let resultado = Calculadora.tanHiperbolica(0);
        expect(resultado).to.be.eq(0);
    })
    it('Math.tanh(Infinity): Deve resultar me 1', () => {
        let resultado = Calculadora.tanHiperbolica(Infinity);
        expect(resultado).to.be.eq(1);
    })
    it('Math.tanh(1): Deve resultar em 0.7615941559557649', () => {
        let resultado = Calculadora.tanHiperbolica(1);
        expect(resultado).to.be.eq(0.7615941559557649);
    })
})
