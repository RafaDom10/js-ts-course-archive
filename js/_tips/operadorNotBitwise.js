/*
Basicamente ele faz a mesma coisa que o Math.floor
(transforma um número float em inteiro sem arredondar pra cima nem pra baixo). 
Em alguns casos usar o operador double tilde (~~) 
se sai mais performático do que o Math.floor!
*/

const near2 = 2.1;
const near3 = 2.9;

console.log(Math.floor(near2)); // -> 2
console.log(Math.floor(near3)); // -> 2

console.log(~~near2); // -> 2
console.log(~~near3); // -> 2