import { AbmService } from './../services/abm.service';
import { Repartidor } from 'src/app/clases/repartidor';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {

  @Output()eventoRepartidorSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  listadoRepartidores!:Repartidor[];
  constructor(
    private abmSvc: AbmService
  ) { }

  ngOnInit(): void {
    this.abmSvc.getRepartidor().subscribe(repartidor=>{
      this.listadoRepartidores = repartidor;
      console.log(repartidor);
    });

    
  }
  enviarEventoRepartidorSeleccionado(e: Repartidor){
console.log(e);
    this.eventoRepartidorSeleccionado.emit(e);
  }

}
