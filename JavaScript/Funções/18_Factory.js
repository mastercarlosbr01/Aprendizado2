function criarProduto(nome, preco, desc, descontão) {

    if (desc == true) {
        desc = 0.6;
        descontão = preco * desc;
    }
    return {
        nome,
        preco,
        descontão
    }
}

console.log(criarProduto('Notebook', 7000.49, true))

