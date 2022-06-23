function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor permitido é de 20m²!!! \nValor: ${area}m².\n`)
    } else {
        return (`${area}\n`)
    }
}


console.log (area(2, 5))
console.log (area(2, 59))
console.log(area(5))
console.log(area())
console.log(area(5, 4 ,4, 5,454 ,54 ,64)) // Normalmente vai pegar os dois primeiros e vai ignorar os outros 

