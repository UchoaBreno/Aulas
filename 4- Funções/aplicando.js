// Pegando exercicio antigo para mudar para o certo:
// Deixando em função


function calcularIMC(peso, altura){

    return peso / (altura * altura)
}

function classificarImc(imc){
    if (imc < 18.5) {
        return'Você está desnutrido'
    } else if (imc >= 18.5 && imc <= 25) {
        return'Seu peso está na média'
    } else if (imc > 25 && imc <= 30) {
        return'Você está acima do peso'
    } else if (imc > 30 && imc <= 40) {
        return'Você está obeso'
    } else {
        return'Você está correndo perigo por obesidade'
    }
}


function main() {


const peso = 77;
const altura = 1.82;

const imc = calcularIMC(peso, altura);
console.log(classificarImc(imc));

}

main();
