function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reg-reg-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegRegComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class='pwaSize fixed t-0 b-0 bg-white w-full HC overflowY' >\n    <div class=\"container t-c\">\n        <div class=\"section\">\n            <div class=\"container\" style=\"margin-left:auto;margin-right:auto; text-align: center;\"> \n                <img src=\"../../../assets/logo_hans.png\" style=\"width:60%\">\n            </div>              \n        </div>\n        <div class=\"row\" style=\"margin:0px;text-align: center;padding: 0px 10%;\">\n                <img src=\"../../assets/avatar.svg\" style=\"width: 25%;border-right: 4px solid #34b7f1;\" alt=\"register\">\n                <h5 style=\"display: inline-block;margin: auto auto auto 10px;\">Free Registration</h5>\n        </div>\n    </div>\n   \n    <div class=\"container customBackground\" style=\"width:80%;background: white;border-radius: 20px;margin-top: 20px; margin-bottom: 20px;\">\n        <div class=\"w-full\" style=\"margin-left:auto;margin-right:auto\">\n            <form  [formGroup]=\"PageOne\">\n                <div class=\"row\">\n\n                    <div class=\"col-6\">\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                          <mat-label style=\"color: black;\">First Name</mat-label>\n                          <input  type=\"text\"  matInput formControlName=\"firstName\" required name=\"firstName\">\n                        </mat-form-field>\n                      </div>\n\n                      <div class=\"col-6\">\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\n                          <mat-label style=\"color: black;\">Last Name</mat-label>\n                          <input type=\"text\"  matInput formControlName=\"lastName\" name=\"lastName\">\n                        </mat-form-field>\n                      </div>\n\n\n                    <div class=\"col-md-12\">\n                        <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\n                            <mat-label style=\"color: black;\">Mobile number</mat-label>\n                            <input type=\"number\" id=\"phone\" matInput formControlName=\"phone\" (change)=\"mobileNumberChanged(numberCheck)\" [(ngModel)]=\"numberCheck\" required name=\"phone\">\n\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-12\">\n                        <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\n                            <mat-label style=\"color: black;\">Email</mat-label>\n                            <input type=\"email\" id=\"email\" matInput formControlName=\"email\" name=\"email\">\n\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"full-width\" appearance=\"standard\" style=\"height:60px;border-bottom: 1px solid black;\">\n                          <mat-label style=\"color: black;\">Looking Rishta For</mat-label>\n                          <mat-select (selectionChange)=\"setGender(relation.value)\" #relation formControlName=\"Relation\" required >\n                                  <mat-option *ngFor=\"let  option of createProfile\" [value]=\"option\">\n                                          {{option}}\n                                  </mat-option>\n                          </mat-select>\n                      </mat-form-field> \n                  </div>\n\n                    <div class=\"col-md-12\">\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                            <mat-label style=\"color: black;\">Gender</mat-label>\n                            <mat-select  formControlName=\"gender\" required >\n                                <mat-option value=\"Male\">Male</mat-option>\n                                <mat-option value=\"Female\">Female</mat-option>\n                            </mat-select>\n                        \n                        </mat-form-field>\n                    </div>\n                    \n                    <div class=\"col-md-12\">\n                     \n                          <label style=\"color: black; margin-top: 8px;\">Date of Birth</label>\n                          <div class=\"row\" style=\"margin: 0px;\">\n                            <select class=\"classic\" formControlName=\"birth_date\" style=\"border: 1px solid black;\"  required name=\"birth_date\">\n                                <option *ngFor=\"let  option of date\" [value]=\"option\">\n                                  {{option}}\n                                </option>\n                              </select> \n\n                              <select class=\"classic\" formControlName=\"birth_month\" style=\"border: 1px solid black;margin-left: 10px;\"  required name=\"birth_month\">\n                                <option *ngFor=\"let  option of month\" [value]=\"option\">\n                                  {{option}}\n                                </option>\n                              </select> \n                              \n                              <select class=\"classic\" formControlName=\"birth_year\" style=\"border: 1px solid black;margin-left: 10px;\"  required name=\"birth_year\">\n                                <option *ngFor=\"let  option of years\" [value]=\"option\">\n                                  {{option}}\n                                </option>\n                              </select>\n                          </div>\n                        \n                       \n                      </div>\n\n                      <div class=\"col-6\">\n                          <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                            <mat-label style=\"color: black;\">Height</mat-label>\n                            <select matNativeControl #height formControlName=\"Height\" required name=\"Height\">\n                                <option *ngFor=\"let option of Heights;let i = index\" [value]=\"i\">\n                                  {{option}}\n                                </option>\n                              </select>\n                          </mat-form-field>\n                        </div>\n\n                        <div class=\"col-6\">\n                          <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\n                            <mat-label style=\"color: black;\">Weight</mat-label>\n                            <input style=\"padding-bottom: 6px\" type=\"text\" pattern=\"\\d*\" maxlength=\"3\" matInput formControlName=\"Weight\" required name=\"Weight\">\n                            <span matSuffix>Kg &nbsp;</span>\n                          </mat-form-field>\n                        </div>\n\n                    <div class=\"col-md-12\">\n                 \n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                              <mat-label style=\"color: black;\">Marital Status</mat-label>\n                              <select matNativeControl  formControlName=\"MaritalStatus\" required name=\"MaritalStatus\">\n                                  <option *ngFor=\"let  option of MaritalStatus\" [value]=\"option\">\n                                    {{option}}\n                                  </option>\n                                </select> \n                              \n                            </mat-form-field>\n                          </div>\n                   \n                          <div class=\"col-md-12\">\n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\n                              <mat-label style=\"color: black;\">Annual Income In Lakhs</mat-label>\n                              <input type=\"text\" pattern=\"\\d*\" maxlength=\"3\" matInput formControlName=\"AnnualIncome\" required name=\"AnnualIncome\">\n                              <span matSuffix>LPA &nbsp;</span>\n                              <mat-error class=\"full-width\" style=\"margin-bottom: 10px;\" *ngIf=\"PageOne.get('AnnualIncome').invalid\"> eg. 8 <span style=\"margin-left: 80%;\">LPA &nbsp;</span></mat-error>\n                            </mat-form-field>\n                          </div>\n\n                          <div class=\"col-md-12\">\n                            <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\n                             <mat-label style=\"color: black;\">Religion</mat-label>\n                             <select matNativeControl  formControlName=\"Religion\" required name=\"Religion\" (change)=\"Religion($event)\">\n                                 <option *ngFor=\"let  option of Religions\" [value]=\"option\">\n                                   {{option}}\n                                 </option>\n                               </select>\n                        \n                           </mat-form-field> \n                      </div>\n                      <div class=\"col-md-12\">\n                          \n                           <mat-form-field class=\"full-width fieldFit\" *ngIf=\"Caste\" appearance=\"standard\">\n                             <mat-label style=\"color: black;\">Caste</mat-label>\n                             <input type=\"text\" matInput formControlName=\"Castes\" required [matAutocomplete]=\"caste\" required  >\n                             <mat-autocomplete (optionSelected)='casteValidation($event.option.value)' autoActiveFirstOption #caste=\"matAutocomplete\">\n                                \n                                     <mat-option *ngFor=\"let name of casteo | async\" [value]=\"name\"  required>\n                                       {{name}}\n                                     </mat-option>\n                             </mat-autocomplete>\n                           </mat-form-field>\n                     </div>\n\n                     <div class=\"col-md-12\">\n               \n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                            <mat-label style=\"color: black;\">Manglik Status</mat-label>\n                            <mat-select  formControlName=\"Mangalik\" required >\n                              <mat-option value=\"Manglik\">Manglik</mat-option>\n                              <mat-option value=\"Non-Manglik\">Non-Manglik</mat-option>\n                              <mat-option value=\"Anshik Manglik\">Anshik Manglik</mat-option>\n                            </mat-select>\n                        \n                        </mat-form-field>\n                    \n                    </div>\n\n                      <div class=\"col-md-12\">\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\n                          <mat-label style=\"color: black;\">Locality / Area</mat-label>\n                          <input type=\"text\" matInput matValidateAddress matGoogleMapsAutocomplete #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" \n                          (onAutocompleteSelected)=\"onAutocompleteSelected($event)\" \n                          (onLocationSelected)=\"onLocationSelected($event)\"\n                          required formControlName=\"locality\">\n                          <mat-hint>eg. Patel Nagar</mat-hint>\n                        </mat-form-field>\n                      </div> \n\n                    <div class=\"col-xs-12 m-t-20\" style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\n                        <button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"firstStep()\">View Profiles/रिश्ते देखें</button>\n                    </div>\n                </div>\n           </form> \n        </div> \n\n        <!-- <ng-template #otpModal let-c=\"close\" let-d=\"dismiss\">\n                <div class=\"modal-header\">\n                  <p class=\"verifyHeader\">Verify Mobile Number</p>\n                  <button type=\"button\" style=\"outline: none;\n                  color: white;\n                  background: #34b7f1;\n                  opacity: 1;padding: 5px 10px;\n                 border-radius: 10px;\" class=\"close\" aria-label=\"Close\" (click)=\"Cross_click()\">X\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <p (click)=\"makeItTrue()\" style=\"margin-left: 90%;\n                  margin-top: -82px;\n                  cursor: pointer;\" *ngIf=\"changeNumber\"><i class=\"fa fa-long-arrow-alt-left\"></i>Back</p>\n                  <div *ngIf=\"!changeNumber\">\n                    <p style=\"text-align: center;color:rgb(153, 114, 114);font-size:16px\">We sent you a code via sms to your mobile number.</p>\n                    <p style=\"text-align: center;color:rgb(153, 114, 114);font-size:16px\">Please enter the code to verify</p>\n\n                   <div class=\"row\" style=\"margin: 0px;\">\n                    <input type=\"tel\" style=\"width: 20%;margin: 0px auto;\" max=1 *ngFor=\"let i of [1,2,3,4]\" class=\"enterOtp\" (keyup)=\"changePlaces($event)\" [id]=\"'enterOTP'+i\">\n                    <br><br>\n                   </div>\n                   <div style=\"margin: 10px 0px;\">\n                    <a (click)=\"resendOtp()\">Resend Otp</a><br>\n                   </div>\n                    <div style=\"text-align: center;\">\n                      <button mat-raised-button class=\"btn btn-blue\" style=\"font-size: 20px;  position: relative;margin-top: 12px; margin-bottom: 14px;\" [disabled]=\"otpStatus\" (click)=\"verifyOtp()\">Verify</button>\n                      <br>\n                  </div>\n                </div>\n                </div>\n              \n              </ng-template>    -->\n    </div>\n</main>";
    /***/
  },

  /***/
  "./src/app/reg/reg-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/reg/reg-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: RegRoutingModule */

  /***/
  function srcAppRegRegRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegRoutingModule", function () {
      return RegRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reg.component */
    "./src/app/reg/reg.component.ts");

    var routes = [{
      path: '',
      component: _reg_component__WEBPACK_IMPORTED_MODULE_3__["RegComponent"]
    }];

    var RegRoutingModule = function RegRoutingModule() {
      _classCallCheck(this, RegRoutingModule);
    };

    RegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegRoutingModule);
    /***/
  },

  /***/
  "./src/app/reg/reg.component.css":
  /*!***************************************!*\
    !*** ./src/app/reg/reg.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegRegComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textRegister {\n    font-weight:bolder;\n    padding-top:1rem;\n    text-align: center;\n     color: #285fdd\n}\n::ng-deep .mat-select-value {\n    color: black !important;\n}\n.fieldFit{\n    height:60px;\n    margin-top: 10px;\n}\n::ng-deep .mat-form-field-ripple {\n    background-color:#34b7f1;\n    height: 1px;\n}\n::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{\n    background-color: #34b7f1;\n    height: 1px;\n}\n#viewButton{\n  background: #34b7f1;\n  color: white;\nbox-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 1),\n12px 12px 12px rgba(0, 0, 0, 0.2);\n}\n.customBackground{\n  border-radius: 10px;\n  padding: 5px;\n  background: white;\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 900px) {\nmain {\n    height: 100%;\n    overflow: auto;\n    }\n    select {\n\n        /* styling */\n        background-color: white;\n        border-radius: 4px;\n        display: inline-block;\n        font: inherit;\n        padding: 5px 30px 5px 3px;\n      \n        /* reset */\n      \n        margin: 0;\n        box-sizing: border-box;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n      }\n      \n      \n      /* arrows */\n      \n      .classic {\n        background-image:\n          linear-gradient(45deg, transparent 50%, blue 50%),\n          linear-gradient(135deg, blue 50%, transparent 50%),\n          linear-gradient(to right, white, skyblue);\n        background-position:\n          calc(100% - 20px) calc(1em + 2px),\n          calc(100% - 15px) calc(1em + 2px),\n          100% 0;\n        background-size:\n          5px 5px,\n          5px 5px,\n          2.5em 2.5em;\n        background-repeat: no-repeat;\n      }\n      \n      .classic:focus {\n        background-image:\n          linear-gradient(45deg, white 50%, transparent 50%),\n          linear-gradient(135deg, transparent 50%, white 50%),\n          linear-gradient(to right, white, gray);\n        background-position:\n          calc(100% - 15px) 1em,\n          calc(100% - 20px) 1em,\n          100% 0;\n        background-size:\n          5px 5px,\n          5px 5px,\n          2.5em 2.5em;\n        background-repeat: no-repeat;\n        border-color: grey;\n        outline: 0;\n      }\n      .customBackground{\n        border-radius: 10px;\n        padding: 5px;\n        background: white;\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\n      }\n}\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7QUFDTDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO2lDQUNpQztBQUNqQztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakI7bUNBQ2lDO0FBQ25DO0FBRUE7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Q7SUFDQTs7UUFFSSxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLHlCQUF5Qjs7UUFFekIsVUFBVTs7UUFFVixTQUFTO1FBR1Qsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixxQkFBcUI7TUFDdkI7OztNQUdBLFdBQVc7O01BRVg7UUFDRTs7O21EQUcyQztRQUMzQzs7O2dCQUdRO1FBQ1I7OztxQkFHYTtRQUNiLDRCQUE0QjtNQUM5Qjs7TUFFQTtRQUNFOzs7Z0RBR3dDO1FBQ3hDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixVQUFVO01BQ1o7TUFDQTtRQUNFLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCO3lDQUNpQztNQUNuQztBQUNOIiwiZmlsZSI6InNyYy9hcHAvcmVnL3JlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRSZWdpc3RlciB7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgIHBhZGRpbmctdG9wOjFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBjb2xvcjogIzI4NWZkZFxufVxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5maWVsZEZpdHtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzM0YjdmMTtcbiAgICBoZWlnaHQ6IDFweDtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGI3ZjE7XG4gICAgaGVpZ2h0OiAxcHg7XG59XG5cbiN2aWV3QnV0dG9ue1xuICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xuICBjb2xvcjogd2hpdGU7XG5ib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcbjEycHggMTJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5jdXN0b21CYWNrZ3JvdW5ke1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLFxuMTJweCAxMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICBzZWxlY3Qge1xuXG4gICAgICAgIC8qIHN0eWxpbmcgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggM3B4O1xuICAgICAgXG4gICAgICAgIC8qIHJlc2V0ICovXG4gICAgICBcbiAgICAgICAgbWFyZ2luOiAwOyAgICAgIFxuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIFxuICAgICAgLyogYXJyb3dzICovXG4gICAgICBcbiAgICAgIC5jbGFzc2ljIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgYmx1ZSA1MCUpLFxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGJsdWUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHNreWJsdWUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxuICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcbiAgICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksXG4gICAgICAgICAgMTAwJSAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XG4gICAgICAgICAgNXB4IDVweCxcbiAgICAgICAgICA1cHggNXB4LFxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2xhc3NpYzpmb2N1cyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpLFxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGdyYXkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxuICAgICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIDFlbSxcbiAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXG4gICAgICAgICAgMTAwJSAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XG4gICAgICAgICAgNXB4IDVweCxcbiAgICAgICAgICA1cHggNXB4LFxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItY29sb3I6IGdyZXk7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICB9XG4gICAgICAuY3VzdG9tQmFja2dyb3VuZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogLTEycHggLTEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyksXG4gICAgICAxMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbn1cblxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/reg/reg.component.ts":
  /*!**************************************!*\
    !*** ./src/app/reg/reg.component.ts ***!
    \**************************************/

  /*! exports provided: _filter, RegComponent */

  /***/
  function srcAppRegRegComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_filter", function () {
      return _filter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegComponent", function () {
      return RegComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../notifications.service */
    "./src/app/notifications.service.ts");
    /* harmony import */


    var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/ */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _filter = function _filter(opt, value) {
      var filterValue = value.toLowerCase();
      return opt.filter(function (item) {
        return item.toLowerCase().indexOf(filterValue) === 0;
      });
    };

    var RegComponent = /*#__PURE__*/function () {
      function RegComponent(http, dialog, _formBuilder, router, notification, ngxNotificationService, spinner) {
        _classCallCheck(this, RegComponent);

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
        this.startDate = new Date(1985, 0, 1); // Religion and Caste

        this.Religions = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
        this.getcastes = [];
        this.Caste = false;
        this.AllCastes = false; // Height
        // tslint:disable-next-line: max-line-length

        this.Heights = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"']; // tslint:disable-next-line: max-line-length

        this.Heights1 = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
        this.otp = '';
        this.otpVerified = false;
        this.numberCheck = localStorage.getItem('RegisterNumber');
        this.changeNumber = false;
        this.otpStatus = false;
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other']; // tslint:disable-next-line: max-line-length

        this.date = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']; // tslint:disable-next-line: max-line-length

        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
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

      _createClass(RegComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

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
          this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe(function (res) {
            _this.getcastes = res;
          });
          this.casteo = this.PageOne.get('Castes').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
            return _this._Castefilter(value);
          }));
        } // 0 -> new User/not registered, 1-> Registered user , 2-> Partially Registered User

      }, {
        key: "mobileNumberChanged",
        value: function mobileNumberChanged(number) {
          var _this2 = this;

          console.log(number);
          console.log(this.authMobileNumberStatus);

          if (this.authMobileNumberStatus) {
            var _params;

            localStorage.setItem('is_lead', ''); // tslint:disable-next-line: max-line-length

            this.http.get(' https://partner.hansmatrimony.com/api/auth', {
              params: (_params = {}, _defineProperty(_params, 'phone_number', number), _defineProperty(_params, 'fcm_id', this.notification.getCurrentToken()), _params)
            }).subscribe(function (res) {
              console.log(res);

              if (res.registered === 1) {
                localStorage.setItem('mobile_number', number);
                localStorage.setItem('is_lead', res.is_lead);

                _this2.router.navigateByUrl('chat');
              } else if (res.registered === 2) {
                _this2.ngxNotificationService.info('Please complete the form and update'); // set the partiall data


                if (res.partial_data) {
                  var data = res.partial_data;
                  var birthDate;

                  if (data.manglik && data.manglik !== '' && data.manglik === 'No') {
                    data.manglik = 'Non-Manglik';
                  }

                  if (data.birth_date && data.birth_date !== '') {
                    birthDate = new Date(data.birth_date);

                    _this2.PageOne.setValue({
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
                  } else {
                    _this2.PageOne.setValue({
                      phone: number,
                      gender: data.gender,
                      birth_date: '',
                      birth_month: '',
                      birth_year: '',
                      Height: _this2.Heights.indexOf(_this2.Heights[_this2.Heights1.indexOf(data.height)]),
                      MaritalStatus: data.marital_status,
                      AnnualIncome: data.annual_income,
                      Religion: data.religion,
                      Castes: data.caste,
                      Mangalik: data.manglik
                    });
                  }
                }
              } else {
                console.log('New User'); // gtag app + web

                window.gtag('config', 'G-1ES443XD0F', {
                  'user_id': number
                });
              }

              _this2.spinner.hide();
            }, function (err) {
              _this2.spinner.hide();

              console.log(err);
            });
          }
        } // OTP

      }, {
        key: "makeItTrue",
        value: function makeItTrue() {
          if (this.changeNumber === false) {
            this.changeNumber = true;
          } else {
            this.changeNumber = false;
          }

          console.log(this.changeNumber);
        }
      }, {
        key: "numberChange",
        value: function numberChange(event) {
          console.log('asd', event);
          this.PageOne.value.phone = event.target.value();
        }
      }, {
        key: "makeOtp",
        value: function makeOtp() {
          this.otp1 = document.getElementById('enterOTP1');
          this.otp += this.otp1.value;
          this.otp2 = document.getElementById('enterOTP2');
          this.otp += this.otp2.value;
          this.otp3 = document.getElementById('enterOTP3');
          this.otp += this.otp3.value;
          this.otp4 = document.getElementById('enterOTP4');
          this.otp += this.otp4.value;
        }
      }, {
        key: "changePlaces",
        value: function changePlaces(event) {
          var element = event.srcElement.nextElementSibling; // get the sibling element

          if (element == null) {
            // check if its null
            return;
          } else {
            element.focus();
          } // focus if not null


          console.log('cngd');
        }
      }, {
        key: "openDialog",
        value: function openDialog(dialog) {
          this.otpStatus = false;
          var dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
          this.dialog.open(dialog, {// panelClass: 'custom-modalbox'
          });
          this.sendOtp();
        }
      }, {
        key: "Cross_click",
        value: function Cross_click() {
          this.dialog.closeAll();
        }
      }, {
        key: "sendOtp",
        value: function sendOtp() {
          console.log('changenumber', this.changeNumber);

          if (this.changeNumber === true) {
            var changeContact = document.getElementById('changeContact');
            console.log(changeContact);
            this.PageOne.value.phoneNumber = changeContact.value;
            console.log(changeContact);
          }

          var mobileNumber = {
            mobile: this.PageOne.value.phone
          };
          return this.http.post('https://partner.hansmatrimony.com/api/sendOTP', mobileNumber).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "resendOtp",
        value: function resendOtp() {
          var _this3 = this;

          this.spinner.show();
          var mobileNumber = {
            mobile: this.PageOne.value.phone
          };
          return this.http.post('https://partner.hansmatrimony.com/api/resendOTP', mobileNumber).subscribe(function (res) {
            console.log(res);

            _this3.spinner.hide();
          });
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          var _this4 = this;

          this.makeOtp();
          this.otpStatus = true;
          console.log('otp', this.otp);
          var otp = {
            otp: this.otp,
            mobile: this.PageOne.value.phone
          };
          return this.http.post('https://partner.hansmatrimony.com/api/verifyOTP', otp).subscribe(function (res) {
            console.log('verify res', res);
            _this4.otp = '';

            _this4.ngxNotificationService.success(res.message, 'success');

            if (res.type === 'success') {
              _this4.Cross_click();

              _this4.otpVerified = true;
              localStorage.setItem('mobile_number', _this4.PageOne.value.phone);

              if (_this4.otpVerified === true) {
                window.ga('send', 'event', 'Register', 'registered', {
                  hitCallback: function hitCallback() {
                    console.log('Tracking register successful');
                  }
                });
                console.log('verified', _this4.otpVerified);

                _this4.ngxNotificationService.success('Account Details Submitted Succesfully!', 'success');

                _this4.spinner.show();

                _this4.firstStep();

                _this4.otpVerified = false;
              }
            }
          });
        }
      }, {
        key: "checkExist",
        value: function checkExist() {
          var _this5 = this;

          this.spinner.show();
          console.log(this.PageOne.value.phone);

          if (this.PageOne.valid) {
            var data = {
              email: this.PageOne.value.email,
              mobile: this.PageOne.value.phone
            }; // tslint:disable-next-line: max-line-length

            return this.http.post('https://partner.hansmatrimony.com/api/checkExist', data).subscribe(function (res) {
              console.log(res);

              if (res.isUnique !== 'N') {
                _this5.spinner.hide();

                _this5.openDialog(_this5.otpModal);

                console.log('vrfied', _this5.otpVerified);
              } else {
                _this5.ngxNotificationService.success(res.error_message);

                _this5.spinner.hide();
              }
            });
          } else {
            this.ngxNotificationService.error('Fill the form details');
            this.spinner.hide();
          }
        }
      }, {
        key: "firstStep",
        value: function firstStep() {
          var _this6 = this;

          this.errors = [];
          console.log('date', this.PageOne.value.birth_date);
          console.log('month', this.month.indexOf(this.PageOne.value.birth_month) + 1);
          console.log('year', this.PageOne.value.birth_year);

          if (this.PageOne.value.phone.toString().length < 10 || this.PageOne.value.phone.toString().length > 13 && this.PageOne.value.phone.invalid) {
            this.ngxNotificationService.error('Enter A Valid Mobile Number');
            return;
          }

          if (this.locationFamily == null || this.locationFamily === '') {
            this.ngxNotificationService.error('Select A Valid Location');
            return;
          }

          if (this.PageOne.valid) {
            console.log('caste', this.PageOne.value.Castes);
            this.casteValidation(this.PageOne.value.Castes).then(function (res) {
              if (res === true) {
                if (_this6.PageOne.valid) {
                  _this6.spinner.show();

                  var date = _this6.PageOne.value.birth_date;
                  var month = _this6.month.indexOf(_this6.PageOne.value.birth_month) + 1;
                  var year = _this6.PageOne.value.birth_year;
                  console.log(date + '-' + month + '-' + year);
                  var firststepdata = new FormData();
                  firststepdata.append('mobile', _this6.PageOne.value.phone);
                  firststepdata.append('birth_date', date + '-' + month + '-' + year);
                  firststepdata.append('name', _this6.PageOne.value.firstName + ' ' + _this6.PageOne.value.lastName);
                  firststepdata.append('email', _this6.PageOne.value.email); // son -> mother and daughter -> father rest -> same

                  if (_this6.PageOne.value.Relation === 'Son') {
                    firststepdata.append('relation', 'Mother');
                  } else if (_this6.PageOne.value.Relation === 'Daughter') {
                    firststepdata.append('relation', 'Father');
                  } else {
                    firststepdata.append('relation', _this6.PageOne.value.Relation);
                  }

                  firststepdata.append('gender', _this6.PageOne.value.gender);
                  firststepdata.append('height', _this6.Heights1[_this6.PageOne.value.Height]);
                  firststepdata.append('weight', _this6.PageOne.value.Weight);
                  firststepdata.append('marital_status', _this6.PageOne.value.MaritalStatus);
                  firststepdata.append('manglik', _this6.PageOne.value.Mangalik);
                  firststepdata.append('annual_income', _this6.PageOne.value.AnnualIncome);
                  firststepdata.append('religion', _this6.PageOne.value.Religion);
                  firststepdata.append('caste', _this6.PageOne.value.Castes);
                  firststepdata.append('locality', _this6.locality);
                  _this6.lat ? firststepdata.append('lat', _this6.lat) : firststepdata.append('lat', '');
                  _this6["long"] ? firststepdata.append('long', _this6["long"]) : firststepdata.append('long', '');
                  console.log('mobile', _this6.PageOne.value.phone);
                  console.log('birth_date', _this6.birthDate);
                  console.log('gender', _this6.PageOne.value.gender);
                  console.log('height', _this6.Heights1[_this6.PageOne.value.Height]);
                  console.log('marital_status', _this6.PageOne.value.MaritalStatus);
                  console.log('manglik', _this6.PageOne.value.Mangalik);
                  console.log('annual_income', _this6.PageOne.value.AnnualIncome);
                  console.log('religion', _this6.PageOne.value.Religion);
                  console.log('caste', _this6.PageOne.value.Castes); // tslint:disable-next-line: max-line-length

                  return _this6.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata).subscribe(function (res) {
                    console.log('first', res);

                    if (res.status === 1) {
                      _this6.spinner.hide();

                      localStorage.setItem('id', res.id);
                      localStorage.setItem('gender', _this6.PageOne.value.gender);
                      localStorage.setItem('mobile_number', _this6.PageOne.value.phone);

                      _this6.Analytics('Single Page Registration', 'Single Page Registration', 'Registered through Single Page Registration');

                      _this6.gtag_report_conversion('https://hansmatrimony.com/reg');

                      localStorage.setItem('RegisterNumber', '');
                      window.fbq('track', 'SinglePageRegistration', {
                        value: 15,
                        currency: 'INR',
                        content_name: _this6.PageOne.value.phone
                      });
                      window.fbq('track', '692972151223870', 'SinglePageRegistration', {
                        value: 15,
                        currency: 'INR',
                        content_name: _this6.PageOne.value.phone
                      });

                      _this6.router.navigateByUrl('chat?first');

                      _this6.ngxNotificationService.success('Registered Successfully');
                    } else {
                      _this6.spinner.hide();

                      _this6.ngxNotificationService.error(res.message);
                    }
                  }, function (err) {
                    _this6.spinner.hide();

                    _this6.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');

                    console.log(err);
                  });
                } else {
                  _this6.ngxNotificationService.error('Fill the details');
                }
              }
            });
          } else {
            // tslint:disable-next-line: forin
            for (var control in this.PageOne.controls) {
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
      }, {
        key: "_Castefilter",
        value: function _Castefilter(value) {
          var filterValue = value.toLowerCase();
          return this.getcastes.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "Analytics",
        value: function Analytics(type, category, action) {
          window.ga('send', 'event', category, action, {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + type + ' successful');
            }
          }); // gtag app + web

          window.gtag('event', category, {
            'action': action
          });
        }
      }, {
        key: "gtag_report_conversion",
        value: function gtag_report_conversion(url) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC'
          });
          return false;
        }
      }, {
        key: "onDate",
        value: function onDate(event) {
          console.log(event);
        } // Calucalting age

      }, {
        key: "calculateAge",
        value: function calculateAge(event) {
          this.birthDate = convert(event);
          var timediffernce = Math.abs(Date.now() - event);
          this.currentAge = Math.floor(timediffernce / (1000 * 3600 * 24) / 365);
          localStorage.setItem('currentAge', this.currentAge.toString());

          function convert(str) {
            // tslint:disable-next-line: one-variable-per-declaration
            var date = new Date(str),
                mnth = ('0' + (date.getMonth() + 1)).slice(-2),
                day = ('0' + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join('/');
          }

          this.addSlashes();

          if (this.currentAge < 18) {
            this.birthdayValid = false;
          } else {
            this.birthdayValid = true;
          }

          console.log('birth data', this.birthDate);
          console.log('event data', event);
          console.log(typeof event);
        }
      }, {
        key: "addSlashes",
        value: function addSlashes() {
          console.log('sv');
          var newInput = document.getElementById('birthDate');
          newInput.addEventListener('keydown', function (e) {
            if (e.which !== 8) {
              var numChars = e.target.value.length;

              if (numChars === 2 || numChars === 5) {
                var thisVal = e.target.value;
                thisVal += '-';
                e.target.value = thisVal;
              }
            }
          });
        }
      }, {
        key: "datePickerClicked",
        value: function datePickerClicked() {
          document.querySelector('.mat-icon-button').click();
        } // Religion

      }, {
        key: "Religion",
        value: function Religion(event) {
          console.log(event.currentTarget.value);

          if (event.currentTarget.value === 'Hindu') {
            // console.log
            this.Caste = true;
            this.AllCastes = true;
          } else if (event.currentTarget.value === 'Muslim') {
            this.Caste = true;
            this.AllCastes = false;
          } else if (event.currentTarget.value === 'Sikh') {
            this.Caste = true;
            this.AllCastes = true;
          } else if (event.currentTarget.value === 'Christian') {
            this.Caste = false;
            this.AllCastes = false;
          } else if (event.currentTarget.value === 'Buddhist') {
            this.Caste = false;
            this.AllCastes = false;
          } else if (event.currentTarget.value === 'Jain') {
            this.Caste = true;
            this.AllCastes = true;
          } else if (event.currentTarget.value === 'Parsi') {
            this.Caste = false;
            this.AllCastes = false;
          } else if (event.currentTarget.value === 'Jewish') {
            this.Caste = false;
            this.AllCastes = false;
          } else if (event.currentTarget.value === 'Bahai') {
            this.Caste = false;
            this.AllCastes = false;
          }
        }
      }, {
        key: "casteValidation",
        value: function casteValidation(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var status, statusConfirmed;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('caste changed', value);
                    status = 1;
                    _context.next = 4;
                    return this.checkCaste(value).then(function (res) {
                      statusConfirmed = res;
                    });

                  case 4:
                    console.log('caste changed', statusConfirmed);

                    if (!(statusConfirmed === false)) {
                      _context.next = 9;
                      break;
                    }

                    this.ngxNotificationService.warning('Please choose a caste from the dropdown');
                    this.PageOne.get('Castes').setValue('');
                    return _context.abrupt("return", false);

                  case 9:
                    return _context.abrupt("return", true);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "checkCaste",
        value: function checkCaste(value) {
          var status = 1;
          var statusConfirmed = false;
          this.casteo.forEach(function (element) {
            element.forEach(function (item) {
              if (value !== '' && item.includes(value) && item.length === value.length) {
                console.log('confirmed');
                statusConfirmed = true;
              } else {
                status = 0;
              }
            });
          });
          return new Promise(function (resolve) {
            resolve(statusConfirmed);
          });
        }
      }, {
        key: "onAutocompleteSelected",
        value: function onAutocompleteSelected(event) {
          this.PageOne.value.locality = event.formatted_address;
          this.locality = event.formatted_address;
          console.log('address of family', this.PageOne.value.locality);
        }
      }, {
        key: "onLocationSelected",
        value: function onLocationSelected(e) {
          this.locationFamily = e;
          this.lat = e.latitude;
          this["long"] = e.longitude;
          console.log('location of family', e);
        }
      }, {
        key: "setGender",
        value: function setGender(value) {
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
      }]);

      return RegComponent;
    }();

    RegComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otpModal', {
      "static": false
    })], RegComponent.prototype, "otpModal", void 0);
    RegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reg/reg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reg.component.css */
      "./src/app/reg/reg.component.css"))["default"]]
    })], RegComponent);
    /***/
  },

  /***/
  "./src/app/reg/reg.module.ts":
  /*!***********************************!*\
    !*** ./src/app/reg/reg.module.ts ***!
    \***********************************/

  /*! exports provided: RegModule */

  /***/
  function srcAppRegRegModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegModule", function () {
      return RegModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reg.component */
    "./src/app/reg/reg.component.ts");
    /* harmony import */


    var _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reg-routing.module */
    "./src/app/reg/reg-routing.module.ts");

    var RegModule = function RegModule() {
      _classCallCheck(this, RegModule);
    };

    RegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_reg_component__WEBPACK_IMPORTED_MODULE_4__["RegComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _reg_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegRoutingModule"]],
      entryComponents: [_reg_component__WEBPACK_IMPORTED_MODULE_4__["RegComponent"]]
    })], RegModule);
    /***/
  }
}]);
//# sourceMappingURL=reg-reg-module-es5.js.map