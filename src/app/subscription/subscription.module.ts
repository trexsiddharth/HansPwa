import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodaysPaymentPopupComponent } from '../chat/today-profiles/todays-payment-popup/todays-payment-popup.component';

@NgModule({
  declarations: [
    SubscriptionComponent,
    TodaysPaymentPopupComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SubscriptionRoutingModule,
    NgbModule
  ],
  entryComponents: [
    TodaysPaymentPopupComponent
  ]
})
export class SubscriptionModule { }
