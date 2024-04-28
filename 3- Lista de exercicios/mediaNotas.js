/*
    Faça um algoritmo que dado as 4 notas tiradas por um aluno
    em um semestre da faculdade calcule e imprima a sua média
    e classificação conforme a tabela abaixo:

    Formula média= (nota1 + nota2 + nota3 + nota4) / 4

    Classificação:
    - Média menor que 5, reprovação
    - Média entre 5 e 7, PF
    - Média maior que 7, aprovado
*/

let nota1 = 10;
let nota2 = 10;
let nota3 = 11;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media <= 0) {
    console.log('erro')
} else if(media < 5){
    console.log('Reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('Você está de PF')
} else if(media > 10){
    console.log('Você inseriu os dados errados')
} else {
    console.log('Você está aprovado')
}