import { Component, OnInit } from '@angular/core';
import { GiftcardService} from 'src/app/services/giftcard.service'
import { LoginServicesService} from 'src/app/services/login-services.service'
import { CcService} from 'src/app/services/cc.service'
import {giftcard, giftcardValue}  from 'src/app/models/giftcard'
import {carrito, itemCarrito}  from 'src/app/models/carrito'
import {pago}  from 'src/app/models/pago'
import { from } from 'rxjs';

@Component({
  selector: 'app-lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css']
})
export class LadingPageComponent implements OnInit {

  constructor(public giftcardService: GiftcardService,public loginServiceService: LoginServicesService, public ccService: CcService) { }

  giftCards:Array<giftcard>;
  giftCardsValues: {[key: string]: giftcardValue}
  carrito: carrito;
  moneda:string;
  refreshPipe:number;
  pago:pago={
    ccn: '',
    cname: '',
    cexp:'',
    cv: ''
  };

  ngOnInit(): void {
    this.getGiftCards();
    this.carrito = {
      idusuario: this.loginServiceService.getIdUser(),
      itemsCarrito:[]
    };
    this.moneda='$';
    this.refreshPipe=1;
  }

  refreshCarrito(): void{
    console.log("golaaa")
    this.refreshPipe++
  }

  getGiftCards(): void {

    this.giftcardService.getGiftcard(true).subscribe(
      (res:Array<giftcard>)=>{
        this.giftcardService.getValues().subscribe(
          (resValues:Array<giftcardValue>)=>{
            var values: {[key: string]: giftcardValue}
            values = {};

            for(let i in resValues){
              values[`${resValues[i].id}`] = resValues[i];
            }
            this.giftCards = res;
            this.giftCardsValues = values;
          },
          (err)=>{},
        )
      },
      (err)=>{},
    )
  }

  agregarCarrito(_giftcard, _giftcardValue): void{
    console.log(_giftcard);
    console.log(_giftcardValue);
    let itemCarrito: itemCarrito;
    itemCarrito={
      giftcard: _giftcard,
      giftcardValue: _giftcardValue,
      cantidad:1
    }
    this.carrito.itemsCarrito.push(itemCarrito);
    alert("¡Giftcard agregada al carrito!")
  }

  pagar(form){

    if(confirm("Está seguro que desea pagar por los giftcards seleccionados?")){
    if(this.ccService.validateCcn(form.value.ccn)
        && this.ccService.validateCname(form.value.cname)
        && this.ccService.validateCexp(form.value.cexp)
        && this.ccService.validateCv(form.value.cv)){  
          this.giftcardService.saveHistorialUsuario(this.carrito).subscribe((res)=>{
            this.carrito = {
              idusuario: this.loginServiceService.getIdUser(),
              itemsCarrito:[]
            };
            alert("¡Pagado!");
          });   
          // this.carrito = {
          //   idusuario: this.loginServiceService.getIdUser(),
          //   itemsCarrito:[]
          // };
          // alert("¡Pagado!");                         
        }else{
          alert("¡Verifique! Hay campos con error")
        }

    }

  }

}
