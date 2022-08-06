(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photo-upload-photo-upload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload/photo-upload.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload/photo-upload.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <form>\n        <div class=\"row\" style=\"margin-top:20px\">\n            <div class=\"col-md-12 text-center\" style=\"margin: 0px auto\">\n              <p id=\"heading\">Multiple Pictures can be Uploaded</p>\n        </div>\n         </div>\n      <div class=\"row\"  style=\"margin:20px auto\">\n        <div class=\"col-12 text-center\" style=\"margin: 0px auto\">\n            <img [src]=\"imgURL\" \n            (click)=\"dfile.click()\"\n                class=\"imgSet\">\n            <br>\n          <div>\n              <input style=\"display: none;\"  #dfile type=\"file\" id=\"dfile\" accept='image/*' (change)=\"preview(dfile.files,1)\"  />\n                              \n          </div>\n        </div>\n      </div>\n        \n        <div class=\"row\" style=\"margin:40px auto\">\n        <div class=\"col-12 text-center\" style=\"margin: 0px auto\">\n            <img [src]=\"frontfile\"\n            (click)=\"fontfile.click()\"\n             class=\"imgSet\">\n            <br>\n          <div>\n              <input style=\"display: none;\"  #fontfile type=\"file\" id=\"fontfile\" accept='image/*' (change)=\"previewfront(fontfile.files,2)\"  />\n                             \n          </div>\n        </div>\n      </div>\n    \n      <div class=\"row\" style=\"margin:40px auto\">\n        <div class=\"col-12 text-center\" style=\"margin: 0px auto\">\n            <img [src]=\"BackimgURL\" \n            (click)=\"backfile.click()\"\n            class=\"imgSet\">\n            <br>\n          <div>\n              <input style=\"display: none;\"  #backfile type=\"file\" id=\"backfile\" accept='image/*' (change)=\"previewBack(backfile.files,3)\"  />\n                            \n          </div>\n      </div>\n    \n      </div>\n      \n      <div sclass=\"row\"  style=\"margin-top:20px; margin-bottom:20px;\">\n          <div class=\"col-12 t-c\" >\n            <button type=\"button\" style=\"background-color: #0c9bf2;color: white;\" class=\"btn \" mat-raised-button  id=\"photoBtn\"    (click)=\"skip()\">Please Click to Proceed</button>\n          </div>\n       </div> \n    </form>\n</main>\n");

/***/ }),

/***/ "./src/app/photo-upload/photo-upload-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/photo-upload/photo-upload-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PhotoUploadRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoUploadRoutingModule", function() { return PhotoUploadRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _photo_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-upload.component */ "./src/app/photo-upload/photo-upload.component.ts");




const routes = [
    { path: ':mobile/:id/:isLead', component: _photo_upload_component__WEBPACK_IMPORTED_MODULE_3__["PhotoUploadComponent"] },
    { path: ':mobile', component: _photo_upload_component__WEBPACK_IMPORTED_MODULE_3__["PhotoUploadComponent"] },
];
let PhotoUploadRoutingModule = class PhotoUploadRoutingModule {
};
PhotoUploadRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PhotoUploadRoutingModule);



/***/ }),

/***/ "./src/app/photo-upload/photo-upload.component.css":
/*!*********************************************************!*\
  !*** ./src/app/photo-upload/photo-upload.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#photoBtn {\n    margin: 3px;\n}\n.impNote {\n    margin: 5px 0px;\n    padding-right: 15px;\n    padding-left: 15px;\n    color: #737373;\n    font-size: 0.85rem;\n  }\nmain{\n    background-image: url('https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/320+grey.jpg');\n    background-size: contain;\n    height: 100vh;\n    width: 100vw;\n    overflow: scroll;\n    overflow-x: hidden;\n  }\n.imgSet {\n    margin: 0px auto;\n    border: 1px solid #0c9bf2;\n    border-radius: 10px;\n    padding: 2px;\n    height: 150px;\n    width: 150px;\n    box-shadow: -10px -8px 15px #c8c8c8, 10px 8px 15px #c8c8c8;\n    background: #0c9bf2;\n  }\n#heading {\n    color: white;\n    background: #0c9bf2;\n    font-size: 1.3rem;\n    font-weight: bolder;\n    text-shadow: 2px 1px 1px #737373;\n    box-shadow: -10px -10px 10px #0c9bf2, 10px 10px 10px #0c9bf2;\n    padding: 10px 0px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tdXBsb2FkL3Bob3RvLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxpR0FBaUc7SUFDakcsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osMERBQTBEO0lBQzFELG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyw0REFBNEQ7SUFDNUQsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tdXBsb2FkL3Bob3RvLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bob3RvQnRuIHtcbiAgICBtYXJnaW46IDNweDtcbn1cbi5pbXBOb3RlIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgY29sb3I6ICM3MzczNzM7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgbWFpbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaGFuc21hdHJpbW9ueS5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vd2ViSW1hZ2VzLzMyMCtncmV5LmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gIC5pbWdTZXQge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzBjOWJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3gtc2hhZG93OiAtMTBweCAtOHB4IDE1cHggI2M4YzhjOCwgMTBweCA4cHggMTVweCAjYzhjOGM4O1xuICAgIGJhY2tncm91bmQ6ICMwYzliZjI7XG4gIH1cblxuICAjaGVhZGluZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICMwYzliZjI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDFweCAxcHggIzczNzM3MztcbiAgICBib3gtc2hhZG93OiAtMTBweCAtMTBweCAxMHB4ICMwYzliZjIsIDEwcHggMTBweCAxMHB4ICMwYzliZjI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/photo-upload/photo-upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-upload/photo-upload.component.ts ***!
  \********************************************************/
/*! exports provided: _filter, PhotoUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoUploadComponent", function() { return PhotoUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
let PhotoUploadComponent = class PhotoUploadComponent {
    constructor(dialog, route, router, http, ngxNotificationService, spinner) {
        this.dialog = dialog;
        this.route = route;
        this.router = router;
        this.http = http;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.isCompleted5 = false;
        this.imgURL = '../../assets/person.svg';
        this.BackimgURL = '../../assets/person.svg';
        this.frontfile = '../../assets/person.svg';
        this.suc = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((route) => {
            console.log(route.params);
            if (route) {
                if (route.params.mobile) {
                    localStorage.setItem('mobile_number', route.params.mobile);
                    this.checkUrl(route.params.mobile).subscribe((data) => {
                        if (data.registered == 1) {
                            localStorage.setItem('authData', JSON.stringify(data));
                            this.id = data.id;
                            this.isLead = data.is_lead;
                        }
                        else {
                            this.router.navigateByUrl('fourReg');
                        }
                    });
                }
                if (route.params.id) {
                    this.id = route.params.id;
                }
                if (route.params.isLead) {
                    this.isLead = route.params.isLead;
                }
            }
        });
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
        const photoBtn = document.getElementById('photoBtn');
        photoBtn.disabled = true;
        const uploadData = new FormData();
        uploadData.append('id', this.id);
        uploadData.append('index', index);
        uploadData.append('image', data);
        uploadData.append('is_lead', this.isLead);
        return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(suc => {
            this.suc = suc;
            if (this.suc.pic_upload_status === 'Y') {
                console.log('photos', suc);
                this.spinner.hide();
                this.ngxNotificationService.success('Photo Uploaded Succesfully!');
                photoBtn.disabled = false;
                if (index === 1) {
                    this.imgURL = this.suc.profile_pic_url;
                }
                else if (index === 2) {
                    this.frontfile = this.suc.profile_pic_url;
                }
                else {
                    this.BackimgURL = this.suc.profile_pic_url;
                }
            }
            else {
                this.spinner.hide();
                this.ngxNotificationService.error('Photo could not be Uploaded!');
            }
        }, err => {
            this.spinner.hide();
            this.ngxNotificationService.error('Photo could not be Uploaded!');
            console.log(err);
        });
    }
    Analytics(type, category, action) {
        if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
            window.ga('send', 'event', category, action, {
                hitCallback: () => {
                    console.log('Tracking ' + type + ' successful');
                }
            });
            // gtag app + web
            window.gtag('event', category, {
                action: action
            });
        }
    }
    skip() {
        this.router.navigateByUrl('chat');
    }
    gtag_report_conversion() {
        window.gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC' });
        return false;
    }
    checkUrl(mobile) {
        if (localStorage.getItem('fcm_app')) {
            // tslint:disable-next-line: max-line-length
            return this.http.get(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: mobile } });
        }
        else {
            // tslint:disable-next-line: max-line-length
            return this.http.get(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: mobile } });
        }
    }
};
PhotoUploadComponent.ctorParameters = () => [
    { type: _angular_material___WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_2__["NgxNotificationService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoModal', { static: false })
], PhotoUploadComponent.prototype, "photoModal", void 0);
PhotoUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photo-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload/photo-upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-upload.component.css */ "./src/app/photo-upload/photo-upload.component.css")).default]
    })
], PhotoUploadComponent);



/***/ }),

/***/ "./src/app/photo-upload/photo-upload.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/photo-upload/photo-upload.module.ts ***!
  \*****************************************************/
/*! exports provided: PhotoUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoUploadModule", function() { return PhotoUploadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _photo_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-upload.component */ "./src/app/photo-upload/photo-upload.component.ts");
/* harmony import */ var _photo_upload_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-upload-routing.module */ "./src/app/photo-upload/photo-upload-routing.module.ts");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");






let PhotoUploadModule = class PhotoUploadModule {
};
PhotoUploadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _photo_upload_component__WEBPACK_IMPORTED_MODULE_3__["PhotoUploadComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _photo_upload_routing_module__WEBPACK_IMPORTED_MODULE_4__["PhotoUploadRoutingModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]
        ]
    })
], PhotoUploadModule);



/***/ })

}]);
//# sourceMappingURL=photo-upload-photo-upload-module-es2015.js.map