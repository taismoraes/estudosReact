//express ajuda na criação das rotas da api

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://taismoraes:jYqkVMa6cW7JnGB8@cluster0-wphrc.mongodb.net/devRadar?retryWrites=true&w=majority', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
 useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

//Tipos de parametros:  
//Query params: req.query(Filtros, ordenação, paginção...)
//Route params: req.params(Identificar um recurso na alteração ou remoção...)
//Body: req.body(Dados para criação ou alteração d eum registro...)

app.listen(3333);