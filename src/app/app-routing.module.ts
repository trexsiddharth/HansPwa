import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOneComponent } from './register-one/register-one.component';
import { RegisterTwoComponent } from './register-two/register-two.component';
import { RegisterThreeComponent } from './register-three/register-three.component';
import { RegisterFourComponent } from './register-four/register-four.component';
import { RegisterFiveComponent } from './register-five/register-five.component';
import { RegisterSixComponent } from './register-six/register-six.component';
import { ChatComponent } from './chat/chat.component';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { CompatibilityFormComponent } from './compatibility-form/compatibility-form.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', redirectTo: ''},
  { path: 'register', component: RegisterComponent },
  { path: 'register-one', component: RegisterOneComponent},
  { path: 'register-two', component: RegisterTwoComponent},
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'register-three', component: RegisterThreeComponent},
  { path: 'register-four', component: RegisterFourComponent},
  { path: 'register-five', component: RegisterFiveComponent},
  { path: 'register-six', component: RegisterSixComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'viewCentres', component: ViewCentresComponent},
  { path: 'phoneNumber', component: PhoneNumberScreenComponent},
  { path: 'compatibility-form', component: CompatibilityFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
