import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: any[] = [];
  constructor() { }

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showStandard(cuerpo: string) {
    this.show(cuerpo, {
      delay: 2000,
      autohide: true
    });
  }

  showSuccess(titulo: string, cuerpo: string) {
    this.show(cuerpo, {
      classname: 'bg-success text-light',
      delay: 5000 ,
      autohide: true,
      headertext: titulo
    });
  }

  showError(cuerpo: string) {
    this.show(cuerpo, {
      classname: 'bg-danger text-light',
      delay: 5000 ,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  showInfo(customTpl: string) {
    this.show(customTpl, {
      classname: 'bg-info text-light',
      delay: 3000,
      autohide: true
    });
  }
}
