// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira Gamer'
produto ['Marca do produto'] = 'Thuder'
produto.preco = 1500

console.log(produto)

delete produto.preco
delete produto ['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 1200000,
    prorietario: {
        nome: 'Carlos',
        idade: 40,
        endereco: {
            rua: 'Rua ismael de almeida',
            numero: 214,
            bairro: 'Jardim Pretopolis'
        }
    },
    condutore: [{
        nome: 'Ronaldo',
        idade: 300
    }, {
        nome:'Joice',
        idade: 23
    }],
    calcularValorSeguo: function () {
        //....
    }
}

carro.prorietario.endereco.numero = 1000
//delete carro.condutore

console.log(carro)

// você pode deletar as coisas com o 'delete', mas não vou fazer isso por conta do trabalho

console.log(carro.condutore.length)
