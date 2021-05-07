import { BusquedaPizzaComponent } from './busqueda-pizza/busqueda-pizza.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GuardGuard } from './guards/guard.guard';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
  
  {
    path: 'bienvenido/altaRepartidor', component: AltaRepartidorComponent, canActivate:[GuardGuard], canDeactivate: [GuardGuard]
    // canActivate: [GuardGuard]
  },
  {
    path: 'bienvenido', component: BienvenidoComponent
  },
  {
    path: 'bienvenido/busquedaPizza', component: BusquedaPizzaComponent
  },
  { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then(m => m.NavbarModule) 
  },
  {
    path: 'bienvenido/busquedaRepartidor', component: BusquedaComponent, canActivate:[GuardGuard],
    // canActivate: [GuardGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
