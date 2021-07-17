
// fetch para buscar os dados do json
// fetch('pessoas.json')
//   .then(response => response.json())        // temos dois then por que o primeiro pegamos a resposta e convertemos para json, isso retorna uma nova promise, entao a segunda manda para a função que criamos 
//   .then(json => loadElementsOnPage(json));

// Utilizando o Axios - temos apenas uma promises que ja é passada diretamente na função
axios('pessoas.json').then(response => loadElementsOnPage(response.data));

function loadElementsOnPage(json) {
  const table = document.createElement('table');

  for (let person of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');    
    td.innerHTML = person.nome;
    tr.appendChild(td);

    td = document.createElement('td'); 
    td.innerHTML = person.idade;
    tr.appendChild(td);

    td = document.createElement('td'); 
    td.innerHTML = person.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector('.result');
  result.appendChild(table);
}