function  JurosSimples (capital, taxa, tempo) {
    let txjuros = taxa / 100
    let juros = capital * txjuros * tempo
return `R$ ${juros.toFixed(2)}\nO total será de R$ ${capital + juros}\n`
}

//console.log(JurosSimples(1000, 50, 2))

function JurosComposto (capital, taxa, tempo) {
    var txjuros = taxa / 100
    var meses = tempo * 12
    var montante = capital
 
    for (var i = 1; i <= meses; i++ ){
        capital = montante
        montante =  capital + (capital * txjuros)
    }

    return `R$ ${montante.toFixed(2)}\n os meses ${meses}`
}

console.log(JurosComposto(10000, 1, 1))

