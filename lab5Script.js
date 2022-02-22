function agregar_ticket()
{
    const opciones = []; opciones[1] = "En espera"; opciones[2] = "En proceso"; opciones[3] = "Solucionado";
    let formulario = document.getElementById("form_tickets")
    let tabla = document.getElementById("tabla");

    let res = "";
    res += "<tr>";
    res += "<td>" + formulario.elements[0].value + "</td>";
    res += "<td>" + formulario.elements[1].value + "</td>";
    res += "<td>" + formulario.elements[2].value + "</td>";
    res += "<td>" + formulario.elements[3].value + "</td>";
    res += "<td>" + opciones[formulario.elements[4].value] + "</td>";
    res += "</tr>";

    tabla.innerHTML += res;
}