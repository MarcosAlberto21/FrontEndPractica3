import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { VercatalogoService} from 'src/app/services/vercatalogo.service'
import {l_catalogo, l_compras} from 'src/app/models/l_catalogo'
@Component({
  selector: 'app-administrador-page',
  templateUrl: './administrador-page.component.html',
  styleUrls: ['./administrador-page.component.css']
})
export class AdministradorPageComponent implements OnInit {

  constructor(private route:Router, public serviciocatalogo:VercatalogoService) { }

  ngOnInit(): void {
   
  }

  public vercata:Boolean=false;
  public vertran:Boolean=false;
  public listaCatalogo:l_catalogo[];
  public listaCompras:l_compras[];
  public i:number=0;


vercatalogo(){
  this.i=0;
  this.vertran=false;
  this.vercata=true;

  this.serviciocatalogo.getCatalogo().subscribe((res:l_catalogo[])=>{
    console.log(res);
    this.listaCatalogo=res;
    res.forEach(element => {
      console.log(element);
     
    });
    console.log(this.listaCatalogo);
   
    },
    error=>{
     
      alert("catalogo no disponible, agradecemos tu compresión");
    }
        );
}

vertransaciones(){
  this.i=0;
  this.vertran=true;
  this.vercata=false;
  this.serviciocatalogo.getCompras().subscribe((res:l_compras[])=>{
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

sumar2(){
  this.i++;
  return this.i;
}


}
