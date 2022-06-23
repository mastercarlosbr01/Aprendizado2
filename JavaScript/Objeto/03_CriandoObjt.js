// usando a notação literal 

const objt1 = {}
console.log(objt1)

// Object em JS
const objt2 = new Object
console.log(objt2)

// Funções contrutoras
function Produto(nome, preco = 0, desc = 0) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return `${nome}\nPreço: R$ ${preco.toFixed(2)}\nCom desconto: R$ ${(preco * (1 - desc)).toFixed(2)}\n\n`
    }
}
const p1 = new Produto('Camisinha', 9.00, 0.10)
const p2 = new Produto('Ração', 20, 0.05)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// função Factory
function criarFuncionario (nome, salarioBase = 0, faltas = 0) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return `R$ ${((salarioBase/30) * (30 - faltas)).toFixed(2)}\n`
        }
    }
}

const f1 = criarFuncionario('Carlos', 2000, 2)
const f2 = criarFuncionario('joice', 5000, 5)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)