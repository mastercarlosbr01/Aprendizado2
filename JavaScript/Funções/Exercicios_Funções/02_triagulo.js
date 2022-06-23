function tipoTriangulo (a = 0, b = 0, c = 0) {
    if (a === b && c === a){
        console.log(`Estre triangulo é Equilátero: Todos os lados são iguais`)
    }else if (a === b || a === c || b === c || c === a){
        console.log(`Este triangulo é Isósceles: dois lados são iguais`)
    } else {
        console.log(`Este triangulo é Escaleno: Todos os lados são diferentes`)
    }
    return `\n`
}
console.log(tipoTriangulo(2,5,9))
console.log(tipoTriangulo(2,5,2))
console.log(tipoTriangulo(2,2,2))
console.log(tipoTriangulo(2,2,'2'))


