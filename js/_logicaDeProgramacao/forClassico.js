// Exemplos de estruturas de repetição básicas com for

// como nas linguagens mais tradicionais é possivel ter o mesmo tipo de for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ou
let varControl = 0;
for (; varControl < 10; varControl++) {
  console.log(varControl);
}
//ou
for (; varControl < 10; ) {
  console.log(varControl);
  varControl++;
}


// Other exemple
const fruits = ['Apple', 'Banana', 'Grape', 'Orange']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}