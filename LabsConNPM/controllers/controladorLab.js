const path = require('path');
const Usuario = require('../models/usuario');

exports.preguntaLab = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'preguntas.html'));
};

exports.fotoYogur = (request, response, next) => {
    response.send('<img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102051047L.jpg" width="100%" alt="Yogur lala">');
};

exports.login_get = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.login_post = (request, response, next) => {
    if (Usuario.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/productos/info'); 
    } else {
        console.log("nonono");
        response.redirect('/lab/fotoYogur'); 
    }
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab/login');
    });
};
exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab6.html'));
};

