const pessoa = {
    nome: 'Carlos',
    idade: 5,
    endereco: {
        lagradouro: 'Rua Ismael Almeida',
        nume: 214
    }
}

const {nome, idade} = pessoa         // tirar o nome e idade de dentro do objeto pessoa    "const {atributos} = objeto"
console.log(nome, idade)

const {nome : Nom, idade : Ida} = pessoa //  trocar o nome dos atributos desta variavel 
console.log(Nom, Ida)

const {sobreNome, bemhumorado = true} = pessoa // criei dois atributos que não tem no objeto pessoa e em um defin e em outro não
console.log(sobreNome, bemhumorado)

const {endereco: {lagradouro, nume, cep}} = pessoa  // extraindo dentro de um arrauy por exemplo
console.log(lagradouro, nume, cep)