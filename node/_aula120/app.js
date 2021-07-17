const sum = require('./module');

console.log(sum(3, 2));

// variaveis internas dentro do module -> __filename , __dirname
console.log(__filename);  // caminho absoluto do arquivo
console.log(__dirname);  // caminho absoluto do diretorio

// Manipulando caminhos com path
const path = require('path');
console.log(path.resolve(__dirname, '..', '..', '..'));  // voltando até o diretorio Development