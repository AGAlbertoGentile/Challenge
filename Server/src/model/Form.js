const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo

    sequelize.define('Form', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        howFound: {
            type: DataTypes.INTERGER,
            allowNull: false,
        },
        subscription: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
        { timestamps: false});

};