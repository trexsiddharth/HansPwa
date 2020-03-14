import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat.component';


const routes: Routes = [
  {
   path: 'app/:fcm_app', component: ChatComponent},
    { path: ':stage', component: ChatComponent},
    {path: '',
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }