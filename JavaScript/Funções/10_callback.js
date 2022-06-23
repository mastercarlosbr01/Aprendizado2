const fabricante = ["Mercedes", "Audi", "BMW"] 

function imprimir (nome, indice) {
    console.log(`${indice}.  ${nome}`)
}

fabricante.forEach(imprimir)   // para cada elemento da const fabricante vai imprimir o nome é o indice  da função "imprimir"

fabricante.forEach(function (fabricante) { // mostrar só os nomes
    console.log(fabricante)
})

fabricante.forEach( (noe, indice) => console.log(indice, noe ))