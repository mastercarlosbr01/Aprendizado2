function Pessoa() {
    this.idade = 0

    const self = this
// depois do definir self como uma constante ele vai estar apontando e pode acessar a propriedade "Idade"
    setInterval(function () { // setinterval vai contando a cada "1000" segundos vai disparar essa função
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)     // este ".bind(this)", está referenciando a variavel idade dentro caso eu chame sem transformar o this em self.
}


// chamando uma função dentro de outra e ainda complementando e depois só chamou o objeto "Pessoa"


new Pessoa