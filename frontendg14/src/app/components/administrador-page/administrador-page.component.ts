import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { VercatalogoService} from 'src/app/services/vercatalogo.service'
import {l_catalogo} from 'src/app/models/l_catalogo'
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
public i:number;

sumar(){
  this.i=this.i+1;
}
vercatalogo(){
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
  this.vertran=true;
  this.vercata=false;
}




}
