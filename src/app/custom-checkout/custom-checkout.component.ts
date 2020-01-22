import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-checkout',
  templateUrl: './custom-checkout.component.html',
  styleUrls: ['./custom-checkout.component.css']
})
export class CustomCheckoutComponent implements OnInit {
  checkOutForm = new FormGroup({
    name: new FormControl(null, {validators: [Validators.required]})
  });
  constructor() { }

  ngOnInit() {

  }

}
