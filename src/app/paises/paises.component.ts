import { AbmService } from './../services/abm.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from '../clases/pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  @Output()eventoPaisSeleccionado:EventEmitter<any> = new EventEmitter<any>();
  listadoPaises!:any[];
  // paisSeleccionado!:Pais;

  constructor(
    private abmSvc: AbmService
  ) { }

  ngOnInit(): void {
    this.abmSvc.getAllCountries().subscribe((paises)=>{
      // this.listadoPaises.push({...paises});
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
      // console.log(paises);
    });

  }

  getAllCountries(){
    this.abmSvc.getAllCountries();
  }
  
  enviarEventoPaisSeleccionado(pais:Pais){
    this.eventoPaisSeleccionado.emit(pais);
  }

}
