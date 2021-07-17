class HomeController {
  paginaInicial(request, response) {
    response.send('Hello from Controller');
  }

  paginaContacts(request, response) {
    response.send('Hello from Contacts');
  }
}

module.exports = new HomeController();