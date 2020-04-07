import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RegComponent } from './reg.component';
import { RegRoutingModule } from './reg-routing.module';



@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RegRoutingModule
  ]
})
export class RegModule { }
