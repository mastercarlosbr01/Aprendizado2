const notas = [,5,9,8,4,32,845,6545,8,6545,6,9,98,5]
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Brasil',
    idade: 30,
    peso: 80
}

for  (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

