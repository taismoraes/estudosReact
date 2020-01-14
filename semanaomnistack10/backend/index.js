//express ajuda na criação das rotas da api

const express = require('express');

const app = express();

app.use(express.json());
//Métodos HTTP: get, post, put, delete

//Tipos de parametros:  
//Query params: req.query(Filtros, ordenação, paginção...)
//Route params: req.params(Identificar um recurso na alteração ou remoção...)
//Body: req.body(Dados para criação ou alteração d eum registro...)


app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message : 'Hello Tais'});
});

app.listen(3333);