import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlessRoutingModule } from './bless-routing.module';
import { BlessPaymentComponent } from './bless-payment/bless-payment.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    BlessPaymentComponent
  ],
  imports: [
    CommonModule,
    BlessRoutingModule,
    AngularMaterialModule
  ]
})
export class BlessModule { }
