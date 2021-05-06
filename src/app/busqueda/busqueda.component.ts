import { Component, OnInit } from '@angular/core';
import { Repartidor } from '../clases/repartidor';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  repartidorSeleccionado!:Repartidor;
  constructor() { }

  ngOnInit(): void {
  }

  cargarEventoRepartidorRecibido(e:any){
    console.log(e);
    this.repartidorSeleccionado = e;
  }
}
