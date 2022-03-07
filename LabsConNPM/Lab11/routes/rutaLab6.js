const filesystem = require('fs');

const paginaInicio = String(filesystem.readFileSync('lab6.html'));
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const router = express.Router();

router.use('/preguntaLab', (request, response, next) => {
    response.send('<p>El archivo package.json es un archivo de configuración de npm, donde se encuentra diferente información del proyecto, como diferentes paquetes/librerias instalados y sus versiones. Fuente adicional: https://heynode.com/tutorial/what-packagejson/</p>');
});

router.use('/fotoYogur', (request, response, next) => {
    response.send('<img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102051047L.jpg" width="100%" alt="Yogur lala">');
});

router.use('/', (request, response, next) => {
    response.send(paginaInicio);
});
    

module.exports = router;