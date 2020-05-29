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
  MatSlideToggleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [
     // important !!! AIzaSyCU-ZHkKEBJgfbcotGjEqrsU6C2aB9tDj4 // old api
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDxD0PlzfG7pAEDY0-p8vPbXKDgjCKFj1o',
    libraries: ['places']
  }),
  MatGoogleMapsAutocompleteModule
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
  FormsModule,
  ReactiveFormsModule,
  AgmCoreModule,
  MatGoogleMapsAutocompleteModule,
  NgxMatSelectSearchModule
]
})
export class AngularMaterialModule { }
