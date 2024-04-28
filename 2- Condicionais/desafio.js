/*
    Faça um programa para calcular o valor de uma viagem

    Você terá 5 variaveis. Sendo elas:
    1- Preço do etanol
    2- Preço da gasolina
    3- O tipo de combustivel do seu carro
    4- Gasto médio do combustivel po KM rodado
    5- Distancia em KM da viagem

    Imprima o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
let distanciaEmKM = 100;
const tipoCombustivel = 'gasolina';


const litrosConsumidos = distanciaEmKM / kmPorLitros;


if (tipoCombustivel == 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}