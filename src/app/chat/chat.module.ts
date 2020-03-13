import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { HistoryComponent } from './history/history.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PersonalizedProfilesComponent } from './personalized-profiles/personalized-profiles.component';
import { ConnectionErrorComponent } from './connection-error/connection-error.component';
import { MatTabsModule, MatExpansionModule, MatCardModule, MatIconModule, MatMenuModule,
     MatButtonModule, MatTooltipModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule,
    MatTooltipModule
  ],
  declarations: [ChatComponent,
    HistoryComponent,
    ProfileCardComponent,
    MyprofileComponent,
    PersonalizedProfilesComponent,
    ConnectionErrorComponent
]
})
export class ChatModule { }