const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo

    sequelize.define('Forms', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
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
            type: DataTypes.ENUM,
            values: ['english', 'spanish', 'french', 'german'],
            allowNull: false,
        },
        howFound: {
            type: DataTypes.ENUM,
            values: ['friends', 'online_search', 'advertisement'],
            allowNull: false,
        },
        subscription: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
        { timestamps: false});

};