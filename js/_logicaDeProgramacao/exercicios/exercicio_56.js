// Escreva uma função que recebe 2 números e retorne o maior deles

function highestValue1(value1, value2) {
  const value = Math.max(value1, value2);
  return value;
}
console.log(highestValue1(1,10));

// ou
function highestValue2(value1, value2) {
  return value1 > value2 ? value1 : value2;
}

console.log(highestValue2(1,15));

// refatorando
const highestValue3 = (value1, value2) => value1 > value2 ? value1 : value2;

console.log(highestValue3(1,20));