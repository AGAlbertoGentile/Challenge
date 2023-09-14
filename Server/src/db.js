require("dotenv").config();
const fs = require('fs');
const path = require('path');

const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_URL, DB_NAME } = process.env;

const sequelize = new Sequelize(`${DB_NAME}`,`${DB_USER}`,`${DB_PASSWORD}`, {
    host: DB_HOST,
    dialect: 'postgres', // Ajusta la base de datos que estás utilizando (por ejemplo, 'mysql', 'postgres', 'sqlite')
    logging: false,
    native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Form } = sequelize.models;

// Exporta el modelo de Sequelize y la conexión
module.exports = {
    ...sequelize.models, // para poder importar el modelo así: const { Form } = require('./db.js');
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};