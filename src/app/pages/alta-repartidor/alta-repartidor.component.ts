import { Router } from '@angular/router';
import { AbmService } from './../../services/abm.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  paisSeleccionado!:any;
  constructor(
    private fb:FormBuilder,
    private abmSvc: AbmService,
    private router: Router
  ) { }
  public formGroup!: FormGroup;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'dni': ['',Validators.required,[Validators.required,Validators.min(11111111),Validators.max(99999999)]],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(60)]],
      'capacidad': ['',[Validators.required,Validators.min(1),Validators.max(20)]],
      'unidad': ['',Validators.required],
      'nacionalidad':[{value: '', disabled: true},this.validarNombrePais],

      // 'email': ['',[Validators.required,Validators.email]],
    });
    console.log(this.formGroup);
  }
  cargarPaisSeleccionado(pais: any){
    this.paisSeleccionado = pais;
    console.log(this.paisSeleccionado);
  }
  darDeAltaRepartidor(){
    console.log(this.paisSeleccionado.name);
    this.formGroup.controls.nacionalidad.setValue(this.paisSeleccionado.name);
    console.log(this.formGroup.get('nombrePais')?.value);
    console.log(this.formGroup.getRawValue());
    //asigno el pais entero al actor
    let auxRepar:Repartidor = {
      id:(Math.floor(Math.random() * (999 - 0)) + 0).toString(),
      dni: this.formGroup.value.dni,
      nombre: this.formGroup.value.nombre,
      edad: this.formGroup.value.edad,
      capacidad: this.formGroup.value.capacidad,
      unidadPropia: this.formGroup.value.unidad,
      pais: this.paisSeleccionado
    }
    const queDevolvio= this.abmSvc.altaRepartidor(auxRepar);
    console.log(queDevolvio.then((ok: { path: any; })=>{
      if(ok.path){
        this.abmSvc.formCompleto = true;
        alert("Se dio de alta el repartidor correctamente");
        this.router.navigateByUrl("/bienvenido")
      }
      else{
        console.log("no ok");
      }
    }));
  }
  validarNombrePais(control: AbstractControl):null | object{

    
    const nombre = <string>control.value;
    console.log(nombre);
    if(nombre != null){
      return {
        valido: true
      }
    }
    else{
      return null;
    }
  }

}
