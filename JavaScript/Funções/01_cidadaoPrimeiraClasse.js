//criar de forma literal
function func() {};

// Armazenar em uma constante, para invocar tem que chamar os parenteses  
const fun2 = function () {};

// Armazenar dentro de um array
const array = [function (a,b) {return a + b;}, func, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {return 'hello my friend'}
console.log(obj.falar())

// passar função como parametros
function run (fun9) {
    fun9 () 
}

run ( function () {console.log('Executando')} )   // executando uma função dentro de outra 

// Uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c){
        console.log(a + b + c)
    }
}
soma(2,3)(5) // no primeiro coloquei os dois valores, e depois coloquei o segundo representando o return e assim somando 
