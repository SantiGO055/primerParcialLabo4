import { GuardGuard } from './guards/guard.guard';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'bienvenido/altaRepartidor', component: AltaRepartidorComponent,
    // canActivate: [GuardGuard]
  },
  {
    path: 'bienvenido', component: BienvenidoComponent
  },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) 
  },
  { 
    path: 'busqueda', loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) 
  },
  { 
    path: 'busqueda', loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
