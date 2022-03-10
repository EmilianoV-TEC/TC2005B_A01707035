
const productosA = [
    {nombre: "queso", precio: 75}, 
    {nombre: "yogur", precio: 30}, 
    {nombre: "leche", precio: 70}
];

module.exports = class Producto{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        productosA.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return productosA;
    }

}