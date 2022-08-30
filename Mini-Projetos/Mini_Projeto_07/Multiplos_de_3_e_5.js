// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

somarMultiplos3e5(30);
function somarMultiplos3e5(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for(i = 0; i <= limite; i++){ // loop para que os valores sejam somados
        if(i % 3 === 0) // isto é um multiplo de 3
        multiplosDe3 += i; // += para que a soma seja feita e incrementada na soma final
        if(i % 5 === 0)
        multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}

// Multiplos de 3 
// 3, 6 e 9
// Multiplos de 5
// 5 e 10

// somando os multiplos
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois