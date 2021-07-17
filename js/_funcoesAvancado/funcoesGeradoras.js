function* geradora1() {
  // Códgo qualquer ...
  yield 'Valor 1';
  // Códgo qualquer ...
  yield 'Valor 2';
  // Códgo qualquer ...
  yield 'Valor 3';
}

const g1 = geradora1();
// console.log(g1.next().value); // -> 'Valor 1'
// console.log(g1.next().value); // -> 'Valor 2'
// console.log(g1.next().value); // -> 'Valor 3'

// iterando - ele entrega ate o ultimo valor
for (let valor of g1) {
  console.log(valor);
}