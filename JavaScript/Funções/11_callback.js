const notas = [9, 5 , 6 , 8 , 4 , 10, 2 , 1, 6 , 4]


// sem callback

let notasbaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas.push(notas[i])
    }
}

console.log (notasbaixas)

// com callback

notasbaixas = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasbaixas)

const notasbaixas3 = notas.filter( (nota) => nota < 7) // com arrow "(nota) => nota < 7"... podia ser sem parenteses mas 

console.log(notasbaixas3)