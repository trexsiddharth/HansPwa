import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxNotificationModule } from 'ngx-kc-notification';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {
  MatFormFieldModule, MatDatepickerModule, MatIconModule, MatInputModule, MatButtonToggleModule, MatButtonModule,
  MatAutocompleteModule, MatCheckboxModule, MatSelectModule, MatTabsModule, MatTooltipModule, MatSidenavModule, MatCardModule,
  MatSnackBarModule, MatExpansionModule, MatMenuModule
} from '@angular/material';

import { MatNativeDateModule } from '@angular/material';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionDialogComponent } from './subscription/subscription-dialog/subscription-dialog.component';
import { SubscriptionserviceService } from './subscriptionservice.service';
import { RegisterComponent } from './register/register.component';
import { RegisterOneComponent } from './register-one/register-one.component';
import { AgmCoreModule } from '@agm/core';
import { RegisterTwoComponent } from './register-two/register-two.component';
import { RegisterThreeComponent } from './register-three/register-three.component';
import { RegisterFourComponent } from './register-four/register-four.component';
import { RegisterFiveComponent } from './register-five/register-five.component';
import { RegisterSixComponent } from './register-six/register-six.component';
import { ChatComponent } from './chat/chat.component';
import { HistoryComponent } from './chat/history/history.component';
import { MyprofileComponent } from './chat/myprofile/myprofile.component';
import { EditFamilyDialogComponent } from './chat/myprofile/edit-family-dialog/edit-family-dialog.component';
import { EditPersonalDialogComponent } from './chat/myprofile/edit-personal-dialog/edit-personal-dialog.component';
import { EditPreferenceDialogComponent } from './chat/myprofile/edit-preference-dialog/edit-preference-dialog.component';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { A2HSDialogComponent } from './chat/a2-hsdialog/a2-hsdialog.component';
import { RouterModule } from '@angular/router';
import { AnalyticsButtonDirective } from './analytics-button.directive';

import { WalkthroughModule } from 'ngx-walkthrough';
import { TiktokAdsFormComponent } from './tiktok-ads-form/tiktok-ads-form.component';
import { CreditAwardComponent } from './credit-award/credit-award.component';
import { PreferenceWideningComponent } from './preference-widening/preference-widening.component';
import { CompatibilityFormComponent } from './compatibility-form/compatibility-form.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { ConnectionErrorComponent } from './chat/connection-error/connection-error.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';

import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    SubscriptionDialogComponent,
    RegisterComponent,
    RegisterOneComponent,
    RegisterTwoComponent,
    RegisterThreeComponent,
    RegisterFourComponent,
    RegisterFiveComponent,
    RegisterSixComponent,
    ChatComponent,
    HistoryComponent,
    MyprofileComponent,
    EditFamilyDialogComponent,
    EditPersonalDialogComponent,
    EditPreferenceDialogComponent,
    ViewCentresComponent,
    A2HSDialogComponent,
    AnalyticsButtonDirective,
    TiktokAdsFormComponent,
    CreditAwardComponent,
    PreferenceWideningComponent,
    CompatibilityFormComponent,
    PhoneNumberScreenComponent,
    ConnectionErrorComponent,
    TermsAndConditionsComponent,
    CustomCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxNotificationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule,
    HttpClientModule, MatDialogModule, MatDatepickerModule, MatIconModule, MatButtonToggleModule,
    MatAutocompleteModule, MatCheckboxModule, MatSelectModule, MatTabsModule, MatTooltipModule,
    ReactiveFormsModule, MatGoogleMapsAutocompleteModule.forRoot(), MatGoogleMapsAutocompleteModule, AgmCoreModule.forRoot(),
    MatNativeDateModule, MatChipsModule, NgxSpinnerModule,
    NgxMatIntlTelInputModule, MatSnackBarModule, MatButtonModule, MatExpansionModule,
    NgbModule, RouterModule, WalkthroughModule,MatCardModule, MatMenuModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    })
  ],
  providers: [SubscriptionserviceService],
  bootstrap: [AppComponent],
  // tslint:disable-next-line: max-line-length
  entryComponents: [SubscriptionDialogComponent, EditPersonalDialogComponent, EditPreferenceDialogComponent, A2HSDialogComponent,
    EditFamilyDialogComponent, TiktokAdsFormComponent, CreditAwardComponent, PreferenceWideningComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
