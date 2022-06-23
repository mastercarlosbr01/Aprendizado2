const pessoa = {
    nome: 'Carlaus',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // mostra só as chaves
console.log(Object.values(pessoa)) // mostra os valores
console.log(Object.entries(pessoa)) // mostra as chaves e valores dentro de um array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}) // faz um array que vai percorrer e mostrar as a informação no determinado momento e posição

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // pessoa = objeto, dataNascimento = nome da propriedade que deseja criar, enumerable = vai ser listado mostrado, writable = pode ser modificado, value = valor inicial 
    enumerable: false, 
    writable: false,
    value: '26/03/1992'
})

pessoa.dataNascimento = '26/03/1990'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


// Object.assgn  // concatena e junta todos e o ultimo que fica
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)


Object.freeze(obj)
obj.c = 465
console.log(obj)