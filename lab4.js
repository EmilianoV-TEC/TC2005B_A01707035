
function hEjercicio(numEjercicio)
{
    document.write("<h2> Ejercicio " + numEjercicio + "</h2>");
}

function intRand()
{
    let val = Math.random() * 100;
    val = Math.floor(val);
    return val;
}

function ejercicio1()
{
    const num = prompt("Ingresa un número");
    let res = "<table>"
    res += "<th> Número </th> <th> Cuadrado </th> <th> Cubo </th>";
    for(let i = 1; i <= num; i++)
    {
        res += "<tr>";
        res += "<td>" + i + "</td>";
        res += "<td>" + i*i + "</td>";
        res += "<td>" + i*i*i + "</td>";
        res += "</tr>";
    }
    res += "</table>";
    document.write(res);
}

function ejercicio2()
{
    let res = "<p>";
    const suma = intRand() + intRand();
    const startTime = new Date();
    const numAd = prompt("Intenta adivinar la suma de dos números aleatorios entre 1 y 100");
    const endTime = new Date();
    const tiempo = (endTime - startTime)/1000;
    if(numAd == suma)
        res += "Si adivinaste el número, ";
    else
        res += "No adivinaste el número, ";
    
    res += "  Tardaste " + tiempo + " Segundos en responder </p>";
    document.write(res);
}

function ejercicio3(...arr)
{
    let res = "<p> Arreglo: " + arr + "</p> <ul>";
    let ceros = 0, negativos = 0, positivos = 0;
    for(let i of arr)
    {
        if(i < 0) negativos++;
        if(i == 0) ceros++;
        if(i > 0) positivos ++;
    }

    res += "<li> En el arreglo hay " + negativos + " números negativos </li>";
    res += "<li> En el arreglo hay " + ceros + " ceros </li>";
    res += "<li> En el arreglo hay " + positivos + " números positivos </li>";
    res += "</ul>";
    document.write(res);
    return [negativos, ceros, positivos];
}

function ejercicio4(...matriz)
{
    let res = "<ul>";
    let promedios = [];
    for(let arr of matriz)
    {
        res += "<li> Arreglo: " + arr + ", promedio: ";
        let suma = 0;
        for(let i of arr)
            suma += i;
        
        promedios.push(suma/arr.length);
        res += suma/arr.length + " </li>"

    }

    res += "</ul>";
    document.write(res);
    return promedios;
}

function ejercicio5(num)
{
    let res = "<p> Número original: " + num + " <br> <p>";
    let numStr = num.toString();
    let numStrInverso = "";
    for(let i = numStr.length-1; i >= 0; i--)
    {
        numStrInverso += numStr[i];
    }

    res += "<p> Número inverso: " + parseInt(numStrInverso) + " <br> <p>";
    document.write(res);
    return parseInt(numStrInverso);
}

function ejercicio6(...arr)
{
    let res = "<p> El problema consiste en permitir al usuario ingresar la prioridad que tiene un ticket de soporte generaro en el sistema, en relación con el proyecto que se realizará</p>";
    function ticket(engargado, empresa, cliente, tipo)
    {
        this.encargado = engargado;
        this.empresa = empresa;
        this.cliente = cliente;
        this.tipo = tipo;
        this.estatus = "";
    }

    let ticketEjemplo = new ticket(arr[0], arr[1], arr[2], arr[3]);

    ticketEjemplo.mostrar = function()
    {
        let res = "<table>"
        res += "<th> Encargado </th> <th> Empresa </th> <th> Cliente </th> <th> Tipo </th> <th> Estatus </th>";
        res += "<tr>";
        res += "<td>" + this.encargado + "</td>";
        res += "<td>" + this.empresa + "</td>";
        res += "<td>" + this.cliente + "</td>";
        res += "<td>" + this.tipo + "</td>";
        res += "<td>" + this.estatus + "</td>";
        res += "</tr>";
        res += "</table>";
        return res;
    }

    ticketEjemplo.cambiarEstatus = function(nuevoEstatus)
    {
        this.estatus = nuevoEstatus;
    }

    const estatusIn = prompt("Ingresa el estatus del ticket");

    ticketEjemplo.cambiarEstatus(estatusIn);
    res += ticketEjemplo.mostrar();
    
    document.write(res);
    return true;
}

let arrEjemplo = [5, -2, 0, 0, 3, 0, -12, -2];
let matrizEjemplo = [[9,1,3,7,6,4], [2,2,-4,9,2,4,5], [7,2,0,0,1,2,5]];
let ticketEjemplo = ["Carlos", "Mueblería", "Juan", "Compras"];

hEjercicio(1);
ejercicio1();

hEjercicio(2);
ejercicio2();

hEjercicio(3);
console.assert(ejercicio3(...arrEjemplo));

hEjercicio(4);
console.assert(ejercicio4(...matrizEjemplo));

hEjercicio(5);
console.assert(ejercicio5(5648322));

hEjercicio(6);
console.assert(ejercicio6(...ticketEjemplo));

