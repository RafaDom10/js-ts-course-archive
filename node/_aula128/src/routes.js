const { Router } = require('express');

const HomeController = require('./controllers/HomeController');

const router = Router();

router.get('/', HomeController.paginaInicial);
router.get('/contacts', HomeController.paginaContacts);

module.exports = router;