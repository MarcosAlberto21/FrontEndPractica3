export interface l_catalogo{
    id_tipogiftcard:number,
    nombre: string,
    imagen: string,
    chargerate:number,
    active: number
}


export interface l_compras{
    id_factura: number,
    id_giftcard: string,
    fecha: string,
    id_usuario: number,
    id_tarjeta: number,
    username: string,
    correo: string,
    //contrasenia: "mZBr@NxNp",
    nombre: string,
    apellido: string,
    dpi: number,
    edad: number,
    id_tipousuario: number,
    id_tipogiftcard: number,
    id_valor: number,
    imagen: string,
    chargerate: number,
    active: number
}