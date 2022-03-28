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
    Usuario.fetchOne(request.body.username)
        .then(([rows, fielData]) => {
            if (rows.length < 1) {
                return response.redirect('/lab/login');
            }

            const usuario = new Usuario(rows[0].username, rows[0].password);
            usuario.login(request.body.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.usuario = usuario;
                        request.session.username = usuario.username;
                        return request.session.save(err => {
                            response.redirect('/lab/login');
                        });
                    }
                    response.redirect('/productos/info');
                }).catch(err => {
                    console.log(err);
                    response.redirect('/lab/login');
                });
        }).catch((err)=>{
            console.log(err)
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab/login');
    });
};

exports.signup_get = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : ''
    });
};

exports.signup_post = (request, response, next) => {
    const usuario = new Usuario(request.body.username, request.body.password);
    usuario.save()
    .then(() => {
        response.redirect('/lab/login');
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab6.html'));
};

