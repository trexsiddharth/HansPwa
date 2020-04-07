import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { HistoryComponent } from './history/history.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
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


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule,
    AngularMaterialModule
  ],
  declarations: [ChatComponent,
    HistoryComponent,
    MyprofileComponent,
    PersonalizedProfilesComponent,
    ConnectionErrorComponent,
    MessageDialogComponent,
    EditFamilyDialogComponent,
    EditPersonalDialogComponent,
    EditPreferenceDialogComponent,
    TodayProfilesComponent,
    UserProfileComponent,
],
entryComponents: [
  MessageDialogComponent,
  EditFamilyDialogComponent,
  EditPersonalDialogComponent,
  EditPreferenceDialogComponent,
],
providers: [
  FindOpenHistoryProfileService,
  ChatServiceService
]
})
export class ChatModule { }