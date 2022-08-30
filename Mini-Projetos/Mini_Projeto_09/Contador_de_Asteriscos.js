// Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(3);

function exibirAsteriscos(linhas) {  
    let padrao = '';
    for(let contador = 0; contador < linhas; contador++){
        padrao += '*';
        console.log(padrao);
    }
}
