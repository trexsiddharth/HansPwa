import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryProfilesComponent } from './history-profiles/history-profiles.component';
import { HistoryProfilesDialogComponent } from './history-profiles/history-profiles-dialog/history-profiles-dialog.component';
import { DiscoverComponent } from './discover/discover.component';
import { MyProfileNewComponent } from './my-profile-new/my-profile-new.component';
import { GetcallbackComponent } from './getcallback/getcallback.component';
import { MyProfilePhotoUploadComponent } from './my-profile-photo-upload/my-profile-photo-upload.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';


const routes: Routes = [
  {
    path: 'app/:fcm_app', component: ChatComponent
  },
  { path: ':stage', component: ChatComponent },
  {
    path: '',
    component: ChatComponent
  },
  {
    path: 'user-profile/:id/:isLead',
    component: UserProfileComponent
  },
  {
    // this is used for routing through chat drawer
    path: 'my-profile-new/:id/:isLead',
    component: MyProfileNewComponent
  },
  {
    // this is used for routing through chat drawer
    path: 'my-profile-photo-upload/:id/:isLead',
    component: MyProfilePhotoUploadComponent
  },
  {
    // this is used for routing through chat drawer
    path: 'getcallback/',
    component: GetcallbackComponent
  },
  {
    // this is used for routing through chat drawer
    path: 'customer-support/',
    component: CustomerSupportComponent
  },
  {
    path: 'history/:section',
    component: HistoryProfilesComponent
  },
  {
    // this is used for routing through chat navigation section
    path: 'open/open-profile',
    component: HistoryProfilesDialogComponent
  },
  {
    // this is used for routing through chat navigation section to profile details after contacted button clicked
    path: 'open/open-profile/:id',
    component: HistoryProfilesDialogComponent
  },
  {
    path: 'discover/:section',
    component: DiscoverComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
