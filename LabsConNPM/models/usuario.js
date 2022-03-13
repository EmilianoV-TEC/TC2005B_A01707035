const usuarios = [];

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_username, nuevo_password) {
        this.username = nuevo_username;
        this.password = nuevo_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        usuarios.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static login(username, password) {
        return true;
    }

}