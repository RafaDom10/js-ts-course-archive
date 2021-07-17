// Exemplificando um servidor no espress

const express = require('express'); // importe do express

const app = express();  // atribuindo à variavel app que recebe a exec.. do express

app.use(express.urlencoded({ extended: true }));

// Utilizando o método HTTP -> get com o express
app.get('/', (request, response) => {
  response.send('Hello World from Express... Again!');  // enviando uma menssagem com o método send 
});

app.get('/contacts', (request, response) => {
  response.send('Send from contacts!');  // criando uma segunda rota
});

app.get('/contacts/form', (request, response) => {
  response.send(`
    <form action="/contacts/form" method="POST">
      Name: <input type="text" name="nameContact">
      <button>Send</button>
    </form>
  `);  // criando um form
});

app.post('/contacts/form', (request, response) =>{  
  response.send(`Form Received! Name: ${request.body.nameContact}`);  // recebendo o form
})

// selecionando a portal no qual será exibido a menssagem
app.listen(3001, () => console.log('> Server Started at http://localhost:3001'));