// Manipulando arrays 

// .map() A função map() itera um array e devolve um novo array como result.
const numbers = [2, 4, 6, 8];
const x2 = numbers.map(item => item * 2);

console.log(numbers); // [2, 4, 6, 8]
console.log(x2); // [4, 8, 12, 16]

// .filter() cria um novo array com todos os itens que passarem pelo nosso teste.
const ages = [18, 17, 23, 15, 13, 45];
const plus18 = ages.filter(age => age >= 18);

console.log(ages); // [18, 17, 23, 15, 13, 45]
console.log(plus18); // [ 18, 23, 45 ]

// .find() busca e retorna o primeiro item que passar pelo nosso teste.
const numbers1 = [2, 4, 6, 8];
const fistFound = numbers1.find(number => number > 4);

console.log(numbers1); // [ 2, 4, 6, 8 ]
console.log(fistFound); // 6

// .reduce() literalmente reduz todos os itens a apenas um valor.
const numbers2 = [1, 2, 3, 4, 5];
const reducer = (total, current) => total + current;
const sum = numbers.reduce(reducer);

console.log(sum); // 15


// EXEMPLOS DE CASOS REAIS

// Ex.: .filter()
const people = [
  { name: 'Rafael', age: 22 },
  { name: 'John', age: 15 },
  { name: 'Ozzy', age: 12 },
  { name: 'The Rev', age: 38 },
];

const adults = people.filter(person => person.age > 21);
console.log(adults);

// Ex.: .find()
const users = [
  { id: 1, name: 'Rafael' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Ozzy' },
  { id: 4, name: 'The Rev' },
];

const user = users.find(user => user.id === 3);
console.log(user);

// Ex.: .reduce()
const products = [
  { name: 'Macbook Pro', quantity: 1, price: 1299 },
  { name: 'Iphone 11 Pro', quantity: 2, price: 999 },
  { name: 'Ipad', quantity: 1, price: 7799 },
  { name: 'Imac', quantity: 3, price: 2999 },
];

const totalPrice = products.reduce(
  (total, currentItem) => (
    total + ( currentItem.price * currentItem.quantity )
  ),
  0 // valor inicial como segundo parâmetro de .reduce
);
console.log(`Total value: ${totalPrice}`);