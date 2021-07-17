// Exemplos de uso do método spli()

// index neg.    -5        -4       -3        -2      -1
// index          0         1        2         3       4
const names = ['Rafael', 'Maria', 'Scott', 'Carol', 'Sophie'];
console.log(names);

// splice(1, 2, 3) -> 1args: index começar apartir, 2args: quantos elemento remover, 3args: elementos para adicionar.

names.splice(4, 1); // remove o elemento de index 4 e apenas remove 1 elemento.
console.log(names); // o elemento removido tambem pode ser armazenado em uma variavel porem vai ser armazenado em forma de array

names.splice(1, 0, 'Toliver'); // adicionando elemento no index -> 1, removendo -> 0 , elemento adicionado -> 'Toliver'
console.log(names);

names.splice(2, 1, 'James'); // removendo e adicionando remv. -> index 2, qtd -> 1 elemento, add -> 'James'
console.log(names); // remove elemento do index passado e inclui o novo elemeto no lugar