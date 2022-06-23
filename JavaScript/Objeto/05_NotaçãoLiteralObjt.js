const a = 1
const b = 2
const c = 3

const objt1 = {atributoA: a, atributoB: b, atributoC: c}
const objt2 = {a, b, c}

console.log(objt1, objt2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const objt3 = {}
objt3[nomeAttr] = valorAttr
console.log(objt3)

const objt4 = {[nomeAttr]: valorAttr}
console.log(objt4)


// novo modo de colocar uma função reduzida dentro de um objeto
const objt5 = {
    função1: function() {
        //...
    },
    função2() {
        //..
    }
}

console.log(objt5)