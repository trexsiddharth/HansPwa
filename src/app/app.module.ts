import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxNotificationModule } from 'ngx-kc-notification';

import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { Ng5SliderModule } from 'ng5-slider';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionserviceService } from './subscriptionservice.service';

import { ViewCentresComponent } from './view-centres/view-centres.component';
import { RouterModule } from '@angular/router';
import { AnalyticsButtonDirective } from './analytics-button.directive';

import { TiktokAdsFormComponent } from './tiktok-ads-form/tiktok-ads-form.component';
import { PhoneNumberScreenComponent } from './phone-number-screen/phone-number-screen.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { CustomCheckoutComponent } from './custom-checkout/custom-checkout.component';


import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NewHomeComponent } from './new-home/new-home.component';
import { HomeMainComponent } from './new-home/home-main/home-main.component';
import { HomeDrawerComponent } from './new-home/home-drawer/home-drawer.component';
import { NewHomeService } from './new-home/new-home.service';
import { LockdownOffComponent } from './offers/lockdown-off/lockdown-off.component';
import { OfferOneComponent } from './offers/offer-one/offer-one.component';
import { OfferTwoComponent } from './offers/offer-two/offer-two.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { HansPreloadingStrategyService } from './hans-preloading-strategy.service';
import { TodaysPaymentPopupComponent } from './todays-payment-popup/todays-payment-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCentresComponent,
    AnalyticsButtonDirective,
    TiktokAdsFormComponent,
    PhoneNumberScreenComponent,
    TermsAndConditionsComponent,
    CustomCheckoutComponent,
    NewHomeComponent,
    HomeMainComponent,
    HomeDrawerComponent,
    LockdownOffComponent,
    OfferOneComponent,
    OfferTwoComponent,
    VerifyOtpComponent,
    TodaysPaymentPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    NgxNotificationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMatIntlTelInputModule,
    RouterModule,
    Ng5SliderModule,
    NgbModule
  ],
  providers: [SubscriptionserviceService, NewHomeService, HansPreloadingStrategyService],
  bootstrap: [AppComponent],
  // tslint:disable-next-line: max-line-length
  entryComponents: [TiktokAdsFormComponent,
    LockdownOffComponent,
    OfferOneComponent,
    OfferTwoComponent,
    VerifyOtpComponent,
    TodaysPaymentPopupComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
