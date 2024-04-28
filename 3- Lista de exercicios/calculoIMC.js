/*
Elabore um algoritmo que, se dado a altura e peso mostre
sua condição de acordo com a tabela abaixo:

IMC em adultos: 

- Abaixo de 18.5 desnutrição;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 sobrepeso;
- Entre 30 e 40 obesidade;
- Acima de 40 obesidade grave;

Formula IMC = peso / ( altura * altura)
*/
const peso = 77;
const altura = 1.82;
const calculoIMC = peso / (altura * altura);

console.log(calculoIMC)

if (calculoIMC < 18.5) {
    console.log('Você está desnutrido')
} else if (calculoIMC >= 18.5 && calculoIMC <= 25) {
    console.log('Seu peso está na média')
} else if (calculoIMC > 25 && calculoIMC <= 30) {
    console.log('Você está acima do peso')
} else if (calculoIMC > 30 && calculoIMC <= 40) {
    console.log('Você está obeso')
} else {
    console.log('Você está correndo perigo por obesidade')
}