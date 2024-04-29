/*
O que é função ?

Pequeno trecho de código que serve para invocar
para ser executado várias vezes
*/

// Função para texto
function MeuNome (nome){
    console.log('Seu nome é: ' + nome);
}

MeuNome('Breno');

// Função para quadrado de um valor
function quadrado (valor){
    return valor * valor
}
console.log(quadrado(10) + quadrado(10));

//Função para incremento de juros
function incrementoJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100 * valor)
    return valor + valorDeAcrescimo;
}

console.log(incrementoJuros(100, 15));
console.log(incrementoJuros(100, 25));