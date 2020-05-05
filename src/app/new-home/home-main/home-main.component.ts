import { Component, OnInit } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LockdownOffComponent } from 'src/app/offers/lockdown-off/lockdown-off.component';

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
    // this.openLockdownAd();
  }

  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }

  openLockdownAd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.minHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    const dialogRef = this.dialog.open(LockdownOffComponent, dialogConfig);
  }

}
