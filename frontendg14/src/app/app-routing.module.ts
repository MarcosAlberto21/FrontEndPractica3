import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import {LadingPageComponent} from './components/lading-page/lading-page.component';
import { AdministradorPageComponent} from "./components/administrador-page/administrador-page.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { TransaccionesComponent} from "./components/transacciones/transacciones.component";

import { InventarioComponent } from "./components/inventario/inventario.component";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminpage',
    component: AdministradorPageComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'inventario',
    component: InventarioComponent

  },
  {
    path: 'transacciones',
    component: TransaccionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
