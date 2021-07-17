// Variaveis com let são mutaveis e tem seu escopo local

let nome = 'Joao';
nome = 'Rafael';

console.log(nome); // saida sera Rafael

// escopo local

function soma(a, b) {
  let sum = 0;
  sum = a + b;
  console.log(sum); 
  // a variavel sum só existente no escopo local e não pode ser acessada fora da fução
}
soma(1, 2);
console.log(sum);  // error sum is not defined -> a variavel não esta definida