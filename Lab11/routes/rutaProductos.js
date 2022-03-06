const filesystem = require('fs');

const paginaInfo1 =  String(filesystem.readFileSync('lab10-info.html'));
const paginaInfo2 =  String(filesystem.readFileSync('lab10-info2.html'));
const express = require('express');
const app = express();

const router = express.Router();

const productosA = ["queso", "yogur", "leche"];

router.use('/info', (request, response, next) => {
    let respuesta = paginaInfo1;
    respuesta += '<ul>';
        for (let i in productosA) {
            respuesta += ('<li>' + productosA[i] + '</li>');
        }
    respuesta += '</ul>'
    respuesta += paginaInfo2;
    response.send(respuesta);
});
    
router.get('/nuevo', (request, response, next) => {
    response.send('<!DOCTYPE html><html lang="es-mx"><head><title>Nuevo producto</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de productos</h1><form action="nuevo" method="POST"><label for="nombre">Nombre: </label> <input type="text" id="nombre" name="nombre" placeholder="Jugo"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/productos/info">Regresar a la página principal</a></body>');
});

router.post('/nuevo', (request, response, next) => {
    productosA.push(request.body.nombre);
    response.redirect('/productos/info');
});

module.exports = router;