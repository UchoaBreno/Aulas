/* 
    Faça um programa para calcular o valor de uma viagem.
    Você tem 3 variaveis, sendo elas:

    1- Preço do combustivel;
    2- Gasto médio do combustivel do carro por KM;
    3- Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustivel para realizar esta viagem.

*/

const preco_Combustivel = 5.79;
const kmPorLitros = 10;
let distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * 5.79;

// toFixed = variavel para decidir as casas decimais
console.log(valorGasto.toFixed(2));