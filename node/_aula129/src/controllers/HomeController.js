class HomeController {
  initialPage(request, response) {
    response.render('index');
  }
}

module.exports = new HomeController();