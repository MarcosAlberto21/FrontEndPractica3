export interface login{


    id_usuario: Number,
    username: String,
    correo:String,
    contrasenia: String,
    nombre: String,
    apellido: String,
    dpi: Number,
    edad: Number,
    id_tipousuario: Number

}

export interface registro{
    username: String,
    contrasenia: String,
    correo: string,
    nombre: String,
    apellido: String,
    dpi: string,
    edad: Number,
    id_tipousuario: Number
}