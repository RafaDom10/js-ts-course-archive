// 1 - Declaração de função (Function hoisting)
function sayHello() {
  console.log('Hello');
}
sayHello();


// 2 - First-calss objects (Objetos de primeira classe)
// Function expression
const imAData = function() {
  console.log('I\'m a data');
}; 
// agora podemos usar essa função como parametro para outra função
function execFunc(func) {
  func();
}
execFunc(imAData);


// 3 - Arrow function
const funcArrow = () => console.log('i\'m a function');
funcArrow();


// 4 - dentro de um object
const obj = {
  speak() {
    console.log('i\'m speaking');
  }
}
obj.speak();