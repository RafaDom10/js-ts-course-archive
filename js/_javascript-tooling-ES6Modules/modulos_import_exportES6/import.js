// IMPORTANDO MODULOS

// maneira nova ES6 (necessário package.json { "type": ""module" } ).

import * as v from './export.js'; // importando todas as variaveis, dessa forma podemos dar outro nome também

import { variavel1 } from './export.js'; // importando apenas uma variavel

import v3 from './export.js'; // importando uma variavel default

console.log(v.variavel1); // por padrão foi importado a variavel default por isso podesse renomear
console.log(v.variavel2);
console.log(v.variavel3);

console.log(variavel1); // a variavel nao declarada como default tem que usar o mesmo nome

console.log(v3);