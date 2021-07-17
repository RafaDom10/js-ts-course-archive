// Exportando modulos node

// exportando da maneira nova ES6 (necessário package.json { "type": ""module" } ).
const variavel1 = 10;
const variavel2 = 20;
const variavel3 = 30

export default variavel3; // ao exportar a variavel default ela pode atribuir qualquer nome no modulo de import

export { variavel1, variavel2, variavel3 }; // exportando multiplas variaveis, porem sem o default, necessario o mesmo nome no modulo de importe

// sempre preferir exportar como default, para ter flexibilidade posteriormente para utilizar outros nomes