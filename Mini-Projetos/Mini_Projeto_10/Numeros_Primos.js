// Criar função para mostrar os números primos
console.log('Os números primos são:')
exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite){
    for(let num = 2; num <= limite; num++){
        if(verificarNumeroPrimo(num)) 
        console.log(num);
    }
}

function verificarNumeroPrimo(num) {
    for (let divisor = 2; divisor < num; divisor++){ // apenas dividir < num
        if(num % divisor === 0) { // numero primo não está nessa condição.
            return false; 
        }
    }
    return true;
}