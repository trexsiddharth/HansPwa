(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compatibility-form-compatibility-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/choice-list/choice-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choice-list/choice-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"desktop\">\r\n    <div class=\"container\">\r\n        <div style=\"margin-bottom: 20px;\" class=\"row\">\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleBoy()\" class=\"choice-card\">\r\n                    <img  style=\"width: 100%;\" src=\"../../assets/choices/choice1.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                            <button class=\"view\" >View</button>\r\n                         \r\n                         \r\n                             <button class=\"contact\">Contact</button>\r\n                         \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleBoy()\" class=\"choice-card\">\r\n                    <img style=\"width: 100%;\" src=\"../../assets/choices/choice2.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                        <button class=\"view\" >View</button>\r\n                     \r\n                     \r\n                         <button class=\"contact\">Contact</button>\r\n                     \r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleGirl()\" class=\"choice-card\">\r\n                    <img style=\"width: 100%;\"  src=\"../../assets/choices/choice3.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                        <button class=\"view\" >View</button>\r\n                     \r\n                     \r\n                         <button class=\"contact\">Contact</button>\r\n                     \r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleGirl()\" class=\"choice-card\">\r\n                    <img style=\"width: 100%;\"  src=\"../../assets/choices/choice4.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                        <button class=\"view\" >View</button>\r\n                     \r\n                     \r\n                         <button class=\"contact\">Contact</button>\r\n                     \r\n                </div>\r\n                    \r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleBoy()\" class=\"choice-card\">\r\n                    <img style=\"width: 100%;\"  src=\"../../assets/choices/choice5.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                        <button class=\"view\" >View</button>\r\n                     \r\n                     \r\n                         <button class=\"contact\">Contact</button>\r\n                     \r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 d-flex justify-content-center\">\r\n                <div (click)=\"toggleBoy()\" class=\"choice-card\">\r\n                    <img style=\"width: 100%;\"  src=\"../../assets/choices/choice6.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                        <button class=\"view\" >View</button>\r\n                     \r\n                     \r\n                         <button class=\"contact\">Contact</button>\r\n                     \r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"mobileScreen\">\r\n        <div class=\"screen-row\">\r\n            \r\n                <div class=\"choice-card\">\r\n                    <img  style=\"width: 100%;\" src=\"../../assets/choices/choice1.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                            <button class=\"view\" >View</button>\r\n                         \r\n                         \r\n                             <button class=\"contact\">Contact</button>\r\n                         \r\n                    </div>\r\n                </div>\r\n            \r\n            \r\n                <div class=\"choice-card\">\r\n                    <img  style=\"width: 100%;\" src=\"../../assets/choices/choice2.png\" alt=\"\">\r\n                    <div class=\"btn-holder\">\r\n                        \r\n                            <button class=\"view\" >View</button>\r\n                         \r\n                         \r\n                             <button class=\"contact\">Contact</button>\r\n                         \r\n                    </div>\r\n            </div>\r\n        \r\n    </div>\r\n    <div class=\"screen-row\">\r\n            \r\n        <div class=\"choice-card\">\r\n            <img  style=\"width: 100%;\" src=\"../../assets/choices/choice3.png\" alt=\"\">\r\n            <div class=\"btn-holder\">\r\n                \r\n                    <button class=\"view\" >View</button>\r\n                 \r\n                 \r\n                     <button class=\"contact\">Contact</button>\r\n                 \r\n            </div>\r\n        </div>\r\n    \r\n    \r\n        <div class=\"choice-card\">\r\n            <img  style=\"width: 100%;\" src=\"../../assets/choices/choice4.png\" alt=\"\">\r\n            <div class=\"btn-holder\">\r\n                \r\n                    <button class=\"view\" >View</button>\r\n                 \r\n                 \r\n                     <button class=\"contact\">Contact</button>\r\n                 \r\n            </div>\r\n    </div>\r\n\r\n</div>\r\n<div class=\"screen-row\">\r\n            \r\n    <div class=\"choice-card\">\r\n        <img  style=\"width: 100%;\" src=\"../../assets/choices/choice5.png\" alt=\"\">\r\n        <div class=\"btn-holder\">\r\n            \r\n                <button class=\"view\" >View</button>\r\n             \r\n             \r\n                 <button class=\"contact\">Contact</button>\r\n             \r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"choice-card\">\r\n        <img  style=\"width: 100%;\" src=\"../../assets/choices/choice6.png\" alt=\"\">\r\n        <div class=\"btn-holder\">\r\n            \r\n                <button class=\"view\" >View</button>\r\n             \r\n             \r\n                 <button class=\"contact\">Contact</button>\r\n             \r\n        </div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n<button class=\"register\">\r\n    Register For Free\r\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/choose-for/choose-for.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/choose-for/choose-for.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <h4 class=\"heading\"> Create Profile For:</h4>\r\n    <div class=\"text-center btnDiv\">\r\n        <div class=\"row\">\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"one btn viewButton\"\r\n                (click)=\"setValue(0,'one')\">{{createProfile[0]}}</button>\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"four btn viewButton\"\r\n                (click)=\"setValue(3,'four')\">{{createProfile[3]}}</button>\r\n        </div>\r\n        <div class=\"row\">\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"five btn viewButton\"\r\n                (click)=\"setValue(4,'five')\">{{createProfile[4]}}</button>\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"two btn viewButton\"\r\n                (click)=\"setValue(1,'two')\">{{createProfile[1]}}</button>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"three btn viewButton\"\r\n                (click)=\"setValue(2,'three')\">{{createProfile[2]}}</button>\r\n            <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"six btn viewButton\"\r\n                (click)=\"setValue(5,'six')\">{{createProfile[5]}}</button>\r\n        </div>\r\n    </div>\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"compatiblity-form-holder\">\r\n  <!-- toolbar  -->\r\n<div *ngIf=\"mobileScreen\" >\r\n  <a class=\"d-flex justify-content-center\" href=\"/fourReg/#register\"><button [routerLink]=\"['/fourReg']\" routerLinkActive=\"router-link-active\" *ngIf=\"auto\" class=\"register-btn d-flex justify-content-center\" >Register For Free</button></a>\r\n</div>\r\n<div class=\"d-flex\">\r\n  <img src=\"../../assets/hero/logoNew.svg\" class=\"logo\"  alt=\"\">\r\n<mat-toolbar id=\"register\" class=\"fixToolBar\">\r\n  <mat-toolbar-row style=\"position:relative!important\">\r\n    <div class=\"mainDivToolbar\" style=\"position:relative; \">\r\n      <div style=\"\r\n          display: flex;\r\n          flex-direction: row;\r\n          align-items: center;\r\n          justify-content: center;\">\r\n        <!-- <img width=\"75px\" [defaultImage]=\"'../../assets/logo_72.png'\"\r\n          [lazyLoad]=\"'../../assets/logo_192.png 600w, ../../assets/logo_192.png 1000w'\" [useSrcset]=\"true\"\r\n          alt=\"Hans Matrimony\"> -->\r\n        <!-- <span\r\n          style=\"color: rgba(49, 49, 49, 0.781); margin-left: 10px;font-size: 16sp;font-weight: bold;font-size: 18px;\"><strong>Hans\r\n            Matrimony</strong></span> -->\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"photos.length > 1\" style=\"width:90px;position:absolute;top:10px; right: 150px;\">\r\n      <!-- <p style=\"position:absolute;color:white;font-size:1rem;font-weight:bold;margin-left:80px\">1,00,000+</p> -->\r\n      <img *ngFor=\"let i of photoIndices\" style=\"-webkit-box-shadow: 0px 0px 8px 2px rgba(68,161,223,1);\r\n        -moz-box-shadow: 0px 0px 8px 2px rgba(68,161,223,1);\r\n        box-shadow: 0px 0px 5px 2px rgba(68,161,223,1);width:50px;height:50px;border-radius:50%;margin:6px;\"\r\n        src=\"{{photos[i]}}\" alt=\"\">\r\n    </div>\r\n\r\n    <p *ngIf=\"photos.length > 1\"\r\n      style=\"position:absolute;color:rgba(34, 33, 33, 0.692);font-size:1rem;top:48px;right:25px\">\r\n      +1,00,000 more</p>\r\n  </mat-toolbar-row>\r\n\r\n</mat-toolbar>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n  <h2>Register For Free in <span style=\"color:#24ADD8\" >30 seconds!</span> </h2>\r\n</div>\r\n<main  class='pwaSize fixed t-0 b-0 w-full HC overflowY' [id]=\"mainContainerId\" style=\"margin-top:4%\">\r\n  \r\n  <mat-horizontal-stepper labelPosition=\"bottom\" [linear]=\"isLinear\" #stepper>\r\n    <div class=\"container customBackground\"\r\n      style=\"width:80%;background: white;border-radius: 20px;margin-top: 10%; margin-bottom: 20px;\">\r\n      <div class=\"w-full\" style=\"margin-left:auto;margin-right:auto\">\r\n\r\n        <mat-step [stepControl]=\"PageOne\">\r\n          <form [formGroup]=\"PageOne\" style=\"padding-bottom: 100px;\">\r\n            <!-- label name if required -->\r\n            <!-- <ng-template matStepLabel>Page I</ng-template> -->\r\n            <div class=\"row\" style=\"margin-top: 8%!important;\">\r\n\r\n              <div class=\"col-6\">\r\n                <!-- <h6>Rishta For</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Create Profile For</mat-label>\r\n                  <mat-select (selectionChange)=\"setGender()\" #relation formControlName=\"Relation\" required>\r\n                    <mat-option *ngFor=\"let  option of createProfile\" [value]=\"option\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <!-- <h6>Gender</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Gender</mat-label>\r\n                  <mat-select formControlName=\"gender\" (selectionChange)=\"selectFieldChange('gender')\" required>\r\n                    <mat-option value=\"Male\">Male</mat-option>\r\n                    <mat-option value=\"Female\">Female</mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n                आप जिस कस्टमर से फ़ोन पर बात कर रहे हैं वो किसके लिए रिश्ता देख रहे हैं ये भरे ।\r\n              </p>\r\n\r\n              <div class='col-6'>\r\n                <!-- <h6>Name</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\"  appearance=\"standard\">\r\n                  <mat-label>First Name</mat-label>\r\n                  <input  type=\"text\" id=\"firstName\" (change)=\"inputFieldChanged('firstName')\" matInput\r\n                    formControlName=\"firstName\" required>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div *ngIf=\"secondName\" class=\"col-6\">\r\n                <!-- <h6>Last Name</h6> -->\r\n                <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Last Name</mat-label>\r\n                  <input type=\"text\" (change)=\"inputFieldChanged('lastName')\" matInput formControlName=\"lastName\"\r\n                    name=\"lastName\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n                यहाँ पर कैंडिडेट यानि जिसके लिए रिश्ता देखा जा रहा है उसका नाम लिखे (लड़का या लड़की जो भी है )\r\n              </p>\r\n              <div [class.col-12]=\"!Caste\" [class.col-6]=\"Caste\">\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Religion</mat-label>\r\n                  <mat-select #relation formControlName=\"Religion\" (selectionChange)=\"Religion($event)\" required>\r\n                    <mat-option *ngFor=\"let  option of Religions\" [value]=\"option\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-6\" *ngIf=\"Caste\">\r\n                <!-- <h6>Caste</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Caste</mat-label>\r\n                  <mat-select id=\"caste\" (selectionChange)=\"selectFieldChange('Castes')\" formControlName=\"Castes\">\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"No Caste Found\" placeholderLabel=\"Search Caste...\"\r\n                        formControlName=\"CasteCtrl\">\r\n                        <mat-icon ngxMatSelectSearchClear>close</mat-icon>\r\n                      </ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let  option of filteredCastes | async\" [value]=\"option\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-6\" *ngIf=\"Caste\" style=\"margin:39px 0px auto 0px;\">\r\n                <mat-checkbox [checked]=\"isAllCastePref\" (change)=\"checkAllCastePref($event)\">\r\n                  <a style=\"font-size:1rem;color:rgba(44, 44, 44, 0.842)\">All Caste Preferred</a>\r\n                </mat-checkbox>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-12 \" id=\"fourRegMobile\">\r\n                <!-- <h6>Mobile number</h6> -->\r\n                <!-- style=\"background-color:rgba(206, 206, 206, 0.2);margin-top:25px;\" -->\r\n                <mat-form-field  class=\"full-width fieldFit\" \r\n                (click)=\"showTruecallerIfFacebook()\"\r\n                 appearance=\"standard\">\r\n\r\n                  <ngx-mat-intl-tel-input  \r\n                    [preferredCountries]=\"['in']\" [enablePlaceholder]=\"true\" [enableSearch]=\"true\" name=\"phone\"\r\n                    type=\"tel\" formControlName=\"phone\" id=\"phone\" (change)=\"mobileNumberChanged()\" #phone required>\r\n                  </ngx-mat-intl-tel-input> \r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n\r\n                </mat-form-field>\r\n              </div>\r\n              \r\n\r\n              <app-compatibility-page-two *ngIf=\"!fourPageService.getUserThrough()\"></app-compatibility-page-two>\r\n\r\n              <div class=\"col-md-12\" *ngIf=\"fourPageService.getUserThrough()\">\r\n                <!-- <h6>Email<code style=\"color: rgba(0,0,0,.6);\">(optional)</code></h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Email<code style=\"color: rgba(0,0,0,.6);\">(optional)</code></mat-label>\r\n                  <input type=\"email\" (change)=\"inputFieldChanged('email')\" id=\"email\" matInput formControlName=\"email\"\r\n                    name=\"email\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n                ईमेल optional है पर Customer से ईमेल लेने की जरूर कोशिश करे। घर में किसी का भी ईमेल मांग ले जो भी यूज़\r\n                करता हो\r\n              </p>\r\n\r\n              <div class=\"col-12\" style=\"margin:0 0 -12px 0\">\r\n                <label>Date Of Birth</label>\r\n                <div class=\"row\">\r\n                  <select class=\"classic\"   (change)=\"selectFieldChange('birth_date')\" formControlName=\"birth_date\" style=\"\r\n                            flex: 1;\" required name=\"birth_date\">\r\n                    <option *ngFor=\"let  option of date\" [value]=\"option\">\r\n                      {{option}}\r\n                    </option>\r\n                  </select>\r\n\r\n                  <select class=\"classic\" (change)=\"selectFieldChange('birth_month')\" formControlName=\"birth_month\"\r\n                    style=\"margin-left: 10px;\r\n                              flex: 1;\" required name=\"birth_month\">\r\n                    <option *ngFor=\"let  option of month\" [value]=\"option\">\r\n                      {{option}}\r\n                    </option>\r\n                  </select>\r\n\r\n                  <select class=\"classic\" (change)=\"selectFieldChange('birth_year')\" formControlName=\"birth_year\" style=\"margin-left: 10px;\r\n                              flex: 1;\" required name=\"birth_year\">\r\n                    <option *ngFor=\"let  option of years\" [value]=\"option\">\r\n                      {{option}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-md-12 matSelect\"\r\n                *ngIf=\"PageOne.value.Relation == 'Myself' || PageOne.value.Relation == 'Other' || fourPageService.getUserThrough()\"> -->\r\n\r\n              <div class=\"col-6\" *ngIf=\"!fourPageService.getUserThrough() && showHeight\">\r\n                <!-- <h6>Height</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Height</mat-label>\r\n                  <mat-select matNativeControl (selectionChange)=\"selectFieldChange('Height')\" #height\r\n                    formControlName=\"Height\" required name=\"Height\">\r\n                    <mat-option *ngFor=\"let option of Heights;let i = index\" [value]=\"i\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-6\" *ngIf=\"fourPageService.getUserThrough() && showHeight\">\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Height</mat-label>\r\n                  <mat-select matNativeControl (selectionChange)=\"selectFieldChange('Height')\" #height\r\n                    formControlName=\"Height\" required name=\"Height\">\r\n                    <mat-option *ngFor=\"let option of Heights;let i = index\" [value]=\"i\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-6\" *ngIf=\"fourPageService.getUserThrough()\">\r\n                <!-- <h6>Weight</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Weight</mat-label>\r\n                  <input type=\"number\" (change)=\"inputFieldChanged('Weight')\" matInput formControlName=\"Weight\" required\r\n                    name=\"Weight\">\r\n                  <span matSuffix>Kg &nbsp;</span>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-6\" *ngIf=\"showHeight\">\r\n                <!-- <h6>Marital Status</h6> -->\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Marital Status</mat-label>\r\n                  <mat-select #relation (selectionChange)=\"selectFieldChange('MaritalStatus')\"\r\n                    formControlName=\"MaritalStatus\" required>\r\n                    <mat-option *ngFor=\"let  option of MaritalStatus\" [value]=\"option\">\r\n                      {{option}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-12\" style=\"margin-top: 20px;\">\r\n                <mat-checkbox (change)=\"checkDisable($event)\">\r\n                  <a style=\"font-size:1rem;color:rgba(44, 44, 44, 0.842)\">Differently Abled?</a>\r\n                </mat-checkbox>\r\n              </div>\r\n\r\n              <div class=\"col-12\" *ngIf=\"isDisable\">\r\n                <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                  <mat-label>Differently Abled Part</mat-label>\r\n                  <input type=\"text\" matInput formControlName=\"disabledPart\">\r\n                  <mat-error *ngIf=\"PageOne.invalid && nextClickedOne\">*this field is required</mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 m-t-20\"\r\n              *ngIf=\"fourPageService.getUserThrough()\"\r\n                style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n                <button mat-raised-button type=\"button\" id=\"viewButton\" [disabled]=\"disableNext$ | async\" matStepperNext\r\n                  class=\"btn\" (click)=\"firstStep()\">Next</button>\r\n              </div>\r\n\r\n              <div class=\"col-xs-12 m-t-20\"\r\n              *ngIf=\"!fourPageService.getUserThrough()\"\r\n                style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n                <button mat-raised-button type=\"button\" id=\"viewButton\" [disabled]=\"disableNext$ | async\"\r\n                  class=\"btn\" (click)=\"firstStep()\">See Profiles</button>\r\n              </div>\r\n\r\n              <!-- <p *ngIf=\"!fourPageService.getUserThrough()\" class=\"impNoteMain\">\r\n                            Your journey to find your perfect match begins now!\r\n                          </p> -->\r\n              <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n                डिटेल्स भरने के बाद इस बटन पर जरूर क्लिक करे |\r\n              </p>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n\r\n        <mat-step [completed]=\"formTwo\" *ngIf=\"fourPageService.getUserThrough()\">\r\n          <!-- label name if required -->\r\n          <!-- <ng-template matStepLabel>\r\n                    Page II\r\n                </ng-template> -->\r\n          <app-compatibility-page-two></app-compatibility-page-two>\r\n        </mat-step>\r\n\r\n        <mat-step *ngIf=\"fourPageService.getUserThrough()\">\r\n          <!-- <ng-template matStepLabel>\r\n                      Page III\r\n                  </ng-template> -->\r\n          <app-compatibility-page-three></app-compatibility-page-three>\r\n        </mat-step>\r\n        <mat-step>\r\n          <!-- <ng-template matStepLabel>\r\n                    Page IV\r\n                  </ng-template> -->\r\n          <app-compatibility-photo [hidden]=\"!fourPageService.getUserThrough()\"></app-compatibility-photo>\r\n        </mat-step>\r\n        <!-- // will show page five only to hans team when LeadId is 1 and not 0 -->\r\n        <mat-step *ngIf=\"fourPageService.getUserThrough()\">\r\n          <app-compatibility-verify></app-compatibility-verify>\r\n        </mat-step>\r\n        <!-- // will show page five only to hans team when LeadId is 1 and not 0 -->\r\n        <mat-step *ngIf=\"fourPageService.getUserThrough() && !fourPageService.showApproveBtn\">\r\n          <!-- <ng-template matStepLabel  >\r\n                    Page VI\r\n                  </ng-template> -->\r\n          <app-compatibility-page-five></app-compatibility-page-five>\r\n        </mat-step>\r\n\r\n      </div>\r\n    </div>\r\n  </mat-horizontal-stepper>\r\n\r\n  \r\n</main>\r\n<div id=\"us\" class=\"whyus\">\r\n  <div class=\"why-us-header\">\r\n   <div class=\"d-flex justify-content-center\">\r\n       <div class=\"header\">\r\n           <h1 style=\"font-weight: bold;\">\r\n           \r\n               Why  <span style=\"color:#24ADD8\" >Us?</span> \r\n               <hr class=\"one\">\r\n               <hr class=\"two\">\r\n           </h1>\r\n       </div>\r\n   </div>\r\n  </div>\r\n   <div *ngIf=\"!mobileScreen\" @fade class=\"d-flex justify-content-center features\">\r\n       <div class=\"container\">\r\n           <div class=\"row\">\r\n               <div class=\"col-md-4 feature-card-container\">\r\n                   <div class=\"feature-card-holder\">\r\n                       <div class=\"d-flex justify-content-center\">\r\n                           <img src=\"../../../assets/featuresIllustrations/ill1.jpg\" alt=\"hansmatrimony-features-illustration1\">\r\n                       </div>\r\n                       <p>More than <span style=\"font-weight:bolder\">50,000 </span>\r\n                            <br>suitable matches </p>\r\n                   </div>\r\n               </div>\r\n               <div class=\"col-md-4 feature-card-container\">\r\n                  <div class=\"feature-card-holder\">\r\n                   <div class=\"d-flex justify-content-center\">\r\n                       <img src=\"../../../assets/featuresIllustrations/ill2.svg\" alt=\"hansmatrimony-features-illustration2\">\r\n                   </div>\r\n                   <p>Get Your <span style=\"font-weight:bolder\">Personal Matchmaker</span>\r\n                       \r\n                      <br>from 1000+Matchmakers </p>\r\n                  </div>\r\n               </div>\r\n               <div class=\"col-md-4 feature-card-container \">\r\n                   <div class=\"feature-card-holder\">\r\n                       <div class=\"d-flex justify-content-center\">\r\n                           <img src=\"../../../assets/featuresIllustrations/ill3.jpg\" alt=\"hansmatrimony-features-illustration3\">\r\n                       </div>\r\n                       <p>Verified matches from <br><span style=\"font-weight:bolder\">50+ temples</span> in india </p>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n   </div>\r\n   <div *ngIf=\"mobileScreen\"  class=\"carousel-div\">\r\n       <owl-carousel-o [options]=\"customOptions\">\r\n           <ng-template class=\"slide\" carouselSlide>\r\n               <div class=\"temple-card text-shadow\">\r\n                   <span class=\"temple-name\">\r\n                       <!-- {{languageService.homeLang.sanatanTemple}} -->\r\n                   </span>\r\n                   <mat-card class=\" featureCard2\">\r\n                       <img class=\"feature2Img\" src=\"\r\n                       ../../../assets/featuresIllustrations/ill2.svg\"\r\n                           alt=\"hansmatrimony-features-illustration2\">\r\n                   </mat-card>\r\n               </div>\r\n               <p>Get Your <span style=\"font-weight:bolder\">Personal Matchmaker</span>\r\n                       \r\n                   <br>from 1000+Matchmakers </p>\r\n           </ng-template>\r\n           <ng-template class=\"slide\" carouselSlide>\r\n\r\n                   <div class=\"temple-card text-shadow\">\r\n                       <span class=\"temple-name\">\r\n                       </span>\r\n                       <mat-card class=\"featureCard2\">\r\n                           <img class=\"feature2Img\"\r\n                               src=\"../../../assets/featuresIllustrations/ill1.jpg\"\r\n                               alt=\"hansmatrimony-features-illustration1\">\r\n                       </mat-card>\r\n                   </div>\r\n                   <p>More than <span style=\"font-weight:bolder\">50,000 </span>\r\n                       <br>suitable matches </p>\r\n           </ng-template>\r\n           <ng-template class=\"slide\" carouselSlide>\r\n               <div class=\"temple-card text-shadow\">\r\n                   <span class=\"temple-name\">\r\n                   </span>\r\n                   <mat-card class=\" featureCard2\">\r\n                       <img class=\"feature2Img\"\r\n                           src=\"../../../assets/featuresIllustrations/ill3.jpg\"\r\n                           alt=\"hansmatrimony-features-illustration3\">\r\n                   </mat-card>\r\n               </div>\r\n               <p>Verified matches from <br><span style=\"font-weight:bolder\">50+ temples</span> in india </p>\r\n           </ng-template>\r\n       </owl-carousel-o>\r\n   </div>\r\n</div>\r\n<testimonials></testimonials>\r\n<app-choice-list></app-choice-list>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n            <form  [formGroup]=\"pageFive\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                  <mat-label style=\"color: black;\">Preferred Castes</mat-label>\r\n                  <mat-select \r\n                  type=\"text\"\r\n                  class=\"form-control\"  \r\n                  [multiple]=\"true\" \r\n                  (selectionChange)=\"casteSelectionChanged($event)\"\r\n                  formControlName=\"searchCaste\"\r\n                  #multiSelect\r\n                   required >\r\n                   <mat-option>\r\n                    <ngx-mat-select-search \r\n                    noEntriesFoundLabel=\"No Castes Found\" \r\n                    placeholderLabel=\"Search Castes...\"\r\n                    formControlName=\"searchCasteText\"></ngx-mat-select-search>\r\n                   </mat-option>\r\n                          <mat-option *ngFor=\"let name of filteredCastesMulti | async\" [value]=\"name\" required>\r\n                            {{name}}\r\n                          </mat-option>\r\n                  </mat-select>\r\n                  </div>\r\n\r\n                  <p *ngIf=\"compatibiltyCount\" class=\"t-c\"\r\n                   style=\"display: inline-block; font-size: 1.4em;margin: 20px auto;\">\r\n                    Profiles Available : {{compatibiltyCount}}<br>\r\n                    <span *ngIf=\"compatibiltyCount < 100\">\r\n                          Pitch For All Caste\r\n                    </span>\r\n                    <span *ngIf=\"compatibiltyCount > 100\">\r\n                          Good To Go With The Castes\r\n                    </span>\r\n                  </p>\r\n\r\n                  <div class=\"col-md-12\" style=\"margin-top: 20px;\">\r\n                    <mat-checkbox\r\n                    formControlName=\"allCaste\"\r\n                     (change)=\"checkAllCastePref($event)\">No Caste Bar</mat-checkbox>\r\n                  </div>\r\n\r\n                      <div class=\"col-md-12\">\r\n                        <mat-form-field  class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Alternate Mobile Number</mat-label>\r\n                            <input style=\"display: inline;\" type=\"number\" id=\"phone\" matInput formControlName=\"phone\" >\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Enquiry Date</mat-label>\r\n                            <input type=\"date\"  name=\"enqDate\" matInput formControlName=\"enq_date\" id=\"enqDate\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label style=\"color: black;\">Follow Up Call-On</mat-label>\r\n                            <input type=\"date\"  name=\"follow\" matInput formControlName=\"follow_date\" id=\"follow\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                        \r\n                            <mat-label style=\"color: black;\">Source</mat-label>\r\n                            <mat-select  #source formControlName=\"source\" >\r\n                                    <mat-option *ngFor=\"let  option of sources\" [value]=\"option\">\r\n                                            {{option}}\r\n                                    </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-6\" style=\"margin-top:20px\">\r\n                        <h6>\r\n                          Assign to:\r\n                        </h6>\r\n                        <mat-checkbox (change)=\"assignToTemple($event)\" [checked]=\"templeChecked\">Temple</mat-checkbox>\r\n\r\n                          <mat-checkbox (change)=\"assignToModerator($event)\" [checked]=\"moderatorChecked\">Moderator</mat-checkbox>\r\n                          </div>\r\n\r\n                      <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                        \r\n                            <mat-label style=\"color: black;\">Select</mat-label>\r\n                            <mat-select  #assignTo formControlName=\"assign_to\">\r\n                                    <mat-option *ngFor=\"let  option of fullList\" [value]=\"option.name\">\r\n                                            {{option.name}}\r\n                                    </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                        \r\n                            <mat-label style=\"color: black;\">Interest Level Of Lead</mat-label>\r\n                            <mat-select  #interest formControlName=\"interest\" >\r\n                                    <mat-option *ngFor=\"let  option of interestLevel\" [value]=\"option\">\r\n                                            {{option}}\r\n                                    </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\" >\r\n                          <mat-label style=\"color: black;\">Comments</mat-label>\r\n                          <input type=\"text\"  matInput formControlName=\"comments\" required name=\"Designation\">\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-12\" style=\"margin-top:20px\">\r\n                      <mat-checkbox (change)=\"checkStat($event)\">Premium Leads</mat-checkbox>\r\n                      </div>\r\n\r\n                      <div sclass=\"row\"  style=\"margin-top:20px; margin-bottom:20px;text-align: center;width: 100%;\">\r\n                      <button class=\"btn btn-blue\" mat-raised-button color=\"warn\" \r\n                      id=\"photoBtn\" \r\n                      [disabled]=\"assignBtn$ | async\"\r\n                       *ngIf=\"fourPageService.getUserThrough()\" \r\n                      (click)=\"checkForPhoto('0')\">Assign</button>\r\n                      <button style=\"margin-left: 10px;\" class=\"btn btn-blue\" mat-raised-button color=\"warn\" id=\"photoBtn\" \r\n                      [disabled]=\"approveBtn$ | async\" \r\n                      *ngIf=\"fourPageService.getUserThrough()\"\r\n                       (click)=\"checkForPhoto('1')\">Assign and Approve</button><br>\r\n                      <button style=\"margin-top: 10px;\" class=\"btn btn-blue\" mat-raised-button color=\"warn\" id=\"photoBtn\"  *ngIf=\"fourPageService.getUserThrough()\" (click)=\"sendPhotoLink()\">Send Photo Link</button>\r\n                      </div>  \r\n\r\n                    <p class=\"impNote\">\r\n                      अगर सभी डिटेल्स नहीं भरी है तो <strong>Complete</strong> बटन पर क्लिक कर लीजिये।\r\n                      अगर सभी डिटेल्स भर ली  हैं तो <strong>Complete and Approve</strong>> पर क्लिक कीजिये  ।\r\n                    </p>\r\n                </div>\r\n           </form> \r\n       \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"PageThree\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Birth Place</mat-label>\r\n        <input type=\"text\" matInput matValidateAddress id=\"birthPlace\" [autoCompleteOptions]=\"autoComplete\"\r\n          (change)=\"placeChanged('birth')\" matGoogleMapsAutocomplete\r\n          #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" formControlName=\"BirthPlace\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-6\" style=\"padding-left: 0px;\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Birth Time<code style=\"color: rgba(0,0,0,.6);\">(optional)</code></mat-label>\r\n        <input matInput id=\"BirthTime\" (change)=\"changed('bTime')\" type=\"time\" placeholder=\"Choose a time\"\r\n          formControlName=\"BirthTime\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Gotra <code style=\"color: rgba(0,0,0,.6);\">(optional)</code></mat-label>\r\n        <input type=\"text\" matInput (change)=\"changed('gotra')\" formControlName=\"Gotra\">\r\n        <mat-hint>eg. Kashyap</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-6 mt-10\">\r\n\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Food Choice</mat-label>\r\n        <mat-select (selectionChange)=\"changed('food')\" formControlName=\"FoodChoice\">\r\n          <mat-option value=\"Vegetarian\">Vegetarian</mat-option>\r\n          <mat-option value=\"Non-Vegetarian\">Non-Vegetarian</mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-6 matSelect mt-10\">\r\n\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Manglik Status</mat-label>\r\n        <mat-select (selectionChange)=\"changed('manglik')\" formControlName=\"Mangalik\">\r\n          <mat-option value=\"Manglik\">Manglik</mat-option>\r\n          <mat-option value=\"Non-Manglik\">Non-Manglik</mat-option>\r\n          <mat-option value=\"Anshik Manglik\">Anshik Manglik</mat-option>\r\n          <mat-option value=\"Anshik Manglik\">Don't Know</mat-option>\r\n\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n\r\n        <mat-label>Father's Status</mat-label>\r\n        <mat-select formControlName=\"FatherStatus\" (selectionChange)=\"changed('fstatus')\">\r\n          <mat-option *ngFor=\"let  option of Occupation\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n\r\n        <mat-label>Mother's Status</mat-label>\r\n        <mat-select formControlName=\"MotherStatus\" (selectionChange)=\"changed('mstatus')\">\r\n          <mat-option *ngFor=\"let  option of Occupation\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Family's Annual Income in LPA</mat-label>\r\n        <mat-select name=\"FamilyIncome\" formControlName=\"FamilyIncome\" (selectionChange)=\"changed('Fincome')\">\r\n          <mat-option *ngFor=\"let item of incomeCategories\" [value]=\"item\">\r\n            {{setValue(item)}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <!-- <input type=\"number\" (change)=\"changed('Fincome')\" matInput formControlName=\"FamilyIncome\"  name=\"FamilyIncome\">\r\n                              <span matSuffix>Lakh Per Year &nbsp;</span> -->\r\n        <mat-error class=\"full-width\" style=\"margin-bottom: 10px;\" *ngIf=\"PageThree.get('FamilyIncome').invalid\"> eg. 8\r\n          <span style=\"margin-left: 80%;\">LPA &nbsp;</span></mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-12\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Locality / Area</mat-label>\r\n        <input type=\"text\" matInput matValidateAddress id=\"locality\" [autoCompleteOptions]=\"autoComplete\"\r\n          (change)=\"placeChanged('locality')\" matGoogleMapsAutocomplete\r\n          #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" formControlName=\"Locality\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      यहाँ कस्टमर कहाँ रहता है वो भरे जैसे की करोल बाघ , शादी पुर , बुरारी रोहिणी आदि |\r\n    </p>\r\n\r\n\r\n    <div class=\"col-xs-12 m-t-20\"\r\n      style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n      <button mat-raised-button type=\"button\" id=\"skipBtn\" matStepperNext class=\"btn\" (click)=\"skip()\"\r\n        *ngIf=\"fourPageService.getSkippable()\">Skip</button>\r\n      <button mat-raised-button matStepperNext type=\"button\" id=\"viewButtonThree\" (click)=\"firstStep()\"\r\n        class=\"btn\">Next</button>\r\n    </div>\r\n    <!-- <p *ngIf=\"!fourPageService.getUserThrough()\" class=\"impNoteMain\">\r\n                      Just one more step and we’ll help you find your perfect match!\r\n                    </p> -->\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      डिटेल्स भरने के बाद इस बटन पर जरूर क्लिक करे |\r\n    </p>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"PageTwo\">\r\n  <div class=\"row\" [ngStyle]=\"{'padding-top': fourPageService.getUserThrough() ? '40px' : '0px'}\">\r\n    <!-- <button class=\"btn\" matStepperPrevious *ngIf=\"!fourPageService.getUserThrough()\">\r\n      <img src=\"../../assets/backN.svg\" class=\"backArrow\" alt=\"BACK\">\r\n      <p style=\"margin:auto 0 auto 5px\">Back</p>\r\n    </button> -->\r\n    <div [ngClass]=\"{'col-12': !showOccupation , 'col-6': showOccupation}\" \r\n    >\r\n      <!-- <h6>Qualification</h6> -->\r\n      <mat-form-field style=\"margin-bottom: 25px;\" class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Qualification</mat-label>\r\n        <mat-select (selectionChange)=\"changedQualification()\" matInput formControlName=\"Qualification\">\r\n          <mat-option>\r\n            <ngx-mat-select-search noEntriesFoundLabel=\"No Qualification Found\"\r\n              placeholderLabel=\"Search Qualification...\" formControlName=\"QualificationCtrl\">\r\n              <mat-icon ngxMatSelectSearchClear>close</mat-icon>\r\n            </ngx-mat-select-search>\r\n          </mat-option>\r\n          <mat-optgroup *ngFor=\"let group of filteredEducationGroups | async\" [label]=\"group.group\">\r\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n              {{name}}\r\n            </mat-option>\r\n          </mat-optgroup>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"showOccupation\" [ngClass]=\"{'col-12': fourPageService.getUserThrough() , 'col-6': !fourPageService.getUserThrough() }\">\r\n      <!-- <h6>Occupation</h6> -->\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Occupation</mat-label>\r\n        <mat-select #relation formControlName=\"Occupation\" (selectionChange)=\"changedOccupation()\">\r\n          <mat-option *ngFor=\"let  option of Occupation\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'col-12': fourPageService.getUserThrough() , 'col-6': !fourPageService.getUserThrough() }\" *ngIf=\"fourPageService.getUserThrough()\">\r\n      <!-- <h6>Designation</h6> -->\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\"\r\n        *ngIf=\"PageTwo.value.Occupation != 'Teacher' && PageTwo.value.Occupation != 'Doctor' && PageTwo.value.Occupation != 'Not Working' \">\r\n        <mat-label>Designation</mat-label>\r\n        <mat-select #relation formControlName=\"Designation\" (selectionChange)=\"changedDesignation()\">\r\n          <mat-option>\r\n            <ngx-mat-select-search noEntriesFoundLabel=\"No Designation Found\" placeholderLabel=\"Search Designation...\"\r\n              formControlName=\"DesignationCtrl\">\r\n              <mat-icon ngxMatSelectSearchClear>close</mat-icon>\r\n            </ngx-mat-select-search>\r\n          </mat-option>\r\n          <mat-option *ngFor=\"let  option of filteredDesignations | async\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"full-width fieldFit\"\r\n        *ngIf=\"PageTwo.value.Designation === 'Others' && PageTwo.value.Occupation != 'Teacher' && PageTwo.value.Occupation != 'Doctor' && PageTwo.value.Occupation != 'Not Working'\"\r\n        appearance=\"standard\">\r\n        <!-- <h6>Other Designation</h6> -->\r\n        <mat-label>Other Designation</mat-label>\r\n        <input type=\"text\" (change)=\"changedDesignation()\" matInput formControlName=\"OtherDesignation\"\r\n          name=\"Designation\">\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      जैसे की मैनेजर , ओनर , क्लर्क , सॉफ्टवेयर इंजीनियर |\r\n    </p>\r\n\r\n    <div [ngClass]=\"{'col-12': !showWorkingCity , 'col-6': showWorkingCity}\" \r\n    [ngClass]=\"{'col-12': fourPageService.getUserThrough() , 'col-6': !fourPageService.getUserThrough() }\">\r\n      <!-- <h6>Yearly Income In Lakhs</h6> -->\r\n      <mat-form-field style=\"margin-bottom: 25px;\" *ngIf=\"showYearlyIncome\" class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Yearly Income In Lakhs</mat-label>\r\n        <mat-select formControlName=\"AnnualIncome\" (selectionChange)=\"incomeChanged($event)\">\r\n          <mat-option *ngFor=\"let item of incomeCategories\" [value]=\"item\">\r\n            {{setValue(item)}}\r\n          </mat-option>\r\n        </mat-select>\r\n        <!-- <input type=\"number\" (change)=\"incomeChanged()\" matInput formControlName=\"AnnualIncome\" name=\"AnnualIncome\">\r\n                          <span matSuffix>Lakh Per Year &nbsp;</span> -->\r\n        <mat-error class=\"full-width\" style=\"margin-bottom: 10px;\" *ngIf=\"PageTwo.get('AnnualIncome').invalid\"> eg. 8\r\n          <span style=\"margin-left: 80%;\">LPA &nbsp;</span></mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      अगर लड़का /लड़की की सालाना इनकम 10 लाख है तोह यहाँ सिर्फ 10 भरे ।\r\n    </p>\r\n\r\n    <!-- <div [ngClass]=\"{'col-12': fourPageService.getUserThrough() , 'col-6': !fourPageService.getUserThrough() }\" *ngIf=\"PageTwo.value.Occupation !== 'Not Working'\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Working City</mat-label>\r\n        <input type=\"text\" matInput id=\"workingCity\" [autoCompleteOptions]=\"autoComplete\" matValidateAddress\r\n          matGoogleMapsAutocomplete #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" (change)=\"placeChanged()\"\r\n          formControlName=\"Working\">\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div> -->\r\n\r\n    <div [ngClass]=\"{'col-12': fourPageService.getUserThrough() , 'col-6': !fourPageService.getUserThrough() }\" *ngIf=\"PageTwo.value.Occupation !== 'Not Working' && showWorkingCity\">\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Working City</mat-label>\r\n      <input type=\"text\" matInput id=\"workingCity\" (change)=\"placeChanged()\" formControlName=\"Working\" [matAutocomplete]=\"Working\">\r\n      <mat-autocomplete (optionSelected)='workingCityChanged($event.option.value)' autoActiveFirstOption\r\n        #Working=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let cities of workingCities | async\" [value]=\"cities\" required>\r\n          {{cities}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-12\" *ngIf=\"fourPageService.profile.gender === 'Female' && fourPageService.getUserThrough() \">\r\n      <!-- <h6>Wish to go abroad?</h6> -->\r\n      <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n        <mat-label>Wish to go abroad?</mat-label>\r\n        <mat-select formControlName=\"abroad\" (selectionChange)=\"changedAbroad()\">\r\n          <mat-option value=\"Yes\">Yes</mat-option>\r\n          <mat-option value=\"No\">No</mat-option>\r\n        </mat-select>\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-12\" *ngIf=\"fourPageService.getUserThrough() \">\r\n      <mat-form-field class=\"full-width\" style=\"margin-top: 25px;\" appearance=\"standard\">\r\n        <mat-label>About<code style=\"color: rgba(0,0,0,.6);\">(optional)</code></mat-label>\r\n        <textarea rows=\"5\" type=\"text\" matInput formControlName=\"About\" name=\"About\">\r\n                                </textarea>\r\n        <mat-error *ngIf=\"PageTwo.invalid && nextClickedTwo\">*this field is required</mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 m-t-20\" style=\"margin-top: 10px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;display: flex;\r\n      flex-direction:row;\r\n      align-items: center;\r\n      justify-content: center;\"\r\n      *ngIf=\"fourPageService.getUserThrough()\"\r\n      >\r\n      <button class=\"backBtn\" matStepperPrevious *ngIf=\"!fourPageService.getUserThrough()\">\r\n        <img src=\"../../assets/backN.svg\" class=\"backArrow\" alt=\"BACK\">\r\n        <p style=\"margin:auto 0 auto 5px\">Back</p>\r\n      </button>\r\n      <button *ngIf=\"fourPageService.getUserThrough()\" mat-raised-button type=\"button\" id=\"viewButton2\"\r\n        style=\"margin-right: 10px;\" matStepperPrevious class=\"btn\">Back</button>\r\n      <button mat-raised-button type=\"button\" id=\"skipBtn\" matStepperNext class=\"btn\" (click)=\"skip()\"\r\n        *ngIf=\"fourPageService.getSkippable()\">Skip</button>\r\n      <button type=\"button\" id=\"viewButton2\" mat-raised-button matStepperNext class=\"btn\" (click)=\"firstStep()\"><a\r\n          *ngIf=\"!fourPageService.getUserThrough()\">See Profiles</a><a\r\n          *ngIf=\"fourPageService.getUserThrough()\">Next</a></button>\r\n    </div>\r\n    <!-- <p *ngIf=\"!fourPageService.getUserThrough()\" class=\"impNoteMain\">\r\n                      Great! Thanks for letting us know about yourself.\r\n                    </p> -->\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      डिटेल्स भरने के बाद इस बटन पर जरूर क्लिक करे |\r\n    </p>\r\n  </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n\r\n\r\n  <mat-card class=\"matPhotoCard\">\r\n    <div class=\"box1\">\r\n      <!-- // large box  -->\r\n      <div (click)=\"dfile.click()\" class=\"flexIt\" style=\"flex: 2;height: 100%;\r\n          border-radius: 5px;\r\n          background-color: #E6E7E9;\">\r\n        <div class=\"t-c\" *ngIf=\"!imgURL\">\r\n          <img width=\"30px\" src=\"../../../assets/icons/addmore.svg\" alt=\"add more\">\r\n          <p class=\"uploadText\">Upload Picture</p>\r\n        </div>\r\n        <img [src]=\"imgURL\" height=\"100%\" width=\"100%\" *ngIf=\"imgURL\" style=\"border-radius: 5px;\">\r\n        <input style=\"display: none\" #dfile type=\"file\" id=\"dfile\" accept='image/*' (change)=\"preview(dfile.files,1)\" />\r\n      </div>\r\n\r\n      <!-- // column 2 with 2 vertical small boxes -->\r\n      <div class=\"verticalBox\" *ngIf=\"imgURL\">\r\n        <div (click)=\"fontfile.click()\" class=\"flexIt\" style=\"height: 49%;\r\n            border-radius: 5px;\r\n            background-color: #E6E7E9;\">\r\n          <div class=\"t-c\" *ngIf=\"!frontfile\">\r\n            <img width=\"30px\" src=\"../../../assets/icons/addmore.svg\" alt=\"add more\">\r\n            <p class=\"uploadText\">Add More</p>\r\n          </div>\r\n          <img [src]=\"frontfile\" height=\"100%\" width=\"100%\" *ngIf=\"frontfile\" style=\"border-radius: 5px;\">\r\n          <input style=\"display: none\" #fontfile type=\"file\" id=\"fontfile\" accept='image/*'\r\n            (change)=\"previewfront(fontfile.files,2)\" />\r\n        </div>\r\n\r\n        <div (click)=\"backfile.click()\" class=\"flexIt\" style=\"height: 49%;\r\n            border-radius: 5px;\r\n            background-color: #E6E7E9;\">\r\n          <div class=\"t-c\" *ngIf=\"!BackimgURL\">\r\n            <img width=\"30px\" src=\"../../../assets/icons/addmore.svg\" alt=\"add more\">\r\n            <p class=\"uploadText\">Add More</p>\r\n          </div>\r\n          <img [src]=\"BackimgURL\" height=\"100%\" width=\"100%\" *ngIf=\"BackimgURL\" style=\"border-radius: 5px;\">\r\n          <input style=\"display: none\" #backfile type=\"file\" id=\"backfile\" accept='image/*'\r\n            (change)=\"previewBack(backfile.files,3)\" />\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div style=\"width: 100%;\r\n  padding-right: 15px;\r\n  margin-top: 10px;\r\n  padding-left: 15px;\" *ngIf=\"fourPageService.getUserThrough()\">\r\n      <label for=\"photoScore\">Photo Score:</label>\r\n      <input style=\"border:1px solid darkgrey;margin-left: 10px;\" class=\"form-control\" name=\"photoScore\"\r\n        (ngModelChange)=\"photoScoreChanged($event)\" type=\"number\" [(ngModel)]=\"photoScore\" />\r\n    </div>\r\n    <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n      कस्टमर की फोटो देखकर उसे 5 से लेकर 10 के बीच एक स्कोर दीजिये - अगर बहुत देखने में बहुत अच्छा है तो 10,9 ya 8 etc\r\n      और बहुत ही काम अच्छा है तो 5\r\n    </p>\r\n\r\n  </div>\r\n  <!-- <div style=\"text-align: center;margin-top: 20px;\">\r\n    <button type=\"button\" \r\n    class=\"btn btn-blue facebookBtn\" \r\n    style=\"font-weight: bold;\r\n    font-size: 1.2em;\" \r\n    mat-raised-button color=\"warn\" \r\n    id=\"photoBtn\" matStepperNext   \r\n    (click)=\"loginToFacebookToGetPhotos()\" *ngIf=\"!clickedFacebook\">\r\n    Upload From Facebook\r\n  </button>\r\n  </div> -->\r\n  <div class=\"buttonSet\" style=\"margin-bottom:20px;margin-top: 10px;\">\r\n    <button *ngIf=\"!imgURL\" class=\"btn btn-blue\" mat-raised-button style=\"background-color: grey;\" id=\"photoBtn\"\r\n      matStepperNext (click)=\"skip(0)\">Go Without Photo</button>\r\n    <button *ngIf=\"imgURL\" type=\"button\" class=\"btn btn-blue\" style=\"font-weight: bold;font-size: 1.2em;\"\r\n      mat-raised-button color=\"warn\" id=\"photoBtn\" matStepperNext (click)=\"checkForPhoto()\">Go</button>\r\n  </div>\r\n  <p *ngIf=\"!fourPageService.getUserThrough()\" class=\"impNoteMain\">\r\n    Click 'Go' to see your perfect matches.\r\n  </p>\r\n  <p *ngIf=\"fourPageService.getUserThrough()\" class=\"impNote\">\r\n    डिटेल्स भरने के बाद इस बटन पर जरूर क्लिक करे |\r\n  </p>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class='pwaSize fixed t-0 b-0 bg-white w-full HC overflowY'>\r\n\r\n    <div class=\"container customBackground\"\r\n        style=\"width:100%;background: white;border-radius: 20px;margin-top: 20px; margin-bottom: 20px;\">\r\n        <div class=\"w-full\" style=\"margin-left:auto;margin-right:auto\">\r\n\r\n            <form [formGroup]=\"verifyForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>College</mat-label>\r\n                            <input type=\"text\" matInput formControlName=\"college\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Company</mat-label>\r\n                            <input type=\"text\" matInput formControlName=\"company\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Sisters Married</mat-label>\r\n                            <mat-select #relation formControlName=\"sisters_married\">\r\n                                <mat-option *ngFor=\"let option of Count\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Sisters Unmarried</mat-label>\r\n                            <mat-select #relation formControlName=\"sisters_unmarried\">\r\n                                <mat-option *ngFor=\"let option of Count\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Brothers Married</mat-label>\r\n                            <mat-select #relation formControlName=\"brothers_married\">\r\n                                <mat-option *ngFor=\"let option of Count\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Brothers Unmarried</mat-label>\r\n                            <mat-select #relation formControlName=\"brothers_unmarried\">\r\n                                <mat-option *ngFor=\"let option of Count\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>House Type</mat-label>\r\n                            <mat-select #relation formControlName=\"house_type\">\r\n                                <mat-option *ngFor=\"let  option of HouseType\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Family Type</mat-label>\r\n                            <mat-select #relation formControlName=\"family_type\">\r\n                                <mat-option *ngFor=\"let  option of FamilyType\" [value]=\"option\">\r\n                                    {{option}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <mat-form-field class=\"full-width fieldFit\" appearance=\"standard\">\r\n                            <mat-label>Family living in:</mat-label>\r\n                            <input type=\"text\" matInput matValidateAddress id=\"familyIn\"\r\n                                [autoCompleteOptions]=\"autoComplete\" (change)=\"placeChanged()\" matGoogleMapsAutocomplete\r\n                                #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                                formControlName=\"family_living_in\">\r\n                        </mat-form-field>\r\n                    </div><br><br><br><br>\r\n                    <div class=\"col-xs-12 m-t-20\"\r\n                        style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n                        <button mat-raised-button\r\n                            *ngIf=\"fourPageService.getUserThrough() && !fourPageService.showApproveBtn\" type=\"button\"\r\n                            matStepperNext class=\"btn-primary\" (click)=\"onSubmitPersonal()\">Next</button>\r\n                        <button style=\"margin-left: 10px;\" class=\"btn btn-blue\" mat-raised-button\r\n                            *ngIf=\"fourPageService.getUserThrough() && fourPageService.showApproveBtn\"\r\n                            (click)=\"onSubmitPersonal()\">Approve</button> \r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main style=\"padding: 20px;background-color: #dbdbdb;\">\r\n    <div id=\"cancel\">\r\n        <img (click)=\"close()\" style=\"width: 40px;margin: 5px 5px 0px 0px;\" src=\"../../../assets/cancelblue.svg\" alt=\"cancel\">\r\n    </div>\r\n    <span class=\"bolder\" style=\"color: #9c5518;\">Point 1:<br></span> Profile <strong>Approve</strong> करने के लिए इस फॉर्म में दिए गए सभी Details भरना जरुरी है । optional- (Gotra , Email व weight को छोड़कर ) <br>\r\n\r\n    <span class=\"bolder\" style=\"color: #cf7500;\">Point 2:<br></span> क्लाइंट से सभी डिटेल्स लेने का प्रयास करें । (Photo भी) <br>\r\n    \r\n    <span class=\"bolder\" style=\"color: #de7119;\">Point 3:<br></span> अगर सभी डिटेल्स नहीं मिल पाती तो आप लीड को <strong>Complete</strong> कर सकते हैं पर <strong>Approve</strong> नहीं । <br>\r\n    \r\n    <span class=\"bolder\" style=\"color: #e06d20;\">Point 4:<br></span> कस्टमर की Profile <strong>Approve</strong> होने के बाद कस्टमर की प्रोफाइल <strong>Verified</strong> हो जाती है और  इसका प्रोफाइल हमारे <strong>सभी रजिस्टर्ड लोगो को दिखना शुरू हो जाता है वे लोग इस कस्टमर को कांटेक्ट भी कर सकते हैं ।</strong>\r\n    \r\n    और आपके इस क्लाइंट को बेहतर रिस्पांस मिल सकता है ।\r\n\r\n    <div style=\"width: 100%; text-align: center;margin-top: 10dp;\">\r\n        <button class=\"btn\" (click)=\"close()\" mat-raised-button style=\"background-color: #000000;color: white;\">\r\n            OK\r\n        </button>\r\n    </div>\r\n    \r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/register-with/register-with.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/register-with/register-with.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <h4 class=\"heading\"> Easy Sign Up With</h4>\r\n    <div class=\"text-center btnDiv\">\r\n        <!-- <button id=\"facebook\" (click)=\"registerUsing('facebook')\" *ngIf=\"selection === 'Myself'\" mat-raised-button>\r\n            <div style=\"font-weight: 600 !important;\r\n            font-size: 13px;\r\n            position: absolute;\r\n            left:6%;\r\n            height:24px!important;\r\n            object-fit:cover;\r\n            top: -18px !important;\r\n            background: #4fdcef;\r\n            color: white;\r\n            padding: 2px ;\r\n            border-radius: 3px 3px 3px 3px;\r\n            display:flex;\r\n            flex-direction: row;\r\n            align-items: center;justify-content:center;\r\n          \"> <img style=\"width:15px;margin:2px 0px\" src=\"../../../assets/graph.svg\">50% More Matches</div>\r\n            Facebook\r\n        </button> -->\r\n        <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"registerUsing('facebook')\"\r\n            *ngIf=\"selection === 'Myself'\">\r\n            Facebook</button>\r\n        <p>or</p>\r\n        <button id=\"truecaller\" (click)=\"registerUsing('truecaller')\">\r\n            Phone Number\r\n        </button>\r\n    </div>\r\n\r\n\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"testimonial-cards\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <img src=\"{{testimonial.image}}\" alt=\"\">  \r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <p>{{testimonial.paragraph}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n           \r\n    \r\n</div>\r\n            ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonials.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonials.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"testimonials\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1>\r\n            Happy <span style=\"color:#4EB7E6\">Clients</span>\r\n            <hr class=\"one\">\r\n        <hr class=\"two\">\r\n        </h1>\r\n        \r\n    </div>\r\n    <div class=\"carousel-div\">\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img \r\n                            id=\"testimonialImage\"\r\n                            src=\"{{testimonials[0].image}}\"\r\n                            alt=\"hansmatrimony-success-stories-image-2\"\r\n                            >\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"hansmatrimony-success-stories-image-3\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[0].title}}</h2>\r\n                                    <p>{{testimonials[0].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img  id=\"testimonialImage\" src=\"{{testimonials[1].image}}\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"hansmatrimony-success-stories-image-4\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[1].title}}</h2>\r\n                                    <p>{{testimonials[1].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img  id=\"testimonialImage\" src=\"{{testimonials[2].image}}\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"hansmatrimony-success-stories-image-2\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[2].title}}</h2>\r\n                                    <p>{{testimonials[2].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img  id=\"testimonialImage\" src=\"{{testimonials[3].image}}\" alt=\"hansmatrimony-success-stories-image-3\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"hansmatrimony-success-stories-image-4\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[3].title}}</h2>\r\n                                    <p>{{testimonials[3].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </owl-carousel-o>\r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/thank-you/thank-you.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/thank-you/thank-you.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainBack\">\r\n    <main class=\"special\">\r\n        <div class=\"text-center\">\r\n            <span class=\"topheader\">Thank You</span><br>\r\n            <span style=\"color:white!important; font-size:18px\">For Registering With Us</span>\r\n        </div>\r\n        <div class=\"cardMiddle\">\r\n            <div class=\"circular\">\r\n                <img style=\"width:100%\" src=\"../../../assets/new icons/green_circular_white_tick.svg\" alt=\"heart\">\r\n            </div>\r\n            <div style=\"display:flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content:center\" class=\"text-center\">\r\n                <p style=\"font-size:19px;font-weight:450;margin:auto!important;color:rgb(51, 59, 52)!important;\">\r\n                    Contacts have been added to your Account Succesfully!</p>\r\n            </div>\r\n        </div>\r\n        <div style=\"position: relative;\r\n        height:80px;\r\n        margin-top: 5%;\r\n        display:flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content:center;\">\r\n            <button class=\"SpecialCase\" style=\"position:absolute;\r\n            margin:auto;\r\n    height:100%;\r\n    background:#00c2cb!important; \r\n    /* width:87%!important;  */\r\n    color:rgb(255, 255, 255);\r\n    margin-top:20px;\r\n    border:0px!important;\r\n    border-radius:30px 30px 30px 30px\" mat-raised-button (click)=\"goToChat()\">View Profiles Now</button>\r\n        </div>\r\n    </main>\r\n</div>");

/***/ }),

/***/ "./src/app/choice-list/choice-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choice-list/choice-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button{\r\n    width:79px;\r\n    height:22px;\r\n    border:none;\r\n    outline:none;\r\n    border-radius:5px;\r\n    color:white;\r\n    font-size:10px;\r\n}\r\n.btn-holder{\r\n    display: flex;\r\n}\r\n.view{\r\n    background-color:#4EB7E6;\r\n    margin-right:5px;\r\n}\r\n.contact{\r\n    background-color:#77BF64;\r\n}\r\n.choice-card{\r\n    width:157px;\r\n}\r\n@media only screen and (min-width: 768px){\r\n   .mobileScreen{\r\n       display: none;\r\n   }\r\n}\r\n@media only screen and (max-width: 767px){\r\n    .desktop{\r\n        display:none;\r\n    }\r\n    .screen-row{\r\n        display:flex;\r\n        justify-content: space-evenly;\r\n        margin-bottom:20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvaWNlLWxpc3QvY2hvaWNlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7R0FDRztPQUNJLGFBQWE7R0FDakI7QUFDSDtBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hvaWNlLWxpc3QvY2hvaWNlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICAgIHdpZHRoOjc5cHg7XHJcbiAgICBoZWlnaHQ6MjJweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG59XHJcbi5idG4taG9sZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4udmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRFQjdFNjtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuLmNvbnRhY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3N0JGNjQ7XHJcbn1cclxuLmNob2ljZS1jYXJke1xyXG4gICAgd2lkdGg6MTU3cHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgIC5tb2JpbGVTY3JlZW57XHJcbiAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuZGVza3RvcHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbiAgICAuc2NyZWVuLXJvd3tcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/choice-list/choice-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choice-list/choice-list.component.ts ***!
  \******************************************************/
/*! exports provided: ChoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceListComponent", function() { return ChoiceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChoiceListComponent = class ChoiceListComponent {
    constructor() {
        this.gender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boy = false;
        this.girl = false;
    }
    ngOnInit() {
    }
    toggleBoy() {
        this.boy = true;
        this.girl = false;
        this.selectGender();
    }
    toggleGirl() {
        this.boy = false;
        this.girl = true;
        this.selectGender();
    }
    selectGender() { this.gender.emit(this.boy); }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ChoiceListComponent.prototype, "gender", void 0);
ChoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choice-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choice-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/choice-list/choice-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choice-list.component.css */ "./src/app/choice-list/choice-list.component.css")).default]
    })
], ChoiceListComponent);



/***/ }),

/***/ "./src/app/compatibility-form/choose-for/choose-for.component.css":
/*!************************************************************************!*\
  !*** ./src/app/compatibility-form/choose-for/choose-for.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n/* ::ng-deep .mat-dialog-container{\r\n    border-radius: 15px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n  } */\r\nmain{\r\n    border-radius: 15px;\r\n    background-color: white;\r\n}\r\n.heading {\r\n    color: #353635d7;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 20px 0px 3px 0px;\r\n}\r\n.buttonn{\r\n    background: #34b7f1!important;\r\n    color:white!important;\r\n}\r\n.viewButton{\r\n    background:white!important;\r\n    color:#434546da!important;\r\n    margin:8px;\r\n    width:150px;\r\n    text-align:center;\r\n    border:1px solid #34b7f1;\r\n  box-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n  12px 12px 14px rgba(0, 0, 0, 0.2);\r\n  }\r\n.btnDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 20px auto 30px auto; \r\n    color:rgba(0, 0, 0, 0.685)\r\n}\r\n.btnDiv button {\r\n    padding: 5px 30px;\r\n    /* border-radius: 50px; */\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n}\r\n#facebook {\r\n    background-color: #1266c6;\r\n    padding:9px 32px!important;\r\n    border-radius: 5px!important;\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;justify-content:center;\r\n}\r\n#truecaller {\r\n    text-decoration:underline;\r\n    background:transparent;\r\n    padding:8px 14px!important;\r\n    border-radius: 5px!important;\r\n    border:0px;\r\n    color: rgba(92, 90, 90, 0.788);\r\n}\r\n/* #viewButton{\r\n    font-weight: 600;\r\n    background: #34b7f1;\r\n    color: #fffefe;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n  box-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n  12px 12px 14px rgba(0, 0, 0, 0.2);\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2Nob29zZS1mb3IvY2hvb3NlLWZvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBOzs7OztLQUtLO0FBQ0w7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsd0JBQXdCO0VBQzFCO21DQUNpQztFQUNqQztBQUNGO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CLENBQUMsc0JBQXNCO0FBQzlDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQztBQUNBOzs7Ozs7OztLQVFLIiwiZmlsZSI6InNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2Nob29zZS1mb3IvY2hvb3NlLWZvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLyogOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcclxuICB9ICovXHJcbm1haW57XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICMzNTM2MzVkNztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDNweCAwcHg7XHJcbn1cclxuLmJ1dHRvbm57XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRiN2YxIWltcG9ydGFudDtcclxuICAgIGNvbG9yOndoaXRlIWltcG9ydGFudDtcclxufVxyXG4udmlld0J1dHRvbntcclxuICAgIGJhY2tncm91bmQ6d2hpdGUhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IzQzNDU0NmRhIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjo4cHg7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMzRiN2YxO1xyXG4gIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDE0cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxyXG4gIDEycHggMTJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbi5idG5EaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDMwcHggYXV0bzsgXHJcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNjg1KVxyXG59XHJcbi5idG5EaXYgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjY2YzY7XHJcbiAgICBwYWRkaW5nOjlweCAzMnB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbiN0cnVlY2FsbGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzo4cHggMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDkyLCA5MCwgOTAsIDAuNzg4KTtcclxufVxyXG4vKiAjdmlld0J1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xyXG4gICAgY29sb3I6ICNmZmZlZmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDE0cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxyXG4gIDEycHggMTJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9ICovIl19 */");

/***/ }),

/***/ "./src/app/compatibility-form/choose-for/choose-for.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/compatibility-form/choose-for/choose-for.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChooseForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseForComponent", function() { return ChooseForComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ChooseForComponent = class ChooseForComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.Relation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
    }
    ngOnInit() {
        this.Relation.valueChanges.subscribe((value) => {
            this.dialogRef.close({
                relation: value,
            });
        });
    }
    setValue(index, a) {
        let buttonn = document.querySelector('.' + a);
        buttonn.classList.remove('.viewButton');
        buttonn.classList.add('.buttonn');
        setTimeout(() => {
            this.Relation.patchValue(this.createProfile[index]);
        }, 20);
    }
};
ChooseForComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
ChooseForComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-for',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./choose-for.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/choose-for/choose-for.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./choose-for.component.css */ "./src/app/compatibility-form/choose-for/choose-for.component.css")).default]
    })
], ChooseForComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-form-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-form-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CompatibilityFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityFormRoutingModule", function() { return CompatibilityFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compatibility-form.component */ "./src/app/compatibility-form/compatibility-form.component.ts");
/* harmony import */ var _compatibility_verify_compatibility_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compatibility-verify/compatibility-verify.component */ "./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/compatibility-form/thank-you/thank-you.component.ts");






const routes = [
    {
        path: '',
        component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"]
    },
    {
        path: 'compatibility-verify',
        component: _compatibility_verify_compatibility_verify_component__WEBPACK_IMPORTED_MODULE_4__["CompatibilityVerifyComponent"]
    },
    {
        path: 'thank-you',
        component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__["ThankYouComponent"]
    },
    { path: ':appMobile', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
    { path: 'skip', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
    { path: ':id/:leadId/:templeId', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
    { path: ':id/:leadId/:templeId/:redParam', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
    { path: ':id/:leadId/:templeId/:fourthParam/:fifthParam', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
    { path: ':mobile/:leadId/:templeId/:enqDate/:source/:extra', component: _compatibility_form_component__WEBPACK_IMPORTED_MODULE_3__["CompatibilityFormComponent"] },
];
let CompatibilityFormRoutingModule = class CompatibilityFormRoutingModule {
};
CompatibilityFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompatibilityFormRoutingModule);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.fixToolBar {\r\n  background-color: #ffffff;\r\n}\r\n.compatibility-form-holder{\r\n  background-image: linear-gradient(180deg, #FFFFFF 0%, #DCF1FA 100%);\r\n}\r\n.logo{\r\n  width:186px;\r\n  height:93px;\r\n  position: relative;\r\n  top:0;\r\n  left:0;\r\n}\r\na{\r\n  width:100%;\r\n}\r\n.register-btn {\r\n  position:fixed;\r\n  bottom:0;\r\n  z-index:100;\r\n  width:80%;\r\n  height:50px;\r\n  color:white;\r\n  text-align:center;\r\n  align-items:center;\r\n  border:none;\r\n  outline:none;\r\n  background-color: #4EB7E6;\r\n  border-radius:8px;\r\n}\r\n.whyus{\r\n    margin-top:100px;\r\n    width:100%;\r\n}\r\n.sparkles{\r\n    height:16px;\r\n    width:11px;\r\n}\r\n#y{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n/* .feature-card-container:hover .feature-card-holder{\r\n    filter:blur(20px);\r\n    transform:scale(0.9);\r\n    opacity:0.5;\r\n} */\r\n.feature-card-container .feature-card-holder:hover{\r\n    -webkit-filter:blur(0px);\r\n            filter:blur(0px);\r\n    transform:scale(1.1);\r\n    opacity:1;\r\n}\r\n.feature-card-container .feature-card-holder{\r\n    border-radius:10px;\r\n    padding:10px;\r\n    transition:0.5s;\r\n}\r\n.header{\r\n    background-size: cover;\r\n}\r\ndiv,.row,.col{\r\n    margin:0;\r\n    top:0;\r\n    padding:0;\r\n}\r\n.slide{\r\n    background-color:transparent; \r\n}\r\n.carousel-div{\r\n    margin-top:40px;\r\n}\r\n.featureCard2{\r\n    width: 80%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    background-color:transparent;\r\n    border:none;\r\n    box-shadow:none;\r\n}\r\n.feature2Img{\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n.feture2Img:hover{\r\n    -webkit-animation:big 3s 1;\r\n            animation:big 3s 1;\r\n}\r\n@-webkit-keyframes big{\r\n    25% {\r\n        transform: scale(1.5);\r\n      }\r\n      50% {\r\n        transform: scale(1.25);\r\n      }\r\n      75% {\r\n        transform: scale(2);\r\n      }\r\n      100% {\r\n        transform:scale(1.75);\r\n      }\r\n}\r\n@keyframes big{\r\n    25% {\r\n        transform: scale(1.5);\r\n      }\r\n      50% {\r\n        transform: scale(1.25);\r\n      }\r\n      75% {\r\n        transform: scale(2);\r\n      }\r\n      100% {\r\n        transform:scale(1.75);\r\n      }\r\n}\r\n.temple-card{\r\n    /* height:45vh; */\r\n    overflow:hidden;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    /* width:100%; */\r\n}\r\n.feature-card-container{\r\n\r\n}\r\n.feature-card-holder{\r\n    \r\n}\r\n.wrapper-text p{\r\n    opacity: 0;\r\n}\r\n.wrapper-text{\r\n    opacity: 0;\r\n    -webkit-animation:ani2 1s ease-out forwards;\r\n            animation:ani2 1s ease-out forwards;\r\n}\r\n.wrapper-text p{\r\n    -webkit-animation:ani2 0.75s ease-out 3s forwards;\r\n            animation:ani2 0.75s ease-out 3s forwards;\r\n}\r\n.container{\r\n    margin-top:50px;\r\n}\r\n@media only screen and (max-width: 575px){\r\n  h2{\r\n    font-size:18px;\r\n    font-weight:bold;\r\n    margin-top:60px;\r\n  }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    img{\r\n        width:200px;\r\n        height:200px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n    h1{\r\n        font-size:24px;\r\n    }\r\n}\r\n@media only screen and (min-width: 576px){\r\n    \r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    img{\r\n        width:250px;\r\n        height:250px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    img{\r\n        width:200px;\r\n        height:200px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px){\r\n    \r\n    img{\r\n        width:300px;\r\n        height:300px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n    img{\r\n        width:370px;\r\n        height:370px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        text-align:center;\r\n        font-weight:500;\r\n    }\r\n}\r\n.fixToolBar {\r\n  background-color: #ffffff;\r\n}\r\n.textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\nmain{\r\n  font-family: 'Gotham Rounded Book',Roboto, \"Helvetica Neue\", sans-serif !important; \r\n  background-size: cover;\r\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n.mat-stepper-horizontal{\r\n  background-color: white !important;\r\n}\r\ninput.form-control.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\nselect.form-control.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\n::ng-deep .mat-step-label{\r\n  color: black !important;\r\n}\r\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done, .mat-step-header .mat-step-icon-state-edit{\r\n  background-color: #34b7f1 !important;\r\n  }\r\n::ng-deep .mat-stepper-horizontal-line {\r\n    border-top-color:black !important;\r\n    width: 80%;\r\n  }\r\n::ng-deep .mat-step-icon {\r\nbackground-color: rgba(0,0,0,.6) !important;\r\n}\r\n::ng-deep .mat-select-value {\r\n    color: black !important;\r\n}\r\n::ng-deep .mat-checkbox-inner-container{\r\n  border: 1px solid black;\r\n}\r\n.fieldFit{\r\n  height: 45px;\r\n  margin-bottom: 0.6rem;\r\n}\r\n::ng-deep .mat-hint{\r\n  color: rgba(0,0,0,.6);\r\n  padding-bottom: 5px;\r\n}\r\n.impNote {\r\n  margin: 5px 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n}\r\n.impNoteMain {\r\n  margin: 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  line-height: 25px;\r\n}\r\n.matSelect{\r\n  margin-top: 10px;\r\n}\r\n#viewButton{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\nbox-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n12px 12px 14px rgba(0, 0, 0, 0.2);\r\n}\r\n.customBackground{\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background: white;\r\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n@media (max-width: 1920px) {\r\nmain {\r\n    height: 100%;\r\n    overflow: auto;\r\n    }\r\n    select {\r\n\r\n        /* styling */\r\n        background-color: white;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        font: inherit;\r\n        padding: 5px 30px 5px 3px;\r\n      \r\n        /* reset */\r\n      \r\n        margin: 0;\r\n        box-sizing: border-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n      }\r\n      \r\n      \r\n      /* arrows */\r\n      \r\n      .classic {\r\n        background-image:\r\n          linear-gradient(45deg, transparent 50%, blue 50%),\r\n          linear-gradient(135deg, blue 50%, transparent 50%),\r\n          linear-gradient(to right, white, skyblue);\r\n        background-position:\r\n          calc(100% - 20px) calc(1em + 2px),\r\n          calc(100% - 15px) calc(1em + 2px),\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border: 1px solid #c8c8c8;\r\n        /* background:#f2f2f2 */\r\n      }\r\n      \r\n      .classic:focus {\r\n        background-image:\r\n          linear-gradient(45deg, white 50%, transparent 50%),\r\n          linear-gradient(135deg, transparent 50%, white 50%),\r\n          linear-gradient(to right, white, gray);\r\n        background-position:\r\n          calc(100% - 15px) 1em,\r\n          calc(100% - 20px) 1em,\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border-color: grey;\r\n        outline: 0;\r\n        /* background:#f2f2f2 */\r\n      }\r\n      .customBackground{\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n        background: white;\r\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjtBQUNyRjtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsbUVBQW1FO0FBQ3JFO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsTUFBTTtBQUNSO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBOzs7O0dBSUc7QUFDSDtJQUNJLHdCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFFBQVE7SUFDUixLQUFLO0lBQ0wsU0FBUztBQUNiO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQWtCO1lBQWxCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7TUFDdkI7TUFDQTtRQUNFLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxxQkFBcUI7TUFDdkI7QUFDTjtBQWJBO0lBQ0k7UUFDSSxxQkFBcUI7TUFDdkI7TUFDQTtRQUNFLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCO01BQ0E7UUFDRSxxQkFBcUI7TUFDdkI7QUFDTjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUdBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3QztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7SUFDRTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUNBQWlDO0lBQ3JDO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQ0FBaUM7SUFDckM7QUFDSjtBQUNBOztJQUVJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQ0FBaUM7SUFDckM7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0FBQ0o7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7QUFDTDtBQUNBO0VBQ0Usa0ZBQWtGO0VBQ2xGLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDO0FBQ0E7SUFDRSxpQ0FBaUM7SUFDakMsVUFBVTtFQUNaO0FBQ0Y7QUFDQSwyQ0FBMkM7QUFDM0M7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtpQ0FDaUM7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCO21DQUNpQztBQUNuQztBQUVBO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkO0lBQ0E7O1FBRUksWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYix5QkFBeUI7O1FBRXpCLFVBQVU7O1FBRVYsU0FBUztRQUdULHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIscUJBQXFCO01BQ3ZCOzs7TUFHQSxXQUFXOztNQUVYO1FBQ0U7OzttREFHMkM7UUFDM0M7OztnQkFHUTtRQUNSOzs7cUJBR2E7UUFDYiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHVCQUF1QjtNQUN6Qjs7TUFFQTtRQUNFOzs7Z0RBR3dDO1FBQ3hDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsdUJBQXVCO01BQ3pCO01BQ0E7UUFDRSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQjt5Q0FDaUM7TUFDbkM7QUFDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS9jb21wYXRpYmlsaXR5LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5maXhUb29sQmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb21wYXRpYmlsaXR5LWZvcm0taG9sZGVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkZGRkYgMCUsICNEQ0YxRkEgMTAwJSk7XHJcbn1cclxuLmxvZ297XHJcbiAgd2lkdGg6MTg2cHg7XHJcbiAgaGVpZ2h0OjkzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxufVxyXG5he1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLnJlZ2lzdGVyLWJ0biB7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgYm90dG9tOjA7XHJcbiAgei1pbmRleDoxMDA7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICBib3JkZXI6bm9uZTtcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQjdFNjtcclxuICBib3JkZXItcmFkaXVzOjhweDtcclxufVxyXG4ud2h5dXN7XHJcbiAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uc3BhcmtsZXN7XHJcbiAgICBoZWlnaHQ6MTZweDtcclxuICAgIHdpZHRoOjExcHg7XHJcbn1cclxuI3l7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDoyMDBweDtcclxufVxyXG4vKiAuZmVhdHVyZS1jYXJkLWNvbnRhaW5lcjpob3ZlciAuZmVhdHVyZS1jYXJkLWhvbGRlcntcclxuICAgIGZpbHRlcjpibHVyKDIwcHgpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOSk7XHJcbiAgICBvcGFjaXR5OjAuNTtcclxufSAqL1xyXG4uZmVhdHVyZS1jYXJkLWNvbnRhaW5lciAuZmVhdHVyZS1jYXJkLWhvbGRlcjpob3ZlcntcclxuICAgIGZpbHRlcjpibHVyKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG4uZmVhdHVyZS1jYXJkLWNvbnRhaW5lciAuZmVhdHVyZS1jYXJkLWhvbGRlcntcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHRyYW5zaXRpb246MC41cztcclxufVxyXG4uaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5kaXYsLnJvdywuY29se1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0b3A6MDtcclxuICAgIHBhZGRpbmc6MDtcclxufVxyXG4uc2xpZGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyBcclxufVxyXG4uY2Fyb3VzZWwtZGl2e1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4O1xyXG59XHJcbi5mZWF0dXJlQ2FyZDJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lO1xyXG59XHJcbi5mZWF0dXJlMkltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uZmV0dXJlMkltZzpob3ZlcntcclxuICAgIGFuaW1hdGlvbjpiaWcgM3MgMTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJpZ3tcclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgICAgfVxyXG4gICAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuNzUpO1xyXG4gICAgICB9XHJcbn1cclxuLnRlbXBsZS1jYXJke1xyXG4gICAgLyogaGVpZ2h0OjQ1dmg7ICovXHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC8qIHdpZHRoOjEwMCU7ICovXHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQtY29udGFpbmVye1xyXG5cclxufVxyXG4uZmVhdHVyZS1jYXJkLWhvbGRlcntcclxuICAgIFxyXG59XHJcblxyXG5cclxuLndyYXBwZXItdGV4dCBwe1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4ud3JhcHBlci10ZXh0e1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjphbmkyIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcbi53cmFwcGVyLXRleHQgcHtcclxuICAgIGFuaW1hdGlvbjphbmkyIDAuNzVzIGVhc2Utb3V0IDNzIGZvcndhcmRzO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIFxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyNTBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIFxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDozMDBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjM3MHB4O1xyXG4gICAgICAgIGhlaWdodDozNzBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpeFRvb2xCYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRleHRSZWdpc3RlciB7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOiAjMjg1ZmRkXHJcbn1cclxubWFpbntcclxuICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkIEJvb2snLFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7IFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0LmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbnNlbGVjdC5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWxhYmVse1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRiN2YxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG46Om5nLWRlZXAgLm1hdC1zdGVwLWljb24ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uZmllbGRGaXR7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1oaW50e1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaW1wTm90ZSB7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxufVxyXG4uaW1wTm90ZU1haW4ge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGNvbG9yOiAjNzM3MzczO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLm1hdFNlbGVjdHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4jdmlld0J1dHRvbntcclxuICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuYm94LXNoYWRvdzogLTEycHggLTEycHggMTRweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXHJcbjEycHggMTJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uY3VzdG9tQmFja2dyb3VuZHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4xMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE5MjBweCkge1xyXG5tYWluIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0IHtcclxuXHJcbiAgICAgICAgLyogc3R5bGluZyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggM3B4O1xyXG4gICAgICBcclxuICAgICAgICAvKiByZXNldCAqL1xyXG4gICAgICBcclxuICAgICAgICBtYXJnaW46IDA7ICAgICAgXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvKiBhcnJvd3MgKi9cclxuICAgICAgXHJcbiAgICAgIC5jbGFzc2ljIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGJsdWUgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGJsdWUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgc2t5Ymx1ZSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICAgIDEwMCUgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzhjODtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiNmMmYyZjIgKi9cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNsYXNzaWM6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGdyYXkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sXHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXHJcbiAgICAgICAgICAxMDAlIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOlxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAyLjVlbSAyLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQ6I2YyZjJmMiAqL1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0b21CYWNrZ3JvdW5ke1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDMpLFxyXG4gICAgICAxMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgfVxyXG59XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-form.component.ts ***!
  \********************************************************************/
/*! exports provided: _filter, CompatibilityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityFormComponent", function() { return CompatibilityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile */ "./src/app/compatibility-form/profile.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var _forms_message_dialog_forms_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms-message-dialog/forms-message-dialog.component */ "./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language.service */ "./src/app/language.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../verify-otp/verify-otp.component */ "./src/app/verify-otp/verify-otp.component.ts");
/* harmony import */ var _register_with_register_with_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register-with/register-with.component */ "./src/app/compatibility-form/register-with/register-with.component.ts");
/* harmony import */ var _choose_for_choose_for_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./choose-for/choose-for.component */ "./src/app/compatibility-form/choose-for/choose-for.component.ts");
/* harmony import */ var _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../find-open-history-profile.service */ "./src/app/find-open-history-profile.service.ts");




















const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let CompatibilityFormComponent = class CompatibilityFormComponent {
    constructor(http, dialog, _formBuilder, router, notification, fourPageService, matDialog, breakPointObserver, languageService, route, ngxNotificationService, spinner, itemService) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.notification = notification;
        this.fourPageService = fourPageService;
        this.matDialog = matDialog;
        this.breakPointObserver = breakPointObserver;
        this.languageService = languageService;
        this.route = route;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.itemService = itemService;
        this.auto = false;
        this.mobileBreakpoint = 768;
        this.secondName = false;
        this.showHeight = false;
        this.time = {
            hour: 13,
            minute: 30
        };
        this.MaritalStatus = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
        this.startDate = new Date(1985, 0, 1);
        this.nextClickedOne = false;
        // Religion and Caste
        this.Religions = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
        this.getcastes = [];
        this.Caste = false;
        this.AllCastes = false;
        this.isLeadIsZero = false;
        this.photos = [];
        this.photoIndices = [];
        this.photosMale = [];
        this.photosFemale = [];
        // Height
        // tslint:disable-next-line: max-line-length
        this.Heights = ['4 feet', '4 feet 1 inches', '4 feet 2 inches', '4 feet 3 inches', '4 feet 4 inches', '4 feet 5 inches', '4 feet 6 inches', '4 feet 7 inches', '4 feet 8 inches', '4 feet 9 inches', '4 feet 10 inches', '4 feet 11 inches', '5 feet', '5 feet 1 inches', '5 feet 2 inches', '5 feet 3 inches', '5 feet 4 inches', '5 feet 5 inches', '5 feet 6 inches', '5 feet 7 inches', '5 feet 8 inches', '5 feet 9 inches', '5 feet 10 inches', '5 feet 11 inches', '6 feet', '6 feet 1 inches', '6 feet 2 inches', '6 feet 3 inches', '6 feet 4 inches', '6 feet 5 inches', '6 feet 6 inches', '6 feet 7 inches', '6 feet 8 inches', '6 feet 9 inches', '6 feet 10 inches', '6 feet 11 inches', '7 feet'];
        // tslint:disable-next-line: max-line-length
        this.Heights1 = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
        this.changeNumber = false;
        // tslint:disable-next-line: max-line-length
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
        // tslint:disable-next-line: max-line-length
        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = [
            '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
            '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
            '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
            '2001', '2002'
        ];
        this.errors = [];
        this.authMobileNumberStatus = false;
        this.formTwo = false;
        this.formThree = false;
        this.formFour = false;
        this.userProfile = new _profile__WEBPACK_IMPORTED_MODULE_8__["Profile"]();
        this.isLinear = true;
        this.isDisable = false;
        this.isAllCastePref = false;
        // stop true caller polling
        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.pollingCount = 0;
        this.hideMobileNumber = false;
        this.mainContainerId = 'compatibilityStepper';
        this.truecallerExists = false;
        this.fetchedFbProfilePic = null;
        this.alreadyExists = false;
        /** list of designation filtered by search keyword for option groups */
        this.filteredCastes = new rxjs__WEBPACK_IMPORTED_MODULE_10__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        // disable btn if user is already registered
        this.disableNextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](false);
        this.disableNext$ = this.disableNextSubject.asObservable();
        this.incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];
        this.customOptions = {
            loop: true,
            autoplay: this.auto,
            center: true,
            // nav:true,
            dots: true,
            // navText:["<p style= `background-color:black;`>h</p>","<p>b</p>"],
            autoWidth: true,
            // merge: true,
            // mergeFit: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 3,
                }
            }
        };
        this.scroll = (event) => {
            this.scrollAppear();
        };
        this.PageOne = this._formBuilder.group({
            // tslint:disable-next-line: max-line-length
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            lastName: [''],
            // phone: [localStorage.getItem('RegisterNumber') ? localStorage.getItem('RegisterNumber') : ''
            // , Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9,11}')])],
            phone: ['132',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            email: [''],
            Relation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_date: ['01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_month: ['January', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            birth_year: ['1980', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Weight: [''],
            MaritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Castes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            CasteCtrl: (null),
            disabledPart: ['']
        });
    }
    ngOnDestroy() {
        // truecaller polling is active and user closes the page.
        this.stopPolling.next();
        // destroy search for caste
        this.onDestroy.next();
        this.onDestroy.complete();
    }
    ngAfterViewInit() {
        // setTimeout(() => {
        //   if (!this.fourPageService.getUserThrough()) {
        //     this.openChooseFor();
        //   }
        // }, 1500);
    }
    ngAfterViewChecked() {
        if (this.fourPageService.getUserThrough()) {
            this.mainContainerId = 'sd';
        }
    }
    scrollAppear() {
        let whyUs = document.querySelector('.whyus');
        let position = whyUs.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        console.log(position, screenPosition);
        if (position < screenPosition - 300) {
            this.auto = true;
        }
        else if (position > screenPosition) {
            this.auto = true;
        }
    }
    resize() {
        this.innerWidth = window.innerWidth;
        return this.innerWidth;
    }
    detectMobileScreen() {
        window.onload = this.resize;
        window.onresize = this.resize;
        if (this.resize() < this.mobileBreakpoint) {
            this.mobileScreen = true;
        }
        else {
            this.mobileScreen = false;
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.detectMobileScreen();
            window.addEventListener('scroll', this.scroll, true);
            if (localStorage.getItem('RegisterNumber')) {
                this.PageOne.controls.phone.setValue(localStorage.getItem('RegisterNumber'));
                this.disabledPhoneNumber = localStorage.getItem('RegisterNumber');
                setTimeout(() => {
                    const countryBtn = document.querySelector('ngx-mat-intl-tel-input button');
                    if (countryBtn) {
                        countryBtn.disabled = true;
                    }
                    this.PageOne.controls.phone.disable();
                }, 1000);
                // this.hideMobileNumber = true;
                console.log(localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length));
            }
            localStorage.clear();
            this.languageService.setRegisterLang();
            this.fourPageService.formCompleted.subscribe((complete) => {
                if (complete === true) {
                    this.formTwo = true;
                }
            });
            this.fourPageService.formTwoGroup.subscribe((formGroup) => {
                if (formGroup) {
                    this.PageTwo = formGroup;
                }
            });
            this.fourPageService.form3Completed.subscribe((complete) => {
                if (complete === true) {
                    this.formThree = true;
                }
            });
            this.fourPageService.form4Completed.subscribe((complete) => {
                if (complete === true) {
                    this.formFour = true;
                    console.log('formFour', this.formFour);
                }
            });
            // for team user we will make page non linear from page two...because page one details are compulsory
            this.fourPageService.makeLinear.subscribe((makeLinear) => {
                console.log(makeLinear);
                if (makeLinear === true) {
                    this.isLinear = false;
                    this.fourPageService.setUserThrough(true);
                    console.log(this.isLinear);
                }
            });
            // for skippable
            this.route.url.subscribe(link => {
                console.log(link);
                if (link && link[0] && link[0].path) {
                    console.log(link[0].path);
                    this.fourPageService.setSkippable(true);
                }
            });
            // get all castes before get the data of the profile
            yield this.getAllCaste();
            this.route.paramMap.subscribe((route) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(route.params);
                if (route) {
                    if (route.params.id) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('getListId', route.params.id);
                    }
                    else if (route.params.mobile) {
                        this.PageOne.patchValue({
                            phone: this.setMobileNumber(route.params.mobile)
                        });
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('getListMobile', route.params.mobile);
                    }
                    else {
                        this.fourPageService.setUserThrough(false);
                        localStorage.setItem('getListId', '');
                        localStorage.setItem('getListMobile', '');
                    }
                    if (route.params.leadId) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('getListLeadId', route.params.leadId);
                        this.isLeadIsZero = route.params.leadId === '0' ? true : false;
                    }
                    else {
                        this.fourPageService.setUserThrough(false);
                        localStorage.setItem('getListLeadId', '');
                    }
                    if (route.params.templeId) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('getListTempleId', route.params.templeId);
                    }
                    if (route.params.fourthParam) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('fourthParam', route.params.fourthParam);
                    }
                    if (route.params.fifthParam) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('fifthParam', route.params.fifthParam);
                    }
                    if (route.params.redParam) {
                        localStorage.setItem('redParam', route.params.redParam);
                        this.fourPageService.showApproveBtn = true;
                    }
                    if (route.params.enqDate) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('enqDate', route.params.enqDate);
                    }
                    if (route.params.source) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('getListSource', route.params.source);
                    }
                    if (route.params.extra) {
                        this.fourPageService.setUserThrough(true);
                        localStorage.setItem('extra', route.params.extra);
                    }
                    if (route.params.id) {
                        setTimeout(() => { this.getProfile(); }, 3000);
                    }
                }
                if (this.router.url.match('code=')) {
                    this.PageOne.patchValue({
                        Relation: 'Myself',
                    });
                    const codeIndex = this.router.url.indexOf('code=');
                    const code = this.router.url.substring(codeIndex + 5);
                    console.log(code);
                    this.getFacebookAccessToken(code);
                }
                else {
                    if (this.itemService.compatibilityGender) {
                        this.PageOne.patchValue({
                            gender: this.itemService.compatibilityGender,
                        });
                    }
                    if (this.itemService.compatibilityLookingFor) {
                        this.PageOne.patchValue({
                            Relation: this.itemService.compatibilityLookingFor,
                        });
                        this.setGender();
                    }
                    else if (!this.fourPageService.getUserThrough()) {
                        this.openChooseFor();
                    }
                }
                this.http.get(`https://partner.hansmatrimony.com/api/getPhotos?gender=Male`).subscribe((response) => {
                    if (response.photos) {
                        this.photosMale = response.photos;
                        for (const v of response.photos) {
                            this.photos.push(v);
                            if (this.photos.length >= 10) {
                                break;
                            }
                        }
                    }
                }, (error) => {
                    console.log('error occurred occurred while fetching the photos');
                });
                this.http.get(`https://partner.hansmatrimony.com/api/getPhotos?gender=Female`).subscribe((response) => {
                    if (response.photos) {
                        this.photosFemale = [];
                        this.photosFemale = response.photos;
                        for (const v of response.photos) {
                            this.photos.push(v);
                            if (this.photos.length >= 20) {
                                break;
                            }
                        }
                    }
                }, (error) => {
                    console.log('error occurred occurred while fetchignthe photos');
                });
                // console.log(this.photosFemale, this.photosMale, this.photos);
                // when user comes from app to webview four page reg
                if (route.params.appMobile) {
                    this.PageOne.patchValue({
                        phone: route.params.appMobile
                    });
                }
            }));
            this.spinner.hide();
            localStorage.setItem('id', '');
            localStorage.setItem('gender', '');
            localStorage.setItem('mobile_number', '');
            localStorage.setItem('selectedCaste', '');
            if (this.fourPageService.getUserThrough()) {
                this.openMessageDialog();
            }
            console.log(this.isLinear);
            this.generateRandomIndices(20);
            this.PageOne.get('gender').valueChanges.subscribe(value => {
                console.log('here is the gender value being set', value);
                this.photos = value === 'Male' ? this.photosFemale : this.photosMale;
                this.generateRandomIndices(20);
            });
            // this.PageOne.get('Relation').valueChanges.subscribe((value) => {
            //   this.setGender();
            // });
            if (this.fourPageService.getUserThrough()) {
                this.mainContainerId = 'sd';
            }
        });
    }
    generateRandomIndices(j) {
        this.photoIndices = [];
        while (this.photoIndices.length < 5) {
            const newNum = Math.floor(Math.random() * (j - 0));
            if (!this.photoIndices.includes(newNum)) {
                this.photoIndices.push(newNum);
            }
        }
    }
    getFacebookAccessToken(code) {
        this.http.get(`https://partner.hansmatrimony.com/api/getAccessToken?redirect_uri=https://hansmatrimony.com/fourReg&code=${code}`)
            .subscribe((response) => {
            console.log(response);
            const profile = JSON.parse(response.profile);
            this.getFbDataThroughToken(profile.data.user_id, response.access_token);
        }, err => {
            console.log(err);
            this.router.navigateByUrl('fourReg');
        });
    }
    filterCastes() {
        if (!this.getcastes) {
            return;
        }
        // get the search keyword
        let search = this.PageOne.controls.CasteCtrl.value;
        if (!search) {
            this.filteredCastes.next(this.getcastes.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        const casteResults = this.getcastes.filter(bank => bank.toLowerCase().indexOf(search) > -1);
        if (casteResults.length !== 0) {
            this.filteredCastes.next(casteResults);
        }
        // else {
        //   this.filteredCastes.next(this.getcastes.filter(bank => bank.toLowerCase().indexOf('other') > -1));
        // }
    }
    // event on change of input field
    inputFieldChanged(fieldName) {
        this.secondName = true;
        console.log(this.secondName);
        this.generateRandomIndices(20);
        console.log(`${fieldName} changed`, this.PageOne.value[fieldName]);
        switch (fieldName) {
            case 'email':
                this.analyticsEvent('Four Page Registration Page One Email Changed');
                break;
            case 'Weight':
                this.analyticsEvent('Four Page Registration Page One Weight Changed');
                break;
            case 'firstName':
                this.analyticsEvent('Four Page Registration Page One First Name Changed');
                break;
            case 'lastName':
                this.analyticsEvent('Four Page Registration Page One Last Name Changed');
                break;
            default:
                break;
        }
        // if profile completed go to next page
        this.goToNextPage();
    }
    // event on change of select field
    selectFieldChange(fieldName) {
        console.log(`${fieldName} changed`, this.PageOne.value[fieldName]);
        switch (fieldName) {
            case 'birth_date':
                this.analyticsEvent('Four Page Registration Page One Birth Date Changed');
                break;
            case 'birth_month':
                this.analyticsEvent('Four Page Registration Page One Birth Month Changed');
                break;
            case 'birth_year':
                this.analyticsEvent('Four Page Registration Page One Birth Year Changed');
                break;
            case 'gender':
                this.analyticsEvent('Four Page Registration Page One Gender Changed');
                break;
            case 'Height':
                this.analyticsEvent('Four Page Registration Page One Height Changed');
                break;
            case 'MaritalStatus':
                this.analyticsEvent('Four Page Registration Page One Marital Status Changed');
                break;
            case 'Castes':
                this.analyticsEvent('Four Page Registration Page One Caste Changed');
                break;
            default:
                break;
        }
        if (this.PageOne.value.birth_date && this.PageOne.value.birth_month && this.PageOne.value.birth_year) {
            this.showHeight = true;
            console.log(this.showHeight);
        }
        // if profile completed go to next page
        this.goToNextPage();
    }
    // 0 -> new User/not registered, 1-> Registered , 2-> Partially Registered User
    mobileNumberChanged() {
        if (localStorage.getItem('getListId') === null || localStorage.getItem('getListId') === '') {
            const number = this.PageOne.value.phone;
            console.log(number);
            console.log(this.authMobileNumberStatus);
            // tslint:disable-next-line: max-line-length
            this.http.get(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: number, ['fcm_id']: this.notification.getCurrentToken() } }).subscribe(res => {
                console.log(res);
                if (res) {
                    this.authData = res;
                    if (res.registered === 1) {
                        this.ngxNotificationService.success('Already Registered');
                        this.disableNextSubject.next(true);
                        if (this.pollingCount > 0 && this.truecallerExists) {
                            localStorage.setItem('authData', JSON.stringify(res));
                            localStorage.setItem('mobile_number', this.PageOne.value.phone);
                            localStorage.setItem('is_lead', res.is_lead);
                            localStorage.setItem('id', res.id);
                            this.router.navigateByUrl('chat');
                        }
                        else {
                            this.alreadyExists = true;
                            this.openVerificationDialog(res.is_lead);
                        }
                        this.spinner.show();
                    }
                    else if (res.registered === 2) {
                        this.disableNextSubject.next(false);
                        localStorage.setItem('RegisterNumber', number);
                        this.ngxNotificationService.info('Please complete the form and update');
                        this.analyticsEvent('Four Page Registration Page One Mobile Number Changed');
                        // if profile completed go to next page
                        this.goToNextPage();
                    }
                    else {
                        this.disableNextSubject.next(false);
                        localStorage.setItem('RegisterNumber', number);
                        // signifies that new user has entered his mobile number.
                        this.analyticsEvent('Four Page Registration Page Zero');
                        console.log('New User');
                        this.analyticsEvent('Four Page Registration Page One Mobile Number Changed');
                        // gtag app + web
                        window.gtag('config', 'G-1ES443XD0F', {
                            user_id: number
                        });
                        // if profile completed go to next page
                        this.goToNextPage();
                    }
                }
                this.spinner.hide();
            }, err => {
                this.spinner.hide();
                console.log(err);
            });
        }
    }
    goToNextPage() {
        // if (!this.PageOne.valid) {
        //   return;
        // }
        // const button = document.querySelector<HTMLButtonElement>('#viewButton');
        // button.click();
    }
    openVerificationDialog(isLead) {
        const dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.hasBackdrop = true;
        this.breakPointObserver.observe([
            '(min-width: 1024px)'
        ]).subscribe(result => {
            if (result.matches) {
                console.log('screen is greater than  1024px');
                dialogConfig.maxWidth = '30vw';
                dialogConfig.maxHeight = '80vh';
                dialogConfig.disableClose = false;
            }
            else {
                console.log('screen is less than  1024px');
                dialogConfig.minWidth = '90vw';
                dialogConfig.maxHeight = '80vh';
                dialogConfig.disableClose = false;
            }
        });
        dialogConfig.data = {
            mobile: this.PageOne.value.phone,
            is_lead: isLead
        };
        const dialogRef = this.dialog.open(_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_16__["VerifyOtpComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((data) => {
            if (data) {
                if (data.success === 'verified') {
                    localStorage.setItem('mobile_number', this.PageOne.value.phone);
                    localStorage.setItem('is_lead', data.is_lead);
                    if (this.authData) {
                        localStorage.setItem('authData', JSON.stringify(this.authData));
                        localStorage.setItem('id', this.authData.id);
                    }
                    this.router.navigateByUrl('chat');
                }
                else {
                    return;
                }
            }
        });
    }
    getAllCaste() {
        return new Promise((res, rej) => {
            this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res) => {
                this.getcastes = [...res, 'All'];
                this.fourPageService.setAllCastes(this.getcastes);
                if (this.getcastes) {
                    // load the initial caste list
                    this.filteredCastes.next(this.getcastes.slice(0, this.getcastes.length));
                    // listen for search field value changes
                    this.PageOne.controls.CasteCtrl.valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.onDestroy))
                        .subscribe(() => {
                        this.filterCastes();
                    });
                }
            });
            if (this.PageOne.get('Castes').value && this.PageOne.get('Castes').value !== '') {
                this.casteo = this.PageOne.get('Castes').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this._Castefilter(value)));
            }
            else {
                this.PageOne.patchValue({
                    Castes: ''
                });
                this.casteo = this.PageOne.get('Castes').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => this._Castefilter(value)));
            }
            res(this.getcastes);
        });
    }
    setNewFormGroup() {
        if (localStorage.getItem('getListId') || localStorage.getItem('getListMobile')) {
            this.PageOne = this._formBuilder.group({
                // tslint:disable-next-line: max-line-length
                firstName: [''],
                lastName: [''],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(0/91)?[6-9][0-9]{9}')])],
                email: [''],
                Relation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                birth_date: ['01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                birth_month: ['January', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                birth_year: ['1980', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                Height: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                Weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(150)])],
                MaritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                Religion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                Castes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                CasteCtrl: (null),
                disabledPart: ['']
            });
        }
    }
    firstStep() {
        console.log(this.PageOne.value);
        this.analyticsEvent('Page One Clicked');
        this.nextClickedOne = true;
        if (this.alreadyExists) {
            console.log(this.alreadyExists);
            this.openVerificationDialog(this.authData.is_lead);
            return;
        }
        console.log(this.PageOne.value.email);
        this.errors = [];
        console.log('date', this.PageOne.value.birth_date);
        console.log('month', this.month.indexOf(this.PageOne.value.birth_month) + 1);
        console.log('year', this.PageOne.value.birth_year);
        const phoneNumber = this.PageOne.value.phone ? this.PageOne.value.phone : this.disabledPhoneNumber ? this.disabledPhoneNumber : null;
        if (phoneNumber != null) {
            if (phoneNumber.toString().length < 10 ||
                phoneNumber.toString().length > 14) {
                console.log(this.PageOne.value.phone);
                this.ngxNotificationService.error('Enter A Valid Mobile Number');
                return;
            }
        }
        else {
            this.ngxNotificationService.error('Enter A Valid Mobile Number');
            return;
        }
        console.log(this.PageOne.value);
        if (this.PageOne.valid) {
            const date = this.PageOne.value.birth_date;
            const month = this.month.indexOf(this.PageOne.value.birth_month) + 1;
            const year = this.PageOne.value.birth_year;
            console.log(date + '-' + month + '-' + year);
            const firststepdata = new FormData();
            firststepdata.append('mobile', phoneNumber);
            if (localStorage.getItem('getListLeadId') && localStorage.getItem('getListLeadId') !== '1') {
                firststepdata.append('id', localStorage.getItem('getListId'));
                firststepdata.append('identity_number', this.profileData.profile.identity_number);
                firststepdata.append('temple_id', this.profileData.profile.temple_id);
                firststepdata.append('birth_date', year + '-' + month + '-' + date);
            }
            else {
                firststepdata.append('birth_date', date + '-' + month + '-' + year);
            }
            firststepdata.append('name', `${this.PageOne.value.firstName} ${this.PageOne.value.lastName ?
                this.PageOne.value.lastName : ''}`);
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
            if (this.PageOne.value.Weight) {
                firststepdata.append('weight', this.PageOne.value.Weight);
            }
            firststepdata.append('marital_status', this.PageOne.value.MaritalStatus);
            firststepdata.append('religion', this.PageOne.value.Religion);
            firststepdata.append('caste', this.PageOne.value.Castes);
            firststepdata.append('disability', this.isDisable ? 'yes' : null);
            firststepdata.append('disabled_part', this.PageOne.value.disabledPart);
            if (localStorage.getItem('getListSource')) {
                firststepdata.append('channel', localStorage.getItem('getListSource'));
            }
            else {
                firststepdata.append('channel', 'Web');
            }
            this.lat ? firststepdata.append('lat', this.lat)
                : firststepdata.append('lat', '');
            this.long ? firststepdata.append('long', this.long)
                : firststepdata.append('long', '');
            // if url with enqData : mode -> 3 , if with id: mode -> 2 if only with fourReg : mode -> 1
            firststepdata.append('mode', localStorage.getItem('enqDate') ? '3'
                : localStorage.getItem('getListId') ? '2' : '1');
            console.log('mobile', this.PageOne.value.phone);
            console.log('birth_date', this.birthDate);
            console.log('gender', this.PageOne.value.gender);
            console.log('height', this.Heights1[this.PageOne.value.Height]);
            console.log('marital_status', this.PageOne.value.MaritalStatus);
            console.log('religion', this.PageOne.value.Religion);
            console.log('caste', this.PageOne.value.Castes);
            if (localStorage.getItem('getListLeadId') && localStorage.getItem('getListLeadId') === '0') {
                if (this.isLeadIsZero) {
                    firststepdata.append('is_lead', '0');
                }
                // tslint:disable-next-line: max-line-length
                return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', firststepdata).subscribe((res) => {
                    console.log('first', res);
                    this.spinner.hide();
                    this.fourPageService.updateFormOneData(firststepdata);
                }, err => {
                    this.spinner.hide();
                    this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                });
            }
            else {
                // tslint:disable-next-line: max-line-length
                return this.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata).subscribe((res) => {
                    console.log('first', res);
                    if (res.status === 1) {
                        this.spinner.hide();
                        localStorage.setItem('id', res.id);
                        localStorage.setItem('gender', this.PageOne.value.gender);
                        localStorage.setItem('mobile_number', phoneNumber);
                        // if (res.isAssignToOnline) {
                        //   localStorage.setItem('isAssignToOnline', res.isAssignToOnline);
                        //   this.fourPageService.showApproveBtn = true;
                        // }
                        // if facebook profile pic is fetched
                        if (this.fetchedFbProfilePic) {
                            setTimeout(() => {
                                this.fourPageService.facebookProfilePicUploaded.emit(this.fetchedFbProfilePic);
                            }, 200);
                        }
                        this.fourPageService.updateFormOneData(firststepdata);
                        this.analyticsEvent('Four Page Registration Page One');
                    }
                    else {
                        this.spinner.hide();
                        // this.ngxNotificationService.error(res.message);
                        // update basic api status 0
                        this.analyticsEvent(`Page One Error Status 0`);
                    }
                }, err => {
                    this.spinner.hide();
                    // this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                    this.analyticsEvent(`Page One Backend Error`);
                });
            }
        }
        else {
            // tslint:disable-next-line: forin
            for (const control in this.PageOne.controls) {
                console.log(control);
                if (!this.PageOne.controls[control].valid) {
                    this.errors.push(control);
                }
            }
            if (this.errors[0]) {
                // this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
                this.analyticsEvent(`Page One Error ${this.errors[0]}`);
            }
        }
    }
    _Castefilter(value) {
        if (value != null) {
            const filterValue = value.toLowerCase();
            return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
        }
        else {
            const filterValue = 'arora';
            return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
        }
    }
    analyticsEvent(event) {
        if (!this.fourPageService.getUserThrough()) {
            window.ga('send', 'event', event, '', {
                hitCallback: () => {
                    console.log('Tracking ' + event + ' successful');
                }
            });
            // gtag app + web
            window.gtag('event', event, {
                event_callback: () => {
                    console.log('Tracking gtag ' + event + ' successful');
                }
            });
        }
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
        console.log(event.value);
        this.analyticsEvent('Four Page Registration Page One Religion Changed');
        if (event.value === 'Hindu') {
            this.Caste = true;
        }
        else {
            this.Caste = false;
            this.PageOne.patchValue({
                Castes: 'All'
            });
        }
        // if profile completed go to next page
        this.goToNextPage();
    }
    setGender() {
        console.log(this.PageOne.value.Relation);
        this.analyticsEvent('Four Page Registration Page One Looking Rista For Changed');
        this.analyticsEvent('Four Page Registration Page One Gender Changed');
        this.openRegisterWith(this.PageOne.value.Relation);
        switch (this.PageOne.value.Relation) {
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
        // if profile completed go to next page
        this.goToNextPage();
    }
    getProfile() {
        this.spinner.show();
        const leadId = localStorage.getItem('getListLeadId');
        const id = localStorage.getItem('getListId');
        console.log(id, leadId);
        const myprofileData = new FormData();
        myprofileData.append('id', id);
        myprofileData.append('contacted', '1');
        myprofileData.append('is_lead', leadId);
        // tslint:disable-next-line: max-line-length
        return this.http.post('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["timeout"])(7000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(e => {
            throw new Error('Server Timeout ' + e);
        })).subscribe((data) => {
            console.log(data);
            this.profileData = data;
            if (this.fourPageService.userThroughGetList) {
                this.setProfileValues(data);
            }
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            console.log(error);
            this.ngxNotificationService.error('Something Went Wrong');
        });
    }
    getProfilePhoto(carous, index) {
        if (carous && carous !== '' && carous !== 'null') {
            const carousel = JSON.parse(carous);
            const keys = Object.keys(carousel);
            // console.log(carousel[index]);
            if (carousel[keys[index]]) {
                return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
            }
        }
    }
    // #IMPORTANT
    // setting getProfiles to our variables so that we can also update these values and check in the last page
    setProfileValues(profileData) {
        if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
            localStorage.setItem('getListTempleId', profileData.profile.temple_id);
        }
        console.log('look here', profileData.family.father_status, profileData.family.mother_status);
        this.userProfile.name = profileData.profile.name;
        this.userProfile.mobile = profileData.family.mobile;
        localStorage.setItem('getListIdentity', profileData.profile.identity_number);
        localStorage.setItem('getListTemple', profileData.profile.temple_id);
        localStorage.setItem('getListMobile', profileData.family.mobile ? profileData.family.mobile : '');
        this.userProfile.email = profileData.family.email;
        if (profileData.family.relation === 'Mother') {
            this.userProfile.relation = 'Son';
        }
        else if (profileData.family.relation === 'Father') {
            this.userProfile.relation = 'Daughter';
        }
        else {
            this.userProfile.relation = profileData.family.relation;
        }
        this.userProfile.gender = profileData.profile.gender;
        this.userProfile.dob = profileData.profile.birth_date;
        this.userProfile.height = profileData.profile.height;
        this.userProfile.weight = profileData.profile.weight;
        this.userProfile.martialStatus = profileData.profile.marital_status;
        this.userProfile.annualIncome = this.setIncomeVals(profileData.profile.monthly_income);
        if (profileData.family.religion) {
            this.Caste = true;
        }
        this.userProfile.religion = profileData.family.religion;
        this.userProfile.caste = profileData.caste ? profileData.caste : profileData.family.caste;
        this.userProfile.manglik = profileData.profile.manglik;
        this.userProfile.locality = profileData.family.locality;
        this.userProfile.qualification = profileData.profile.degree;
        this.userProfile.occupation = profileData.profile.occupation;
        this.userProfile.designation = profileData.profile.profession;
        this.userProfile.workingCity = profileData.profile.working_city;
        this.userProfile.about = profileData.profile.about;
        this.userProfile.birthPlace = profileData.profile.birth_place;
        this.userProfile.birthTime = profileData.profile.birth_time;
        this.userProfile.gotra = profileData.family.gotra;
        this.userProfile.foodChoice = profileData.profile.food_choice;
        this.userProfile.fatherStatus = profileData.family.father_status;
        this.userProfile.motherStatus = profileData.family.mother_status;
        this.userProfile.familyIncome = this.setIncomeVals(profileData.family.family_income);
        this.userProfile.image1 = this.getProfilePhoto(profileData.profile.carousel, '0');
        this.userProfile.image2 = this.getProfilePhoto(profileData.profile.carousel, '1');
        this.userProfile.image3 = this.getProfilePhoto(profileData.profile.carousel, '2');
        this.userProfile.company = profileData.profile.company;
        this.userProfile.college = profileData.profile.college;
        this.userProfile.family = profileData.family;
        this.userProfile.photoScore = profileData.profile.photo_score;
        console.log(this.userProfile);
        this.fourPageService.setProfile(this.userProfile);
        this.fourPageService.getListData.emit(true);
        this.setFormOneData();
    }
    setIncomeVals(income) {
        for (const v of this.incomeCategories) {
            const vals = v.split('-');
            if (income >= Number(vals[0]) && income <= Number(vals[1])) {
                console.log('look here', v);
                return v;
            }
        }
        if (income === 100) {
            return '100+';
        }
        else {
            return '0-2.5';
        }
    }
    setFormOneData() {
        this.PageOne.patchValue({
            firstName: this.userProfile.name ? this.userProfile.name.split(' ')[0] : '',
            lastName: this.userProfile.name ? this.userProfile.name.split(' ')[1] ?
                this.userProfile.name.split(' ')[1] : '' : '',
            phone: this.setMobileNumber(this.userProfile.mobile),
            email: this.userProfile.email,
            Relation: this.userProfile.relation,
            gender: this.userProfile.gender,
            birth_date: this.userProfile.dob ? this.userProfile.dob.toString().split('-')[2] : '',
            birth_month: this.userProfile.dob ? this.getMonthString(this.userProfile.dob.toString().split('-')[1]) : '',
            birth_year: this.userProfile.dob ? this.years[this.years.indexOf(this.userProfile.dob.toString().split('-')[0])] : '',
            Height: this.userProfile.height ? this.Heights1.indexOf(this.userProfile.height) : '',
            Weight: this.userProfile.weight,
            MaritalStatus: this.userProfile.martialStatus,
            Religion: this.userProfile.religion,
            Castes: this.userProfile.caste,
        });
    }
    setMobileNumber(number) {
        console.log('qwerty', number);
        if (number[0] != '+') {
            console.log('+91' + number);
            return '+91' + number;
        }
        else {
            return number;
        }
    }
    getMonthString(month) {
        switch (month) {
            case '01':
                return 'January';
            case '02':
                return 'Feburary';
            case '03':
                return 'March';
            case '04':
                return 'April';
            case '05':
                return 'May';
            case '06':
                return 'June';
            case '07':
                return 'July';
            case '08':
                return 'August';
            case '09':
                return 'September';
            case '10':
                return 'October';
            case '11':
                return 'November';
            case '12':
                return 'December';
            default:
                break;
        }
    }
    openMessageDialog() {
        const dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.minWidth = '80vw';
        dialogConfig.maxHeight = '80vh';
        dialogConfig.disableClose = false;
        dialogConfig.hasBackdrop = true;
        const dialogRef = this.matDialog.open(_forms_message_dialog_forms_message_dialog_component__WEBPACK_IMPORTED_MODULE_13__["FormsMessageDialogComponent"], dialogConfig);
    }
    checkDisable(event) {
        console.log(event.checked);
        this.isDisable = event.checked;
    }
    checkAllCastePref(event) {
        console.log(event.checked);
        this.isAllCastePref = event.checked;
    }
    // show register with popup
    openRegisterWith(selection) {
        if (selection !== 'Myself') {
            this.callTruecaller();
        }
        else {
            const dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
            dialogConfig.hasBackdrop = true;
            this.breakPointObserver.observe([
                '(min-width: 1024px)'
            ]).subscribe(result => {
                if (result.matches) {
                    console.log('screen is greater than  1024px');
                    dialogConfig.minWidth = '40vw';
                    dialogConfig.maxHeight = '80vh';
                    dialogConfig.disableClose = true;
                }
                else {
                    console.log('screen is less than  1024px');
                    dialogConfig.minWidth = '95vw';
                    dialogConfig.maxHeight = '80vh';
                    dialogConfig.disableClose = true;
                }
            });
            dialogConfig.data = {
                value: selection
            };
            dialogConfig.id = 'registerWith';
            const dialogRef = this.dialog.open(_register_with_register_with_component__WEBPACK_IMPORTED_MODULE_17__["RegisterWithComponent"], dialogConfig);
            dialogRef.afterClosed().subscribe((response) => {
                console.log(response);
                if (response) {
                    if (response.chose === 'facebook') {
                        this.analyticsEvent('Registered Through Facebook');
                        FB.getLoginStatus((response) => {
                            this.statusChangeCallback(response); // Returns the login status.
                        });
                    }
                    else if (response.chose === 'truecaller') {
                        this.analyticsEvent('Registered Through True Caller');
                        this.callTruecaller();
                    }
                }
            });
        }
    }
    openChooseFor() {
        const dialogConfig = new _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.hasBackdrop = true;
        this.breakPointObserver.observe([
            '(min-width: 1024px)'
        ]).subscribe(result => {
            if (result.matches) {
                console.log('screen is greater than  1024px');
                dialogConfig.minWidth = '40vw';
                dialogConfig.maxHeight = '80vh';
                dialogConfig.disableClose = true;
            }
            else {
                console.log('screen is less than  1024px');
                dialogConfig.minWidth = '95vw';
                dialogConfig.maxHeight = '80vh';
                dialogConfig.disableClose = true;
            }
        });
        dialogConfig.id = 'registerWith';
        const dialogRef = this.dialog.open(_choose_for_choose_for_component__WEBPACK_IMPORTED_MODULE_18__["ChooseForComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe((response) => {
            console.log(response);
            if (response) {
                this.PageOne.patchValue({
                    Relation: response.relation,
                });
                this.setGender();
            }
        });
    }
    //  get facebook login status
    statusChangeCallback(value) {
        console.log(`value is ${value.status}`);
        // if (value.status === 'connected') {
        //   localStorage.setItem('fb_token', value.authResponse.accessToken);
        //   this.getFbData();
        // }
        if (value.status !== 'connected') {
            // tslint:disable-next-line: max-line-length
            window.location.href = `https://www.facebook.com/v8.0/dialog/oauth?client_id=449447648971731&redirect_uri=https://hansmatrimony.com/fourReg&scope=email,public_profile,user_photos,user_gender,user_birthday,user_hometown,user_location`;
        }
        else {
            // FB.login((response) => {
            //   alert(`response is ${response}`);
            //   if (response.authResponse) {
            //     console.log('Welcome!  Fetching your information.... ');
            //     this.getFbData();
            //   } else {
            //     console.log('User cancelled login or did not fully authorize.');
            //   }
            // }, {
            //   scope: 'email, public_profile, user_photos, user_gender,user_birthday, user_hometown, user_location',
            //   enable_profile_selector: true,
            //   auth_type: 'rerequest',
            //   return_scopes: true
            // });
            localStorage.setItem('fb_token', value.authResponse.accessToken);
            this.getFbData();
        }
    }
    // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    getFbData() {
        console.log('Welcome!  Fetching your information.... ');
        // fetch user image
        FB.api('/me/picture', 'GET', { height: '600', width: '400', redirect: 'false' }, (response) => {
            console.log(response.data.url);
            if (response.data.url) {
                this.fetchedFbProfilePic = {
                    url: response.data.url,
                    user_id: null,
                    access_token: null
                };
            }
        });
        // fetch user data
        FB.api('/me', 'GET', { fields: 'email, address, first_name, gender, last_name, birthday, hometown,location' }, (response) => {
            console.log(response);
            this.spinner.hide();
            this.PageOne.patchValue({
                firstName: response.first_name ? response.first_name : '',
                lastName: response.last_name ? response.last_name : '',
                email: response.email ? response.email : '',
                gender: response.gender ? this.toTitleCase(response.gender) : '',
                birth_date: response.birthday ? response.birthday.split('/')[1] : '',
                birth_month: response.birthday ? this.getMonthString(response.birthday.split('/')[0]) : '',
                birth_year: response.birthday ? response.birthday.split('/')[2] : ''
            });
            // set home town in birth place
            if (response.hometown && response.hometown.name) {
                this.fourPageService.facebookHomeTownUpdated.emit(response.hometown.name);
            }
            // set home town in birth place
            if (response.location && response.location.name) {
                this.fourPageService.facebookLocationUpdated.emit(response.location.name);
            }
            // to solve the overlapping issue for new user
            document.querySelector('#firstName').focus();
        });
    }
    getFbDataThroughToken(userId, token) {
        console.log('Welcome!  Fetching your information.... ');
        // // fetch user image
        FB.api(`/${userId}/picture`, 'GET', { height: '600', width: '400', redirect: 'false' }, (response) => {
            console.log(response.data.url);
            if (response.data.url) {
                this.fetchedFbProfilePic = {
                    url: response.data.url,
                    user_id: userId,
                    access_token: token
                };
            }
        });
        // fetch user data
        FB.api(`/${userId}`, 'GET', {
            fields: 'email, address, first_name, gender, last_name, birthday, hometown,location',
            access_token: token
        }, (response) => {
            console.log(response);
            this.spinner.hide();
            this.PageOne.patchValue({
                firstName: response.first_name ? response.first_name : '',
                lastName: response.last_name ? response.last_name : '',
                email: response.email ? response.email : '',
                gender: response.gender ? this.toTitleCase(response.gender) : '',
                birth_date: response.birthday ? response.birthday.split('/')[1] : '',
                birth_month: response.birthday ? this.getMonthString(response.birthday.split('/')[0]) : '',
                birth_year: response.birthday ? response.birthday.split('/')[2] : ''
            });
            // set home town in birth place
            if (response.hometown && response.hometown.name) {
                this.fourPageService.facebookHomeTownUpdated.emit(response.hometown.name);
            }
            // set home town in birth place
            if (response.location && response.location.name) {
                this.fourPageService.facebookLocationUpdated.emit(response.location.name);
            }
            // to solve the overlapping issue for new user
            document.querySelector('#firstName').focus();
        });
    }
    toTitleCase(str) {
        if (str) {
            return str.replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        else {
            return '';
        }
    }
    // show truecaller on clicking mobile field if user has selected to sign up with facebook
    showTruecallerIfFacebook() {
        if (this.fetchedFbProfilePic) {
            this.callTruecaller();
        }
    }
    callTruecaller() {
        // tslint:disable-next-line: max-line-length
        const randomNumber = Math.floor(Math.random() * 100000000) + 1000000;
        this.startTruecallerPolling(randomNumber);
        window.location = `truecallersdk://truesdk/web_verify?requestNonce=${randomNumber}&partnerKey=0Jsfr258a371a13bd4fbf905228721f9fa2c2&partnerName=Hans Matrimony&lang=en&title=Login&skipOption=USE ANOTHER MOBILE NUMBER`;
        setTimeout(() => {
            if (document.hasFocus()) {
                // Truecaller app not present on the device and you redirect the user
                // to your alternate verification page
            }
            else {
                // testing position above
            }
        }, 600);
    }
    getUserFromTrueCaller(requestId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["timer"])(1, 3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(() => this.http.get(`https://partner.hansmatrimony.com/api/getTrueCallerResponse?requestId=${requestId}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.stopPolling));
    }
    // start true caller polling
    startTruecallerPolling(randomNumber) {
        this.getUserFromTrueCaller(randomNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(e => {
            throw new Error('True Caller Not Responding');
        }))
            .subscribe((response) => {
            this.pollingCount++;
            console.log(response);
            if (this.pollingCount < 10) {
                if (response.status === 1) {
                    this.truecallerExists = true;
                    const data = JSON.parse(response.data);
                    if (data) {
                        this.setTruecallerData(data);
                    }
                    this.stopPolling.next();
                }
                else if (response.status !== 0) {
                    this.ngxNotificationService.error('True Caller Not Responding');
                    this.stopPolling.next();
                    this.truecallerExists = false;
                }
            }
            else {
                this.stopPolling.next();
                this.truecallerExists = false;
            }
        }, err => {
            this.ngxNotificationService.error('True Caller Not Responding');
            console.log(err);
            this.stopPolling.next();
        });
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
    }
    setTruecallerData(data) {
        this.PageOne.patchValue({
            firstName: data.name.first ? data.name.first : '',
            lastName: data.name.last ? data.name.last : '',
            email: data.onlineIdentities.email ? data.onlineIdentities.email : '',
            phone: data.phoneNumbers[0] ? data.phoneNumbers[0] : ''
        });
        if (data.phoneNumbers && data.phoneNumbers[0]) {
            this.disabledPhoneNumber = data.phoneNumbers[0];
            setTimeout(() => {
                const countryBtn = document.querySelector('ngx-mat-intl-tel-input button');
                if (countryBtn) {
                    countryBtn.disabled = true;
                }
                this.PageOne.controls.phone.disable();
            }, 1000);
            this.mobileNumberChanged();
        }
        else {
            this.hideMobileNumber = false;
        }
        this.fetchedFbProfilePic = {
            url: data.avatarUrl,
            user_id: null,
            access_token: null
        };
        this.fourPageService.facebookProfilePicUploaded.emit(this.fetchedFbProfilePic);
    }
};
CompatibilityFormComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_12__["FourPageService"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["BreakpointObserver"] },
    { type: _language_service__WEBPACK_IMPORTED_MODULE_14__["LanguageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_19__["FindOpenHistoryProfileService"] }
];
CompatibilityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-form.component.css */ "./src/app/compatibility-form/compatibility-form.component.css")).default]
    })
], CompatibilityFormComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-form.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-form.module.ts ***!
  \*****************************************************************/
/*! exports provided: CompatibilityFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityFormModule", function() { return CompatibilityFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _compatibility_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compatibility-form.component */ "./src/app/compatibility-form/compatibility-form.component.ts");
/* harmony import */ var _compatibility_page_two_compatibility_page_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compatibility-page-two/compatibility-page-two.component */ "./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.ts");
/* harmony import */ var _compatibility_page_three_compatibility_page_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compatibility-page-three/compatibility-page-three.component */ "./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.ts");
/* harmony import */ var _compatibility_photo_compatibility_photo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compatibility-photo/compatibility-photo.component */ "./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.ts");
/* harmony import */ var _compatibility_form_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compatibility-form-routing.module */ "./src/app/compatibility-form/compatibility-form-routing.module.ts");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var _compatibility_page_five_compatibility_page_five_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compatibility-page-five/compatibility-page-five.component */ "./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.ts");
/* harmony import */ var _forms_message_dialog_forms_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms-message-dialog/forms-message-dialog.component */ "./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.ts");
/* harmony import */ var _compatibility_verify_compatibility_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compatibility-verify/compatibility-verify.component */ "./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/compatibility-form/thank-you/thank-you.component.ts");
/* harmony import */ var _register_with_register_with_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-with/register-with.component */ "./src/app/compatibility-form/register-with/register-with.component.ts");
/* harmony import */ var _choose_for_choose_for_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./choose-for/choose-for.component */ "./src/app/compatibility-form/choose-for/choose-for.component.ts");
/* harmony import */ var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mat-intl-tel-input */ "./node_modules/ngx-mat-intl-tel-input/fesm2015/ngx-mat-intl-tel-input.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/compatibility-form/testimonials/testimonials.component.ts");
/* harmony import */ var _choice_list_choice_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../choice-list/choice-list.component */ "./src/app/choice-list/choice-list.component.ts");
/* harmony import */ var _testimonials_testimonial_cards_testimonial_cards_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonials/testimonial-cards/testimonial-cards.component */ "./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.ts");





















let CompatibilityFormModule = class CompatibilityFormModule {
};
CompatibilityFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _compatibility_form_component__WEBPACK_IMPORTED_MODULE_4__["CompatibilityFormComponent"],
            _compatibility_page_two_compatibility_page_two_component__WEBPACK_IMPORTED_MODULE_5__["CompatibilityPageTwoComponent"],
            _compatibility_page_three_compatibility_page_three_component__WEBPACK_IMPORTED_MODULE_6__["CompatibilityPageThreeComponent"],
            _compatibility_photo_compatibility_photo_component__WEBPACK_IMPORTED_MODULE_7__["CompatibilityPhotoComponent"],
            _compatibility_page_five_compatibility_page_five_component__WEBPACK_IMPORTED_MODULE_10__["CompatibilityPageFiveComponent"],
            _forms_message_dialog_forms_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FormsMessageDialogComponent"],
            _compatibility_verify_compatibility_verify_component__WEBPACK_IMPORTED_MODULE_12__["CompatibilityVerifyComponent"],
            _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"],
            _register_with_register_with_component__WEBPACK_IMPORTED_MODULE_14__["RegisterWithComponent"],
            _choose_for_choose_for_component__WEBPACK_IMPORTED_MODULE_15__["ChooseForComponent"],
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_18__["Testimonials"],
            _choice_list_choice_list_component__WEBPACK_IMPORTED_MODULE_19__["ChoiceListComponent"],
            _testimonials_testimonial_cards_testimonial_cards_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialCards"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _compatibility_form_routing_module__WEBPACK_IMPORTED_MODULE_8__["CompatibilityFormRoutingModule"],
            ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_16__["NgxMatIntlTelInputModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"]
        ],
        providers: [
            _four_page_service__WEBPACK_IMPORTED_MODULE_9__["FourPageService"]
        ],
        entryComponents: [
            _forms_message_dialog_forms_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__["FormsMessageDialogComponent"],
            _register_with_register_with_component__WEBPACK_IMPORTED_MODULE_14__["RegisterWithComponent"],
            _choose_for_choose_for_component__WEBPACK_IMPORTED_MODULE_15__["ChooseForComponent"]
        ]
    })
], CompatibilityFormModule);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\n::ng-deep .mat-select-value {\r\n    color: black !important;\r\n}\r\n.fieldFit{\r\n  height: 45px;\r\n  margin-bottom: 1rem;\r\n}\r\n::ng-deep .mat-checkbox-inner-container{\r\n  border: 1px solid black;\r\n}\r\n.impNote {\r\n  margin: 5px 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n}\r\nstrong {\r\n  font-family: sans-serif;\r\n}\r\n#viewButton{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\nbox-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 1),\r\n12px 12px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n.customBackground{\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background: white;\r\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n@media (max-width: 900px) {\r\nmain {\r\n    height: 100%;\r\n    overflow: auto;\r\n    }\r\n    select {\r\n\r\n        /* styling */\r\n        background-color: white;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        font: inherit;\r\n        padding: 5px 30px 5px 3px;\r\n      \r\n        /* reset */\r\n      \r\n        margin: 0;\r\n        box-sizing: border-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n      }\r\n      \r\n      \r\n      /* arrows */\r\n      \r\n      .classic {\r\n        background-image:\r\n          linear-gradient(45deg, transparent 50%, blue 50%),\r\n          linear-gradient(135deg, blue 50%, transparent 50%),\r\n          linear-gradient(to right, white, skyblue);\r\n        background-position:\r\n          calc(100% - 20px) calc(1em + 2px),\r\n          calc(100% - 15px) calc(1em + 2px),\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n      }\r\n      \r\n      .classic:focus {\r\n        background-image:\r\n          linear-gradient(45deg, white 50%, transparent 50%),\r\n          linear-gradient(135deg, transparent 50%, white 50%),\r\n          linear-gradient(to right, white, gray);\r\n        background-position:\r\n          calc(100% - 15px) 1em,\r\n          calc(100% - 20px) 1em,\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border-color: grey;\r\n        outline: 0;\r\n      }\r\n      .customBackground{\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n        background: white;\r\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktcGFnZS1maXZlL2NvbXBhdGliaWxpdHktcGFnZS1maXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtLQUNqQjtBQUNMO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7aUNBQ2lDO0FBQ2pDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjttQ0FDaUM7QUFDbkM7QUFFQTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZDtJQUNBOztRQUVJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IseUJBQXlCOztRQUV6QixVQUFVOztRQUVWLFNBQVM7UUFHVCxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtNQUN2Qjs7O01BR0EsV0FBVzs7TUFFWDtRQUNFOzs7bURBRzJDO1FBQzNDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO01BQzlCOztNQUVBO1FBQ0U7OztnREFHd0M7UUFDeEM7OztnQkFHUTtRQUNSOzs7cUJBR2E7UUFDYiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFVBQVU7TUFDWjtNQUNBO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixpQkFBaUI7UUFDakI7eUNBQ2lDO01BQ25DO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wYXRpYmlsaXR5LWZvcm0vY29tcGF0aWJpbGl0eS1wYWdlLWZpdmUvY29tcGF0aWJpbGl0eS1wYWdlLWZpdmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0UmVnaXN0ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgcGFkZGluZy10b3A6MXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBjb2xvcjogIzI4NWZkZFxyXG59XHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG4uZmllbGRGaXR7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmltcE5vdGUge1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbnN0cm9uZyB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiN2aWV3QnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6ICMzNGI3ZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5ib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcclxuMTJweCAxMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5jdXN0b21CYWNrZ3JvdW5ke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbjEycHggMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcblxyXG4gICAgICAgIC8qIHN0eWxpbmcgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDNweDtcclxuICAgICAgXHJcbiAgICAgICAgLyogcmVzZXQgKi9cclxuICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwOyAgICAgIFxyXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLyogYXJyb3dzICovXHJcbiAgICAgIFxyXG4gICAgICAuY2xhc3NpYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBibHVlIDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBibHVlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHNreWJsdWUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgICAgICAxMDAlIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOlxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAyLjVlbSAyLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2xhc3NpYzpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgZ3JheSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIDFlbSxcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSxcclxuICAgICAgICAgIDEwMCUgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbUJhY2tncm91bmR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTEycHggLTEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyksXHJcbiAgICAgIDEycHggMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CompatibilityPageFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityPageFiveComponent", function() { return CompatibilityPageFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");









let CompatibilityPageFiveComponent = class CompatibilityPageFiveComponent {
    constructor(http, fourPageService, ngxNotificationService, formBuilder, router) {
        this.http = http;
        this.fourPageService = fourPageService;
        this.ngxNotificationService = ngxNotificationService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errors = [];
        this.sources = ['Facebook', 'Board/Sunpac/Banner', 'Sms', 'Walk-In', 'Referral', 'Tiktok', 'Google',
            'Justdial', 'Instagram', 'Newspaper', 'Temple Branding', 'Renewal', 'Upgrade', 'Data Account', 'Word of Mouth'];
        this.interestLevel = ['Very High', 'High', 'Medium', 'Less'];
        this.allTemples = [];
        this.fullList = [];
        this.templeList = [];
        this.templeChecked = false;
        this.moderatorList = [];
        this.moderatorChecked = false;
        this.checkStatus = false;
        this.getcastes = [];
        // disable buttons after a single click
        this.assignBtnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.assignBtn$ = this.assignBtnSubject.asObservable();
        this.approveBtnSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.approveBtn$ = this.approveBtnSubject.asObservable();
        /** list of banks filtered by search keyword */
        this.filteredCastesMulti = new rxjs__WEBPACK_IMPORTED_MODULE_7__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.pageFive = this.formBuilder.group({
            searchCaste: (null),
            searchCasteText: (null),
            allCaste: (false),
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9999999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(0/91)?[6-9][0-9]{9}')])],
            enq_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            follow_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            assign_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            interest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // get caste preferences / compatibilty count
            this.getAllCaste(null);
            yield this.getAssignToList();
            if (localStorage.getItem('getListTempleId') && localStorage.getItem('enqDate')) {
                this.pageFive.patchValue({
                    enq_date: localStorage.getItem('enqDate'),
                    source: localStorage.getItem('getListSource')
                });
            }
            else if (localStorage.getItem('getListTempleId') && localStorage.getItem('getListId')) {
                this.getLeadData().subscribe(value => {
                    console.log(value);
                    if (value && value.data && value.data.assign_to) {
                        if (value.data.assign_to != 'online') {
                            localStorage.setItem('isAssignToOnline', '1');
                            this.fourPageService.showApproveBtn = true;
                        }
                        else if (value.data.assign_to == 'online') {
                            this.fourPageService.showApproveBtn = false;
                        }
                        console.log(' this.fourPageService.showApproveBtn set to', this.fourPageService.showApproveBtn, value.data.assign_to);
                    }
                    if (value.status === '1') {
                        const assignToName = this.allTemples.find(element => {
                            return element.temple_id === value.data.assign_to;
                        });
                        if (assignToName) {
                            if (assignToName.role === 0) {
                                this.templeChecked = true;
                            }
                            else if (assignToName.role === 5) {
                                this.moderatorChecked = true;
                            }
                        }
                        const assignByName = this.allTemples.find(element => {
                            return element.temple_id === value.data.assign_by;
                        });
                        console.log('assign by', assignByName);
                        if (assignByName && assignByName.temple_id !== 'online') {
                            console.log(assignByName);
                            localStorage.setItem('valueTempleId', assignByName.temple_id);
                        }
                        this.pageFive.patchValue({
                            phone: value.data.alt_mobile,
                            assign_to: assignToName ? assignToName.name : '',
                            interest: value.data.speed,
                            source: value.data.source,
                            follow_date: value.data.follow_call_date,
                            enq_date: value.data.enquiry_date ? value.data.enquiry_date : value.data.created_at.split(' ')[0]
                        });
                        console.log(this.pageFive.value);
                    }
                    else {
                        this.ngxNotificationService.error(value.message);
                    }
                });
            }
        });
    }
    getProfileId() {
        const formData = new FormData();
        formData.append('mobile', localStorage.getItem('getListMobile') ? localStorage.getItem('getListMobile')
            : localStorage.getItem('mobile_number'));
        return this.http.post('https://partner.hansmatrimony.com/api/getLeadId', formData);
    }
    getAssignToList() {
        return new Promise((resolve) => {
            this.http.get('https://partner.hansmatrimony.com/api/leads/getAllTemples').subscribe((data) => {
                this.allTemples = data.all_temples;
                this.fullList = data.all_temples;
                resolve(data);
            });
        });
    }
    clearHistory() {
        localStorage.setItem('getListId', '');
        localStorage.setItem('getListLeadId', '');
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('id', '');
    }
    checkForPhoto(status) {
        if (this.fourPageService.getUserThrough()) {
            if (this.compatibiltyCount < 100 && !this.pageFive.value.allCaste &&
                this.pageFive.value.searchCaste !== 'All') {
                this.ngxNotificationService.warning('Please Select No Caste Bar');
                return;
            }
            if (status === '1') {
                this.validate(this.fourPageService.profile, status);
            }
            else {
                this.validateComplete(this.fourPageService.profile, status);
            }
        }
    }
    assignToTemple(event) {
        console.log(event.checked);
        if (event.checked) {
            this.templeChecked = true;
            this.moderatorChecked = false;
            this.fullList = [];
            this.allTemples.forEach(temples => {
                if (temples.role === 0) {
                    this.fullList.push(temples);
                }
            });
        }
        else if (event.checked === false && this.moderatorChecked === false) {
            this.fullList = [...this.allTemples];
        }
    }
    assignToModerator(event) {
        console.log(event.checked);
        if (event.checked) {
            this.moderatorChecked = true;
            this.templeChecked = false;
            this.fullList = [];
            this.allTemples.forEach(temples => {
                if (temples.role === 5 || temples.role === 7) {
                    this.fullList.push(temples);
                }
            });
        }
        else if (event.checked === false && this.templeChecked === false) {
            this.fullList = [...this.allTemples];
        }
    }
    checkStat(event) {
        console.log(event.checked);
        this.checkStatus = event.checked;
    }
    getAllCaste(caste) {
        if (this.fourPageService.getAllCastes()) {
            this.getcastes = this.fourPageService.getAllCastes();
            const formData = new FormData();
            formData.append('lead_id', localStorage.getItem('getListId'));
            formData.append('castes', caste);
            this.http.post('https://partner.hansmatrimony.com/api/getAvailableRishtey', formData).subscribe((data) => {
                console.log(data);
                // set initial selection
                if (data && data.castes) {
                    const values = [];
                    if (data.castes.length > 1) {
                        console.log('look here', data.castes);
                        console.log(data.castes.length);
                        this.castePref = data.castes;
                        Array(data.castes).forEach(element => {
                            if (this.getcastes.indexOf(element)) {
                                values.push(this.getcastes[this.getcastes.indexOf(element)]);
                            }
                        });
                    }
                    else {
                        console.log(data.castes.length);
                        if (data.castes[0]) {
                            this.castePref = data.castes[0].split(',');
                            data.castes[0].split(',').forEach(element => {
                                if (this.getcastes.indexOf(element)) {
                                    values.push(this.getcastes[this.getcastes.indexOf(element)]);
                                }
                            });
                        }
                    }
                    // if all , check the check box for no caste bar
                    if (values.includes('All')) {
                        this.pageFive.patchValue({
                            allCaste: true
                        });
                    }
                    // set caste dropdown values
                    this.pageFive.patchValue({
                        searchCaste: values
                    });
                    if (data.count) {
                        this.compatibiltyCount = data.count;
                    }
                }
                // load the initial bank list
                this.filteredCastesMulti.next(this.getcastes.slice());
                // listen for search field value changes
                this.pageFive.controls.searchCasteText.valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.onDestroy))
                    .subscribe(() => {
                    this.filterCasteMulti();
                });
            });
        }
        else {
            this.getAllCasteList();
        }
    }
    getAllCasteList() {
        this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res) => {
            this.getcastes = [...res, 'All'];
            this.fourPageService.setAllCastes(this.getcastes);
            this.getAllCaste(null);
        });
    }
    filterCasteMulti() {
        if (!this.getcastes) {
            return;
        }
        // get the search keyword
        let search = this.pageFive.value.searchCasteText;
        if (!search) {
            this.filteredCastesMulti.next(this.getcastes.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredCastesMulti.next(this.getcastes.filter(bank => bank.toLowerCase().indexOf(search) > -1));
    }
    casteSelectionChanged(event) {
        console.log(event);
        console.log(event.value[0]);
        const values = [];
        event.value.forEach(element => {
            if (this.getcastes.indexOf(element)) {
                values.push(this.getcastes[this.getcastes.indexOf(element)]);
            }
        });
        // set caste dropdown values
        this.pageFive.patchValue({
            searchCaste: values
        });
        console.log(this.pageFive.value.searchCaste);
        this.getAllCaste(this.pageFive.value.searchCaste);
    }
    // set checkbox value to all if checked
    checkAllCastePref(event) {
        console.log(event);
        if (event.checked) {
            this.pageFive.controls.searchCaste.setValue(['All']);
            this.getAllCaste('All');
        }
        else {
            this.getAllCaste(null);
        }
    }
    validate(userProfile, status) {
        console.log(userProfile);
        console.log(this.pageFive.value, status);
        if (userProfile.name === null || userProfile.name === '') {
            return this.ngxNotificationService.error('Enter Name');
        }
        else if (userProfile.mobile === null || userProfile.mobile === '') {
            return this.ngxNotificationService.error('Enter Mobile Number');
        }
        else if (userProfile.relation === null || userProfile.relation === '') {
            return this.ngxNotificationService.error('Select Relation');
        }
        else if (userProfile.gender === null || userProfile.gender === '') {
            return this.ngxNotificationService.error('Select Gender');
        }
        else if (userProfile.dob === null || userProfile.dob === '') {
            return this.ngxNotificationService.error('Enter D.O.B');
        }
        else if (userProfile.height === null || userProfile.height === '') {
            return this.ngxNotificationService.error('Select Height');
        }
        else if (userProfile.weight === null || userProfile.weight === '') {
            return this.ngxNotificationService.error('Enter Weight');
        }
        else if (userProfile.martialStatus === null || userProfile.martialStatus === '') {
            return this.ngxNotificationService.error('Select Marital Status');
        }
        else if (userProfile.annualIncome === null || userProfile.annualIncome === '') {
            return this.ngxNotificationService.error('Enter Annual Income');
        }
        else if (userProfile.religion === null || userProfile.religion === '') {
            return this.ngxNotificationService.error('Select Religion');
        }
        else if (userProfile.caste === null || userProfile.caste === '') {
            return this.ngxNotificationService.error('Select Caste');
        }
        else if (userProfile.qualification === null || userProfile.qualification === '') {
            return this.ngxNotificationService.error('Select Qualification');
        }
        else if (userProfile.occupation === null || userProfile.occupation === '') {
            return this.ngxNotificationService.error('Select Occupation');
        }
        else if (userProfile.designation === null || userProfile.designation === '') {
            return this.ngxNotificationService.error('Enter Designation');
        }
        else if (userProfile.occupation !== 'Not Working' && userProfile.workingCity === null || userProfile.workingCity === '') {
            return this.ngxNotificationService.error('Enter Working City');
        }
        else if (userProfile.manglik === null || userProfile.manglik === '') {
            return this.ngxNotificationService.error('Select Manglik Status');
        }
        else if (userProfile.locality === null || userProfile.locality === '') {
            return this.ngxNotificationService.error('Enter Locality');
        }
        else if (userProfile.about === null || userProfile.about === '') {
            return this.ngxNotificationService.error('Enter About');
        }
        else if (userProfile.birthPlace === null || userProfile.birthPlace === '') {
            return this.ngxNotificationService.error('Enter Birth Place');
        }
        else if (userProfile.foodChoice === null || userProfile.foodChoice === '') {
            return this.ngxNotificationService.error('Select Food Choice');
        }
        else if (userProfile.fatherStatus === null || userProfile.fatherStatus === '') {
            return this.ngxNotificationService.error('Select Father Status');
        }
        else if (userProfile.motherStatus === null || userProfile.motherStatus === '') {
            return this.ngxNotificationService.error('Select Mother Status');
        }
        else if (userProfile.familyIncome === null || userProfile.familyIncome === '') {
            return this.ngxNotificationService.error('Enter Family Income');
        }
        else if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
            return this.ngxNotificationService.error('Select Image 1');
        }
        else if (!userProfile.image2 || userProfile.image2 === null || userProfile.image2 === '') {
            return this.ngxNotificationService.error('Select Image 2');
        }
        else if (!userProfile.image3 || userProfile.image3 === null || userProfile.image3 === '') {
            return this.ngxNotificationService.error('Select Image 3');
        }
        else if (!userProfile.college || userProfile.college === '') {
            return this.ngxNotificationService.error('Enter College Name');
        }
        else if (!userProfile.company || userProfile.company === '') {
            return this.ngxNotificationService.error('Enter Company Name');
        }
        else if (userProfile.fatherStatus !== 'Not Alive' && userProfile.fatherStatus !== 'Not Working' &&
            userProfile.family.occupation === null || userProfile.family.occupation === '') {
            return this.ngxNotificationService.error('Select Father Occupation');
        }
        else if (userProfile.motherStatus !== 'Not Alive' && userProfile.motherStatus !== 'Not Working' &&
            userProfile.family.occupation_mother === null || userProfile.family.occupation_mother === '') {
            return this.ngxNotificationService.error('Select Mother Occupation');
        }
        else if (userProfile.family.married_daughters == null) {
            return this.ngxNotificationService.error('Select Married Sisters');
        }
        else if (userProfile.family.unmarried_daughters == null) {
            return this.ngxNotificationService.error('Select Un Married Sisters');
        }
        else if (userProfile.family.married_sons == null) {
            return this.ngxNotificationService.error('Select Married Brothers');
        }
        else if (userProfile.family.unmarried_sons == null) {
            return this.ngxNotificationService.error('Select Un Married Brothers');
        }
        else if (!userProfile.family.house_type || userProfile.family.house_type === '') {
            return this.ngxNotificationService.error('Select House Type');
        }
        else if (!userProfile.family.family_type || userProfile.family.family_type === '') {
            return this.ngxNotificationService.error('Select Family Type');
        }
        else if (!userProfile.family.city || userProfile.family.city === '') {
            return this.ngxNotificationService.error('Enter Family Living In');
        }
        else if (userProfile.photoScore < 1) {
            return this.ngxNotificationService.error('Give a score');
        }
        else if (!this.pageFive.controls.enq_date.valid) {
            return this.ngxNotificationService.error('Enter a valid Enq Date');
        }
        else if (!this.pageFive.controls.follow_date.valid) {
            return this.ngxNotificationService.error('Enter a valid Follow Up Date');
        }
        else if (!this.pageFive.controls.source.valid) {
            return this.ngxNotificationService.error('Select a source');
        }
        else if (!this.pageFive.controls.assign_to.valid) {
            return this.ngxNotificationService.error('Select Assign To');
        }
        else if (!this.pageFive.controls.interest.valid) {
            return this.ngxNotificationService.error('Select interest level');
        }
        else if (!this.pageFive.controls.comments.valid) {
            return this.ngxNotificationService.error('Enter a comment');
        }
        else {
            this.approveUser();
        }
    }
    validateComplete(userProfile, status) {
        console.log(userProfile);
        console.log(this.pageFive.value, status);
        if (!this.pageFive.controls.enq_date.valid) {
            return this.ngxNotificationService.error('Enter a valid Enq Date');
        }
        else if (!this.pageFive.controls.follow_date.valid) {
            return this.ngxNotificationService.error('Enter a valid Follow Up Date');
        }
        else if (!this.pageFive.controls.source.valid) {
            return this.ngxNotificationService.error('Select a Source');
        }
        else if (!this.pageFive.controls.assign_to.valid) {
            return this.ngxNotificationService.error('Select Assign To');
        }
        else if (!this.pageFive.controls.interest.valid) {
            return this.ngxNotificationService.error('Select interest level');
        }
        else if (!this.pageFive.controls.comments.valid) {
            return this.ngxNotificationService.error('Enter a comment');
        }
        else {
            this.completeUser();
        }
    }
    approveUser() {
        if (!localStorage.getItem('getListId')) {
            this.getProfileId().subscribe(data => {
                console.log(data);
                if (data && data.status === '1') {
                    localStorage.setItem('getListId', data.id);
                    this.completeProfileApi().subscribe((data) => {
                        console.log(data);
                        if (data.status === '1') {
                            this.approveProfileApi();
                        }
                        else {
                            if (data.message) {
                                this.ngxNotificationService.error(data.message);
                            }
                            else {
                                this.ngxNotificationService.error('Not Approved');
                            }
                        }
                    }, err => {
                        console.log(err);
                        this.ngxNotificationService.error(err.message, 'Not Approved');
                    });
                }
            }, err => {
                this.ngxNotificationService.error('Something Went Wrong With Lead Id');
                console.log(err);
            });
        }
        else {
            this.completeProfileApi().subscribe((data) => {
                console.log(data);
                if (data.status === '1') {
                    this.approveProfileApi();
                }
                else {
                    if (data.message) {
                        this.ngxNotificationService.error(data.message);
                    }
                    else {
                        this.ngxNotificationService.error('Not Approved');
                    }
                }
            }, err => {
                console.log(err);
                this.ngxNotificationService.error(err.message, 'Not Approved');
            });
        }
    }
    completeUser() {
        if (!localStorage.getItem('getListId')) {
            this.getProfileId().subscribe(data => {
                console.log(data);
                if (data && data.status === '1') {
                    localStorage.setItem('getListId', data.id);
                    this.completeProfileApi().subscribe((data) => {
                        console.log(data);
                        if (data.status === '1') {
                            this.clearHistory();
                            if (localStorage.getItem('redParam')) {
                                if (localStorage.getItem('redParam') === '0') {
                                    window.open('https://partner.hansmatrimony.com/home', '_top', null, true);
                                }
                                else if (localStorage.getItem('redParam') === 'pending_profile') {
                                    window.open('https://partner.hansmatrimony.com/profile_approval/getFreeUserProfile', '_top', null, true);
                                }
                                else {
                                    window.open('https://partner.hansmatrimony.com/find', '_top', null, true);
                                }
                            }
                            else if (localStorage.getItem('fourthParam')) {
                                if (localStorage.getItem('fifthParam') === '1') {
                                    if (localStorage.getItem('fourthParam') === '0') {
                                        window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval', '_top', null, true);
                                    }
                                    else {
                                        window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                                    }
                                }
                                else if (localStorage.getItem('fifthParam') === '2') {
                                    window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=' + localStorage.getItem('fourthParam') +
                                        '&temple_id=' + localStorage.getItem('getListTempleId'), '_top', null, true);
                                }
                                else if (localStorage.getItem('fifthParam') === '3') {
                                    if (localStorage.getItem('fourthParam') === '0') {
                                        window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                                    }
                                    else {
                                        window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                                    }
                                }
                                else if (localStorage.getItem('fifthParam') === '4') {
                                    if (localStorage.getItem('fourthParam') === '0') {
                                        window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                                    }
                                    else {
                                        window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                                    }
                                }
                                else if (localStorage.getItem('fifthParam') === '5') {
                                    if (localStorage.getItem('fourthParam') === '0') {
                                        window.open('https://partner.hansmatrimony.com/subscriptionSeens', '_top', null, true);
                                    }
                                    else {
                                        window.open('https://partner.hansmatrimony.com/subscriptionSeens?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                                    }
                                }
                                else {
                                    if (localStorage.getItem('fourthParam') === '0') {
                                        window.open('https://partner.hansmatrimony.com/pendingApproval', '_top', null, true);
                                    }
                                    else {
                                        window.open('https://partner.hansmatrimony.com/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                                    }
                                }
                            }
                            else if (localStorage.getItem('extra')) {
                                if (localStorage.getItem('extra') === '2') {
                                    window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=1&temple_id=' +
                                        localStorage.getItem('getListTempleId'), '_top', null, true);
                                }
                                else if (localStorage.getItem('extra') === '3') {
                                    window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                                }
                                else if (localStorage.getItem('extra') === '4') {
                                    window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                                }
                            }
                            else {
                                if (localStorage.getItem('getListMobile')) { // mode 3
                                    window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                                }
                                else if (localStorage.getItem('getListId')) { // mode 2
                                    window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                                }
                            }
                            // if (localStorage.getItem('getListMobile')) { // mode 3
                            //   window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                            // } else if (localStorage.getItem('getListId')) { // mode 2
                            //   window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                            // }
                        }
                        else {
                            this.ngxNotificationService.error(data.message, 'Not Approved');
                        }
                    }, err => {
                        console.log(err);
                        this.ngxNotificationService.error(err.message, 'Not Approved');
                    });
                }
            }, err => {
                this.ngxNotificationService.error('Something Went Wrong With Lead Id');
                console.log(err);
            });
        }
        else {
            this.completeProfileApi().subscribe((data) => {
                console.log(data);
                if (data.status === '1') {
                    if (localStorage.getItem('redParam')) {
                        if (localStorage.getItem('redParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/home', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/find', '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fourthParam')) {
                        if (localStorage.getItem('fifthParam') === '1') {
                            if (localStorage.getItem('fourthParam') === '0') {
                                window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval', '_top', null, true);
                            }
                            else {
                                window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                            }
                        }
                        else if (localStorage.getItem('fifthParam') === '2') {
                            window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=' + localStorage.getItem('fourthParam') +
                                '&temple_id=' + localStorage.getItem('getListTempleId'), '_top', null, true);
                        }
                        else if (localStorage.getItem('fifthParam') === '3') {
                            if (localStorage.getItem('fourthParam') === '0') {
                                window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                            }
                            else {
                                window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                            }
                        }
                        else if (localStorage.getItem('fifthParam') === '4') {
                            if (localStorage.getItem('fourthParam') === '0') {
                                window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                            }
                            else {
                                window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                            }
                        }
                        else if (localStorage.getItem('fifthParam') === '5') {
                            if (localStorage.getItem('fourthParam') === '0') {
                                window.open('https://partner.hansmatrimony.com/subscriptionSeens', '_top', null, true);
                            }
                            else {
                                window.open('https://partner.hansmatrimony.com/subscriptionSeens?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                            }
                        }
                        else {
                            if (localStorage.getItem('fourthParam') === '0') {
                                window.open('https://partner.hansmatrimony.com/pendingApproval', '_top', null, true);
                            }
                            else {
                                window.open('https://partner.hansmatrimony.com/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                            }
                        }
                    }
                    else if (localStorage.getItem('extra')) {
                        if (localStorage.getItem('extra') === '2') {
                            window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=1&temple_id=' +
                                localStorage.getItem('getListTempleId'), '_top', null, true);
                        }
                        else if (localStorage.getItem('extra') === '3') {
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else if (localStorage.getItem('extra') === '4') {
                            window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                        }
                    }
                    else {
                        if (localStorage.getItem('getListMobile')) { // mode 3
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else if (localStorage.getItem('getListId')) { // mode 2
                            window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                        }
                    }
                }
                else {
                    this.ngxNotificationService.error(data.message, 'Not Approved');
                }
                this.clearHistory();
            }, err => {
                console.log(err);
                this.ngxNotificationService.error(err.message, 'Not Approved');
            });
        }
    }
    approveProfileApi() {
        this.approveBtnSubject.next(true);
        const approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('temple_id', localStorage.getItem('getListTempleId'));
        approveData.append('photo_score', this.fourPageService.getProfile().photoScore.toString());
        approveData.append('is_approve', '1');
        this.http.post('https://partner.hansmatrimony.com/api/ApproveProfile', approveData).subscribe((data) => {
            console.log(data);
            if (data.status === '1') {
                if (localStorage.getItem('redParam')) {
                    if (localStorage.getItem('redParam') === '0') {
                        window.open('https://partner.hansmatrimony.com/home', '_top', null, true);
                    }
                    else {
                        window.open('https://partner.hansmatrimony.com/find', '_top', null, true);
                    }
                }
                else if (localStorage.getItem('fourthParam')) {
                    if (localStorage.getItem('fifthParam') === '1') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '2') {
                        window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=' + localStorage.getItem('fourthParam') +
                            '&temple_id=' + localStorage.getItem('getListTempleId'), '_top', null, true);
                    }
                    else if (localStorage.getItem('fifthParam') === '3') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '4') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '5') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/subscriptionSeens', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/subscriptionSeens?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/pendingApproval', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                }
                // this is old logic , not changing this
                // if (localStorage.getItem('getListMobile')) { // mode 3
                //   window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                // } else if (localStorage.getItem('getListId')) { // mode 2
                //   window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                // }
                this.clearHistory();
            }
            else {
                if (data.message) {
                    this.ngxNotificationService.error(data.message);
                }
                else {
                    this.ngxNotificationService.error('Not Approved');
                }
            }
        }, err => {
            console.log(err);
            this.approveBtnSubject.next(false);
            this.ngxNotificationService.error(err.message, 'Not Approved');
        });
    }
    completeProfileApi() {
        this.assignBtnSubject.next(true);
        const approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('assign_by', localStorage.getItem('valueTempleId') ? localStorage.getItem('valueTempleId')
            : localStorage.getItem('getListTempleId'));
        approveData.append('logged_in', localStorage.getItem('getListTempleId'));
        approveData.append('assign_to', this.pageFive.value.assign_to);
        approveData.append('comments', this.pageFive.value.comments);
        approveData.append('speed', this.pageFive.value.interest);
        approveData.append('source', this.pageFive.value.source);
        approveData.append('followup_call_on', this.pageFive.value.follow_date);
        approveData.append('alt_mobile', this.pageFive.value.phone);
        // if url with enqData : mode -> 3 , if with id: mode -> 2 if only with fourReg : mode -> 1
        approveData.append('mode', localStorage.getItem('enqDate') ? '3'
            : localStorage.getItem('getListId') ? '2' : '1');
        approveData.append('premium_lead', this.checkStatus === true ? '1' : '0');
        return this.http.post('https://partner.hansmatrimony.com/api/completeLead', approveData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(() => {
            this.assignBtnSubject.next(false);
            throw new Error('Something Went Wrong, Try Again Later');
        }));
    }
    getLeadData() {
        const formData = new FormData();
        formData.append('id', localStorage.getItem('getListId'));
        return this.http.post('https://partner.hansmatrimony.com/api/getLeadDetails', formData);
    }
    // send photo upload link to the user
    sendPhotoLink() {
        if (localStorage.getItem('getListId') &&
            localStorage.getItem('getListLeadId') &&
            localStorage.getItem('getListMobile')) {
            const formData = new FormData();
            formData.append('id', localStorage.getItem('getListId'));
            formData.append('mobile', localStorage.getItem('getListMobile'));
            formData.append('is_lead', localStorage.getItem('getListLeadId'));
            this.http.post('https://partner.hansmatrimony.com/api/sendPhotoUploadLink', formData).subscribe((data) => {
                if (data) {
                    console.log(data);
                    if (data.status === 1) {
                        this.ngxNotificationService.success('Link Shared Successfully');
                    }
                }
                else {
                    this.ngxNotificationService.error('SomeThing Went Wrong');
                }
            }, err => {
                console.log(err);
                this.ngxNotificationService.error('SomeThing Went Wrong');
            });
        }
    }
};
CompatibilityPageFiveComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_4__["FourPageService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__["NgxNotificationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('multiSelect', { static: true })
], CompatibilityPageFiveComponent.prototype, "multiSelect", void 0);
CompatibilityPageFiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-page-five',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-page-five.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-page-five.component.css */ "./src/app/compatibility-form/compatibility-page-five/compatibility-page-five.component.css")).default]
    })
], CompatibilityPageFiveComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\n.fieldFit{\r\n  height: 45px;\r\n  margin-bottom: 1rem;\r\n}\r\n.impNote {\r\n  margin: 5px 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n}\r\n.impNoteMain {\r\n  margin: 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  line-height: 25px;\r\n}\r\n#viewButtonThree{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\nbox-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 1),\r\n12px 12px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n#skipBtn{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  margin-right: 20px;\r\nbox-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n12px 12px 14px rgba(0, 0, 0, 0.2);\r\n}\r\n.customBackground{\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background: white;\r\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n@media (max-width: 900px) {\r\nmain {\r\n    height: 100%;\r\n    overflow: auto;\r\n    }\r\n    select {\r\n\r\n        /* styling */\r\n        background-color: white;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        font: inherit;\r\n        padding: 5px 30px 5px 3px;\r\n      \r\n        /* reset */\r\n      \r\n        margin: 0;\r\n        box-sizing: border-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n      }\r\n      \r\n      \r\n      /* arrows */\r\n      \r\n      .classic {\r\n        background-image:\r\n          linear-gradient(45deg, transparent 50%, blue 50%),\r\n          linear-gradient(135deg, blue 50%, transparent 50%),\r\n          linear-gradient(to right, white, skyblue);\r\n        background-position:\r\n          calc(100% - 20px) calc(1em + 2px),\r\n          calc(100% - 15px) calc(1em + 2px),\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n      }\r\n      \r\n      .classic:focus {\r\n        background-image:\r\n          linear-gradient(45deg, white 50%, transparent 50%),\r\n          linear-gradient(135deg, transparent 50%, white 50%),\r\n          linear-gradient(to right, white, gray);\r\n        background-position:\r\n          calc(100% - 15px) 1em,\r\n          calc(100% - 20px) 1em,\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border-color: grey;\r\n        outline: 0;\r\n      }\r\n      .customBackground{\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n        background: white;\r\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktcGFnZS10aHJlZS9jb21wYXRpYmlsaXR5LXBhZ2UtdGhyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0tBQ2pCO0FBQ0w7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtpQ0FDaUM7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7aUNBQ2lDO0FBQ2pDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjttQ0FDaUM7QUFDbkM7QUFFQTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZDtJQUNBOztRQUVJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IseUJBQXlCOztRQUV6QixVQUFVOztRQUVWLFNBQVM7UUFHVCxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtNQUN2Qjs7O01BR0EsV0FBVzs7TUFFWDtRQUNFOzs7bURBRzJDO1FBQzNDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO01BQzlCOztNQUVBO1FBQ0U7OztnREFHd0M7UUFDeEM7OztnQkFHUTtRQUNSOzs7cUJBR2E7UUFDYiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFVBQVU7TUFDWjtNQUNBO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixpQkFBaUI7UUFDakI7eUNBQ2lDO01BQ25DO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wYXRpYmlsaXR5LWZvcm0vY29tcGF0aWJpbGl0eS1wYWdlLXRocmVlL2NvbXBhdGliaWxpdHktcGFnZS10aHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRSZWdpc3RlciB7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOiAjMjg1ZmRkXHJcbn1cclxuLmZpZWxkRml0e1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmltcE5vdGUge1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuLmltcE5vdGVNYWluIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiN2aWV3QnV0dG9uVGhyZWV7XHJcbiAgYmFja2dyb3VuZDogIzM0YjdmMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbmJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxyXG4xMnB4IDEycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuI3NraXBCdG57XHJcbiAgYmFja2dyb3VuZDogIzM0YjdmMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5ib3gtc2hhZG93OiAtMTJweCAtMTJweCAxNHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcclxuMTJweCAxMnB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5jdXN0b21CYWNrZ3JvdW5ke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbjEycHggMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcblxyXG4gICAgICAgIC8qIHN0eWxpbmcgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDNweDtcclxuICAgICAgXHJcbiAgICAgICAgLyogcmVzZXQgKi9cclxuICAgICAgXHJcbiAgICAgICAgbWFyZ2luOiAwOyAgICAgIFxyXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLyogYXJyb3dzICovXHJcbiAgICAgIFxyXG4gICAgICAuY2xhc3NpYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBibHVlIDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBibHVlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIHNreWJsdWUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgICAgICAxMDAlIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOlxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAyLjVlbSAyLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2xhc3NpYzpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB3aGl0ZSwgZ3JheSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIDFlbSxcclxuICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSxcclxuICAgICAgICAgIDEwMCUgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDIuNWVtIDIuNWVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmN1c3RvbUJhY2tncm91bmR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTEycHggLTEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wMyksXHJcbiAgICAgIDEycHggMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: _filter, CompatibilityPageThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityPageThreeComponent", function() { return CompatibilityPageThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../four-page.service */ "./src/app/compatibility-form/four-page.service.ts");










const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let CompatibilityPageThreeComponent = class CompatibilityPageThreeComponent {
    constructor(http, dialog, _formBuilder, router, notification, fourPageService, ngxNotificationService, spinner) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.notification = notification;
        this.fourPageService = fourPageService;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.time = {
            hour: 13,
            minute: 30
        };
        this.errors = [];
        this.authMobileNumberStatus = false;
        this.Occupation = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working', 'Not Alive'];
        // for only getting the autocomplete predictions
        this.autoComplete = {
            strictBounds: false,
            type: 'geocode',
            fields: ['name']
        };
        this.incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];
        this.PageThree = this._formBuilder.group({
            // tslint:disable-next-line: max-line-length
            BirthPlace: [''],
            BirthTime: [''],
            Gotra: [''],
            FoodChoice: [''],
            Mangalik: [''],
            FatherStatus: [''],
            MotherStatus: [''],
            FamilyIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999)])],
            Locality: ['']
        });
    }
    ngOnInit() {
        this.fourPageService.getListData.subscribe(() => {
            if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
                this.setFormThreeData(this.fourPageService.getProfile());
            }
        });
        // set home town in birth place from facebook
        this.fourPageService.facebookHomeTownUpdated.subscribe(res => {
            if (res) {
                this.PageThree.patchValue({
                    BirthPlace: res
                });
            }
        });
    }
    skip() {
        this.fourPageService.form3Completed.emit(true);
        setTimeout(() => {
            this.analyticsEvent('Skipped through Four Page Registration Page Three');
        }, 100);
    }
    isValid(notificationStatus) {
        //   if (this.birthPlace == null || this.birthPlace === '') {
        //     if (notificationStatus === 1) {
        //       this.ngxNotificationService.error('Select A Valid Birth Place');
        //     }
        //     return false;
        // }
        if (!this.PageThree.value.FoodChoice) {
            if (notificationStatus === 1) {
                this.ngxNotificationService.error('Select A Valid Food Choice');
            }
            return false;
        }
        else if (!this.PageThree.value.FatherStatus) {
            if (notificationStatus === 1) {
                this.ngxNotificationService.error('Select A Valid Father Status');
            }
            return false;
        }
        else if (!this.PageThree.value.MotherStatus) {
            if (notificationStatus === 1) {
                this.ngxNotificationService.error('Select A Valid Mother Status');
            }
            return false;
        }
        else if (!this.PageThree.value.FamilyIncome || !this.PageThree.controls.FamilyIncome.valid) {
            if (notificationStatus === 1) {
                this.ngxNotificationService.error('Enter A Valid Family Income');
            }
            return false;
        }
        else {
            return true;
        }
    }
    firstStep() {
        console.log(this.PageThree.value);
        if (!this.fourPageService.getUserThrough() && this.isValid(1) === false) {
            this.fourPageService.form3Completed.emit(false);
            return;
        }
        else {
            if (this.PageThree.value.FamilyIncome === "100+") {
                this.PageThree.value.FamilyIncome = 100;
            }
            else {
                const a = this.PageThree.value.FamilyIncome.split('-');
                this.PageThree.patchValue({
                    FamilyIncome: String((Number(a[0]) + Number(a[1])) / 2)
                });
            }
            if (localStorage.getItem('redParam') && localStorage.getItem('redParam') === 'pending_profile'
                && this.fourPageService.getUserThrough()) {
                const personalFormData = new FormData();
                const familyFormData = new FormData();
                personalFormData.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
                personalFormData.append('birth_place', this.PageThree.value.BirthPlace);
                if (this.PageThree.value.BirthTime) {
                    personalFormData.append('birth_time', this.PageThree.value.BirthTime);
                }
                personalFormData.append('food_choice', this.PageThree.value.FoodChoice);
                personalFormData.append('manglik', this.PageThree.value.Mangalik ?
                    this.PageThree.value.Mangalik === 'Don\'t Know' ? 'Anshik Manglik' : this.PageThree.value.Mangalik : '');
                personalFormData.append('gotra', this.PageThree.value.Gotra);
                personalFormData.append('is_lead', localStorage.getItem('getListLeadId'));
                personalFormData.append('identity_number', localStorage.getItem('getListIdentity'));
                personalFormData.append('temple_id', localStorage.getItem('getListTemple'));
                console.log('personal', personalFormData.get('birth_place'));
                return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', personalFormData).subscribe((response) => {
                    if (response.updatePerosnalDetails_status === 'Y') {
                        this.updateFormThreePersonalData(personalFormData);
                        familyFormData.append('father_status', this.PageThree.value.FatherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
                        familyFormData.append('mother_status', this.PageThree.value.MotherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
                        if (this.PageThree.value.FatherStatus !== 'Not Alive') {
                            familyFormData.append('occupation_father', this.PageThree.value.FatherStatus);
                        }
                        if (this.PageThree.value.MotherStatus !== 'Not Alive') {
                            familyFormData.append('occupation_mother', this.PageThree.value.MotherStatus);
                        }
                        familyFormData.append('family_income', this.PageThree.value.FamilyIncome);
                        familyFormData.append('locality', this.PageThree.value.Locality);
                        familyFormData.append('is_lead', localStorage.getItem('getListLeadId'));
                        familyFormData.append('identity_number', localStorage.getItem('getListIdentity'));
                        familyFormData.append('temple_id', localStorage.getItem('getListTemple'));
                        console.log('family', this.PageThree.value);
                        return this.http.post('https://partner.hansmatrimony.com/api/updateFamilyDetails', familyFormData).subscribe((response) => {
                            if (response.updateFamilyDetails_status === 'Y') {
                                this.updateFormThreeFamilyData(familyFormData);
                            }
                            else {
                                this.fourPageService.form3Completed.emit(false);
                                this.spinner.hide();
                                this.ngxNotificationService.error(response.message);
                            }
                        }, err => {
                            this.fourPageService.form3Completed.emit(false);
                            this.spinner.hide();
                            this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
                            console.log(err);
                        });
                    }
                    else {
                        this.fourPageService.form3Completed.emit(false);
                        this.spinner.hide();
                        this.ngxNotificationService.error(response.message);
                    }
                }, err => {
                    this.fourPageService.form3Completed.emit(false);
                    this.spinner.hide();
                    this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                });
            }
            else {
                const firststepdata = new FormData();
                firststepdata.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
                firststepdata.append('birth_place', this.PageThree.value.BirthPlace);
                if (this.PageThree.value.BirthTime) {
                    firststepdata.append('birth_time', this.PageThree.value.BirthTime);
                }
                firststepdata.append('food_choice', this.PageThree.value.FoodChoice);
                firststepdata.append('manglik', this.PageThree.value.Mangalik ?
                    this.PageThree.value.Mangalik === 'Don\'t Know' ? 'Anshik Manglik' : this.PageThree.value.Mangalik : '');
                firststepdata.append('gotra', this.PageThree.value.Gotra);
                firststepdata.append('father_status', this.PageThree.value.FatherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
                firststepdata.append('mother_status', this.PageThree.value.MotherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
                if (this.PageThree.value.FatherStatus !== 'Not Alive') {
                    firststepdata.append('occupation_father', this.PageThree.value.FatherStatus);
                }
                if (this.PageThree.value.MotherStatus !== 'Not Alive') {
                    firststepdata.append('occupation_mother', this.PageThree.value.MotherStatus);
                }
                firststepdata.append('family_income', this.PageThree.value.FamilyIncome);
                firststepdata.append('locality', this.PageThree.value.Locality);
                // tslint:disable-next-line: max-line-length
                return this.http.post('https://partner.hansmatrimony.com/api/formThreeProfile', firststepdata).subscribe((res) => {
                    console.log('first', res);
                    if (res.status === 1) {
                        this.spinner.hide();
                        if (this.fourPageService.getUserThrough()) {
                            this.updateFormThreeData(firststepdata);
                        }
                        else {
                            this.analyticsEvent('Four Page Registration Page Three');
                        }
                        // this.ngxNotificationService.success('Registered Successfully');
                    }
                    else {
                        this.fourPageService.form3Completed.emit(false);
                        this.spinner.hide();
                        this.ngxNotificationService.error(res.message);
                    }
                }, err => {
                    this.fourPageService.form3Completed.emit(false);
                    this.spinner.hide();
                    this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                });
            }
        }
    }
    setValue(item) {
        let vals = item.split('-');
        if (vals[0] == "100+")
            return "Rs 1+ Crore per year";
        else
            return "Rs. " + vals[0] + " - " + vals[1] + " Lakhs per year";
    }
    analyticsEvent(event) {
        if (!this.fourPageService.getUserThrough()) {
            window.ga('send', 'event', event, '', {
                hitCallback: () => {
                    console.log('Tracking ' + event + ' successful');
                }
            });
            // gtag app + web
            window.gtag('event', event, {
                event_callback: () => {
                    console.log('Tracking gtag ' + event + ' successful');
                }
            });
        }
    }
    placeChanged(type) {
        if (type === 'birth') {
            const birthPlace = document.querySelector('#birthPlace');
            setTimeout(() => {
                console.log(birthPlace.value);
                this.PageThree.patchValue({
                    BirthPlace: birthPlace.value
                });
                this.analyticsEvent('Four Page Registration Page Three Birth Place Changed');
            }, 200);
        }
        else {
            const locality = document.querySelector('#locality');
            setTimeout(() => {
                console.log(locality.value);
                this.PageThree.patchValue({
                    Locality: locality.value
                });
                this.analyticsEvent('Four Page Registration Page Three Locality Changed');
            }, 500);
        }
    }
    // tslint:disable-next-line: no-shadowed-variable
    changed(element) {
        console.log(element);
        switch (element) {
            case 'bTime':
                this.analyticsEvent('Four Page Registration Page Birth Time Changed');
                break;
            case 'gotra':
                this.analyticsEvent('Four Page Registration Page Three Gotra Changed');
                break;
            case 'food':
                this.analyticsEvent('Four Page Registration Page Three Food Choice Changed');
                break;
            case 'manglik':
                this.analyticsEvent('Four Page Registration Page Three Manglik Status Changed');
                break;
            case 'fstatus':
                this.analyticsEvent('Four Page Registration Page Three Father Status Changed');
                break;
            case 'mstatus':
                this.analyticsEvent('Four Page Registration Page Three Mother Status Changed');
                break;
            case 'Fincome':
                this.analyticsEvent('Four Page Registration Page Three Family Income Changed');
                break;
            default:
                break;
        }
        if (!this.fourPageService.getUserThrough() && this.isValid(0) === false) {
            this.fourPageService.form3Completed.emit(false);
            return;
        }
        else {
            this.fourPageService.form3Completed.emit(true);
        }
    }
    updateFormThreeData(profileData) {
        this.fourPageService.profile.birthPlace = profileData.get('birth_place') ?
            profileData.get('birth_place').toString() : '';
        this.fourPageService.profile.birthTime = profileData.get('birth_time') ?
            profileData.get('birth_time').toString() : '';
        this.fourPageService.profile.gotra = profileData.get('gotra') ? profileData.get('gotra').toString() : '';
        this.fourPageService.profile.foodChoice = profileData.get('food_choice') ?
            profileData.get('food_choice').toString() : '';
        this.fourPageService.profile.manglik = profileData.get('manglik') ? profileData.get('manglik').toString()
            : '';
        this.fourPageService.profile.fatherStatus = profileData.get('father_status') ?
            profileData.get('father_status').toString() : '';
        this.fourPageService.profile.motherStatus = profileData.get('mother_status') ?
            profileData.get('mother_status').toString() : '';
        this.fourPageService.profile.family.occupation = profileData.get('occupation_father') ?
            profileData.get('occupation_father').toString() : 'Not Working';
        this.fourPageService.profile.family.occupation_mother = profileData.get('occupation_mother') ?
            profileData.get('occupation_mother').toString() : 'Not Working';
        this.fourPageService.profile.familyIncome = profileData.get('family_income') ?
            profileData.get('family_income').toString() : '';
        console.log(this.fourPageService.getProfile());
        this.fourPageService.profile.locality = profileData.get('locality') ?
            profileData.get('locality').toString() : '';
        console.log(this.fourPageService.getProfile());
    }
    updateFormThreePersonalData(profileData) {
        this.fourPageService.profile.birthPlace = profileData.get('birth_place') ?
            profileData.get('birth_place').toString() : '';
        this.fourPageService.profile.birthTime = profileData.get('birth_time') ?
            profileData.get('birth_time').toString() : '';
        this.fourPageService.profile.gotra = profileData.get('gotra') ? profileData.get('gotra').toString() : '';
        this.fourPageService.profile.foodChoice = profileData.get('food_choice') ?
            profileData.get('food_choice').toString() : '';
        this.fourPageService.profile.manglik = profileData.get('manglik') ? profileData.get('manglik').toString()
            : '';
        console.log(this.fourPageService.getProfile());
    }
    updateFormThreeFamilyData(profileData) {
        this.fourPageService.profile.fatherStatus = profileData.get('father_status') ?
            profileData.get('father_status').toString() : '';
        this.fourPageService.profile.motherStatus = profileData.get('mother_status') ?
            profileData.get('mother_status').toString() : '';
        this.fourPageService.profile.family.occupation = profileData.get('occupation_father') ?
            profileData.get('occupation_father').toString() : 'Not Working';
        this.fourPageService.profile.family.occupation_mother = profileData.get('occupation_mother') ?
            profileData.get('occupation_mother').toString() : 'Not Working';
        this.fourPageService.profile.familyIncome = profileData.get('family_income') ?
            profileData.get('family_income').toString() : '';
        this.fourPageService.profile.locality = profileData.get('locality') ?
            profileData.get('locality').toString() : '';
        console.log(this.fourPageService.getProfile());
    }
    setFormThreeData(userProfile) {
        console.log("look here hjhjh", userProfile);
        this.birthPlaceText = userProfile.birthPlace ? userProfile.birthPlace : '';
        this.PageThree.patchValue({
            BirthPlace: userProfile.birthPlace,
            BirthTime: userProfile.birthTime,
            Gotra: userProfile.gotra,
            FoodChoice: userProfile.foodChoice,
            Mangalik: userProfile.manglik,
            FatherStatus: userProfile.fatherStatus === 'Alive' ? (userProfile.family.occupation && this.Occupation.includes(userProfile.family.occupation) ?
                userProfile.family.occupation : 'Not Working') : 'Not Working',
            MotherStatus: userProfile.motherStatus === 'Alive' ? (userProfile.family.occupation_mother && this.Occupation.includes(userProfile.family.occupation_mother) ?
                userProfile.family.occupation_mother : 'Not Working') : 'Not Working',
            FamilyIncome: userProfile.familyIncome,
            Locality: userProfile.locality
        });
        console.log(this.PageThree.value);
    }
};
CompatibilityPageThreeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_9__["FourPageService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otpModal', { static: false })
], CompatibilityPageThreeComponent.prototype, "otpModal", void 0);
CompatibilityPageThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-page-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-page-three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-page-three.component.css */ "./src/app/compatibility-form/compatibility-page-three/compatibility-page-three.component.css")).default]
    })
], CompatibilityPageThreeComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\n::ng-deep .mat-select-value {\r\n    color: black !important;\r\n}\r\n.fieldFit{\r\n  height: 45px;\r\n  margin-bottom: 1rem;\r\n}\r\n.backBtn{\r\n  border: 0px;\r\n  background: transparent;\r\n    height: 2rem;\r\n    margin-right: 115px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-right: 40px;\r\n    padding-left: inherit;\r\n}\r\n.backArrow{\r\n  width:20px;\r\n  margin:1%;\r\n}\r\n.impNote {\r\n  margin: 5px 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n}\r\n.impNoteMain {\r\n  margin: 0px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  color: #737373;\r\n  font-size: 0.85rem;\r\n  text-align: center;\r\n  letter-spacing: 2px;\r\n  line-height: 25px;\r\n}\r\n#viewButton2{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\nbox-shadow: \r\n12px 12px 12px rgba(0, 0, 0, 0.2);\r\n}\r\n#skipBtn{\r\n  background: #34b7f1;\r\n  color: white;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  margin-right: 20px;\r\nbox-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n12px 12px 14px rgba(0, 0, 0, 0.2);\r\n}\r\n.customBackground{\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background: white;\r\n  box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n@media (max-width: 900px) {\r\nmain {\r\n    height: 100%;\r\n    overflow: auto;\r\n    }\r\n    select {\r\n\r\n        /* styling */\r\n        background-color: white;\r\n        border-radius: 4px;\r\n        display: inline-block;\r\n        font: inherit;\r\n        padding: 5px 30px 5px 3px;\r\n      \r\n        /* reset */\r\n      \r\n        margin: 0;\r\n        box-sizing: border-box;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n      }\r\n      \r\n      \r\n      /* arrows */\r\n      \r\n      .classic {\r\n        background-image:\r\n          linear-gradient(45deg, transparent 50%, blue 50%),\r\n          linear-gradient(135deg, blue 50%, transparent 50%),\r\n          linear-gradient(to right, white, skyblue);\r\n        background-position:\r\n          calc(100% - 20px) calc(1em + 2px),\r\n          calc(100% - 15px) calc(1em + 2px),\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n      }\r\n      \r\n      .classic:focus {\r\n        background-image:\r\n          linear-gradient(45deg, white 50%, transparent 50%),\r\n          linear-gradient(135deg, transparent 50%, white 50%),\r\n          linear-gradient(to right, white, gray);\r\n        background-position:\r\n          calc(100% - 15px) 1em,\r\n          calc(100% - 20px) 1em,\r\n          100% 0;\r\n        background-size:\r\n          5px 5px,\r\n          5px 5px,\r\n          2.5em 2.5em;\r\n        background-repeat: no-repeat;\r\n        border-color: grey;\r\n        outline: 0;\r\n      }\r\n      .customBackground{\r\n        border-radius: 10px;\r\n        padding: 5px;\r\n        background: white;\r\n        box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n      12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n      }\r\n}\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktcGFnZS10d28vY29tcGF0aWJpbGl0eS1wYWdlLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7QUFDTDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtpQ0FDaUM7QUFDakM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7aUNBQ2lDO0FBQ2pDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjttQ0FDaUM7QUFDbkM7QUFFQTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZDtJQUNBOztRQUVJLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IseUJBQXlCOztRQUV6QixVQUFVOztRQUVWLFNBQVM7UUFHVCxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLHFCQUFxQjtNQUN2Qjs7O01BR0EsV0FBVzs7TUFFWDtRQUNFOzs7bURBRzJDO1FBQzNDOzs7Z0JBR1E7UUFDUjs7O3FCQUdhO1FBQ2IsNEJBQTRCO01BQzlCOztNQUVBO1FBQ0U7OztnREFHd0M7UUFDeEM7OztnQkFHUTtRQUNSOzs7cUJBR2E7UUFDYiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLFVBQVU7TUFDWjtNQUNBO1FBQ0UsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixpQkFBaUI7UUFDakI7eUNBQ2lDO01BQ25DO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wYXRpYmlsaXR5LWZvcm0vY29tcGF0aWJpbGl0eS1wYWdlLXR3by9jb21wYXRpYmlsaXR5LXBhZ2UtdHdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dFJlZ2lzdGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIHBhZGRpbmctdG9wOjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgY29sb3I6ICMyODVmZGRcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpZWxkRml0e1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbi5iYWNrQnRue1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiBpbmhlcml0O1xyXG59XHJcbi5iYWNrQXJyb3d7XHJcbiAgd2lkdGg6MjBweDtcclxuICBtYXJnaW46MSU7XHJcbn1cclxuLmltcE5vdGUge1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuLmltcE5vdGVNYWluIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzczNzM3MztcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuI3ZpZXdCdXR0b24ye1xyXG4gIGJhY2tncm91bmQ6ICMzNGI3ZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5ib3gtc2hhZG93OiBcclxuMTJweCAxMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbiNza2lwQnRue1xyXG4gIGJhY2tncm91bmQ6ICMzNGI3ZjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuYm94LXNoYWRvdzogLTEycHggLTEycHggMTRweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXHJcbjEycHggMTJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uY3VzdG9tQmFja2dyb3VuZHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4xMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBzZWxlY3Qge1xyXG5cclxuICAgICAgICAvKiBzdHlsaW5nICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAzMHB4IDVweCAzcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIC8qIHJlc2V0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMDsgICAgICBcclxuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8qIGFycm93cyAqL1xyXG4gICAgICBcclxuICAgICAgLmNsYXNzaWMge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgYmx1ZSA1MCUpLFxyXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgYmx1ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCBza3libHVlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxyXG4gICAgICAgICAgY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICAgICAgMTAwJSAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICA1cHggNXB4LFxyXG4gICAgICAgICAgMi41ZW0gMi41ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmNsYXNzaWM6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKSxcclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGdyYXkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sXHJcbiAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXHJcbiAgICAgICAgICAxMDAlIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOlxyXG4gICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAyLjVlbSAyLjVlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXN0b21CYWNrZ3JvdW5ke1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDMpLFxyXG4gICAgICAxMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgfVxyXG59XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: _filter, CompatibilityPageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityPageTwoComponent", function() { return CompatibilityPageTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _chat_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chat-service.service */ "./src/app/chat-service.service.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let CompatibilityPageTwoComponent = class CompatibilityPageTwoComponent {
    constructor(http, dialog, formBuilder, router, notification, fourPageService, ngxNotificationService, spinner, chatService) {
        this.http = http;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.notification = notification;
        this.fourPageService = fourPageService;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.chatService = chatService;
        this.showOccupation = false;
        this.showYearlyIncome = false;
        this.showWorkingCity = false;
        this.errors = [];
        this.authMobileNumberStatus = false;
        this.nextClickedTwo = false;
        // Educational Qualification
        this.HigherEducation = [{
                group: 'Engineering Design',
                mapping_id: 4,
                names: ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des']
            }, {
                group: 'Computers',
                mapping_id: 4,
                names: ['MCA\/PGDCA', 'BCA', 'B.IT']
            }, {
                group: 'Finance',
                mapping_id: 4,
                names: ['B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA']
            }, {
                group: 'Managment',
                mapping_id: 4,
                names: ['MBA\/PGDM', 'BBA', 'BHM']
            },
            {
                group: 'Medicine',
                mapping_id: 4,
                names: ['MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh']
            },
            {
                group: 'Law',
                mapping_id: 4,
                names: ['BL\/LLB', 'ML\/LLM']
            },
            {
                group: 'Arts\/Science"',
                mapping_id: 4,
                names: ['B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC']
            },
            {
                group: 'Doctorate',
                mapping_id: 4,
                names: ['Ph.D', 'M.Phil']
            },
            {
                group: 'Non Graduate',
                mapping_id: 4,
                names: ['Diploma', 'High School', '12th', 'Trade School', 'Other']
            }
        ];
        this.Occupation = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working'];
        this.designations = [
            'Owner',
            'Manager',
            'Sales Manager',
            'Accounts Manager',
            'Product Manager',
            'Software Engineer',
            'Engineer',
            'Hotel Management',
            'Operations Manager',
            'Sales Executive',
            'Operations Executive',
            'Accountant',
            'Marketing Manager',
            'Marketing Executive',
            'Chartered Accountant',
            'Owner',
            'Secretary',
            'Company Secretary',
            'Telesales Executive',
            'Teacher',
            'Clerk',
            'Office Assistant',
            'Relationship Manager',
            'Computer Operator',
            'Chief Executive Officer',
            'Chief Marketing Officer',
            'Chief Finance Officer',
            'Business Development',
            'Project Manager',
            'Program Manager',
            'Solution Architect',
            'Graphic Designer',
            'Content Writer',
            'Director',
            'Business Analyst',
            'Front Office',
            'Back office',
            'Counselor',
            'Event Manager',
            'Legal',
            'Public Relations',
            'Others',
            'Teacher',
            'Doctor',
            'Not Working'
        ];
        /** list of education groups filtered by search keyword for option groups */
        this.filteredEducationGroups = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"](1);
        /** list of designation filtered by search keyword for option groups */
        this.filteredDesignations = new rxjs__WEBPACK_IMPORTED_MODULE_11__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        // for only getting the autocomplete predictions
        this.autoComplete = {
            strictBounds: false,
            type: 'geocode',
            fields: ['name']
        };
        this.incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];
        this.workingCitySubject = new rxjs__WEBPACK_IMPORTED_MODULE_11__["BehaviorSubject"]([]);
        this.workingCities = this.workingCitySubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["shareReplay"])());
        this.PageTwo = this.formBuilder.group({
            // tslint:disable-next-line: max-line-length
            Qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            QualificationCtrl: [''],
            Occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Designation: [''],
            DesignationCtrl: [''],
            OtherDesignation: [''],
            AnnualIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Working: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            About: [''],
            abroad: ['']
        });
        fourPageService.pageOneUpdated.subscribe(status => {
            if (status) {
                this.setAbout();
                this.firstStep();
            }
        });
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.complete();
    }
    ngOnInit() {
        this.PageTwo = this.formBuilder.group({
            // tslint:disable-next-line: max-line-length
            Qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            QualificationCtrl: [''],
            Occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Designation: [''],
            DesignationCtrl: [''],
            OtherDesignation: [''],
            AnnualIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            Working: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            About: [''],
            abroad: ['']
        });
        // if user can pass through is true
        this.fourPageService.userThroughStatusUpdated.subscribe((status) => {
            if (status) {
                if (this.PageTwo) {
                    console.log('user get through', status, this.PageTwo);
                    this.fourPageService.formTwoGroup.emit(this.PageTwo);
                }
            }
        });
        // location from facebook
        this.fourPageService.facebookLocationUpdated.subscribe(res => {
            if (res) {
                this.PageTwo.patchValue({
                    Working: res
                });
            }
        });
        // load the initial eduation list
        this.filteredEducationGroups.next(this.copyEducationGroups(this.HigherEducation));
        // listen for search field value changes
        this.PageTwo.controls.QualificationCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.filterEducationGroups();
        });
        // load the initial designation list
        this.filteredDesignations.next(this.designations.slice());
        // listen for search field value changes
        this.PageTwo.controls.DesignationCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.filterDesignation();
        });
        // if user can get through and profile data has been retrieved
        this.fourPageService.getListData.subscribe(() => {
            if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
                console.log(this.fourPageService.getProfile());
                this.setFormForGetUserThrough();
                if (localStorage.getItem('getListId') || localStorage.getItem('getListMobile')) {
                    this.fourPageService.makeLinear.emit(true);
                }
            }
        });
        this.PageTwo.get('Working').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.workingCityFilter();
        });
    }
    workingCityFilter() {
        console.log(this.PageTwo.value.Working);
        if (this.PageTwo.value.Working) {
            this.http.get(`https://partner.hansmatrimony.com/api/getCities?search_city=${this.PageTwo.value.Working}`)
                .subscribe((response) => {
                console.log(response);
                this.workingCitySubject.next(response);
            }, err => {
                console.log(err);
            });
        }
    }
    copyEducationGroups(educationGroups) {
        const educationGroupsCopy = [];
        educationGroups.forEach(bankGroup => {
            educationGroupsCopy.push({
                group: bankGroup.group,
                names: bankGroup.names.slice()
            });
        });
        return educationGroupsCopy;
    }
    filterEducationGroups() {
        if (!this.HigherEducation) {
            return;
        }
        // get the search keyword
        let search = this.PageTwo.controls.QualificationCtrl.value;
        const educationGroupsCopy = this.copyEducationGroups(this.HigherEducation);
        if (!search) {
            this.filteredEducationGroups.next(educationGroupsCopy);
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredEducationGroups.next(educationGroupsCopy.filter(educationGroup => {
            const showBankGroup = educationGroup.group.toLowerCase().indexOf(search) > -1;
            if (!showBankGroup) {
                educationGroup.names = educationGroup.names.filter((bank) => {
                    bank = bank.toLowerCase().replace(/\./g, '');
                    return bank.toLowerCase().indexOf(search) > -1;
                });
            }
            return educationGroup.names.length > 0;
        }));
    }
    setValue(item) {
        const vals = item.split('-');
        if (vals[0] === '100+') {
            return 'Rs 1+ Crore per year';
        }
        else {
            return 'Rs. ' + vals[0] + ' - ' + vals[1] + ' Lakhs per year';
        }
    }
    filterDesignation() {
        if (!this.designations) {
            return;
        }
        // get the search keyword
        let search = this.PageTwo.controls.DesignationCtrl.value;
        if (!search) {
            this.filteredDesignations.next(this.designations.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        const designationResults = this.designations.filter(bank => bank.toLowerCase().indexOf(search) > -1);
        console.log(designationResults);
        if (designationResults.length !== 0) {
            this.filteredDesignations.next(designationResults);
        }
        else {
            this.filteredDesignations.next(this.designations.filter(bank => bank.toLowerCase().indexOf('other') > -1));
        }
    }
    skip() {
        this.fourPageService.formCompleted.emit(true);
        setTimeout(() => {
            this.analyticsEvent('Skipped through Four Page Registration Page Two');
        }, 100);
    }
    firstStep() {
        this.nextClickedTwo = true;
        this.errors = [];
        console.log(this.PageTwo.value.Working);
        let incomeCalc;
        if (this.PageTwo.valid) {
            if (this.PageTwo.value.AnnualIncome === '100+') {
                incomeCalc = 100;
            }
            else if (this.PageTwo.value.AnnualIncome) {
                const a = this.PageTwo.value.AnnualIncome.split('-');
                incomeCalc = String((Number(a[0]) + Number(a[1])) / 2);
            }
            if (!this.workingCity) {
                this.PageTwo.controls.Working.setValue(null);
                this.ngxNotificationService.error('Select Valid Working City');
                return;
            }
            const firststepdata = new FormData();
            firststepdata.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
            firststepdata.append('mobile', localStorage.getItem('mobile_number')
                ? localStorage.getItem('mobile_number') : localStorage.getItem('getListMobile'));
            firststepdata.append('degree', this.PageTwo.value.Qualification);
            firststepdata.append('occupation', this.PageTwo.value.Occupation);
            // if designation equals others set profession equals value of OtherDesignation only if OtherDesignation is not empty.
            firststepdata.append('profession', this.PageTwo.value.Designation !== 'Others'
                ? this.PageTwo.value.Designation : this.PageTwo.value.OtherDesignation ?
                this.PageTwo.value.OtherDesignation : this.PageTwo.value.Designation);
            firststepdata.append('annual_income', incomeCalc);
            firststepdata.append('working_city', this.PageTwo.value.Working);
            firststepdata.append('about', this.PageTwo.value.About);
            firststepdata.append('abroad', this.PageTwo.value.abroad);
            if (localStorage.getItem('redParam') && localStorage.getItem('redParam') === 'pending_profile'
                && this.fourPageService.getUserThrough()) {
                firststepdata.append('is_lead', localStorage.getItem('getListLeadId'));
                firststepdata.append('identity_number', localStorage.getItem('getListIdentity'));
                firststepdata.append('temple_id', localStorage.getItem('getListTemple'));
                return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', firststepdata).subscribe((response) => {
                    if (response.updatePerosnalDetails_status === 'Y') {
                        this.spinner.hide();
                        if (this.fourPageService.getUserThrough()) {
                            this.updateFormTwoData(firststepdata);
                        }
                    }
                    else {
                        this.fourPageService.formCompleted.emit(false);
                        this.spinner.hide();
                        this.ngxNotificationService.error(response.error_message ? response.error_message : 'Something went wrong');
                    }
                }, err => {
                    this.fourPageService.formCompleted.emit(false);
                    this.spinner.hide();
                    this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                });
            }
            else {
                // tslint:disable-next-line: max-line-length
                return this.http.post('https://partner.hansmatrimony.com/api/formTwoProfile', firststepdata).subscribe((res) => {
                    console.log('first', res);
                    if (res.status === 1) {
                        this.spinner.hide();
                        if (this.fourPageService.getUserThrough()) {
                            this.updateFormTwoData(firststepdata);
                        }
                        else {
                            this.chatService.formTwoCompleted.next(true);
                            window.fbq('track', 'CompleteRegistration', {
                                value: localStorage.getItem('id'),
                                content_name: localStorage.getItem('RegisterNumber'),
                            });
                            window.fbq('track', '692972151223870', 'CompleteRegistration', {
                                value: localStorage.getItem('id'),
                                content_name: localStorage.getItem('RegisterNumber'),
                            });
                            this.router.navigateByUrl('chat?first');
                            this.analyticsEvent('Four Page Registration Page Two');
                        }
                    }
                    else {
                        this.fourPageService.formCompleted.emit(false);
                        this.spinner.hide();
                        this.ngxNotificationService.error(res.message);
                    }
                }, err => {
                    this.fourPageService.formCompleted.emit(false);
                    this.spinner.hide();
                    this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
                    console.log(err);
                });
            }
        }
        else {
            // tslint:disable-next-line: forin
            for (const control in this.PageTwo.controls) {
                if (this.PageTwo.controls[control].invalid) {
                    this.errors.push(control);
                }
            }
            // this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
        }
    }
    analyticsEvent(event) {
        if (!this.fourPageService.getUserThrough()) {
            window.ga('send', 'event', event, '', {
                hitCallback: () => {
                    console.log('Tracking ' + event + ' successful');
                }
            });
            // gtag app + web
            window.gtag('event', event, {
                event_callback: () => {
                    console.log('Tracking gtag ' + event + ' successful');
                }
            });
        }
    }
    placeChanged() {
        setTimeout(() => {
            if (!this.workingCity) {
                this.PageTwo.controls.Working.setValue(null);
                this.ngxNotificationService.error('Select Valid Working City');
            }
        }, 500);
    }
    workingCityChanged(value) {
        console.log('selected working city', value);
        this.workingCity = value;
        this.setAbout();
        this.analyticsEvent('Four Page Registration Page Two Working City Changed');
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
    }
    changedQualification() {
        this.showOccupation = !this.showOccupation;
        console.log('changed Qualification');
        this.analyticsEvent('Four Page Registration Page Two Qualification Changed');
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
        this.setAbout();
    }
    changedOccupation() {
        console.log('changed Occupation');
        if (this.PageTwo.value.Occupation != 'Not Working') {
            this.showYearlyIncome = !this.showYearlyIncome;
        }
        else if (this.PageTwo.value.Occupation == 'Not Working') {
            this.showWorkingCity = !this.showWorkingCity;
            this.showYearlyIncome = false;
        }
        this.analyticsEvent('Four Page Registration Page Two Occupation Changed');
        switch (this.PageTwo.value.Occupation) {
            case 'Not Working':
                this.PageTwo.patchValue({
                    Designation: this.PageTwo.value.Occupation,
                    Working: 'na'
                });
                this.workplace = 'na';
                break;
            case 'Business/Self-Employed':
                this.PageTwo.patchValue({
                    Designation: 'Owner'
                });
                break;
            case 'Private Job' || false:
                this.PageTwo.patchValue({
                    Designation: ''
                });
                break;
            case 'Doctor' || false:
                this.PageTwo.patchValue({
                    Designation: this.PageTwo.value.Occupation
                });
                break;
            default:
                this.PageTwo.patchValue({
                    Designation: this.PageTwo.value.Designation ? this.PageTwo.value.Designation : ''
                });
                break;
        }
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
        this.setAbout();
    }
    changedDesignation() {
        console.log('changed Designation');
        this.analyticsEvent('Four Page Registration Page Two Designation Changed');
        switch (this.PageTwo.value.Occupation) {
            case 'Not Working':
                this.PageTwo.patchValue({
                    Designation: this.PageTwo.value.Occupation,
                    Working: 'na'
                });
                this.workplace = 'na';
                break;
            case 'Business/Self-Employed':
                this.PageTwo.patchValue({
                    Designation: 'Owner'
                });
                break;
            case 'Doctor' || false:
                this.PageTwo.patchValue({
                    Designation: this.PageTwo.value.Occupation
                });
                break;
            default:
                break;
        }
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
        this.setAbout();
    }
    incomeChanged(val) {
        console.log('changed yearly income');
        this.showWorkingCity = !this.showWorkingCity;
        console.log(this.PageTwo.value.AnnualIncome);
        this.analyticsEvent('Four Page Registration Page Two Annual Income Changed');
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
    }
    changedAbroad() {
        console.log('changed Abroad');
        this.analyticsEvent('Four Page Registration Page Two Abroad Status Changed');
        if (this.PageTwo.valid) {
            this.fourPageService.formCompleted.emit(true);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
        }
    }
    getQualification(text) {
        const groupIndex = this.HigherEducation.findIndex(element => {
            return element.names.includes(text);
        });
        const valueIndex = this.HigherEducation[groupIndex].names.findIndex(element => {
            return element.match(text);
        });
        return this.HigherEducation[groupIndex].names[valueIndex];
    }
    updateFormTwoData(profileData) {
        this.fourPageService.profile.qualification = profileData.get('degree') ?
            profileData.get('degree').toString() : '';
        this.fourPageService.profile.occupation = profileData.get('occupation') ?
            profileData.get('occupation').toString() : '';
        this.fourPageService.profile.designation = profileData.get('profession') ?
            profileData.get('profession').toString() : '';
        this.fourPageService.profile.annualIncome = profileData.get('annual_income') ?
            profileData.get('annual_income').toString() : '';
        this.fourPageService.profile.workingCity = profileData.get('working_city') ?
            profileData.get('working_city').toString() : '';
        this.fourPageService.profile.about = profileData.get('about') ?
            profileData.get('about').toString() : '';
        this.fourPageService.profile.abroad = profileData.get('abroad') ?
            profileData.get('abroad').toString() : '';
        console.log(this.fourPageService.getProfile());
    }
    setAge(dob) {
        if (dob != null) {
            return (Math.floor((Date.now() - new Date(dob.split('-').reverse().join('-')).getTime()) / (1000 * 60 * 60 * 24 * 365)));
        }
        else {
            return null;
        }
    }
    setAbout() {
        console.log(this.fourPageService.getProfile());
        const aboutObject = {
            dob: this.fourPageService.getProfile().dob ? `I am ${this.setAge(this.fourPageService.getProfile().dob)} yrs old ` : '',
            caste: this.fourPageService.getProfile().caste ?
                this.fourPageService.getProfile().caste !== 'All' ? this.fourPageService.getProfile().caste : '' : '',
            manglik: this.fourPageService.getProfile().manglik ? this.fourPageService.getProfile().manglik : '',
            gender: this.fourPageService.getProfile().gender ? this.fourPageService.getProfile().gender === 'Male' ? 'man' : 'woman' : '',
            locality: this.fourPageService.getProfile().locality ? ` residing in ${this.fourPageService.getProfile().locality}` : '',
            qualification: this.PageTwo.value.Qualification ? `. I've completed my ${this.PageTwo.value.Qualification}` : '',
            occupation: this.PageTwo.value.Occupation ?
                this.PageTwo.value.Occupation === 'Business/Self-Employed' ?
                    ' and Self-Employed' : this.PageTwo.value.Occupation === 'Not Working' ? 'currently not working'
                    : this.PageTwo.value.Occupation === 'Doctor' ||
                        this.PageTwo.value.Occupation === 'Teacher'
                        ? ` currently working as ${this.PageTwo.value.Occupation}` :
                        ` currently working in ${this.PageTwo.value.Occupation}` : '',
            working: this.PageTwo.value.Working ? this.PageTwo.value.Occupation !== 'Not Working' ? `in ${this.PageTwo.value.Working}` : '' : '',
            designation: this.PageTwo.value.Designation && this.PageTwo.value.Occupation ?
                this.PageTwo.value.Occupation === 'Business/Self-Employed' ||
                    this.PageTwo.value.Occupation === 'Teacher' ||
                    this.PageTwo.value.Occupation === 'Doctor' ? '' :
                    this.PageTwo.value.Occupation !== 'Not Working' ?
                        ` as ${this.PageTwo.value.Designation !== 'Others' ? this.PageTwo.value.Designation : ''}` : '' : '',
            OtherDesignation: !this.PageTwo.value.OtherDesignation ||
                this.PageTwo.value.Occupation === 'Business/Self-Employed' ||
                this.PageTwo.value.Occupation === 'Teacher' ||
                this.PageTwo.value.Occupation === 'Doctor' ||
                this.PageTwo.value.Occupation === 'Not Working' ? '' :
                this.PageTwo.value.Designation === 'Others' ? this.PageTwo.value.OtherDesignation : ''
        };
        console.log('Setting About');
        this.PageTwo.patchValue({
            // tslint:disable-next-line: max-line-length
            About: `${aboutObject.dob} ${aboutObject.caste} ${aboutObject.manglik} ${aboutObject.gender} ${aboutObject.locality} ${aboutObject.qualification} ${aboutObject.occupation} ${aboutObject.designation} ${aboutObject.OtherDesignation} ${aboutObject.working}.`
        });
    }
    setFormOneData(userProfile) {
        this.workplace = userProfile.workingCity ? userProfile.workingCity : '';
        this.PageTwo.patchValue({
            Qualification: userProfile.qualification ? this.getQualification(userProfile.qualification) : '',
            Occupation: userProfile.occupation,
            Designation: this.designations.includes(userProfile.designation) ? userProfile.designation : 'Others',
            OtherDesignation: userProfile.designation,
            AnnualIncome: userProfile.annualIncome,
            Working: userProfile.workingCity,
            About: this.setAgeIfNan(userProfile.about)
        });
        if (userProfile.workingCity) {
            this.workingCity = userProfile.workingCity;
        }
    }
    setAgeIfNan(value) {
        console.log(value);
        if (value && value.toLowerCase().includes('i am nan')) {
            return value.replace('NaN', `${this.setAge(this.fourPageService.getProfile().dob)}`);
        }
        else {
            return value;
        }
    }
    // setAgeIfNan(value: string) {
    //   if (value && value.toLowerCase().includes('i am nan')) {
    //       const aboutText = value.toLowerCase();
    //       aboutText.replace('nan', `${this.setAge(this.fourPageService.getProfile().dob)}`);
    //       const returnArray: string[] = aboutText.split(' ');
    //       returnArray.map(element => {
    //         element.slice(1).toUpperCase();
    //     });
    //       const returnText = returnArray.join(' ');
    //       return returnText;
    //   } else {
    //     return value;
    //   }
    // }
    // change PageTwo Form with no required fields
    setFormForGetUserThrough() {
        this.PageTwo = this.formBuilder.group({
            Qualification: [''],
            QualificationCtrl: [''],
            Occupation: [''],
            Designation: [''],
            DesignationCtrl: [''],
            OtherDesignation: [''],
            AnnualIncome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(999)],
            Working: [''],
            About: [''],
            abroad: ['']
        });
        this.setFormOneData(this.fourPageService.getProfile());
        // listen for search field value changes
        this.PageTwo.controls.QualificationCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.filterEducationGroups();
        });
        // listen for search field value changes
        this.PageTwo.controls.DesignationCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.filterDesignation();
        });
        this.PageTwo.get('Working').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.workingCityFilter();
        });
    }
};
CompatibilityPageTwoComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_10__["FourPageService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _chat_service_service__WEBPACK_IMPORTED_MODULE_8__["ChatServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otpModal', { static: false })
], CompatibilityPageTwoComponent.prototype, "otpModal", void 0);
CompatibilityPageTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-page-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-page-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-page-two.component.css */ "./src/app/compatibility-form/compatibility-page-two/compatibility-page-two.component.css")).default]
    })
], CompatibilityPageTwoComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".matPhotoCard{\r\n  background-color: white;\r\n  height: 35vh;\r\n  width: 100%;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.box1{\r\nwidth: 100%;\r\nheight: 100%;\r\ndisplay: flex;\r\nflex-direction: row;\r\nalign-items: center;\r\njustify-content: space-between;\r\n}\r\n.verticalBox{\r\n  flex: 1;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-left: 10px;\r\n}\r\n.flexIt{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n.photoDiv img {\r\n  border-radius: 5px\r\n}\r\n.uploadText{\r\n  margin-bottom: 0px;\r\n  color: #808080;\r\n}\r\n.facebookBtn {\r\n  background-color: #1266c6;\r\n    padding:9px 32px!important;\r\n    border-radius: 5px!important;\r\n}\r\n#photoBtn {\r\n    margin: 3px;\r\n}\r\n.impNote {\r\n    margin: 5px 0px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: #737373;\r\n    font-size: 0.85rem;\r\n  }\r\n.impNoteMain {\r\n    margin: 0px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: #737373;\r\n    font-size: 0.85rem;\r\n    text-align: center;\r\n  }\r\n.buttonSet{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktcGhvdG8vY29tcGF0aWJpbGl0eS1waG90by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQiw4QkFBOEI7QUFDOUI7QUFDQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjtBQUlBO0VBQ0U7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtJQUN2QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wYXRpYmlsaXR5LWZvcm0vY29tcGF0aWJpbGl0eS1waG90by9jb21wYXRpYmlsaXR5LXBob3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0UGhvdG9DYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMzV2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYm94MXtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IHJvdztcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi52ZXJ0aWNhbEJveHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mbGV4SXR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLnBob3RvRGl2IGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuLnVwbG9hZFRleHR7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcbi5mYWNlYm9va0J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyNjZjNjtcclxuICAgIHBhZGRpbmc6OXB4IDMycHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuI3Bob3RvQnRuIHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcbi5pbXBOb3RlIHtcclxuICAgIG1hcmdpbjogNXB4IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcblxyXG4gIC5pbXBOb3RlTWFpbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJ1dHRvblNldHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: _filter, CompatibilityPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityPhotoComponent", function() { return CompatibilityPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/find-open-history-profile.service */ "./src/app/find-open-history-profile.service.ts");










const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let CompatibilityPhotoComponent = class CompatibilityPhotoComponent {
    constructor(dialog, router, http, fourPageService, ngxNotificationService, spinner, itemService) {
        this.dialog = dialog;
        this.router = router;
        this.http = http;
        this.fourPageService = fourPageService;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.itemService = itemService;
        this.isCompleted5 = false;
        this.suc = [];
        this.photoScore = 0;
        this.clickedFacebook = false;
    }
    Cross_click() {
        this.dialog.closeAll();
    }
    preview(files, index) {
        if (files.length === 0) {
            return;
        }
        else {
            const mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = 'Only images are supported.';
                return;
            }
            this.spinner.show();
            const reader = new FileReader();
            this.imagePath = files[0];
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.uploadPhoto(this.imagePath, index);
            };
        }
    }
    previewFull(files, index) {
        if (files.length === 0) {
            return;
        }
        else {
            const mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = 'Only images are supported.';
                return;
            }
            this.spinner.show();
            const reader = new FileReader();
            this.fullimagePath = files[0];
            // console.log(this.fullimagePath)
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.fullimgURL = reader.result;
                this.uploadPhoto(this.fullimagePath, index);
                // console.log(this.fullimgURL);
            };
        }
    }
    previewfront(files, index) {
        if (files.length === 0) {
            return;
        }
        else {
            const mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = 'Only images are supported.';
                return;
            }
            this.spinner.show();
            const reader = new FileReader();
            this.frontimagePath = files[0];
            // console.log(this.frontimagePath);
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.uploadPhoto(this.frontimagePath, index);
            };
        }
    }
    previewBack(files, index) {
        if (files.length === 0) {
            return;
        }
        else {
            const mimeType = files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                this.message = 'Only images are supported.';
                return;
            }
            this.spinner.show();
            const reader = new FileReader();
            this.backimagePath = files[0];
            reader.readAsDataURL(files[0]);
            reader.onload = (_event) => {
                this.uploadPhoto(this.backimagePath, index);
            };
        }
    }
    uploadPhoto(data, index) {
        console.log(index);
        const photoBtn = document.getElementById('photoBtn');
        photoBtn.disabled = true;
        const uploadData = new FormData();
        uploadData.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
        uploadData.append('index', index);
        uploadData.append('image', data);
        if (localStorage.getItem('getListLeadId')) {
            uploadData.append('is_lead', localStorage.getItem('getListLeadId'));
        }
        else {
            uploadData.append('is_lead', '1');
        }
        return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(suc => {
            this.suc = suc;
            if (this.suc.pic_upload_status === 'Y') {
                console.log('photos', suc);
                this.spinner.hide();
                if (!this.clickedFacebook) {
                    this.ngxNotificationService.success('Photo Uploaded Succesfully!');
                }
                photoBtn.disabled = false;
                switch (index) {
                    case 1:
                        this.imgURL = this.suc.profile_pic_url;
                        this.fourPageService.profile.image1 = this.suc.profile_pic_url;
                        if (!this.frontfile && this.fourPageService.getUserThrough()) {
                            this.uploadPhoto(data, 2);
                        }
                        if (!this.BackimgURL && this.fourPageService.getUserThrough()) {
                            this.uploadPhoto(data, 3);
                        }
                        this.analyticsEvent('Image One Uploaded on Four Page Registration Page Four');
                        break;
                    case 2:
                        this.frontfile = this.suc.profile_pic_url;
                        this.fourPageService.profile.image2 = this.suc.profile_pic_url;
                        this.analyticsEvent('Image Two Uploaded on Four Page Registration Page Four');
                        break;
                    case 3:
                        this.BackimgURL = this.suc.profile_pic_url;
                        this.fourPageService.profile.image3 = this.suc.profile_pic_url;
                        this.analyticsEvent('Image Three Uploaded on Four Page Registration Page Four');
                        if (this.fourPageService.profile.photoScore > 1) {
                            this.fourPageService.form4Completed.emit(true);
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                this.spinner.hide();
                this.ngxNotificationService.error('Photo Upload Unsuccessful!');
            }
        }, err => {
            this.spinner.hide();
            this.ngxNotificationService.error('Photo could not be Uploaded!');
            console.log(err);
        });
    }
    // upload facebook image by first downloading it and then uploading it
    getImage(imageUrl, index) {
        this.getBase64ImageFromURL(imageUrl).subscribe((base64Data) => {
            this.base64TrimmedURL = base64Data;
            this.createBlobImageFileAndShow(index);
        });
    }
    getBase64ImageFromURL(url) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // create an image object
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = () => {
                    observer.next(this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = err => {
                    observer.error(err);
                };
            }
            else {
                observer.next(this.getBase64Image(img));
                observer.complete();
            }
        });
    }
    getBase64Image(img) {
        // We create a HTML canvas object that will create a 2d image
        let canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        const dataURL = canvas.toDataURL('image/png');
        this.base64DefaultURL = dataURL;
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
    }
    createBlobImageFileAndShow(index) {
        this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob) => {
            const imageBlob = blob;
            const imageName = this.generateName();
            // setting and uploading facebook pics..cant be made dynamic cause blob take certain time to create file path
            // our carousel index basically starts from 1 and not 0
            switch (index) {
                case 1:
                    this.facebookImageFile = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile, index);
                    }, 200);
                    break;
                case 2:
                    this.facebookImageFile2 = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile2);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile2, index);
                    }, 200);
                    break;
                case 3:
                    this.facebookImageFile3 = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile3);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile3, index);
                    }, 200);
                    break;
                case 4:
                    this.facebookImageFile4 = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile4);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile4, index);
                    }, 200);
                    break;
                case 5:
                    this.facebookImageFile5 = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile5);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile5, index);
                    }, 200);
                    break;
                case 6:
                    this.facebookImageFile6 = new File([imageBlob], imageName, {
                        type: 'image/jpeg'
                    });
                    this.generatedImage = window.URL.createObjectURL(this.facebookImageFile6);
                    setTimeout(() => {
                        this.uploadPhoto(this.facebookImageFile6, index);
                    }, 200);
                    break;
                default:
                    break;
            }
        });
    }
    dataURItoBlob(dataURI) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            const byteString = window.atob(dataURI);
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const int8Array = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                int8Array[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([int8Array], { type: 'image/jpeg' });
            observer.next(blob);
            observer.complete();
        });
    }
    generateName() {
        const date = new Date().valueOf();
        let text = '';
        const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
        }
        // Replace extension according to your media type like this
        return date + '.' + text + '.jpeg';
    }
    ngOnInit() {
        this.fourPageService.getListData.subscribe(() => {
            if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
                this.setPhotoData(this.fourPageService.getProfile());
            }
        });
        // set current profile picture from facebook
        this.fourPageService.facebookProfilePicUploaded.subscribe((link) => {
            if (link) {
                this.imgURL = link.url;
                this.getImage(this.imgURL, 1);
                // get profile pics from facebook
                if (!link.access_token) {
                    this.getFacebookPics();
                }
                else {
                    this.getFacebookPicsWithToken(link.user_id, link.access_token);
                }
            }
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.photoScore = this.fourPageService.profile.photoScore;
        }, 2000);
    }
    setPhotoData(userProfile) {
        console.log(userProfile);
        this.imgURL = userProfile.image1 ? userProfile.image1 : '';
        this.frontfile = userProfile.image2 ? userProfile.image2 : '';
        this.BackimgURL = userProfile.image3 ? userProfile.image3 : '';
    }
    photoScoreChanged(event) {
        console.log(event);
        this.fourPageService.profile.photoScore = event;
        if (event && event > 1) {
            this.fourPageService.form4Completed.emit(true);
        }
        else {
            this.fourPageService.form4Completed.emit(false);
        }
    }
    checkForPhoto() {
        if (this.fourPageService.getUserThrough() && localStorage.getItem('getListLeadId') !== '0') {
            this.fourPageService.profile.photoScore = this.photoScore;
            const userProfile = this.fourPageService.profile;
            console.log(userProfile);
            if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
                return this.ngxNotificationService.error('Select Image 1');
            }
            else if (userProfile.photoScore < 1) {
                return this.ngxNotificationService.error('Give a score');
            }
            else if (!localStorage.getItem('getListId') || !localStorage.getItem('getListMobile')) {
                console.log(this.fourPageService.getProfile().mobile);
                localStorage.setItem('mobile_number', this.fourPageService.getProfile().mobile);
            }
            else {
                this.skip(1);
            }
        }
        else {
            this.skip(0);
        }
        // else if (!userProfile.image2 || userProfile.image2 === null || userProfile.image2 === '') {
        //   return this.ngxNotificationService.error('Select Image 2');
        // } else if (!userProfile.image3 || userProfile.image3 === null || userProfile.image3 === '') {
        //   return this.ngxNotificationService.error('Select Image 3');
        // } 
    }
    analyticsEvent(event) {
        if (!this.fourPageService.getUserThrough()) {
            window.ga('send', 'event', event, '', {
                hitCallback: () => {
                    console.log('Tracking ' + event + ' successful');
                }
            });
            // gtag app + web
            window.gtag('event', event, {
                event_callback: () => {
                    console.log('Tracking gtag ' + event + ' successful');
                }
            });
        }
    }
    skip(type) {
        this.fourPageService.form4Completed.emit(true);
        this.gtag_report_conversion();
        // 0 -> got to chat  1-> got to fifth page
        // if type is 0 and  getListLeadId === 0 send to hot leads
        if (type === 0 && !this.fourPageService.getUserThrough()) {
            this.router.navigateByUrl('chat?first');
        }
        else if (type === 0 && localStorage.getItem('getListLeadId') !== '1') {
            window.open('https://partner.hansmatrimony.com/hot-leads');
        }
        if (type === 0) {
            this.analyticsEvent('User Skipped Photo Upload');
        }
        else {
            this.analyticsEvent('Four Page Registration Page Four');
        }
    }
    gtag_report_conversion() {
        window.gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC' });
        return false;
    }
    // get pics from facebook
    getFacebookPics() {
        this.clickedFacebook = true;
        // fetch user photos
        window.FB.api('/me/albums', 'GET', { fields: 'link,name' }, (response) => {
            console.log('album', response);
            if (response.data.length > 0) {
                response.data.forEach(element => {
                    if (element.name === 'प्रोफ़ाइल फ़ोटो' ||
                        element.name === 'Profile Photo' ||
                        element.name === 'Profile photo' ||
                        element.name === 'profile photo' ||
                        element.name.includes('Profile') || element.name.includes('प्रोफ़ाइल')) {
                        if (element.id) {
                            window.FB.api(`/${element.id}/photos`, 'GET', { fields: 'link' }, (res) => {
                                console.log('Photos', res);
                                if (res.data.length > 0) {
                                    res.data.forEach((element, index) => {
                                        if (index < 5) {
                                            if (element && element.id) {
                                                window.FB.api(`/${element.id}/picture`, 'GET', { redirect: 'false' }, (picRes) => {
                                                    console.log(picRes);
                                                    if (picRes.data && picRes.data.url) {
                                                        switch (index) {
                                                            case 0:
                                                                this.frontfile = picRes.data.url;
                                                                this.getImage(this.frontfile, 2);
                                                                break;
                                                            case 1:
                                                                this.BackimgURL = picRes.data.url;
                                                                this.getImage(this.BackimgURL, 3);
                                                                break;
                                                            default:
                                                                this.getImage(picRes.data.url, index + 2);
                                                                break;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                        else {
                                            return;
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.ngxNotificationService.warning('No Facebook Picture Found');
            }
        });
    }
    // get pics from facebook
    getFacebookPicsWithToken(userId, token) {
        this.clickedFacebook = true;
        // fetch user photos
        window.FB.api(`/${userId}/albums`, 'GET', {
            fields: 'link,name',
            access_token: token
        }, (response) => {
            console.log('album', response);
            if (response.data.length > 0) {
                response.data.forEach(element => {
                    if (element.name === 'प्रोफ़ाइल फ़ोटो' ||
                        element.name === 'Profile Photo' ||
                        element.name === 'Profile photo' ||
                        element.name === 'profile photo' ||
                        element.name.includes('Profile') || element.name.includes('प्रोफ़ाइल')) {
                        if (element.id) {
                            window.FB.api(`/${element.id}/photos`, 'GET', {
                                fields: 'link',
                                access_token: token
                            }, (res) => {
                                console.log('Photos', res);
                                if (res.data.length > 0) {
                                    res.data.forEach((element, index) => {
                                        if (index < 5) {
                                            if (element && element.id) {
                                                window.FB.api(`/${element.id}/picture`, 'GET', {
                                                    redirect: 'false',
                                                    access_token: token
                                                }, (picRes) => {
                                                    console.log(picRes);
                                                    if (picRes.data && picRes.data.url) {
                                                        switch (index) {
                                                            case 0:
                                                                this.frontfile = picRes.data.url;
                                                                this.getImage(this.frontfile, 2);
                                                                break;
                                                            case 1:
                                                                this.BackimgURL = picRes.data.url;
                                                                this.getImage(this.BackimgURL, 3);
                                                                break;
                                                            default:
                                                                this.getImage(picRes.data.url, index + 2);
                                                                break;
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                        else {
                                            return;
                                        }
                                    });
                                }
                            });
                        }
                    }
                });
            }
            else {
                this.ngxNotificationService.warning('No Facebook Picture Found');
            }
        });
    }
    // fetch fb current profile pic
    fetchFbCurrentProfilePic() {
        window.FB.api('/me/picture', 'GET', { height: '600', width: '400', redirect: 'false' }, (response) => {
            console.log(response.data.url);
            if (response.data.url) {
                this.imgURL = response.data.url;
                this.getImage(this.imgURL, 1);
                // get more  profile pics from facebook for second and third places in image grid
                this.getFacebookPics();
            }
        });
    }
    // for facebook photos when user has not given permission on first page
    loginToFacebookToGetPhotos() {
        window.FB.getLoginStatus((response) => {
            console.log(response);
            if (response.status === 'connected') {
                localStorage.setItem('fb_token', response.authResponse.accessToken);
                this.fetchFbCurrentProfilePic();
            }
            else {
                window.FB.login((response) => {
                    if (response.authResponse) {
                        console.log('Welcome!  Fetching your information.... ');
                        this.fetchFbCurrentProfilePic();
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, { scope: 'email, public_profile, user_photos, user_gender,user_birthday, user_hometown, user_location' });
            } // Returns the login status.
        });
    }
};
CompatibilityPhotoComponent.ctorParameters = () => [
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_8__["FourPageService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_9__["FindOpenHistoryProfileService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoModal', { static: false })
], CompatibilityPhotoComponent.prototype, "photoModal", void 0);
CompatibilityPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-photo.component.css */ "./src/app/compatibility-form/compatibility-photo/compatibility-photo.component.css")).default]
    })
], CompatibilityPhotoComponent);



/***/ }),

/***/ "./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixToolBar {\r\n    background-color: #0c9bf2;\r\n  }\r\n  .textRegister {\r\n      font-weight:bolder;\r\n      padding-top:1rem;\r\n      text-align: center;\r\n       color: #285fdd\r\n  }\r\n  main{\r\n    font-family: 'Gotham Rounded Book',Roboto, \"Helvetica Neue\", sans-serif !important; \r\n  }\r\n  .mat-stepper-horizontal{\r\n    background-color: white !important;\r\n  }\r\n  input.form-control.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n  }\r\n  select.form-control.ng-invalid.ng-touched{\r\n    border: 1px solid red;\r\n  }\r\n  ::ng-deep .mat-step-label{\r\n    color: black !important;\r\n  }\r\n  ::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done, .mat-step-header .mat-step-icon-state-edit{\r\n    background-color: #34b7f1 !important;\r\n    }\r\n  ::ng-deep .mat-stepper-horizontal-line {\r\n      border-top-color:black !important;\r\n      width: 80%;\r\n    }\r\n  ::ng-deep .mat-step-icon {\r\n  background-color: rgba(0,0,0,.6) !important;\r\n  }\r\n  ::ng-deep .mat-select-value {\r\n      color: black !important;\r\n  }\r\n  ::ng-deep .mat-checkbox-inner-container{\r\n    border: 1px solid black;\r\n  }\r\n  .fieldFit{\r\n    height: 45px;\r\n    margin-bottom: 1rem;\r\n  }\r\n  ::ng-deep .mat-hint{\r\n    color: rgba(0,0,0,.6);\r\n    padding-bottom: 5px;\r\n  }\r\n  .impNote {\r\n    margin: 5px 0px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: #737373;\r\n    font-size: 0.85rem;\r\n  }\r\n  .impNoteMain {\r\n    margin: 0px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    color: #737373;\r\n    font-size: 0.85rem;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    line-height: 25px;\r\n  }\r\n  .matSelect{\r\n    margin-top: 10px;\r\n  }\r\n  #viewButton{\r\n    background: #34b7f1;\r\n    color: white;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n  box-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n  12px 12px 14px rgba(0, 0, 0, 0.2);\r\n  }\r\n  /* .customBackground{\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n    background: white;\r\n    box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.1),\r\n  12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n  } */\r\n  @media (max-width: 900px) {\r\n  main {\r\n      height: 100%;\r\n      overflow: auto;\r\n      }\r\n      select {\r\n  \r\n          /* styling */\r\n          background-color: white;\r\n          border-radius: 4px;\r\n          display: inline-block;\r\n          font: inherit;\r\n          padding: 5px 30px 5px 3px;\r\n        \r\n          /* reset */\r\n        \r\n          margin: 0;\r\n          box-sizing: border-box;\r\n          -webkit-appearance: none;\r\n          -moz-appearance: none;\r\n        }\r\n        \r\n        \r\n        /* arrows */\r\n        \r\n        .classic {\r\n          background-image:\r\n            linear-gradient(45deg, transparent 50%, blue 50%),\r\n            linear-gradient(135deg, blue 50%, transparent 50%),\r\n            linear-gradient(to right, white, skyblue);\r\n          background-position:\r\n            calc(100% - 20px) calc(1em + 2px),\r\n            calc(100% - 15px) calc(1em + 2px),\r\n            100% 0;\r\n          background-size:\r\n            5px 5px,\r\n            5px 5px,\r\n            2.5em 2.5em;\r\n          background-repeat: no-repeat;\r\n          border: 1px solid #c8c8c8;\r\n  \r\n        }\r\n        \r\n        .classic:focus {\r\n          background-image:\r\n            linear-gradient(45deg, white 50%, transparent 50%),\r\n            linear-gradient(135deg, transparent 50%, white 50%),\r\n            linear-gradient(to right, white, gray);\r\n          background-position:\r\n            calc(100% - 15px) 1em,\r\n            calc(100% - 20px) 1em,\r\n            100% 0;\r\n          background-size:\r\n            5px 5px,\r\n            5px 5px,\r\n            2.5em 2.5em;\r\n          background-repeat: no-repeat;\r\n          border-color: grey;\r\n          outline: 0;\r\n        }\r\n        /* .customBackground{\r\n          border-radius: 10px;\r\n          padding: 5px;\r\n          background: white;\r\n          box-shadow: -12px -12px 12px 0 rgba(0, 0, 0, 0.03),\r\n        12px 12px 12px 0 rgba(0, 0, 0, 0.1);\r\n        } */\r\n  }\r\n  \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2NvbXBhdGliaWxpdHktdmVyaWZ5L2NvbXBhdGliaWxpdHktdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7RUFDM0I7RUFDQTtNQUNJLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsa0JBQWtCO09BQ2pCO0VBQ0w7RUFDQTtJQUNFLGtGQUFrRjtFQUNwRjtFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEM7RUFDQTtNQUNFLGlDQUFpQztNQUNqQyxVQUFVO0lBQ1o7RUFDRjtFQUNBLDJDQUEyQztFQUMzQztFQUVBO01BQ0ksdUJBQXVCO0VBQzNCO0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO21DQUNpQztFQUNqQztFQUNBOzs7Ozs7S0FNRztFQUVIO0VBQ0E7TUFDSSxZQUFZO01BQ1osY0FBYztNQUNkO01BQ0E7O1VBRUksWUFBWTtVQUNaLHVCQUF1QjtVQUN2QixrQkFBa0I7VUFDbEIscUJBQXFCO1VBQ3JCLGFBQWE7VUFDYix5QkFBeUI7O1VBRXpCLFVBQVU7O1VBRVYsU0FBUztVQUdULHNCQUFzQjtVQUN0Qix3QkFBd0I7VUFDeEIscUJBQXFCO1FBQ3ZCOzs7UUFHQSxXQUFXOztRQUVYO1VBQ0U7OztxREFHMkM7VUFDM0M7OztrQkFHUTtVQUNSOzs7dUJBR2E7VUFDYiw0QkFBNEI7VUFDNUIseUJBQXlCOztRQUUzQjs7UUFFQTtVQUNFOzs7a0RBR3dDO1VBQ3hDOzs7a0JBR1E7VUFDUjs7O3VCQUdhO1VBQ2IsNEJBQTRCO1VBQzVCLGtCQUFrQjtVQUNsQixVQUFVO1FBQ1o7UUFDQTs7Ozs7O1dBTUc7RUFDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS9jb21wYXRpYmlsaXR5LXZlcmlmeS9jb21wYXRpYmlsaXR5LXZlcmlmeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeFRvb2xCYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjOWJmMjtcclxuICB9XHJcbiAgLnRleHRSZWdpc3RlciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgICAgcGFkZGluZy10b3A6MXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgY29sb3I6ICMyODVmZGRcclxuICB9XHJcbiAgbWFpbntcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIFJvdW5kZWQgQm9vaycsUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXQuZm9ybS1jb250cm9sLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgc2VsZWN0LmZvcm0tY29udHJvbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXN0ZXAtbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSwgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0YjdmMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC42KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIC5maWVsZEZpdHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWhpbnR7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAuaW1wTm90ZSB7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG4gIC5pbXBOb3RlTWFpbiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdFNlbGVjdHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICN2aWV3QnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzM0YjdmMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogLTEycHggLTEycHggMTRweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXHJcbiAgMTJweCAxMnB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICAvKiAuY3VzdG9tQmFja2dyb3VuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgMTJweCAxMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIG1haW4ge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdCB7XHJcbiAgXHJcbiAgICAgICAgICAvKiBzdHlsaW5nICovXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggM3B4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgLyogcmVzZXQgKi9cclxuICAgICAgICBcclxuICAgICAgICAgIG1hcmdpbjogMDsgICAgICBcclxuICAgICAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIGFycm93cyAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jbGFzc2ljIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBibHVlIDUwJSksXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGJsdWUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHdoaXRlLCBza3libHVlKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICAgICAgICAxMDAlIDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAgIDVweCA1cHgsXHJcbiAgICAgICAgICAgIDIuNWVtIDIuNWVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM4Yzg7XHJcbiAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jbGFzc2ljOmZvY3VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIHdoaXRlIDUwJSksXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgd2hpdGUsIGdyYXkpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcclxuICAgICAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgMWVtLFxyXG4gICAgICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXHJcbiAgICAgICAgICAgIDEwMCUgMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTpcclxuICAgICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgICAgNXB4IDVweCxcclxuICAgICAgICAgICAgMi41ZW0gMi41ZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogLmN1c3RvbUJhY2tncm91bmR7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAtMTJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKSxcclxuICAgICAgICAxMnB4IDEycHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICB9ICovXHJcbiAgfVxyXG4gIFxyXG4gICAgIl19 */");

/***/ }),

/***/ "./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CompatibilityVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompatibilityVerifyComponent", function() { return CompatibilityVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../notifications.service */ "./src/app/notifications.service.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././profile */ "./src/app/compatibility-form/profile.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _four_page_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .././four-page.service */ "./src/app/compatibility-form/four-page.service.ts");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../language.service */ "./src/app/language.service.ts");












// export interface StateGroup {
//   letter: string;
//   names: string[];
// }
// export interface hd {
//   group: string;
//   mapping_id: number;
//   names: string[];
// }
// export const _filter = (opt: string[], value: string): string[] => {
//   const filterValue = value.toLowerCase();
//   return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
// };
let CompatibilityVerifyComponent = class CompatibilityVerifyComponent {
    constructor(http, dialog, _formBuilder, router, notification, fourPageService, languageService, ngxNotificationService, spinner) {
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.notification = notification;
        this.fourPageService = fourPageService;
        this.languageService = languageService;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.time = {
            hour: 13,
            minute: 30
        };
        this.errors = [];
        this.authMobileNumberStatus = false;
        this.formTwo = false;
        this.formThree = false;
        this.formFour = false;
        this.userProfile = new _profile__WEBPACK_IMPORTED_MODULE_8__["Profile"]();
        this.isLinear = true;
        this.isDisable = false;
        this.isAllCastePref = false;
        this.Status = ['Alive', 'Not Alive'];
        this.FamilyType = ['Joint', 'Nuclear'];
        this.Count = ['None', 0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.HouseType = ['Owned', 'Rented', 'Leased'];
        this.showApproveBtn = false;
        // for only getting the autocomplete predictions
        this.autoComplete = {
            strictBounds: false,
            type: 'geocode',
            fields: ['name']
        };
        this.verifyForm = this._formBuilder.group({
            // tslint:disable-next-line: max-line-length
            college: [''],
            company: [''],
            sisters_married: [0],
            sisters_unmarried: [0],
            brothers_married: [0],
            brothers_unmarried: [0],
            house_type: [''],
            family_type: [''],
            family_living_in: [''],
        });
    }
    ngOnInit() {
        // when the remote data gets uploaded
        this.fourPageService.getListData.subscribe((data) => {
            if (data) {
                console.log(this.fourPageService.getProfile());
                this.setData(this.fourPageService.getProfile());
            }
        }, err => {
            console.log(err);
        });
    }
    onDate(event) {
        console.log(event);
    }
    // set user data
    setData(profile) {
        this.verifyForm.patchValue({
            college: profile.college,
            company: profile.company,
            sisters_married: profile.family.married_daughters,
            sisters_unmarried: profile.family.unmarried_daughters,
            brothers_married: profile.family.married_sons,
            brothers_unmarried: profile.family.unmarried_sons,
            house_type: profile.family.house_type,
            family_type: profile.family.family_type,
            family_living_in: profile.family.city ? profile.family.city : '',
        });
    }
    placeChanged() {
        const familyIn = document.querySelector('#familyIn');
        setTimeout(() => {
            console.log(familyIn.value);
            this.verifyForm.patchValue({
                family_living_in: familyIn.value
            });
        }, 500);
    }
    onAutocompleteSelected(event) {
        console.log(event);
        this.verifyForm.value.family_living_in = event.formatted_address;
        console.log('address of family', this.verifyForm.value.family_living_in);
    }
    onLocationSelected(e) {
        this.locationFamily = e;
        this.lat = e.latitude;
        this.long = e.longitude;
        console.log('location of family', e);
    }
    onSubmitPersonal() {
        console.log(this.verifyForm.value);
        // console.log(this.verifyForm.valid);
        this.errors = [];
        if (this.verifyForm.valid) {
            const leadId = localStorage.getItem('getListLeadId');
            const id = localStorage.getItem('getListId');
            // const leadId = localStorage.getItem('is_lead');
            // const id = localStorage.getItem('id');
            const personalProfileDataForm = new FormData();
            personalProfileDataForm.append('id', id);
            personalProfileDataForm.append('is_lead', leadId);
            personalProfileDataForm.append('identity_number', localStorage.getItem('getListIdentity'));
            personalProfileDataForm.append('temple_id', localStorage.getItem('getListTemple'));
            personalProfileDataForm.append('college', this.verifyForm.value.college);
            personalProfileDataForm.append('company', this.verifyForm.value.company);
            console.log(personalProfileDataForm);
            this.http
                .post('https://partner.hansmatrimony.com/api/updatePersonalDetails', personalProfileDataForm)
                .subscribe((data) => {
                console.log(data);
                if (data.updatePerosnalDetails_status === 'Y') {
                    this.fourPageService.profile.college = this.verifyForm.value.college;
                    this.fourPageService.profile.company = this.verifyForm.value.company;
                    this.onSubmitFamily();
                }
                else {
                    this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
                }
            }, (error) => {
                console.log(error);
                this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
            });
        }
        else {
            for (const control in this.verifyForm.controls) {
                console.log(this.verifyForm.controls[control].value);
                if (!this.verifyForm.controls[control].valid) {
                    this.errors.push(control);
                }
            }
            if (this.errors[0]) {
                this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
            }
        }
    }
    onSubmitFamily() {
        const newFamilyForm = new FormData();
        const leadId = localStorage.getItem('getListLeadId');
        const id = localStorage.getItem('getListId');
        // const leadId = localStorage.getItem('is_lead');
        //   const id = localStorage.getItem('id');
        newFamilyForm.append('id', id);
        newFamilyForm.append('is_lead', leadId);
        newFamilyForm.append('identity_number', localStorage.getItem('getListIdentity'));
        newFamilyForm.append('temple_id', localStorage.getItem('getListTemple'));
        newFamilyForm.append('family_type', this.verifyForm.value.family_type);
        newFamilyForm.append('house_type', this.verifyForm.value.house_type);
        newFamilyForm.append('married_sons', this.verifyForm.value.brothers_married);
        newFamilyForm.append('unmarried_sons', this.verifyForm.value.brothers_unmarried);
        newFamilyForm.append('married_daughters', this.verifyForm.value.sisters_married);
        newFamilyForm.append('unmarried_daughters', this.verifyForm.value.sisters_unmarried);
        newFamilyForm.append('city', this.verifyForm.value.family_living_in);
        this.http
            .post('https://partner.hansmatrimony.com/api/updateFamilyDetails', newFamilyForm)
            .subscribe((data) => {
            console.log(data);
            console.log('Family Deatils Updated successfully');
            if (data.updateFamilyDetails_status === 'Y') {
                this.updateVerifyFormData(newFamilyForm);
                if (this.fourPageService.getUserThrough() && this.fourPageService.showApproveBtn) {
                    this.validate(this.fourPageService.profile);
                }
            }
            else {
                this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
            }
        }, (error) => {
            console.log(error);
            this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        });
    }
    updateVerifyFormData(profileData) {
        this.fourPageService.profile.college = this.verifyForm.value.college;
        this.fourPageService.profile.company = this.verifyForm.value.company;
        this.fourPageService.profile.family.married_daughters = profileData.get('married_daughters').toString();
        this.fourPageService.profile.family.unmarried_daughters = profileData.get('unmarried_daughters').toString();
        this.fourPageService.profile.family.married_sons = profileData.get('married_sons').toString();
        this.fourPageService.profile.family.unmarried_sons = profileData.get('unmarried_sons').toString();
        this.fourPageService.profile.family.city = profileData.get('city') ? profileData.get('city').toString() : '';
        this.fourPageService.profile.family.house_type = profileData.get('house_type') ? profileData.get('house_type').toString() : '';
        this.fourPageService.profile.family.family_type = profileData.get('family_type') ? profileData.get('family_type').toString() : '';
        console.log(this.fourPageService.getProfile());
    }
    clearHistory() {
        localStorage.setItem('getListId', '');
        localStorage.setItem('getListLeadId', '');
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('id', '');
    }
    approveProfileApi() {
        const approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('photo_score', this.fourPageService.getProfile().photoScore.toString());
        if (localStorage.getItem('redParam') && localStorage.getItem('redParam') === 'pending_profile'
            && this.fourPageService.getUserThrough()) {
            approveData.append('is_key', 'yes');
            approveData.append('auth_temp', localStorage.getItem('getListTempleId'));
        }
        else {
            approveData.append('temple_id', localStorage.getItem('getListTempleId'));
        }
        approveData.append('is_approve', '1');
        this.http.post('https://partner.hansmatrimony.com/api/ApproveProfile', approveData).subscribe((data) => {
            console.log(data);
            if (data.status === '1') {
                if (localStorage.getItem('redParam')) {
                    if (localStorage.getItem('redParam') === '0') {
                        window.open('https://partner.hansmatrimony.com/home', '_top', null, true);
                    }
                    else if (localStorage.getItem('redParam') === 'pending_profile') {
                        window.open('https://partner.hansmatrimony.com/profile_approval/getFreeUserProfile', '_top', null, true);
                    }
                    else {
                        window.open('https://partner.hansmatrimony.com/find', '_top', null, true);
                    }
                }
                else if (localStorage.getItem('fourthParam')) {
                    if (localStorage.getItem('fifthParam') === '1') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '2') {
                        window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=' + localStorage.getItem('fourthParam') +
                            '&temple_id=' + localStorage.getItem('getListTempleId'), '_top', null, true);
                    }
                    else if (localStorage.getItem('fifthParam') === '3') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '4') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else if (localStorage.getItem('fifthParam') === '5') {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/subscriptionSeens', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/subscriptionSeens?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                    else {
                        if (localStorage.getItem('fourthParam') === '0') {
                            window.open('https://partner.hansmatrimony.com/pendingApproval', '_top', null, true);
                        }
                        else {
                            window.open('https://partner.hansmatrimony.com/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
                        }
                    }
                }
                else if (localStorage.getItem('extra')) {
                    if (localStorage.getItem('extra') === '2') {
                        window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=1&temple_id=' +
                            localStorage.getItem('getListTempleId'), '_top', null, true);
                    }
                    else if (localStorage.getItem('extra') === '3') {
                        window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                    }
                    else if (localStorage.getItem('extra') === '4') {
                        window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                    }
                }
                else {
                    if (localStorage.getItem('getListMobile')) { // mode 3
                        window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                    }
                    else if (localStorage.getItem('getListId')) { // mode 2
                        window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                    }
                }
                // this is old logic , not changing this
                // if (localStorage.getItem('getListMobile')) { // mode 3
                //   window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
                // } else if (localStorage.getItem('getListId')) { // mode 2
                //   window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                // }
                this.fourPageService.showApproveBtn = false;
                this.clearHistory();
            }
            else {
                if (data.message) {
                    this.ngxNotificationService.error(data.message);
                }
                else {
                    this.ngxNotificationService.error('Not Approved');
                }
            }
        }, err => {
            console.log(err);
            this.ngxNotificationService.error(err.message, 'Not Approved');
        });
    }
    validate(userProfile) {
        console.log(userProfile);
        if (userProfile.name === null || userProfile.name === '') {
            return this.ngxNotificationService.error('Enter Name');
        }
        else if (userProfile.mobile === null || userProfile.mobile === '') {
            return this.ngxNotificationService.error('Enter Mobile Number');
        }
        else if (userProfile.relation === null || userProfile.relation === '') {
            return this.ngxNotificationService.error('Select Relation');
        }
        else if (userProfile.gender === null || userProfile.gender === '') {
            return this.ngxNotificationService.error('Select Gender');
        }
        else if (userProfile.dob === null || userProfile.dob === '') {
            return this.ngxNotificationService.error('Enter D.O.B');
        }
        else if (userProfile.height === null || userProfile.height === '') {
            return this.ngxNotificationService.error('Select Height');
        }
        else if (userProfile.weight === null || userProfile.weight === '') {
            return this.ngxNotificationService.error('Enter Weight');
        }
        else if (userProfile.martialStatus === null || userProfile.martialStatus === '') {
            return this.ngxNotificationService.error('Select Marital Status');
        }
        else if (userProfile.annualIncome === null || userProfile.annualIncome === '') {
            return this.ngxNotificationService.error('Enter Annual Income');
        }
        else if (userProfile.religion === null || userProfile.religion === '') {
            return this.ngxNotificationService.error('Select Religion');
        }
        else if (userProfile.caste === null || userProfile.caste === '') {
            return this.ngxNotificationService.error('Select Caste');
        }
        else if (userProfile.qualification === null || userProfile.qualification === '') {
            return this.ngxNotificationService.error('Select Qualification');
        }
        else if (userProfile.occupation === null || userProfile.occupation === '') {
            return this.ngxNotificationService.error('Select Occupation');
        }
        else if (userProfile.designation === null || userProfile.designation === '') {
            return this.ngxNotificationService.error('Enter Designation');
        }
        else if (userProfile.occupation !== 'Not Working' && userProfile.workingCity === null || userProfile.workingCity === '') {
            return this.ngxNotificationService.error('Enter Working City');
        }
        else if (userProfile.manglik === null || userProfile.manglik === '') {
            return this.ngxNotificationService.error('Select Manglik Status');
        }
        else if (userProfile.locality === null || userProfile.locality === '') {
            return this.ngxNotificationService.error('Enter Locality');
        }
        else if (userProfile.about === null || userProfile.about === '') {
            return this.ngxNotificationService.error('Enter About');
        }
        else if (userProfile.birthPlace === null || userProfile.birthPlace === '') {
            return this.ngxNotificationService.error('Enter Birth Place');
        }
        else if (userProfile.foodChoice === null || userProfile.foodChoice === '') {
            return this.ngxNotificationService.error('Select Food Choice');
        }
        else if (userProfile.fatherStatus === null || userProfile.fatherStatus === '') {
            return this.ngxNotificationService.error('Select Father Status');
        }
        else if (userProfile.motherStatus === null || userProfile.motherStatus === '') {
            return this.ngxNotificationService.error('Select Mother Status');
        }
        else if (userProfile.familyIncome === null || userProfile.familyIncome === '') {
            return this.ngxNotificationService.error('Enter Family Income');
        }
        else if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
            return this.ngxNotificationService.error('Select Image 1');
        }
        else if (!(userProfile.college || userProfile.college === '') && this.verifyForm.controls.college.invalid) {
            return this.ngxNotificationService.error('Enter College Name');
        }
        else if ((!userProfile.company || userProfile.company === '') && this.verifyForm.controls.company.invalid) {
            return this.ngxNotificationService.error('Enter Company Name');
        }
        else if (userProfile.fatherStatus !== 'Not Alive' && userProfile.fatherStatus !== 'Not Working' &&
            userProfile.family.occupation === null || userProfile.family.occupation === '') {
            return this.ngxNotificationService.error('Select Father Occupation');
        }
        else if (userProfile.motherStatus !== 'Not Alive' && userProfile.motherStatus !== 'Not Working' &&
            userProfile.family.occupation_mother === null || userProfile.family.occupation_mother === '') {
            return this.ngxNotificationService.error('Select Mother Occupation');
        }
        else if (userProfile.family.married_daughters == null) {
            return this.ngxNotificationService.error('Select Married Sisters');
        }
        else if (userProfile.family.unmarried_daughters == null) {
            return this.ngxNotificationService.error('Select Un Married Sisters');
        }
        else if (userProfile.family.married_sons == null) {
            return this.ngxNotificationService.error('Select Married Brothers');
        }
        else if (userProfile.family.unmarried_sons == null) {
            return this.ngxNotificationService.error('Select Un Married Brothers');
        }
        else if ((!userProfile.family.house_type || userProfile.family.house_type === '') &&
            this.verifyForm.controls.house_type.invalid) {
            return this.ngxNotificationService.error('Select House Type');
        }
        else if ((!userProfile.family.family_type || userProfile.family.family_type === '') &&
            this.verifyForm.controls.family_type.invalid) {
            return this.ngxNotificationService.error('Select Family Type');
        }
        else if ((!userProfile.family.city || userProfile.family.city === '') &&
            this.verifyForm.controls.family_living_in.invalid) {
            return this.ngxNotificationService.error('Enter Family Living In');
        }
        else if (userProfile.photoScore < 1) {
            return this.ngxNotificationService.error('Give a score');
        }
        else {
            this.approveProfileApi();
        }
    }
};
CompatibilityVerifyComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _four_page_service__WEBPACK_IMPORTED_MODULE_10__["FourPageService"] },
    { type: _language_service__WEBPACK_IMPORTED_MODULE_11__["LanguageService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
CompatibilityVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compatibility-verify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compatibility-verify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compatibility-verify.component.css */ "./src/app/compatibility-form/compatibility-verify/compatibility-verify.component.css")).default]
    })
], CompatibilityVerifyComponent);



/***/ }),

/***/ "./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-dialog-container {\r\n    padding: 0px;\r\n    background: white;\r\n    color: black;\r\n    max-height: 79vh;\r\n}\r\n::ng-deep .mat-dialog-content{\r\n    max-height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop{\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n}\r\n::ng-deep .mat-form-field-label{\r\n    color: black;\r\n}\r\n.bolder{\r\n    font-weight: bolder;\r\n    font-size: 1.3rem;\r\n    margin-top: 20px;\r\n}\r\nstrong {\r\n    font-family: sans-serif;\r\n}\r\n#cancel{\r\n    position: absolute;\r\n    z-index: 99999999;\r\n    right: 0;\r\n    top: -5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL2Zvcm1zLW1lc3NhZ2UtZGlhbG9nL2Zvcm1zLW1lc3NhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkVBQTJFO0FBQy9FO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wYXRpYmlsaXR5LWZvcm0vZm9ybXMtbWVzc2FnZS1kaWFsb2cvZm9ybXMtbWVzc2FnZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXgtaGVpZ2h0OiA3OXZoO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250ZW50e1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uYm9sZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5zdHJvbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuI2NhbmNlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC01cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FormsMessageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsMessageDialogComponent", function() { return FormsMessageDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let FormsMessageDialogComponent = class FormsMessageDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
FormsMessageDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
FormsMessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-message-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms-message-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forms-message-dialog.component.css */ "./src/app/compatibility-form/forms-message-dialog/forms-message-dialog.component.css")).default]
    })
], FormsMessageDialogComponent);



/***/ }),

/***/ "./src/app/compatibility-form/four-page.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/compatibility-form/four-page.service.ts ***!
  \*********************************************************/
/*! exports provided: FourPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourPageService", function() { return FourPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/app/compatibility-form/profile.ts");



let FourPageService = class FourPageService {
    constructor() {
        // page two form event
        this.formCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formTwoGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // page three form event
        this.form3Completed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // page four form event
        this.form4Completed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getListData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.makeLinear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageOneUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.profile = new _profile__WEBPACK_IMPORTED_MODULE_2__["Profile"]();
        this.userThroughGetList = false;
        // will be used to notify user can pass through or not to all the sections
        this.userThroughStatusUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allCasteListUpdated = false;
        this.skippable = false;
        this.allCastes = [];
        this.facebookProfilePicUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.facebookHomeTownUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.facebookLocationUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showApproveBtn = false;
    }
    setSkippable(status) {
        this.skippable = status;
    }
    getSkippable() {
        return this.skippable;
    }
    setUserThrough(status) {
        this.userThroughGetList = status;
        this.userThroughStatusUpdated.emit(status);
    }
    getUserThrough() {
        return this.userThroughGetList;
    }
    setAllCastes(castesList) {
        if (castesList) {
            this.allCastes = castesList;
        }
    }
    getAllCastes() {
        if (this.allCastes.length > 0) {
            return [...this.allCastes];
        }
        else {
            return null;
        }
    }
    setProfile(profile) {
        console.log(this.profile);
        this.profile = profile;
    }
    getProfile() {
        return this.profile;
    }
    updateFormOneData(userData) {
        console.log(userData);
        this.profile.name = userData.get('name') ?
            userData.get('name').toString() : '';
        this.profile.mobile = userData.get('mobile') ?
            userData.get('mobile').toString() : '';
        this.profile.email = userData.get('email') ?
            userData.get('email').toString() : '';
        this.profile.relation = userData.get('relation') ?
            userData.get('relation').toString() : '';
        this.profile.gender = userData.get('gender') ?
            userData.get('gender').toString() : '';
        this.profile.dob = userData.get('birth_date') ?
            userData.get('birth_date').toString() : '';
        this.profile.height = userData.get('height') ?
            userData.get('height').toString() : '';
        this.profile.weight = userData.get('weight') ?
            userData.get('weight').toString() : '';
        this.profile.martialStatus = userData.get('marital_status') ?
            userData.get('marital_status').toString() : '';
        this.profile.religion = userData.get('religion') ?
            userData.get('religion').toString() : '';
        this.profile.caste = userData.get('caste') ?
            userData.get('caste').toString() : '';
        this.profile.disabledPart = userData.get('disabled_part') ?
            userData.get('disabled_part').toString() : '';
        console.log(this.profile);
        this.pageOneUpdated.emit(true);
    }
};
FourPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FourPageService);



/***/ }),

/***/ "./src/app/compatibility-form/register-with/register-with.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/compatibility-form/register-with/register-with.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n/* ::ng-deep .mat-dialog-container{\r\n    border-radius: 15px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop {\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n  } */\r\nmain{\r\n    border-radius: 15px;\r\n    background-color: white;\r\n}\r\n.heading {\r\n    color: #353635d7;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n    padding: 20px 0px 3px 0px;\r\n}\r\n.btnDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 20px auto 30px auto; \r\n    color:rgba(0, 0, 0, 0.685)\r\n}\r\n.btnDiv button {\r\n    padding: 5px 30px;\r\n    /* border-radius: 50px; */\r\n    font-size: 1.1rem;\r\n    color: white;\r\n    font-weight: 500;\r\n}\r\n#facebook {\r\n    background-color: #1266c6;\r\n    padding:9px 32px!important;\r\n    border-radius: 5px!important;\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;justify-content:center;\r\n}\r\n#truecaller {\r\n    text-decoration:underline;\r\n    background:transparent;\r\n    padding:8px 14px!important;\r\n    border-radius: 5px!important;\r\n    border:0px;\r\n    color: rgba(92, 90, 90, 0.788);\r\n}\r\n#viewButton{\r\n    font-weight: 600;\r\n    background: #34b7f1;\r\n    color: #fffefe;\r\n    padding-left: 40px;\r\n    padding-right: 40px;\r\n  box-shadow: -12px -12px 14px 0 rgba(255, 255, 255, 1),\r\n  12px 12px 14px rgba(0, 0, 0, 0.2);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL3JlZ2lzdGVyLXdpdGgvcmVnaXN0ZXItd2l0aC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBOzs7OztLQUtLO0FBQ0w7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0I7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUIsQ0FBQyxzQkFBc0I7QUFDOUM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO21DQUNpQztFQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS9yZWdpc3Rlci13aXRoL3JlZ2lzdGVyLXdpdGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi8qIDo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjc1KSwgcmdiYSgwLCAwLCAwLCAwLjc1KSk7XHJcbiAgfSAqL1xyXG5tYWlue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMzUzNjM1ZDc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAzcHggMHB4O1xyXG59XHJcbi5idG5EaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDMwcHggYXV0bzsgXHJcbiAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNjg1KVxyXG59XHJcbi5idG5EaXYgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4O1xyXG4gICAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjY2YzY7XHJcbiAgICBwYWRkaW5nOjlweCAzMnB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG59XHJcbiN0cnVlY2FsbGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzo4cHggMTRweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDkyLCA5MCwgOTAsIDAuNzg4KTtcclxufVxyXG4jdmlld0J1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xyXG4gICAgY29sb3I6ICNmZmZlZmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IC0xMnB4IC0xMnB4IDE0cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxyXG4gIDEycHggMTJweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/compatibility-form/register-with/register-with.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/compatibility-form/register-with/register-with.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterWithComponent", function() { return RegisterWithComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let RegisterWithComponent = class RegisterWithComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
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
    checkLoginState() {
        FB.getLoginStatus((response) => {
            alert(response.status);
            // tslint:disable-next-line: max-line-length
            // window.location.href = 'https://www.facebook.com/dialog/oauth?' + 'client_id=' + '449447648971731' + '&redirect_uri=' + 'https://quizzical-spence-a0c256.netlify.app/fourReg' + '&scope=' + 'public_profile,email,name';
            // tslint:disable-next-line: max-line-length
            window.location.href = `https://www.facebook.com/v8.0/dialog/oauth?client_id=449447648971731&redirect_uri=https://localhost:4200/fourReg`;
        });
    }
    loadFacebookScript() {
        const razor = document.getElementById('razorPay');
        if (!razor) {
            const fileName = document.createElement('script');
            fileName.async = true;
            fileName.defer = true;
            fileName.crossOrigin = 'anonymous';
            fileName.setAttribute('type', 'text/javascript');
            fileName.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js');
            document.body.appendChild(fileName);
        }
    }
};
RegisterWithComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
RegisterWithComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-with',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-with.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/register-with/register-with.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-with.component.css */ "./src/app/compatibility-form/register-with/register-with.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], RegisterWithComponent);



/***/ }),

/***/ "./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbC1jYXJkcy90ZXN0aW1vbmlhbC1jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWwtY2FyZHMvdGVzdGltb25pYWwtY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TestimonialCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialCards", function() { return TestimonialCards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestimonialCards = class TestimonialCards {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TestimonialCards.prototype, "testimonial", void 0);
TestimonialCards = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'testimonial-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonial-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonial-cards.component.css */ "./src/app/compatibility-form/testimonials/testimonial-cards/testimonial-cards.component.css")).default]
    })
], TestimonialCards);



/***/ }),

/***/ "./src/app/compatibility-form/testimonials/testimonials.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/compatibility-form/testimonials/testimonials.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\n.testimonials{\r\n    overflow-x:hidden;\r\n}\r\n\r\n.testimonials{\r\n    margin-top:8vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\nh1{\r\n    margin-bottom:20px;\r\n    font-weight:bolder;\r\n    font-family:'Poppins', sans-serif;\r\n    background-image:url('sparkles.svg');\r\n    background-size: cover;\r\n}\r\n\r\n.container{\r\n    margin:6.25vw 20px;\r\n}\r\n\r\n/* #testimonial-image{\r\n    width:15.625vw;\r\n    height:21.875vw;\r\n    position:relative;\r\n    right:8vw;\r\n    bottom:7.8125vw;\r\n    border-radius:10px;\r\n} */\r\n\r\nh2{\r\n    font-size:1.75vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\np{\r\n    font-size:1vw;\r\n}\r\n\r\n@media only screen and (max-width: 575px){\r\n    .testimonial-text{\r\n        margin-left:10px;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:19vw\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:270px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        border-radius:10px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .comma{\r\n        width:30px;\r\n        height:40px;\r\n        margin-bottom:10px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 576px){\r\n    .container{\r\n        margin-top:80px;\r\n    }\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:14vw;\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:250px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:auto;;\r\n        margin-right:auto;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:13vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 720px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:280px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:10vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 768px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:270px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:10vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:8vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:220px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:8vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1024px){\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:300px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:140px;\r\n        height:196px;\r\n        position:relative;\r\n        right:8vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:4.5vw;\r\n    }\r\n    h2{\r\n        font-size:18px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:12px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1200px){\r\n    #testimonialImage{\r\n        width:100px;\r\n        height: 150px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:400px;\r\n        height:330px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    #testimonialImage{\r\n        width:200px;\r\n        height: 280px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:6vw\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:3.2vw;\r\n    }\r\n    h2{\r\n        font-size:32px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:14px;\r\n        font-weight:400;\r\n    }\r\n    .comma{\r\n        width:40px;\r\n        height:50px;\r\n        margin-bottom:10px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1600px){\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:400px;\r\n        height:450px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:300px;\r\n        height:420px;\r\n        position:relative;\r\n        right:14vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:3.7vw;\r\n    }\r\n    h2{\r\n        font-size:32px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:12px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:40px;\r\n        height:50px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n    \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7O0FBRXJGO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG9DQUE2RDtJQUM3RCxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7Ozs7Ozs7R0FPRzs7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1Y7SUFDSjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Y7NEJBQ29CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDJDQUEyQztRQUMzQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7QUFFSjs7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtRQUNmOzRCQUNvQjtJQUN4QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtRQUNmOzRCQUNvQjtJQUN4QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1Y7SUFDSjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7Ozs7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLnRlc3RpbW9uaWFsc3tcclxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xyXG59XHJcblxyXG4udGVzdGltb25pYWxze1xyXG4gICAgbWFyZ2luLXRvcDo4dnc7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuaDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL3NwYXJrbGVzL3NwYXJrbGVzLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOjYuMjV2dyAyMHB4O1xyXG59ICAgIFxyXG4vKiAjdGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICB3aWR0aDoxNS42MjV2dztcclxuICAgIGhlaWdodDoyMS44NzV2dztcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6OHZ3O1xyXG4gICAgYm90dG9tOjcuODEyNXZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG59ICovXHJcbmgye1xyXG4gICAgZm9udC1zaXplOjEuNzV2dztcclxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOjF2dztcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIC50ZXN0aW1vbmlhbC10ZXh0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgfVxyXG4gICAgI3Rlc3RpbW9uaWFsSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206M3Z3O1xyXG4gICAgICAgIHJpZ2h0OjE5dndcclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI3MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6MzBweDtcclxuICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICBoci5vbmV7XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaHIudHdve1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIH1cclxuICAgICN0ZXN0aW1vbmlhbEltYWdle1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOjN2dztcclxuICAgICAgICByaWdodDoxNHZ3O1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDphdXRvOztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTMxcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE4NHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OjEzdnc7XHJcbiAgICAgICAgYm90dG9tOjh2dztcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxuICAgIGhyLm9uZXtcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBoci50d297XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpe1xyXG4gICAgI3Rlc3RpbW9uaWFsSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206M3Z3O1xyXG4gICAgICAgIHJpZ2h0OjEwdnc7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvOyAqL1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6MjgwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgICAgICB3aWR0aDoxMzFweDtcclxuICAgICAgICBoZWlnaHQ6MTg0cHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6MTB2dztcclxuICAgICAgICBib3R0b206OHZ3O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgIGhlaWdodDoyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAjdGVzdGltb25pYWxJbWFnZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTozdnc7XHJcbiAgICAgICAgcmlnaHQ6MTB2dztcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87ICovXHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyNzBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsLWltYWdle1xyXG4gICAgICAgIHdpZHRoOjEzMXB4O1xyXG4gICAgICAgIGhlaWdodDoxODRweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDoxMHZ3O1xyXG4gICAgICAgIGJvdHRvbTo4dnc7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgfVxyXG4gICAgLmNvbW1he1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB9XHJcbiAgICBoci5vbmV7XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaHIudHdve1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAjdGVzdGltb25pYWxJbWFnZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTozdnc7XHJcbiAgICAgICAgcmlnaHQ6OHZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgKi9cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIyMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTMxcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE4NHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0Ojh2dztcclxuICAgICAgICBib3R0b206NXZ3O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgIGhlaWdodDoyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87ICovXHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsLWltYWdle1xyXG4gICAgICAgIHdpZHRoOjE0MHB4O1xyXG4gICAgICAgIGhlaWdodDoxOTZweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDo4dnc7XHJcbiAgICAgICAgYm90dG9tOjV2dztcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjQuNXZ3O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxuICAgIGhyLm9uZXtcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBoci50d297XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTVweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgICN0ZXN0aW1vbmlhbEltYWdle1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOjN2dztcclxuICAgICAgICByaWdodDoxMHZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgKi9cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjMzMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAjdGVzdGltb25pYWxJbWFnZXtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTozdnc7XHJcbiAgICAgICAgcmlnaHQ6NnZ3XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTozLjJ2dztcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTozMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgfVxyXG4gICAgLmNvbW1he1xyXG4gICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgKi9cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6NDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjQ1MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjQyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OjE0dnc7XHJcbiAgICAgICAgYm90dG9tOjV2dztcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMuN3Z3O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxuICAgIGhyLm9uZXtcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBoci50d297XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/compatibility-form/testimonials/testimonials.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/compatibility-form/testimonials/testimonials.component.ts ***!
  \***************************************************************************/
/*! exports provided: Testimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return Testimonials; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_Data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/Data/data */ "./src/assets/Data/data.js");



let Testimonials = class Testimonials {
    constructor() {
        this.slidesToShow = 3;
        this.mobileBreakpoint = 600;
        this.slides = [
            { img: "http://placehold.it/350x150/000000" },
            { img: "http://placehold.it/350x150/111111" },
            { img: "http://placehold.it/350x150/333333" }
        ];
        this.slideConfig = {
            "slidesToShow": this.adjustsslidesToShow(),
            "slidesToScroll": this.adjustsslidesToShow(),
            "center": true,
            "autoplay": true,
            "dots": true
        };
        this.customOptions = {
            loop: true,
            autoplay: true,
            center: true,
            dots: true,
            // merge: true,
            // mergeFit: true,
            margin: 120,
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        };
        this.testimonials = _assets_Data_data__WEBPACK_IMPORTED_MODULE_2__["testimonials"];
    }
    ngOnInit() {
        this.adjustsslidesToShow();
    }
    resize() {
        this.innerWidth = window.innerWidth;
        return this.innerWidth;
    }
    adjustsslidesToShow() {
        window.onload = this.resize;
        window.onresize = this.resize;
        if (this.resize() <= this.mobileBreakpoint) {
            return 1;
        }
        else if (this.resize() <= 768) {
            return 2;
        }
        else {
            return 2;
        }
    }
};
Testimonials = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'testimonials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/testimonials/testimonials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonials.component.css */ "./src/app/compatibility-form/testimonials/testimonials.component.css")).default]
    })
], Testimonials);



/***/ }),

/***/ "./src/app/compatibility-form/thank-you/thank-you.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/compatibility-form/thank-you/thank-you.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    padding: 20px 30px 200px;\r\n    overflow: scroll;\r\n    height: 100vh;\r\n    -webkit-animation: fadeInUp 1.5s 1;\r\n            animation: fadeInUp 1.5s 1;\r\n}\r\n\r\n.paddingToSection {\r\n    padding: 70px 30px 100px !important;\r\n}\r\n\r\n.topheader{\r\n    color: white;\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 10px white;\r\n    font-family: sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.cardMiddle{\r\n    position:relative;\r\n    height:30vh!important; \r\n    width:80%!important; \r\n    border-radius: 20px!important;\r\n    background:white!important;\r\n    margin:auto;\r\n    margin-top:13%;\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content:center;\r\n    color:black\r\n}\r\n\r\n/* // only for explicit view */\r\n\r\n.mainBack {\r\n    background-image: url(https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/1024+white.jpg);\r\n    background-size: contain;\r\n}\r\n\r\n.toolBar {\r\n    background-color: white;\r\n    color: #4A5D6A;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    box-shadow: 0px 1px 10px rgba(0,0,0,0.2);\r\n    position: fixed;\r\n    z-index: 999999;\r\n}\r\n\r\n.titleText {\r\n    font-size: 1rem;\r\n}\r\n\r\n.noProfileMain{\r\n    margin-top: 0px!important;\r\n    background-size: contain;\r\n    width:100vw;\r\n    height: 100vh;\r\n    display: block;\r\n    position: relative;\r\n\r\n    -webkit-animation: fadeInUp 1.5s 1;\r\n\r\n            animation: fadeInUp 1.5s 1;\r\n}\r\n\r\n.noProfile{\r\n    color: white;\r\n    font-size: 1.6rem;\r\n    text-shadow: 2px 2px 2px rgba(0,0,0,0.2);\r\n}\r\n\r\nspan{\r\n    text-transform: capitalize;\r\n}\r\n\r\n#premiumProfIcon{\r\n    background: orange;\r\n                display: flex;\r\n                flex-direction: column;\r\n                align-items: center;\r\n                justify-content: flex-end;\r\n}\r\n\r\n.historyProfile{\r\n    width: 30vw;\r\n    height: 64vh;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n\r\n.historyImage{\r\n    width: 100%;\r\n    height: 64vh;\r\n    border-radius: 10px;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n}\r\n\r\n.historyDetails{\r\nwidth: 100%;\r\nposition: absolute;\r\nbottom: 0px;\r\nbackground-image: linear-gradient(0deg,black,transparent);\r\nword-break: break-word;\r\ncolor: white;\r\nfont-size: 1rem;\r\nfont-weight: bold;\r\npadding: 15px 35px 15px 10px;\r\nborder-radius: 10px;\r\n}\r\n\r\n.historyButtons{\r\n    display: flex;\r\n    position: absolute;\r\n    flex-direction: column;\r\n    bottom: 35px;\r\n    right: -20px;\r\n}\r\n\r\n#profileImage{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n#answerButtons{\r\n    margin-top: 10px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: relative;\r\n    width: 100%;\r\n    background-color: transparent;\r\n    z-index: 99999;\r\n    bottom: 0px;\r\n    background-image: linear-gradient(0deg, white,transparent);\r\n}\r\n\r\n.buttonImage{\r\n    width: 40px;\r\n}\r\n\r\n#verified{\r\n    background-color: #47C337;\r\n    border-radius: 5px;color: white;\r\n    padding: 10px 0px;\r\n}\r\n\r\n#controlledBy{\r\n    background-color: #ACDFFF;\r\n    display: flex;\r\n    border-radius: 5px;color: white;\r\n    padding: 10px 0px;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#aboutSection{\r\n    margin-top: 20px; \r\n        padding: 15px 15px;\r\n        border: 1px solid #FAC8F1; color: #707070;\r\n        border-radius: 5px;\r\n}\r\n\r\n#personalSection{\r\n    margin-top: 20px; \r\n        padding: 15px 15px;\r\n        border: 1px solid #9533B5E5;\r\n        border-radius: 5px;\r\n}\r\n\r\n.field{\r\n    margin-top: 10px;\r\n}\r\n\r\n.title{\r\n    width: 100%;\r\n    color: #C8C8C8;\r\n    margin-left: 1rem;\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n@media (min-width:1024px){\r\n    .special{\r\n        height: 100vh;\r\n        overflow: auto;\r\n        width: 60vw;\r\n        background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n        padding: 50px 10px 0px;\r\n        -webkit-animation: fadeInUp 1.5s 1;\r\n                animation: fadeInUp 1.5s 1;\r\n        background-size: contain;\r\n        margin-top: 0px!important;\r\n        overflow: auto;\r\n        width: 100%;\r\n        background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n        padding: 50px 10px 0px;\r\n        background-size: contain;\r\n        height: 100vh;\r\n        display: block;\r\n        position: relative;\r\n        animation: fadeInUp 1.5s 1;\r\n    }\r\n    .topheader{\r\n            color: white;\r\n            font-size: 7rem;\r\n            font-weight: bolder;\r\n            text-shadow: 4px 4px 20px white;\r\n            font-family: sans-serif;\r\n            text-align: center;\r\n        }\r\n        .cardMiddle{\r\n            position:relative;\r\n            height:27vh!important; \r\n            width:40%!important; \r\n            border-radius: 20px!important;\r\n            background:white!important;\r\n            margin:auto;\r\n            margin-top:5%;\r\n            display:flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            justify-content:center;\r\n            color:black\r\n        }\r\n    \r\n}\r\n\r\n@media (max-width: 350px) {\r\n    .historyDetails{\r\n        width: 100%;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        background-image: linear-gradient(0deg,black,transparent);\r\n        word-break: break-word;\r\n        color: white;\r\n        font-size: 1rem;\r\n        font-weight: bold;\r\n        padding: 15px 25px;\r\n        border-radius: 10px;\r\n        }\r\n        .historyProfile{\r\n            width: 100%;\r\n            height: 70%;\r\n            border-radius: 20px;\r\n            position: relative;\r\n        }\r\n        .historyImage{\r\n            width: 100%;\r\n            height: 55vh;\r\n            border-radius: 10px;\r\n            -o-object-fit: fill;\r\n               object-fit: fill;\r\n        }\r\n        .titleText {\r\n            font-size: 14px;\r\n        }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n    .historyDetails{\r\n        width: 100%;\r\n        position: absolute;\r\n        bottom: 0px;\r\n        background-image: linear-gradient(0deg,black,transparent);\r\n        word-break: break-word;\r\n        color: white;\r\n        font-size: 1rem;\r\n        font-weight: bold;\r\n        padding: 15px 35px 15px 10px;\r\n        border-radius: 10px;\r\n        }\r\n        .historyProfile{\r\n            width: 100%;\r\n            height: 70%;\r\n            border-radius: 20px;\r\n            position: relative;\r\n        }\r\n        .historyImage{\r\n            width: 100%;\r\n            height: 55vh;\r\n            border-radius: 10px;\r\n            -o-object-fit: fill;\r\n               object-fit: fill;\r\n        }\r\n        .titleText {\r\n            font-size: 14px;\r\n        }\r\n        /* // only for explicit view */\r\n    .mainBack {\r\n    background-image: none;\r\n}\r\n}\r\n\r\n.circular {\r\n    position: absolute;\r\n    top:-50px;\r\n    padding: 0px;\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 0px;\r\n    background-color:transparent;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n  }\r\n\r\n.special{\r\n    height: 100vh;\r\n    overflow: auto;\r\n    width: 100%;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    padding: 50px 10px 0px;\r\n    -webkit-animation: fadeInUp 1.5s 1;\r\n            animation: fadeInUp 1.5s 1;\r\n    background-size: contain;\r\n}\r\n\r\n.SpecialCase{\r\n    font-size:2.3rem!important;\r\n}\r\n\r\na{\r\n    color: white !important;\r\n  }\r\n\r\nb {\r\n    color: white;\r\n  }\r\n\r\n.plansArea {\r\n    margin-top:0px;\r\n    position: relative;\r\n    z-index: 0;\r\n    padding: 30px 10px 10px 10px !important;\r\n    background:white!important;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n    margin: 10px 5px 10px 5px;\r\n    border-radius:15px;\r\n    overflow-y: scroll!important;\r\n  }\r\n\r\n.plancolumn {\r\n    position: relative;\r\n    padding-top: 1rem;\r\n    padding-bottom: 0rem;\r\n    padding-left: 1rem;\r\n    font-size: 1rem;\r\n    flex: 50%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.planrow {\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    margin: 7% 1% 7% 1%;\r\n  }\r\n\r\n.subs{\r\n    position: absolute;\r\n    z-index: 1000 !important;\r\n    right: 5.5%;\r\n    top: 32%;\r\n    vertical-align: middle !important;\r\n    background: #5552ff;\r\n  }\r\n\r\n.month {\r\n    font-weight: 500;\r\n    padding:0px 3px 0px 3px;\r\n    font-style: normal!important;\r\n    font-size:0.8rem;\r\n    position: absolute;\r\n    top: -11px !important;\r\n    right: 5%;\r\n    background: #00c2cb;\r\n    border-radius: 3px 3px 3px 3px;\r\n  }\r\n\r\n@media (max-width: 575px) {\r\n    .plancolumn {\r\n      padding-top: 0.8rem;\r\n      padding-bottom: 0rem;\r\n      padding-left: 0.8rem;\r\n      font-size: 1.2rem;\r\n      flex: 40%;\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n    }\r\n    .SpecialCase{\r\n        font-size:1.9rem!important;\r\n    }\r\n  }\r\n\r\n@media (max-width: 375px) {\r\n    .plancolumn {\r\n      padding-top: 0.8rem;\r\n      padding-bottom: 0rem;\r\n      padding-left: 0.8rem;\r\n      font-size: 0.9rem !important;\r\n      flex: 40%;\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n    }\r\n    .subs{\r\n      position: absolute;\r\n      right: 5.5%;\r\n      top: 25%;\r\n      vertical-align: middle !important;\r\n      background: #5552ff;\r\n    }\r\n    .SpecialCase {\r\n      font-size: 1.4rem !important;\r\n    }\r\n  }\r\n\r\n@media (min-width:1024px){\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGF0aWJpbGl0eS1mb3JtL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEI7QUFDSjs7QUFDQSw4QkFBOEI7O0FBQzlCO0lBQ0ksaUdBQWlHO0lBQ2pHLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjs7SUFFbEIsa0NBQTBCOztZQUExQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHdDQUF3QztBQUM1Qzs7QUFHQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtnQkFDTixhQUFhO2dCQUNiLHNCQUFzQjtnQkFDdEIsbUJBQW1CO2dCQUNuQix5QkFBeUI7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBZ0I7T0FBaEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gseURBQXlEO0FBQ3pELHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osZUFBZTtBQUNmLGlCQUFpQjtBQUNqQiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUdsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMERBQTBEO0FBQzlEOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQixDQUFDLFlBQVk7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0IsQ0FBQyxZQUFZO0lBQy9CLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7UUFDWixrQkFBa0I7UUFDbEIseUJBQXlCLEVBQUUsY0FBYztRQUN6QyxrQkFBa0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7UUFDWixrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLGtCQUFrQjtBQUMxQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVztRQUNYLDBEQUEwRDtRQUMxRCxzQkFBc0I7UUFDdEIsa0NBQTBCO2dCQUExQiwwQkFBMEI7UUFDMUIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsV0FBVztRQUNYLDBEQUEwRDtRQUMxRCxzQkFBc0I7UUFDdEIsd0JBQXdCO1FBQ3hCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLDBCQUEwQjtJQUM5QjtJQUNBO1lBQ1EsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsK0JBQStCO1lBQy9CLHVCQUF1QjtZQUN2QixrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsbUJBQW1CO1lBQ25CLDZCQUE2QjtZQUM3QiwwQkFBMEI7WUFDMUIsV0FBVztZQUNYLGFBQWE7WUFDYixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixzQkFBc0I7WUFDdEI7UUFDSjs7QUFFUjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gseURBQXlEO1FBQ3pELHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG1CQUFnQjtlQUFoQixnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7QUFDUjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gseURBQXlEO1FBQ3pELHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7UUFDdEI7UUFDQTtZQUNJLFdBQVc7WUFDWCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG1CQUFnQjtlQUFoQixnQkFBZ0I7UUFDcEI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQSw4QkFBOEI7SUFDbEM7SUFDQSxzQkFBc0I7QUFDMUI7QUFDQTs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUc1QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztBQUNGO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMERBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsbUJBQWdCO09BQWhCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtFQUM5Qjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLFNBQVM7TUFDVCxxQkFBcUI7TUFDckIsc0JBQXNCO0lBQ3hCO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7RUFDRjs7QUFDQTtJQUNFO01BQ0UsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQixvQkFBb0I7TUFDcEIsNEJBQTRCO01BQzVCLFNBQVM7TUFDVCxxQkFBcUI7TUFDckIsc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFFBQVE7TUFDUixpQ0FBaUM7TUFDakMsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7RUFDRjs7QUFDQTs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBhdGliaWxpdHktZm9ybS90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDEuNXMgMTtcclxufVxyXG5cclxuLnBhZGRpbmdUb1NlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNzBweCAzMHB4IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGhlYWRlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNhcmRNaWRkbGV7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGhlaWdodDozMHZoIWltcG9ydGFudDsgXHJcbiAgICB3aWR0aDo4MCUhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6MTMlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgY29sb3I6YmxhY2tcclxufVxyXG4vKiAvLyBvbmx5IGZvciBleHBsaWNpdCB2aWV3ICovXHJcbi5tYWluQmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9oYW5zbWF0cmltb255LnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS93ZWJJbWFnZXMvMTAyNCt3aGl0ZS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4udG9vbEJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNEE1RDZBO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk5OTtcclxufVxyXG5cclxuLnRpdGxlVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5ub1Byb2ZpbGVNYWlue1xyXG4gICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMS41cyAxO1xyXG59XHJcbi5ub1Byb2ZpbGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcblxyXG5zcGFue1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbiNwcmVtaXVtUHJvZkljb257XHJcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaGlzdG9yeVByb2ZpbGV7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGhlaWdodDogNjR2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhpc3RvcnlJbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbn1cclxuLmhpc3RvcnlEZXRhaWxze1xyXG53aWR0aDogMTAwJTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5ib3R0b206IDBweDtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsYmxhY2ssdHJhbnNwYXJlbnQpO1xyXG53b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5jb2xvcjogd2hpdGU7XHJcbmZvbnQtc2l6ZTogMXJlbTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnBhZGRpbmc6IDE1cHggMzVweCAxNXB4IDEwcHg7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmhpc3RvcnlCdXR0b25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlSW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI2Fuc3dlckJ1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgd2hpdGUsdHJhbnNwYXJlbnQpO1xyXG59XHJcbi5idXR0b25JbWFnZXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbiN2ZXJpZmllZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N0MzMzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7Y29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuI2NvbnRyb2xsZWRCeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQ0RGRkY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O2NvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbiNhYm91dFNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZBQzhGMTsgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jcGVyc29uYWxTZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgXHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NTMzQjVFNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmZpZWxke1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjQzhDOEM4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgICAuc3BlY2lhbHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRGQjBFNSwgIzU2NkVFOCk7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAxMHB4IDBweDtcclxuICAgICAgICBhbmltYXRpb246IGZhZGVJblVwIDEuNXMgMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4IWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTBweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluVXAgMS41cyAxO1xyXG4gICAgfVxyXG4gICAgLnRvcGhlYWRlcntcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDIwcHggd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkTWlkZGxle1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OjI3dmghaW1wb3J0YW50OyBcclxuICAgICAgICAgICAgd2lkdGg6NDAlIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2tcclxuICAgICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgICAuaGlzdG9yeURldGFpbHN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLGJsYWNrLHRyYW5zcGFyZW50KTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaXN0b3J5UHJvZmlsZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaXN0b3J5SW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZVRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5oaXN0b3J5RGV0YWlsc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsYmxhY2ssdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDM1cHggMTVweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaXN0b3J5UHJvZmlsZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaXN0b3J5SW1hZ2V7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU1dmg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZVRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIC8vIG9ubHkgZm9yIGV4cGxpY2l0IHZpZXcgKi9cclxuICAgIC5tYWluQmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG59XHJcbn1cclxuLmNpcmN1bGFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDotNTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4uc3BlY2lhbHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMTBweCAwcHg7XHJcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDEuNXMgMTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG4uU3BlY2lhbENhc2V7XHJcbiAgICBmb250LXNpemU6Mi4zcmVtIWltcG9ydGFudDtcclxufVxyXG4gIGF7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgYiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5wbGFuc0FyZWEge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5wbGFuY29sdW1uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbGV4OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAucGxhbnJvdyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIG1hcmdpbjogNyUgMSUgNyUgMSU7XHJcbiAgfVxyXG4uc3Vic3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiA1LjUlO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1MmZmO1xyXG4gIH1cclxuICAubW9udGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6MHB4IDNweCAwcHggM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTowLjhyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMmNiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5wbGFuY29sdW1uIHtcclxuICAgICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDByZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC44cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZmxleDogNDAlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAuU3BlY2lhbENhc2V7XHJcbiAgICAgICAgZm9udC1zaXplOjEuOXJlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgLnBsYW5jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDQwJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLnN1YnN7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDUuNSU7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1NTUyZmY7XHJcbiAgICB9XHJcbiAgICAuU3BlY2lhbENhc2Uge1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDoxMDI0cHgpe1xyXG5cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/compatibility-form/thank-you/thank-you.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/compatibility-form/thank-you/thank-you.component.ts ***!
  \*********************************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ThankYouComponent = class ThankYouComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToChat() {
        this.router.navigateByUrl('/chat');
    }
};
ThankYouComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-you',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compatibility-form/thank-you/thank-you.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you.component.css */ "./src/app/compatibility-form/thank-you/thank-you.component.css")).default]
    })
], ThankYouComponent);



/***/ })

}]);
//# sourceMappingURL=compatibility-form-compatibility-form-module-es2015.js.map