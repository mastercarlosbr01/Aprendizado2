const nums = [1,2,3,4,5]

// For com proposito com alteração, mas ele não modifica o array atual 

let resultado = nums.map(function(e){
    return e * 2 // o "e", vai ser tipo o nome do array-- o valor 
})

console.log(resultado)

const soma10 = e => e + 10 //função arrow returno está implicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)