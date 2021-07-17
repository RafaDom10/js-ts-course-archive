// Exemplo de calculo de média aritmética usando rest e reduce

function average(...args) {
  return args.reduce((acc, curr) => acc + curr, 0) / args.length;
}

console.log(average(10, 20, 30));