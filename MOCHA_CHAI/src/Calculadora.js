export default class Calculadora {

    static soma(a, b) {
        return a + b;
    }

    static subtracao(a, b) {
        return a - b;
    }

    static divisao(a ,b) {
        return a / b;
    }

    static porcentagem(n, percent) {
        return n/100 * percent;
    }

    static multiplicacao(a, b) {
        return a * b;
    }

    static potencia(a, b) {
        return a ** b;
    }

    static logaritmo(x) {
        return Math.log(x);
    }

    static seno(x) {
        return Math.sin(x);
    }

    static cosseno(x) {
        return Math.cos(x);
    }

    static cosHiperbolico(x) {
        return Math.cosh(x);
    }

    static tangente(x) {
        return Math.tan(x);
    }

    static tanHiperbolica(x) {
        return Math.tanh(x);
    }

    static PI(raio) {
        return 2 * Math.PI * raio;
    }

    static max(a, b) {
        return Math.max(a, b);
    }
}
