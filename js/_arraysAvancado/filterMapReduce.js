// Combinando os tres métodos

// Retornar a soma do dobro de todos os pares
// -> filtrar pares 
// -> Dobrar os valores dos
// -> Reduzir (somar tudo)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const evenNumbers = numbers
  .filter(number => number % 2 === 0)
  .map(number => number * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(evenNumbers); // -> 324