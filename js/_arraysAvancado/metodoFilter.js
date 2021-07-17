// Exemplos de utilização de filter() -> sempre retornara um array com a mesma quantidade ou menos

// Método filter -> filtra o array de acordo com algum parametro

//Retorne numbers maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];

// function callbackFilter(value) {
//   return value > 10;
// }

// const filteredNumbers = numbers.filter(callbackFilter);
// console.log(filteredNumbers);

// Porem muito mais pratico apenas passar uma função anônima
const filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers);


// Exemplo um pouco mais complexo
/* 
Retornar as pessoas que tem p nome com 5 letras ou mais;
Retornar as pessoas com mais de 50 anos;
Retornar as pessoas cujo o nome termina com letra A;
Retornar as pessoas cujo o nome começa com a letra J.
*/
const person = [
  { name: 'Jane', age: 55 },
  { name: 'Rafael', age: 23 },
  { name: 'Carolina', age: 19 },
  { name: 'Bob', age: 47 },
  { name: 'Julia', age: 62 },
  { name: 'Joy', age: 43 }
];

const biggestNames = person.filter(person => person.name.length >= 5);
console.log(biggestNames);

const over50Age = person.filter(person => person.age > 50);
console.log(over50Age);

const nameEndsWithA = person.filter(person => person.name.toLowerCase().endsWith('a'));
console.log(nameEndsWithA);

const nameStartsWithJ = person.filter(person => person.name.toLowerCase().startsWith('j'));
console.log(nameStartsWithJ);


// Retornando somente o nome das pessoas com mais de 50 anos.
const onlyName = person.filter(person => person.name.length >= 5).map(person => person.name);
console.log(onlyName); // map() retorna um array com o valor da callback