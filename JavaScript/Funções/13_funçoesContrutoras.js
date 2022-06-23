function Carro (velocidadeMaxima = 200, delta = 5) {
    // atributo privado, poderia ser const ou var
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            console.log(`Velocidade máxima é de ${velocidadeMaxima}Kmh\nVocê pode aumentar somente ${Math.abs((velocidadeAtual + delta) - velocidadeMaxima)}Kmh\n Run Flash Run...... `)
            velocidadeAtual += delta
        }
    }

    // metodo publico 
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno  = new Carro

uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 10)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()





console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)