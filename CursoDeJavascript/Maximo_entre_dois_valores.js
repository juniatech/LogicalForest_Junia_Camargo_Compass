// Mini-projeto 02: Maxímo entre dois valores.
// Desafio: escreva uma função que usa 2 numeros e retorna o maior entre eles.

let maiorNumero = maiorEntreDoisValores(5,5);

function maiorEntreDoisValores(a,b) {
    if(a > b) {
        return a;
    }
    else if(b > a) {
        return b;
    }
    else {
        return('Os números são iguais!');
    }
}

console.log(maiorNumero);
