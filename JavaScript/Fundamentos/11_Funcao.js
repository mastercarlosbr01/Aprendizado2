// função sem retorno

function ImprimirSoma(num1, num2){
    console.log(num1 + " + " + num2 + " = "+ (num1 + num2)); ;
}
ImprimirSoma(2,45)
ImprimirSoma(56) // NaN

// função com retorno é preciso ter o return e ainda colocar dentro do console.log()

function Soma (a, b = 0){  // posso tratar o valor padrão
    return a + b;
}
console.log(Soma(2, 6))
console.log(Soma(6))