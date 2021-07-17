// Exemplo de trabalho com  herança e abstração

/* 
Modelo de negocio:
Loja
Produtos -> desconto, aumento
Shirt = cor
Caneca = material
*/

// Produto abstrato
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Funções de aumento e desconto 
Product.prototype.discount = function (percentage) {
  this.price = this.price - (this.price * (percentage / 100));
}
Product.prototype.increase = function (percentage) {
  this.price = this.price + (this.price * (percentage / 100));
}

// Especializando a função Product -> Shirt
function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

const product = new Product('GEN', 100);
const tShirt = new Shirt('t-shirt', 19.99, 'black');
console.log(product);
console.log(tShirt);

// Especializando a função Product -> Mug
function Mug(name, price, material) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, 'quantity', {
    enumerable: true,
    configurable: false,
    get: () => quantity,
    set: function(value) {
      if (typeof value !== 'number') return;
      quantity = value;
    }
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const mug = new Mug('Mug avengers', 16.99, 'ceramic', 5);
console.log(mug);