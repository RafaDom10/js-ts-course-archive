// Escrever e ler aquivos com node.js

const fs = require('fs').promises;
const path = require('path');
const pathFile = path.resolve(__dirname, 'test.txt');
const pathFile2 = path.resolve(__dirname, 'test2.txt');

fs.writeFile(pathFile, 'hello', { flag: 'w' });  // flag w -> sobrescreve o arquivo se ja existente
fs.writeFile(pathFile2, '\nMenssagem escrita com flag "a"', { flag: 'a' });  // flag a -> acrescenta ao arquivo se ja existente, necessário acrescenta o \n para quebra de linha

// Convertendo um array de objtos em arquivo formato json

const pathJson = path.resolve(__dirname, 'testPeople.json');

const people = [
  {name: 'tom'},
  {name: 'jay'},
  {name: 'alex'},
  {name: 'ann'},
  {name: 'jenn'},
];

const jsonFile = JSON.stringify(people, '', 2); // segundo parametro string vazia para formatação, terceiro parametro identação de 2 espaces

fs.writeFile(pathJson, jsonFile, { flag: 'a' });


// função que escreve arquivos

const pathJson2 = path.resolve(__dirname, 'testPeople2.json');

const writeFiles = (path, data) => {
  fs.writeFile(path, data, { flag: 'w' });
};

writeFiles(pathJson2, jsonFile)