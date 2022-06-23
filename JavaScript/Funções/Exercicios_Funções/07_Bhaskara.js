function Bhaskara(a = 0, b = 0, c = 0){
    Delta = (Math.pow(b, 2)) - (4 * a * c);
    x1 = (-b + (Math.sqrt(Delta))) / (2 * a)
    x2 = (-b - (Math.sqrt(Delta))) / (2 * a)

    if (Math.sign(Delta) == -1){
        return `O Delta é negativo ${Delta}\nA equação não tem raízes reais.\n\n`
    }
    if (Delta == 0) console.log(`A equação possui duas raízes iguais`) 
    if (Delta > 0) console.log(`A equação possui duas raízes distintas`)
    return `O X' = ${x1}\nO X'' = ${x2}\n\n`
}

console.log(Bhaskara(1, -5, 6))
console.log(Bhaskara(1, 1, 1))
console.log(Bhaskara(1, 8, -9))
console.log(Bhaskara(3, -5, 12))


