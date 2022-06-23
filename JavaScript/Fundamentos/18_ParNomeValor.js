const saudacao = 'opa e ai Carlos'; // Contexto léxico, no qual sua variavel ela foi definida.

function exec(){
    const saudacao = 'fala cristiano Ronaldo' // contexto 2
    return saudacao
}


// Objeto são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Carlos',
    idade: '30',
    peso: 90,
    endereço:{
        rua: "Ronaldinha de Germano"
    }
}

console.log(saudacao);
console.log(cliente);
console.log(exec());


// Não tem problema em declarar o mesmo nome duas vezes, só não pode ser no mesmo contexto. E outra ela pode ter outro valor em cada contexto.