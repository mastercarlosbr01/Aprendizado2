function teste1(num) {
    if (num > 7){
        console.log(num)
    }
    console.log('Final')
}
teste1(8);
teste1(1);

function teste2(num) {
    if (num > 7) ;  { // não colocar ; em estruturas de repetição
        console.log(num)
    }
    
}
teste2(1);
teste2(10);