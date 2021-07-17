/* Promises servem para trabalharmos com código assíncrono
É literalmente uma 'promessa', de que aquela função retornará um resultado
positivo ou negativo em algum momento, como a chamada a uma API, por exemplo */

// Sintaxe
/* 
É muito simples, o único parâmetro que uma promise recebe é uma função com dois
parâmetros: resolve para sucesso e reject, para disparar erros.
*/
// Exemplo
const promise = new Promise((resolve, reject) => {
  const value = Math.random();

  if (value > 0.5) {
    resolve(value); // sucesso cai no then().
  } else {
    reject('Valor é menor do que 0.5'); // erro, cai no catch().
  }
}).then(function (value) {
  console.log('Sucesso! O valor retornado foi: ' + value);
}).catch(function (error) {
  console.log(error); // valor é menor do que 0.5.
});


// Exemplo (async/await)
async function run() {
  const promise = new Promise((resolve, reject) => {
    const value = Math.random();

    if (value > 0.5) {
      resolve(value); // sucesso, cai no try
    } else {
      reject('Valor é menor do que 0.5'); // erro, cai no catch
    }
  });

  try {
    const value = await promise;
    console.log('Sucesso! O valor retornado foi: ' + value);
  } catch (error) {
    console.log(error); // valor é menor do que 0.5.
  }
}