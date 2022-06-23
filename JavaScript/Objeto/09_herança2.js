// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0' // evite fazer isso 

const avo = {attr: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr2, filho.attr0, filho.attr3, filho.attr)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }

    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // sombreamento shadowing
}
const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()} ` // super pegar lá do pai o status 
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem como prototipo carro
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(400)
console.log(ferrari.status())
