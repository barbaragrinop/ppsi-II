/* > 6 implemente uma classe chamada TipoTexto com o atributo texto. 
Crie o método contaVogais que retorna a quantidade de vogais que o atributos texto possui. 
Implemente o método encontrarOcorrencia(pedaco) que dado um pedaço como parâmetro retorna a posição desse pedaço no atributo texto. 
Exemplo: texto = "Andar pela praia"; pedaço = "praia", retorno do método = 4. */

class TipoTexto {
    constructor(texto) {
        this._texto = texto
    }

    contaVogais(){
        const vogaisAlfabeto = ["a", "e", "i", "o", "u"]
        let cont = 0
        for(let i = 0; i < this._texto.length; i ++) {
            if(vogaisAlfabeto.includes(this._texto[i].toLowerCase())){
                cont++
            }
        }
        return cont
    }

    encontrarOcorrencia(pedaco) {
        return this._texto.toLowerCase().indexOf(pedaco.toLowerCase());
    }
}

const tipoTexto = new TipoTexto("Andar pela praia")

console.log(tipoTexto.contaVogais())
console.log(tipoTexto.encontrarOcorrencia("praia"))