import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VercatalogoService} from 'src/app/services/vercatalogo.service'
import {l_catalogo, l_compras} from 'src/app/models/l_catalogo'
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {



  constructor(private loginservicio:LoginServicesService,private route:Router, public serviciocatalogo:VercatalogoService) { }

  ngOnInit(): void {
 console.log(this.loginservicio.getIdUser());
 console.log(this.loginservicio.getIdUser().correo);
 this.vercompras();
  }

  public vercata:Boolean=false;
  public vertran:Boolean=false;
  public listaCatalogo:l_catalogo[];
  public listaCompras:l_compras[];
  public i:number=0;


  vercompras(){
    this.i=0;
    this.vertran=true;
    this.vercata=false;
    this.serviciocatalogo.getInventarioUsuario(this.loginservicio.getIdUser().correo).subscribe((res:l_compras[])=>{
      console.log(res);
      this.listaCompras=res;
      
      console.log(this.listaCompras);
     
      },
      error=>{
       
        alert("historial de compras no disponible, agradecemos tu compresión");
      }
          );
  }

  sumar(){
    this.i++;
    return this.i;
  }
  

}
