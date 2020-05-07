import { Component, OnInit } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LockdownOffComponent } from 'src/app/offers/lockdown-off/lockdown-off.component';
import { OfferOneComponent } from 'src/app/offers/offer-one/offer-one.component';
import { OfferTwoComponent } from 'src/app/offers/offer-two/offer-two.component';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(public homeService: NewHomeService,
              private dialog: MatDialog,
              private breakPointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }

  

}
