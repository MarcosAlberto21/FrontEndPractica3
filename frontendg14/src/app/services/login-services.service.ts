import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
import {login, registro}  from '../models/user-interfaces'
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient,private route:Router) { }

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
    const {id_usuario} = JSON.parse(localStorage.getItem("usuarioLogeado"));
    const url = "http://localhost:3000/user/"+id_usuario;
    return this.http.get(url);
  }

  postLogin(correo:String, contrasena:String){
    const url = "http://localhost:3000/login";
   // return this.http.post(url,{  "identifier": correo, "password": contrasena},{headers:this.headers}).pipe(map(data=>data));
   return this.http.post(url,{  "username": correo, "contrasenia": contrasena},{headers:this.headers});
  }

  postRegistro(data:registro){
    const url = "http://localhost:3000/user";
    return this.http.post(url,data,{headers:this.headers});
  }
  logOut(){
    localStorage.removeItem('usuarioLogeado');
    this.route.navigate(['/login']);
  }
  actualizarUsuario(data:any){
    const {id_usuario} = JSON.parse(localStorage.getItem("usuarioLogeado"));
    return this.http.put(`http://localhost:3000/actualizarUsuario/${id_usuario}`,data);
  }
  estaLog():Boolean{
    return !!localStorage.getItem('usuarioLogeado');
  }
}
