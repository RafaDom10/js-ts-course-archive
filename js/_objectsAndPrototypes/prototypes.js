/* 
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipos
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde pra futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor 
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Exemplificando o uso do prototy

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.completeName = () => `${this.name} ${this.surname}`;
}

// Intância
const person01 = new Person('Rafael', 'Dom');
const person02 = new Person('Carolina', 'Macedo');

// Desta maneira cada instância do meu obj tera junto a ele uma fução completeName e isso acarreta em perca de desempenho, utilizando prototype podemos 'omitir' a função em todos os objetos

Person.prototype.completeName02 = () => `${this.name} ${this.surname}`;


// Manipulando prototype

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percentage) {
  this.price = this.price - (this.price * (percentage / 100));
}
Product.prototype.increase = function (percentage) {
  this.price = this.price + (this.price * (percentage / 100));
}


// Intânciando new product
const product01 = new Product('t-shirt', 29.95);  // este produto possui as funções discount/increase.
console.log(product01);
product01.increase(50);
console.log(product01);

// Criando um produto literal que não possui as funções discount/increase.
const product02 = {
  name: 'Chair',
  price: 100.99,
};

// passando o prototype para meu product02 para receber/herdar as funções (nota: os atributos precisão ter o mesmo nome para a função funcionar).
Object.setPrototypeOf(product02, Product.prototype); // agora o produto02 possui as funções
console.log(product02);
product02.increase(50);
console.log(product02);


// Criando um objeto e já setando o prototype e podemos passar mais chaves junto com o setamento do prototype
const product03 = Object.create(Product.prototype, {
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
  } // setando um novo atributo
});

// pasando valores paras a chaves do obj product03
product03.name = 'Jeans';
product03.size = 40;
product03.price = 299;
product03.color = 'red';  // outra forma de setar um novo atributo (key: value)

console.log(product03);