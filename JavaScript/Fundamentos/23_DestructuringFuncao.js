function rand({ min = 0, max = 1000 }) {
    const valor  = Math.floor(Math.random() * (max - min)) + min;   // Math.floor retorna numeros dentre o max e o min estipulado 
    return Math.floor(valor)
}

const obj = { min: 2000, max: 10 }
console.log(rand(obj))
console.log(rand({min: 955}))  // ja defini o valor padrão no cabeçalho da função
console.log(rand({})) //passando nada só com as chaves, ja tem o padrão. Mas tem que identificar o objeto com as {}
//console.log(rand()) // ai vai da erro passo nenhum objeto 