// boolean = verdadeiro ou falso
// numero % 2 = resto da divisao de 2, ou seja
// se o numero for divisivel por 2 ele é verdadeiro, se nao, falso

    const numero = 3;
    const numPar =  (numero % 2) == 0;

    if (numero == 0){
        console.log('Numero Inválido')
    }else if(numPar){
        console.log('É par')
        }else{
            console.log('É impar')
        } 

