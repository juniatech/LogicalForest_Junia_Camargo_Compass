//Mini-Projeto-05: Par ou impar.

// função exibe se cada valor é par ou impar
parOuImpar(10);
function parOuImpar(valorLimite) {
    for(let i = 0; i <= valorLimite; i++) {
        if (i % 2 === 0)
            console.log(i,'PAR');
        else
            console.log(i,'IMPAR');
    }
}