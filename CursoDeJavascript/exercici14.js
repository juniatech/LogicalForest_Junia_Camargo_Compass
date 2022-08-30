let umvalor = verificaEntrada;

function verificaEntrada(){
    let nome = document.getElementById('nome').value;
    let convite = document.getElementById('convite').value;
    switch (convite){
        case 'Jhonathan': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'Luiz':
                case 'Carlos':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
        case 'Douglas': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'José':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
        case 'Eduardo': //pessoa que convidou
            switch (nome){ //convidados dessa pessoa
                case 'Maria':
                case 'Filomena':
                    document.getElementById("resultado").innerHTML = "Você pode entrar!";
                    break;
                default:
                    document.getElementById("resultado").innerHTML = "Você NÃO pode entrar!";
            }
    }
}

console.log(umvalor);