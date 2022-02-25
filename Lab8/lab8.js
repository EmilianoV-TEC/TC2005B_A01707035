console.log("hola desde node");

const filesystem = require('fs');

const pagina = filesystem.readFileSync('../lab1.html');

function escribirArchivo(cadenaIn)
{
    filesystem.writeFileSync('archivoEjercicio.txt', cadenaIn);
}

function promedio(...arr)
{
    let suma = 0;
    for(let i of arr)
    {
        suma += i;
    }

    return (suma/arr.length);
}

function encuentraPos(val, ...arr)
{
    let i = 0, f = arr.length-1;
    let mid = Math.floor((f+i)/2);
    while(arr[mid] != val && i != f)
    {
        if(arr[mid] > val)
        {
            f = mid;
        }
        else
            i = mid+1;

        mid = Math.floor((f+i)/2);
    }
    if(arr[mid] == val)
        return mid;
    
    return -1;
}

const arrBusqueda = [3, 34, 222, 234, 567, 672, 879];
const arreglo = [5000, 60, 90, 100, 10, 20];

escribirArchivo("Laboratorio 8");
console.log(promedio(...arreglo));
console.log(encuentraPos(34, ...arrBusqueda));

for(let i of arreglo)
{
    setTimeout(() => {
        console.log(i);
    }, i);
}

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    //response.writeHeader(200);
    response.write(pagina);
    response.end();

});

server.listen(3000);