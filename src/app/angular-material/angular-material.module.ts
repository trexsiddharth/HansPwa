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
  MatTooltipModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
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
]
})
export class AngularMaterialModule { }
