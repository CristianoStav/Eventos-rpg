const sequelize = require('../../config/database').sequelize;
const Eventos = sequelize.models.Eventos;

module.exports = {

    getAll: async () => {
        const eventos = await Eventos.findAll();
        const arrayEventos = eventos.map((ev) => ev.dataValues);

        if (arrayEventos.length) {
            return arrayEventos;
        }

        return null;
    },

    create: (evento) => {
        return Eventos.create(evento)
            .then(function () {
                return { result: "Evento criado com sucesso!" };
            });
    }
};