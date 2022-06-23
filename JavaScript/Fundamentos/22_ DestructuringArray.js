const [a] = [10]
console.log(a)

const [n1, n2, n3, n4, n5, n6 = 0] = [10, 11, 15, 5] // associando o atributo dentro de um array a um valor que está recebendo, porém em ordem 
console.log(n1, n2, n3, n4, n5, n6)

// caso isolado, mas evite de usar. Complexa demais 