
function criarCd (nome){
    return{
        falar: () => console.log(`O seu Cd preferido é: ${nome}`)
    }
}
const p2 = criarCd ('Linkin Park Hibrid Theory')
p2.falar()
console.log(p2.nome)  /// aqui não fica alocado o nome da variavel 


/////// desafio  certo, pois fiz errado mas vou testar

function Pessoa (nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
}
    


const p1 = new Pessoa('Carlossss')
p1.falar()
console.log(p1.nome) ///  deste jeito fica alocado o nome da variavel 