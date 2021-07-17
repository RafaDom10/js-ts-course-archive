// Exemplos de parametros de function

function func() {
  console.log('test');
}
func('value'); // mesmo passando um parametro, ele não é respeitado porque a função foi criada sem parametro

// todos os valores passado para uma função que não possua paramentros, vai parar nos arguments.
function func2() {
  console.log(arguments);
}
func2('value', 1, 2, 3, 4, 5); // e eles podem ser acessados como se fosse um array, pelo index -> arguments[0]

// exemplo do uso de arguments -> APENAS funções definidas com a palavra function existe o arguments
function sum() {
  let total = 0;  
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // passando qualquer quantidade de parametros
// arguments na arrow function fuciona se utilizar o operador rest -> function sum(...args){}


// Definindo um valor padrao de parametro para função

function numbers(a, b = 0) {  // se o parametro b não for passado ele assume o valor padrão
  return a + b;
}
console.log(numbers(2));