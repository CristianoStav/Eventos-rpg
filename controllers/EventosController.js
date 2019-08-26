const Events = require('../models/Daos/Eventos');

module.exports = {
    getEvents: async (req, res) => {
        const eventos = await Events.getAll();
        return res.json(eventos);
    },
    cadastrar: async (req, res) => {
        const evento = req.body;
        const cadastro = await Events.create(evento);
        return res.json(cadastro);
    }
};