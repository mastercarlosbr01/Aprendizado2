// estrategia 1 para gerar valor padrão
function soma1(a ,b ,c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(1), soma1(1,8,154645))

// estrategia 2, 3, 4 para gerar valor padrão

function soma2(a ,b ,c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // verifica se é um numero é o melhor a se seguir 
    return a + b + c
}
console.log(soma2(), soma2(1), soma2(1,8,154645), soma2(0,0,0,0))

// valor padrão do es2015
function soma3(a = 0 ,b = 0 ,c = 0) {
    return a + b + c
}
console.log(soma3(), soma3(1), soma3(1,8,154645), soma3(0,0,0,0))

