// Desafio: Mini_Projeto_01
// Como trocar valores de variáveis?

let a = 'vermelho';
let b = 'azul';

let c = a;
    a = b; 
    b = c;

console.log(a);
console.log(b);

// Solução: 
// Criar apenas uma unica variável e realizar a troca de atribuição.
// Resultado:
// a = 'azul'
// b = 'vermelho'