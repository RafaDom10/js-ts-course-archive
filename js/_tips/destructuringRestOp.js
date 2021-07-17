// Na teoria, é uma técnica de extração de dados de arrays e objetos atribuindo estes dados às suas próprias variáveis.

// Exemplo
const person = {
  firstName: 'Rafael',
  lastName: 'Dom',
};

const { firstName } = person;
console.log(firstName); // -> Rafael

// Exemplo 2
const people = [
  { firstName: 'Rafa',
    lastName: 'Dom' 
  },
  { firstName: 'Steve',
    lastName: 'Jobs' 
  },
];

const [ rafael, steve ] = people;
console.log(rafael);
console.log(steve);

// Exemplo 3
const person1 = {
  firstName: 'Steve',
  lastName: 'Jobs'
};

function getFirstName({ firstName }) { 
  return firstName;
}

console.log(getFirstName(person1));


/* Rest, o rest é literalmente o resto,
ele nos permite representar um número indefinido 
de parâmetros, ou número de argumentos no caso 
de funções, por exemplo. */

// Exemplo
const person2 = { 
  firstName1: 'Carol',
  lastName1: 'Macedo',
  age: 27,
};

const { firstName1, ...rest } = person2;
console.log(firstName1); // Carol
console.log(rest); // { lastName1: 'Macedo', age: 27 }

//Exemplo 2
function values(...args) {
  return args;
}

console.log(values(1,2,3,4,5))// 1,2,3,4,5