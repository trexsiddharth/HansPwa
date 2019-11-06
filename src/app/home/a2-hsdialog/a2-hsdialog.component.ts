import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-a2-hsdialog',
  templateUrl: './a2-hsdialog.component.html',
  styleUrls: ['./a2-hsdialog.component.css']
})
export class A2HSDialogComponent implements OnInit {
data;
  constructor(public dialogRef: MatDialogRef<A2HSDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
  this.data = data;
  }

  ngOnInit() {
  }

  Cross_click() {
    this.dialogRef.close();
  }
  downloadIt() {
    this.dialogRef.close();
    this.data.prompt();
    this.data.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User rejected the A2HS prompt');
        }
        this.data = null;
    });
  }

}
