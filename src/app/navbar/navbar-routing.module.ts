import { AltaRepartidorComponent } from './../pages/alta-repartidor/alta-repartidor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  { path: '', component: NavbarComponent },
  // { path: 'altaRepartidor', component: AltaRepartidorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
