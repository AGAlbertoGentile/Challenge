const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_URL } = process.env;

const sequelize = new Sequelize(DB_URL, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres', // Ajusta la base de datos que estás utilizando (por ejemplo, 'mysql', 'postgres', 'sqlite')
    logging: false,
    native: false,
});

// Exporta el modelo de Sequelize y la conexión
module.exports = {
    ...sequelize.models, // para poder importar el modelo así: const { Form } = require('./db.js');
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};