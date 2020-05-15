import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompatibilityFormComponent } from './compatibility-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompatibilityFormComponent
  },
  { path: ':appMobile', component: CompatibilityFormComponent },
  { path: 'skip', component: CompatibilityFormComponent },
  { path: ':id/:leadId/:templeId', component: CompatibilityFormComponent },
  { path: ':mobile/:leadId/:templeId/:enqDate/:source', component: CompatibilityFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompatibilityFormRoutingModule { }
