import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ipApp } from '../models/host'
import { regalo } from '../models/regalo';

@Injectable({
  providedIn: 'root'
})
export class RegaloServicesService {
  API_URL = ipApp;

  constructor(private http:HttpClient,) { }

  getOtherUsers(id: number){
    return this.http.get(`${this.API_URL}/getOtherUsers/${id}`);
  }

  regalarGiftcard(gift: regalo){
    return this.http.put(`${this.API_URL}/regalarGiftcard`, gift);
  }
}
