import assert from 'assert'
import chai from 'chai' 
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes de Soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
    it('Deve somar 2 e 2 e não resultar em 5', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(5)
    })
})

describe('Testes de Subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.subtracao(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair -4 e 5 resultando em -9', () => {
        let resultado = Calculadora.subtracao(-4, 5)
        expect(resultado).to.be.eq(-9)
    })
    it('Deve subtrair 2 por 2 e não resultar em 1', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(1)
    })
})

describe('Testes de Divisão', () => {
    it('Deve dividir 8 por 4 resultar em 2', () => {
        let resultado = Calculadora.divisao(8, 4)
        expect(resultado).to.be.eq(2)
    })
    it('Deve dividir 4 por 5 resultar em 0.8', () => {
        let resultado = Calculadora.divisao(4, 5)
        expect(resultado).to.be.eq(0.8)
    })
    it('Deve tentar dividir 0 por 0 e trazer um resultado', () => {
        let resultado = Calculadora.divisao(0, 0)
        expect(resultado).not.be.eq(resultado)
    })
    it('Deve dividir 2 por 2 e não resultar em 5', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(5)
    })
})

describe('Testes de Multiplicação', () => {
    it('Deve multiplicar 5 por 6 resultar em 30', () => {
        let resultado = Calculadora.multiplicacao(5, 6)
        expect(resultado).to.be.eq(30)
    })
    it('Deve multiplicar 5 por 0.8 resultar em 4', () => {
        let resultado = Calculadora.multiplicacao(5, 0.8)
        expect(resultado).to.be.eq(4)
    })
    it('Deve multiplicar 2 por 2 e não resultar em 5', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(5)
    })
})

describe('Testes de Potenciação', () => {
    it('Deve fazer a potenciação de 2^4 e resultar em 16', () => {
        let resultado = Calculadora.potenciacao(2, 4)
        expect(resultado).to.be.eq(16)
    })
    it('Deve fazer a potenciação de 2^2 e não resultar em 5', () => {
        let resultado = Calculadora.soma(2, 2)
        expect(resultado).not.be.eq(5)
    })
})


