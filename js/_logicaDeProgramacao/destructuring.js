// Exemplos de como atribuir usando o destructuring

// ARRAY

let [a, b, c] = [1, 2, 3];  // atribuição via destructuring
console.log(a, b, c);

const numbers = [4, 5, 6]; // desestruturando um array
[d, e, f] = numbers;
console.log(d, e, f);

const numbers02 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [fistNumber, secondNumber] = numbers02;  // irá pegar apenas os dois primeiros valores
console.log(fistNumber, secondNumber);

const numbers03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [index0, index1, ...rest] = numbers03; // ...rest -> irá pegar o restante dos valores, excluindo os dois primeiros
console.log(rest);

const [ , , index2, , , index5] = numbers03; // utilizar vírgulas para excluir valores indesejáveis
console.log(index2, index5);

const arrayOfArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; // acessando elemento dentro de array de arrays
const [ , [ , , six]] = arrayOfArray;
console.log(six);


// OBJECT

const person = {
  name: 'Rafael',
  lastName: 'Dom',
  age: 29,
  address: {
    street: 'Augusto Cavalcanti',
    number: 227
  }
}

const { name, lastName, age } = person;  // atribuição via destructuring -> utilizando o mesmo nome da key do obj.
console.log(name, lastName, age);

const { name: otherName, age: old } = person; // atribuição via destructuring -> utilizando outro nome.
console.log(otherName, old);

// acessando o obj dentro de outro obj
const { address: { street } } = person;
console.log(street);
const { address: { street: rua }, address: { number: numero } } = person;
console.log(rua, numero);

// Utilizando operador ...rest
const { name, ...resto } = person;
console.log(resto);