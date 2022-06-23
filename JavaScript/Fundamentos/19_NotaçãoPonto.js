console,console.log(Math.ceil(6.4));


const obj1 = {} /// anotação literal
obj1.name = 'Bola'
console.log(obj1.name);

function Obj (nome) {
    this.nome = nome;
    this.exec = function() {
        console.log("LOL")
    };
};


const Obj2 = new Obj('Cadeira'); // vai ser atribuida para a função OBJ
const Obj3 = new Obj('Mesa'); 


console.log(Obj2.nome)
console.log(Obj3.nome)

Obj3.exec();