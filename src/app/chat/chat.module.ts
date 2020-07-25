import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { PersonalizedProfilesComponent } from './personalized-profiles/personalized-profiles.component';
import { ConnectionErrorComponent } from './connection-error/connection-error.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { EditFamilyDialogComponent } from './myprofile/edit-family-dialog/edit-family-dialog.component';
import { EditPersonalDialogComponent } from './myprofile/edit-personal-dialog/edit-personal-dialog.component';
import { EditPreferenceDialogComponent } from './myprofile/edit-preference-dialog/edit-preference-dialog.component';
import { TodayProfilesComponent } from './today-profiles/today-profiles.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FindOpenHistoryProfileService } from '../find-open-history-profile.service';
import { ChatServiceService } from '../chat-service.service';
import { HistoryProfilesComponent } from './history-profiles/history-profiles.component';
import { HistoryProfilesDialogComponent } from './history-profiles/history-profiles-dialog/history-profiles-dialog.component';
import { PersonalizedDialogComponent } from './personalized-profiles/personalized-dialog/personalized-dialog.component';
import { MyProfileService } from './myprofile/my-profile.service';
import { TodayMessageComponent } from './today-profiles/today-message/today-message.component';
import { PersonalizedMessageDialogComponent } from './history-profiles/personalized-message-dialog/personalized-message-dialog.component';
import { AppDownloadDialogComponent } from './app-download-dialog/app-download-dialog.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TodaysPaymentPopupComponent } from './today-profiles/todays-payment-popup/todays-payment-popup.component';
import { RateUsDialogComponent } from './rate-us-dialog/rate-us-dialog.component';
import { ChatDrawerComponent } from './chat-drawer/chat-drawer.component';
import { DiscoverComponent } from './discover/discover.component';
import { DailyWelcomePopupComponent } from './daily-welcome-popup/daily-welcome-popup.component';


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule,
    AngularMaterialModule,
    InfiniteScrollModule
  ],
  declarations: [ChatComponent,
    PersonalizedProfilesComponent,
    ConnectionErrorComponent,
    MessageDialogComponent,
    EditFamilyDialogComponent,
    EditPersonalDialogComponent,
    EditPreferenceDialogComponent,
    TodayProfilesComponent,
    UserProfileComponent,
    HistoryProfilesComponent,
    HistoryProfilesDialogComponent,
    PersonalizedDialogComponent,
    TodayMessageComponent,
    PersonalizedMessageDialogComponent,
    AppDownloadDialogComponent,
    TodaysPaymentPopupComponent,
    RateUsDialogComponent,
    ChatDrawerComponent,
    DiscoverComponent,
    DailyWelcomePopupComponent,
],
entryComponents: [
  MessageDialogComponent,
  EditFamilyDialogComponent,
  EditPersonalDialogComponent,
  EditPreferenceDialogComponent,
  PersonalizedDialogComponent,
  PersonalizedMessageDialogComponent,
  AppDownloadDialogComponent,
  TodaysPaymentPopupComponent,
  RateUsDialogComponent,
  ChatDrawerComponent,
  DailyWelcomePopupComponent
],
providers: [
  FindOpenHistoryProfileService,
  ChatServiceService,
  MyProfileService
]
})
export class ChatModule { }
