// > 4 implemente uma função chamada calcularPotencia que recebe dois parâmetros: base e expoente. Faça a implementação recursiva dessa função.

function calcularPotencia (base, expoente){
    if(expoente === 0) {
        return 1
    }

    if(expoente === 1) {
        return base
    }

    return base * calcularPotencia(base, expoente -1)
}


console.log(calcularPotencia(3, 4)); // 81