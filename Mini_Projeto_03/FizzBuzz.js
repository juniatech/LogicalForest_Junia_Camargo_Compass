// Mini-projeto 03: FizzBuzz

const resultado = FizzBuzz(30);
console.log(resultado);

// função FizzBuzz 
function FizzBuzz(numEntrada){
    if (typeof numEntrada !== 'number') 
        return 'Não é um número!';
    else if ((numEntrada % 3 === 0) && (numEntrada % 5 === 0)) 
        return'FizzBuzz';
    else if (numEntrada % 3 === 0) 
        return 'Fizz';
    else if (numEntrada % 5 === 0) 
        return 'Buzz';
    else return numEntrada;
}