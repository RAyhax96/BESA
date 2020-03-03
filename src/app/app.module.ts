import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './cuadromenu/principal/principal.component';
import { ConsultaPorNumeroDeContratoComponent } from './cuadromenu/consulta-por-numero-de-contrato/consulta-por-numero-de-contrato.component';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ConsultaPorNumeroDeContratoComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
