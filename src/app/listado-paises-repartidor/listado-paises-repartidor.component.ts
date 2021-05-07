import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from '../clases/repartidor';

@Component({
  selector: 'app-listado-paises-repartidor',
  templateUrl: './listado-paises-repartidor.component.html',
  styleUrls: ['./listado-paises-repartidor.component.css']
})
export class ListadoPaisesRepartidorComponent implements OnInit {

  @Input()repartidorSeleccionado: Repartidor;

  constructor() {
    this.repartidorSeleccionado = new Repartidor();
   }

  ngOnInit(): void {
    console.log(this.repartidorSeleccionado);
  }


}
