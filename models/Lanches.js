const Sequelize = require('sequelize');
const db = require('./../db/conexao');

const Lanches = db.define('lanche', {
    nome: {
        type: Sequelize.STRING
    }
});

module.exports = Lanches;