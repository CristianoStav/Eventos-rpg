const config = require('../config/sequelize');
const Sequelize = config.Sequelize;

const Eventos = config.sequelize.define('Eventos', {
    _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    local: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
    },
});

module.exports = () => Eventos;
