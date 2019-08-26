const Sequelize = require('sequelize');
const config = require('./config.js')[process.env.NODE_ENV];

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => {
        console.log("conectado ao bd");
    })
    .catch((err) => {
        console.log("Erro: ", err.message);
    });

module.exports = { sequelize, Sequelize };
