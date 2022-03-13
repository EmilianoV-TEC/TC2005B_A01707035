const path = require('path');
const Producto = require('../models/productos');


exports.info = (request, response, next) => {
    response.render('lista_productos', {productos: Producto.fetchAll(), 
                                        ultimo_producto: request.cookies.ultimo_producto ? request.cookies.ultimo_producto : '',
                                        username: request.session.username ? request.session.username : ''});
};

exports.nuevo_get = (request, response, next) => {
    response.render('nuevo_producto', {username: request.session.username ? request.session.username : ''});
};

exports.nuevo_post = (request, response, next) => {
    const productoNuevo = new Producto(request.body.nombre, request.body.precio);
    productoNuevo.save();
    response.setHeader('Set-Cookie', 'ultimo_producto='+productoNuevo.nombre+'; HttpOnly');
    response.redirect('/productos/info');
};