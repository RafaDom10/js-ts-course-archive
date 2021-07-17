// Exemplos e iterações com o for..in - lê os indices ou chaves do obj

// Iterando com array vetorial

const fruits = ['Apple', 'Banana', 'Grape'];
// retornando apenas o index
for (let index in fruits) {
  console.log(index);
}
// retornando os elementos
for (let fruit in fruits) {
  console.log(fruits[fruit]);
}


// Iterando com objetos

const person = {
  name: "Rafael",
  lastname: "Dom",
  age: 29,
};
// retornando apenas as keys
for (let key in person) {
  console.log(key);
}
// retornando os valores das keys
for (let value in person) {
  console.log(person[value]);
}
// ambos
for (let key in person) {
  console.log(key, person[key]);
}