const escola = "Good of War"

console.log(escola.charAt(5)) // mostra qual letra está no indice "5" ou qualquer numero que você colocar lá dentro 
console.log(escola.charCodeAt(3)) // codigo relacionado ao unicode 
console.log( escola.indexOf('d')) //  mostra em qual indice está localizado a letra que desejá procurar

console.log(escola.substring(1)) // começa no indice 1
console.log(escola.substring(1, 5)) // vai do 1 até o indice 5
console.log(escola.length) // quantas indices tem 
console.log('Escola '.concat(escola).concat("!")) // Adiciona uma frase ou parte dela 
console.log(escola.replace('o','e')) // substitui uma letra ou expressão por outra
console.log('Ana,Ronaldo,Joaquina'.split(',')); // um array onde passei para o split separar eles nas virgulas 
