// Mini-projeto 02: Maxímo entre dois valores.
// escreva uma função que usa 2 numeros e retorna o maior entre eles.

let maiorNumero = maiorEntreDoisValores(6,5);
console.log(maiorNumero);

function maiorEntreDoisValores(a,b) {
    return a > b ? a : b;
}

// Solução: 
// Criei uma variável que recebe a função que compara os dois valores através de um ternário.
// Resultado: 6