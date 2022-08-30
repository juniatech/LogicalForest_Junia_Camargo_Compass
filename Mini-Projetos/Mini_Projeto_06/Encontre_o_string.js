// Criar um método para ler propriedade de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const pessoa = {
    nome: 'Laura',
    anoNascimento: 1996,
    mae: 'Isabel',
    pai: 'Rodrigo'
}
encontreString(pessoa);
function encontreString(objeto) {
    for (propriedade in objeto) // for in 
        if(typeof objeto[propriedade] === 'string') // chamando as propriedades do objeto e verificando o seu tipo
            console.log(propriedade, objeto[propriedade])
}