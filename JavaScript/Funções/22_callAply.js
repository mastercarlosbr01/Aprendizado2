function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
console.log(getPreco())

console.log(produto.getPreco())

const carro = {preco: 80000, desc: 0.5}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));


// diferença das duas 
console.log(getPreco.call(carro, 0.4, '$')) // diretamente na função
console.log(getPreco.apply(carro, [0.9, '$$'])) //  dentro de um arrary 