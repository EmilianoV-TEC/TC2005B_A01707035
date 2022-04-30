const db = require('../util/database');

const productosA = [
    {nombre: "queso", precio: 75}, 
    {nombre: "yogur", precio: 30}, 
    {nombre: "leche", precio: 70}
];

module.exports = class Producto{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO producto (nombre, precio, imagen_producto) VALUES (?, ?, ?)',
        [this.nombre, this.precio, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM producto');
    }

    static fetchOne(id_producto){
        return db.execute('SELECT * FROM producto WHERE id_producto=?',
        [id_producto]
        );
    }

    static update(id_producto, nombre, precio){
        return db.execute('UPDATE producto SET nombre=?, precio=? WHERE id_producto=?',
        [nombre, precio, id_producto]
        );
    }

}