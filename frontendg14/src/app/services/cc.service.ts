import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class CcService {

  constructor() { }

  //Validar ccn
  validateCcn(value){
    return true
  }
  //Validar cname
  validateCname(value){

  }

  //Validar cexp
  validateCexp(value){

  }

  //Validar cv
  validateCv(value){

  }
}
