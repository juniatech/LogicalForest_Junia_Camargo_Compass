// Mini-Projeto 04:
// Velocidade máxima de até 70km
// a cada 5km acima do limite você ganha 1 ponto na carteira
// Math.Floor() => para arredondar 
// caso os pontos seja maior que 12 => 'Carteira suspendida'

medidorVelocidade(129);

function medidorVelocidade(velocidadeAtual) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;

    if (velocidadeAtual <= velocidadeMaxima)
        console.log('Dentro do limite!');
    else {
        const pontos = Math.floor((velocidadeAtual - velocidadeMaxima)/ kmPorPonto); 
        if (pontos >= 12)
            console.log('Carteira Suspensa!');
        else if (pontos < velocidadeMaxima)
            console.log(pontos, 'Pontos na carteira!');
        else
            console.log('ERRO... Insira um valor numérico de velocidade.');
    }
}