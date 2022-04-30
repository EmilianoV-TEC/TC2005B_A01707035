const filesystem = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const multer = require('multer');

const rutaProductos = require('./routes/rutaProductos');
const rutaLab = require('./routes/rutaLab6');

const csrf = require('csurf');
const csrfProtection = csrf();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(bodyParser.urlencoded({extended: false}));

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use(cookieParser());
app.use(session({
    secret: 'hdboauy7g48fdhsofha84g8quh0efundf028fu38b7rfhfiuq00r82f34hfoudhofnsw', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/productos', rutaProductos);

app.use('/lab', rutaLab);

app.use((request, response, next) => {
    response.status(404);
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Not found</title></head><body><h1 id="principal">404, esta página no existe</h1></body>');
});


app.listen(3000);