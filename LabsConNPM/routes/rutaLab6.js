
const path = require('path');
const express = require('express');
const app = express();
const controlador_lab = require('../controllers/controladorLab');

const router = express.Router();

router.use('/preguntaLab', controlador_lab.preguntaLab);

router.get('/login', controlador_lab.login_get);

router.post('/login', controlador_lab.login_post);

router.use('/logout', controlador_lab.logout);

router.use('/fotoYogur', controlador_lab.fotoYogur);

router.use('/', controlador_lab.inicio);
    

module.exports = router;