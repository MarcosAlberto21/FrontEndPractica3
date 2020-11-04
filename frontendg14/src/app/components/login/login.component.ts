import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServicesService} from 'src/app/services/login-services.service'
import {login} from 'src/app/models/user-interfaces'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginServicesService,private route:Router) { }

  ngOnInit(): void {
  }
  correo:string ="";
  contrasena:string ="";
  valido:boolean=false;
  validoaux:boolean=false;


  verificar_credenciales():boolean{
   
      console.log("Usuario:" + " "+ this.correo + " contraseña: "+ this.contrasena);
      
      this.loginService.postLogin(this.correo,this.contrasena).subscribe((res:login)=>{
       
      console.log("Mostrando los datos: ");
      console.log(res.username);
     
        this.valido=true;
        this.correo="";
        this.contrasena="";
        
        if(res.id_tipousuario==1){
        this.loginService.setUser(res);
        
        window.location.href="http://localhost:4200/adminpage";
        }else if(res.id_tipousuario==2){
          this.loginService.setUser(res);
          window.location.href="http://localhost:4200";
        }

          //proveedor -> 
          //administrador personal ->  
              
       
      
      },
      error=>{
        alert('Creedenciales invalidas.')
        this.validoaux=true;
        this.correo="";
        this.contrasena="";
        window.location.href="http://localhost:4200/login";
      }
      
      );

     
      this.validoaux=false;
return this.valido;
    
    } 
  
}
