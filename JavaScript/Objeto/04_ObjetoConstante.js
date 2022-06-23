// pessoa -> 123 -> {...}
const pessoa = {nome: 'Carlos'}
pessoa.nome = 'Carlão da máfia'
console.log(pessoa)


// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ronaldo'} ---não tem como mudar uma constante e vai dar um erro

Object.freeze(pessoa) // congelei o objeto pessoa para que ele não possa ser mudado, modificado, alterado de qualquer forma e também não pode ser deletado

pessoa.nome = 'Maria'
pessoa.end = 'Rua triste'
delete pessoa.nome

console.log(pessoa)
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joice'})
pessoaConstante.nome = 'Joyce'
console.log(pessoaConstante)
