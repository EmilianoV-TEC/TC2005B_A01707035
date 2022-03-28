const filesystem = require('fs');
const path = require('path');
const express = require('express');
const isAuth = require('../util/is-auth.js');
const app = express();

const controlador_productos = require('../controllers/controlador_productos');

const router = express.Router();


router.use('/info', isAuth, controlador_productos.info);
    
router.get('/nuevo', isAuth, controlador_productos.nuevo_get);

router.post('/nuevo', controlador_productos.nuevo_post);

router.get('/datos/:id_producto', isAuth, controlador_productos.datosProducto);

router.post('/datos/:id_producto', controlador_productos.actualizaProducto);


module.exports = router;