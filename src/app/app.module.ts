import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
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
import { ImageCropperModule } from 'ngx-image-cropper';
import { PhotoUploadCropComponent } from './photo-upload-crop/photo-upload-crop.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { KundaliTwoComponent } from './new-home/kundali/kundali.component';
import { NewLandingFromComponentComponent } from './new-landing-from-component/new-landing-from-component.component';
import { Hero } from './new-landing-from-component/hero/hero';
import { Features } from './new-landing-from-component/features/features.component';
import { NewApp } from './new-landing-from-component/newApp/new-app.component';
import { OfflineCenters } from './new-landing-from-component/offlineCenters/offline-centers.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Kundali } from './new-landing-from-component/freeKundaliMatching/new-kundali.component';
import { AppFooter } from './new-landing-from-component/footer/footer';
import { MatchMakers } from './new-landing-from-component/matchmakers/matchmakers.component';
import { Testimonials } from './new-landing-from-component/testimonials/testimonials.component';
import { TestimonialCards } from './new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component';
import { HowItWorks } from './new-landing-from-component/howItWorks/how-it-works.component';
import { CustomBg } from './new-landing-from-component/custom-bg/custom-bg';
import { NavBar } from './new-landing-from-component/hero/navBar/navBar';
import { BengaliMatrimonyComponent } from './bengali-matrimony/bengali-matrimony.component';
import { NewFooter } from './new-landing-from-component/new-footer/new-footer';
import { HinduMatrimonyComponent } from './hindu-matrimony/hindumatrimony.component';
import { SikhMatrimonyComponent } from './sikh-matrimony/sikhmatrimony.component';
import { ChristianMatrimonyComponent } from './christian-matrimony/christianmatrimony.component';
import { BuddhistMatrimonyComponent } from './buddhist-matrimony/buddhistmatrimony.component';
import { JainMatrimonyComponent } from './jain-matrimony/jainmatrimony.component';
import { MuslimMatrimonyComponent } from './muslim-matrimony/muslimmatrimony.component';
import { SidebarModule } from 'ng-sidebar';
import { UnderstandErrorHandler } from './chat/helper/UnderstandErrorHandler';
import { PaymentPopupComponent } from './payment-popup/payment-popup.component';
import { SampleProfilesComponent } from './sample-profiles/sample-profiles.component';
import { ProfileItemComponent } from './sample-profiles/profile-item/profile-item.component';
import { TempleItemComponent } from './sample-profiles/temple-item/temple-item.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


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
    TodaysPaymentPopupComponent,
    PhotoUploadCropComponent,
    KundaliTwoComponent,
    NewLandingFromComponentComponent,
    Hero,
    Features,
    NewApp,
    OfflineCenters,
    Kundali,
    AppFooter,
    MatchMakers,
    Testimonials,
    TestimonialCards,
    HowItWorks,
    CustomBg,
    NavBar,
    BengaliMatrimonyComponent,
    NewFooter,
    HinduMatrimonyComponent,
    SikhMatrimonyComponent,
    ChristianMatrimonyComponent,
    BuddhistMatrimonyComponent,
    JainMatrimonyComponent,
    MuslimMatrimonyComponent,
    PaymentPopupComponent,
    SampleProfilesComponent,
    ProfileItemComponent,
    TempleItemComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    AngularMaterialModule,
    NgxNotificationModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMatIntlTelInputModule,
    RouterModule,
    Ng5SliderModule,
    NgbModule,
    ImageCropperModule,
    CarouselModule,
    SidebarModule.forRoot(),
  ],
  providers: [SubscriptionserviceService, NewHomeService, HansPreloadingStrategyService,
    {
      provide: ErrorHandler,
      useClass: UnderstandErrorHandler,
    }],
  bootstrap: [AppComponent],
  // tslint:disable-next-line: max-line-length
  entryComponents: [TiktokAdsFormComponent,
    LockdownOffComponent,
    OfferOneComponent,
    OfferTwoComponent,
    VerifyOtpComponent,
    TodaysPaymentPopupComponent,
    PhotoUploadCropComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
