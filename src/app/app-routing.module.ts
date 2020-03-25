import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { CompatibilityFormComponent } from './compatibility-form/compatibility-form.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';
import { RegComponent } from './reg/reg.component';
import { NewHomeComponent } from './new-home/new-home.component';


const routes: Routes = [
  { path: 'chat',
  loadChildren: () => import('./chat/chat.module').
  then(m => m.ChatModule)
},
  { path: '',
  redirectTo: '',
  pathMatch: 'full', component: NewHomeComponent },
  { path: 'home', redirectTo: ''},
  { path: 'viewCentres', component: ViewCentresComponent},
  { path: 'phone-number', component: PhoneNumberScreenComponent},
  { path: 'reg', component: RegComponent},
  { path: 'fourReg', component: CompatibilityFormComponent },
  { path: 'fourReg/:id/:leadId', component: CompatibilityFormComponent },
  { path: 'termsCondition', component: TermsAndConditionsComponent},
  { path: 'checkout', component: CustomCheckoutComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
