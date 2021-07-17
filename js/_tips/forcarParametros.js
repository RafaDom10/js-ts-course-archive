// Trick para pararmos a função caso algum parâmetro que queiramos que seja obrigatório não seja informado.

function required() {
  throw new Error('Required param');
}

function printName(name = required()) {
  console.log(name);
}

//printName(); // -> throw new Error('Required param');
printName('Rafael'); // -> Rafael 