// Revisão básico de arrays

const names = ['Rafael', 'Dom', 'Tolive'];  // criando array literal
names[2] // acessando elemento do array pelo index
delete names[1]  // deletando elemento pelo index
const newNames = [...names];  // copiando todos elementos do array name com spread operator
names.length; // tamanho do array
names.pop(); //remover elementos, pop() remove o ultimo elemento, e retorna o elemento removido
names.shift(); //remover elementos, shift() remove o primeiro elemento, e retorna o elemento removido
names.push('Travis');  // adicionando elemento ao final do array
names.unshift('Lincon');  // adicionando elemento no inicio do array -> afeta o index dos elementos
names.slice(0, 2); // fatiar os elementos do array -> o elemento 2 não sera incluido

// Dividindo um string e criando um array
const nameString = 'Rafael Domingues Antonio';
const nameArray = nameString.split(' ');
console.log(nameArray);
// Unindo todos o valores do array
const nameStringAgain = nameArray.join(' ');
console.log(nameStringAgain);

// Destructuring
const [ name, midname, lastname ] = nameArray;
console.log(name)