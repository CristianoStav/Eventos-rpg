const sequelize = require('./sequelize').sequelize;

sequelize.import('../models/Eventos');

const Eventos = sequelize.models.eventos;


module.exports = { sequelize };