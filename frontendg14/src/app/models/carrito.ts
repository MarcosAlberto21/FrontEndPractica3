import {giftcard , giftcardValue}  from './giftcard'

export interface carrito{

    idusuario: Number,    
    itemsCarrito: Array<itemCarrito>
}

export interface itemCarrito{

    giftcard: giftcard,
    giftcardValue: giftcardValue,
    cantidad: number

}
