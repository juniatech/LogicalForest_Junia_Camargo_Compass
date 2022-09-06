// Javascript - Objeto Endereço
// Criar um objeto com as propriedades de um endereço e exibir em uma função

let objetoEndereco = {
    rua: '11 de julho',
    cidade: 'Campinas',
    cep: '13440000'
};

function exibirEndereco(objetoEndereco) {
    for (let chave in objetoEndereco) 
    console.log(chave, objetoEndereco[chave]); // endereço inexado de chave
}

exibirEndereco(objetoEndereco);