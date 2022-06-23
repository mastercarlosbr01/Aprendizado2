const Notas = [0, 1 , 2, 3, 4 ,5, 6, 7] 
// console.log(Notas[1], Notas[3])// acessando o indice do array

// Notas[3] = 158; // atribuindo um novo item a um array
// console.log(Notas[3]) 
// console.log(Notas.length)// quantos indices tem no array

// Notas.push({id: 3}, false, null, 'teste'); // objeto e colocando vários valores dentro do array
// console.log(Notas)

// console.log(Notas.pop()) //busca o ultimo elemento no arrary

// delete Notas[0]; // tira o valor colocado pelo indice

// console.log(Notas) 

// console.log(typeof Notas) // object

var particionado = Notas.slice(1, Notas.pop());
console.log(particionado)