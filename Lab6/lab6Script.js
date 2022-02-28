
let carrito = 0;
let IVA = 0;

document.getElementById("enviar").onclick = () =>
{
    let formulario = document.getElementById("form_cont");

    if(formulario.elements[0].value != formulario.elements[1].value)
        alert("Las contraseñas ingresadas no coinciden");
}

document.getElementById("passwordUsuario").onkeyup = () =>
{
    let formInput = document.getElementById("passwordUsuario");
    let info = document.getElementById("passCorrecto");
    if(formInput.checkValidity() && formInput.value != "")
    {
        info.innerHTML = "La contraseña cumple con los requisitos";
    }
    else
        info.innerHTML = "La contraseña no cumple con los requisitos";
}

function actualizarCarrito(monto)
{
    let costoTotal = document.getElementById("costoTotal");
    let IVAPrecio = document.getElementById("IVAPrecio");
    carrito += monto;
    IVA += (monto*0.16); 

    costoTotal.innerHTML = 'Precio de productos: ' +  carrito + '$';
    IVAPrecio.innerHTML = 'IVA: ' + IVA + '$';
}

document.getElementById("comprar_queso").onclick = () =>
{
    actualizarCarrito(75);
}

document.getElementById("comprar_yogur").onclick = () =>
{
    actualizarCarrito(30);
}

document.getElementById("comprar_leche").onclick = () =>
{
    actualizarCarrito(70);
}

document.getElementById("comprar_todo").onclick = () =>
{
    carrito = 0;
    IVA = 0;
    actualizarCarrito(0);
}

document.getElementById("tituloLab").onclick = () =>
{
    document.getElementById("tituloLab").style.fontStyle = "italic";
}

