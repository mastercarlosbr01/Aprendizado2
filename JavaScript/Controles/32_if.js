function soBoaNoticia (nota) {
    if (nota >= 7){
        console.log("Aprovado com " + nota);
    }
}
soBoaNoticia(9)
soBoaNoticia (1)

function SeForVerdadeEuFalo (valor) {
    if (valor) {
        console.log("É verdade ..." + valor);
    }
}

SeForVerdadeEuFalo ()
SeForVerdadeEuFalo (null)
SeForVerdadeEuFalo (undefined)
SeForVerdadeEuFalo (NaN)
SeForVerdadeEuFalo ('')
SeForVerdadeEuFalo (0)
SeForVerdadeEuFalo (-1)
SeForVerdadeEuFalo (" ")






