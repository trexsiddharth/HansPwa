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
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    MatGoogleMapsAutocompleteModule.forRoot(),
    AgmCoreModule.forRoot()
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
  FormsModule,
  ReactiveFormsModule,
  MatGoogleMapsAutocompleteModule,
  AgmCoreModule
]
})
export class AngularMaterialModule { }
