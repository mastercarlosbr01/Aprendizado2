const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // tira o ultimo elemento -- massa está fora!!!
console.log(pilotos)

pilotos.shift() //n remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no primeiro lugar
console.log(pilotos)

pilotos.splice(1,0,'Bottas', 'Massa') // colocar a partir do indice um e não vai deletar nenhum ....
console.log(pilotos)

const AlgunsPilotos = pilotos.slice(2) // retorna um nove array a partir do indice 2
console.log(AlgunsPilotos)

const algunsPilotos2 = pilotos.slice(2, 4) // pega a partir do indice 2 e para no 4
console.log(algunsPilotos2)