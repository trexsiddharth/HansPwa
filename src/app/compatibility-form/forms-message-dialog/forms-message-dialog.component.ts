import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-forms-message-dialog',
  templateUrl: './forms-message-dialog.component.html',
  styleUrls: ['./forms-message-dialog.component.css']
})
export class FormsMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormsMessageDialogComponent>) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

}
