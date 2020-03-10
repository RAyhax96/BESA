import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './cuadromenu/principal/principal.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
 
  { path: 'inicio', component: PrincipalComponent },
  { path: 'pruebas', component: PruebasComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES = RouterModule.forRoot(routes ,{ useHash : true});