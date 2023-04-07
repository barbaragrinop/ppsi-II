/*

> 2

 Refaça o exercício anterior, criando uma classe Calculadora2, que contenha os métodos do exercício anterior, porém,  parametrizados. Exemplo: somar(n1,n2). Esta classe não deve ter atributos.

*/

class Calculadora {

    static somar(_n1, _n2) {
        return parseFloat(_n1) + parseFloat(_n2)
    }

    static subtrair(_n1, _n2){
        return parseFloat(_n1) - parseFloat(_n2)
    }

    static dividir(_n1, _n2) {
        if (_n2 === 0) {
            throw new Error('Não é possível fazer uma divisão por zero!'); 
        }
        return _n1 / _n2;
    }

    static multiplicar(_n1, _n2) {
        return _n1 * _n2;
    }
}


console.log(`Soma: ${Calculadora.somar(5, 3)}`);
console.log(`Subtração: ${Calculadora.subtrair(5, 3)}`);
console.log(`Divisão: ${Calculadora.dividir(5, 3)}`);
console.log(`Multiplicação: ${Calculadora.multiplicar(5, 3)}`);