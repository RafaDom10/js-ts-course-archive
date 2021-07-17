// Exemplos da utilização de break e continue em laços de repetição
// Continue -> continua pra a próxima iteração
// Break -> sai do laço

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exemplo com for..of
for (let number of numbers) {
  if (number === 3) break; // ao encontrar o numero 3 ele irá parar / parar exibir tambem o numero 3 basta mover a instrução antes do if
  console.log(number);
}

for (let number of numbers) {
  if (number === 5) continue; // ao encontrar o numero 5, irá pular o numero 5 e continuar  
  console.log(number);
}