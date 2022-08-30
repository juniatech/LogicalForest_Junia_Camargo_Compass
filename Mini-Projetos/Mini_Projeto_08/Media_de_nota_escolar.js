// Média de nota escolar
// Obter a média a partir de um array

// 0-59: F 
// 60-69: D
// 70-79: C
// 80-89: D
// 90-100: A

const array = [70,70,80];
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
    
    if (media < 59) return 'Nota F';
    if (media < 69) return 'Nota D';
    if (media < 79) return 'Nota C';
    if (media < 89) return 'Nota B';
    return 'Nota A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) { // for of 
        soma += valor;
    }
    return soma/(array.length); // length => tamanho do array.
}