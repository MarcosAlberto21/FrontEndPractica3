import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from '../../services/login-services.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:any = {};
  constructor(private reg:LoginServicesService) { }

  ngOnInit(): void {
    this.getUsuario();
  }
  onRegistrar(form) {
    this.reg.actualizarUsuario(form.value).subscribe(
      (res) => {
        console.log("actualizado", res);
        alert("Se actualizo sus datos.");
        this.getUsuario();
      },
      (err) => {
        console.error();
        alert("Error al actualizar sus datos.");
      }
    );
  }
  getUsuario(){
    this.reg.getUser().subscribe(
      (res) => {
        console.log("datos", res);
        const {username,correo,contrasenia,nombre,apellido,dpi,edad} = res[0];
        this.user.username=username;
        this.user.correo=correo;
        this.user.contrasenia=contrasenia;
        this.user.nombre=nombre;
        this.user.apellido=apellido;
        this.user.dpi=dpi;
        this.user.edad=edad;
        
        console.log("datos", this.user);
      },
      (err) => {
        console.log(err);
        alert("Error al obtener usuario.");
      }
    );
  }

}
