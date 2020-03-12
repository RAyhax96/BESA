import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

import { PruebasComponent } from './shared/pruebas/pruebas.component';
//rutas
import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginasComponent } from './paginas/paginas.component';
import { SharedComponent } from './shared/shared.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RegisterComponent } from './login/register.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PruebasComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    LoginComponent,
    PaginasComponent,
    SharedComponent,
    NotfoundComponent,
    RegisterComponent
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
