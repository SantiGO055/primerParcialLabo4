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
  listadoPaisesAfrica!:any[];
  listadoPaisesEuropa!:any[];
  europeo:boolean = false;
  africano:boolean = true;

  // paisSeleccionado!:Pais;

  continente!:string;
  constructor(
    private abmSvc: AbmService
  ) {
    this.listadoPaisesAfrica = [];
    this.listadoPaisesEuropa = [];
   }

  ngOnInit(): void {
    this.abmSvc.getAllCountries().subscribe((paises)=>{
      // this.listadoPaises.push({...paises});
      this.listadoPaises = JSON.parse(JSON.stringify(paises));
      // console.log(paises);
    });
    

  }

  verificarContinenteAfrica(){
    this.listadoPaises.forEach(element => {
      console.log(element.region);
      if(element.region == "Africa"){
        this.africano = true;
        this.europeo = false;
        console.log(element);

        
        this.listadoPaisesAfrica.push(JSON.parse(JSON.stringify(element)));
      }
      
    });
    
    
  }
  verificarContinenteEuropa(){
    this.listadoPaises.forEach(element => {
      console.log(element.region);
      if(element.region == "Europe"){
        this.africano = false;
        this.europeo = true;
  
        console.log(element);
        
        this.listadoPaisesEuropa.push(JSON.parse(JSON.stringify(element)));
      }
      
    });
  }
  capturar(){
    this.continente = this.continente;
    console.log(this.continente);
    if(this.continente =="Africano"){
      this.listadoPaisesEuropa = [];
      this.verificarContinenteAfrica();
    }
    if(this.continente =="Europeo"){
      this.listadoPaisesAfrica = [];
      this.verificarContinenteEuropa();
    }
    
  }
  getAllCountries(){
    this.abmSvc.getAllCountries();
  }
  
  enviarEventoPaisSeleccionado(pais:Pais){
    this.eventoPaisSeleccionado.emit(pais);
  }

}
