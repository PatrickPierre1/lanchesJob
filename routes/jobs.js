const express = require('express');
const Jobs = require('./../models/Jobs');
const Lanches = require('./../models/Lanches');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    let novoTrabalho = {
        titulo: 'Atendente',
        salario: '4000',
        empresa: 'Ariosi Lanches',
        descricao: 'Melhor lanchonete de Umuarama e Região de Xambrê',
        email: 'ariosilanches@ariosi.com',
        novo_trabalho: 0
    }
    
    Jobs.create(novoTrabalho)
        .then((result) => {
            res.send('Nova vaga criada!');
        }).catch((error) => {
            console.log(error);
        });

});

router.get('/lanches', (req,res) => {
    let novoLanche = {
        nome: "X-Bacon"
    };

    Lanches.create(novoLanche)
        .then((result) => {
            res.send('Novo lanche criado!');
        }).catch((error) => {
            console.log(error);
        });
});

router.post('/teste', (req, res) => {
    res.send('Testando API');
});
