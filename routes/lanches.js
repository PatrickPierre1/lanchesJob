const express = require('express');
const Lanches = require('./../models/Lanches');
const router = express.Router();

router.get('/', (req, res) => {
    Lanches.findAll()
        .then((result) => {
            console.log(result);
            res.send(result);
        }).catch((error) => {
            console.log(error);
        });
});

router.post('/', (req, res) => {
    let novoLanche = req.body;

    Lanches.create(novoLanche)
        .then(() => {
            res.send('Novo lanche criado!');
        })
        .catch((error) => {
            console.log(error);
            console.log("Deu erro!");
        });
});

router.put('/', (req, res) => {
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

router.delete('/', (req, res) => {
    Lanches.destroy({
        where: {
            id: 6
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