const ferrari = {
    modelo: 'F40',
    velMax: 500
}

const audi = {
    modelo: 'TT',
    velMax: 600
}

console.log(ferrari.__proto__)
console.log(audi.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(audi.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)