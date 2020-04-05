import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';
import { RegComponent } from './reg/reg.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { SubscriptionComponent } from './subscription/subscription.component';


const routes: Routes = [
  { path: 'chat',
  loadChildren: () => import('./chat/chat.module').
  then(m => m.ChatModule)
},
{ path: 'fourReg',
  loadChildren: () => import('./compatibility-form/compatibility-form.module').
  then(m => m.CompatibilityFormModule)
},
  { path: '',
  redirectTo: '',
  pathMatch: 'full', component: NewHomeComponent },
  { path: 'home', redirectTo: ''},
  { path: 'viewCentres', component: ViewCentresComponent},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'phone-number', component: PhoneNumberScreenComponent},
  { path: 'reg', component: RegComponent},
  { path: 'termsCondition', component: TermsAndConditionsComponent},
  { path: 'checkout', component: CustomCheckoutComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
