/*
Uma sala contem 5 alunos, e cada aluno foi sorteado um numero de 1 a 100
faça um programa que receba 5 numeros sorteados e mostre o maior

dados de entrada:
5
50
10
98
23

saida: 23
*/


//importando o arquivo auxiliarExercicio
const { gets, print } = require("./auxiliarExercicio");

const numerosSorteados = [];

// maior valor
for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];

  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);

