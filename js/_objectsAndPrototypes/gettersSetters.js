// Exemplos de utilização getters and setters

function Product(name, price, quantity) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, 'quantity', {
    enumerable: true,
    configurable: false,
    get: () => quantity,
    set: (value) => {
      if (value !== 'number') {
        throw new TypeError('Only numbers!');
      }
      this.quantity = value;
    },
  });
}

const product01 = new Product('t-shirt', 13.40, 8);
product01.quantity = 'test';
console.log(product01.quantity)


// Exemplo com a função factory

function createProduct(name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    }
  }
}