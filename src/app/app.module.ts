import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './cuadromenu/principal/principal.component';
import { ConsultaPorNumeroDeContratoComponent } from './cuadromenu/consulta-por-numero-de-contrato/consulta-por-numero-de-contrato.component';
import { PruebasComponent } from './pruebas/pruebas.component';
//rutas
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ConsultaPorNumeroDeContratoComponent,
    PruebasComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
