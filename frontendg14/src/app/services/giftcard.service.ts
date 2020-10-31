import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
// import {login, registro}  from '../models/user-interfaces'
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
  getGiftcard(active:boolean = true){

    return [{active:false}];
  }
}
