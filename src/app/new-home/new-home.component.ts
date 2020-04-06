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
    window.open('http://wa.me/918368090821?text=We%20are%20interested%20in%20Registering%20for%20Personalized%20Services');
  }

}
