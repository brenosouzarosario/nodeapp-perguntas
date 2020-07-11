const Sequelize = require("sequelize");

const connection = new Sequelize('Perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;