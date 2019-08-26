module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Eventos', {
            _id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            local: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Eventos');
    }
};