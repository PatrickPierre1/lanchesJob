//Sequelize é um ORM
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite', //tipo de banco
    storage: './db/app.db' //onde o banco vai ser criado
});

module.exports = sequelize;




