// Exemplo de reduce -> mais utilizada para reduzir um array a um elemento
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(total);

const sumDivisibleByTwo = numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) acc += curr;
  return acc;
}, 0);

console.log(sumDivisibleByTwo);