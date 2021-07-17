const fs = require('fs');
const path = require('path');

// Função para leitura de arquivos

const readFiles = (path) => {
  fs.readFile(path, 'utf8');
};


// lendo arquivos

// caminho
const pathFile = path.resolve(__dirname, 'testPeople.json');

async function readingFiles(path) {
  const data = await readFiles(path);
  render(data);
}

function render(data) {
  console.log(data);
}

readingFiles(pathFile);
