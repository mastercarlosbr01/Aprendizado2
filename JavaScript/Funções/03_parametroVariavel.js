function soma () {
    let soma = ''
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(45,1))
console.log(soma(45,1,456456,546,65,56,465,4654,6))
console.log(soma('a', ' Mas sera que vira ', 'Não sei mas vai da certo '))


