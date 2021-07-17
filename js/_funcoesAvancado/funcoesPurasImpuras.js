// Funções puras: não alteram e não dependem de nenhum dado externos.
// Funções impuras: podem alterar e depender de algum dado externo.

// Exemplo pura
/* Ambas sempre retornão o mesmo valor
se os inputs forem os mesmos, além de não 
modificarem nenhum dado externo */

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

// Exemplo impura
// Depende de um valor interno
const x = 2;
function sumTwo(y) {
  return y * y;
}

//Modifica um valor externo
const person = { name: 'Synyster'};
function changeName(name) {
  person.name = name;
}