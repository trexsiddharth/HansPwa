import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxNotificationModule } from 'ngx-kc-notification';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubscriptionDialogComponent } from './subscription/subscription-dialog/subscription-dialog.component';
import { SubscriptionserviceService } from './subscriptionservice.service';

import { AgmCoreModule } from '@agm/core';
import { ViewCentresComponent } from './view-centres/view-centres.component';
import { RouterModule } from '@angular/router';
import { AnalyticsButtonDirective } from './analytics-button.directive';

import { TiktokAdsFormComponent } from './tiktok-ads-form/tiktok-ads-form.component';
import { CompatibilityFormComponent } from './compatibility-form/compatibility-form.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';

import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { CompatibilityPageTwoComponent } from './compatibility-form/compatibility-page-two/compatibility-page-two.component';
import { CompatibilityPageThreeComponent } from './compatibility-form/compatibility-page-three/compatibility-page-three.component';
import { CompatibilityPhotoComponent } from './compatibility-form/compatibility-photo/compatibility-photo.component';
import { RegComponent } from './reg/reg.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NewHomeComponent } from './new-home/new-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubscriptionComponent,
    SubscriptionDialogComponent,
    ViewCentresComponent,
    AnalyticsButtonDirective,
    TiktokAdsFormComponent,
    CompatibilityFormComponent,
    PhoneNumberScreenComponent,
    TermsAndConditionsComponent,
    CustomCheckoutComponent,
    CompatibilityPageTwoComponent,
    CompatibilityPageThreeComponent,
    CompatibilityPhotoComponent,
    RegComponent,
    NewHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    NgxNotificationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatGoogleMapsAutocompleteModule.forRoot(),
    MatGoogleMapsAutocompleteModule, AgmCoreModule.forRoot()
    , NgxSpinnerModule,
    NgxMatIntlTelInputModule
    , RouterModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    })
  ],
  providers: [SubscriptionserviceService],
  bootstrap: [AppComponent],
  // tslint:disable-next-line: max-line-length
  entryComponents: [SubscriptionDialogComponent, TiktokAdsFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
