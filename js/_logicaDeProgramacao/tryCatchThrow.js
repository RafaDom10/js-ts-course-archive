// Tratamento de erros e lançamentos de erros

// exemplos

// exemplo de lançamento de erro
function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x and y must to be numbers'); // irá lançar o erro de que não é permitido string
  }
  return x + y;
}

// tratando o erro / capturando
/* try {
  console.log(sum(2, 'a')); // com erro
} catch (err) {
  console.log('Alguma coisa amigavel para o usuário');
} */


// finally
try {
  // É executada quando não há erros
} catch (err) {
  // É executada quando há erros
} finally {
  // Será executado sempre
}

// exemplo

try {
  console.log(sum(2, 'a')); // com erro
} catch (err) {
  console.log('Erro: Alguma coisa amigavel para o usuário');
} finally {
  console.log('Finally ' + sum(2, 5)); // no outro exemplo o programa iria terminar com o erro e se tivesse algumas instrução depois do erro, não seria executada
}

// Exemplo 2

function returnHour(hour) {
  // se a data foi enviada e não for instanceof Date lança o erro
  if (hour && !(hour instanceof Date)) {
    throw new TypeError('Expected instance of Date');
  }

  // se não for enviada a data, instancia uma nova data
  if (!hour) {
    hour = new Date();
  }

  return hour.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

// tratando o erro
try {
  const hour = returnHour();
  console.log(hour);
} catch (e) {
  // tratar erro
  console.log('Hours invalid')
} finally {
  console.log('Have a nice day!')
}
