
const path = require('path');
const express = require('express');
const app = express();
const controlador_lab = require('../controllers/controladorLab');

const bodyParser = require('body-parser');

const router = express.Router();

router.use('/preguntaLab', controlador_lab.preguntaLab);

router.use('/fotoYogur', controlador_lab.fotoYogur);

router.use('/', controlador_lab.inicio);
    

module.exports = router;