import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlessPaymentComponent } from './bless-payment/bless-payment.component';


const routes: Routes = [
    {path: '',
    component: BlessPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlessRoutingModule { }
