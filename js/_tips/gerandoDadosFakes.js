// Gerando dados fakes no node.js

/* Existem muitos casos, como por exemplo quando estamos 
testando algum recurso da nossa aplicação ou fazendo testes 
automatizados, em que precisamos alimentar a nossa base de dados 
e escrever estas informações */

// NOTA: NECESSÁRIO INSTALAR O MÓDULO -> npm i faker 

const faker = require('faker');

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();

console.log(`Name: ${randomName}, Email: ${randomEmail}`);