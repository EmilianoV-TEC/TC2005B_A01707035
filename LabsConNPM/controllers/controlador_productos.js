const path = require('path');
const Producto = require('../models/productos');


exports.info = (request, response, next) => {
    response.render('lista_productos', {productos: Producto.fetchAll()});
};

exports.nuevo_get = (request, response, next) => {
    response.render('nuevo_producto');
};

exports.nuevo_post = (request, response, next) => {
    const productoNuevo = new Producto(request.body.nombre, request.body.precio);
    productoNuevo.save();
    response.redirect('/productos/info');
};