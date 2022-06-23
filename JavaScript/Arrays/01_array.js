 console.log(typeof Array, typeof new Array, typeof[])

 let aprovados = new Array('Carlos', 'joice');

 console.log(aprovados)

 aprovados = ['Joice', 'Carlos']
 console.log(aprovados[0])

 aprovados[3] = 'Ronaldo'
 console.log(aprovados[3])

 aprovados.push('Maldita')

 console.log(aprovados.length) //tamanho

 console.log(aprovados)

 aprovados[10] = 'Afrodite'

 console.log(aprovados)
 console.log(aprovados.length)

 aprovados.sort()  // deixa tudo bagunçado 
 console.log(aprovados)

 delete aprovados[3]
 console.log(aprovados)

 aprovados.splice(1, 2, 'Elemento1', 'Elemento3') // a partir do indice 1, vai excluir 2 elementos e adicionar os "elementos"
 console.log(aprovados)
 

