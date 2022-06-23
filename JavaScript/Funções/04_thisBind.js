const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log(this.saudacao);
    }
}

const ronaldo = {
    saudacao: 'Bom dia desgraça',
    falar () {
        console.log(this.saudacao);
    }
}
pessoa.falar()
const falar = pessoa.falar // armazenei dentro de uma variavel  -- undefined
falar() // conflito entre paradigmas: funcoinal e 00

const falarDePessoa = pessoa.falar.bind(ronaldo)  // sera de referencia o objeto que passo para a função bind --pessoa ou até o  (const 'ronaldo', const 'Ronaldo')

falarDePessoa()