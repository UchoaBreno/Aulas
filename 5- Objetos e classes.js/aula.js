//O que é classe ? Definição do que deveria ser
//O que é instância ? É uma ocorrência de uma pessoa

//fazendo classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é: ${this.nome} e minha idade é: ${this.idade}`);
    }
}

const adriele = new Pessoa('Adriele Lever', 22);
const thiago = new Pessoa('Thiago Fragata', 25);

adriele.descrever();
thiago.descrever();
