import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresoRoutingModule } from './ingreso-routing.module';
import { IngresoComponent } from './ingreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule
  ]
})
export class IngresoModule { }
