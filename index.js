const express = require('express');
const db = require('./db/conexao');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const { rmSync } = require('fs');
const Jobs = require('./models/Jobs');
const Op = Sequelize.Op;



db.authenticate()
    .then(() => {
        console.log("Conectou ao Banco de Dados");
    })
    .catch((error) => {
        console.log("Erro ao connectar no Banco de Dados" + error);
    });

const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=> {
    let search = req.query.job;
    //data like em node
    let query = '%'+search+'%';
    
    if(!search) {
        Jobs.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then((vagas)=> {
            res.render('index', {
                jobs: vagas
            });
        })
        .catch((err) => console.log(err));
    }else {
        Jobs.findAll({
            where: {
                titulo: {[Op.like]: query}
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })
        .then((vagas)=> {
            res.render('index', {
                jobs: vagas,
                search: search
            });
        })
        .catch((err) => console.log(err));
    }

    

    
});

app.use('/jobs', require('./routes/jobs'));

app.use('/lanches', require('./routes/lanches'));

app.listen(PORT, () => {
    console.log(`Listen port: ${PORT}`);
});  