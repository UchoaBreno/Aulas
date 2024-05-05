//aplicando uma função dentro de outra

//em vez do console.log, usar o return por que
//precisa retornar o que ta escrito

function escrevaMeuNome (nome){
    return 'Meu nome é: ' + nome
}

function verificarIdade(idade){
    if (idade <= 17){
        console.log(escrevaMeuNome('Breno ') + 'e sou de menor')
    } else{
        console.log(escrevaMeuNome('Breno ') + 'e sou de maior')
    }
}

verificarIdade('17');