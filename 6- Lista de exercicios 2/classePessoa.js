/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura
    as pessoas devem ter a capacidade de dizer o valor do seu imc
    imc= peso / (altura * altura);

    Instancie uma pessoa com o nome José que tenha 70kg e 1.75 de altura
    e peça ao José para dizer o valor do seu IMC

    Após tudo isso, classifique os IMC criando o método

    - Abaixo de 18.5 desnutrição;
    - Entre 18.5 e 25 peso normal;
    - Entre 25 e 30 sobrepeso;
    - Entre 30 e 40 obesidade;
    - Acima de 40 obesidade grave;

*/

class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    // nesse caso nao precisa colocar nada entre os parenteses do calcularIMC
    //Por que ja esta dentro da funcao de pessoa, o parentese basicamente
    //busca o que esta fora das chaves
    calcularImc(){
        return(this.peso / (Math.pow(this.altura, 2)));
    }
    classificarIMC(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return('Você está desnutrido')
        } else if (imc >= 18.5 && imc <= 25) {
            return('Seu peso está na média')
        } else if (imc > 25 && imc <= 30) {
            return('Você está acima do peso')
        } else if (imc > 30 && imc <= 40) {
            return('Você está obeso')
        } else {
            return('Você está correndo perigo por obesidade')
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose.calcularImc());

const breno = new pessoa('Breno', 80, 1.82);
console.log(breno.classificarIMC());