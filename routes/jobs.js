 const express = require('express');
const Jobs = require('./../models/Jobs');
const Lanches = require('./../models/Lanches');
const router = express.Router();

    
router.get('/adicionar', (req,res)=> {
       res.render('add', {

    });
});

router.post('/add', (req,res)=>{
    let novoJob = req.body;

    Jobs.create(novoJob)
        .then(() => {
            res.redirect('/');
        })
        .catch((error) => {
            console.log(error);
            console.log("Deu erro!"); });
});

router.post('/teste', (req, res) => {
    res.send('Testando API');
});

module.exports = router;