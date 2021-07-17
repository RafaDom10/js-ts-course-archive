/* 
Rafael Dom tem 20 anos, pesa X kg tem X de altura e seu imc é de X
*/

const nome = 'Rafael Domingues';
const idade = 29;
const peso = 100;
const altura = 1.93;

function imc(peso, altura) {
  const imc = peso / (Math.pow(altura, 2));
  return imc;
}

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc(peso, altura).toFixed(2)}`);


// Exercicio 2

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[ varA, varB, varC ] = [ varB, varC, varA ];

console.log(varA, varB, varC);