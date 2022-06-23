const aprovados = ['Carlos', 'Aldo', 'Daniel', 'Agatha', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
})

// Array recebe, nome, indice e o array 
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))


const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)