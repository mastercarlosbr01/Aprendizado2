// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'LOL', preco: 1.99, tag: 'promoção'
});
console.log(`Extensível: ${Object.isExtensible(produto)}`)

produto.nome = 'Carlão gostosão'
produto.descrição = "ta louco bom demais"
delete produto.tag
console.log(produto);

 // Object.seal
 const pessoa = {nome: 'Juliana', idade: 35}
 Object.seal(pessoa)
 console.log('Selado: ', Object.seal(pessoa))

 pessoa.sobrenome = 'Silva'
 delete pessoa.nome
 pessoa.idade = 26
 console.log(pessoa)