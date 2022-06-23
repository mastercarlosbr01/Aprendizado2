const soma = function(a,b){
    return a + b
}
const subtra = function(a,b){
    return Math.abs(a - b)
}

const imprimirResultado = function(a,b, operacao = soma || subtra) {
    console.log(operacao(a, b))
}

imprimirResultado(2, 6)
imprimirResultado(2, 45, soma)
imprimirResultado(2,9, function(a, b){
    return a - b
})

imprimirResultado(2,89, subtra)
imprimirResultado(2,7, (x , y) => x * y)


const pessoa = {
    falar: function(){
        console.log('Opa')
    }}

pessoa.falar()