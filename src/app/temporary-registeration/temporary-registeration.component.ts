
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

@Component({
  selector: 'app-temporary-registeration',
  templateUrl: './temporary-registeration.component.html',
  styleUrls: ['./temporary-registeration.component.css']
})

export class TemporaryRegisterationComponent implements OnInit {
  @ViewChild('otpModal', {static: false}) private otpModal: any;

  gender;
  birthdayValid;
  PageOne: FormGroup;
  otpForm: FormGroup;
  numberCheck: string;
  changeNumber = false;
  isCompleted1 = false;
  otpStatus = false;
  createProfile: string[] = ['स्वयं', 'बेटा', 'बेटी', 'भाई', 'बहन', 'अन्य'];


  constructor( private http: HttpClient,
               private _formBuilder: FormBuilder, private router: Router,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageOne = this._formBuilder.group({
      create: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])]
    });
  }



  ngOnInit() {
  }
}


