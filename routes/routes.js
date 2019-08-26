const Routes = require('express').Router();
const EventosController = require('../controllers/EventosController');

Routes.get('/', EventosController.getEvents);

Routes.post('/cadastrar', EventosController.cadastrar);

module.exports = Routes;