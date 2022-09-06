// 4. for..in
// iterar sobre propriedade de um objeto ou
// elementos de um array

const pessoa = {
    nome: 'junia',
    idade: 23
}
//key-value
for(let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde'];

for(let indice in cores) {
    console.log(indice, cores[indice])
}