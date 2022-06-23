function formatPreço (dinheiro = 0) {
   const Dinheirão = dinheiro.toFixed(2)
   moeda = 'R$'
    return `${moeda} ${Dinheirão}`
}

console.log(formatPreço((0.1 + 0.2)))

