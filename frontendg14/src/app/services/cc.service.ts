import { Injectable } from '@angular/core';
//import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class CcService {

  constructor() { }

  //Validar ccn
  validateCcn(ccnum){
    var cardNumberLength = ccnum.length;
    return (cardNumberLength === 16);
  }
  //Validar cname
  validateCname(value){
    return /[0-9a-z]/i.test(value) || /^[a-z0-9]+$/i.test(value)
  }

  //Validar cexp
  validateCexp(value){
    return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(value);
  }

  //Validar cv
  validateCv(value){
    var cardNumberLength = value.length;
    return (cardNumberLength === 3) && /[0-9]/.test(value);
  }
}
