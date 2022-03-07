const filesystem = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const router = express.Router();

const productosA = [
    {nombre: "queso", precio: 75}, 
    {nombre: "yogur", precio: 30}, 
    {nombre: "leche", precio: 70}
];


router.use('/info', (request, response, next) => {
    response.render('lista_productos', {productos: productosA});
});
    
router.get('/nuevo', (request, response, next) => {
    response.render('nuevo_producto');
});

router.post('/nuevo', (request, response, next) => {
    productosA.push({nombre: request.body.nombre, precio: request.body.precio});
    response.redirect('/productos/info');
});


module.exports = router;