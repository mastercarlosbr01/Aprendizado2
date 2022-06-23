Array.prototype.forEach = function (callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovador =  ['Carlos', 'Aldo', 'Daniel', 'Agatha', 'Raquel']
aprovador.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})