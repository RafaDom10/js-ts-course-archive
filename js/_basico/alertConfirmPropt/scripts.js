// exemplos de algumas funcoes do window.

window.alert('message');
window.confirm('Deseja realmente apagar o arquivo?');


// Exemplo básico com retorno de valores

let conf = false;

while (conf === false) {  
  const name = prompt('Digite o seu nome.');  
  conf = confirm(`Seu nome é ${name}?`);
}

// exercicio proposto

const number = prompt('Digite o primeiro numero: ');
const number2 = prompt('Digite o segundo numero: ');
const sum = Number(number) + Number(number2);
alert('O resultado é ' + sum);