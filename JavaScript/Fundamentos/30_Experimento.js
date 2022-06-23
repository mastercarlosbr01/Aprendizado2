let a = 123
global.b = 1546

this.c = 56
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.d)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


// criando uma variavel sem let ou var
abc = 3  /// nunca crie uma assim pois possa dar bug
console.log(global.abc) // Nenhuma que seja de preferencia global 