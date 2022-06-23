console.log(soma(9,8)) // posso usar aqui pois o  js lê todos as funções e depois volta para executar o arquivo

// function declaration

function soma (x,y) {
    return x + y
}

// function expression 

const sub = (x,y) => x - y 

console.log(sub(8,5)) // só pode chamar ela depois, infelizmente 


// named function expression 

const mult = function mult(x, y) {
    return x * y
}
console.log(mult(7, 2)) // só pode chamar ela depois, infelizmente 