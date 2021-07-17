const Home = require('../models/Home');

Home.create({
  titulo: 'Title Test',
  descricao: 'Test description',
}).then(data => console.log(data)).catch(err => console.log(err));

class HomeController {
  initialPage(request, response) {
    response.render('index');
  }
}

module.exports = new HomeController();