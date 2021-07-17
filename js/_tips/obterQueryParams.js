/* É muito comum a gente precisar passar alguns parâmetros
 como query strings na nossa URL para, como por exemplo, fazer uma busca,
um filtro ou uma ordenação */

//mywebsite.com/?search=hello&filter=123

const urlParams = new URLSearchParams(window.location.search);

const serch = urlParams.get('search'); // -> hello
const filter = urlParams.get('filter'); // -> 123
