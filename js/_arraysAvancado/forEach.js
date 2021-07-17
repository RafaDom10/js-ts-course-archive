// Método de iterar forEach -> só esta disponivel para arrays

// Exemplo 1
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));

// Exemplo 2
let total = 0;
numbers.forEach(number => {
  total += number;
});
console.log(total);