const valor = 'Global'

function minhaFunção() {
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFunção()
}

exec()