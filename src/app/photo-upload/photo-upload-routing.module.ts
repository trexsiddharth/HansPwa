import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoUploadComponent } from './photo-upload.component';

const routes: Routes = [

  { path: ':id/:isLead', component: PhotoUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoUploadRoutingModule { }
