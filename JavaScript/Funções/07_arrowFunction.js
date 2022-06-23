


function Pessoa() {
    this.idade = 0

// depois do definir self como uma constante ele vai estar apontando e pode acessar a propriedade "Idade"
    setInterval(() => { // no caso dentro da função arrow '()=>' foi possivel chamar o 'this.idade'
        this.idade++
        console.log(this.idade)
    }, 1000)
}


// chamando uma função dentro de outra e ainda complementando e depois só chamou o objeto "Pessoa"


new Pessoa