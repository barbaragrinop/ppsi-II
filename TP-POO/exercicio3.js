// > 3 implemente uma classe Porta que contenha três atributos: largura, altura , cor. Implemente o método pintar(cor) que recebe uma cor como parâmetro e alterar a cor atual da porta.

class Porta {
    constructor(altura, largura, cor) {
        this._altura = altura
        this._largura = largura
        this._cor = cor
    }

    pintar(novaCor) {
        this._cor = novaCor;
    }
}

const porta = new Porta(20, 200, "vermelho")

porta.pintar("rosa")

console.log(porta)
