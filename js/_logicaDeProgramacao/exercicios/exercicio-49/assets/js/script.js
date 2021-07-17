// Criando elementos em html com interação for

const elements = [
  {tag: 'p', text: 'Phrase 1'},
  {tag: 'div', text: 'Phrase 2'},
  {tag: 'footer', text: 'Phrase 3'},
  {tag: 'section', text: 'Phrase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div'); // criando uma div para colocar todos os elementos dentro para posteriormente apenas inserir a div no container

// percorrendo o elementos
for (let i = 0; i < elements.length; i++) {

  // desctructuring para poder usar as tag separadas e os textos
  let { tag, text } = elements[i];

  // criando tags
  let tagCreated = document.createElement(tag);

  // criando um node de texto
  let textCreated = document.createTextNode(text);

  // adicionando o texto dentro da tag html
  tagCreated.appendChild(textCreated);

  div.appendChild(tagCreated);  // appendChild anexa um nó (node) como ultimo child de um node
}

container.appendChild(div);