import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompatibilityFormComponent } from './compatibility-form.component';
import { CompatibilityVerifyComponent } from './compatibility-verify/compatibility-verify.component';
import { FullFormOneComponent } from './full-form/full-page-one/full-form-one-component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: CompatibilityFormComponent
  },
  {
    path: 'compatibility-verify',
    component: CompatibilityVerifyComponent
  },
  {
    path: 'thank-you',
    component: ThankYouComponent
  },
  { path: ':appMobile', component: CompatibilityFormComponent },
  { path: 'skip', component: CompatibilityFormComponent },
  { path: 'fullPage', component: FullFormOneComponent },
  { path: ':id/:leadId/:templeId', component: CompatibilityFormComponent },
  { path: ':id/:leadId/:templeId/:redParam', component: CompatibilityFormComponent },
  { path: ':id/:leadId/:templeId/:fourthParam/:fifthParam', component: CompatibilityFormComponent },
  { path: ':mobile/:leadId/:templeId/:enqDate/:source/:extra', component: CompatibilityFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompatibilityFormRoutingModule { }
