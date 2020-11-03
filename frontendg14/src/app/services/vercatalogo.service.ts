import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
import {l_catalogo}  from '../models/l_catalogo'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VercatalogoService {
  constructor(private http:HttpClient,private route:Router) { }

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

 
  



  getIdUser(){
    return JSON.parse(localStorage.getItem("usuarioLogeado"));
  }

  getCatalogo(){

    const url = "http://localhost:3000/catalogo";
    return this.http.get(url);
  }


  getCompras(){
    const url="http://localhost:3000/detallecompras";
    return this.http.get(url);
  }


  getInventarioUsuario(usuario:string){
   const url="http://localhost:3000/detallecomprasporusuario/"+usuario;
   return this.http.get(url);
  }

  //http://localhost:3000/detalletransacciones/ClaudioRebollo@gmail.com

  getTransacciones(usuario:string){
    const url="http://localhost:3000/detalletransacciones/"+usuario;
    return this.http.get(url);
   }
 
}