// Mini-projeto 14: Faixa de Preço.
// Criar um array de objetos de faixa de preço (Mercado Livre).

console.log('Notebook i7 16gb ssd 512 nvidia geforce gtx')

// Primeira Opção:
let faixaDePreco = [
    {tooltip: 'até R$6.500', minimo: 0, maximo:6500},
    {tooltip: 'de R$6.500 a R$9.500', minimo:6500, maximo: 9500},
    {tooltip: 'Mais de R$9.500', minimo: 9500, maximo: 999999}
];

console.log(faixaDePreco);


/* 
//Segunda Opção (Factory Function)
function faixaDePreco2(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo, 
        maximo
    }
}

let preco2 = [
    criaFaixaPreco('a', 1, 6500),
    criaFaixaPreco('b', 6500, 9500),
    criaFaixaPreco('c', 9500, 999999)
]

// Terceira opção Constructor Function

function faixaDePreco3(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let preco3 = [
    new faixaPreco('d', 1, 6500),
    new faixaPreco('e', 6500, 9500),
    new faixaPreco('d', 9500, 999999)
];

console.log(faixaDePreco2);
console.log(faixaDePreco3);
*/