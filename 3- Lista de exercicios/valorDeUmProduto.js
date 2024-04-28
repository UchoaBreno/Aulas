/*
Elabore um algoritmo que calcule o que deve ser pago de um produto
considerando o preço normal da etiqueta e a escolha do pagamento

Condições:

- A vista no débito, recebe 10% de desconto
- A vista no dinheiro ou pix, recebe 15% de desconto
- Em duas vezes, preço normal de etiqueta sem juros
- Acima de duas vezes, preço de etiqueta 15% de juros
*/

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento == 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if(formaPagamento == 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaPagamento == 3){
    console.log(precoEtiqueta)
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}