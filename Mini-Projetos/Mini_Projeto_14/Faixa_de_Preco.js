// Javascript aula 47 - Faixa de Preço (Exercício)
// é que você crei um array de objetos de faixa de preço para que
// ela possa ser usada em um site igual o mercado livre

// Primeira Opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo:700},
    {tooltip: 'de R$700 a R$1000', minimo:700, maximo: 9999999}
];

// Segunda Opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo, 
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
]

// Terceira opção Constructor Function

function faixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new faixaPreco('d', 10, 20),
    new faixaPreco('e', 20, 30),
    new faixaPreco('d', 30, 40)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);