import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompatibilityFormComponent } from './compatibility-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompatibilityFormComponent
  },
  { path: ':id/:leadId', component: CompatibilityFormComponent },
  { path: ':mobile/:leadId/:templeId/:enqDate', component: CompatibilityFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompatibilityFormRoutingModule { }