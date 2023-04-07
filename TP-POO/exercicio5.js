// > 5 refaça o exercício anterior efetuando a implementação recursiva da função calcularPotencia de forma imperativa, isto é,  usando estrutura de repetição ao invés de recursăo.

function calcularPotencia(base, expoente) {
    let resultado = 1
    for(let i = 0; i <= expoente; i++){
        resultado *= base
    }

    return resultado
}

console.log(calcularPotencia(3, 5)) //243)

