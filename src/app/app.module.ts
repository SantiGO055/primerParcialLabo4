import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaisesComponent } from './paises/paises.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { AltaRepartidorComponent } from './pages/alta-repartidor/alta-repartidor.component';
import { ListadoRepartidorComponent } from './listado-repartidor/listado-repartidor.component';
import { ListadoPaisesRepartidorComponent } from './listado-paises-repartidor/listado-paises-repartidor.component';
import { RepartidorSeleccionadoComponent } from './repartidor-seleccionado/repartidor-seleccionado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AltapizzaComponent } from './pizzas/altapizza/altapizza.component';
import { BajapizzaComponent } from './pizzas/bajapizza/bajapizza.component';
import { ModificacionpizzaComponent } from './pizzas/modificacionpizza/modificacionpizza.component';
import { BusquedaPizzaComponent } from './busqueda-pizza/busqueda-pizza.component';



@NgModule({
  declarations: [
    AppComponent,
    PaisesComponent,
    BienvenidoComponent,
    AltaRepartidorComponent,
    ListadoRepartidorComponent,
    ListadoPaisesRepartidorComponent,
    RepartidorSeleccionadoComponent,
    BusquedaComponent,
    AltapizzaComponent,
    BajapizzaComponent,
    ModificacionpizzaComponent,
    BusquedaPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListadoRepartidorComponent,ListadoPaisesRepartidorComponent]
})
export class AppModule { }
