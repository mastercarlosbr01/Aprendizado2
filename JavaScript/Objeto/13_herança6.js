function Aula(nome, videoID){
    this.nome = nome
    this.video = videoID
}

const aula1 = new Aula('bem vindo',123)
const aula2 = new Aula('Welcome',456)
console.log(aula1, aula2)


// simulação, mostrando o aperador new por baixo dos panos 
function novo (f, ...params){
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo( Aula, 'bem vindo',123)
const aula4 = novo( Aula, 'welcome',456)

console.log(aula3, aula4)