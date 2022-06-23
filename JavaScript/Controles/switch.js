const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: 
        case 9:
            console.log('Quadro de honra')
            break
        case 7: case 8:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Reprovado')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota Invalida')
            break
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(2)
imprimirResultado(-1)
