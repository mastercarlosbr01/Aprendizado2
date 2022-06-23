Array.prototype.map2 = function (callback)
{
    const newArray = []
    for (let i = 0; i < this.length;i++)
    {
        newArray.push(callback(this[i], i, this))
    } 
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 3.90}',
    '{"nome": "Kit Lapis", "preco": 5}',
    '{"nome": "Caneta", "preco": 3}',
]

console.log(carrinho)

const paraObjeto = json => JSON.parse(json) // converter o json para objeto

const apenasPeco = produto => produto.preco // tirar o parametro preco de dentro do Objeto convertido

const apenasNome = produto => produto.nome

let resultado = carrinho.map(paraObjeto).map(apenasPeco)

console.log(resultado)

resultado = carrinho.map(paraObjeto).map(apenasNome)
console.log(resultado)
