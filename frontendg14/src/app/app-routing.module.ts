import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./components/login/login.component";
import {LadingPageComponent} from './components/lading-page/lading-page.component';
import { AdministradorPageComponent} from "./components/administrador-page/administrador-page.component";

const routes: Routes = [
  {
  path: 'login',
  component:LoginComponent
   }
  ,
  {
  path: 'adminpage',
  component:AdministradorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
