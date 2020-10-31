import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
import {giftcard}  from '../models/giftcard'
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
}
