/* Resumidamente, o Spread Operator é
uma funcionalidade que recebemos com a chegada
do ES6.
De forma didática: essa funcionalidade nos permite
unir dois arrays ou objetos em um só. */

// Exemplo
const ids = [1, 2, 3, 4, 5];
const newIds = [6, 7, 8, 9];
const group = [...ids, ...newIds]; // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Exemplo obj
const person = {
  name: 'Jane',
  surname: 'Silver',
};
console.log(person); // { name: 'Jane', surname: 'Silver' }

const personWithAge = {
  ...person,
  age: 30,
};
console.log(personWithAge); // { name: 'Jane', surname: 'Silver', age: 30 }
