const path = require('path');
const Producto = require('../models/productos');
const got = require('got');
const url = 'http://api.open-notify.org/iss-now.json';


exports.info = (request, response, next) => {
    Producto.fetchAll()
        .then(([rows, fieldData]) => {
            got(url, { json: true })
                .then(iss => {
                    response.render('lista_productos', {productos: rows, 
                        ultimo_producto: request.cookies.ultimo_producto ? request.cookies.ultimo_producto : '',
                        username: request.session.username ? request.session.username : '',
                        latIss: iss.body.iss_position.latitude,
                        lonIss: iss.body.iss_position.longitude});
                })
                .catch(error => {
                    console.log(error.response.body);
            });
        })
        .catch(err => console.log(err));
};

exports.nuevo_get = (request, response, next) => {
    response.render('nuevo_producto', {username: request.session.username ? request.session.username : ''});
};

exports.nuevo_post = (request, response, next) => {
    const productoNuevo = new Producto(request.body.nombre, request.body.precio, request.file.path);
    productoNuevo.save()
        .then(() => {
            response.setHeader('Set-Cookie', 'ultimo_producto='+productoNuevo.nombre+'; HttpOnly');
            response.redirect('/productos/info');
        })
        .catch(err => console.log(err));
};

exports.datosProducto = (request, response, next) => {
    const id = request.params.id_producto;
    Producto.fetchOne(id)
        .then(([rows, fieldData]) => {
            response.render('datos_producto', {producto: rows, 
                username: request.session.username ? request.session.username : ''});
        })
        .catch(err => console.log(err));
};

exports.actualizaProducto = (request, response, next) => {
    const id = request.params.id_producto;
    Producto.update(id, request.body.nombre, request.body.precio)
        .then(() => {
            response.redirect('/productos/info');
        })
        .catch(err => console.log(err));
};