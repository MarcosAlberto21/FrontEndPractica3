import {giftcard , giftcardValue}  from './giftcard'
import {pago}  from './pago'

export interface carrito{

    idusuario: Number,    
    itemsCarrito: Array<itemCarrito>,
    pago?: pago
}

export interface itemCarrito{

    giftcard: giftcard,
    giftcardValue: giftcardValue,
    cantidad: number

}
