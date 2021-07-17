function createPerson01(name, surname) {
  return {
    name,
    surname,
    say() {
      console.log('Hello!!');
    },
    eat() {
      console.log('I eat!!');
    },
    drink() {
      console.log('I drink!!');
    },
  };
}
const person01 = createPerson01('Rafael', 'Domingues');
console.log(person01);


// Criando a factory porem com prototype
function createPerson02(name, surname) {
  const prototype = {
    say() {
      console.log('Hello!!');
    },
    eat() {
      console.log('I eat!!');
    },
    drink() {
      console.log('I drink!!');
    },
  };
  
  return Object.create(prototype, {
    name: { value: name },
    surname: { value: surname },
  });
}

const person02 = createPerson02('Rafael', 'Domingues');
console.log(person02);


// Desacoplando (o mais ideal). (composição, mixing)

const say = {
  say() {
    console.log('Hello!!');
  }
}

const eat = {
  eat() {
    console.log('I eat!!');
  }
}

const drink = {
  drink() {
    console.log('I drink!!');
  }
}

// agora aqui são colocados os métodos desejados
const prototypePerson = { ...say, ...eat, ...drink };  // ou -> Object.assingn({}, say, drink, eat);

function createPerson03(name, surname) {  
  return Object.create(prototypePerson, {
    name: { value: name },
    surname: { value: surname },
  });
}

const person03 = createPerson03('Rafael', 'Domingues');
console.log(person03);