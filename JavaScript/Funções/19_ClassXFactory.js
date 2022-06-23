class Pessoa {
    constructor(nome) {
        this.nome = nome;

    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Carlossss')
p1.falar()



// trabalhando com html é mais fácil colocar a está, por conta de acesso a variavel no html 
const CriarPessoas2 = nome => {
    return{
        falar: () => console.log(`Meu nome é o ${nome}`)
    }
}

const p2 = CriarPessoas2 ('Carlão')
p2.falar()