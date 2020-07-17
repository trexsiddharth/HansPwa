import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryProfilesComponent } from './history-profiles/history-profiles.component';


const routes: Routes = [
  {
   path: 'app/:fcm_app', component: ChatComponent},
    { path: ':stage', component: ChatComponent},
    {path: '',
    component: ChatComponent
  },
   {
    path: 'user-profile/:id/:isLead',
    component: UserProfileComponent
  },
  {
    path: 'history/:section',
    component: HistoryProfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
