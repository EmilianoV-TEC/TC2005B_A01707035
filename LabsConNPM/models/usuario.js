const db = require('../util/database');
const bcrypt = require('bcryptjs');
const usuarios = [];

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_username, nuevo_password) {
        this.username = nuevo_username;
        this.password = nuevo_password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((pass_cifrado)=>{
                return db.execute('INSERT INTO usuario(username, password) VALUES(?, ?)',
                    [this.username, pass_cifrado]
                 );
            }).catch((error)=>{
                console.log(error);
            }); 
    }

    login(password_ingresado) {
        return  bcrypt.compare(password_ingresado, this.password);
    }

    static fetchOne(username)
    {
        return db.execute('SELECT * FROM usuario WHERE username=?',
        [username]
        );
    }

}