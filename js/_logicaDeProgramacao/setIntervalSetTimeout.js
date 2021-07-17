// Exemplos de utilização setInterval e setTimeout

// função que mostra a data atual

function showHours() {
  let date = new Date();

  return date.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}




// setInterval vai determinar um intervalo de tempo para que determinada ação ocorra, ela executa sem fim 

const timer = setInterval(function () { console.log(showHours()) }, 1000);  // Primeiro parametro: apenas passo a função como referencia para o setInterval, Segundo parametro é passado de quanto em quanto tempo ele sera executada em milisegundos 1000mls -> 1s


// setTimeout - diferente da setInterval , o parametro de milisegundos determina quando ela irá  executar determinada ação.

setTimeout(function() {
  console.log('Hello world!')
}, 1000); // irá executar após 5 segundos

setTimeout(function() {
  clearTimeout(timer);
}, 5000) // aqui ele executa o setInterval durante 5000 mls