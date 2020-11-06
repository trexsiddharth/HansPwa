import { NgModule } from '@angular/core';
import {
  MatFormFieldModule, MatDatepickerModule, MatInputModule, MatButtonToggleModule,
  MatAutocompleteModule, MatCheckboxModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule, MatBadgeModule, MatStepperModule, MatDialogModule,
  MatNativeDateModule, MatChipsModule,   MatTabsModule,
  MatExpansionModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

@NgModule({
  imports: [
     // important !!! AIzaSyCU-ZHkKEBJgfbcotGjEqrsU6C2aB9tDj4 // old api
  AgmCoreModule.forRoot({
    apiKey: 
    'AIzaSyDw0R0Hb_DiVfM0VgZLBr9ZwjowFwu8RSY',
    libraries: ['places']
  }),
  MatGoogleMapsAutocompleteModule.forRoot(),
  LazyLoadImageModule.forRoot({
    preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
  })
  ],
exports: [
  MatFormFieldModule, MatDatepickerModule, MatInputModule, MatButtonToggleModule,
  MatAutocompleteModule, MatCheckboxModule, MatSelectModule, MatSidenavModule,
  MatSnackBarModule, MatBadgeModule, MatStepperModule, MatDialogModule,
  MatNativeDateModule, MatChipsModule,   MatTabsModule,
  MatExpansionModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  FormsModule,
  ReactiveFormsModule,
  AgmCoreModule,
  MatGoogleMapsAutocompleteModule,
  NgxMatSelectSearchModule,
  NgxSpinnerModule,
  LazyLoadImageModule,
  MatToolbarModule
],
providers: []
})
export class AngularMaterialModule { }
