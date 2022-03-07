
const filesystem = require('fs');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const rutaProductos = require('./routes/rutaProductos');
const rutaLab = require('./routes/rutaLab6');

app.use('/productos', rutaProductos);

app.use('/lab', rutaLab);

app.use((request, response, next) => {
    response.status(404);
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Not found</title></head><body><h1 id="principal">404, esta página no existe</h1></body>');
});


app.listen(3000);
