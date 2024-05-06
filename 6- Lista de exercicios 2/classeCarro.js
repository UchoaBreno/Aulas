/*
    Crie uma classe para representar carros
    os carros possuem uma marca, uma cor, e um gasto medio
    de combustivel por kilometro rodado.
    
    Crie um método que dado a quantidade de quilometros e o
    preço do combustivel nos dê o valor gasto em reais
    para poder realizar este percurso
*/

class carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKM, precoCombustivel){
        return ( this.gastoMedioPorKm * distanciaEmKM * precoCombustivel);
    }
}

const uno = new carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new carro ('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));
