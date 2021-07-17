// Exemplos de iteração com estrutura de repetição While e Do While

// Recomendo geralmente quando não se sabe o termino do laço

// While

let varCrontrol = 0;

while (varCrontrol <= 10) {
  console.log(varCrontrol);
  varCrontrol++; // nunca esquecer de incrementar a variavel de controle, se não teremos um loop infinito
}


// Exemplo
function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

let rand = randomNumber(1, 100);

while (rand !== 10) {
  rand = randomNumber(1, 100);
  console.log(rand);
}


// DO While

do {
  rand = randomNumber(1, 100);
  console.log(rand);
} while(rand !== 10);

// a diferença que ele executa primeiro e depois testa