import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-credit-award',
  templateUrl: './credit-award.component.html',
  styleUrls: ['./credit-award.component.css']
})
export class CreditAwardComponent implements OnInit {

  constructor(private http: HttpClient, private dialogRef: MatDialogRef<CreditAwardComponent>) { }

  ngOnInit() {
  }
  rateClicked() {
    this.Analytics('rating', 'rating clicked', 'sent to playstore');
    const rating = new FormData();
    rating.append('id', localStorage.getItem('id'));
    this.http.post<any>('https://partner.hansmatrimony.com/api/addFreeCredits', rating).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    }, err => {
      console.log(err);
    });
  }

  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }

    });
  }

}
