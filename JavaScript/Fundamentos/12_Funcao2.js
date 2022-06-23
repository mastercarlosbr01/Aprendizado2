// Armazenando um função em uma variavel 
const ImprimirSoma = function (a, b){
    console.log(a + b);
}

ImprimirSoma(2, 3);

// Armazenando um função arrow em uma variavel

const soma = (a, b) => { // forma reduzida =>, substituir a palavra function se chama "arrow function"
    return a + b;
}
console.log(soma(5,9));

// retorno implicito
const Subtracao = (a, b) => a -b // função ainda mais reduzida, 
console.log(Subtracao(8, 7))