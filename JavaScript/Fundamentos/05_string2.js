const nome = 'Carlos'
const concatenacao = 'ola' + nome + 'seja bem vindo!'

const template = `'Olá' ${nome}!`
console.log(template)

console.log(`1 + 1 = ${1+1}`) // posso colocar uma strig livre sem precisar colocar as aspas duplas ou simples e ainda quando for chamar uma variavel ${}

const up = texto => texto.toUpperCase() // função para almentar a letra

console.log(`Ei... ${up('cuidado')}!`) // chamando um um console