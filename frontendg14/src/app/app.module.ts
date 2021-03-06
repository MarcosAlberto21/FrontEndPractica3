import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { MarkdownModule } from "ngx-markdown";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdministradorPageComponent } from './components/administrador-page/administrador-page.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { sumTotal } from './pipes/sumTotal.pipe';
import { BotonRegalarComponent } from './components/boton-regalar/boton-regalar.component';
import { ToastComponent } from './components/toast/toast.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';

const appRoutes: Routes = [
  { path: "", component: LadingPageComponent },
  
];



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    LadingPageComponent,
    AdministradorPageComponent,
    RegistroComponent,
    PerfilComponent,
    sumTotal,
    BotonRegalarComponent,
    ToastComponent,
    InventarioComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
