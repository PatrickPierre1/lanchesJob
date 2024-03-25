const express = require('express');
const Lanches = require('./../models/Lanches');
const router = express.Router();

router.get('/listar', (req, res) => {
    Lanches.findAll()
        .then((result) => {
            console.log(result);
            res.send(result);
        }).catch((error) => {
            console.log(error);
        });
});

router.post('/criar', (req, res) => {
    let novoLanche = {
        nome: "X-Bacon" 
    };

    Lanches.create(novoLanche)
        .then((res) => {
            res.send('Novo lanche criado!');
        }).catch((error) => {
            console.log(error);
        });
});

router.put('/atualizar', (req, res) => {
    Lanches.update({ nome: 'X-Frango' }, {
        where: {
            id: 2
        }
    })
        .then((result) => {
            res.send('Atualizado com sucesso');
        })
        .catch((error) => {
            console.log(error);
        });
});

router.delete('/deletar', (req, res) => {
    Lanches.destroy({
        where: {
            id: 4
        }
    })
        .then((result) => {
            res.send('Deletado com sucesso');
        })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;