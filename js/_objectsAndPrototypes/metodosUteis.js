// Métodos úteis para trabalhar com objetos.

const product = {
  name: 'Product',
  price: 10
};
console.log(product);

// Copiar objetos
const anotherProduct = {...product};
anotherProduct.price = 100;  // não altera o objeto copiado
console.log(anotherProduct);
// outra maneira
const product02 = Object.assign({}, anotherProduct);
console.log(product02);
// outra maneira - mais manual porem ultil para copiar apenas um atributo
const product03 = { name: anotherProduct.name};
console.log(product03);


// Ver as keys dos objetos -> Object.key()
 console.log(Object.keys(anotherProduct));
 // Object.values() -> retorna os valores do obj
 console.log(Object.values(anotherProduct));
 // Object.entries() -> retorna tanto as key quanto os values em arrays
 console.log(Object.entries(anotherProduct));
// iterando com o entries
for (let entry of Object.entries(anotherProduct)) {
  console.log(entry); // gera um array
}
// e podemos usalo para fazer destructuring
  for (let [chave, valor] of Object.entries(anotherProduct)) {
    console.log(chave, valor); // gera um array
  }


 // Impedir qualquer tipo de modificação de um objeto -> Object.freeze()
 Object.freeze(anotherProduct); // -> não será mais possível modificá-lo
 anotherProduct.name = 'another' // não irá funcionar


 // Object.getOwnPropertyDescriptor -> mostra as propriedades que foram definidas com defineProperty ou defineProperties.
console.log(Object.getOwnPropertyDescriptor(anotherProduct, 'name')); // primeiro parametro -> Objeto, segundo parametro -> propriedade que deseja verificar.
