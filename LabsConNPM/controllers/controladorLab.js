const path = require('path');

exports.preguntaLab = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'preguntas.html'));
};

exports.fotoYogur = (request, response, next) => {
    response.send('<img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102051047L.jpg" width="100%" alt="Yogur lala">');
};

exports.inicio = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab6.html'));
};