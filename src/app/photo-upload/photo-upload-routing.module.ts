import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoUploadComponent } from './photo-upload.component';

const routes: Routes = [

  { path: ':mobile/:id/:isLead', component: PhotoUploadComponent },
  { path: ':mobile', component: PhotoUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoUploadRoutingModule { }
