import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { VercatalogoService} from 'src/app/services/vercatalogo.service'
import {l_catalogo, l_compras,l_transacciones} from 'src/app/models/l_catalogo'
import { LoginServicesService } from '../../services/login-services.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent implements OnInit {

  constructor(private loginservicio:LoginServicesService,private route:Router, public serviciocatalogo:VercatalogoService) { }

  ngOnInit(): void {
    console.log(this.loginservicio.getIdUser());
    console.log(this.loginservicio.getIdUser().correo);
    this.vertransaciones();
     }
   
     public vercata:Boolean=false;
     public vertran:Boolean=false;
     public listaCatalogo:l_catalogo[];
     public listaCompras:l_transacciones[];
     public i:number=0;
   
   
     vertransaciones(){
       this.i=0;
       this.vertran=true;
       this.vercata=false;
       this.serviciocatalogo.getTransacciones(this.loginservicio.getIdUser().correo).subscribe((res:l_transacciones[])=>{
         console.log(res);
         this.listaCompras=res;
         
         console.log(this.listaCompras);
        
         },
         error=>{
          
           alert("historial de transacciones no disponible, agradecemos tu compresión");
         }
             );
     }
   
     sumar(){
       this.i++;
       return this.i;
     }
}
