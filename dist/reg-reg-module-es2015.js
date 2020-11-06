(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reg-reg-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class='pwaSize fixed t-0 b-0 bg-white w-full HC overflowY' >\r\n    <div class=\"container t-c\">\r\n        <div class=\"section\">\r\n            <div class=\"container\" style=\"margin-left:auto;margin-right:auto; text-align: center;\"> \r\n                <img src=\"../../../assets/logo_hans.png\" style=\"width:60%\">\r\n            </div>              \r\n        </div>\r\n        <div class=\"row\" style=\"margin:0px;text-align: center;padding: 0px 10%;\">\r\n                <img src=\"../../assets/avatar.svg\" style=\"width: 25%;border-right: 4px solid #34b7f1;\" alt=\"register\">\r\n                <h5 style=\"display: inline-block;margin: auto auto auto 10px;\">Free Registration</h5>\r\n        </div>\r\n    </div>\r\n   \r\n    <div class=\"container customBackground\" style=\"width:80%;background: white;border-radius: 20px;margin-top: 20px; margin-bottom: 20px;\">\r\n        <div class=\"w-full\" style=\"margin-left:auto;margin-right:auto\">\r\n            <form  [formGroup]=\"PageOne\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                          <mat-label style=\"color: black;\">First Name</mat-label>\r\n                          <input  type=\"text\"  matInput formControlName=\"firstName\" required name=\"firstName\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\r\n                          <mat-label style=\"color: black;\">Last Name</mat-label>\r\n                          <input type=\"text\"  matInput formControlName=\"lastName\" name=\"lastName\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Mobile number</mat-label>\r\n                            <input type=\"number\" id=\"phone\" matInput formControlName=\"phone\" (change)=\"mobileNumberChanged(numberCheck)\" [(ngModel)]=\"numberCheck\" required name=\"phone\">\r\n\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Email</mat-label>\r\n                            <input type=\"email\" id=\"email\" matInput formControlName=\"email\" name=\"email\">\r\n\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                      <mat-form-field class=\"full-width\" appearance=\"standard\" style=\"height:60px;border-bottom: 1px solid black;\">\r\n                          <mat-label style=\"color: black;\">Looking Rishta For</mat-label>\r\n                          <mat-select (selectionChange)=\"setGender(relation.value)\" #relation formControlName=\"Relation\" required >\r\n                                  <mat-option *ngFor=\"let  option of createProfile\" [value]=\"option\">\r\n                                          {{option}}\r\n                                  </mat-option>\r\n                          </mat-select>\r\n                      </mat-form-field> \r\n                  </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Gender</mat-label>\r\n                            <mat-select  formControlName=\"gender\" required >\r\n                                <mat-option value=\"Male\">Male</mat-option>\r\n                                <mat-option value=\"Female\">Female</mat-option>\r\n                            </mat-select>\r\n                        \r\n                        </mat-form-field>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-md-12\">\r\n                     \r\n                          <label style=\"color: black; margin-top: 8px;\">Date of Birth</label>\r\n                          <div class=\"row\" style=\"margin: 0px;\">\r\n                            <select class=\"classic\" formControlName=\"birth_date\" style=\"border: 1px solid black;\"  required name=\"birth_date\">\r\n                                <option *ngFor=\"let  option of date\" [value]=\"option\">\r\n                                  {{option}}\r\n                                </option>\r\n                              </select> \r\n\r\n                              <select class=\"classic\" formControlName=\"birth_month\" style=\"border: 1px solid black;margin-left: 10px;\"  required name=\"birth_month\">\r\n                                <option *ngFor=\"let  option of month\" [value]=\"option\">\r\n                                  {{option}}\r\n                                </option>\r\n                              </select> \r\n                              \r\n                              <select class=\"classic\" formControlName=\"birth_year\" style=\"border: 1px solid black;margin-left: 10px;\"  required name=\"birth_year\">\r\n                                <option *ngFor=\"let  option of years\" [value]=\"option\">\r\n                                  {{option}}\r\n                                </option>\r\n                              </select>\r\n                          </div>\r\n                        \r\n                       \r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                          <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Height</mat-label>\r\n                            <select matNativeControl #height formControlName=\"Height\" required name=\"Height\">\r\n                                <option *ngFor=\"let option of Heights;let i = index\" [value]=\"i\">\r\n                                  {{option}}\r\n                                </option>\r\n                              </select>\r\n                          </mat-form-field>\r\n                        </div>\r\n\r\n                        <div class=\"col-6\">\r\n                          <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\r\n                            <mat-label style=\"color: black;\">Weight</mat-label>\r\n                            <input style=\"padding-bottom: 6px\" type=\"text\" pattern=\"\\d*\" maxlength=\"3\" matInput formControlName=\"Weight\" required name=\"Weight\">\r\n                            <span matSuffix>Kg &nbsp;</span>\r\n                          </mat-form-field>\r\n                        </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                 \r\n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                              <mat-label style=\"color: black;\">Marital Status</mat-label>\r\n                              <select matNativeControl  formControlName=\"MaritalStatus\" required name=\"MaritalStatus\">\r\n                                  <option *ngFor=\"let  option of MaritalStatus\" [value]=\"option\">\r\n                                    {{option}}\r\n                                  </option>\r\n                                </select> \r\n                              \r\n                            </mat-form-field>\r\n                          </div>\r\n                   \r\n                          <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\r\n                              <mat-label style=\"color: black;\">Annual Income In Lakhs</mat-label>\r\n                              <input type=\"text\" pattern=\"\\d*\" maxlength=\"3\" matInput formControlName=\"AnnualIncome\" required name=\"AnnualIncome\">\r\n                              <span matSuffix>LPA &nbsp;</span>\r\n                              <mat-error class=\"full-width\" style=\"margin-bottom: 10px;\" *ngIf=\"PageOne.get('AnnualIncome').invalid\"> eg. 8 <span style=\"margin-left: 80%;\">LPA &nbsp;</span></mat-error>\r\n                            </mat-form-field>\r\n                          </div>\r\n\r\n                          <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\r\n                             <mat-label style=\"color: black;\">Religion</mat-label>\r\n                             <select matNativeControl  formControlName=\"Religion\" required name=\"Religion\" (change)=\"Religion($event)\">\r\n                                 <option *ngFor=\"let  option of Religions\" [value]=\"option\">\r\n                                   {{option}}\r\n                                 </option>\r\n                               </select>\r\n                        \r\n                           </mat-form-field> \r\n                      </div>\r\n                      <div class=\"col-md-12\">\r\n                          \r\n                           <mat-form-field class=\"full-width fieldFit\" *ngIf=\"Caste\" appearance=\"standard\">\r\n                             <mat-label style=\"color: black;\">Caste</mat-label>\r\n                             <input type=\"text\" matInput formControlName=\"Castes\" required [matAutocomplete]=\"caste\" required  >\r\n                             <mat-autocomplete (optionSelected)='casteValidation($event.option.value)' autoActiveFirstOption #caste=\"matAutocomplete\">\r\n                                \r\n                                     <mat-option *ngFor=\"let name of casteo | async\" [value]=\"name\"  required>\r\n                                       {{name}}\r\n                                     </mat-option>\r\n                             </mat-autocomplete>\r\n                           </mat-form-field>\r\n                     </div>\r\n\r\n                     <div class=\"col-md-12\">\r\n               \r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Manglik Status</mat-label>\r\n                            <mat-select  formControlName=\"Mangalik\" required >\r\n                              <mat-option value=\"Manglik\">Manglik</mat-option>\r\n                              <mat-option value=\"Non-Manglik\">Non-Manglik</mat-option>\r\n                              <mat-option value=\"Anshik Manglik\">Anshik Manglik</mat-option>\r\n                            </mat-select>\r\n                        \r\n                        </mat-form-field>\r\n                    \r\n                    </div>\r\n\r\n                      <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                          <mat-label style=\"color: black;\">Locality / Area</mat-label>\r\n                          <input type=\"text\" matInput matValidateAddress matGoogleMapsAutocomplete #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" \r\n                          (onAutocompleteSelected)=\"onAutocompleteSelected($event)\" \r\n                          (onLocationSelected)=\"onLocationSelected($event)\"\r\n                          required formControlName=\"locality\">\r\n                          <mat-hint>eg. Patel Nagar</mat-hint>\r\n                        </mat-form-field>\r\n                      </div> \r\n\r\n                    <div class=\"col-xs-12 m-t-20\" style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n                        <button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"firstStep()\">View Profiles/रिश्ते देखें</button>\r\n                    </div>\r\n                </div>\r\n           </form> \r\n        </div> \r\n\r\n        <!-- <ng-template #otpModal let-c=\"close\" let-d=\"dismiss\">\r\n                <div class=\"modal-header\">\r\n                  <p class=\"verifyHeader\">Verify Mobile Number</p>\r\n                  <button type=\"button\" style=\"outline: none;\r\n                  color: white;\r\n                  background: #34b7f1;\r\n                  opacity: 1;padding: 5px 10px;\r\n                 border-radius: 10px;\" class=\"close\" aria-label=\"Close\" (click)=\"Cross_click()\">X\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p (click)=\"makeItTrue()\" style=\"margin-left: 90%;\r\n                  margin-top: -82px;\r\n                  cursor: pointer;\" *ngIf=\"changeNumber\"><i class=\"fa fa-long-arrow-alt-left\"></i>Back</p>\r\n                  <div *ngIf=\"!changeNumber\">\r\n                    <p style=\"text-align: center;color:rgb(153, 114, 114);font-size:16px\">We sent you a code via sms to your mobile number.</p>\r\n                    <p style=\"text-align: center;color:rgb(153, 114, 114);font-size:16px\">Please enter the code to verify</p>\r\n\r\n                   <div class=\"row\" style=\"margin: 0px;\">\r\n                    <input type=\"tel\" style=\"width: 20%;margin: 0px auto;\" max=1 *ngFor=\"let i of [1,2,3,4]\" class=\"enterOtp\" (keyup)=\"changePlaces($event)\" [id]=\"'enterOTP'+i\">\r\n                    <br><br>\r\n                   </div>\r\n                   <div style=\"margin: 10px 0px;\">\r\n                    <a (click)=\"resendOtp()\">Resend Otp</a><br>\r\n                   </div>\r\n                    <div style=\"text-align: center;\">\r\n                      <button mat-raised-button class=\"btn btn-blue\" style=\"font-size: 20px;  position: relative;margin-top: 12px; margin-bottom: 14px;\" [disabled]=\"otpStatus\" (click)=\"verifyOtp()\">Verify</button>\r\n                      <br>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n              \r\n              </ng-template>    -->\r\n    </div>\r\n</main>");

/***/ }),

/***/ "./src/app/reg/reg-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reg/reg-routing.module.ts ***!
  \*******************************************/
/*! exports provided: RegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegRoutingModule", function() { return RegRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reg.component */ "./src/app/reg/reg.component.ts");




const routes = [
    {
        path: '',
        component: _reg_component__WEBPACK_IMPORTED_MODULE_3__["RegComponent"]
    }
];
let RegRoutingModule = class RegRoutingModule {
};
RegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegRoutingModule);



/***/ }),

/***/ "./src/app/reg/reg.component.css":
/*!***************************************!*\
  !*** ./src/app/reg/reg.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\n::ng-deep .mat-select-value {\r\n    color: black !important;\r\n}\r\n.fieldFit{\r\n    height:60px;\r\n    margin-top: 10px;\r\n}\r\n::ng-deep .mat-form-field-ripple {\r\n    background-color:#34b7f1;\r\n    height: 1px;\r\n}\r\n::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{\r\n    background-color: #34b7f1;\r\n    height: 1px;\r\n}\r\n#viewButton{\r\n  background: #34b7f1;\r\n  color: white;\r\nbox-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 1),\r\n12px 12px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n.customBackground{\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background: white;\r\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n@media (max-width: 900px) {\r\nmain {\r\n    height: 100%;\r\n    overflow: auto;\r\n    }\r\n    select {\r\n\r\n        /* styling */\r\n        background-color: white;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        font: inherit;\r\n        padding: 5px 30px 5px 3px;\r\n      \r\n        /* reset */\r\n      \r\n        margin: 0;\r\n        box-sizing: border-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n      }\r\n      \r\n      \r\n      /* arrows */\r\n      \r\n      .classic {\r\n        background-image:\r\n          linear-gradient(45deg, transparent 50%, blue 50%),\r\n          linear-gradient(135deg, blue 50%, transparent 50%),\r\n          linear-gradient(to right, white, skyblue);\r\n        background-position:\r\n          calc(100% - 20px) calc(1em + 2px),\r\n          calc(100% - 15px) calc(1em + 2px),\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n      }\r\n      \r\n      .classic:focus {\r\n        background-image:\r\n          linear-gradient(45deg, white 50%, transparent 50%),\r\n          linear-gradient(135deg, transparent 50%, white 50%),\r\n          linear-gradient(to right, white, gray);\r\n        background-position:\r\n          calc(100% - 15px) 1em,\r\n          calc(100% - 20px) 1em,\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border-color: grey;\r\n        outline: 0;\r\n      }\r\n      .customBackground{\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n        background: white;\r\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7QUFDTDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO2lDQUNpQztBQUNqQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7bUNBQ2lDO0FBQ25DO0FBRUE7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Q7SUFDQTs7UUFFSSxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLHlCQUF5Qjs7UUFFekIsVUFBVTs7UUFFVixTQUFTO1FBR1Qsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixxQkFBcUI7TUFDdkI7OztNQUdBLFdBQVc7O01BRVg7UUFDRTs7O21EQUcyQztRQUMzQzs7O2dCQUdRO1FBQ1I7OztxQkFHYTtRQUNiLDRCQUE0QjtNQUM5Qjs7TUFFQTtRQUNFOzs7Z0RBR3dDO1FBQ3hDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixVQUFVO01BQ1o7TUFDQTtRQUNFLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCO3lDQUNpQztNQUNuQztBQUNOIiwiZmlsZSI6InNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRSZWdpc3RlciB7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOiAjMjg1ZmRkXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5maWVsZEZpdHtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNGI3ZjE7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGI3ZjE7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG5cclxuI3ZpZXdCdXR0b257XHJcbiAgYmFja2dyb3VuZDogIzM0YjdmMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbmJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxyXG4xMnB4IDEycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmN1c3RvbUJhY2tncm91bmR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogLTEycHggLTEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuMTJweCAxMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG5tYWluIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0IHtcclxuXHJcbiAgICAgICAgLyogc3R5bGluZyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggM3B4O1xyXG4gICAgICBcclxuICAgICAgICAvKiByZXNldCAqL1xyXG4gICAgICBcclxuICAgICAgICBtYXJnaW46IDA7ICAgICAgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvKiBhcnJvd3MgKi9cclxuICAgICAgXHJcbiAgICAgIC5jbGFzc2ljIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGJsdWUgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGJsdWUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgc2t5Ymx1ZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICAgIDEwMCUgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jbGFzc2ljOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIHdoaXRlIDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCBncmF5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxyXG4gICAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgMWVtLFxyXG4gICAgICAgICAgY2FsYygxMDAlIC0gMjBweCkgMWVtLFxyXG4gICAgICAgICAgMTAwJSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgMi41ZW0gMi41ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgfVxyXG4gICAgICAuY3VzdG9tQmFja2dyb3VuZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKSxcclxuICAgICAgMTJweCAxMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIH1cclxufVxyXG5cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/reg/reg.component.ts":
/*!**************************************!*\
  !*** ./src/app/reg/reg.component.ts ***!
  \**************************************/
/*! exports provided: _filter, RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let RegComponent = class RegComponent {
    constructor(http, dialog, _formBuilder, router, notification, ngxNotificationService, spinner) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.notification = notification;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.time = {
            hour: 13,
            minute: 30
        };
        this.MaritalStatus = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
        this.startDate = new Date(1985, 0, 1);
        // Religion and Caste
        this.Religions = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
        this.getcastes = [];
        this.Caste = false;
        this.AllCastes = false;
        // Height
        // tslint:disable-next-line: max-line-length
        this.Heights = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
        // tslint:disable-next-line: max-line-length
        this.Heights1 = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
        this.otp = '';
        this.otpVerified = false;
        this.numberCheck = localStorage.getItem('RegisterNumber');
        this.changeNumber = false;
        this.otpStatus = false;
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
        // tslint:disable-next-line: max-line-length
        this.date = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        // tslint:disable-next-line: max-line-length
        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = [
            '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
            '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
            '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
            '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
            '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
        ];
        this.errors = [];
        this.authMobileNumberStatus = false;
        this.PageOne = this._formBuilder.group({
            // tslint:disable-next-line: max-line-length
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lastName: [''],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: [''],
            Relation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_date: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_month: ['January', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_year: ['1980', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            MaritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            AnnualIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999)])],
            Religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Castes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Mangalik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            locality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    ngOnInit() {
        if (localStorage.getItem('RegisterNumber')) {
            this.numberCheck = localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length);
            console.log(localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length));
        }
        if (this.router.url.match('singleRegistration')) {
            this.authMobileNumberStatus = true;
        }
        document.querySelector('body').style.background = 'white';
        document.querySelector('body').style.backgroundImage = 'url(\'../../assets/bgicon.png\')';
        document.querySelector('body').style.backgroundSize = 'cover';
        this.spinner.hide();
        localStorage.setItem('gender', '');
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('selectedCaste', '');
        this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res) => {
            this.getcastes = res;
        });
        this.casteo = this.PageOne.get('Castes').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(value => this._Castefilter(value)));
    }
    // 0 -> new User/not registered, 1-> Registered user , 2-> Partially Registered User
    mobileNumberChanged(number) {
        console.log(number);
        console.log(this.authMobileNumberStatus);
        if (this.authMobileNumberStatus) {
            localStorage.setItem('is_lead', '');
            // tslint:disable-next-line: max-line-length
            this.http.get(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: number, ['fcm_id']: this.notification.getCurrentToken() } }).subscribe(res => {
                console.log(res);
                if (res.registered === 1) {
                    localStorage.setItem('mobile_number', number);
                    localStorage.setItem('is_lead', res.is_lead);
                    this.router.navigateByUrl('chat');
                }
                else if (res.registered === 2) {
                    this.ngxNotificationService.info('Please complete the form and update');
                    // set the partiall data
                    if (res.partial_data) {
                        const data = res.partial_data;
                        let birthDate;
                        if (data.manglik && data.manglik !== '' && data.manglik === 'No') {
                            data.manglik = 'Non-Manglik';
                        }
                        if (data.birth_date && data.birth_date !== '') {
                            birthDate = new Date(data.birth_date);
                            this.PageOne.setValue({
                                phone: number,
                                gender: data.gender,
                                birth_date: birthDate.getDate(),
                                birth_month: birthDate.getMonth(),
                                birth_year: birthDate.getFullYear(),
                                Height: data.height,
                                MaritalStatus: data.marital_status,
                                AnnualIncome: data.annual_income,
                                Religion: data.religion,
                                Castes: data.caste,
                                Mangalik: data.manglik
                            });
                        }
                        else {
                            this.PageOne.setValue({
                                phone: number,
                                gender: data.gender,
                                birth_date: '',
                                birth_month: '',
                                birth_year: '',
                                Height: this.Heights.indexOf(this.Heights[this.Heights1.indexOf(data.height)]),
                                MaritalStatus: data.marital_status,
                                AnnualIncome: data.annual_income,
                                Religion: data.religion,
                                Castes: data.caste,
                                Mangalik: data.manglik
                            });
                        }
                    }
                }
                else {
                    console.log('New User');
                    // gtag app + web
                    window.gtag('config', 'G-1ES443XD0F', {
                        'user_id': number
                    });
                }
                this.spinner.hide();
            }, err => {
                this.spinner.hide();
                console.log(err);
            });
        }
    }
    // OTP
    makeItTrue() {
        if (this.changeNumber === false) {
            this.changeNumber = true;
        }
        else {
            this.changeNumber = false;
        }
        console.log(this.changeNumber);
    }
    numberChange(event) {
        console.log('asd', event);
        this.PageOne.value.phone = event.target.value();
    }
    makeOtp() {
        this.otp1 = document.getElementById('enterOTP1');
        this.otp += this.otp1.value;
        this.otp2 = document.getElementById('enterOTP2');
        this.otp += this.otp2.value;
        this.otp3 = document.getElementById('enterOTP3');
        this.otp += this.otp3.value;
        this.otp4 = document.getElementById('enterOTP4');
        this.otp += this.otp4.value;
    }
    changePlaces(event) {
        const element = event.srcElement.nextElementSibling; // get the sibling element
        if (element == null) { // check if its null
            return;
        }
        else {
            element.focus();
        } // focus if not null
        console.log('cngd');
    }
    openDialog(dialog) {
        this.otpStatus = false;
        const dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
        this.dialog.open(dialog, {
        // panelClass: 'custom-modalbox'
        });
        this.sendOtp();
    }
    Cross_click() {
        this.dialog.closeAll();
    }
    sendOtp() {
        console.log('changenumber', this.changeNumber);
        if (this.changeNumber === true) {
            const changeContact = document.getElementById('changeContact');
            console.log(changeContact);
            this.PageOne.value.phoneNumber = changeContact.value;
            console.log(changeContact);
        }
        const mobileNumber = {
            mobile: this.PageOne.value.phone
        };
        return this.http.post('https://partner.hansmatrimony.com/api/sendOTP', mobileNumber).subscribe(res => {
            console.log(res);
        });
    }
    resendOtp() {
        this.spinner.show();
        const mobileNumber = {
            mobile: this.PageOne.value.phone
        };
        return this.http.post('https://partner.hansmatrimony.com/api/resendOTP', mobileNumber).subscribe(res => {
            console.log(res);
            this.spinner.hide();
        });
    }
    verifyOtp() {
        this.makeOtp();
        this.otpStatus = true;
        console.log('otp', this.otp);
        const otp = {
            otp: this.otp,
            mobile: this.PageOne.value.phone
        };
        return this.http.post('https://partner.hansmatrimony.com/api/verifyOTP', otp).subscribe(res => {
            console.log('verify res', res);
            this.otp = '';
            this.ngxNotificationService.success(res.message, 'success');
            if (res.type === 'success') {
                this.Cross_click();
                this.otpVerified = true;
                localStorage.setItem('mobile_number', this.PageOne.value.phone);
                if (this.otpVerified === true) {
                    window.ga('send', 'event', 'Register', 'registered', {
                        hitCallback: () => {
                            console.log('Tracking register successful');
                        }
                    });
                    console.log('verified', this.otpVerified);
                    this.ngxNotificationService.success('Account Details Submitted Succesfully!', 'success');
                    this.spinner.show();
                    this.firstStep();
                    this.otpVerified = false;
                }
            }
        });
    }
    checkExist() {
        this.spinner.show();
        console.log(this.PageOne.value.phone);
        if (this.PageOne.valid) {
            const data = {
                email: this.PageOne.value.email,
                mobile: this.PageOne.value.phone
            };
            // tslint:disable-next-line: max-line-length
            return this.http.post('https://partner.hansmatrimony.com/api/checkExist', data).subscribe(res => {
                console.log(res);
                if (res.isUnique !== 'N') {
                    this.spinner.hide();
                    this.openDialog(this.otpModal);
                    console.log('vrfied', this.otpVerified);
                }
                else {
                    this.ngxNotificationService.success(res.error_message);
                    this.spinner.hide();
                }
            });
        }
        else {
            this.ngxNotificationService.error('Fill the form details');
            this.spinner.hide();
        }
    }
    firstStep() {
        this.errors = [];
        console.log('date', this.PageOne.value.birth_date);
        console.log('month', this.month.indexOf(this.PageOne.value.birth_month) + 1);
        console.log('year', this.PageOne.value.birth_year);
        if (this.PageOne.value.phone.toString().length < 10 || this.PageOne.value.phone.toString().length > 13
            && this.PageOne.value.phone.invalid) {
            this.ngxNotificationService.error('Enter A Valid Mobile Number');
            return;
        }
        if (this.locationFamily == null || this.locationFamily === '') {
            this.ngxNotificationService.error('Select A Valid Location');
            return;
        }
        if (this.PageOne.valid) {
            console.log('caste', this.PageOne.value.Castes);
            this.casteValidation(this.PageOne.value.Castes).then(res => {
                if (res === true) {
                    if (this.PageOne.valid) {
                        this.spinner.show();
                        const date = this.PageOne.value.birth_date;
                        const month = this.month.indexOf(this.PageOne.value.birth_month) + 1;
                        const year = this.PageOne.value.birth_year;
                        console.log(date + '-' + month + '-' + year);
                        const firststepdata = new FormData();
                        firststepdata.append('mobile', this.PageOne.value.phone);
                        firststepdata.append('birth_date', date + '-' + month + '-' + year);
                        firststepdata.append('name', this.PageOne.value.firstName + ' ' + this.PageOne.value.lastName);
                        firststepdata.append('email', this.PageOne.value.email);
                        // son -> mother and daughter -> father rest -> same
                        if (this.PageOne.value.Relation === 'Son') {
                            firststepdata.append('relation', 'Mother');
                        }
                        else if (this.PageOne.value.Relation === 'Daughter') {
                            firststepdata.append('relation', 'Father');
                        }
                        else {
                            firststepdata.append('relation', this.PageOne.value.Relation);
                        }
                        firststepdata.append('gender', this.PageOne.value.gender);
                        firststepdata.append('height', this.Heights1[this.PageOne.value.Height]);
                        firststepdata.append('weight', this.PageOne.value.Weight);
                        firststepdata.append('marital_status', this.PageOne.value.MaritalStatus);
                        firststepdata.append('manglik', this.PageOne.value.Mangalik);
                        firststepdata.append('annual_income', this.PageOne.value.AnnualIncome);
                        firststepdata.append('religion', this.PageOne.value.Religion);
                        firststepdata.append('caste', this.PageOne.value.Castes);
                        firststepdata.append('locality', this.locality);
                        this.lat ? firststepdata.append('lat', this.lat)
                            : firststepdata.append('lat', '');
                        this.long ? firststepdata.append('long', this.long)
                            : firststepdata.append('long', '');
                        console.log('mobile', this.PageOne.value.phone);
                        console.log('birth_date', this.birthDate);
                        console.log('gender', this.PageOne.value.gender);
                        console.log('height', this.Heights1[this.PageOne.value.Height]);
                        console.log('marital_status', this.PageOne.value.MaritalStatus);
                        console.log('manglik', this.PageOne.value.Mangalik);
                        console.log('annual_income', this.PageOne.value.AnnualIncome);
                        console.log('religion', this.PageOne.value.Religion);
                        console.log('caste', this.PageOne.value.Castes);
                        // tslint:disable-next-line: max-line-length
                        return this.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata).subscribe((res) => {
                            console.log('first', res);
                            if (res.status === 1) {
                                this.spinner.hide();
                                localStorage.setItem('id', res.id);
                                localStorage.setItem('gender', this.PageOne.value.gender);
                                localStorage.setItem('mobile_number', this.PageOne.value.phone);
                                this.Analytics('Single Page Registration', 'Single Page Registration', 'Registered through Single Page Registration');
                                this.gtag_report_conversion('https://hansmatrimony.com/reg');
                                localStorage.setItem('RegisterNumber', '');
                                window.fbq('track', 'SinglePageRegistration', {
                                    value: 15,
                                    currency: 'INR',
                                    content_name: this.PageOne.value.phone,
                                });
                                window.fbq('track', '692972151223870', 'SinglePageRegistration', {
                                    value: 15,
                                    currency: 'INR',
                                    content_name: this.PageOne.value.phone,
                                });
                                this.router.navigateByUrl('chat?first');
                                this.ngxNotificationService.success('Registered Successfully');
                            }
                            else {
                                this.spinner.hide();
                                this.ngxNotificationService.error(res.message);
                            }
                        }, err => {
                            this.spinner.hide();
                            this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
                            console.log(err);
                        });
                    }
                    else {
                        this.ngxNotificationService.error('Fill the details');
                    }
                }
            });
        }
        else {
            // tslint:disable-next-line: forin
            for (const control in this.PageOne.controls) {
                console.log(control);
                if (this.PageOne.controls[control].value === '') {
                    this.errors.push(control);
                }
            }
            if (this.errors[0]) {
                this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
            }
        }
    }
    _Castefilter(value) {
        const filterValue = value.toLowerCase();
        return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
    }
    Analytics(type, category, action) {
        window.ga('send', 'event', category, action, {
            hitCallback: () => {
                console.log('Tracking ' + type + ' successful');
            }
        });
        // gtag app + web
        window.gtag('event', category, {
            'action': action
        });
    }
    gtag_report_conversion(url) {
        window.gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC' });
        return false;
    }
    onDate(event) {
        console.log(event);
    }
    // Calucalting age
    calculateAge(event) {
        this.birthDate = convert(event);
        const timediffernce = Math.abs(Date.now() - event);
        this.currentAge = Math.floor((timediffernce / (1000 * 3600 * 24)) / 365);
        localStorage.setItem('currentAge', this.currentAge.toString());
        function convert(str) {
            // tslint:disable-next-line: one-variable-per-declaration
            const date = new Date(str), mnth = ('0' + (date.getMonth() + 1)).slice(-2), day = ('0' + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join('/');
        }
        this.addSlashes();
        if (this.currentAge < 18) {
            this.birthdayValid = false;
        }
        else {
            this.birthdayValid = true;
        }
        console.log('birth data', this.birthDate);
        console.log('event data', event);
        console.log(typeof event);
    }
    addSlashes() {
        console.log('sv');
        const newInput = document.getElementById('birthDate');
        newInput.addEventListener('keydown', function (e) {
            if (e.which !== 8) {
                const numChars = e.target.value.length;
                if (numChars === 2 || numChars === 5) {
                    let thisVal = e.target.value;
                    thisVal += '-';
                    e.target.value = thisVal;
                }
            }
        });
    }
    datePickerClicked() {
        document.querySelector('.mat-icon-button').click();
    }
    // Religion
    Religion(event) {
        console.log(event.currentTarget.value);
        if (event.currentTarget.value === 'Hindu') {
            // console.log
            this.Caste = true;
            this.AllCastes = true;
        }
        else if (event.currentTarget.value === 'Muslim') {
            this.Caste = true;
            this.AllCastes = false;
        }
        else if (event.currentTarget.value === 'Sikh') {
            this.Caste = true;
            this.AllCastes = true;
        }
        else if (event.currentTarget.value === 'Christian') {
            this.Caste = false;
            this.AllCastes = false;
        }
        else if (event.currentTarget.value === 'Buddhist') {
            this.Caste = false;
            this.AllCastes = false;
        }
        else if (event.currentTarget.value === 'Jain') {
            this.Caste = true;
            this.AllCastes = true;
        }
        else if (event.currentTarget.value === 'Parsi') {
            this.Caste = false;
            this.AllCastes = false;
        }
        else if (event.currentTarget.value === 'Jewish') {
            this.Caste = false;
            this.AllCastes = false;
        }
        else if (event.currentTarget.value === 'Bahai') {
            this.Caste = false;
            this.AllCastes = false;
        }
    }
    casteValidation(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('caste changed', value);
            const status = 1;
            let statusConfirmed;
            yield this.checkCaste(value).then((res) => {
                statusConfirmed = res;
            });
            console.log('caste changed', statusConfirmed);
            if (statusConfirmed === false) {
                this.ngxNotificationService.warning('Please choose a caste from the dropdown');
                this.PageOne.get('Castes').setValue('');
                return false;
            }
            return true;
        });
    }
    checkCaste(value) {
        let status = 1;
        let statusConfirmed = false;
        this.casteo.forEach(element => {
            element.forEach(item => {
                if (value !== '' && item.includes(value) && item.length === value.length) {
                    console.log('confirmed');
                    statusConfirmed = true;
                }
                else {
                    status = 0;
                }
            });
        });
        return new Promise((resolve) => {
            resolve(statusConfirmed);
        });
    }
    onAutocompleteSelected(event) {
        this.PageOne.value.locality = event.formatted_address;
        this.locality = event.formatted_address;
        console.log('address of family', this.PageOne.value.locality);
    }
    onLocationSelected(e) {
        this.locationFamily = e;
        this.lat = e.latitude;
        this.long = e.longitude;
        console.log('location of family', e);
    }
    setGender(value) {
        console.log(value);
        switch (value) {
            case 'Brother':
                this.PageOne.patchValue({
                    gender: 'Male'
                });
                break;
            case 'Sister':
                this.PageOne.patchValue({
                    gender: 'Female'
                });
                break;
            case 'Son':
                this.PageOne.patchValue({
                    gender: 'Male'
                });
                break;
            case 'Daughter':
                this.PageOne.patchValue({
                    gender: 'Female'
                });
                break;
            default:
                break;
        }
    }
};
RegComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otpModal', { static: false })
], RegComponent.prototype, "otpModal", void 0);
RegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reg.component.css */ "./src/app/reg/reg.component.css")).default]
    })
], RegComponent);



/***/ }),

/***/ "./src/app/reg/reg.module.ts":
/*!***********************************!*\
  !*** ./src/app/reg/reg.module.ts ***!
  \***********************************/
/*! exports provided: RegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegModule", function() { return RegModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reg.component */ "./src/app/reg/reg.component.ts");
/* harmony import */ var _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reg-routing.module */ "./src/app/reg/reg-routing.module.ts");






let RegModule = class RegModule {
};
RegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _reg_component__WEBPACK_IMPORTED_MODULE_4__["RegComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegRoutingModule"],
        ],
        entryComponents: [
            _reg_component__WEBPACK_IMPORTED_MODULE_4__["RegComponent"]
        ]
    })
], RegModule);



/***/ })

}]);
//# sourceMappingURL=reg-reg-module-es2015.js.map