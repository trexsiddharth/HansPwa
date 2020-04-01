import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CompatibilityFormComponent } from './compatibility-form.component';
import { CompatibilityPageTwoComponent } from './compatibility-page-two/compatibility-page-two.component';
import { CompatibilityPageThreeComponent } from './compatibility-page-three/compatibility-page-three.component';
import { CompatibilityPhotoComponent } from './compatibility-photo/compatibility-photo.component';
import { CompatibilityFormRoutingModule } from './compatibility-form-routing.module';


@NgModule({
  declarations: [
    CompatibilityFormComponent,
    CompatibilityPageTwoComponent,
    CompatibilityPageThreeComponent,
    CompatibilityPhotoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    CompatibilityFormRoutingModule
  ]
})
export class CompatibilityFormModule { }
