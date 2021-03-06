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
//import { TodaysPaymentPopupComponent } from './today-profiles/todays-payment-popup/todays-payment-popup.component';
import { RateUsDialogComponent } from './rate-us-dialog/rate-us-dialog.component';
import { ChatDrawerComponent } from './chat-drawer/chat-drawer.component';
import { DiscoverComponent } from './discover/discover.component';
import { DailyWelcomePopupComponent } from './daily-welcome-popup/daily-welcome-popup.component';
import { MyProfileNewComponent } from './my-profile-new/my-profile-new.component';
import { Ng5SliderModule } from 'ng5-slider';
import { GetcallbackComponent } from './getcallback/getcallback.component';
import { OkdialogComponent } from './getcallback/okdialog/okdialog.component';
import { MyProfilePhotoUploadComponent } from './my-profile-photo-upload/my-profile-photo-upload.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { OkdialogCsComponent } from './customer-support/okdialog-cs/okdialog-cs.component';
import { PersistentMessageComponent } from './today-profiles/persistent-message/persistent-message.component';
import { TinderUiComponent } from './today-profiles/tinder-ui/tinder-ui.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SettingsComponent } from './settings/settings.component';
import { RUSureComponent } from './settings/r-u-sure/r-u-sure.component';
import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';
import { HistorySectionComponent } from './history-section/history-section.component';
import { AskDeleteDialogComponent } from './my-profile-photo-upload/ask-delete-dialog/ask-delete-dialog.component';
import { ChooseFromDialogComponent } from './chat-drawer/choose-from-dialog/choose-from-dialog.component';
import { ChooseForComponent } from '../compatibility-form/choose-for/choose-for.component';
import { HistoryItemComponent } from './history-section/history-item/history-item.component';
import { ProfileItemComponent } from './profile-item/profile-item.component';
import { CompletionFormsComponent } from './today-profiles/completion-forms/completion-forms.component';
@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule,
    AngularMaterialModule,
    InfiniteScrollModule,
    Ng5SliderModule,
    NgxMatIntlTelInputModule
  ],
  declarations: [
    ChatComponent,
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
    // TodaysPaymentPopupComponent,
    RateUsDialogComponent,
    ChatDrawerComponent,
    DiscoverComponent,
    DailyWelcomePopupComponent,
    MyProfileNewComponent,
    GetcallbackComponent,
    OkdialogComponent,
    MyProfilePhotoUploadComponent,
    CustomerSupportComponent,
    OkdialogCsComponent,
    PersistentMessageComponent,
    TinderUiComponent,
    SettingsComponent,
    RUSureComponent,
    HistorySectionComponent,
    AskDeleteDialogComponent,
    ChooseFromDialogComponent,
    HistoryItemComponent,
    ProfileItemComponent,
    CompletionFormsComponent
  ],
  entryComponents: [
    MessageDialogComponent,
    EditFamilyDialogComponent,
    EditPersonalDialogComponent,
    EditPreferenceDialogComponent,
    PersonalizedDialogComponent,
    PersonalizedMessageDialogComponent,
    AppDownloadDialogComponent,
    RateUsDialogComponent,
    ChatDrawerComponent,
    DailyWelcomePopupComponent,
    OkdialogComponent,
    OkdialogCsComponent,
    PersistentMessageComponent,
    RUSureComponent,
    AskDeleteDialogComponent,
    ChooseFromDialogComponent
  ],
  providers: [
    FindOpenHistoryProfileService,
    ChatServiceService,
    MyProfileService,
    DeviceDetectorService
  ],
})
export class ChatModule { }
