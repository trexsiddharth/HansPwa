import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-register-with',
  templateUrl: './register-with.component.html',
  styleUrls: ['./register-with.component.css']
})
export class RegisterWithComponent implements OnInit {
selection;
  constructor(public dialogRef: MatDialogRef<RegisterWithComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
                this.selection = data.value;
              }

  ngOnInit() {
  }

  registerUsing(btnName) {
    console.log(btnName);
    this.dialogRef.close({
      chose: btnName
    });
  }

}
