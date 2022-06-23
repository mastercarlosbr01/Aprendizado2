const funcs = [];

for (let i = -8; i <= 10; i++) 
{
    funcs.push(function (){
        console.log(i);
    })
}
funcs[5]()



// realmente o let vale a pena para utilização no array 

const funcs2 = [];

for (var i = -8; i <= 10; i++) 
{
    funcs2.push(function (){
        console.log(i);
    })
}
funcs2[5]()