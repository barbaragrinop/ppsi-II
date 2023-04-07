/*       

1)
Crie uma classe Calculadora com os seguintes atributos: n1 e n2. Crie os métodos: somar(),subtrair(), dividir(), multiplicar(), dos quais utilizam o valor de n1 e n2 para efetuar as operações aritméticas denotadas nos métodos. Implemente os métodos getters e setters.*/


class Calculadora {
    constructor(n1, n2) {
        this._n1 = n1
        this._n2 = n2
    }

    get n1(){
        return this._n1
    }

    get n2(){
        return this._n2
    }

    set n1(value){
        this._n1 = value
    }

    set n2(value){
        this._n2 = value
    }

    somar() {
        return parseFloat(this._n1) + parseFloat(this._n2)
    }

    subtrair(){
        return parseFloat(this._n1) - parseFloat(this._n2)
    }

    dividir() {
        if (this._n2 === 0) {
            throw new Error('Não é possível fazer uma divisão por zero!'); 
        }
        return this._n1 / this._n2;
    }

    multiplicar() {
        return this._n1 * this._n2;
    }
}



// RESULTADOS

const minhaCalculadora = new Calculadora(10, 2);
console.log(`n1 = ${minhaCalculadora.n1}, n2 = ${minhaCalculadora.n2}`);

// Alterando o valor de n1 e n2 usando setters
minhaCalculadora.n1 = 5;
minhaCalculadora.n2 = 3;

console.log(`n1 = ${minhaCalculadora.n1}, n2 = ${minhaCalculadora.n2}`);

console.log(`Soma: ${minhaCalculadora.somar()}`);
console.log(`Subtração: ${minhaCalculadora.subtrair()}`);
console.log(`Divisão: ${minhaCalculadora.dividir()}`);
console.log(`Multiplicação: ${minhaCalculadora.multiplicar()}`);
