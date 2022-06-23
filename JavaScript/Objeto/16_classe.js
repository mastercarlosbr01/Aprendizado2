class Lançamento {

    constructor(nome= 'Genérico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamento = [];
    }

    addLancamento (...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}


const salario = new Lançamento('salario', 2000)
const contaLuz = new Lançamento('Luz', -220)

const contas = new CicloFinanceiro(12, 2022)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario());