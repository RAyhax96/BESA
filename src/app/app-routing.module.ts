import { PaginasComponent } from './paginas/paginas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PruebasComponent } from './shared/pruebas/pruebas.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { 
    path: '', component: PaginasComponent,
  children: [
    { path: 'inicio', component: PrincipalComponent },

    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  ]
  },
 
  { path: 'pruebas', component: PruebasComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'breadcrubs', component: BreadcrumbsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES = RouterModule.forRoot(routes ,{ useHash : true});