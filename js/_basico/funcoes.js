// Exemplos de funções

// criando uma função

function soma(a, b) {
  return a + b;
}

// atribuida a uma variavel - função anônima
const soma2 = function (a, b) {
  return a + b;
};

// arrow function
const soma3 = (a,b) => a + b;  // return implicit

console.log(soma(1,2), soma2(2,3), soma3(3,4));
