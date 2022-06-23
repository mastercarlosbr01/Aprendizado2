function RestoResultado(a, b) {
  resultado = a / b;
  resto = a % b;
  return `Resultado: ${resultado}\nresto da divisão: ${resto}`;
}

console.log(RestoResultado( 8, 4))