const num = [1,5,5,8,4,36,8,6,5,46,8,46,65,48,4,64,654,54]

for (x in num) {
    if (x == 5) { // pegar as 5 primeiras posições
        break
    } 
    console.log(`${x} = ${num[x]}`)
}

console.log('')
console.log('')

for (y in num) { // continua até acabar
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${num[y]}`)
}


// evitar usar este codigo
externo: for (a in num) {
    for (b in num) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log("Fim")