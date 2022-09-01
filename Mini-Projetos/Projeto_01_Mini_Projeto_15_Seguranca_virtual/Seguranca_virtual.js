function VerificarEntrada() {
    Convidado = document.getElementById('Convidado').value
    Administrador = document.getElementById('Administrador').value
    PermissaoDeEntrada = document.getElementById('PermissaoDeEntrada')
    ConvidadosJunia = ['Eduardo', 'eduardo', 'Douglas', 'douglas', 'Nosvaldo', 'Patricia', 'patricia', 'Denise', 'denise','Karen', 'karen', 'Kelly', 'kelly', 'Fernanda', 'fernanda', 'Rodolfo', 'rodolfo', 'Guilherme', 'guilherme', 'Junia', 'junia']
    
    if(ConvidadosJunia.includes(Convidado)) {
        PermissaoDeEntrada.innerText = 'Pode entrar!😜'
    } else {
        PermissaoDeEntrada.innerText = 'Seu nome não está na lista!😢'
    }
}