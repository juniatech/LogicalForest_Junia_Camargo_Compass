// Desafio: Mini_Projeto_12 - Igualdade de Objetos e endereço de memória.

// objeto global 
function endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade, 
    this.cep = cep
};

// novos objetos com outros parametros
const endereco1 = new endereco('13 de Novembro', 'Valinhos', '11530000'); 
const endereco2 = new endereco('13 de Novembro', 'Valinhos', '11530000');
const endereco3 = endereco1;

// comparar se as propriedades são iguais
function saoIguais(endereco1, endereco2) {
    if (endereco1.rua === endereco2.rua && 
        endereco1.cidade === endereco2.cidade && 
        endereco1.cep === endereco2.cep)
        return 'As propriedades dos objetos são iguais.';
    else 
        return 'As propriedades dos objetos não são iguais.'
};
console.log(saoIguais(endereco1, endereco2))

// comparar se os endereços de memoria são iguais e apontam para o mesmo local 
function enderecoMemoriaIguais(endereco1, endereco2) {
    if(endereco1 === endereco3)
        return 'Os endereços de memória dos objetos são iguais.';
    else 
        return 'Os endereços de memória não são iguais.';
};
console.log(enderecoMemoriaIguais(endereco1, endereco2));