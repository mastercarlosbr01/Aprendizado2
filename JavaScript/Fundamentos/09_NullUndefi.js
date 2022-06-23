let valor // não iniciada
console.log(valor); // undefined foi declarada mas não  foi iniciada

valor = null
console.log(valor); // não tem nenhum valor e não tem nenhum endereço apontada. Aqui você inicializou mas não apontou

const produto = {};
console.log(produto.preco);
produto.preco = 35;
console.log(produto.preco.toFixed(2));


produto.preco = null; 
console.log(produto.preco);