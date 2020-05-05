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


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule,
    AngularMaterialModule
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
],
entryComponents: [
  MessageDialogComponent,
  EditFamilyDialogComponent,
  EditPersonalDialogComponent,
  EditPreferenceDialogComponent,
  HistoryProfilesDialogComponent,
  PersonalizedDialogComponent,
  PersonalizedMessageDialogComponent
],
providers: [
  FindOpenHistoryProfileService,
  ChatServiceService,
  MyProfileService
]
})
export class ChatModule { }
