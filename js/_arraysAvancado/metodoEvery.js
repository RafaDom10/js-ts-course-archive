// Testar todos os itens de um array

const numbers = [11, 9, 12, 23];
const over10 = numbers.every(number => number > 10); // -> false

const people = [
  { name: 'Ozzy', age: 70 },
  { name: 'Matt Shadowns', age: 38 },
  { name: 'Robert Plant', age: 71 },
];

const everyBodyIsAdult = people.every(person => person.age >= 21); // -> true
