
const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const router = express.Router();

router.use('/preguntaLab', (request, response, next) => {
    response.send('<p>Algunos de los motores para crear plantillas utilizando Node/express son EJS, Pug, Haml.js, hbt, Eta, entre otros. Fuente adicional: https://expressjs.com/en/resources/template-engines.html</p>');
});

router.use('/fotoYogur', (request, response, next) => {
    response.send('<img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102051047L.jpg" width="100%" alt="Yogur lala">');
});

router.use('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'lab6.html'));
});
    

module.exports = router;