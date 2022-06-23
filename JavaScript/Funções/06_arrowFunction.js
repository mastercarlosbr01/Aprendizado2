let dobro = function (a) { // forma normal
    return 2 * a
}


dobro = (a) => { // forma reduzida
    return 2 * a
}

dobro = a => 2 * a // forma mais reduzida del
let dobro2 = (a,b) => 2 * (a + b) // forma mais reduzida del

MulEleMesmo = a => a * a // brincando com a função reduzida, foda pra carai 

ola1 = () => 'olá'
ola = _ => 'olá ronaldo' // possui parametro mesmo não tem aparecendo

console.log(dobro(Math.PI))
console.log(dobro2(5,4))
console.log(MulEleMesmo(5))

console.log(ola())
console.log(ola)
console.log(ola1())
