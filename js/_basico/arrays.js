// exemplos arrays

// criando array literal
const names = ['Rafael', 'Ana', 'Sophie'];

// adicionando elemetos
names[3] = 'James'; // adiona o elemento na posição desejada
names[names.length] = 'Fim'; // adiciona o elemento ao fim do array
names.push('Scott');  // adiciona o elemento ao fim do array
names.unshift('Test'); // adiciona o elemento no inicio do array

console.log(names);

// Removendo elementos
names.pop(); // remove o ultimo elemento do array
const removido = names.pop(); // salvando o ultimo elemento do array em uma variavel e removendo do array
names.shift(); // remove do inicio do array
delete names[1]; // deleta pelo indice e ficara um elemento vazio no array < 1 empty item >

console.log(names);
console.log(removido);

// slice com array
console.log(names.slice(0, 3));