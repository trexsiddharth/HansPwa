import { Component, OnInit, ViewChildren } from '@angular/core';
import { NewHomeService } from './new-home.service';
import {  MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {

  constructor(public homeService: NewHomeService) { }

  ngOnInit() {
  }

  sendWhatsAppLink() {
    window.open('whatsapp://send?text=*हंस%20मॅट्रिमोनी%20ऐप:*%20' + 'https://play.google.com/store/apps/details?id=com.twango.me');
  }

}
