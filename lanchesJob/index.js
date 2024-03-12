const express = require('express');
const db = require('./db/conexao');
const Sequelize = require('sequelize');

db.authenticate()
    .then(() => {
        console.log("Conectou ao Banco de Dados");
    })
    .catch((error) => {
        console.log("Erro ao connectar no Banco de Dados" + error);
    });

const PORT = 3001;

const app = express();

app.use('/jobs', require('./routes/jobs'));

app.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`);
});