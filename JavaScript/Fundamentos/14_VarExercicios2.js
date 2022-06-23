var numero  = 10
{
    var numero = 56 
    console.log("Dentro = " , numero)
}

console.log("Fora = ", numero)
// se fosse um var dentro do bloco iria substituir o primeiro, var normalmente substitui (var global , função) a outro agora se for um let ele não substitui (let global , função, bloco)

let numero2  = 10
{
    let numero2 = 56 
    console.log("Dentro = " , numero2)
}

console.log("Fora = ", numero2)