
const filesystem = require('fs');

const paginaInicio = filesystem.readFileSync('lab6.html');
const paginaInfo1 =  filesystem.readFileSync('lab10-info.html');
const paginaInfo2 =  filesystem.readFileSync('lab10-info2.html');
const http = require('http');

const productos = ["queso", "yogur", "leche"];

const server = http.createServer((request, response) => {
    if(request.url === '/')
    {
        response.setHeader('Content-Type', 'text/html');
        //response.writeHeader(200);
        response.write(paginaInicio);
        response.end();
    }
    
    else if(request.url === '/info')
    {
        response.setHeader('Content-Type', 'text/html');
        response.write(paginaInfo1);
        response.write('<ul>');
        for (let i in productos) {
            response.write('<li>' + productos[i] + '</li>');
        }
        response.write('</ul>');
        response.write(paginaInfo2);
        return response.end();
    }
    else if(request.url === '/nuevo' && request.method === 'GET')
    {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Nuevo producto</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de productos</h1>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Jugo">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la página principal</a>');
        response.write('</body>');
    }
    else if(request.url === '/nuevo' && request.method === 'POST')
    {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
        });
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            const nuevo_dato = datos_completos.split('=')[1];
            productos.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write(paginaInfo1);
            response.write('<ul>');
            for (let i in productos) {
                response.write('<li>' + productos[i] + '</li>');
            }
            response.write('</ul>');
            response.write(paginaInfo2);
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">404, esta página no existe</h1>');
        response.write('</body>');
        response.end();
    }
    
});

server.listen(3000);
