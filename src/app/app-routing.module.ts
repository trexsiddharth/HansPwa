import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';
import { NewHomeComponent } from './new-home/new-home.component';
import { HansPreloadingStrategyService } from './hans-preloading-strategy.service';
import { KundaliTwoComponent } from './new-home/kundali/kundali.component';
import { NewLandingFromComponentComponent } from './new-landing-from-component/new-landing-from-component.component';
import { BengaliMatrimonyComponent } from './bengali-matrimony/bengali-matrimony.component';
import { HinduMatrimonyComponent } from './hindu-matrimony/hindumatrimony.component';
import { SikhMatrimonyComponent } from './sikh-matrimony/sikhmatrimony.component';
import { ChristianMatrimonyComponent } from './christian-matrimony/christianmatrimony.component';
import { BuddhistMatrimonyComponent } from './buddhist-matrimony/buddhistmatrimony.component';
import { JainMatrimonyComponent } from './jain-matrimony/jainmatrimony.component';
import { MuslimMatrimonyComponent } from './muslim-matrimony/muslimmatrimony.component';


const routes: Routes = [
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').
      then(m => m.ChatModule),
    data: { preload: true }
  },
  {
    path: 'fourReg',
    loadChildren: () => import('./compatibility-form/compatibility-form.module').
      then(m => m.CompatibilityFormModule),
    data: { preload: true }
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').
      then(m => m.RegModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./subscription/subscription.module').
      then(m => m.SubscriptionModule)
  },
  {
    path: 'bless',
    loadChildren: () => import('./bless/bless.module').
      then(m => m.BlessModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full', component: NewLandingFromComponentComponent
  },
  {
    path: 'bengali-matrimony',
    component: BengaliMatrimonyComponent
  },
  {
    path: 'sikh-matrimony',
    component: SikhMatrimonyComponent
  },
  {
    path: 'hindu-matrimony',
    component: HinduMatrimonyComponent
  },
  {
    path: 'christian-matrimony',
    component: ChristianMatrimonyComponent
  },
  {
    path: 'buddhist-matrimony',
    component: BuddhistMatrimonyComponent
  },
  {
    path: 'jain-matrimony',
    component: JainMatrimonyComponent
  },
  {
    path: 'muslim-matrimony',
    component: MuslimMatrimonyComponent
  },
  { path: 'home', redirectTo: '' },
  { path: 'viewCentres', component: ViewCentresComponent },
  { path: 'phone-number', component: PhoneNumberScreenComponent },
  { path: 'termsCondition', component: TermsAndConditionsComponent },
  { path: 'checkout', component: CustomCheckoutComponent },
  { path: 'kundaliMatching', component: KundaliTwoComponent },
  { path: 'kundaliMatching/:bName/:bDate/:bPlace/:bTime/:gName/:gDate/:gPlace/:gTime', component: KundaliTwoComponent },
  {
    path: 'picUpload', loadChildren: () => import('./photo-upload/photo-upload.module')
      .then(m => m.PhotoUploadModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: HansPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
