import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-lockdown-off',
  templateUrl: './lockdown-off.component.html',
  styleUrls: ['./lockdown-off.component.css']
})
export class LockdownOffComponent implements OnInit {
seconds = 59;
minutes = 0;
  constructor(public dialogRef: MatDialogRef<LockdownOffComponent>,
              public languageService: LanguageService) { }

  ngOnInit() {
    this.setTimer();

    setTimeout(() => {
      this.closeDialog();
    }, 10000);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  setTimer() {
    this.minutes = Math.floor(Math.random() * 20) + 10;
    console.log(this.seconds);
    const timer = setInterval(() => {
     this.seconds = this.seconds - 1;
     if (this.seconds === -1 && this.minutes !== 0) {
       this.seconds = 60;
       this.minutes = this.minutes - 1;
     } else if (this.minutes === 0 && this.seconds === 0) {
        clearInterval(timer);
     }
   }, 1000);
  }

}
