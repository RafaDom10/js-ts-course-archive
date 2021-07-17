// Exemplo de utilização defineProperty e defineProperties

function Product(name, price, quantity) {
  Object.defineProperty(this, 'name', {
    enumerable: true, // mostra a key
    value: name, // valor
    writable: false, // alterável
    configurable: false, // configurável
  });

  Object.defineProperties(this, {
    quantity: {
      enumerable: true, // mostra a key
      value: quantity, // valor
      writable: false, // alterável
      configurable: false, // configurável
    },
    price: {
      enumerable: true, // mostra a key
      value: price, // valor
      writable: false, // alterável
      configurable: false, // configurável
    },
  });
}

const product01 = new Product('t-shirt', 29, 5);
console.log(Object.keys(product01));