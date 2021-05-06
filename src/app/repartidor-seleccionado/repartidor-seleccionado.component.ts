import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from '../clases/repartidor';

@Component({
  selector: 'app-repartidor-seleccionado',
  templateUrl: './repartidor-seleccionado.component.html',
  styleUrls: ['./repartidor-seleccionado.component.css']
})
export class RepartidorSeleccionadoComponent implements OnInit {

  @Input()repartidorSeleccionado!: Repartidor;
  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.repartidorSeleccionado);
  }

}
