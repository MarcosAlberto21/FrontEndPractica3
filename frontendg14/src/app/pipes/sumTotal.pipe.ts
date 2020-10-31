import { Pipe, PipeTransform } from '@angular/core';
import {carrito, itemCarrito}  from 'src/app/models/carrito'
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'sumTotal',pure: false})
export class sumTotal implements PipeTransform {
  transform(itemsCarrito:Array<itemCarrito>, refreshValue?: any): number {
    let suma = itemsCarrito.reduce((t, item) => t + (parseFloat(item.giftcardValue.total.toString())*item.cantidad), 0)
    return suma;
  }
}