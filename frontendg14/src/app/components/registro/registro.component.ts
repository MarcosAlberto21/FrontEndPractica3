import { Component, OnInit } from '@angular/core';
import { registro } from "../../models/user-interfaces";
import { LoginServicesService} from 'src/app/services/login-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private loginService: LoginServicesService,private route:Router) { }
  user:registro={
    username: '',
    contrasenia: '',
    correo:'',
    nombre: '',
    apellido: '',
    dpi: '',
    edad: undefined,
    id_tipousuario: undefined
  } ;

  ngOnInit(): void {
  }
  onRegistrar(form) {
    form.value.id_tipousuario=1;
    console.log(form.value)
    this.loginService.postRegistro(form.value).subscribe(
      (res) => {
        console.log("registrado", res);
        alert("Usuario registrado exitosamente.");
        this.route.navigateByUrl("/login");
      },
      (err) => {
        console.error();
        alert("Error al registrarse.");
      }
    );
  }

}
