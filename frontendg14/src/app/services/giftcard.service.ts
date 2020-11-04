import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
import {itemCarrito,carrito}  from '../models/carrito'
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  constructor(private http:HttpClient) { }

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

  //get giftcards
  getGiftcard(active:boolean){
    let activestr = active?"true":"false";
    const url = "https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card??active="+activestr;
    return this.http.get(url);
  }
  //get values
  getValues(){
    const url = "https://my-json-server.typicode.com/CoffeePaw/AyD1API/Value";
    return this.http.get(url);
  }

  saveHistorialUsuario(carrito:carrito){
    const url = "http://localhost:3000/giftcard/historial";
    return this.http.post(url,{idusuario:carrito.idusuario,items:carrito.itemsCarrito});
  }
}
