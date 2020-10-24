import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
import {login}  from '../models/user-interfaces'
@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { }

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type":"application/json"
  })

 
  setUser(user:login) {
    let userString=JSON.stringify(user);
    localStorage.setItem("usuarioLogeado",userString);
    //this.cookies.set("token", token);
  }

/*
  getUseraux() {
    console.log("Estoy aqui");
    let usuario=localStorage.getItem('usuarioLogeado');
    if(!isNullOrUndefined(usuario))
    {
        let user_JSON=JSON.parse(usuario);
        console.log("el usuario logueado es: ");
        console.log(user_JSON);
        return user_JSON;
    }else
    {
      console.log("retorno null")
      return null;


    }
  }*/


  //get users
  getUser(){
    const url = "http://localhost:1337/users";
    return this.http.get(url);
  }

  postLogin(correo:String, contrasena:String){
    const url = "http://localhost:3000/login";
   // return this.http.post(url,{  "identifier": correo, "password": contrasena},{headers:this.headers}).pipe(map(data=>data));
   return this.http.post(url,{  "username": correo, "contrasenia": contrasena},{headers:this.headers});
  }
}
