const { Router } = require('express');

const HomeController = require('./controllers/HomeController');

const router = Router();

router.get('/', HomeController.initialPage);

module.exports = router;