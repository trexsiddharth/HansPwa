import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload.component';
import { PhotoUploadRoutingModule } from './photo-upload-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    PhotoUploadComponent
  ],
  imports: [
    CommonModule,
    PhotoUploadRoutingModule,
    AngularMaterialModule
  ]
})
export class PhotoUploadModule { }
