function tratarErroELancar (erro) {
    //throw new Error ...
    throw {
        nome: erro.nome,
        msg: erro.msg,
        date: new Date
    }
}

function Gritarvaxca (LOL) {
    try {
        console.log(LOL.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e)
    } finally {  /// exibe mesmo se der errado ou certo
        console.log('Deu erro em tudo')
    }
}

const objeto = { nome: "Carlos" }
Gritarvaxca(objeto)