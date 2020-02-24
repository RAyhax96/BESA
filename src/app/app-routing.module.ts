import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaPorNumeroDeContratoComponent }from './cuadromenu/consulta-por-numero-de-contrato/consulta-por-numero-de-contrato.component';

const routes: Routes = [
  { path: 'inicio', component: ConsultaPorNumeroDeContratoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
