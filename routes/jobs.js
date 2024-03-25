const express = require('express');
const Jobs = require('./../models/Jobs');
const Lanches = require('./../models/Lanches');
const router = express.Router();

module.exports = router;

router.get('/', (req ,res) => {
    let novoTrabalho = {
        titulo: 'Atendente',
        salario: '4000',
        empresa: 'Ariosi Lanches',
        descricao: 'Melhor lanchonete de Umuarama e Região de Xambrê',
        email: 'ariosilanches@ariosi.com',
        novo_trabalho: 0
    }

    //Criando nova vaga!
    /*
    Jobs.create(novoTrabalho)
        .then((result) => {
            res.send('Nova vaga criada!');

        }).catch((error) => {
            console.log(error);
        });*/

    //Puxando tudo da tabela. Utilizando WHERE 

    /*
    Jobs.findAll({
        where: {
            id: 1
            }
        })
        .then((result) => {
            console.log(result);
            res.send(result);
        }).catch((error) => {
            console.log(error);
        });
    
    */
    //Atualizando dados com update
   /*
   Jobs.update({titulo: 'Scrum Master'}, { 
        where: {
            id: 2
        }
    })
     .then((result) => {
        resposta.send('Atualizado com sucesso');
     })
     .catch((error) => {
        console.log(error);
     });
*/
     //Fazendo Delete
/*
    Jobs.destroy({ 
        where: {
            id: 1
        }
    })
     .then((result) => {
        res.send('Deletado com sucesso');
     })
     .catch((error) => {
        console.log(error);
     });*/

     
});

router.post('/teste', (req, res) => {
    res.send('Testando API');
});
