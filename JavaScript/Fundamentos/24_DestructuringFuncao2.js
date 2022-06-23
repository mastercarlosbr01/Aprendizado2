function rand ([min = 0, max = 500]){
    if (min > max) [min, max] = [max, min]   // uma condição, caso seja verdade com o operador destructh vou trocar o min pelo máximo
    const valor  = Math.floor(Math.random() * (max - min)) + min;   // Math.floor retorna numeros dentre o max e o min estipulado 
    return Math.floor(valor)
}
console.log(rand([58, 89]))
console.log(rand([89, 95]))
console.log(rand([899]))

