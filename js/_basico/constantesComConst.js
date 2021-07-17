// Constantes são imutáveis e também tem escopo local e necessariamente precisam ser inicializadas com algum valor.

const nome = 'Rafael';
//nome = 'James';
console.log(nome); // erro - const não pode ser reatribuida

//escopo

function soma(a, b) {
  const sum = a + b;  
  console.log(sum);
}

soma(1, 2);
console.log(sum); // erro pois a variavel sum só existe no escopo da function