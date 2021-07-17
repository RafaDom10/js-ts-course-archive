// Exemplos de operadores ternários (? :) - utilizados quando se tem um if-else

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log('Vip');
} else {
  console.log('Normal');
}

// Utilizando operação ternária e atribuindo a uma variável
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

// outra maneira
pontuacaoUsuario >= 1000 ? console.log('vip') : console.log('normal');


// setando um valor padrao com operadores ternários
const corUsuario = 'red';
const corPadrao = corUsuario || 'preto'; // se corUsuario === null é definida a cor padrão -> 'preta'
console.log(corPadrao);