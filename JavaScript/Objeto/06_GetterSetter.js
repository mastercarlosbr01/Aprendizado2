const sequencia = {
    _valor: 1, // convenção -  falar para outros desenvolvedores que é uma variavel privada 
    get valor() {return this._valor++},
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 205
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100 // ele não vai diminuir por conta da condição que demos
console.log(sequencia.valor, sequencia.valor)
