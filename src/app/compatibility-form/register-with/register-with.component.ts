import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare var FB: any;

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
    // this.loadFacebookScript();
    FB.XFBML.parse();
  }

  registerUsing(btnName) {
    console.log(btnName);
    this.dialogRef.close({
      chose: btnName
    });
  }
  
  checkLoginState() {
    FB.getLoginStatus((response) => {
      console.log(response);
    });
  }

  // loadFacebookScript() {
  //   const razor = document.getElementById('razorPay');
  //   if (!razor) {
  //     const fileName = document.createElement('script');
  //     fileName.async = true;
  //     fileName.defer = true;
  //     fileName.crossOrigin = 'anonymous';
  //     fileName.setAttribute('type', 'text/javascript');
  //     fileName.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js');
  //     document.body.appendChild(fileName);
  //   }
  // }

}
