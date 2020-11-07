function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <ngx-notification></ngx-notification><!-- Notifications -->\r\n  <ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#58D1FD\" type = \"square-jelly-box\" [fullScreen] = \"true\"><p style=\"color: white\" >Loading</ngx-spinner>\r\n  <router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/app-download-dialog/app-download-dialog.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/app-download-dialog/app-download-dialog.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatAppDownloadDialogAppDownloadDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main >\r\n    <div class=\"t-c topDiv\">\r\n        <div style=\"position: relative;display: inline-block;\">\r\n            <img id=\"profileImage\" [src]=\"getProfilePhoto()\" alt=\"profle image\">\r\n            <img style=\"width: 30px;\r\n            position: absolute;\r\n            bottom: 80px;\r\n            right: 0px;\" src=\"../../../assets/playstore.svg\" alt=\"google playstore\">\r\n        </div>\r\n        \r\n        <button style=\"color: #737373;\r\n         font-size: 35px;\r\n         font-weight: bold; \r\n         position: absolute;\r\n         right: 10px;\r\n         top: 0px;\"\r\n         (click)=\"closeDialog()\">\r\n            X\r\n        </button>\r\n        <p class=\"contentText boldText\" style=\"margin-top: -55px;\">\r\n            {{data.data.name}}\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        <p class=\"contentText\">\r\n            को आपकी पसंद उनके <span class=\"boldText\">APP</span> पर भेज दी गयी है\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        \r\n        <p class=\"contentText\">\r\n            जब {{data.data.name}} आपको <span class=\"boldText\">पसंद</span> करें तो \r\n        </p>\r\n        <img width=\"40px\" src=\"../../../assets/heartsdarkpink.svg\" alt=\"hearts\">\r\n        <p class=\"contentText\">\r\n            <span class=\"boldText\"> नोटिफिकेशन</span> तुरंत अपने <span class=\"boldText\">APP</span> पर पाएं\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"t-c\">\r\n            <button [routerLink]=\"['/subscription']\" routerLinkActive=\"router-link-active\"\r\n             (click)=\"openPlaystore()\"  class=\"btn\" style=\"background: #D313AE;\r\n            color: white;\r\n            font-size: 1.2rem;\r\n            font-weight: bold;\r\n            padding: 10px 50px;\r\n            border-radius: 10px;\r\n            margin: 20px 0px\" mat-raised-button>\r\n                <img width=\"30px\" src=\"../../../assets/playstore_white.svg\" alt=\"google playstore\"> \r\n                &nbsp; | &nbsp; अभी APP डाउनलोड करें \r\n            </button>\r\n        </div>\r\n    </div>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatDailyWelcomePopupDailyWelcomePopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <h3>\r\n        Today's Special\r\n    </h3>\r\n    <div class=\"circularImgDiv\">\r\n        <img width=\"40px\" src=\"../../../assets/tabs-icons/calender-white.svg\" alt=\"today special\">\r\n    </div>\r\n    <p class=\"text-center\">\r\n        Our Matchmakers Have Chosen {{count+1}} Profiles For You Today. Let's Have A Look At Them One By One.\r\n    </p>\r\n    <button class=\"okBtn\" mat-raised-button (click)=\"closeDialog()\">\r\n        OK\r\n    </button>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/message-dialog/message-dialog.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/message-dialog/message-dialog.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatMessageDialogMessageDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main *ngIf=\"type=='yes'\">\r\n    <div id=\"cancel\">\r\n        <img (click)=\"closeDialog()\" style=\"width: 40px;margin: 5px 5px 0px 0px;\" src=\"../../../assets/cancelblue.svg\"\r\n            alt=\"cancel\">\r\n    </div>\r\n    <div id=\"lockImage\">\r\n        <img style=\"width: 50px;border: 1px solid darkgrey;border-radius: 50%;padding: 10px;\"\r\n            src=\"../../../assets/lock.svg\" alt=\"lock\">\r\n    </div>\r\n    <div id=\"heading\">\r\n        <p style=\"margin-bottom: 20px;font-size: 18px;\" class=\"textAlign\">{{languageService.getCurrentLanguage() === 'hindi'\r\n             ? 'इन्हे कांटेक्ट करने के लिए अभी प्लान देखें' : 'To Contact, Buy A Plan Right Now!!'}}</p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-3\">\r\n            <img class=\"profilePic\" [src]=\"getProfilePhoto()\" alt=\"profile.name\">\r\n        </div>\r\n        <div class=\"col-9\" style=\"margin: auto 0px;\">\r\n            <p style=\"font-weight: bold;font-size: 16px;\">{{getName(profile)}}</p>\r\n            <p>{{languageService.getCurrentLanguage() === 'hindi' ? 'कांटेक्ट नंबर' : 'Contact Number'}}: +91-XXXXXXXXXX\r\n            </p>\r\n            <p>{{languageService.getCurrentLanguage() === 'hindi' ? 'पूरा पता' : 'Address'}}: XXXXXXXXXX</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\" style=\"margin-top: 30px;\">\r\n        <div class=\"col-12\" style=\"padding:0px 0px 0px 30px\">\r\n            <img style=\"width: 30px;border: 1px solid darkgrey;border-radius: 50%;margin-left: 10px\"\r\n                src=\"../../../assets/logo_192.png\" alt=\"hans logo\"><span style=\"font-size: 18px;margin-left: 10px;\">\r\n                {{languageService.getCurrentLanguage() === 'hindi' ? 'प्लान के फायदे' : 'Benefits Of Plan'}} </span>\r\n            <ul>\r\n                <li *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                    <strong>25+</strong> सेंटर्स के <strong>50,000+</strong> रिश्ते\r\n                </li>\r\n                <li *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n                    <strong>50,000+ </strong> Rishte from <strong>25+</strong> Centres.\r\n                </li>\r\n                <li *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                    <strong>VIP</strong> मेंबर्स से फ्री कांटेक्ट\r\n                </li>\r\n                <li *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n                    Free Contact With <strong>VIP</strong> Members\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"textAlign\">\r\n        <button (click)=\"goToSub()\" mat-raised-button style=\"background: #34b7f1;font-size: 20px;\r\n        font-weight: bolder; width: 90%;\r\n        margin-top: 20px;\">\r\n            {{languageService.getCurrentLanguage() === 'hindi' ? 'प्लान देखें' : 'Buy Plan'}}\r\n        </button>\r\n    </div>\r\n</main>\r\n\r\n\r\n<!-- when user chooses shortlist and he doesnt hv his profile pic uploaded -->\r\n\r\n<main *ngIf=\"type=='shortlist'\">\r\n    <div id=\"cancel\" style=\"text-align: end;\">\r\n        <img (click)=\"closeDialog()\" style=\"width: 40px;margin: 5px 5px 0px 0px;\" src=\"../../../assets/cancelred.svg\"\r\n            alt=\"cancel\">\r\n    </div>\r\n    <div class=\"textAlign\">\r\n        <span style=\"color: rgba(0,0,0,.6);font-size: 18px;\">\r\n            {{getName(profile)}}\r\n        </span>\r\n    </div>\r\n    <div id=\"heading\">\r\n        <p style=\"margin-bottom: 20px;font-size: 20px;\" class=\"textAlign\"\r\n            *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">बिना देखे <span\r\n                style=\"font-weight:normal;font-family: sans-serif;\">आपको कैसे पसंद करेंगी ?</span></p>\r\n        <p style=\"margin-bottom: 20px;font-size: 20px;\" class=\"textAlign\"\r\n            *ngIf=\"languageService.getCurrentLanguage() === 'english'\">Without Seeing You,<span\r\n                style=\"font-weight:normal;font-family: sans-serif;\">How Can They Like Your Profile ?</span></p>\r\n    </div>\r\n    <div style=\"display: flex;justify-content: space-evenly;\">\r\n        <div class=\"textAlign\">\r\n            <img class=\"profilePic\" [src]=\"getProfilePhoto()\" alt=\"profile.name\"><br>\r\n            <span>{{profile.name}}</span>\r\n        </div>\r\n        <span style=\"font-size: 40px;\">❓</span>\r\n        <div class=\"textAlign\">\r\n            <img class=\"profilePic\" src=\"{{selfImage}}\" alt=\"profile.name\"><br>\r\n            <span style=\"display: block;\r\n                width: 100px;\">{{selfName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"textAlign\">\r\n        <input style=\"margin: 10px 25%;display: none;\" #backfile type=\"file\" id=\"backfile\" accept='image/*'\r\n            (change)=\"chooseFileForUpload(backfile.files)\" />\r\n        <button (click)=\"changeProfileImage()\" mat-raised-button style=\"background: #e4105cb8;font-size: 20px;\r\n        font-weight: bolder; width: 90%; \r\n        margin-top: 20px;\">\r\n            <span\r\n                style=\"font-size: 22px;margin-right: 5px;\">👆🏻</span>{{languageService.getCurrentLanguage() === 'hindi' ? 'अभी फोटो अपलोड करें' : 'Upload Profile Picture'}}\r\n        </button>\r\n    </div>\r\n\r\n</main>\r\n\r\n<!-- when user chooses shortlist and he doesnt hv his profile pic uploaded -->\r\n\r\n<div *ngIf=\"type=='contacted'\">\r\n    <!-- New Code starts here -->\r\n    <div id=\"offBanner\">\r\n        <img id=\"offBannerImg\" style=\"width:95px!important;height:95px;\" class=\"circular mat-elevation-z10\"\r\n            [src]=\"getProfilePhoto()\" id=\"profilePicture\"\r\n            (error)=\"onLoadProfileError(profile.gender ? profile.gender : '' , 'profilePicture')\" alt=\"profile.name\" />\r\n    </div>\r\n    <div style=\"position:relative\">\r\n        <div id=\"cancel\">\r\n            <img mat-dialog-close style=\"width: 30px; margin: 5px 2px 0px 0px;\" src=\"../../../assets/clear.svg\"\r\n                alt=\"cancel\" />\r\n        </div>\r\n        <main style=\"padding-bottom:30px;\">\r\n            <div style=\"\r\n        position:relative;\r\n        height:27vh!important; \r\n        width:100%!important; \r\n        border-radius: 20px!important;\r\n        background:white!important;\r\n        margin:auto;\r\n        margin-top:5%;\r\n        display:flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content:center;\r\n        color:black\">\r\n                <div style=\"display:flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            justify-content:center\" class=\"text-center\">\r\n                    <p style=\"font-size:20px;font-weight:bold;color:rgb(51, 59, 52)!important;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                        {{profile.name ? profile.name : profile.profile.name}} हमारे VIP सदस्य है </p>\r\n                    <p style=\"font-size:20px;font-weight:bold;color:rgb(51, 59, 52)!important;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n                        {{profile.name ? profile.name : profile.profile.name}} Is Our VIP Member.</p>\r\n                    <p style=\"font-size:16px;color:rgb(51, 59, 52)!important;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                        इनके रिलेशनशिप मैनेजर से बात करने के लिए अभी <strong>VIP</strong> प्लान में रजिस्टर कराएं </p>\r\n                    <p style=\"font-size:16px;color:rgb(51, 59, 52)!important;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n                        To Contact Their Relationship Manager Buy <strong>VIP</strong> Plan Right Now!!</p>\r\n                    <p style=\"margin-top: 15px;margin-bottom: 0px;font-size: 12sp;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                        <strong>VIP</strong> सदस्यता की जानकारी के लिए\r\n                    </p>\r\n                    <p style=\"margin-top: 15px;margin-bottom: 0px;font-size: 12sp;\"\r\n                        *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n                        For More Information On <strong>VIP</strong> Plans\r\n                </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n                <button class=\"mat-elevation-z10\" style=\"background:#00c2cb\" mat-raised-button\r\n                    (click)=\"premiumInterest()\">{{languageService.getCurrentLanguage() === 'hindi' \r\n                    ? 'कॉल बैक रिक्वेस्ट करें ' : 'Request Call Back'}}</button>\r\n            </div>\r\n        </main>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/rate-us-dialog/rate-us-dialog.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/rate-us-dialog/rate-us-dialog.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatRateUsDialogRateUsDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mainDiv\" *ngIf=\"!(showForFreeUser$ | async)\">\r\n<div class=\"topImg\">\r\n    <img width=\"60px\" src=\"../../../assets/new icons/gift.svg\" alt=\"gift\">\r\n</div>\r\n<p id=\"firstLine\">\r\n    Give us 5 <img width=\"30px\" style=\"margin: -5px 2px 0px;\" src=\"../../../assets/new icons/star_green.svg\" alt=\"star\"> and\r\n</p>\r\n<p id=\"secondLine\">\r\n    get 3 contacts Free!\r\n</p>\r\n\r\n<div class=\"text-center stars\" \r\n(click)=\"openPlayStore()\">\r\n    <img width=\"35px\" *ngFor=\"let item of [1,2,3,4,5]\" src=\"../../../assets/new icons/star_green.svg\" alt=\"star\">\r\n</div>\r\n\r\n<div class=\"bottomDiv\">\r\n    <img width=\"45px\" \r\n    (click)=\"openPlayStore()\"\r\n    src=\"../../../assets/new icons/playstore.svg\" alt=\"playstore\">\r\n    <button mat-raised-button\r\n    (click)=\"openPlayStore()\"\r\n     class=\"rateBtn\">\r\n        Rate us\r\n    </button>\r\n</div>\r\n</div>\r\n\r\n<!-- //for free user -->\r\n\r\n<div class=\"mainDiv\" *ngIf=\"(showForFreeUser$ | async)\">\r\n    <img style=\"width: 2rem;\r\n    border-radius: 100px;\r\n    border: 1px solid #737373;\r\n    position: absolute;\r\n    right: 10px;\r\n    margin-top: 10px;\" src=\"../../../assets/clear.svg\" alt=\"close dialog\"\r\n    (click)=\"closeDialog()\">\r\n\r\n    <div class=\"text-center\" >\r\n        <img style=\"margin-top: 30px;\r\n        width: 110px;\" src=\"../../../assets/new icons/rate5star.svg\" alt=\"stars\">\r\n    </div>\r\n    <p id=\"firstLine\" style=\"margin-top: 20px;\">\r\n        Rate us 5 stars to get 3 contacts for free\r\n    </p>\r\n\r\n    <p id=\"smallTC\">\r\n        T&C apply - 1 gift profile contact per day\r\n    </p>\r\n    \r\n    <div class=\"bottomDiv\">\r\n        <img width=\"45px\" \r\n        (click)=\"openPlayStore()\"\r\n        src=\"../../../assets/new icons/playstore.svg\" alt=\"playstore\">\r\n        <button mat-raised-button\r\n        (click)=\"openPlayStore()\"\r\n         class=\"rateBtn\">\r\n            Rate us\r\n        </button>\r\n    </div>\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-checkout/custom-checkout.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-checkout/custom-checkout.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomCheckoutCustomCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"paytm-checkoutjs\"></div>\r\n<mat-card>\r\n    <mat-card-title>\r\n        <img style=\"width: 100px;\" src=\"../../assets/logo_short.png\" alt=\"\">\r\n        Checkout Form\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        \r\n        <form [formGroup]=\"checkOutForm\">\r\n        <mat-form-field appearance=\"standard\">\r\n            <mat-label>Name</mat-label>\r\n            <input formControlName=\"name\" type=\"text\" matInput>\r\n            <mat-error *ngIf=\"checkOutForm.get('name').invalid\">Please Enter A Valid Name</mat-error>\r\n          </mat-form-field> <br>\r\n\r\n          <mat-form-field appearance=\"standard\">\r\n            <mat-label>Email</mat-label>\r\n            <input formControlName=\"email\" type=\"email\" matInput>\r\n            \r\n            <mat-error *ngIf=\"checkOutForm.get('email').invalid\">Please Enter A Valid Email</mat-error>\r\n          </mat-form-field>\r\n\r\n          <form method=\"post\" id=\"pay\" name=\"paytm\">\r\n            <table border=\"1\">\r\n               <tbody>\r\n                  <input type=\"hidden\" name=\"mid\" [value]=\"mId\">\r\n                  <input type=\"hidden\" name=\"orderId\" [value]=\"oId\">\r\n                  <input type=\"hidden\" name=\"txnToken\" [value]=\"txnToken\">\r\n               </tbody>\r\n            </table>\r\n         </form>\r\n\r\n          <div class=\"container-fluid\" style=\"border: 1px solid#f5f5f5;margin-top: 20px;\">\r\n\r\n            <button class=\"btn btnPaymentType\" (click)=\"createSubscription('card')\">\r\n                <img class=\"paymentImage\" src=\"../../assets/card.svg\" alt=\"card payment\"><span class=\"paytype\">Cards</span> \r\n            </button>\r\n            <hr>\r\n            <button class=\"btn btnPaymentType\" (click)=\"createSubscription('netbanking')\">\r\n                <img class=\"paymentImage\" src=\"../../assets/bank.svg\"  alt=\"netbanking payment\"> <span class=\"paytype\">Netbanking</span> \r\n            </button>\r\n            <hr>\r\n            <button class=\"btn btnPaymentType\" (click)=\"createSubscription('wallet')\"> \r\n                <img class=\"paymentImage\" src=\"../../assets/wallet.svg\"  alt=\"wallet payment\"> <span class=\"paytype\">Wallets</span> \r\n            </button>\r\n            <hr>\r\n            <button class=\"btn btnPaymentType\" (click)=\"openPaytm()\"> \r\n                <img class=\"paymentImage\" src=\"../../assets/wallet.svg\"  alt=\"wallet payment\"> <span class=\"paytype\">Paytm</span> \r\n            </button>\r\n          </div>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-drawer/home-drawer.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-drawer/home-drawer.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewHomeHomeDrawerHomeDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"mainContainer\">\r\n    <ng-container>\r\n        <div class=\"profilePicSection\">\r\n            <div style=\"width: 100%;background-color: #83C9F4;\">\r\n                <p\r\n                    style=\"margin: 0px;padding: 10px 0px;text-align: center;font-weight: bold;font-size: 18px;position:absolute;left:12%\">\r\n                    {{languageService.homeLang.myprofile}}\r\n                </p>\r\n                <p\r\n                    style=\"color:#83C9F4;margin: 0px;padding: 10px 0px;text-align: center;font-weight: bold;font-size: 18px;\">\r\n                    {{languageService.homeLang.myprofile}}\r\n                </p>\r\n            </div>\r\n            <div style=\"\r\n            padding: 10px 30px;display: flex;flex-direction: row;align-items: center;justify-content: center;\">\r\n                <img width=\"40px\" class=\"profileImage\" [defaultImage]=\"'../../assets/logo_192.png'\"\r\n                    [lazyLoad]=\"'../../assets/logo_192.png 600w, ../../assets/logo_384.png 1000w'\" [useSrcset]=\"true\"\r\n                    alt=\"profile picture\" *ngIf=\"homeService.getProfilePic() == null\">\r\n\r\n                <img class=\"profileImage\" [src]=\"homeService.getProfilePic()\" alt=\"profile picture\"\r\n                    *ngIf=\"homeService.getProfilePic()\">\r\n                <span style=\"font-size: 18px;position:absolute;top:10px;right:12%\">हिं <mat-slide-toggle\r\n                        [checked]=\"langCheck\" (change)=\"langChanged($event)\">En</mat-slide-toggle></span>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container>\r\n        <div style=\"padding: 20px 40px; font-size: 16px;font-weight: bold;\">\r\n            <button class=\"btn drawerBtn\">\r\n                <img style=\"width: 40px;\" (click)=\"sendWhatsAppLink()\" src=\"../../../assets/whatsapp.webp\"\r\n                    alt=\"whatsapp share\">\r\n                <!-- <img width=\"40px\" src=\"../../../assets/password.svg\" alt=\"settings icon\"> -->\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; Connect On Whatsapp</span>\r\n            </button>\r\n            <button class=\"btn drawerBtn\" [routerLink]=\"['/fourReg']\" routerLinkActive=\"router-link-active\"\r\n                *ngIf=\"homeService.getLoginStatus() == false\">\r\n                <img width=\"40px\" src=\"../../../assets/note.svg\" alt=\"register\">\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; {{languageService.homeLang.registerFree}}</span>\r\n            </button>\r\n\r\n            <button class=\"btn drawerBtn\" [routerLink]=\"['/phone-number']\" routerLinkActive=\"router-link-active\"\r\n                *ngIf=\"homeService.getLoginStatus() == false\">\r\n                <img width=\"40px\" src=\"../../../assets/password.svg\" alt=\"settings icon\">\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; {{languageService.homeLang.login}}</span>\r\n            </button>\r\n            <button class=\"btn drawerBtn\" [routerLink]=\"['subscription']\" routerLinkActive=\"router-link-active\">\r\n                <img width=\"40px\" src=\"../../../assets/contract.svg\" alt=\"settings icon\">\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; {{languageService.homeLang.subscription}}</span>\r\n            </button>\r\n            <button class=\"btn drawerBtn\" (click)=\"logout()\" *ngIf=\"homeService.getLoginStatus()\">\r\n                <img width=\"40px\" src=\"../../../assets/log_out.svg\" alt=\"settings icon\">\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; {{languageService.homeLang.logout}}</span>\r\n            </button>\r\n            <button class=\"btn drawerBtn\" routerLink=\"/kundaliMatching\">\r\n                <img width=\"40px\" src=\"../../../assets/horoscopeN.svg\" alt=\"settings icon\">\r\n                <span style=\"padding-top: 4.5px; color: #070973;\r\n                        margin-left: 10px;\">&nbsp;&nbsp; Free Kundali Matching</span>\r\n            </button>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container>\r\n\r\n        <div class=\"drawerButtonSection\">\r\n            <button mat-raised-button style=\"background-color: transparent;\r\n                        border-radius: 100px;border: 1px solid #1AA0F2;\r\n                        width: 100%;\r\n                        padding: 10px 0px;\r\n                        font-size: 16px;\r\n                        font-weight: bold;\r\n                        color: #070973;\" (click)=\"openBlog()\">\r\n                <img class=\"btnImage\" src=\"../../../assets/settings.svg\" alt=\"settings icon\">\r\n                {{languageService.homeLang.ourBlog}}\r\n            </button>\r\n\r\n            <button mat-raised-button style=\"background-color: #FAC8F1;\r\n                        border-radius: 100px;border: 1px solid #1AA0F2;\r\n                        width: 100%;\r\n                        margin-top: 10px;\r\n                        font-size: 16px;\r\n                        font-weight: bold;\r\n                        padding: 10px 0px;\r\n                        color: #070973;\">\r\n                <img class=\"btnImage\" src=\"../../../assets/couplehearts.svg\" alt=\"couple hearts\">\r\n                {{languageService.homeLang.vipMatchmaking}}\r\n            </button>\r\n        </div>\r\n\r\n    </ng-container>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-main/home-main.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-main/home-main.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewHomeHomeMainHomeMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- first container -->\r\n<ng-container>\r\n    <div id=container1>\r\n        <div style=\"position: absolute;\" class=\"imageOneGradient\">\r\n        </div>\r\n        <div style=\"position: absolute;bottom:18%;text-align: center;\" class=\"imageOneGradient2\">\r\n            <div style=\"width: 100%;\r\n            height: 100%;display: flex;\r\n            justify-content: space-evenly;\r\n            flex-direction: column;\r\n             align-items: center;\r\n             position:relative\">\r\n                <span class=\"special-font text-shadow\"\r\n                    style=\"font-size: 35px;font-weight: bold;text-shadow:  2px 1px black;z-index:1;\">\r\n                    {{languageService.homeLang.familyTogether}}\r\n                </span>\r\n                <div style=\"background:rgba(255, 255, 255, 0.849);border-radius:15px;z-index:1;\r\n                border-radius: 15px;\r\n                z-index: 1;\r\n                width: 300px;\r\n                display: flex;\r\n                flex-direction: row;\r\n                align-items: center;\r\n                justify-content: center;\r\n                position:relative\">\r\n                    <form [formGroup]=\"optionsForm\" id=\"landingPageForm\">\r\n                        <div class=\"row\" style=\"display: flex;\r\n                        flex-direction: row;\r\n                        justify-content: center;\r\n                        margin:25px 5px;\">\r\n                            <div class=\"col\" style=\"width:45%\">\r\n                                <mat-form-field class=\"full-width fieldFit\" appearance=\"outline\">\r\n                                    <mat-label>Looking:</mat-label>\r\n                                    <mat-select (selectionChange)=\"selected('looking')\" formControlName=\"Looking\">\r\n                                        <mat-option value=\"Groom\">\r\n                                            Groom\r\n                                        </mat-option>\r\n                                        <mat-option value=\"Bride\">\r\n                                            Bride\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col\" style=\"width:45%\">\r\n                                <mat-form-field class=\"full-width fieldFit\" appearance=\"outline\">\r\n                                    <mat-label>For:</mat-label>\r\n                                    <mat-select (selectionChange)=\"selected('for')\" formControlName=\"For\">\r\n                                        <mat-option *ngFor=\"let  option of createProfile\" [value]=\"option\">\r\n                                            {{option}}\r\n                                        </mat-option>\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <button mat-raised-button style=\"position:absolute;bottom:-30px\" class=\"registerBtn\"\r\n                                (click)=\"goToCompatibility()\" routerLinkActive=\"router-link-active\"\r\n                                *ngIf=\"homeService.getLoginStatus()==false\">\r\n                                {{languageService.homeLang.freeRegister}}\r\n                            </button>\r\n                            <button mat-raised-button style=\"position:absolute;bottom:-30px\" class=\"rishteBtn\"\r\n                                [routerLink]=\"['/chat']\" routerLinkActive=\"router-link-active\"\r\n                                *ngIf=\"homeService.getLoginStatus()\">\r\n                                {{languageService.homeLang.rishteDekhein}}\r\n                            </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!-- <span style=\"font-size: 18px;font-weight: bold;text-shadow:  2px 1px black;;\">\r\n                    {{languageService.homeLang.familyTogether}}\r\n                </span> -->\r\n                <img width=\"30px\" src=\"../../../assets/keyboard_arrow_down-white-18dp.svg\" alt=\"show more\">\r\n            </div>\r\n        </div>\r\n        <div class=\"mainBackImage\">\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- 2nd container -->\r\n\r\n<ng-container>\r\n    <!-- <div class=\"imageTwoGradient\">\r\n        <mat-card class=\"featureCard\" style=\"background-image: linear-gradient(0deg,#F5A513 , #F7CB67);\r\n        color: #070973; text-align: center;\">\r\n            <mat-card-title style=\"font-weight: bold;font-size: 20px;\">\r\n                    {{languageService.homeLang.moreThan}}\r\n                    </mat-card-title>\r\n                    <mat-card-subtitle style=\"color: #070973;font-size: 16px;margin-bottom: 0px;\">\r\n                    {{languageService.homeLang.chooseFrom}}\r\n                    </mat-card-subtitle>\r\n                    <mat-card-content>\r\n                        <img width=\"35%\" src=\"../../../assets/home-icons/50000.svg\" alt=\"image\">\r\n                    </mat-card-content>\r\n\r\n        </mat-card>\r\n\r\n        <mat-card class=\"featureCard\" style=\"background-image: linear-gradient(0deg, #3708A1,#8860E3);\r\n        color: #C1FA25;text-align: center;\">\r\n            <mat-card-title style=\"font-weight: bold;font-size: 20px;\">\r\n                {{languageService.homeLang.manyMatchmakers}}\r\n                </mat-card-title>\r\n                <mat-card-subtitle style=\"color: #C1FA25;font-size: 16px;margin-bottom: 0px;\">\r\n                {{languageService.homeLang.helpingHands}}\r\n                </mat-card-subtitle>\r\n                <mat-card-content>\r\n                    <img width=\"35%\" src=\"../../../assets/home-icons/10000+ Mtchmakers.svg\" alt=\"image\">\r\n                </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"featureCard\" style=\"background-image: linear-gradient(0deg,#F5A513 , #F7CB67);\r\n        color: #070973; text-align: center;\">\r\n            <mat-card-title style=\"font-weight: bold;font-size: 20px;\">\r\n                    {{languageService.homeLang.manyTemple}}\r\n                    </mat-card-title>\r\n                    <mat-card-subtitle style=\"color: #070973;font-size: 16px;margin-bottom: 0px;\">\r\n                    {{languageService.homeLang.verificationCenters}}\r\n                    </mat-card-subtitle>\r\n                    <mat-card-content>\r\n                        <img width=\"35%\" src=\"../../../assets/home-icons/25+ temples.svg\" alt=\"image\">\r\n                    </mat-card-content>\r\n        </mat-card>\r\n</div> -->\r\n    <div class=\"list\">\r\n        <div class=\"row contentArea\">\r\n            <div class=\"infoRow\" style=\"flex:1 1 280px!important;\">\r\n                <div class=\"column\">\r\n                    <div class=\"row information\">\r\n                        <div class=\"columnar\">\r\n                            <div class=\"row\">\r\n                                <p><strong>{{languageService.homeLang.moreThan}}</strong><br>\r\n                                    {{languageService.homeLang.chooseFrom}}</p>\r\n                            </div>\r\n                            <div class=\"row SpCard\">\r\n                                <img class=\"infoGraphic\" src=\"../../../assets/1.svg\" alt=\"image\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"infoRow\" style=\"flex:1 1 280px!important;\">\r\n                <div class=\"column\">\r\n                    <div class=\"row information\">\r\n                        <div class=\"columnar\">\r\n                            <div class=\"row\">\r\n                                <p><strong>{{languageService.homeLang.manyMatchmakers}}</strong><br>\r\n                                    {{languageService.homeLang.helpingHands}}</p>\r\n                            </div>\r\n                            <div class=\"row SpCard\">\r\n                                <img class=\"infoGraphic\" src=\"../../../assets/2.svg\" alt=\"image\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"infoRow\" style=\"flex:1 1 280px!important;\">\r\n                <div class=\"column\">\r\n                    <div class=\"row information\">\r\n                        <div class=\"columnar\">\r\n                            <div class=\"row\">\r\n                                <p><strong>{{languageService.homeLang.manyTemple}}</strong><br>\r\n                                    {{languageService.homeLang.verificationCenters}}</p>\r\n                            </div>\r\n                            <div class=\"row SpCard\">\r\n                                <img class=\"infoGraphic\" src=\"../../../assets/3.svg\" alt=\"image\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- 3rd container -->\r\n\r\n<ng-container>\r\n    <div class=\"headingThree\">\r\n        <div>\r\n            <span class=\"special-font text-shadow\" style=\"font-weight: bold;color: white;font-size: 30px;\">\r\n                {{languageService.homeLang.offlineCentres}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <div class=\"carousel-div\">\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">{{languageService.homeLang.shivTemple}}</span>\r\n                    <mat-card class=\"featureCard2\">\r\n                        <img class=\"feature2Img\"\r\n                            src=\"https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/shiv_sai_dhaam_300.jpeg\"\r\n                            alt=\"Shiv Sai Dham Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">{{languageService.homeLang.sanatanTemple}}</span>\r\n                    <mat-card class=\" featureCard2\">\r\n                        <img class=\"feature2Img\" src=\"\r\n                    https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/sanathan_dharm_300.jpeg\"\r\n                            alt=\"Sanathan Dharam Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">{{languageService.homeLang.lakshmiTemple}}</span>\r\n                    <mat-card class=\" featureCard2\">\r\n                        <img class=\"feature2Img\"\r\n                            src=\"https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/lakshmi_narayan_300.jpeg\"\r\n                            alt=\"Lakshmi Narayan Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n            </ng-template>\r\n        </owl-carousel-o>\r\n        <div style=\"display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\">\r\n            <a [routerLink]=\"['/viewCentres']\" routerLinkActive=\"router-link-active\"\r\n                style=\"color:white;text-decoration: none;font-size: 1.2rem;font-weight: bold;\">\r\n                {{languageService.homeLang.showMore}}\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"imageThreeGradient\">\r\n        <div class=\"button3 btnRightPad\">\r\n            <button class=\"registerBtn \" style=\"background-color: #0C9BF2;\" [routerLink]=\"['/fourReg']\"\r\n                routerLinkActive=\"router-link-active\" mat-raised-button *ngIf=\"homeService.getLoginStatus()==false\">\r\n                {{languageService.homeLang.freeRegister}}\r\n            </button>\r\n            <button class=\"rishteBtn \" style=\"background-color: #0C9BF2;\" [routerLink]=\"['/chat']\"\r\n                routerLinkActive=\"router-link-active\" mat-raised-button *ngIf=\"homeService.getLoginStatus()\">\r\n                {{languageService.homeLang.rishteDekhein}}\r\n            </button>\r\n            <br>\r\n            <img width=\"30px\" src=\"../../../assets/keyboard_arrow_down-white-18dp.svg\" alt=\"show more\">\r\n        </div>\r\n    </div> -->\r\n</ng-container>\r\n<ng-container>\r\n    <div class=\"list\">\r\n        <div class=\"row contentArea\">\r\n            <div class=\"infoRow\">\r\n                <div class=\"column\">\r\n                    <div class=\"row information\">\r\n                        <div class=\"columnar\">\r\n                            <div class=\"row\" style=\"margin-bottom: 6rem!important;\">\r\n                                <p class=\"special-font text-shadow\" style=\"font-weight: bold;font-size: 35px;\">\r\n                                    Introducing Android App</p>\r\n                            </div>\r\n                            <div class=\"row SpCardApp\">\r\n                                <img id=\"image\" width=\"100%\" src=\"../../../assets/4.svg\" alt=\"image\">\r\n                                <p style=\"color:rgba(36, 34, 34, 0.925)\">Get Notified Everytime Someone Likes You</p>\r\n                                <div class=\"row appDownload btn\" (click)=\"openPlaystore()\">\r\n                                    <div class=\" col-4\">\r\n                                        <img width=\"45px\" style=\"margin:10px\" src=\"../../../assets/playstore-new.svg\"\r\n                                            alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"col-7\"\r\n                                        style=\"display: flex;flex-direction: row;align-items: center;justify-content: center;\">\r\n                                        Download The Mobile App\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- 4rth container -->\r\n<ng-container>\r\n    <div class=\"mainBack\" style=\"z-index:-1!important\">\r\n        <form [formGroup]=\"kundaliForm\">\r\n            <div class=\"row\" style=\"margin-bottom: 4rem!important;\">\r\n                <p class=\"special-font text-shadow\" style=\"width:100%;font-weight: bold;font-size: 45px;\">\r\n                    Free Kundali Matching</p><br>\r\n                <p style=\"width:100%;font-weight: bold;font-size: 23px;\">Enter {{currentGender}} Details</p>\r\n            </div>\r\n            <div class=\"rowM\">\r\n                <!-- <img class=\"mat-elevatino-z8\"\r\n                    style=\"position:absolute;top:-45px;margin-left:-28px;width:76px;left: 50%;\"\r\n                    src=\"../../../assets/logo_144.png\" alt=\"\"> -->\r\n                <div class=\"column1\" *ngIf=\"!(BoyDetailsFilled$ | async)\">\r\n                    <div class=\"details\">\r\n                        <!-- <div class=\"col\">\r\n                            <p style=\"font-size:1.3rem;margin:2% 0 1% 0\"> Enter Boy's Details</p>\r\n                        </div> -->\r\n                        <div class=\"col\">\r\n                            <h6>Name</h6>\r\n                            <input class=\"form-control\" formControlName=\"BoyName\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Date</h6><br>\r\n                            <div class=\"special\">\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthDate\">\r\n                                    <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthMonth\">\r\n                                    <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthYear\">\r\n                                    <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Time</h6>\r\n                            <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                                formControlName=\"BoyBirthTime\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Place</h6>\r\n                            <input class=\"form-control\" type=\"text\" id=\"BoyBirthPlace\"\r\n                                [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                                #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                                (change)=\"placeChanged('BoyBirthPlace')\" formControlName=\"BoyBirthPlace\">\r\n                        </div>\r\n                        <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"detailsFilled()\"\r\n                            *ngIf=\"!(BoyDetailsFilled$ | async)\">Enter Girls Details</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column1\" *ngIf=\"(BoyDetailsFilled$ | async)\">\r\n                    <div class=\"details\">\r\n                        <div class=\"col\">\r\n                            <h6>Name</h6>\r\n                            <input class=\"form-control\" formControlName=\"GirlName\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Date</h6>\r\n                            <div class=\"special\">\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthDate\">\r\n                                    <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthMonth\">\r\n                                    <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthYear\">\r\n                                    <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Time</h6>\r\n                            <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                                formControlName=\"GirlBirthTime\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Place</h6>\r\n                            <input class=\"form-control\" type=\"text\" id=\"GirlBirthPlace\"\r\n                                [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                                #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                                (change)=\"placeChanged('GirlBirthPlace')\" formControlName=\"GirlBirthPlace\">\r\n                        </div>\r\n                        <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"onSubmit()\"\r\n                            *ngIf=\"(BoyDetailsFilled$ | async)\">See Kundali Score</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-container>\r\n<ng-container>\r\n    <div id=\"container4\">\r\n        <span class=\"special-font text-shadow\" style=\"font-weight: bold;font-size: 35px;\">\r\n            {{languageService.homeLang.joinHearts}}\r\n        </span>\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"testimonial\">\r\n                    <div class=\"testimonialGradient\">\r\n                        <img class=\"testimonialImage\"\r\n                            src=\"https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/Review1_600.jpg\"\r\n                            alt=\"Reviews\">\r\n                        <span class=\"testimonial-names\">\r\n                            Kaushik &nbsp;<img src=\"../../../assets/heart-pink.svg\" style=\"width:20px;\"> &nbsp;Anushka\r\n                        </span><br>\r\n                        <span class=\"testimonial-text\">\r\n                            I loved their events which are systematically organized and gives one time to meet a\r\n                            number of\r\n                            matches at the same time. We met at one such event and I recommend their services to\r\n                            everyone.\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"testimonial\">\r\n                    <div class=\"testimonialGradient\">\r\n                        <img class=\"testimonialImage\"\r\n                            src=\"https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/Review2_600.jpg\"\r\n                            alt=\"Reviews\">\r\n                        <span class=\"testimonial-names\">\r\n                            Sahil&nbsp;<img src=\"../../../assets/heart-pink.svg\" style=\"width:20px;\">&nbsp;Salony\r\n                        </span><br>\r\n                        <span class=\"testimonial-text\">\r\n                            I met the love of my Life through Hans Matrimony. I'm so happy and I could not thank\r\n                            them much.\r\n                            Its so unique concept like who would have thought they would find their life partner on\r\n                            Chat.\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"testimonial\">\r\n                    <div class=\"testimonialGradient\">\r\n                        <img class=\"testimonialImage\"\r\n                            src=\"https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/photography_600.jpg\"\r\n                            alt=\"Reviews\">\r\n                        <span class=\"testimonial-names\">\r\n                            Lakshay &nbsp;<img src=\"../../../assets/heart-pink.svg\" style=\"width:20px;\"> &nbsp;Priya\r\n                        </span><br>\r\n                        <span class=\"testimonial-text\">\r\n                            Hans Matrimony is by far the best matrimonial\r\n                            service.\r\n                            Aprajita and her team of matchmakers sieved through thousands of profiles to find me my\r\n                            perfect\r\n                            match.\r\n                            I highly recommend their services.\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </owl-carousel-o>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- 5th container -->\r\n<ng-container>\r\n    <div id=\"container5\">\r\n        <p>Now Stay Connected of The</p>\r\n        <p class=\"special-font text-shadow\" style=\"font-weight: bold;font-size:35px;color: #ffffff;\r\n            text-align: center;\">\r\n            #1 {{languageService.homeLang.matchmakingApp}}\r\n        </p>\r\n        <p>Anytime & Anywhere</p>\r\n        <div class=\"row appDownload2\" (click)=\"openPlaystore()\">\r\n            <div class=\"col-4 newApp\">\r\n                <img width=\"45px\" style=\"margin:10px\" src=\"../../../assets/playstore-new.svg\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-7\" style=\"display: flex;flex-direction: row;align-items: center;justify-content: center;\">\r\n                Download The Mobile App\r\n            </div>\r\n        </div>\r\n        <!-- <div id=\"playBtn\" (click)=\"openPlaystore()\">\r\n            <span style=\"color: #D313AE;border-right: 1px solid #D313AE;\r\n            align-self: center;\r\n            font-weight: bold;\r\n            padding-right: 20px;\">\r\n                {{languageService.homeLang.getOnPhone}}\r\n            </span>\r\n            <img style=\"width: 20px;margin-left: 10px;\" src=\"../../assets/playstore.svg\" alt=\"playstore app\">\r\n        </div> -->\r\n\r\n        <!-- <div style=\"position: relative; margin-top: 10px;border-radius: 10px;background-color: #D313AE;\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin-bottom: 50px;\r\n        justify-content: space-evenly;\r\n        height: 40px; \">\r\n            <span style=\"color: white;\r\n            align-self: center;\r\n            font-weight: bold;\r\n            padding-right: 20px;\" [routerLink]=\"['/fourReg']\" routerLinkActive=\"router-link-active\"\r\n                *ngIf=\"homeService.getLoginStatus()==false\">\r\n                {{languageService.homeLang.freeRegister}}\r\n            </span>\r\n            <span style=\"color: white;\r\n            align-self: center;\r\n            font-weight: bold;\r\n            padding-right: 20px;\" [routerLink]=\"['/chat']\" routerLinkActive=\"router-link-active\"\r\n                *ngIf=\"homeService.getLoginStatus()\">\r\n                {{languageService.homeLang.rishteDekhein}}\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"background-color: #070673;text-align: center;\r\n    height: 40px;padding-top: 8px;\">\r\n        <img width=\"30px\" src=\"../../../assets/keyboard_arrow_down-white-18dp.svg\" alt=\"show more\">\r\n    </div> -->\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container>\r\n    <footer>\r\n        <div>\r\n            <img width=\"60px\" src=\"../../assets/logo_192.png\" alt=\"Hans Logo\">\r\n            <span style=\"font-weight: bold; font-size: 20px; margin-left: 10px;\">\r\n                Hans Matrimony\r\n            </span>\r\n        </div>\r\n\r\n        <div id=\"footerDiv1\">\r\n            <div id=\"footerDiv2\">\r\n\r\n                <div>\r\n                    <ul>\r\n                        <span style=\"color: darkgrey;font-weight: bold;font-size: 16px;\">COMPANY</span>\r\n                        <li>\r\n                            About us\r\n                        </li>\r\n                        <li>\r\n                            Our Services\r\n                        </li>\r\n                        <li>\r\n                            Information\r\n                        </li>\r\n                        <li>\r\n                            About us\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <ul>\r\n                        <span style=\"color: darkgrey;font-weight: bold;font-size: 16px;\">USEFUL LINKS</span>\r\n                        <li>\r\n                            Help & Support\r\n                        </li>\r\n                        <li>\r\n                            Chat with us\r\n                        </li>\r\n                        <li>\r\n                            Contact us\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div>\r\n                    <ul>\r\n                        <span style=\"color: darkgrey;font-weight: bold;font-size: 16px;\">BROWSE MATRIMONIAL\r\n                            PROFILES</span>\r\n                        <li>\r\n                            Religion\r\n                        </li>\r\n                        <li>\r\n                            Caste\r\n                        </li>\r\n                        <li>\r\n                            Country\r\n                        </li>\r\n                        <li>\r\n                            Cities\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div id=\"iconSet\">\r\n                <a href=\"https://www.facebook.com/HansMatrimony/\">\r\n                    <i class=\"fa fa-facebook iconFooter\"></i>\r\n                </a>\r\n                <a href=\"https://twitter.com/HansMatrimony\">\r\n                    <i class=\"fa fa-twitter iconFooter\"></i>\r\n                </a>\r\n                <a href=\"https://www.instagram.com/hansmatrimony/\">\r\n                    <i class=\"fa fa-instagram iconFooter\"></i>\r\n                </a>\r\n                <a href=\"https://www.linkedin.com/company/hansmatrimony\">\r\n                    <i class=\"fa fa-linkedin iconFooter\"></i>\r\n                </a>\r\n                <a href=\"https://www.tiktok.com/@hansmatrimony?lang=en\">\r\n                    <img style=\"width: 54px; height: 60px;padding: 15px;\" src=\"../assets/tiktok.png\">\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n        <hr style=\"background-color: white;\">\r\n\r\n        <p id=\"bottomText\">\r\n            <a href=\"#\">Success Stories &nbsp;| &nbsp;</a>\r\n            <a href=\"#\">Careers &nbsp;| &nbsp;</a> <a href=\"#\">Payment\r\n                Options &nbsp;| &nbsp;</a>\r\n            <a href=\"#\">Terms & Conditions &nbsp;| &nbsp;</a> <a style=\"color: white;\" href=\"#\">Privacy Policy</a>\r\n        </p>\r\n\r\n        <p style=\"text-align: center;\r\n       color: white;\r\n       font-size: 12px;\r\n       margin-bottom: 0px;\r\n       margin-top: 0px;\">\r\n            Copyright @ 2020 hansmatrimony.com\r\n        </p>\r\n    </footer>\r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/kundali/kundali.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/kundali/kundali.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewHomeKundaliKundaliComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"content\">\r\n    <div class=\"topnav\" id=\"myTopnav\">\r\n        <div class=\"navbar-brand active\">\r\n            <img width=\"50px\" [defaultImage]=\"'../../assets/logo_72.png'\"\r\n                [lazyLoad]=\"'../../assets/logo_192.png 600w, ../../assets/logo_192.png 1000w'\" [useSrcset]=\"true\"\r\n                alt=\"Hans Matrimony\">\r\n            <span\r\n                style=\"width:70px!important;margin-left: 10px;font-size: 16sp;font-weight: bold;font-size: 18px;\"><strong>Hans\r\n                    Matrimony</strong></span>\r\n        </div>\r\n        <a href=\"home\">Home</a>\r\n        <a href=\"javascript:void(0);\" (click)=\"downloadApp()\">Download App</a>\r\n        <!-- <a href=\"#about\">About</a> -->\r\n        <a href=\"chat/getcallback/\">Contact Matchmaker</a>\r\n        <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"myFunction()\">\r\n            <i class=\"fa fa-bars\"></i>\r\n        </a>\r\n    </div>\r\n    <div class=\"rowN\" *ngIf=\"!(gotRes$ | async)\">\r\n        <p class=\"special-font topText\">Rishtey Nahi</p>\r\n        <p class=\"special-font topText\">Jode Dilo Ko Bhi!</p>\r\n        <p class=\"topText\" style=\"font-size:1.9rem\"> Kundali Matching</p>\r\n    </div>\r\n    <div class=\"mainBackImage\" style=\"margin-bottom:12rem\">\r\n        <form [formGroup]=\"kundaliForm\">\r\n            <div class=\"rowM\">\r\n                <div class=\"column\">\r\n                    <div class=\"details\">\r\n                        <div class=\"col\">\r\n                            <p style=\"font-size:1.3rem;margin:2% 0 1% 0\"> Enter Boy's Details</p>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Name</h6>\r\n                            <input class=\"form-control\" formControlName=\"BoyName\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Date</h6>\r\n                            <div class=\"special\">\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthDate\">\r\n                                    <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthMonth\">\r\n                                    <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"BoyBirthYear\">\r\n                                    <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Time</h6>\r\n                            <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                                formControlName=\"BoyBirthTime\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Place</h6>\r\n                            <input class=\"form-control\" type=\"text\" id=\"BoyBirthPlace\"\r\n                                [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                                #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                                (change)=\"placeChanged('BoyBirthPlace')\" formControlName=\"BoyBirthPlace\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                    <div class=\"details\">\r\n                        <div class=\"col\">\r\n                            <p style=\"font-size:1.3rem;margin:2% 0 1% 0\"> Enter Girls's Details</p>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Name</h6>\r\n                            <input class=\"form-control\" formControlName=\"GirlName\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Date</h6>\r\n                            <div class=\"container\">\r\n                                <div class=\"row\"></div>\r\n                            </div>\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthDate\">\r\n                                    <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthMonth\">\r\n                                    <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                <select class=\"form-control classic\" formControlName=\"GirlBirthYear\">\r\n                                    <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                            \r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Time</h6>\r\n                            <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                                formControlName=\"GirlBirthTime\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <h6>Birth Place</h6>\r\n                            <input class=\"form-control\" type=\"text\" id=\"GirlBirthPlace\"\r\n                                [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                                #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                                (change)=\"placeChanged('GirlBirthPlace')\" formControlName=\"GirlBirthPlace\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"onSubmit()\"\r\n                    *ngIf=\"(showContinueBtn$|async)\">Continue</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"mainBack\" *ngIf=\"(gotRes$ | async)\" style=\"margin-bottom:3rem\">\r\n        <h5 class=\"text-shadow\" style=\"color:rgba(18, 110, 196, 0.877);font-size:1.3rem;\">Details of Boy and Girl\r\n        </h5>\r\n        <div class=\"rowO\">\r\n            <table>\r\n                <tr style=\"background: transparent!important;\">\r\n                    <th> </th>\r\n                    <th>Name</th>\r\n                    <th>Birth Date</th>\r\n                    <th>Birth Time</th>\r\n                    <th>Birth Place</th>\r\n                </tr>\r\n                <tr>\r\n                    <td>Boy</td>\r\n                    <td>{{kundaliForm.value.BoyName}}</td>\r\n                    <td>{{kundaliForm.value.BoyBirthDate}}/\r\n                        {{kundaliForm.value.BoyBirthMonth}}/\r\n                        {{kundaliForm.value.BoyBirthYear}}</td>\r\n                    <td>{{kundaliForm.value.BoyBirthTime}}</td>\r\n                    <td>{{kundaliForm.value.BoyBirthPlace}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Girl</td>\r\n                    <td>{{kundaliForm.value.GirlName}}</td>\r\n                    <td>{{kundaliForm.value.GirlBirthDate}}/\r\n                        {{kundaliForm.value.GirlBirthMonth}}/\r\n                        {{kundaliForm.value.GirlBirthYear}}</td>\r\n                    <td>{{kundaliForm.value.GirlBirthTime}}</td>\r\n                    <td>{{kundaliForm.value.GirlBirthPlace}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <h5 class=\"text-shadow\" style=\"margin-top:30px;color:rgba(18, 110, 196, 0.877);font-size:1.3rem;\">\r\n            Guna Milan\r\n        </h5>\r\n        <div class=\"rowO\" style=\"max-width:92vw; overflow-x: scroll;\">\r\n            <table>\r\n                <thead>\r\n                    <tr style=\"background: transparent!important;\">\r\n                        <th>Guna</th>\r\n                        <th>Boy</th>\r\n                        <th>Girl</th>\r\n                        <th>Points Obtained</th>\r\n                        <th>Maximum Points</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody [innerHTML]=\"transformYourHtml(HTMLResponse)\">\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"row\" style=\"background:transparent!important;width:90vw\">\r\n            <div class=\"\" style=\"width:68%\">\r\n                <h5 class=\"text-shadow\" style=\"margin-top:30px;color:rgba(18, 110, 196, 0.877);font-size:1.3rem;\">\r\n                    Horoscope Matching results\r\n                </h5>\r\n                <div class=\"card\">\r\n                    <ul>\r\n                        <li>\r\n                            Ashtkoot Matching between Boy and Girl is&nbsp;<strong>{{points}} / 36</strong>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div id=\"pointsDiv\" style=\"width:30%\">\r\n                <h5 class=\"text-shadow\" style=\"margin-top:30px;color:rgba(18, 110, 196, 0.877);font-size:1.3rem;\">\r\n                    Obtained Points\r\n                </h5>\r\n                <div class=\"card\">\r\n                    <p><a style=\"font-size: 2.5rem;font-weight: bold;color:rgba(18, 110, 196, 0.877)\">{{points}}</a><a\r\n                            style=\"font-size: 1.2rem;font-weight: bold;color:rgba(18, 110, 196, 0.664)\">/36</a></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/new-home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/new-home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewHomeNewHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"mainContainer\">\r\n    <mat-sidenav id=\"sidenav\" class=\"drawerSettings\" mode=\"over\" position=\"start\"\r\n        (opened)=\"homeService.saveDrawerInstance(sidenav)\" #sidenav>\r\n        <app-home-drawer></app-home-drawer>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n\r\n        <mat-toolbar class=\"fixToolBar\">\r\n            <mat-toolbar-row class=\"toolBarRow\">\r\n                <div class=\"mainDivToolbar\">\r\n                    <!-- <div style=\"display: flex;\r\n                    flex-direction: row;\r\n                    align-items: center;\r\n                    justify-content: center;\">\r\n                        <img width=\"40px\" [defaultImage]=\"'../../assets/logo_72.png'\"\r\n                            [lazyLoad]=\"'../../assets/logo_192.png 600w, ../../assets/logo_192.png 1000w'\"\r\n                            [useSrcset]=\"true\" alt=\"Hans Matrimony\">\r\n                        <span\r\n                            style=\"color: white; margin-left: 10px;font-size: 16sp;font-weight: bold;font-size: 18px;\"><strong>Hans\r\n                                Matrimony</strong></span>\r\n                    </div> -->\r\n                    <div class=\"menu-icon\">\r\n                        <!-- <span style=\"font-size: 18px;\">हिं <mat-slide-toggle [checked]=\"langCheck\"\r\n                                (change)=\"langChanged($event)\">En</mat-slide-toggle></span> -->\r\n                        <a href=\"javascript:void(0);\" style=\"color: white;\" class=\"icon\" (click)=\"sidenav.toggle()\">\r\n                            <i class=\"fa fa-bars\"></i>\r\n                            <span class=\"toolText\" *ngIf=\"homeService.getLoginStatus()==false\"><a\r\n                                    style=\"color: white;text-decoration: none;\" [routerLink]=\"['/phone-number']\"\r\n                                    routerLinkActive=\"router-link-active\">{{languageService.homeLang.login}}</a></span>\r\n                            <span class=\"toolText\" *ngIf=\"homeService.getLoginStatus()\"><a\r\n                                    style=\"color: white;text-decoration: none;\" [routerLink]=\"['/chat']\"\r\n                                    routerLinkActive=\"router-link-active\">{{languageService.homeLang.rishteDekhein}}</a></span>\r\n                        </a>\r\n                        <!-- <img class=\"drawerImg\" (click)=\"sidenav.toggle()\" src=\"../../assets/menu.svg\" alt=\"menu\"> -->\r\n                    </div>\r\n                    <button mat-raised-button class=\"rishteBtn\" (click)=\"openPlaystore()\">\r\n                        <img width=\"20px\" src=\"../../assets/playstore_white.svg\" alt=\"\">\r\n                        Get The App Now\r\n                    </button>\r\n                </div>\r\n            </mat-toolbar-row>\r\n\r\n            <mat-toolbar-row class=\"toolBarRow\">\r\n                <div class=\"row toolBarRow2\" style=\"border-bottom: 2px solid cornsilk!important;\">\r\n\r\n                    <!-- <div class=\"col-4 t-c b-r\" style=\"padding: 0px;\">\r\n                        <span class=\"toolText\"><a style=\"color: white;text-decoration: none;\"\r\n                                href=\"https://play.google.com/store/apps/details?id=com.twango.me\">\r\n                                {{languageService.homeLang.downloadApp}}</a></span>\r\n                    </div> -->\r\n                    <div class=\"t-c b-l\" style=\"margin:auto\">\r\n                        <img style=\"position:absolute; bottom:-30px;left:50%;margin-left:-36px\" width=\"72px\"\r\n                            [defaultImage]=\"'../../assets/logo_72.png'\"\r\n                            [lazyLoad]=\"'../../assets/logo_192.png 600w, ../../assets/logo_192.png 1000w'\"\r\n                            [useSrcset]=\"true\" alt=\"Hans Matrimony\">\r\n                        <!-- <span\r\n                            style=\"color: white; margin-left: 10px;font-size: 16sp;font-weight: bold;font-size: 18px;\"><strong>Hans\r\n                                Matrimony</strong></span> -->\r\n                    </div>\r\n                    <!-- <div class=\"col-4 t-c \">\r\n                        <img style=\"width: 25px;\" (click)=\"sendWhatsAppLink()\" src=\"../../assets/whatsapp-white.svg\"\r\n                            alt=\"whatsapp share\">\r\n                    </div> -->\r\n                    <!-- <div class=\"col-4 t-c b-l\" style=\"padding: 0px;\">\r\n                        <span class=\"toolText\" *ngIf=\"homeService.getLoginStatus()==false\"><a\r\n                                style=\"color: white;text-decoration: none;\" [routerLink]=\"['/phone-number']\"\r\n                                routerLinkActive=\"router-link-active\">{{languageService.homeLang.login}}</a></span>\r\n                        <span class=\"toolText\" *ngIf=\"homeService.getLoginStatus()\"><a\r\n                                style=\"color: white;text-decoration: none;\" [routerLink]=\"['/chat']\"\r\n                                routerLinkActive=\"router-link-active\">{{languageService.homeLang.rishteDekhein}}</a></span>\r\n                    </div> -->\r\n                </div>\r\n            </mat-toolbar-row>\r\n\r\n        </mat-toolbar>\r\n\r\n        <!-- home main -->\r\n\r\n        <app-home-main></app-home-main>\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/custom-bg/custom-bg.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/custom-bg/custom-bg.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentCustomBgCustomBgHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-image: url('../../../assets/footer/bg.svg')\">\r\n    <app-features></app-features>\r\n    <how-it-works></how-it-works>\r\n    <new-app></new-app>\r\n    <offline-centers></offline-centers>\r\n    <kundali></kundali>\r\n    <matchmakers></matchmakers>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/features/features.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/features/features.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentFeaturesFeaturesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"d-flex justify-content-center\">\r\n    <div *ngFor=\"let feature of features\">\r\n        <app-feature-cards [features]=\"feature\"></app-feature-cards>\r\n    </div>\r\n</div> -->\r\n<div @fade class=\"d-flex justify-content-center features\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                    <img src=\"../../../assets/featuresIllustrations/illustration1.jpg\" alt=\"\">\r\n                </div>\r\n                <p>Verified matches from <br><span style=\"font-weight:bold\">50+ temples</span> in india </p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                    <img src=\"../../../assets/featuresIllustrations/illustration2.jpg\" alt=\"\">\r\n                </div>\r\n                <p>More than <span style=\"font-weight:bold\">50,000 </span>\r\n                     <br>suitable matches </p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                    <img src=\"../../../assets/featuresIllustrations/illustration3.jpg\" alt=\"\">\r\n                </div>\r\n                <p>Get Your <span style=\"font-weight:bold\">Personal Matchmaker</span>\r\n                    \r\n                   <br>from 1000+Matchmakers </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/footer/footer.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/footer/footer.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentFooterFooterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app-footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-2 blended-col\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                    \r\n                    <div class=\"imgbox\">\r\n                        <img class=\"blob \" src=\"../../../assets/footer/blob1.svg\" alt=\"\">\r\n                    </div>\r\n                   \r\n                </div>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                \r\n                    <div class=\"texts\">\r\n                        <h2>Now Stay Connected to the</h2><br>\r\n                        <h1>#1 Matchmaking app</h1><br>\r\n                        <h2>Anytime & Anywhere</h2><br>\r\n                        <div class=\"d-flex justify-content-center\">\r\n                            <img  (click)=\"downloadApp()\" class=\"googleplay\" src=\"../../../assets/newAppIllustrations/googleplay.jpg\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                \r\n            </div>\r\n            <div class=\"col-2 blended-col-right\">\r\n                <div class=\"d-flex justify-content-start\">\r\n                    <div class=\"imgbox\">\r\n                        <img class=\"blob\" src=\"../../../assets/footer/blob2.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"footer-bottom\">\r\n        <div class=\"container footer-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-3\"></div>\r\n                <div class=\"col-3\">\r\n                    <h4>Useful Links</h4>\r\n                    <ul>\r\n                        <li>Help and Support</li>\r\n                        <li>Chat with us</li>\r\n                        <li>Contact Us</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <h4>Browse Profiles</h4>\r\n                    <ul>\r\n                        <li>Religion</li>\r\n                        <li>Caste</li>\r\n                        <li>Country</li>\r\n                        <li>Cities</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-3\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-4\">\r\n                </div>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-2\">\r\n                    <div class=\"d-flex justify-content-center justify-content-between\">\r\n                       <img class=\"icons\" src=\"../../../assets/footer/facebook.svg\" alt=\"\">\r\n                       <img class=\"icons\" src=\"../../../assets/footer/twitter.svg\" alt=\"\">\r\n                       <img class=\"icons\" src=\"../../../assets/footer/instagram.svg\" alt=\"\">\r\n                       <img class=\"icons\" src=\"../../../assets/footer/linkedin.svg\" alt=\"\">\r\n                       \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-5\"></div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <p>Success Stories | Careers | Payment Options | Terms & Conditions | Privacy Policy</p>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <p>Copyright @ 2020 hansmatrimony.com</p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentFreeKundaliMatchingKundaliComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"kundali\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1>Free Kundali Matching</h1>\r\n    </div>\r\n\r\n    <div class=\"mainBack\" style=\"z-index:-1!important\">\r\n      <div class=\"d-flex justify-content-center\">\r\n        <form [formGroup]=\"kundaliForm\">\r\n              <div class=\"d-flex justify-content-center\">\r\n                <h3>Enter {{currentGender}} Details</h3>\r\n          </div>\r\n          <br>\r\n          <div class=\"rowM\">\r\n              <!-- <img class=\"mat-elevatino-z8\"\r\n                  style=\"position:absolute;top:-45px;margin-left:-28px;width:76px;left: 50%;\"\r\n                  src=\"../../../assets/logo_144.png\" alt=\"\"> -->\r\n              <div class=\"column1\" *ngIf=\"!(BoyDetailsFilled$ | async)\">\r\n                  <div class=\"details\">\r\n                      <!-- <div class=\"col\">\r\n                          <p style=\"font-size:1.3rem;margin:2% 0 1% 0\"> Enter Boy's Details</p>\r\n                      </div> -->\r\n                      <div class=\"col\">\r\n                          <h6>Name</h6>\r\n                          <input class=\"form-control\" formControlName=\"BoyName\" type=\"text\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Date</h6>\r\n                          \r\n                            <div class=\"container\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-4\">\r\n                                  <select class=\"form-control classic\" formControlName=\"BoyBirthDate\">\r\n                                    <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                  <select class=\"form-control classic\" formControlName=\"BoyBirthMonth\">\r\n                                    <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                  <select class=\"form-control classic\" formControlName=\"BoyBirthYear\">\r\n                                    <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </option>\r\n                                </select>\r\n                                \r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                              \r\n                              \r\n                              \r\n                          \r\n                      </div>\r\n                      <br>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Time</h6>\r\n                          <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                              formControlName=\"BoyBirthTime\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Place</h6>\r\n                          <input class=\"form-control\" type=\"text\" id=\"BoyBirthPlace\"\r\n                              [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                              #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                              (change)=\"placeChanged('BoyBirthPlace')\" formControlName=\"BoyBirthPlace\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"d-flex justify-content-center\">\r\n                        <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"detailsFilled()\"\r\n                          *ngIf=\"!(BoyDetailsFilled$ | async)\">Enter Girls Details</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"column1\" *ngIf=\"(BoyDetailsFilled$ | async)\">\r\n                  <div class=\"details\">\r\n                      <div class=\"col\">\r\n                          <h6>Name</h6>\r\n                          <input class=\"form-control\" formControlName=\"GirlName\" type=\"text\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Date</h6>\r\n                          \r\n                          <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-4\">\r\n                                    <select class=\"form-control classic\" formControlName=\"GirlBirthDate\">\r\n                                        <option *ngFor=\"let item of date\" [value]=\"item\">\r\n                                            {{item}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <select class=\"form-control classic\" formControlName=\"GirlBirthMonth\">\r\n                                        <option *ngFor=\"let item of month\" [value]=\"item\">\r\n                                            {{item}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-4\">\r\n                                    <select class=\"form-control classic\" formControlName=\"GirlBirthYear\">\r\n                                        <option *ngFor=\"let item of years\" [value]=\"item\">\r\n                                            {{item}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n                          <br>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Time</h6>\r\n                          <input min=\"00:00:00\" max=\"24:59:59\" type=\"time\" class=\"form-control\"\r\n                              formControlName=\"GirlBirthTime\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"col\">\r\n                          <h6>Birth Place</h6>\r\n                          <input class=\"form-control\" type=\"text\" id=\"GirlBirthPlace\"\r\n                              [autoCompleteOptions]=\"autoComplete\" matValidateAddress matGoogleMapsAutocomplete\r\n                              #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\"\r\n                              (change)=\"placeChanged('GirlBirthPlace')\" formControlName=\"GirlBirthPlace\">\r\n                      </div>\r\n                      <br>\r\n                      <div class=\"d-flex justify-content-center\">\r\n                        <button mat-raised-button type=\"button\" id=\"viewButton\" class=\"btn\" (click)=\"onSubmit()\"\r\n                          *ngIf=\"(BoyDetailsFilled$ | async)\">See Kundali Score</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </form>\r\n      </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/hero/hero.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/hero/hero.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentHeroHeroHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hero\">\r\n    <img class=\"vector-bottom\" src=\"../../../assets/hero/VectorBottom.svg\" alt=\"\">\r\n    <img src=\"../../../assets/hero/stripes.svg\" alt=\"\" class=\"stripes\">\r\n    <img src=\"../../../assets/hero/stripes2.svg\" alt=\"\" class=\"stripes2\">\r\n    <img src=\"../../../assets/hero/stripes3.svg\" alt=\"\" class=\"stripes3\">\r\n     <!-- <app-main-nav></app-main-nav> -->\r\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-transparent\">\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <div class=\"logo-holder\">\r\n                    <img class=\"logo mr-3 img-fluid\" src=\"../../../assets/hero/logo.svg\" alt=\"\">\r\n                    <img class=\"logo-text\" src=\"../../../assets/hero/text.svg\" alt=\"\">\r\n                </div>\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\r\n            (click)=\"isCollapsed=!isCollapsed\"\r\n            >\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n          \r\n            <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navbarSupportedContent\">\r\n              <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"about\">About us</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"contact\">Contact</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"login\">Login</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a (click)=\"downloadApp()\" >\r\n                        <img class=\"googleplay\" src=\"../../../assets/newAppIllustrations/googleplay.jpg\" alt=\"\">\r\n                    </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </nav>\r\n          <div class=\"container\">\r\n            \r\n              <div class=\"row\">\r\n                  <div *ngIf=\"!smallScreen\" class=\"col-md-6\">\r\n                    <div class=\"content\">\r\n                        <h2><span style=\"font-weight:bold\">Verified</span> matches from <br> <span style=\"font-weight:bold\">50+ Temples</span>\r\n                        </h2>\r\n                        \r\n                        <hr>\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <p>Searching a</p>\r\n                                    <div class=\"d-flex\">\r\n                                        <button (click)=\"groomToggle()\" [class.groom-btn]=\"groom\" [class.bride-btn]=\"bride\" >Groom</button>\r\n                                        <button (click)=\"brideToggle()\" [class.groom-btn]=\"bride\" [class.bride-btn]=\"groom\">Bride</button>\r\n                                    </div>\r\n                                 </div>\r\n                                <div class=\"col-6\">\r\n                                    <p>For</p>\r\n                                    <div class=\"d-flex\">\r\n                                        <button type=\"button\" class=\"myself-btn\">{{name}}</button>\r\n                                                <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                                                    <button class=\"down\" ngbDropdownToggle></button>\r\n                                                    <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n                                                    <button #myself (click)=\"mySelf(myself.id)\" id=\"myself\" ngbDropdownItem>Myself</button>\r\n                                                    <button *ngIf=\"groom\" #daughter (click)=\"mySelf(daughter.id)\" id=\"daughter\" ngbDropdownItem>Daughter</button>\r\n                                                    <button *ngIf=\"bride\" #son (click)=\"mySelf(son.id)\" id=\"Son\" ngbDropdownItem>Son</button>\r\n                                                    <button  *ngIf=\"bride\" #brother (click)=\"mySelf(brother.id)\" id=\"brother\" ngbDropdownItem>Brother</button>\r\n                                                    <button *ngIf=\"groom\" #sister (click)=\"mySelf(sister.id)\" id=\"sister\" ngbDropdownItem>Sister</button>\r\n                                                    <button #other (click)=\"mySelf(other.id)\" id=\"other\" ngbDropdownItem>Other</button>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-center\">\r\n                            <button \r\n                            (click)=\"goToCompatibility()\"\r\n                            routerLinkActive=\"router-link-active\"\r\n                            class=\"register-btn\">Register For Free</button>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"!smallScreen\" class=\"col-md-6\">\r\n                      <img class=\"illustration img-fluid\" src=\"../../../assets/hero/illsvg.svg\" alt=\"\">\r\n                  </div>\r\n                  <div *ngIf=\"smallScreen\" class=\"col-md-6\">\r\n                    <img class=\"illustration img-fluid\" src=\"../../../assets/hero/illsvg.svg\" alt=\"\">\r\n                </div>\r\n                  <div *ngIf=\"smallScreen\" class=\"col-md-6\">\r\n                    <div class=\"content\">\r\n                        <h2 style=\"text-align:center;\" ><span style=\"font-weight:bold\">Verified</span> matches from <br> <span style=\"font-weight:bold\">50+ Temples</span>\r\n                        </h2>\r\n                        <hr>\r\n                        <div class=\"container\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <p>Searching a</p>\r\n                                    <div class=\"d-flex\">\r\n                                        <button (click)=\"groomToggle()\" [class.groom-btn]=\"groom\">Groom</button>\r\n                                        <button (click)=\"brideToggle()\" [class.groom-btn]=\"bride\">Bride</button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <p>For</p>\r\n                                    <div class=\"d-flex\">\r\n                                        <button type=\"button\" class=\"myself-btn\">{{name}}</button>\r\n                                                <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                                                    <button class=\"down\" ngbDropdownToggle></button>\r\n                                                    <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n                                                    <button #myself (click)=\"mySelf(myself.id)\" id=\"myself\" ngbDropdownItem>Myself</button>\r\n                                                    <button #daughter (click)=\"mySelf(daughter.id)\" id=\"daughter\" ngbDropdownItem>Daughter</button>\r\n                                                    <button #son (click)=\"mySelf(son.id)\" id=\"Son\" ngbDropdownItem>Son</button>\r\n                                                    <button #brother (click)=\"mySelf(brother.id)\" id=\"brother\" ngbDropdownItem>Brother</button>\r\n                                                    <button #sister (click)=\"mySelf(sister.id)\" id=\"sister\" ngbDropdownItem>Sister</button>\r\n                                                    <button #other (click)=\"mySelf(other.id)\" id=\"other\" ngbDropdownItem>Other</button>\r\n                                                    </div>\r\n                                                </div>\r\n\r\n                                    </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"d-flex justify-content-center\">\r\n                            <button (click)=\"goToCompatibility()\"\r\n                            routerLinkActive=\"router-link-active\" \r\n                            class=\"register-btn\">Register For Free</button>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    </div>  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/howItWorks/how-it-works.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/howItWorks/how-it-works.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentHowItWorksHowItWorksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2  class=\"wrapper-text\" >How it <span style=\"color:#24ADD8\" >Works</span></h2>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"!iPhone5\" class=\"col-1\"></div>\r\n        <div class=\"col-5 left\"><img class=\"img-fluid img-left\" src=\"{{works[0].image}}\"></div>\r\n        <div class=\"col-1\">\r\n            <div class=\"join\"></div>\r\n        </div>\r\n        <div class=\"col-5 right\">\r\n            <h3>{{works[0].header}}</h3>\r\n            <p >Join our platform easily by providing your basic details either online or offline at the temple centres.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row \">\r\n        <div *ngIf=\"!iPhone5\" class=\"col-1\"></div>\r\n        <div class=\"col-5 left\">\r\n            <div class=\"right-text\">\r\n                <h3 >{{works[1].header}}</h3>\r\n            <p >Profiles are verified by the matchmakers at  hans matrimony temple centres to give you the best profiles possible</p>\r\n            </div>\r\n        </div>\r\n          \r\n          \r\n        <div class=\"col-1\">\r\n            <div class=\"join\"></div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n            <img class=\"img-right\" src=\"{{works[1].image}}\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"!iPhone5\" class=\"col-1\"></div>\r\n        <div class=\"col-5 left\">\r\n            <img class=\"img-fluid img-left\" src=\"{{works[2].image}}\">\r\n        </div>\r\n          \r\n          \r\n        <div class=\"col-1\">\r\n            <div class=\"join\"></div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n            \r\n            <h3>{{works[2].header}}</h3>\r\n            <p >Contact our matchmakers to get your personalised matches anytime. Our matchmakers will share profiles on a daily/weekly basis as per your  preferences</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"!iPhone5\" class=\"col-1\"></div>\r\n        <div class=\"col-5 left\">\r\n            <div class=\"right-text\">\r\n                <h3>{{works[3].header}}</h3>\r\n            <p>Choose your perfect matches and contact them by becoming our prime member in just a single tap. </p>\r\n            </div>\r\n        </div>\r\n          \r\n          \r\n        <div class=\"col-1\">\r\n            <div class=\"join\"></div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n            <img class=\"img-right\" src=\"{{works[3].image}}\">\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngIf=\"!iPhone5\" class=\"col-1\"></div>\r\n        <div style=\"margin-left:-18px;\" class=\"col-5\">\r\n            <img class=\"img-fluid img-left\" src=\"{{works[4].image}}\">\r\n        </div>\r\n          \r\n          \r\n        <div  class=\"col-1\">\r\n            <div class=\"join\"></div>\r\n        </div>\r\n        <div class=\"col-5\">\r\n            \r\n            <h3>{{works[4].header}}</h3>\r\n            <p >We at Hans Matrimony are dedicated to help you find your life partner. Sign up and leave the hassle to us</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n    <button (click)=\"goToCompatibility()\" >Register For Free</button>\r\n</div>\r\n  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/matchmakers/matchmakers.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/matchmakers/matchmakers.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentMatchmakersMatchmakersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"match-makers\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1>Matchmakers</h1>\r\n    </div>\r\n    <div class=\"carousel-div\">\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <img class=\"feature2Img\"\r\n                            src=\"../../../assets/carousel/image1.jpg\"\r\n                            alt=\"\">\r\n                <!-- <div class=\"temple-card text-shadow\">\r\n                    <mat-card class=\"featureCard2\">\r\n                        \r\n                    </mat-card>\r\n                </div> -->\r\n                \r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <img class=\"feature2Img\"\r\n                            src=\"../../../assets/carousel/image1.jpg\"\r\n                            alt=\"\">\r\n                <!-- <div class=\"temple-card text-shadow\">\r\n\r\n                    <mat-card class=\"featureCard2\">\r\n                        \r\n                    </mat-card>\r\n                </div> -->\r\n                \r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <img class=\"feature2Img\" src=\"\r\n                        ../../../assets/carousel/image1.jpg\"\r\n                            alt=\"\">\r\n                <!-- <div class=\"temple-card text-shadow\">\r\n                    \r\n                    <mat-card class=\" featureCard2\">\r\n                        \r\n                    </mat-card>\r\n                </div> -->\r\n                \r\n            </ng-template>\r\n\r\n        </owl-carousel-o>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/new-landing-from-component.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/new-landing-from-component.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentNewLandingFromComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<hero></hero>\n<custom-bg></custom-bg>\n<testimonials></testimonials>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/newApp/new-app.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/newApp/new-app.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentNewAppNewAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"new-app\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-1\"></div>\r\n                <div class=\"col-md-5 col-sm-12\">\r\n                    <div class=\"d-flex justify-content-center\">\r\n                        <div *ngIf=\"mobileScreen\">\r\n                            <h2>INTRODUCING ANDROID APP</h2>\r\n                            <hr class=\"one\">\r\n                            <hr class=\"two\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-center\">\r\n                        <img class=\"new-app-illustration\" src=\"../../../assets/newAppIllustrations/newapp.svg\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5 col-sm-12\">\r\n                    <div class=\"mt-5\">\r\n                        \r\n                            <div class=\"d-flex justify-content-center\">\r\n                                <div>\r\n                                        <h2 *ngIf=\"!mobileScreen\">INTRODUCING ANDROID APP</h2>\r\n                                        <h5>Get Notified Everytime Someone <br>Likes You</h5>\r\n                                    \r\n                                  \r\n                                    <img (click)=\"downloadApp()\" class=\"googleplay\" src=\"../../../assets/newAppIllustrations/googleplay.png\" alt=\"\">\r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        \r\n                    </div>\r\n                    \r\n                </div>\r\n                <div class=\"col-md-1\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/offlineCenters/offline-centers.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/offlineCenters/offline-centers.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentOfflineCentersOfflineCentersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"match-makers\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1>Offline Centers Network</h1>\r\n    </div>\r\n    <!-- <ngx-slick-carousel class=\"carousel\" \r\n                        #slickModal=\"slick-carousel\"                  \r\n                        [config]=\"slideConfig\">\r\n        <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\r\n              <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\r\n              <p>{{slide.details}}</p>\r\n        </div>\r\n    </ngx-slick-carousel> -->\r\n    <div class=\"carousel-div\">\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">\r\n                        <!-- {{languageService.homeLang.shivTemple}} -->\r\n                    </span>\r\n                    <mat-card class=\"featureCard2\">\r\n                        <img class=\"feature2Img\"\r\n                            src=\"../../../assets/offlineCenters/center1.jpg\"\r\n                            alt=\"Shiv Sai Dham Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n                <p>Shree Shiv Sai Dham Mandir</p>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">\r\n                        <!-- {{languageService.homeLang.sanatanTemple}} -->\r\n                    </span>\r\n                    <mat-card class=\" featureCard2\">\r\n                        <img class=\"feature2Img\" src=\"\r\n                        ../../../assets/offlineCenters/center2.jpg\"\r\n                            alt=\"Sanathan Dharam Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n                <p>Shree Lakshmi Narayan Mandir</p>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"temple-card text-shadow\">\r\n                    <span class=\"temple-name\">\r\n                        <!-- {{languageService.homeLang.lakshmiTemple}} -->\r\n                    </span>\r\n                    <mat-card class=\" featureCard2\">\r\n                        <img class=\"feature2Img\"\r\n                            src=\"../../../assets/offlineCenters/center3.jpg\"\r\n                            alt=\"Lakshmi Narayan Mandir\">\r\n                    </mat-card>\r\n                </div>\r\n                <p>Shree Sanatan Dharam Mandir</p>\r\n            </ng-template>\r\n        </owl-carousel-o>\r\n        <!-- <div style=\"display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\">\r\n            <a [routerLink]=\"['/viewCentres']\" routerLinkActive=\"router-link-active\"\r\n                style=\"color:white;text-decoration: none;font-size: 1.2rem;font-weight: bold;\">\r\n                {{languageService.homeLang.showMore}}\r\n            </a>\r\n        </div> -->\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentTestimonialsTestimonialCardsTestimonialCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"testimonial-cards\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n                <img src=\"{{testimonial.image}}\" alt=\"\">  \r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n                <p>{{testimonial.paragraph}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n           \r\n    \r\n</div>\r\n            ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonials.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonials.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewLandingFromComponentTestimonialsTestimonialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"testimonials\">\r\n    <div class=\"d-flex justify-content-center\">\r\n        <h1>\r\n            Testimonials\r\n            <hr class=\"one\">\r\n        <hr class=\"two\">\r\n        </h1>\r\n        \r\n    </div>\r\n<!--     \r\n    <div class=\"carousel-holder\">\r\n        <ngx-slick-carousel class=\"carousel\" \r\n    #slickModal=\"slick-carousel\" \r\n    [config]=\"slideConfig\">\r\n<div ngxSlickItem *ngFor=\"let testimonial of testimonials\" class=\"slide d-flex justify-content-center\">\r\n    <div class=\"container mx-4\">\r\n        <div style=\"position:relative\" class=\"row\">\r\n            <div class=\"col-3\">\r\n                <img class=\"testimonial-image\" src=\"{{testimonial.image}}\">\r\n            </div>\r\n            <div class=\"col-9\">\r\n                <div>\r\n                    <img class=\"comma\" src=\"../../assets/testimonials/comma.svg\" alt=\"\">\r\n                    <div class=\"testimonial-text\">\r\n                        <h2>{{testimonial.title}}</h2>\r\n                        <p>{{testimonial.paragraph}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</ngx-slick-carousel>\r\n    </div> -->\r\n    <div class=\"carousel-div\">\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img \r\n                            id=\"testimonialImage\"\r\n                            src=\"{{testimonials[0].image}}\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[0].title}}</h2>\r\n                                    <p>{{testimonials[0].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img  id=\"testimonialImage\" src=\"{{testimonials[1].image}}\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[1].title}}</h2>\r\n                                    <p>{{testimonials[1].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n            </ng-template>\r\n            <ng-template class=\"slide\" carouselSlide>\r\n                <div class=\"container mx-4\">\r\n                    <div style=\"position:relative\" class=\"row\">\r\n                        <div class=\"col-4\">\r\n                            <img  id=\"testimonialImage\" src=\"{{testimonials[2].image}}\">\r\n                        </div>\r\n                        <div class=\"col-8\">\r\n                            <div>\r\n                                <img class=\"comma\" src=\"../../../assets/testimonials/comma.svg\" alt=\"\">\r\n                                <div class=\"testimonial-text\">\r\n                                    <h2>{{testimonials[2].title}}</h2>\r\n                                    <p>{{testimonials[2].paragraph}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </owl-carousel-o>\r\n    </div>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/lockdown-off/lockdown-off.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/lockdown-off/lockdown-off.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOffersLockdownOffLockdownOffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div id=\"cancel\">\r\n        <img (click)=\"closeDialog()\" style=\"width: 40px;margin: 5px 5px 0px 0px;\" src=\"../../../assets/cancelwhite.svg\" alt=\"cancel\">\r\n    </div>\r\n\r\n    <div id=\"topBanner\">\r\n        <div id=\"bannerDiv\">\r\n            <img id=\"bannerImg\" src=\"../../../assets/lockdown_banner.svg\" alt=\"banner\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        \r\n        <h3 id=\"offerHeadLine\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            सभी प्लान्स पर <span style=\"color: #58d1fd;\r\n            font-weight: bold;\r\n            font-family: sans-serif;\r\n            font-size: 2.3rem;\">50%</span> की छूट\r\n        </h3>\r\n\r\n        <h3 id=\"offerHeadLine\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            All Plans Are On <span style=\"color: #58d1fd;\r\n            font-weight: bold;\r\n            font-family: sans-serif;\r\n            font-size: 2.3rem;\">50%</span> OFF!!\r\n        </h3>\r\n\r\n        <p class=\"subHeading\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            बेसिक प्लान&nbsp;@&nbsp;<del>5600</del> &nbsp; <span style=\"color: #707070;\r\n            font-family: sans-serif;\r\n            font-weight: bolder;\r\n            font-size: 1.6rem;\">₹2800</span> \r\n        </p>\r\n\r\n        <p class=\"subHeading\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Basic Plan&nbsp;@&nbsp;<del>5600</del> &nbsp; <span style=\"color: #707070;\r\n            font-family: sans-serif;\r\n            font-weight: bolder;\r\n            font-size: 1.6rem;\">₹2800</span> \r\n        </p>\r\n\r\n    </div>\r\n\r\n    <div class=\"t-c subHeading2\">\r\n        <span class=\"subHeading\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            जल्दी करें ऑफर सिर्फ\r\n        </span>\r\n        <span class=\"subHeading\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Buy Fast, Offer Valid For\r\n        </span>\r\n\r\n        <div class=\"timer\">\r\n            <div class=\"t-c\" style=\"display: flex;flex-direction: column;width: fit-content;\">\r\n                <span style=\"color: #797979;\">{{languageService.getCurrentLanguage() === 'hindi' ? 'मिनट' : 'Minutes'}}</span>\r\n                <p style=\"font-size: 2rem;\r\n                color: #737373;\r\n                display: inline-block;\r\n                border: 4px solid #58d1fd;\r\n                border-radius: 10px;\r\n                width: 70px;\r\n                padding: 5px;\">\r\n                    {{minutes}}\r\n                </p>\r\n            </div>\r\n\r\n            <div style=\"display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\">\r\n                <h1 style=\"color: #58d1fd;font-size: 2rem;font-family: sans-serif;font-weight: bolder;\">\r\n                    :\r\n                </h1>\r\n            </div>\r\n\r\n            <div>\r\n                <div class=\"t-c\" style=\"display: flex;flex-direction: column;width: fit-content;\">\r\n                    <span style=\"color: #797979;\">{{languageService.getCurrentLanguage() === 'hindi' ? 'सेकंड' : 'Seconds'}}</span>\r\n                    <p style=\"font-size: 2rem;\r\n                    color: #737373;\r\n                    display: inline-block;\r\n                    border: 4px solid #58d1fd;\r\n                    border-radius: 10px;\r\n                    width: 70px;\r\n                    padding: 5px;\">\r\n                        {{seconds}}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div>\r\n            <span class=\"subHeading\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n                के लिए\r\n            </span>\r\n        </div>\r\n\r\n        <div class=\"t-c\">\r\n            <button [routerLink]=\"['/subscription']\" routerLinkActive=\"router-link-active\" (click)=\"closeDialog()\"  class=\"btn offer-btn\"\r\n             mat-raised-button>\r\n                {{languageService.getCurrentLanguage() === 'hindi' ? 'मेम्बरशिप चुनें ' : 'Buy Plan'}}  \r\n            </button>\r\n        </div>\r\n    </div>\r\n    \r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-one/offer-one.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-one/offer-one.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOffersOfferOneOfferOneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main *ngIf=\"data\">\r\n    <div class=\"t-c topDiv\">\r\n        <img id=\"profileImage\" [src]=\"getProfilePhoto()\" alt=\"profle image\">\r\n        <button style=\"color: #737373;\r\n         position: absolute;\r\n         border-radius: 100%;\r\n         right: 10px;\r\n         display: flex;\r\n         flex-direction: column;\r\n         padding: 10px;\r\n         background-color: #c8c8c8;\r\n         border: none;\r\n         align-items: center;\r\n         justify-content: center;\r\n         top: 0px;\"\r\n         (click)=\"closeDialog()\">\r\n            <mat-icon style=\"color: white;\">close</mat-icon>\r\n        </button>\r\n        <p class=\"contentText\" style=\"margin-top: -55px;\">\r\n            {{data.data.name}}\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        <p class=\"contentText\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            देर किस बात की ? इन्हे अभी कॉल करें\r\n        </p>\r\n        <p class=\"contentText\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Why Wait? Call Now!!\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\" style=\"margin-top: 25px;\">\r\n        <p class=\"contentText\" [innerHTML]=\"generateRandom()\">\r\n            <mat-icon style=\"color: #58d1fd;\r\n            vertical-align: middle;\r\n            height: 40px;\r\n            font-size: 40px;\">call</mat-icon>\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"t-c\">\r\n            <button [routerLink]=\"['/subscription']\" routerLinkActive=\"router-link-active\"\r\n             (click)=\"closeDialog()\"  class=\"btn\" style=\"background: #D313AE;\r\n            color: white;\r\n            font-size: 2rem;\r\n            font-weight: bold;\r\n            padding: 10px 50px;\r\n            border-radius: 10px;\r\n            margin: 20px 0px\" mat-raised-button>\r\n                {{languageService.getCurrentLanguage() === 'hindi' ? 'मेम्बरशिप चुनें' : 'Buy Plan'}}  \r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        <p class=\"contentText\" style=\"margin: 0px;\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            अभी <span style=\"color: #58d1fd;font-family: sans-serif;font-size: 1.5rem;\">50%</span> की बचत करें \r\n        </p>\r\n        <p class=\"contentText\" style=\"margin: 0px;\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Save <span style=\"color: #58d1fd;font-family: sans-serif;font-size: 1.5rem;\">50%</span> On Plans Now!!\r\n        </p>\r\n    </div>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-two/offer-two.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-two/offer-two.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOffersOfferTwoOfferTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\r\n    <div class=\"t-c topDiv\">\r\n\r\n        <div class=\"t-c\" style=\"display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\">\r\n            <img id=\"profileImage\" [src]=\"userPhoto()\" alt=\"profle image\">\r\n            <img id=\"profileImage\" [src]=\"getProfilePhoto()\" alt=\"profle image\">\r\n            <img style=\"width: 60px;\r\n            position: absolute;\r\n            opacity: 1;\r\n            z-index: 1;\r\n            top: -20px;\" src=\"../../../assets/heartdarkpink.svg\" alt=\"heart\">\r\n        </div>\r\n\r\n        <button id=\"cross\"\r\n         (click)=\"closeDialog()\">\r\n            <mat-icon style=\"color: white;\">close</mat-icon>\r\n        </button>\r\n        <p class=\"contentText\" style=\"margin-top: -30px;\">\r\n           {{data.data.profile.name}}\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\" style=\"position: relative;\">\r\n        <p class=\"contentText\">\r\n            {{languageService.getCurrentLanguage() === 'hindi' ? 'आपको पसंद करती हैं' : 'Likes You'}} &nbsp; <img style=\"width: 40px;\r\n            position: absolute;\" src=\"../../../assets/heartspink.svg\" alt=\"hearts\">\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\" style=\"margin-top: 25px;\">\r\n        <p class=\"contentText\" style=\"font-size:1.75rem\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            यह रिश्ता हाथ से न जाने दें\r\n        </p>\r\n        <p class=\"contentText\" style=\"font-size:1.75rem\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Dont Let This Rishta Slip From Your Hands\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"t-c\">\r\n        <p class=\"contentText\" style=\"margin: 0px;font-size: 1rem;\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n            अभी <span style=\"color: #58d1fd;font-weight: bolder;\r\n            font-family: sans-serif;font-size: 1rem;\">50%</span> की बचत करें \r\n        </p>\r\n        <p class=\"contentText\" style=\"margin: 0px;font-size: 1rem;\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n            Save <span style=\"color: #58d1fd;font-weight: bolder;\r\n            font-family: sans-serif;font-size: 1rem;\">50%</span> On Plans Now!!\r\n        </p>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"t-c\">\r\n            <button [routerLink]=\"['/subscription']\" routerLinkActive=\"router-link-active\"\r\n             (click)=\"closeDialog()\"  class=\"btn\" style=\"background: #D313AE;\r\n            color: white;\r\n            font-size: 2rem;\r\n            font-weight: bold;\r\n            padding: 10px 50px;\r\n            border-radius: 10px;\r\n            margin: 0px 0px 20px\" mat-raised-button>\r\n                {{languageService.getCurrentLanguage() === 'hindi' ? 'मेम्बरशिप चुनें' : 'Buy Plan'}}   \r\n            </button>\r\n        </div>\r\n    </div>\r\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phone-number-screen/phone-number-screen.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phone-number-screen/phone-number-screen.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhoneNumberScreenPhoneNumberScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"width: 100vw;height: 100vh;\">\r\n    <div class=\"container-fluid\" style=\"height: 50%;position: fixed;top: 0px ;padding: 0px;\">\r\n        <div class=\"containerOne\" style=\"text-align: center;\">\r\n                <img src=\"../../assets/logo_144.png\" alt=\"\">\r\n                <h2 style=\"color: white;font-weight: bolder;margin-top: 10px;\">Hans Matrimony</h2>\r\n        </div>\r\n    \r\n    </div>\r\n    <div class=\"container-fluid \" style=\"height: 50%;background: white;position: fixed;bottom: 0px;\">\r\n            <form  [formGroup]=\"phoneNumber\">\r\n                <div class=\" containerTwo full-width\">\r\n                    <mat-form-field class=\"short-width\" appearance=\"standard\" style=\"margin-right: 10px;\r\n                    margin-left: 10px;\">\r\n                        <mat-label style=\"color: black;\">Enter Mobile Number</mat-label>\r\n                        <ngx-mat-intl-tel-input matInput\r\n                        [preferredCountries]=\"['in']\"\r\n                        [enablePlaceholder]=\"true\"\r\n                        [enableSearch]=\"true\"\r\n                        name=\"phone\"\r\n                        type=\"tel\"\r\n                        formControlName=\"phone\" #phone></ngx-mat-intl-tel-input>\r\n                    </mat-form-field>\r\n                    <img (click)=\"submitPhone()\" src=\"../../assets/next.svg\" class=\"submitImage\" alt=\"submit\">\r\n                    <!-- <img (click)=\"try()\" src=\"../../assets/next.svg\" class=\"submitImage\" alt=\"submit\"> -->\r\n                    </div>\r\n\r\n                    <div class=\"text-center\">\r\n                        <!-- facebook login -->\r\n                        <!-- <div class=\"fb-login-button\" scope='public_profile,email' data-size=\"large\" data-button-type=\"login_with\" data-layout=\"rounded\" data-auto-logout-link=\"true\" data-use-continue-as=\"false\" data-width=\"\"></div> -->\r\n                        <!-- <button type=\"button\" class=\"btn\" (click)=\"submitLogin()\">Login with facebook</button> -->\r\n                    </div>\r\n                        </form>\r\n                        \r\n                        \r\n                        \r\n    \r\n        </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload-crop/photo-upload-crop.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload-crop/photo-upload-crop.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoUploadCropPhotoUploadCropComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\"\r\n    style=\"background: #ffffff;padding:1%;border-radius:20px!important;color:rgba(43, 39, 39, 0.774);overflow: hidden;\">\r\n    <div class=\"row\" style=\"margin-top: 5%;\" *ngIf=\"!(croppedImage$ | async)\">\r\n        <div class=\"text-center col-md-12\">\r\n            <input style=\"margin: 10px 25%; display: none;\" #file type=\"file\" id=\"file\" accept=\"image/*\"\r\n                (change)=\"fileChangeEvent($event)\" />\r\n            <button class=\"uploadPhotoBtn\" (click)=\"file.click()\">Choose File</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top: 2%;\">\r\n        <div class=\"text-center col-md-8\">\r\n            <h5 *ngIf=\"(croppedImage$ | async)\">Image Preview</h5>\r\n            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"4 / 4\"\r\n                [resizeToWidth]=\"256\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n                (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\">\r\n            </image-cropper>\r\n        </div>\r\n        <div class=\"text-center col-md-4\" *ngIf=\"(croppedImage$ | async)\">\r\n            <h5> Cropped Image Preview</h5>\r\n            <img [src]=\"croppedImage$ | async\" />\r\n\r\n            <div class=\"row\" style=\"margin-top: 5%;\" *ngIf=\"(croppedImage$ | async)\">\r\n                <div class=\"text-center col-md-12\">\r\n                    <button class=\"uploadPhotoBtn\" style=\"width:100px;\" (click)=\"closeDialog()\">Done</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTermsAndConditionsTermsAndConditionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"background: white;\">\r\n    <div style=\"text-align: center;\">\r\n        <img src=\"../../assets/logo_hans.png\" alt=\"hans matrimony\">\r\n    </div>\r\n    <div style=\"text-align: center;\">\r\n        <h4>\r\n            Terms and Conditions/ नियम और शर्तें\r\n        </h4>\r\n    </div>\r\n    <div>\r\n    <ol>\r\n        <li>\r\n            By registering for Hans Matrimony services you hereby acknowledge that bio-data of the Candidate filled is true to the best of your knowledge and belief and you are solely responsible for any issues arising from this information. \r\n            हंस मैट्रिमोनी सेवाओं के लिए पंजीकरण करके आप यह स्वीकार करते हैं कि भरे हुए कैंडिडेट का बायोडाटा आपके ज्ञान के अनुसार सर्वधा सत्य और स्पष्ट है। आप इस जानकारी के उत्पन्न होने वाले किसी भी मुद्दे के लिए पूरी तरह से जिम्मेदार है।\r\n        </li>\r\n        <li>\r\n            We expect that you would complete the registration process with fairness and honesty in furnishing true, accurate, current, complete information and with providing recent photos of you which will help you to meet your parameters. \r\n            हम उम्मीद करते हैं कि आप सही, सटीक, वर्तमान, पूर्ण जानकारी प्रस्तुत करने के लिए निष्पक्षता और ईमानदारी के साथ पंजीकरण प्रक्रिया को पूरा करेंगे और आप हाल की तस्वीरें प्रदान करेंगे जो आपको अपने मापदंडों को पूरा करने में मदद करेंगे।\r\n        </li>\r\n        <li>\r\n            If at any point of time Hans Matrimony comes to know or is so informed by the third party or has reasons to believe that any information provided by you for registration (including photos) or otherwise is found to be untrue, inaccurate, or incomplete, Hans Matrimony shall have full right to suspend or terminate (without any notice) your Hans Matrimony membership and forfeit any amount paid by you towards Hans Matrimony membership fee and refuse to provide Hans Matrimony service to you thereafter. \r\n            यदि किसी समय हंस मैट्रिमोनी को पता चल जाता है या उसे तीसरे पक्ष द्वारा सूचित किया जाता है या उसके पास यह विश्वास करने के कारण हैं कि पंजीकरण के लिए आपके द्वारा प्रदान की गई कोई भी जानकारी (फोटो सहित) असत्य, गलत या अधूरी है, तो हंस मैट्रिमनी को आपकी हंस मैट्रिमोनी सदस्यता को निलंबित करने या समाप्त करने (बिना किसी नोटिस के) का पूरा अधिकार होगा और हंस मैट्रिमोनी सदस्यता शुल्क के लिए आपके द्वारा भुगतान की गई किसी भी राशि को जब्त कर लेगी और उसके बाद आपको हंस मैट्रिमोनी सेवा प्रदान करने से इंकार कर दिया जाएगा ।\r\n        </li>\r\n        <li>\r\n            You acknowledge and confirm that your registration with Hans Matrimony and the usage of Hans Matrimony services is with the bonafide intention of marriage and not otherwise. Hans Matrimony Membership is restricted strictly to the registered Hans Matrimony individual member only. Organizations, companies, businesses and/or individuals carrying on a similar or competitive business cannot become Members of Hans Matrimony and nor use the Hans Matrimony Service or Hans Matrimony members’ data for any commercial purpose, and Hans Matrimony reserves its right to initiate appropriate legal action for breach of these obligations. \r\n            आप स्वीकार करते हैं और पुष्टि करते हैं कि हंस मैट्रिमोनी के साथ आपका पंजीकरण और हंस मैट्रिमोनी सेवाओं का उपयोग शादी के इरादे से है।  हंस मैट्रिमोनी सदस्यता केवल पंजीकृत हंस मैट्रिमोनी व्यक्तिगत सदस्य के लिए है। संगठन, कंपनियां, या समान या प्रतिस्पर्धी व्यवसाय करने वाला कोई भी हंस मॅट्रिमोनी में रजिस्टर नहीं कर सकता ना ही हमारी सेवाओं का इस्तेमाल कर सकता और ना ही हमारे डाटा का उपयोग कर सकता|  हंस मैट्रीमोनी आवश्यक कानूनी कार्रवाई करने का अधिकार सुरक्षित रखता है।\r\n        </li>\r\n        <li>\r\n            In the event the candidate's marriage gets fixed through Hans Matrimony you shall furnish photos of marriage and pre-marriage ceremonies to the Company. Hans Matrimony reserves the right to use the photos in the manner it deems fit. \r\n            यदि उम्मीदवार की शादी हंस मैट्रिमोनी के माध्यम से तय हो जाती है, तो आप कंपनी को शादी और विवाह पूर्व समारोहों की तस्वीरें प्रस्तुत करेंगे। हंस मैट्रिमोनी फ़ोटो को  जिस तरीके से चाहे उपयोग कर सकती है।\r\n        </li>\r\n        <li>\r\n            Hans Matrimony acts as mediator introducing you to the matches meeting your preferences. Hans Matrimony informs you that the exchange of profile(s) through or by Hans Matrimony should not in any way be construed as a matrimonial offer and/or recommendation and/or advice or guarantee given to the Hans Matrimony member, from/ or by Hans Matrimony. You are supposed to do the necessary enquiry at your end. In case any issues arise during/after marriage you shall not hold Hans Matrimony liable.\r\n            हंस मैट्रिमोनी आपकी प्राथमिकताओं को पूरा करने वाले मैचों में आपको पेश करने वाले मध्यस्थ के रूप में कार्य करता है। हंस मैट्रिमोनी सुझाये हुए रिश्ते हंस मैट्रिमोनी के माध्यम से या उसके द्वारा प्रोफ़ाइल का आदान-प्रदान किसी भी तरह से वैवाहिक प्रस्ताव के रूप में नहीं है और ना ही ये हंस मैट्रिमोनी के सदस्य की गारंटी है। आवश्यक छानबीन करना आपकी जिम्मेदारी है। यदि विवाह के दौरान / बाद में कोई समस्या उत्पन्न होती है, तो आप हंस मैट्रीमोनी को उत्तरदायी नहीं ठहराएंगे।\r\n        </li>\r\n        <li>\r\n            Customer Care / Customer Service: In the event you come across any concerns in our service, then please be free to contact us:<br>\r\n            हमारी सेवाओं से अगर आपको किसी भी प्रकार की परेशानी होती है तो आप निम्नलिखित पर संपर्क करें।<br>\r\n            Email ID : matches@hansmatrimony.com<br>\r\n            Contact No : +91-9697989697\r\n        </li>\r\n        <li>\r\n            The payments made by any Hans Matrimony member by way of membership/renewal fee/auto renewal are treated as non-refundable. \r\n            सदस्यता शुल्क / नवीनीकरण शुल्क /ऑटो नवीनीकरण के माध्यम हंस मैट्रिमोनी सदस्यता के प्रति किया गया भुगतान नॉन-रिफंडबल है।\r\n        </li>\r\n        <li>\r\n            Payment once made for Hans Matrimony services cannot be assigned to any person/party or adjusted towards any other product or packages provided by the Company. \r\n            हंस मैट्रीमोनी सेवाओं के लिए एक बार भुगतान की गयी राशि किसी दुसरे व्यक्ति / पार्टी को ना ही असाइन ना ही किसी दूसरी सर्विस के प्रति एडजस्ट की जा सकती है।\r\n        </li>\r\n        <li>\r\n            Hans Matrimony or its Office bearers shall under no circumstances be liable or responsible to the Hans Matrimony member or his/her authorized Representative or Registrant or any third party for any direct, indirect, special, exemplary, incidental, or consequential damages of any character including, without limitation, damages resulting from the use of our Website/App/Third Party Website/ personalized services.\r\n            हंस मैट्रिमोनी या उसके पदाधिकारी किसी भी परिस्थिति में हमारी वेबसाइट / ऐप / थर्ड पार्टी वेबसाइट / व्यक्तिगत सेवाओं के उपयोग के परिणामस्वरूप होने वाले प्रत्यक्ष, अप्रत्यक्ष, विशेष, अनुकरणीय, आकस्मिक, या परिणामी नुकसान के लिए उत्तरदायी या जिम्मेदार नहीं होंगे।  ।\r\n        </li>\r\n        <li>\r\n            You shall behave in a courteous manner with Hans Matrimony employees and maintain decorum at all times. Hans Matrimony reserves its right to take necessary action including cancellation of membership in case of any misconduct against Hans Matrimony employees. \r\n            आप हंस मैट्रिमोनी कर्मचारियों के साथ विनम्र व्यवहार रखेंगे। हंस मैट्रिमोनी कर्मचारियों के खिलाफ किसी भी कदाचार के मामले में हंस मॅट्रिमोनी आपकी सदस्यता रद्द करने सहित आवश्यक कार्रवाई करने का अधिकार रखता है।\r\n        </li>\r\n    </ol>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tiktok-ads-form/tiktok-ads-form.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tiktok-ads-form/tiktok-ads-form.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTiktokAdsFormTiktokAdsFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class='pwaSize fixed t-0 b-0 bg-white w-full HC overflowY' >\r\n        <div class=\"container t-c\">\r\n            <div class=\"section\">\r\n                <div class=\"container\" style=\"margin-left:auto;margin-right:auto; text-align: center;\"> \r\n                    <p style=\"color: black;\"> <img src=\"../../../assets/images/logo.png\" style=\"width:25%\"> &nbsp; &nbsp;Hans Matrimony</p>\r\n                </div>              \r\n            </div>\r\n        </div>\r\n        <div>\r\n        <div><h4 class=\"textRegister\">Learn More</h4></div>\r\n        </div>\r\n        \r\n        <div class=\"container\" style=\"width:80%;background: #f5f5f5;border-radius: 20px;margin-top: 20px; margin-bottom: 20px;\">\r\n            <div class=\"w-full\" style=\"margin-left:auto;margin-right:auto\">\r\n                <form  [formGroup]=\"PageOne\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"full-width\" appearance=\"standard\" style=\"height:60px;border-bottom: 1px solid black;\">\r\n                                <mat-label style=\"color: black;\">मोबाइल नंबर</mat-label>\r\n    \r\n                                <ngx-mat-intl-tel-input matInput\r\n                                style=\"color: black;\"\r\n                                [preferredCountries]=\"['in', 'us']\"\r\n                                [enablePlaceholder]=\"true\"\r\n                                [enableSearch]=\"true\"\r\n                                name=\"phone\"\r\n                                [(ngModel)]=\"numberCheck\"\r\n                                type=\"tel\"\r\n                                formControlName=\"phone\"></ngx-mat-intl-tel-input>\r\n    \r\n                            </mat-form-field>\r\n                        </div>\r\n                       \r\n                        <div class=\"col-xs-12 m-t-20\" style=\"margin-top: 20px;margin-left:auto;margin-right:auto;text-align:center;margin-bottom: 20px;\">\r\n                            <button type=\"button\" class=\"btn btn-blue\" (click)=\"submitForm()\">Submit</button>\r\n                        </div>\r\n                    </div>\r\n               </form> \r\n            </div>\r\n        </div>\r\n    </main>\r\n    \r\n    ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todays-payment-popup/todays-payment-popup.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todays-payment-popup/todays-payment-popup.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodaysPaymentPopupTodaysPaymentPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"offBanner\" *ngIf=\"!chooseMethod\">\r\n  <img id=\"offBannerImg\" src=\"../../../assets/todays-off-image.png\" />\r\n</div>\r\n<main>\r\n  <img width=\"20px\" *ngIf=\"chooseMethod\" id=\"backBtn\" (click)=\"goBack()\" src=\"../../../../assets/backbtn.svg\"\r\n    alt=\"back\">\r\n\r\n  <div id=\"topBanner\">\r\n    <div id=\"cancel\">\r\n      <img (click)=\"closeDialog()\" style=\"width: 30px; margin: 5px 2px 0px 0px;\" src=\"../../../assets/clear.svg\"\r\n        alt=\"cancel\" />\r\n    </div>\r\n    <div id=\"bannerDiv\">\r\n      <ngb-carousel *ngIf=\"images\" [showNavigationArrows]=\"showNavigationArrows\" [showNavigationIndicators]=\"false\">\r\n        <ng-template ngbSlide *ngFor=\"let image of images\">\r\n          <div class=\"picsum-img-wrapper\" style=\"border:0px!important\">\r\n            <img [src]=\"images\" alt=\"Offers\" style=\"height: 25vh; width: 100%;\" />\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"planArea\" *ngIf=\"!chooseMethod\">\r\n    <div *ngFor=\"let item of plans; let i = index\">\r\n      <div class=\"planrow text-dark\"\r\n        style=\"background-color: #00c2cb; border-radius: 18px 0px 0px 0px; margin-top: 3%;\">\r\n        <div class=\"plancolumn\">\r\n          <b>{{item.plan_name}} Plan</b><br />\r\n          <a>{{item.contacts}} Contacts</a>\r\n        </div>\r\n        <div class=\"plancolumn\" style=\"background-color: #f0f1f0; color: #5b6d78 !important;\">\r\n          <b class=\"specialCase\"\r\n            style=\"font-size: large; color: #5b6d78 !important;vertical-align: middle !important;\">₹\r\n            {{setAmount(i)}}</b>\r\n          <br />\r\n          <a style=\"\r\n            text-decoration: line-through;\r\n            font-size: medium;\r\n            color: #596a76 !important;vertical-align: middle !important;\r\n          \">₹ {{item.amount}}</a>\r\n          <div class=\"\" style=\"\r\nbackground-color: #f0f1f0;\r\nborder-radius: 18px;\r\nborder-top-left-radius: 0px;\r\nborder-bottom-left-radius: 0px;\r\n\">\r\n            <div class=\"month\">\r\n              <a>{{item.validity}} months</a>\r\n            </div>\r\n            <button class=\"btn btn-primary btn-small\" (click)=\"container(i)\" style=\"vertical-align: middle !important;\">\r\n              BUY\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"planRow2\">\r\n        <a style=\"color:#5b6d78!important\">{{setContent(i)}}</a>\r\n        <!-- <ul>\r\n          <li *ngFor=\"let content of setContent(i)\">{{content}}</li>\r\n        </ul> -->\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"planrow text-dark\" style=\"background-color: #00c2cb; border-radius: 18px; margin-top: 2%;\">\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n        <b>बेसिक प्लान</b><br />\r\n        <a>45 कांटेक्टस</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n        <b>Basic Plan</b><br />\r\n        <a>45 Contacts</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" style=\"background-color: #f0f1f0; color: #5b6d78 !important;\">\r\n        <b class=\"specialCase\" style=\"font-size: large; color: #5b6d78 !important;\">₹2800</b>\r\n        <br />\r\n        <a style=\"\r\n            text-decoration: line-through;\r\n            font-size: medium;\r\n            color: #596a76 !important;\r\n          \">₹ 5500</a>\r\n\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\" style=\"\r\n            background-color: #f0f1f0;\r\n            border-radius: 18px;\r\n            border-top-left-radius: 0px;\r\n            border-bottom-left-radius: 0px;\r\n        \">\r\n          <div class=\"month\">\r\n            <a>3 महीने</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container1()\" style=\"vertical-align: middle !important;\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\" style=\"\r\nbackground-color: #f0f1f0;\r\nborder-radius: 18px;\r\nborder-top-left-radius: 0px;\r\nborder-bottom-left-radius: 0px;\r\n\">\r\n          <div class=\"month\">\r\n            <a>3 months</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container1()\" style=\"vertical-align: middle !important;\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"planrow\" style=\"background-color: #00c2cb; border-radius: 18px; margin-top: 0px;\">\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n        <div style=\"\r\n            font-weight: 500 !important;\r\n            position: absolute;\r\n            top: -15px !important;\r\n            left: 8%;\r\n            background: #ff39c4;\r\n            color: white;\r\n            padding: 2px 2px 2px 2px;\r\n            border-radius: 3px 3px 3px 3px;\r\n          \">\r\n          Bestseller\r\n        </div>\r\n        <b>सुप्रीम प्लान</b><br />\r\n        <a>90 कांटेक्टस</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n        <div style=\"\r\n            font-weight: 300 !important;\r\n            position: absolute;\r\n            top: -15px !important;\r\n            left: 8%;\r\n            font-size:small;\r\n            background: #ff39c4;\r\n            color: white;\r\n            padding: 1px 1px 1px 1px;\r\n            border-radius: 2px 2px 2px 2px;\r\n          \">\r\n          Bestseller\r\n        </div>\r\n        <b>Supreme Plan</b><br />\r\n        <a>90 Contacts</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" style=\"background-color: #f0f1f0; color: #5b6d78 !important;\">\r\n        <b class=\"specialCase\" Style=\" font-size: large;color: #5b6d78 !important; \">₹4500</b><br />\r\n        <a style=\"\r\n            text-decoration: line-through;\r\n            font-size: medium;\r\n            color: #596a76 !important;\r\n          \">₹ 8500</a><br />\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\" style=\"\r\n        background-color: #f0f1f0;\r\n        border-radius: 18px;\r\n        border-top-left-radius: 0px;\r\n        border-bottom-left-radius: 0px;\r\n      \">\r\n          <div class=\"month\">\r\n            <a>6 महीने</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container2()\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\" style=\"\r\n        background-color: #f0f1f0;\r\n        border-radius: 18px;\r\n        border-top-left-radius: 0px;\r\n        border-bottom-left-radius: 0px;\r\n      \">\r\n          <div class=\"month\">\r\n            <a>6 months</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container2()\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"planrow text-dark\" style=\"background-color: #00c2cb; border-radius: 18px; margin-top: 0px;\">\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\">\r\n        <b>कुंडली प्लान</b><br />\r\n        <a>45 कांटेक्टस</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\">\r\n        <b>Kundali Plan</b><br />\r\n        <a>45 Contacts</a><br />\r\n      </div>\r\n      <div class=\"plancolumn\" style=\"background-color: #f0f1f0;\">\r\n        <b class=\"specialCase\" style=\"font-size: large; color: #596a76 !important;\">₹8500</b><br />\r\n        <a style=\"\r\n            text-decoration: line-through;\r\n            font-size: medium;\r\n            color: #596a76 !important;\r\n          \">₹ 9100</a>\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'hindi'\" style=\"\r\n        background-color: #f0f1f0;\r\n        border-radius: 18px;\r\n        border-top-left-radius: 0px;\r\n        border-bottom-left-radius: 0px;\r\n      \">\r\n          <div class=\"month\">\r\n            <a>6 महीने</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container3()\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n        <div class=\"\" *ngIf=\"languageService.getCurrentLanguage() === 'english'\" style=\"\r\n        background-color: #f0f1f0;\r\n        border-radius: 18px;\r\n        border-top-left-radius: 0px;\r\n        border-bottom-left-radius: 0px;\r\n      \">\r\n          <div class=\"month\">\r\n            <a>6 months</a>\r\n          </div>\r\n          <button class=\"btn btn-primary btn-small\" (click)=\"container3()\">\r\n            BUY\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"plansArea\" *ngIf=\"chooseMethod\">\r\n    <p class=\"methods text-center\">\r\n      Payment Method:\r\n    </p>\r\n    <p class=\"payOpt\">\r\n      <button mat-raised-button (click)=\"HandlePayment()\" id=\"razor\">\r\n        <!-- <img width=\"100%\" src=\"../../../../assets/icons/razorpay.svg\" alt=\"razorpay\"> -->\r\n        Card / NetBanking / Wallets\r\n      </button>\r\n      <button mat-raised-button (click)=\"onPaytm()\" id=\"paytm\">\r\n        <img width=\"90px\" height=\"100%\" src=\"../../../../assets/icons/paytm.svg\" alt=\"paytm\">\r\n      </button>\r\n    </p>\r\n\r\n    <form method=\"post\" id=\"pay\" name=\"paytm\">\r\n      <table border=\"1\">\r\n        <tbody>\r\n          <input type=\"hidden\" name=\"mid\" [value]=\"mId\">\r\n          <input type=\"hidden\" name=\"orderId\" [value]=\"oId\">\r\n          <input type=\"hidden\" name=\"txnToken\" [value]=\"txnToken\">\r\n        </tbody>\r\n      </table>\r\n    </form>\r\n  </div>\r\n</main>\r\n\r\n\r\n<div id=\"footer\" class=\"text-dark text-center\" *ngIf=\"!chooseMethod\">\r\n  <div class=\"plancolumn\">\r\n    <img style=\"width: 2.2rem!important;\" src=\"../../../assets/timer.svg\" />&nbsp;\r\n  </div>\r\n  <div class=\"plancolumn\" style=\"margin-right: 15px;\">\r\n    <a style=\"color: black !important;\">Offer ends in :</a> <br />\r\n    <b style=\"font-size: larger; font-weight: bold; color: black !important;\">{{ minutes }} Min : {{ seconds }} Sec</b>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-otp/verify-otp.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-otp/verify-otp.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyOtpVerifyOtpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"root\">\r\n\r\n    <div id=\"cancel\">\r\n        <img (click)=\"cross_click()\" style=\"width: 30px;\" src=\"../../../assets/cancelred.svg\" alt=\"cancel\">\r\n    </div>\r\n\r\n<h3 class=\"heading t-c\">\r\n    {{languageService.verificationLang.verifyMobile}}\r\n</h3>\r\n\r\n<p class=\"subHeading t-c\">\r\n    {{languageService.verificationLang.otpSent}} {{data.mobile}} {{languageService.getCurrentLanguage() === 'hindi' ? 'पर' : ''}}\r\n</p>\r\n\r\n    <form [formGroup]=\"otpForm\" (ngSubmit)=\"verifyOtp()\">\r\n           <div class=\"formSetting\">\r\n                    <p>\r\n                        <mat-form-field class=\"otpField\" appearance=\"standard\">\r\n                            <input id=\"verify1\" (keyup)=\"changePlaces(1)\"  type=\"number\"  matInput formControlName=\"otp1\">\r\n                        </mat-form-field>\r\n                </p>\r\n                    <p >\r\n                        <mat-form-field class=\"otpField\" appearance=\"standard\">\r\n                            <input id=\"verify2\" (keyup)=\"changePlaces(2)\"  type=\"number\"  matInput formControlName=\"otp2\">\r\n                        </mat-form-field>\r\n                </p>        \r\n                <p>\r\n                    <mat-form-field class=\"otpField\" appearance=\"standard\">\r\n                        <input id=\"verify3\" (keyup)=\"changePlaces(3)\"   type=\"number\"  matInput formControlName=\"otp3\">\r\n                    </mat-form-field>\r\n            </p>            \r\n            <p>\r\n                <mat-form-field  class=\"otpField\" appearance=\"standard\">\r\n                    <input id=\"verify4\" (keyup)=\"changePlaces(4)\"  type=\"number\"  matInput formControlName=\"otp4\">\r\n                </mat-form-field>\r\n            </p>\r\n           </div>\r\n\r\n           <button class=\"resendBtnDisabled\" *ngIf=\"showTimer\" [disabled]=\"showTimer\">\r\n            {{languageService.verificationLang.resendOtp}} <span id=\"secs\">{{seconds}}s</span>\r\n        </button>\r\n           <button class=\"resendBtn\" (click)=\"sendOtp()\" *ngIf=\"!showTimer\">\r\n            {{languageService.verificationLang.resendOtp}}\r\n        </button>\r\n            \r\n            <button mat-raised-button class=\"verifyBtn\" type=\"submit\">\r\n                {{languageService.verificationLang.verify}}\r\n            </button>\r\n    </form>\r\n\r\n    <button id=\"changeNumber\" class=\"t-c\" (click)=\"changeNumber()\">\r\n        {{languageService.verificationLang.changeNumber}}\r\n    </button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-centres/view-centres.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-centres/view-centres.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewCentresViewCentresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<main> \r\n    <div class=\"row\">\r\n        <h2 class=\"HeadText\">Our Centers</h2>\r\n    </div>\r\n    <div class=\"row headRow\" >\r\n      <a href=\"#\">\r\n        <img class=\"sizeIt\" src=\"../../assets/logo_hans.png\" alt=\"logo\">\r\n      </a>\r\n    </div>\r\n      <ng-container>\r\n             <h5 style=\"color:#285fdd;text-align:center; margin-left: auto;margin-right: auto;margin-bottom:0px;padding: 10px\">Head Office</h5>\r\n          <div class=\"row\" style=\"background-color:white;border-radius:20px;\">\r\n                         <div class=\"col-md-4 col-sm-4 col-xs-4 mobSize\" ><a target=\"_blank\" href=\"https://goo.gl/maps/vTgmJHbex842\"><i class=\"fa fa-map-marker\" style=\"color: #285fdd\" aria-hidden=\"true\" ></i></a><p class=\"mobSizeText\">&nbsp;&nbsp;H-18, Bali Nagar, New Delhi</p></div>\r\n                         <div class=\"col-md-4 col-sm-4 col-xs-4 mobSize\" ><a href=\"tel:9697989697\"><i class=\"fa fa-phone\" style=\"color: #285fdd\" aria-hidden=\"true\" ></i></a><p class=\"mobSizeText\">&nbsp;&nbsp;96-97-98-96-97</p></div>\r\n                         <div class=\"col-md-4 col-sm-4 col-xs-4 mobSize\"><i class=\"fa fa-envelope\" style=\"color: #285fdd\" aria-hidden=\"true\" ></i><p class=\"mobSizeText\">&nbsp;&nbsp;matches@hansmatrimony.com</p></div>\r\n                </div>\r\n      </ng-container>\r\n      <!-- <div style=\"background: white;border-radius: 5px;width: 100%;border:1px solid #285fdd;\">\r\n            <input style=\"width: 60%; background:white; height:2rem;\" ngx-google-places-autocomplete [options]='options' #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n            <button type=\"submit\" class=\"btn-user\" style=\"outline: none\" (click)=\"findLocation()\"> Submit</button>\r\n        </div> -->\r\n      <ng-container>\r\n          <div class=\"row\" style=\"margin-right:0px;margin-left:0px;text-align: center\">\r\n            <div class=\"col-12 colTemple\">\r\n                <!-- <mat-form-field class=\"full-width\" appearance=\"standard\" style=\"width: 60%\">\r\n                    <mat-label>Search nearby temples</mat-label>\r\n                    <input type=\"text\" id=\"cityAutoComplete\" matInput matValidateAddress matGoogleMapsAutocomplete #matGoogleMapsAutocomplete=\"matGoogleMapsAutocomplete\" \r\n                    (onAutocompleteSelected)=\"onAutocompleteSelected($event)\"\r\n                             (onLocationSelected)=\"onLocationSelected($event)\" formControlName=\"near-by-temples\" required> \r\n                </mat-form-field> -->\r\n            </div>\r\n            <div class=\"col-12\" style=\"margin-top: 10px;\">\r\n           <h5 style=\"color:#285fdd;margin-left: auto;margin-right: auto;margin-bottom:-15px;padding: 10px;\">Subsidiary Offices</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-wrapper\" id=\"centres\" style=\"margin-top:0px;padding-bottom: 20px;\">\r\n             <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\" id=\"centres-list\" *ngFor = \"let user of centres; let i = index\" style=\"display:inline-flex;margin-top: 20px\">                \r\n                   <div class=\"container\">\r\n                     <div class=\"row\">\r\n                        <div class=\"card flex-row flex-wrap\"  style=\"background-color: white; width: 100%;\">\r\n                            <div class=\"card-header border-0\">\r\n                                <img class=\"cardImg\" src=\"{{user.profile_photo}}\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"card-block px-2 cardText\">\r\n                                <div class=\"row\" style=\"background-color: white; margin: 0px;\">\r\n                                 <i class=\"fa fa-user\" style=\"margin: 0px;background-color: white;color: #285fdd\" aria-hidden=\"true\"></i>\r\n                                 <p class=\"card-body cardBodyText1\" >{{user.representatives}}</p>\r\n                          </div>\r\n                                <div class=\"row\" style=\"background-color: white; margin: 0px;\">\r\n                                       <i class=\"fa fa-map-marker\" style=\"margin: 0px;background-color: white;color: #285fdd\" aria-hidden=\"true\"></i>\r\n                                       <p class=\"card-body cardBodyText\" >{{user.name}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                     </div>\r\n                     </div>\r\n                         \r\n                </div>\r\n             </div> \r\n      </ng-container>\r\n    </main>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/analytics-button.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/analytics-button.directive.ts ***!
    \***********************************************/

  /*! exports provided: AnalyticsButtonDirective */

  /***/
  function srcAppAnalyticsButtonDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsButtonDirective", function () {
      return AnalyticsButtonDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnalyticsButtonDirective = /*#__PURE__*/function () {
      function AnalyticsButtonDirective() {
        _classCallCheck(this, AnalyticsButtonDirective);
      }

      _createClass(AnalyticsButtonDirective, [{
        key: "onClick",
        value: function onClick($event) {
          window.ga('send', 'event', this.option.category, this.option.action, {
            hitCallback: function hitCallback() {
              console.log('Tracking is successful');
            }
          });
        }
      }]);

      return AnalyticsButtonDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('eventTracker')], AnalyticsButtonDirective.prototype, "option", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], AnalyticsButtonDirective.prototype, "onClick", null);
    AnalyticsButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[eventTracker]'
    })], AnalyticsButtonDirective);
    /***/
  },

  /***/
  "./src/app/analytics.service.ts":
  /*!**************************************!*\
    !*** ./src/app/analytics.service.ts ***!
    \**************************************/

  /*! exports provided: AnalyticsService */

  /***/
  function srcAppAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
      return AnalyticsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnalyticsService = /*#__PURE__*/function () {
      function AnalyticsService() {
        _classCallCheck(this, AnalyticsService);
      }

      _createClass(AnalyticsService, [{
        key: "googleAnalytics",
        value: function googleAnalytics(event) {
          window.ga('send', 'event', event, '', {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + event + ' successful');
            }
          }); // gtag app + web

          window.gtag('event', event, {
            event_callback: function event_callback() {
              console.log('Tracking gtag ' + event + ' successful');
            }
          });
        }
      }, {
        key: "facebookAnalytics",
        value: function facebookAnalytics(event) {
          window.fbq('track', event, {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number')
          });
          window.fbq('track', '692972151223870', event, {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobiler_number')
          });
        }
      }]);

      return AnalyticsService;
    }();

    AnalyticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AnalyticsService);
    /***/
  },

  /***/
  "./src/app/angular-material/angular-material.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/angular-material/angular-material.module.ts ***!
    \*************************************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular-material-extensions/google-maps-autocomplete */
    "./node_modules/@angular-material-extensions/google-maps-autocomplete/esm2015/google-maps-autocomplete.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-mat-select-search */
    "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-lazyload-image */
    "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [// important !!! AIzaSyCU-ZHkKEBJgfbcotGjEqrsU6C2aB9tDj4 // old api
      _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDw0R0Hb_DiVfM0VgZLBr9ZwjowFwu8RSY',
        libraries: ['places']
      }), _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatGoogleMapsAutocompleteModule"].forRoot(), ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"].forRoot({
        preset: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["scrollPreset"] // <-- tell LazyLoadImage that you want to use scrollPreset

      })],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatGoogleMapsAutocompleteModule"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__["NgxMatSelectSearchModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"], ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImageModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"]],
      providers: []
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _view_centres_view_centres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./view-centres/view-centres.component */
    "./src/app/view-centres/view-centres.component.ts");
    /* harmony import */


    var _phone_number_screen_phone_number_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./phone-number-screen/phone-number-screen.component */
    "./src/app/phone-number-screen/phone-number-screen.component.ts");
    /* harmony import */


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _custom_checkout_custom_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./custom-checkout/custom-checkout.component */
    "./src/app/custom-checkout/custom-checkout.component.ts");
    /* harmony import */


    var _hans_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hans-preloading-strategy.service */
    "./src/app/hans-preloading-strategy.service.ts");
    /* harmony import */


    var _new_home_kundali_kundali_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./new-home/kundali/kundali.component */
    "./src/app/new-home/kundali/kundali.component.ts");
    /* harmony import */


    var _new_landing_from_component_new_landing_from_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./new-landing-from-component/new-landing-from-component.component */
    "./src/app/new-landing-from-component/new-landing-from-component.component.ts");

    var routes = [{
      path: 'chat',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chat-chat-module */
        [__webpack_require__.e("common"), __webpack_require__.e("chat-chat-module")]).then(__webpack_require__.bind(null,
        /*! ./chat/chat.module */
        "./src/app/chat/chat.module.ts")).then(function (m) {
          return m.ChatModule;
        });
      },
      data: {
        preload: true
      }
    }, {
      path: 'fourReg',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | compatibility-form-compatibility-form-module */
        [__webpack_require__.e("common"), __webpack_require__.e("compatibility-form-compatibility-form-module")]).then(__webpack_require__.bind(null,
        /*! ./compatibility-form/compatibility-form.module */
        "./src/app/compatibility-form/compatibility-form.module.ts")).then(function (m) {
          return m.CompatibilityFormModule;
        });
      },
      data: {
        preload: true
      }
    }, {
      path: 'reg',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | reg-reg-module */
        "reg-reg-module").then(__webpack_require__.bind(null,
        /*! ./reg/reg.module */
        "./src/app/reg/reg.module.ts")).then(function (m) {
          return m.RegModule;
        });
      }
    }, {
      path: 'subscription',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subscription-subscription-module */
        "subscription-subscription-module").then(__webpack_require__.bind(null,
        /*! ./subscription/subscription.module */
        "./src/app/subscription/subscription.module.ts")).then(function (m) {
          return m.SubscriptionModule;
        });
      }
    }, {
      path: 'bless',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | bless-bless-module */
        "bless-bless-module").then(__webpack_require__.bind(null,
        /*! ./bless/bless.module */
        "./src/app/bless/bless.module.ts")).then(function (m) {
          return m.BlessModule;
        });
      }
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
      component: _new_landing_from_component_new_landing_from_component_component__WEBPACK_IMPORTED_MODULE_9__["NewLandingFromComponentComponent"]
    }, {
      path: 'home',
      redirectTo: ''
    }, {
      path: 'viewCentres',
      component: _view_centres_view_centres_component__WEBPACK_IMPORTED_MODULE_3__["ViewCentresComponent"]
    }, {
      path: 'phone-number',
      component: _phone_number_screen_phone_number_screen_component__WEBPACK_IMPORTED_MODULE_4__["PhoneNumberScreenComponent"]
    }, {
      path: 'termsCondition',
      component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsComponent"]
    }, {
      path: 'checkout',
      component: _custom_checkout_custom_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CustomCheckoutComponent"]
    }, {
      path: 'kundaliMatching',
      component: _new_home_kundali_kundali_component__WEBPACK_IMPORTED_MODULE_8__["KundaliComponent"]
    }, {
      path: 'picUpload',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | photo-upload-photo-upload-module */
        "photo-upload-photo-upload-module").then(__webpack_require__.bind(null,
        /*! ./photo-upload/photo-upload.module */
        "./src/app/photo-upload/photo-upload.module.ts")).then(function (m) {
          return m.PhotoUploadModule;
        });
      }
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _hans_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_7__["HansPreloadingStrategyService"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _src_app_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../src/app/notifications.service */
    "./src/app/notifications.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: max-line-length
      function AppComponent(swUpdate, router, notificationService) {
        _classCallCheck(this, AppComponent);

        this.swUpdate = swUpdate;
        this.router = router;
        this.notificationService = notificationService;
        this.title = 'hansWebApp';
        this.footer = true;
        this.isLogin = 'false';
        this.header = true;
        this.clickToggle = false;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            window.gtag('page_view', event.urlAfterRedirects);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _firebase_app__WEBPACK_IMPORTED_MODULE_4__["firebase"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase);

                    _context.next = 3;
                    return this.notificationService.init();

                  case 3:
                    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                      if (window) {
                        window.console.log = function () {};
                      }
                    }

                    if (this.swUpdate.isEnabled) {
                      this.swUpdate.available.subscribe(function () {
                        window.location.reload();
                      });
                    }

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.notificationService.requestPermission();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          this.clickToggle = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _src_app_notifications_service__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppComponent.prototype, "header", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-mat-intl-tel-input */
    "./node_modules/ngx-mat-intl-tel-input/fesm2015/ngx-mat-intl-tel-input.js");
    /* harmony import */


    var ng5_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng5-slider */
    "./node_modules/ng5-slider/esm2015/ng5-slider.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _subscriptionservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./subscriptionservice.service */
    "./src/app/subscriptionservice.service.ts");
    /* harmony import */


    var _view_centres_view_centres_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./view-centres/view-centres.component */
    "./src/app/view-centres/view-centres.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _analytics_button_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./analytics-button.directive */
    "./src/app/analytics-button.directive.ts");
    /* harmony import */


    var _tiktok_ads_form_tiktok_ads_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tiktok-ads-form/tiktok-ads-form.component */
    "./src/app/tiktok-ads-form/tiktok-ads-form.component.ts");
    /* harmony import */


    var _phone_number_screen_phone_number_screen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./phone-number-screen/phone-number-screen.component */
    "./src/app/phone-number-screen/phone-number-screen.component.ts");
    /* harmony import */


    var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./terms-and-conditions/terms-and-conditions.component */
    "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
    /* harmony import */


    var _custom_checkout_custom_checkout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./custom-checkout/custom-checkout.component */
    "./src/app/custom-checkout/custom-checkout.component.ts");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");
    /* harmony import */


    var _new_home_new_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./new-home/new-home.component */
    "./src/app/new-home/new-home.component.ts");
    /* harmony import */


    var _new_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./new-home/home-main/home-main.component */
    "./src/app/new-home/home-main/home-main.component.ts");
    /* harmony import */


    var _new_home_home_drawer_home_drawer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./new-home/home-drawer/home-drawer.component */
    "./src/app/new-home/home-drawer/home-drawer.component.ts");
    /* harmony import */


    var _new_home_new_home_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./new-home/new-home.service */
    "./src/app/new-home/new-home.service.ts");
    /* harmony import */


    var _offers_lockdown_off_lockdown_off_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./offers/lockdown-off/lockdown-off.component */
    "./src/app/offers/lockdown-off/lockdown-off.component.ts");
    /* harmony import */


    var _offers_offer_one_offer_one_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./offers/offer-one/offer-one.component */
    "./src/app/offers/offer-one/offer-one.component.ts");
    /* harmony import */


    var _offers_offer_two_offer_two_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./offers/offer-two/offer-two.component */
    "./src/app/offers/offer-two/offer-two.component.ts");
    /* harmony import */


    var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./verify-otp/verify-otp.component */
    "./src/app/verify-otp/verify-otp.component.ts");
    /* harmony import */


    var _hans_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./hans-preloading-strategy.service */
    "./src/app/hans-preloading-strategy.service.ts");
    /* harmony import */


    var _todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./todays-payment-popup/todays-payment-popup.component */
    "./src/app/todays-payment-popup/todays-payment-popup.component.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _photo_upload_crop_photo_upload_crop_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./photo-upload-crop/photo-upload-crop.component */
    "./src/app/photo-upload-crop/photo-upload-crop.component.ts");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _new_home_kundali_kundali_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./new-home/kundali/kundali.component */
    "./src/app/new-home/kundali/kundali.component.ts");
    /* harmony import */


    var _new_landing_from_component_new_landing_from_component_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./new-landing-from-component/new-landing-from-component.component */
    "./src/app/new-landing-from-component/new-landing-from-component.component.ts");
    /* harmony import */


    var _new_landing_from_component_hero_hero__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./new-landing-from-component/hero/hero */
    "./src/app/new-landing-from-component/hero/hero.ts");
    /* harmony import */


    var _new_landing_from_component_features_features_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./new-landing-from-component/features/features.component */
    "./src/app/new-landing-from-component/features/features.component.ts");
    /* harmony import */


    var _new_landing_from_component_newApp_new_app_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./new-landing-from-component/newApp/new-app.component */
    "./src/app/new-landing-from-component/newApp/new-app.component.ts");
    /* harmony import */


    var _new_landing_from_component_offlineCenters_offline_centers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./new-landing-from-component/offlineCenters/offline-centers.component */
    "./src/app/new-landing-from-component/offlineCenters/offline-centers.component.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _new_landing_from_component_freeKundaliMatching_kundali_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./new-landing-from-component/freeKundaliMatching/kundali.component */
    "./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.ts");
    /* harmony import */


    var _new_landing_from_component_footer_footer__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./new-landing-from-component/footer/footer */
    "./src/app/new-landing-from-component/footer/footer.ts");
    /* harmony import */


    var _new_landing_from_component_matchmakers_matchmakers_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./new-landing-from-component/matchmakers/matchmakers.component */
    "./src/app/new-landing-from-component/matchmakers/matchmakers.component.ts");
    /* harmony import */


    var _new_landing_from_component_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./new-landing-from-component/testimonials/testimonials.component */
    "./src/app/new-landing-from-component/testimonials/testimonials.component.ts");
    /* harmony import */


    var _new_landing_from_component_testimonials_testimonial_cards_testimonial_cards_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component */
    "./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.ts");
    /* harmony import */


    var _new_landing_from_component_howItWorks_how_it_works_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./new-landing-from-component/howItWorks/how-it-works.component */
    "./src/app/new-landing-from-component/howItWorks/how-it-works.component.ts");
    /* harmony import */


    var _new_landing_from_component_custom_bg_custom_bg__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./new-landing-from-component/custom-bg/custom-bg */
    "./src/app/new-landing-from-component/custom-bg/custom-bg.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _view_centres_view_centres_component__WEBPACK_IMPORTED_MODULE_14__["ViewCentresComponent"], _analytics_button_directive__WEBPACK_IMPORTED_MODULE_16__["AnalyticsButtonDirective"], _tiktok_ads_form_tiktok_ads_form_component__WEBPACK_IMPORTED_MODULE_17__["TiktokAdsFormComponent"], _phone_number_screen_phone_number_screen_component__WEBPACK_IMPORTED_MODULE_18__["PhoneNumberScreenComponent"], _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_19__["TermsAndConditionsComponent"], _custom_checkout_custom_checkout_component__WEBPACK_IMPORTED_MODULE_20__["CustomCheckoutComponent"], _new_home_new_home_component__WEBPACK_IMPORTED_MODULE_22__["NewHomeComponent"], _new_home_home_main_home_main_component__WEBPACK_IMPORTED_MODULE_23__["HomeMainComponent"], _new_home_home_drawer_home_drawer_component__WEBPACK_IMPORTED_MODULE_24__["HomeDrawerComponent"], _offers_lockdown_off_lockdown_off_component__WEBPACK_IMPORTED_MODULE_26__["LockdownOffComponent"], _offers_offer_one_offer_one_component__WEBPACK_IMPORTED_MODULE_27__["OfferOneComponent"], _offers_offer_two_offer_two_component__WEBPACK_IMPORTED_MODULE_28__["OfferTwoComponent"], _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_29__["VerifyOtpComponent"], _todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_31__["TodaysPaymentPopupComponent"], _photo_upload_crop_photo_upload_crop_component__WEBPACK_IMPORTED_MODULE_33__["PhotoUploadCropComponent"], _new_home_kundali_kundali_component__WEBPACK_IMPORTED_MODULE_35__["KundaliComponent"], _new_landing_from_component_new_landing_from_component_component__WEBPACK_IMPORTED_MODULE_36__["NewLandingFromComponentComponent"], _new_landing_from_component_hero_hero__WEBPACK_IMPORTED_MODULE_37__["Hero"], _new_landing_from_component_features_features_component__WEBPACK_IMPORTED_MODULE_38__["Features"], _new_landing_from_component_newApp_new_app_component__WEBPACK_IMPORTED_MODULE_39__["NewApp"], _new_landing_from_component_offlineCenters_offline_centers_component__WEBPACK_IMPORTED_MODULE_40__["OfflineCenters"], _new_landing_from_component_freeKundaliMatching_kundali_component__WEBPACK_IMPORTED_MODULE_42__["Kundali"], _new_landing_from_component_footer_footer__WEBPACK_IMPORTED_MODULE_43__["AppFooter"], _new_landing_from_component_matchmakers_matchmakers_component__WEBPACK_IMPORTED_MODULE_44__["MatchMakers"], _new_landing_from_component_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_45__["Testimonials"], _new_landing_from_component_testimonials_testimonial_cards_testimonial_cards_component__WEBPACK_IMPORTED_MODULE_46__["TestimonialCards"], _new_landing_from_component_howItWorks_how_it_works_component__WEBPACK_IMPORTED_MODULE_47__["HowItWorks"], _new_landing_from_component_custom_bg_custom_bg__WEBPACK_IMPORTED_MODULE_48__["CustomBg"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__["SlickCarouselModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_21__["AngularMaterialModule"], ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_4__["NgxMatIntlTelInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_5__["Ng5SliderModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_32__["ImageCropperModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_34__["CarouselModule"]],
      providers: [_subscriptionservice_service__WEBPACK_IMPORTED_MODULE_13__["SubscriptionserviceService"], _new_home_new_home_service__WEBPACK_IMPORTED_MODULE_25__["NewHomeService"], _hans_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_30__["HansPreloadingStrategyService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      // tslint:disable-next-line: max-line-length
      entryComponents: [_tiktok_ads_form_tiktok_ads_form_component__WEBPACK_IMPORTED_MODULE_17__["TiktokAdsFormComponent"], _offers_lockdown_off_lockdown_off_component__WEBPACK_IMPORTED_MODULE_26__["LockdownOffComponent"], _offers_offer_one_offer_one_component__WEBPACK_IMPORTED_MODULE_27__["OfferOneComponent"], _offers_offer_two_offer_two_component__WEBPACK_IMPORTED_MODULE_28__["OfferTwoComponent"], _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_29__["VerifyOtpComponent"], _todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_31__["TodaysPaymentPopupComponent"], _photo_upload_crop_photo_upload_crop_component__WEBPACK_IMPORTED_MODULE_33__["PhotoUploadCropComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat/app-download-dialog/app-download-dialog.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/chat/app-download-dialog/app-download-dialog.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatAppDownloadDialogAppDownloadDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n::ng-deep .mat-dialog-container{\r\n    background: transparent;\r\n    padding: 0px;\r\n    border-radius: 20px;\r\n}\r\n::ng-deep .mat-dialog-content{\r\n    max-height: 79vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop{\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n}\r\nmain{\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n.topDiv{\r\n    position: relative;\r\n    background: transparent;\r\n    margin-top: 100px;\r\n}\r\n#profileImage{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -75px;\r\n    background: white;\r\n}\r\n.contentText {\r\n    color: #797979;\r\n    margin-top: 15px;\r\n    font-size: 1.3rem;\r\n    word-wrap: break-word;\r\n}\r\n.boldText {\r\n    color: balck;font-weight: bold;\r\n            font-family: sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9hcHAtZG93bmxvYWQtZGlhbG9nL2FwcC1kb3dubG9hZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSwyRUFBMkU7QUFDL0U7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxZQUFZLENBQUMsaUJBQWlCO1lBQ3RCLHVCQUF1QjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NoYXQvYXBwLWRvd25sb2FkLWRpYWxvZy9hcHAtZG93bmxvYWQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIG1heC1oZWlnaHQ6IDc5dmg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC43NSksIHJnYmEoMCwgMCwgMCwgMC43NSkpO1xyXG59XHJcblxyXG5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4udG9wRGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuI3Byb2ZpbGVJbWFnZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC03NXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50VGV4dCB7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmJvbGRUZXh0IHtcclxuICAgIGNvbG9yOiBiYWxjaztmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat/app-download-dialog/app-download-dialog.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/chat/app-download-dialog/app-download-dialog.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AppDownloadDialogComponent */

  /***/
  function srcAppChatAppDownloadDialogAppDownloadDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDownloadDialogComponent", function () {
      return AppDownloadDialogComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppDownloadDialogComponent = /*#__PURE__*/function () {
      function AppDownloadDialogComponent(dialogRef, data) {
        _classCallCheck(this, AppDownloadDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(AppDownloadDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "openPlaystore",
        value: function openPlaystore() {
          this.dialogRef.close();
          window.open('https://play.google.com/store/apps/details?id=com.twango.me');
        }
      }, {
        key: "getProfilePhoto",
        value: function getProfilePhoto() {
          console.log(this.data.data.profile);

          if (this.data.data && this.data.data.photo) {
            return this.data.data.photo;
          } else if (this.data.data && this.data.data.carousel) {
            var carousel = JSON.parse(this.data.data.carousel);
            var keys = Object.keys(carousel); // console.log(carousel[index]);

            return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[0]];
          } else {
            if (this.data.data && this.data.data.gender === 'Male') {
              return '../../assets/male_pic.png';
            } else {
              return '../../assets/female_pic.png';
            }
          }
        }
      }]);

      return AppDownloadDialogComponent;
    }();

    AppDownloadDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AppDownloadDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-download-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-download-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/app-download-dialog/app-download-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-download-dialog.component.css */
      "./src/app/chat/app-download-dialog/app-download-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AppDownloadDialogComponent);
    /***/
  },

  /***/
  "./src/app/chat/countModel.ts":
  /*!************************************!*\
    !*** ./src/app/chat/countModel.ts ***!
    \************************************/

  /*! exports provided: ProfileCount */

  /***/
  function srcAppChatCountModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileCount", function () {
      return ProfileCount;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProfileCount = function ProfileCount() {
      _classCallCheck(this, ProfileCount);

      this.dailyCount = 0;
      this.contactedCount = 0;
      this.shortlistCount = 0;
      this.shortedCount = 0;
      this.rejectedCount = 0;
    };
    /***/

  },

  /***/
  "./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatDailyWelcomePopupDailyWelcomePopupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nmain{\r\n    background-color: white;\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #4A5D6A;\r\n    padding-bottom: 30px;\r\n}\r\nmain h3 {\r\n    text-align: center;\r\n    padding: 60px 0px;\r\n    background-color: #F0F1F0;\r\n    font-family: sans-serif;\r\n    font-size: 2rem;\r\n    font-weight: bolder;\r\n}\r\n.circularImgDiv {\r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    background-color: #4ADEE4;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: -40px auto 0px;\r\n}\r\nmain p {\r\n    padding: 30px;\r\n}\r\n.okBtn{\r\n    background-color: white;\r\n    color: #4ADEE4;\r\n    border: 1px solid #4ADEE4;\r\n    border-radius: 50px;\r\n    padding: 5px 50px;\r\n    margin: 0px auto;\r\n    font-size: 1.2rem;\r\n    display: block;\r\n}\r\n@media screen and (max-width: 350px) {\r\n    main p {\r\n        padding: 20px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9kYWlseS13ZWxjb21lLXBvcHVwL2RhaWx5LXdlbGNvbWUtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9kYWlseS13ZWxjb21lLXBvcHVwL2RhaWx5LXdlbGNvbWUtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogIzRBNUQ2QTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbm1haW4gaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNjBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMUYwO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5jaXJjdWxhckltZ0RpdiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBREVFNDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IC00MHB4IGF1dG8gMHB4O1xyXG59XHJcbm1haW4gcCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4ub2tCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjNEFERUU0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRBREVFNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNTBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgbWFpbiBwIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DailyWelcomePopupComponent */

  /***/
  function srcAppChatDailyWelcomePopupDailyWelcomePopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DailyWelcomePopupComponent", function () {
      return DailyWelcomePopupComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DailyWelcomePopupComponent = /*#__PURE__*/function () {
      function DailyWelcomePopupComponent(dialogRef, data) {
        _classCallCheck(this, DailyWelcomePopupComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.count = data.dailyQuota;
      }

      _createClass(DailyWelcomePopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.closeDialog();
          }, 10000);
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }]);

      return DailyWelcomePopupComponent;
    }();

    DailyWelcomePopupComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DailyWelcomePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-daily-welcome-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./daily-welcome-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./daily-welcome-popup.component.css */
      "./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DailyWelcomePopupComponent);
    /***/
  },

  /***/
  "./src/app/chat/message-dialog/message-dialog.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/chat/message-dialog/message-dialog.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatMessageDialogMessageDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-dialog-container{\r\n    padding: 0px;\r\n    background-color: white;\r\n    color: black;\r\n}\r\nmain{\r\n    padding-bottom: 9px;\r\n    background-color: white;\r\n    color: black;\r\n}\r\n.row{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\np{\r\n    margin-bottom: 3px;\r\n    font-size: 16px;\r\n}\r\n.textAlign{\r\n    text-align: center;\r\n}\r\n#cancel{\r\n    text-align: end;\r\n}\r\n#lockImage{\r\n    margin: 0px auto ;\r\n    text-align: center;\r\n}\r\n#heading{\r\n    font-weight: bolder;\r\n    font-size: 18px;\r\n    color: rgba(0,0,0,.6);\r\n    margin-top: 10px;\r\n}\r\nstrong{\r\n    color: black;\r\n}\r\n.profilePic{\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 50%;\r\n    border: 1px solid darkgrey;\r\n}\r\n.profilePicContacted{\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 50%;\r\n    border: 1px solid darkgrey;\r\n}\r\nli {\r\n    color: rgba(0,0,0,.6);\r\n    margin-top: 10px;\r\n    list-style-image: url('star.png');\r\n    padding-left: 10px;\r\n    }\r\n@media (max-width: 1024px){\r\n\r\n        .profilePic{\r\n            width: 70px;\r\n            height: 70px;\r\n            border-radius: 50%;\r\n            border: 1px solid darkgrey;\r\n        }\r\n        .profilePicContacted{\r\n            width: 100px;\r\n            height: 100px;\r\n            border-radius: 50%;\r\n            border: 1px solid darkgrey;\r\n        }\r\n\r\n        p{\r\n            font-size: 14px;\r\n        }\r\n\r\n    }\r\n@media (max-width: 320px){\r\n\r\n        p{\r\n            font-size: 12px;\r\n        }\r\n\r\n    }\r\nmain {\r\n        position: relative;\r\n        padding:10px;\r\n        z-index: 0;\r\n        background: white;\r\n        color:black;\r\n        border-radius: 20px 20px 20px 20px;\r\n        padding-bottom: 5px;\r\n      }\r\n.SpecialCase{\r\n        font-size:1.5rem!important;\r\n        border:2px solid rgb(106, 190, 241);\r\n        color:rgb(106, 190, 241)!important;\r\n        background:transparent!important; \r\n        width:20vw!important; \r\n        border-radius:15px!important;\r\n    }\r\n#cancel {\r\n      position: absolute;\r\n      z-index: 99999999;\r\n      right: 1%;\r\n    }\r\n.circular {\r\n        position:absolute;\r\n        bottom:-38px;\r\n        margin:auto;\r\n        z-index: 10;\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 0px;\r\n        /* padding:15px!important; */\r\n        background-color:#00c2cb!important;\r\n        border-radius: 50%;\r\n        overflow: auto;\r\n      }\r\n.circular img{\r\n        width: 100%;\r\n      }\r\n#offBanner {\r\n        position: relative;\r\n        display: flex;\r\n        width: 100%;\r\n        z-index: 10;\r\n        height: 4.5rem;\r\n        align-items: center;\r\n        justify-content: center;\r\n      }\r\n#offBannerImg {\r\n        position: absolute;\r\n        z-index:99999999;\r\n        bottom: -35px;\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n      }\r\n      \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9tZXNzYWdlLWRpYWxvZy9tZXNzYWdlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUErQztJQUMvQyxrQkFBa0I7SUFDbEI7QUFFQTs7UUFFSTtZQUNJLFdBQVc7WUFDWCxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLDBCQUEwQjtRQUM5QjtRQUNBO1lBQ0ksWUFBWTtZQUNaLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsMEJBQTBCO1FBQzlCOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7SUFFSjtBQUNBOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjs7SUFFSjtBQUdFO1FBQ0Usa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsbUJBQW1CO01BQ3JCO0FBQ0E7UUFDRSwwQkFBMEI7UUFDMUIsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUNsQyxnQ0FBZ0M7UUFDaEMsb0JBQW9CO1FBQ3BCLDRCQUE0QjtJQUNoQztBQUNBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixTQUFTO0lBQ1g7QUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFHbEMsa0JBQWtCO1FBQ2xCLGNBQWM7TUFDaEI7QUFDQTtRQUNFLFdBQVc7TUFDYjtBQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixXQUFXO1FBQ1gsV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsdUJBQXVCO01BQ3pCO0FBRUE7UUFDRSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO01BQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9tZXNzYWdlLWRpYWxvZy9tZXNzYWdlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxubWFpbntcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxucHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udGV4dEFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jY2FuY2Vse1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbiNsb2NrSW1hZ2V7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaGVhZGluZ3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNik7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbnN0cm9uZ3tcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnByb2ZpbGVQaWN7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbn1cclxuLnByb2ZpbGVQaWNDb250YWN0ZWR7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3N0YXIucG5nKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAgICAgLnByb2ZpbGVQaWN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlUGljQ29udGFjdGVke1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCl7XHJcblxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgICBtYWluIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5TcGVjaWFsQ2FzZXtcclxuICAgICAgICBmb250LXNpemU6MS41cmVtIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHJnYigxMDYsIDE5MCwgMjQxKTtcclxuICAgICAgICBjb2xvcjpyZ2IoMTA2LCAxOTAsIDI0MSkhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQhaW1wb3J0YW50OyBcclxuICAgICAgICB3aWR0aDoyMHZ3IWltcG9ydGFudDsgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNjYW5jZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgICByaWdodDogMSU7XHJcbiAgICB9XHJcbiAgICAuY2lyY3VsYXIge1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTotMzhweDtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAvKiBwYWRkaW5nOjE1cHghaW1wb3J0YW50OyAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwYzJjYiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaXJjdWxhciBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgI29mZkJhbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI29mZkJhbm5lckltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6OTk5OTk5OTk7XHJcbiAgICAgICAgYm90dG9tOiAtMzVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/chat/message-dialog/message-dialog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/chat/message-dialog/message-dialog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MessageDialogComponent */

  /***/
  function srcAppChatMessageDialogMessageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageDialogComponent", function () {
      return MessageDialogComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");

    var MessageDialogComponent = /*#__PURE__*/function () {
      function MessageDialogComponent(router, dialogRef, spinner, languageService, http, data) {
        _classCallCheck(this, MessageDialogComponent);

        this.router = router;
        this.dialogRef = dialogRef;
        this.spinner = spinner;
        this.languageService = languageService;
        this.http = http;
        this.data = data;
        console.log(data);
        this.profile = data.profile;
        this.selfImage = data.selfImage ? data.selfImage : this.profile.gender === 'Male' ? '../../assets/female_pic.png' : '../../assets/male_pic.png';
        this.selfName = data.selfName;
        this.type = data.type;
      }

      _createClass(MessageDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLoadProfileError",
        value: function onLoadProfileError(gender, id) {
          if (gender && gender === 'Male') {
            document.getElementById(id).setAttribute('src', '../../assets/male_pic.png');
          } else {
            document.getElementById(id).setAttribute('src', '../../assets/female_pic.png');
          }
        }
      }, {
        key: "getProfilePhoto",
        value: function getProfilePhoto() {
          if (this.profile.profile && this.profile.family) {
            return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.profile.profile.photo;
          } else if (this.profile.photo) {
            return this.profile.photo;
          } else if (this.profile.carousel) {
            var carousel = JSON.parse(this.profile.carousel);
            var keys = Object.keys(carousel); // console.log(carousel[index]);

            if (carousel[keys[0]]) {
              return carousel[keys[0]];
            } else {
              if (this.profile.gender === 'Male') {
                return '../../assets/male_pic.png';
              } else {
                return '../../assets/female_pic.png';
              }
            }
          } else if (this.profile.profile && this.profile.profile.carousel) {
            var _carousel = JSON.parse(this.profile.profile.carousel);

            var _keys = Object.keys(_carousel); // console.log(carousel[index]);


            if (_carousel[_keys[0]]) {
              return _carousel[_keys[0]];
            } else {
              if (this.profile.gender === 'Male') {
                return '../../assets/male_pic.png';
              } else {
                return '../../assets/female_pic.png';
              }
            }
          } else {
            if (this.profile.gender === 'Male') {
              return '../../assets/male_pic.png';
            } else {
              return '../../assets/female_pic.png';
            }
          }
        }
      }, {
        key: "getName",
        value: function getName(item) {
          if (item.profile) {
            return item.profile.name;
          } else {
            return item.name;
          }
        }
      }, {
        key: "goToSub",
        value: function goToSub() {
          this.dialogRef.close();
          this.router.navigateByUrl('subscription');
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "changeProfileImage",
        value: function changeProfileImage() {
          document.querySelector('#backfile').click();
        }
      }, {
        key: "chooseFileForUpload",
        value: function chooseFileForUpload(files) {
          var _this2 = this;

          if (files.length === 0) {
            return;
          } else {
            var mimeType = files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              alert('Only images are supported.');
              return;
            }

            var reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = function (_event) {
              // use backimgurl to set image
              // this.BackimgURL = reader.result;
              _this2.uploadPhoto(files[0]);
            };
          }
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto(data) {
          var _this3 = this;

          this.spinner.show();
          var uploadData = new FormData();
          uploadData.append('id', localStorage.getItem('id'));
          uploadData.append('index', '1');
          uploadData.append('image', data);
          uploadData.append('is_lead', localStorage.getItem('is_lead'));
          return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(function (suc) {
            console.log('photos', suc);

            if (suc.pic_upload_status === 'Y') {
              _this3.spinner.hide();

              _this3.dialogRef.close({
                uploadStatus: 'Y'
              });
            } else {
              _this3.spinner.hide();

              _this3.dialogRef.close({
                uploadStatus: 'N'
              });
            }
          }, function (err) {
            // console.log(err);
            console.log(err);
          });
        }
      }, {
        key: "premiumInterest",
        value: function premiumInterest() {
          var _this4 = this;

          this.spinner.show();
          var interestForm = new FormData();
          interestForm.append('id', localStorage.getItem('id'));
          interestForm.append('is_lead', localStorage.getItem('is_lead'));
          interestForm.append('interest_profile', this.profile.profile.identity_number);
          console.log(localStorage.getItem('id'));
          console.log(localStorage.getItem('is_lead'));
          console.log(this.profile.identity_number);
          this.http.post('https://partner.hansmatrimony.com/api/insertPremiumInterest', interestForm).subscribe(function (data) {
            console.log(data);

            _this4.facebookAnalytics();

            _this4.dialogRef.close({
              request: true
            });

            _this4.spinner.hide();
          }, function (err) {
            console.log(err);

            _this4.dialogRef.close();

            _this4.spinner.hide();
          });
        }
      }, {
        key: "facebookAnalytics",
        value: function facebookAnalytics() {
          window.fbq('track', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number')
          });
          window.fbq('track', '692972151223870', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number')
          });
        }
      }]);

      return MessageDialogComponent;
    }();

    MessageDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_6__["LanguageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    MessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/message-dialog/message-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-dialog.component.css */
      "./src/app/chat/message-dialog/message-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MessageDialogComponent);
    /***/
  },

  /***/
  "./src/app/chat/rate-us-dialog/rate-us-dialog.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/chat/rate-us-dialog/rate-us-dialog.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatRateUsDialogRateUsDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.mainDiv {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: block;\r\n    background-color: white;\r\n    overflow: visible;\r\n    border-radius: 10px;\r\n    padding: 0px 20px 40px;\r\n}\r\n.topImg{\r\n    width: 90px;\r\n    height: 90px;\r\n    border-radius: 100%;\r\n    background-color: #4adee4;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0px auto;\r\n    top: -45px;\r\n}\r\n#firstLine {\r\n    color: #4A5D6A;\r\n    font-size: 1.5rem;\r\n    font-family: 'Roboto',sans-serif;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#secondLine {\r\n    color: #4A5D6A;\r\n    font-size: 1.5rem;\r\n    font-family: 'Roboto',sans-serif;\r\n    text-align: center;\r\n}\r\n.stars {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    margin: 20px 30px 40px;\r\n}\r\n.bottomDiv{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n#smallTC{\r\n    color: #4A5D6A;\r\n    font-size: 0.6rem;\r\n    font-family: 'Roboto',sans-serif;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n.rateBtn{\r\n    background-image: linear-gradient(90deg, #566EE8, #4FB0E5);\r\n    border-radius: 100px;\r\n    padding: 10px 40px;\r\n    font-size: 1.3rem;\r\n    font-family: 'Roboto';\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9yYXRlLXVzLWRpYWxvZy9yYXRlLXVzLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMERBQTBEO0lBQzFELG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L3JhdGUtdXMtZGlhbG9nL3JhdGUtdXMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW5EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHggNDBweDtcclxufVxyXG4udG9wSW1ne1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGVlNDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHRvcDogLTQ1cHg7XHJcbn1cclxuI2ZpcnN0TGluZSB7XHJcbiAgICBjb2xvcjogIzRBNUQ2QTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4jc2Vjb25kTGluZSB7XHJcbiAgICBjb2xvcjogIzRBNUQ2QTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN0YXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgbWFyZ2luOiAyMHB4IDMwcHggNDBweDtcclxufVxyXG4uYm90dG9tRGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4jc21hbGxUQ3tcclxuICAgIGNvbG9yOiAjNEE1RDZBO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnJhdGVCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM1NjZFRTgsICM0RkIwRTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/chat/rate-us-dialog/rate-us-dialog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/chat/rate-us-dialog/rate-us-dialog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RateUsDialogComponent */

  /***/
  function srcAppChatRateUsDialogRateUsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RateUsDialogComponent", function () {
      return RateUsDialogComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RateUsDialogComponent = /*#__PURE__*/function () {
      function RateUsDialogComponent(http, spinner, ngxNotification, dialogRef, data) {
        _classCallCheck(this, RateUsDialogComponent);

        this.http = http;
        this.spinner = spinner;
        this.ngxNotification = ngxNotification;
        this.dialogRef = dialogRef;
        this.data = data;
        this.showForFreeUser = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.showForFreeUser$ = this.showForFreeUser.asObservable();

        if (data) {
          if (data === true) {
            this.showForFreeUser.next(true);
          }
        }
      }

      _createClass(RateUsDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "openPlayStore",
        value: function openPlayStore() {
          var _this5 = this;

          this.spinner.show();
          var formData = new FormData();
          formData.append('id', localStorage.getItem('id'));
          formData.append('is_lead', localStorage.getItem('is_lead'));
          this.http.post('https://partner.hansmatrimony.com/api/updateOfferCredit', formData).subscribe(function (data) {
            if (data) {
              _this5.spinner.hide();

              _this5.dialogRef.close();

              window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_self');
            }
          }, function (err) {
            _this5.ngxNotification.error('Something Went Wrong, Try Again Later');

            _this5.spinner.hide();
          });
        }
      }]);

      return RateUsDialogComponent;
    }();

    RateUsDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__["NgxNotificationService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    RateUsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rate-us-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rate-us-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/rate-us-dialog/rate-us-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rate-us-dialog.component.css */
      "./src/app/chat/rate-us-dialog/rate-us-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], RateUsDialogComponent);
    /***/
  },

  /***/
  "./src/app/compatibility-form/profile.ts":
  /*!***********************************************!*\
    !*** ./src/app/compatibility-form/profile.ts ***!
    \***********************************************/

  /*! exports provided: Profile */

  /***/
  function srcAppCompatibilityFormProfileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Profile = function Profile() {
      _classCallCheck(this, Profile);

      this.photoScore = 0;
    };
    /***/

  },

  /***/
  "./src/app/custom-checkout/custom-checkout.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/custom-checkout/custom-checkout.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomCheckoutCustomCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep body{\r\n    background-image:none;\r\n    background-color: white;\r\n}\r\nmat-card {\r\n    background: white;\r\n    color: black;\r\n    width: 90%;\r\n    margin: 20px auto;\r\n}\r\nmat-card-title {\r\n    font-size: 20px;\r\n}\r\n::ng-deep .mat-form-field-ripple {\r\n    background-color:#34b7f1;\r\n    height: 1px;\r\n}\r\n::ng-deep .mat-form-field-appearance-standard .mat-form-field-underline{\r\n    background-color: #34b7f1;\r\n    height: 1px;\r\n}\r\nmat-label{\r\n    color: black;\r\n}\r\n.btnHover:hover{\r\n    background: #34b7f1;\r\n    color: white;\r\n}\r\n.btnPaymentType{\r\n    text-align: start;\r\nwidth: 100%\r\n}\r\n.btnPaymentType:hover{\r\n    background: #34b7f1;\r\n    color: white;\r\n}\r\n.paymentImage{\r\n    width: 40px\r\n}\r\n.paytype{\r\n    margin-left: 10px;\r\n    font-weight: bolder;\r\n}\r\nhr{\r\n    margin: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tLWNoZWNrb3V0L2N1c3RvbS1jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jdXN0b20tY2hlY2tvdXQvY3VzdG9tLWNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgYm9keXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNGI3ZjE7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNGI3ZjE7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxufVxyXG5tYXQtbGFiZWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bkhvdmVyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzM0YjdmMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuUGF5bWVudFR5cGV7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxud2lkdGg6IDEwMCVcclxufVxyXG4uYnRuUGF5bWVudFR5cGU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wYXltZW50SW1hZ2V7XHJcbiAgICB3aWR0aDogNDBweFxyXG59XHJcbi5wYXl0eXBle1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbmhye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/custom-checkout/custom-checkout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/custom-checkout/custom-checkout.component.ts ***!
    \**************************************************************/

  /*! exports provided: CustomCheckoutComponent */

  /***/
  function srcAppCustomCheckoutCustomCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomCheckoutComponent", function () {
      return CustomCheckoutComponent;
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


    var _subscriptionservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../subscriptionservice.service */
    "./src/app/subscriptionservice.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CustomCheckoutComponent = /*#__PURE__*/function () {
      function CustomCheckoutComponent(subscriptionService, http, router, spinner, ngxNotificationService) {
        _classCallCheck(this, CustomCheckoutComponent);

        this.subscriptionService = subscriptionService;
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.ngxNotificationService = ngxNotificationService;
        this.checkOutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          })
        });
      }

      _createClass(CustomCheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // this.subscriptionService.loadRazorPayScript();
          // this.subscriptionService.loadPayTmScript();
          if (this.router.url.match('verifyPayment')) {
            this.getTransactionStatus();
          } else {
            this.getPaytmOrderId().subscribe(function (data) {
              console.log(data);

              if (data) {
                // const formData = new FormData();
                // formData.append('orderId', `HANS_ORDER_${Math.floor(Math.random() * 10000000) + 1}`);
                // formData.append('txnToken', data.body.txnToken);
                // formData.append('mid', 'bkjPis66135619933053');
                var paytmData = JSON.parse(data.response);
                _this6.oId = data.order_id;
                localStorage.setItem('oId', data.order_id);
                _this6.txnToken = paytmData.body.txnToken;
                _this6.mId = 'bkjPis66135619933053'; // tslint:disable-next-line: max-line-length
                // window.open(`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=HANS_ORDER_${Math.floor(Math.random() * 10000000) + 1}`);
              }
            }, function (err) {
              console.log('error', err);
            });
          }
        }
      }, {
        key: "createSubscription",
        value: function createSubscription(payMode) {
          var _this7 = this;

          var formData = new FormData();
          formData.append('id', localStorage.getItem('id'));
          formData.append('mobile', localStorage.getItem('mobile_number'));

          if (payMode === 'card') {
            formData.append('payment_mode', '0');
          } else {
            formData.append('payment_mode', '1');
          }

          this.http.post('https://partner.hansmatrimony.com/api/createSubscription', formData).subscribe(function (res) {
            if (res) {
              console.log(res);

              if (res.status === 1) {
                if (res.customer_id && res.customer_id !== '' && res.order_id && res.order_id !== '') {
                  _this7.custId = res.customer_id;
                  _this7.orderId = res.order_id;

                  _this7.customClickButton(payMode);
                }
              } else {
                _this7.ngxNotificationService.error('Something went wrong. Try again later');
              }
            } else {
              _this7.ngxNotificationService.error('Something went wrong. Try again later');
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "customClickButton",
        value: function customClickButton(payMode) {
          if (this.checkOutForm.invalid) {
            return;
          }

          if (this.custId && this.orderId && this.custId !== null && this.orderId !== null) {
            // tslint:disable-next-line: max-line-length
            this.subscriptionService.payNowCustom(3100, 'live', 0, this.checkOutForm.value.name, this.checkOutForm.value.email, localStorage.getItem('mobile_number'), payMode, this.orderId, this.custId);
          } else {
            this.ngxNotificationService.error('Something went wrong, Please try again later');
          }
        }
      }, {
        key: "openPaytm",
        value: function openPaytm() {
          // this.subscriptionService.onScriptLoad();
          var form = document.getElementById('pay');
          form.action = "https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=".concat(this.oId);
          form.submit();
        }
      }, {
        key: "getPaytmOrderId",
        value: function getPaytmOrderId() {
          var formData = new FormData();
          formData.append('mobile', '9910395820');
          formData.append('amount', '100');
          return this.http.post('https://partner.hansmatrimony.com/api/order', formData);
        }
      }, {
        key: "getTransactionStatus",
        value: function getTransactionStatus() {
          var formData = new FormData();
          formData.append('orderId', localStorage.getItem('oId'));
          this.http.post('https://partner.hansmatrimony.com/api/transactionStatus', formData).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('oId', null);
            alert('Payment Successful');
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return CustomCheckoutComponent;
    }();

    CustomCheckoutComponent.ctorParameters = function () {
      return [{
        type: _subscriptionservice_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionserviceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__["NgxNotificationService"]
      }];
    };

    CustomCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-checkout/custom-checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-checkout.component.css */
      "./src/app/custom-checkout/custom-checkout.component.css"))["default"]]
    })], CustomCheckoutComponent);
    /***/
  },

  /***/
  "./src/app/find-open-history-profile.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/find-open-history-profile.service.ts ***!
    \******************************************************/

  /*! exports provided: FindOpenHistoryProfileService */

  /***/
  function srcAppFindOpenHistoryProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FindOpenHistoryProfileService", function () {
      return FindOpenHistoryProfileService;
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


    var _chat_countModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat/countModel */
    "./src/app/chat/countModel.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _offers_lockdown_off_lockdown_off_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers/lockdown-off/lockdown-off.component */
    "./src/app/offers/lockdown-off/lockdown-off.component.ts");
    /* harmony import */


    var _offers_offer_one_offer_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers/offer-one/offer-one.component */
    "./src/app/offers/offer-one/offer-one.component.ts");
    /* harmony import */


    var _offers_offer_two_offer_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./offers/offer-two/offer-two.component */
    "./src/app/offers/offer-two/offer-two.component.ts");
    /* harmony import */


    var _chat_app_download_dialog_app_download_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chat/app-download-dialog/app-download-dialog.component */
    "./src/app/chat/app-download-dialog/app-download-dialog.component.ts");
    /* harmony import */


    var _todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./todays-payment-popup/todays-payment-popup.component */
    "./src/app/todays-payment-popup/todays-payment-popup.component.ts");
    /* harmony import */


    var _chat_rate_us_dialog_rate_us_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chat/rate-us-dialog/rate-us-dialog.component */
    "./src/app/chat/rate-us-dialog/rate-us-dialog.component.ts");
    /* harmony import */


    var _chat_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./chat/message-dialog/message-dialog.component */
    "./src/app/chat/message-dialog/message-dialog.component.ts");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _chat_daily_welcome_popup_daily_welcome_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./chat/daily-welcome-popup/daily-welcome-popup.component */
    "./src/app/chat/daily-welcome-popup/daily-welcome-popup.component.ts");

    var FindOpenHistoryProfileService = /*#__PURE__*/function () {
      function FindOpenHistoryProfileService(dialog, breakPointObserver, router, ngxNotificationService) {
        _classCallCheck(this, FindOpenHistoryProfileService);

        this.dialog = dialog;
        this.breakPointObserver = breakPointObserver;
        this.router = router;
        this.ngxNotificationService = ngxNotificationService;
        this.creditsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isPersonalized = false;
        this.hasPhoto = false;
        this.drawerBadgeClicked = false;
        this.contactedPhoneClicked = false;
        this.profileCount = new _chat_countModel__WEBPACK_IMPORTED_MODULE_2__["ProfileCount"]();
        this.countUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setTab = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shownConfetti = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.popupOpen = false;
        this.tutorialIndex = -1;
        this.compatibilityLookingFor = '';
        this.compatibilityGender = '';
      }

      _createClass(FindOpenHistoryProfileService, [{
        key: "setItem",
        value: function setItem(item) {
          console.log(item);
          this.openItem = item;
        }
      }, {
        key: "setCredits",
        value: function setCredits(credits) {
          this.credits = credits;
          localStorage.setItem('credits', credits);

          if (this.credits < 1) {
            this.creditsUpdated.emit(true);
          }

          console.log(this.credits);
        }
      }, {
        key: "getItem",
        value: function getItem() {
          if (this.openItem) {
            return this.openItem;
          } else {
            return null;
          }
        }
      }, {
        key: "setTutorialIndex",
        value: function setTutorialIndex() {
          //console.log(this.tutorialIndex);
          if (localStorage.getItem("tutorialIndex")) {
            // var temp = Number(localStorage.getItem("tutorialIndex"));
            // if (temp == -1)
            //   return;
            // if (temp == 5)
            //   temp = -1;
            // else
            //   temp++;
            // localStorage.setItem("tutorialIndex", String(temp));
            localStorage.setItem('tutorialIndex', '-1');
          } else {
            localStorage.setItem('tutorialIndex', '0');
          }
        }
      }, {
        key: "getTutorialIndex",
        value: function getTutorialIndex() {
          var temp = Number(localStorage.getItem("tutorialIndex"));
          this.tutorialIndex = temp;
          return this.tutorialIndex;
        }
      }, {
        key: "getCredits",
        value: function getCredits() {
          var credits = localStorage.getItem('credits');
          return credits;
        }
      }, {
        key: "setIsPersonalized",
        value: function setIsPersonalized(status) {
          this.isPersonalized = status;
        } // for showing the badge on phone and the chat drawer

      }, {
        key: "setDiscoverClicked",
        value: function setDiscoverClicked(status) {
          if (status) {
            localStorage.setItem("discoverClicked", "1");
          } else {
            localStorage.setItem("discoverClicked", "0");
          }
        }
      }, {
        key: "getDiscoverClicked",
        value: function getDiscoverClicked() {
          var temp = localStorage.getItem("discoverClicked");
          if (temp == "1") return true;else return false;
        }
      }, {
        key: "setdrawerBadgeClicked",
        value: function setdrawerBadgeClicked(status) {
          if (status) {
            localStorage.setItem("drawerBadgeClicked", "1");
          } else {
            localStorage.setItem("drawerBadgeClicked", "0");
          }
        }
      }, {
        key: "setcontactedPhoneClicked",
        value: function setcontactedPhoneClicked(status) {
          if (status) {
            localStorage.setItem("contactedPhoneClicked", "1");
          } else {
            localStorage.setItem("contactedPhoneClicked", "0");
          }
        }
      }, {
        key: "setChangePrefsClicked",
        value: function setChangePrefsClicked(status) {
          if (status) {
            localStorage.setItem("changePrefsClicked", "1");
          } else {
            localStorage.setItem("changePrefsClicked", "0");
          }
        }
      }, {
        key: "getChangePrefsClicked",
        value: function getChangePrefsClicked() {
          var temp = localStorage.getItem("changePrefsClicked");
          if (temp == "1") return true;else return false;
        }
      }, {
        key: "getdrawerBadgeClicked",
        value: function getdrawerBadgeClicked() {
          var temp = localStorage.getItem("drawerBadgeClicked");
          if (temp == "1") return true;else return false;
        }
      }, {
        key: "getcontactedPhoneClicked",
        value: function getcontactedPhoneClicked() {
          var temp = localStorage.getItem("contactedPhoneClicked");
          if (temp == "1") return true;else return false;
        }
      }, {
        key: "getPersonalized",
        value: function getPersonalized() {
          return this.isPersonalized;
        }
      }, {
        key: "setIsLead",
        value: function setIsLead(status) {
          this.is_lead = status;
          localStorage.setItem('is_lead', status);
        }
      }, {
        key: "getIsLead",
        value: function getIsLead() {
          return this.is_lead;
        }
      }, {
        key: "setScroll",
        value: function setScroll(pagename, scrollPosition) {
          switch (pagename) {
            case 'todaysSpecial':
              localStorage.setItem('todaysSpecialScrollPos', String(scrollPosition));
              break;

            case 'discover':
              localStorage.setItem('discoverScrollPos', String(scrollPosition));
              break;

            case 'yourLikes':
              localStorage.setItem('yourLikesScrollPos', String(scrollPosition));
              break;
          }
        }
      }, {
        key: "setPhotoStatus",
        value: function setPhotoStatus(status) {
          if (status) localStorage.setItem("has_photo", '1');else localStorage.setItem("has_photo", "0");
          this.hasPhoto = status;
        }
      }, {
        key: "getPhotoStatus",
        value: function getPhotoStatus() {
          if (localStorage.getItem("has_photo") === '1') this.hasPhoto = true;else this.hasPhoto = false;
          return this.hasPhoto;
        }
      }, {
        key: "changeTab",
        value: function changeTab(position) {
          this.setTab.emit(position);
        }
      }, {
        key: "changeBackToTab",
        value: function changeBackToTab(position) {
          this.router.navigateByUrl("chat/".concat(position));
        }
      }, {
        key: "saveCount",
        value: function saveCount(count) {
          this.profileCount.contactedCount = count.C;
          this.profileCount.shortlistCount = count.SL;
          this.profileCount.shortedCount = count.S;
          this.profileCount.rejectedCount = count.R;
          localStorage.setItem('count', JSON.stringify(this.profileCount));
        }
      }, {
        key: "getShortlistNumber",
        value: function getShortlistNumber() {
          if (this.profileCount.shortlistCount) {
            return this.profileCount.shortlistCount;
          } else {
            return '0';
          }
        }
      }, {
        key: "getShortedNumber",
        value: function getShortedNumber() {
          if (this.profileCount.shortedCount) {
            return this.profileCount.shortedCount;
          } else {
            return '0';
          }
        }
      }, {
        key: "getDailyNumber",
        value: function getDailyNumber() {
          if (this.profileCount.dailyCount) {
            return this.profileCount.dailyCount;
          } else {
            return '0';
          }
        }
      }, {
        key: "saveDailyCount",
        value: function saveDailyCount(count) {
          this.profileCount.dailyCount = count + 1;
        }
      }, {
        key: "getOtherProfiles",
        value: function getOtherProfiles() {
          if (this.isPersonalized) {
            return localStorage.getItem('language') === 'hindi' ? 'अन्य रिश्ते' : 'Other Rishte';
          } else {
            return localStorage.getItem('language') === 'hindi' ? 'VIP रिश्ते' : 'VIP Rishte';
          }
        }
      }, {
        key: "getOtherName",
        value: function getOtherName() {
          if (this.isPersonalized) {
            return localStorage.getItem('language') === 'hindi' ? 'अन्य' : 'Other';
          } else {
            return 'VIP';
          }
        }
      }, {
        key: "getDailyCount",
        value: function getDailyCount() {
          return this.profileCount.dailyCount ? localStorage.getItem('language') === 'hindi' ? 'आज के रिश्ते ( ' + this.profileCount.dailyCount + ' )' : 'Today\'s Profiles ( ' + this.profileCount.dailyCount + ' )' : localStorage.getItem('language') === 'hindi' ? 'आज के रिश्ते' : 'Today\'s Profiles';
        }
      }, {
        key: "getContactedCount",
        value: function getContactedCount() {
          var count = JSON.parse(localStorage.getItem('count'));
          return localStorage.getItem('language') === 'hindi' ? 'कॉंटैक्टेड(' + count.contactedCount + ')' : 'Contacted(' + count.contactedCount + ')';
        }
      }, {
        key: "getShortlistedCount",
        value: function getShortlistedCount() {
          var count = JSON.parse(localStorage.getItem('count'));
          return localStorage.getItem('language') === 'hindi' ? 'मेरी पसंद(' + count.shortlistCount + ')' : 'Shortlisted(' + count.shortlistCount + ')';
        }
      }, {
        key: "getYourLikesCount",
        value: function getYourLikesCount() {
          var count = JSON.parse(localStorage.getItem('count'));
          return localStorage.getItem('language') === 'hindi' ? 'मेरी पसंद(' + count.shortlistCount + ')' : 'Your Likes(' + count.shortlistCount + ')';
        }
      }, {
        key: "getShortedCount",
        value: function getShortedCount() {
          var count = JSON.parse(localStorage.getItem('count'));
          return localStorage.getItem('language') === 'hindi' ? 'मै किसे पसंद हूँ? ( ' + count.shortedCount + ' )' : 'Liked Me? ( ' + count.shortedCount + ' )';
        }
      }, {
        key: "getRejectedCount",
        value: function getRejectedCount() {
          var count = JSON.parse(localStorage.getItem('count'));
          return localStorage.getItem('language') === 'hindi' ? 'रीजेकटेड(' + count.rejectedCount + ')' : 'Rejected(' + count.rejectedCount + ')';
        }
      }, {
        key: "getMutualCount",
        value: function getMutualCount() {
          return localStorage.getItem('language') === 'hindi' ? 'दोनो को पसंद' : 'Mutual Like';
        }
      }, {
        key: "getCountOnlyContacted",
        value: function getCountOnlyContacted() {
          return this.profileCount.contactedCount;
        }
      }, {
        key: "getCountOnlyShortlist",
        value: function getCountOnlyShortlist() {
          return this.profileCount.shortlistCount;
        }
      }, {
        key: "getCountOnlyShorted",
        value: function getCountOnlyShorted() {
          return this.profileCount.shortedCount;
        }
      }, {
        key: "getCountOnlyRejected",
        value: function getCountOnlyRejected() {
          return this.profileCount.rejectedCount;
        } // lockdown popup

      }, {
        key: "openLockdownAd",
        value: function openLockdownAd() {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.minHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.minHeight = '70vh';
              dialogConfig.disableClose = true;
            }
          });
          var dialogRef = this.dialog.open(_offers_lockdown_off_lockdown_off_component__WEBPACK_IMPORTED_MODULE_5__["LockdownOffComponent"], dialogConfig);
        } //new function added to load todays offer ad on ngViewInit() instead of lockdownoffer

      }, {
        key: "openTodaysPopupAd",
        value: function openTodaysPopupAd() {
          if (this.popupOpen) {
            this.popupOpen = false;
            return;
          }

          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.minHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.minHeight = '70vh';
              dialogConfig.disableClose = true;
            }
          });
          dialogConfig.id = 'todaysPopup';
          var dialogRef = this.dialog.open(_todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_9__["TodaysPaymentPopupComponent"], dialogConfig);
        } // Inhe abhi call kare popup

      }, {
        key: "openOfferOne",
        value: function openOfferOne(profile) {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.minHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = true;
            }
          });
          dialogConfig.data = {
            data: profile
          };
          var dialogRef = this.dialog.open(_offers_offer_one_offer_one_component__WEBPACK_IMPORTED_MODULE_6__["OfferOneComponent"], dialogConfig);
        } // ye rishta hath se na jane de pop up

      }, {
        key: "openOfferTwo",
        value: function openOfferTwo(profile) {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.minHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = true;
            }
          });
          dialogConfig.data = {
            data: profile
          };
          var dialogRef = this.dialog.open(_offers_offer_two_offer_two_component__WEBPACK_IMPORTED_MODULE_7__["OfferTwoComponent"], dialogConfig);
        } // download the app pop up

      }, {
        key: "openDownloadAppDialog",
        value: function openDownloadAppDialog(profile) {
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.minHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = true;
            }
          });
          dialogConfig.data = {
            data: profile
          };
          var dialogRef = this.dialog.open(_chat_app_download_dialog_app_download_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AppDownloadDialogComponent"], dialogConfig);
        } // rate us pop up

      }, {
        key: "openRateUsDialog",
        value: function openRateUsDialog() {
          var forFreeUser = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.minWidth = '30vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '96vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = false;
            }
          });
          dialogConfig.id = 'rateDialog';
          dialogConfig.data = forFreeUser;
          var dialogRef = this.dialog.open(_chat_rate_us_dialog_rate_us_dialog_component__WEBPACK_IMPORTED_MODULE_10__["RateUsDialogComponent"], dialogConfig);
        }
      }, {
        key: "openMessageDialog",
        value: function openMessageDialog(shareItem, reply) {
          var _this8 = this;

          var coming = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          console.log(shareItem);
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          dialogConfig.width = '700px';
          dialogConfig.disableClose = true;

          switch (reply.toLowerCase()) {
            case 'yes':
              dialogConfig.data = {
                profile: shareItem,
                type: reply.toLowerCase()
              };
              break;

            case 'contacted':
              dialogConfig.data = {
                profile: shareItem,
                type: reply.toLowerCase()
              };
              break;

            default:
              break;
          }

          var dialogRefYes = this.dialog.open(_chat_message_dialog_message_dialog_component__WEBPACK_IMPORTED_MODULE_11__["MessageDialogComponent"], dialogConfig);
          dialogRefYes.afterClosed().subscribe(function (data) {
            if (data && data.request) {
              _this8.ngxNotificationService.success('Call Requested Successfully. Hans Matrimony Will Call You');

              if (coming) {
                _this8.router.navigateByUrl('chat');
              }
            }
          });
        } // daily welcome popup

      }, {
        key: "openWelcomeDialog",
        value: function openWelcomeDialog(dailyCount) {
          this.popupOpen = true;
          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.minWidth = '40vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '95vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = true;
            }
          });
          dialogConfig.data = {
            dailyQuota: dailyCount
          };
          var dialogRef = this.dialog.open(_chat_daily_welcome_popup_daily_welcome_popup_component__WEBPACK_IMPORTED_MODULE_14__["DailyWelcomePopupComponent"], dialogConfig);
        }
      }]);

      return FindOpenHistoryProfileService;
    }();

    FindOpenHistoryProfileService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_12__["NgxNotificationService"]
      }];
    };

    FindOpenHistoryProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FindOpenHistoryProfileService);
    /***/
  },

  /***/
  "./src/app/hans-preloading-strategy.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/hans-preloading-strategy.service.ts ***!
    \*****************************************************/

  /*! exports provided: HansPreloadingStrategyService */

  /***/
  function srcAppHansPreloadingStrategyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HansPreloadingStrategyService", function () {
      return HansPreloadingStrategyService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HansPreloadingStrategyService = /*#__PURE__*/function () {
      function HansPreloadingStrategyService() {
        _classCallCheck(this, HansPreloadingStrategyService);
      }

      _createClass(HansPreloadingStrategyService, [{
        key: "preload",
        value: function preload(route, fn) {
          console.log("".concat(route.data && route.data.preload ? 'loading module' + JSON.stringify(route) : "Not Loading ".concat(JSON.stringify(route)), " "));
          return route.data && route.data.preload ? fn() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }]);

      return HansPreloadingStrategyService;
    }();

    HansPreloadingStrategyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HansPreloadingStrategyService);
    /***/
  },

  /***/
  "./src/app/language.service.ts":
  /*!*************************************!*\
    !*** ./src/app/language.service.ts ***!
    \*************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
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


    var _compatibility_form_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./compatibility-form/profile */
    "./src/app/compatibility-form/profile.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");

    var LanguageService = /*#__PURE__*/function () {
      function LanguageService(http, ngxNotificationService) {
        _classCallCheck(this, LanguageService);

        this.http = http;
        this.ngxNotificationService = ngxNotificationService;
        this.profileLang = new _compatibility_form_profile__WEBPACK_IMPORTED_MODULE_2__["Profile"]();
        this.languageChangedFromMainStatus = false;
        this.homeLang = {
          downloadApp: '',
          login: '',
          rishteDekhein: '',
          familyTogether: '',
          freeRegister: '',
          moreThan: '',
          chooseFrom: '',
          manyMatchmakers: '',
          helpingHands: '',
          manyTemple: '',
          verificationCenters: '',
          offlineCentres: '',
          showMore: '',
          shivTemple: '',
          sanatanTemple: '',
          lakshmiTemple: '',
          joinHearts: '',
          matchmakingApp: '',
          getOnPhone: '',
          myprofile: '',
          logout: '',
          subscription: '',
          ourBlog: '',
          vipMatchmaking: '',
          registerFree: ''
        };
        this.registerLang = {
          freeRegistration: '',
          lookingFor: '',
          firstName: '',
          lastName: '',
          dob: ''
        };
        this.verificationLang = {
          verifyMobile: '',
          otpSent: '',
          resendOtp: '',
          verify: '',
          changeNumber: ''
        };
      }

      _createClass(LanguageService, [{
        key: "setCurrentLanguage",
        value: function setCurrentLanguage(lang) {
          this.changeLanguage(lang);
        }
      }, {
        key: "getCurrentLanguage",
        value: function getCurrentLanguage() {
          return localStorage.getItem('language');
        }
      }, {
        key: "setProfileLanguage",
        value: function setProfileLanguage() {
          if (localStorage.getItem('language')) {
            switch (localStorage.getItem('language')) {
              case 'hindi':
                // buttons
                this.profileLang.contact = 'कांटेक्ट करें';
                this.profileLang.reject = 'नापसंद है';
                this.profileLang.shortlist = 'पसंद है'; // top details

                this.profileLang.verifiedAt = 'वेरिफ़िएड एट';
                this.profileLang.managedBy = 'मैनेज्ड बय';
                this.profileLang.hello = 'हेलो';
                this.profileLang.about = 'अबाउट';
                this.profileLang.personalizedDetails = 'पर्सनल डिटेल्स';
                this.profileLang.careerDetails = 'शिक्षा और करियर डिटेल्स';
                this.profileLang.horoscopeDetails = 'होरोस्कोप';
                this.profileLang.familyDetails = 'फॅमिली डिटेल्स';
                this.profileLang.myself = 'माइसेल्फ '; // personal details

                this.profileLang.weight = 'वेट';
                this.profileLang.martialStatus = 'मैरिटल स्टेटस';
                this.profileLang.foodChoice = 'फ़ूड चॉइस';
                this.profileLang.religion = 'रिलिजन'; // career details

                this.profileLang.occupation = 'ऑक्यूपेशन';
                this.profileLang.designation = 'देसिग्नेशन';
                this.profileLang.annualIncome = 'आय';
                this.profileLang.education = 'क्वालिफिकेशन';
                this.profileLang.college = 'कॉलेज';
                this.profileLang.workingCity = 'वर्किंग सिटी'; // horoscope details

                this.profileLang.dob = 'D.O.B';
                this.profileLang.birthTime = 'बर्थ टाइम';
                this.profileLang.birthPlace = 'बर्थ प्लेस';
                this.profileLang.manglik = 'मांगलिक'; // family details

                this.profileLang.sisters = 'बहनें';
                this.profileLang.brothers = 'भाई';
                this.profileLang.fatherStatus = 'पिता';
                this.profileLang.motherStatus = 'माता';
                this.profileLang.gotra = 'गोत्र';
                this.profileLang.familyType = 'फॅमिली टाइप';
                this.profileLang.houseType = 'हाउस टाइप';
                this.profileLang.familyIncome = 'फॅमिली इनकम'; // my-profile-nav

                this.profileLang.personal = 'पर्सनल';
                this.profileLang.horoscope = 'होरोस्कोप';
                this.profileLang.family = 'फॅमिली';
                this.profileLang.preference = 'प्रैफरेंसेज'; // my-profile-menu

                this.profileLang.logout = 'लॉगआउट ';
                this.profileLang.subscription = 'सब्सक्रिप्शन'; // my-profile

                this.profileLang.myprofile = 'मेरी प्रोफाइल';
                this.profileLang.aboutMe = 'अबाउट मी';
                this.profileLang.name = 'नाम';
                this.profileLang.age = 'उम्र';
                this.profileLang.height = 'उचाई';
                this.profileLang.locality = 'लोकैलिटी';
                this.profileLang.educational = 'शिक्षा';
                this.profileLang.additional = 'एडिशनल';
                this.profileLang.company = 'कंपनी';
                this.profileLang.birthDate = 'जनम तिथि';
                this.profileLang.email = 'ईमेल';
                this.profileLang.mobile = 'मोबाइल';
                this.profileLang.whatsapp = 'व्हाट्सप्प';
                this.profileLang.familyLivingIn = 'फॅमिली लिविंग इन';
                this.profileLang.aboutFamily = 'अबाउट फैमिली';
                this.profileLang.ageMin = 'न्यूनतम उम्र';
                this.profileLang.ageMax = 'अधिकतम उम्र';
                this.profileLang.heightMin = 'न्यूनतम उचाई';
                this.profileLang.heightMax = 'अधिकतम उचाई';
                this.profileLang.incomeMin = 'न्यूनतम आय';
                this.profileLang.incomeMax = 'अधिकतम आय';
                this.profileLang.castePref = 'जाती प्रेफरेंस';
                this.profileLang.manglikPref = 'मांगलिक प्रेफरेंस';
                this.profileLang.foodChoicePref = 'फ़ूड चॉइस प्रेफरेंस';
                this.profileLang.motherTonguePref = 'मात्र भाषा प्रेफरेंस';
                this.profileLang.occupationPref = 'ऑक्यूपेशन प्रेफरेंस';
                this.profileLang.workingPref = 'वर्किंग प्रेफरेंस';
                this.profileLang.desc = 'डिस्क्रिप्शन';
                this.profileLang.todaysSpecial = 'आज के रिश्ते';
                this.profileLang.discover = 'और रिश्ते देखे';
                this.profileLang.likesYou = 'आपको पसंद करते';
                this.profileLang.yourLikes = 'आपकी पसंद'; // credits

                this.profileLang.credits = 'बचे हुए कॉन्टेक्ट्स:';
                break;

              case 'english':
                this.profileLang.contact = 'Contact';
                this.profileLang.reject = 'Reject';
                this.profileLang.shortlist = 'Like'; // top details

                this.profileLang.verifiedAt = 'Verified At';
                this.profileLang.managedBy = 'Managed By';
                this.profileLang.hello = 'Hello';
                this.profileLang.about = 'About';
                this.profileLang.personalizedDetails = 'Personal Details';
                this.profileLang.careerDetails = 'Education and Career Details';
                this.profileLang.horoscopeDetails = 'Horoscope';
                this.profileLang.familyDetails = 'Family Details';
                this.profileLang.myself = 'Myself '; // personal details

                this.profileLang.weight = 'Weight';
                this.profileLang.martialStatus = 'Marital Status';
                this.profileLang.foodChoice = 'Food Choice';
                this.profileLang.religion = 'Religion'; // career details

                this.profileLang.occupation = 'Occupation';
                this.profileLang.designation = 'Designation';
                this.profileLang.annualIncome = 'Annual Income';
                this.profileLang.education = 'Qualification';
                this.profileLang.college = 'College';
                this.profileLang.workingCity = 'Working City'; // horoscope details

                this.profileLang.dob = 'D.O.B';
                this.profileLang.birthTime = 'Birth Time';
                this.profileLang.birthPlace = 'Birth Place';
                this.profileLang.manglik = 'Manglik'; // family details

                this.profileLang.sisters = 'Sisters';
                this.profileLang.brothers = 'Brothers';
                this.profileLang.fatherStatus = 'Father';
                this.profileLang.motherStatus = 'Mother';
                this.profileLang.gotra = 'Gotra';
                this.profileLang.familyType = 'Family Type';
                this.profileLang.houseType = 'House Type';
                this.profileLang.familyIncome = 'Family Income'; // my-profile-nav

                this.profileLang.personal = 'Personal';
                this.profileLang.horoscope = 'Horoscope';
                this.profileLang.family = 'Family';
                this.profileLang.preference = 'Preference'; // my-profile-menu

                this.profileLang.logout = 'Logout ';
                this.profileLang.subscription = 'Subscription'; // my-profile

                this.profileLang.myprofile = 'My Profile';
                this.profileLang.aboutMe = 'About Me';
                this.profileLang.name = 'Name';
                this.profileLang.age = 'Age';
                this.profileLang.height = 'Height';
                this.profileLang.locality = 'Locality';
                this.profileLang.educational = 'Educational Details';
                this.profileLang.additional = 'Additional';
                this.profileLang.company = 'Company';
                this.profileLang.birthDate = 'Birth Date';
                this.profileLang.email = 'Email';
                this.profileLang.mobile = 'Mobile';
                this.profileLang.whatsapp = 'Whatsapp';
                this.profileLang.familyLivingIn = 'Family Living In';
                this.profileLang.aboutFamily = 'About Family';
                this.profileLang.ageMin = 'Age Min';
                this.profileLang.ageMax = 'Age Max';
                this.profileLang.heightMin = 'Height Min';
                this.profileLang.heightMax = 'Height Max';
                this.profileLang.incomeMin = 'Income Min';
                this.profileLang.incomeMax = 'Income Max';
                this.profileLang.castePref = 'Caste Preference';
                this.profileLang.manglikPref = 'Manglik Preference';
                this.profileLang.foodChoicePref = 'Food Choice Preference';
                this.profileLang.motherTonguePref = 'Mother Tongue Preference';
                this.profileLang.occupationPref = 'Occupation Preference';
                this.profileLang.workingPref = 'Working preference';
                this.profileLang.desc = 'Description';
                this.profileLang.todaysSpecial = 'Today\'s Special';
                this.profileLang.discover = 'See More';
                this.profileLang.likesYou = 'Liked Me';
                this.profileLang.yourLikes = 'My Likes'; // credits

                this.profileLang.credits = 'Contacts Left: ';
                break;

              default:
                break;
            }
          } else {
            localStorage.setItem('language', 'english');
            this.setProfileLanguage();
          }
        }
      }, {
        key: "setHomeLang",
        value: function setHomeLang(lang) {
          switch (lang) {
            case 'hindi':
              this.homeLang.downloadApp = 'डाउनलोड करें';
              this.homeLang.login = 'लॉगिन करें';
              this.homeLang.rishteDekhein = 'रिश्ते देखें';
              this.homeLang.familyTogether = '50+ मंदिरों से सत्यापित मिलान';
              this.homeLang.freeRegister = 'रजिस्टर करें नि: शुल्क';
              this.homeLang.moreThan = '50,000 से अधिक प्रोफाइल';
              this.homeLang.chooseFrom = 'रिश्तों में से चुनिए अपनी पसंद';
              this.homeLang.manyMatchmakers = '1000+ मैचमेकर्स';
              this.homeLang.helpingHands = 'जो आपको रिश्ते चुनने में मदद करेंगे';
              this.homeLang.manyTemple = '50+ मंदिरो';
              this.homeLang.verificationCenters = 'में वेरिफिकेशन सेंटर्स';
              this.homeLang.offlineCentres = 'ऑफलाइन केन्द्र नेटवर्क';
              this.homeLang.showMore = 'सभी देखें';
              this.homeLang.shivTemple = 'श्री शिव साई धाम मंदिर';
              this.homeLang.sanatanTemple = 'श्री सनातन धर्म मंदिर';
              this.homeLang.lakshmiTemple = 'श्री लक्ष्मी नारायण मंदिर';
              this.homeLang.joinHearts = 'रिश्ते ही नहीं जोड़ें दिलों को भी।';
              this.homeLang.matchmakingApp = 'मैचमेकिंग ऐप';
              this.homeLang.getOnPhone = 'अभी पाये, फ़ोन पर';
              this.homeLang.myprofile = 'मेरी प्रोफाइल';
              this.homeLang.logout = 'लॉगआउट';
              this.homeLang.subscription = 'सब्सक्रिप्शन';
              this.homeLang.ourBlog = 'हमारा ब्लॉग पढ़ें';
              this.homeLang.vipMatchmaking = 'VIP मैच मेकिंग';
              this.homeLang.registerFree = 'रजिस्टर फ्री';
              break;

            case 'english':
              this.homeLang.downloadApp = 'Download App';
              this.homeLang.login = 'Log In';
              this.homeLang.rishteDekhein = 'View Profiles';
              this.homeLang.familyTogether = 'Verified matches from 50+ Temples';
              this.homeLang.freeRegister = 'Register For Free';
              this.homeLang.moreThan = 'More Than 50,000 Profiles';
              this.homeLang.chooseFrom = 'To Choose From';
              this.homeLang.manyMatchmakers = '1000+ Matchmakers';
              this.homeLang.helpingHands = 'Who Will Help In Finding A Perfect Match ';
              this.homeLang.manyTemple = '50+ Temples';
              this.homeLang.verificationCenters = 'Verification Centres';
              this.homeLang.offlineCentres = 'Offline Centres Network';
              this.homeLang.showMore = 'Show More';
              this.homeLang.shivTemple = 'Shree Shiv Sai Dham Mandir';
              this.homeLang.sanatanTemple = 'Shree Sanatan Dharam Mandir';
              this.homeLang.lakshmiTemple = 'Shree Lakshmi Narayan Mandir';
              this.homeLang.joinHearts = 'Rishtey Nahi Jode Dilo Ko Bhi';
              this.homeLang.matchmakingApp = 'Matchmaking App';
              this.homeLang.getOnPhone = 'Download On Phone';
              this.homeLang.myprofile = 'My Profile';
              this.homeLang.logout = 'Log Out';
              this.homeLang.subscription = 'Subscription';
              this.homeLang.ourBlog = 'Read Our Blog';
              this.homeLang.vipMatchmaking = 'VIP Matchmaking';
              this.homeLang.registerFree = 'Register Free';
              break;

            default:
              break;
          }
        }
      }, {
        key: "setRegisterLang",
        value: function setRegisterLang() {
          if (localStorage.getItem('language')) {
            switch (localStorage.getItem('language')) {
              case 'hindi':
                this.registerLang.freeRegistration = 'नि: शुल्क रजिस्ट्रेशन';
                this.registerLang.lookingFor = 'मॅट्रिमोनी प्रोफाइल किसके लिए बना रहे हैं';
                this.registerLang.firstName = 'पहला नाम';
                this.registerLang.lastName = 'उपनाम';
                this.registerLang.dob = 'जनम तिथि';
                break;

              case 'english':
                this.registerLang.freeRegistration = 'Free Registration';
                this.registerLang.lookingFor = 'Looking Rishta For';
                this.registerLang.firstName = 'First Name';
                this.registerLang.lastName = 'Last Name';
                this.registerLang.dob = 'Date Of Birth';
                break;

              default:
                break;
            }
          } else {
            localStorage.setItem('language', 'english');
            this.setRegisterLang();
          }
        }
      }, {
        key: "setVerificationLanguage",
        value: function setVerificationLanguage() {
          if (localStorage.getItem('language')) {
            switch (localStorage.getItem('language')) {
              case 'hindi':
                this.verificationLang.verifyMobile = 'वैरिफाई मोबाइल नंबर';
                this.verificationLang.otpSent = 'OTP भेज दिया गया है';
                this.verificationLang.resendOtp = 'दुबारा भेजें ';
                this.verificationLang.verify = 'वैरिफाई';
                this.verificationLang.changeNumber = 'नंबर बदलें';
                break;

              case 'english':
                this.verificationLang.verifyMobile = 'Verify Mobile Number';
                this.verificationLang.otpSent = 'An OTP has been sent to ';
                this.verificationLang.resendOtp = 'Resend Otp in ';
                this.verificationLang.verify = 'Verify';
                this.verificationLang.changeNumber = 'Change Number';
                break;

              default:
                break;
            }
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(lang) {
          var _params,
              _this9 = this;

          console.log('changing language'); // tslint:disable-next-line: max-line-length

          return this.http.get(' https://partner.hansmatrimony.com/api/language', {
            params: (_params = {}, _defineProperty(_params, 'phone_number', localStorage.getItem('mobile_number')), _defineProperty(_params, 'language', lang), _params)
          }).subscribe(function (data) {
            console.log(data);
            _this9.currentLanguage = lang ? lang : 'hindi';
            localStorage.setItem('language', _this9.currentLanguage);

            _this9.setProfileLanguage();
          }, function (err) {
            console.log(err);

            _this9.ngxNotificationService.error('something went wrong, Try again later');
          });
        }
      }]);

      return LanguageService;
    }();

    LanguageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_4__["NgxNotificationService"]
      }];
    };

    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LanguageService);
    /***/
  },

  /***/
  "./src/app/new-home/home-drawer/home-drawer.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/new-home/home-drawer/home-drawer.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewHomeHomeDrawerHomeDrawerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n::ng-deep .mat-drawer{\r\n    background-color: white;\r\n}\r\nmain{\r\n    background-color: white;\r\n    height: 100%;\r\n}\r\n.profilePicSection{\r\n    background-color: #E5F3F8;\r\n    position: relative;\r\n    color: white;\r\n}\r\n.profileImage{\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    margin:auto;\r\n}\r\n.imageName{\r\n    width: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    background-image: linear-gradient(0deg, #95ADB7,transparent);\r\n}\r\n.drawerButtonSection{\r\n    width: 100%;\r\n     position: absolute;\r\n     bottom: 0px;\r\n     padding: 0px 20px 30px;\r\n     background-color: white;\r\n}\r\n.btnImage{\r\n    float: left;\r\n    margin-left: 20px;\r\n    width: 35px;\r\n    margin-right: 5px;\r\n}\r\n.drawerBtn{\r\n    padding: 0px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    margin-bottom: 1rem;\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.drawerBtn:focus{\r\n    box-shadow: none;\r\n}\r\n@media screen and (max-height: 720px){\r\n\r\n    .drawerButtonSection{\r\n        width: 100%; \r\n        position: relative;\r\n        padding: 0px 20px 30px;\r\n        background-color: white;\r\n    }\r\n    .btnImage{\r\n        float: left;\r\n        width: 35px;\r\n        margin-right: 5px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWhvbWUvaG9tZS1kcmF3ZXIvaG9tZS1kcmF3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDREQUE0RDtBQUNoRTtBQUVBO0lBQ0ksV0FBVztLQUNWLGtCQUFrQjtLQUNsQixXQUFXO0tBQ1gsc0JBQXNCO0tBQ3RCLHVCQUF1QjtBQUM1QjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWhvbWUvaG9tZS1kcmF3ZXIvaG9tZS1kcmF3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1hdC1kcmF3ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByb2ZpbGVQaWNTZWN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RjNGODtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucHJvZmlsZUltYWdle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59XHJcbi5pbWFnZU5hbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICM5NUFEQjcsdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4uZHJhd2VyQnV0dG9uU2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBib3R0b206IDBweDtcclxuICAgICBwYWRkaW5nOiAwcHggMjBweCAzMHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuSW1hZ2V7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmRyYXdlckJ0bntcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcbi5kcmF3ZXJCdG46Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzIwcHgpe1xyXG5cclxuICAgIC5kcmF3ZXJCdXR0b25TZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHggMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5idG5JbWFnZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-home/home-drawer/home-drawer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/new-home/home-drawer/home-drawer.component.ts ***!
    \***************************************************************/

  /*! exports provided: HomeDrawerComponent */

  /***/
  function srcAppNewHomeHomeDrawerHomeDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDrawerComponent", function () {
      return HomeDrawerComponent;
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


    var _new_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../new-home.service */
    "./src/app/new-home/new-home.service.ts");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");

    var HomeDrawerComponent = /*#__PURE__*/function () {
      function HomeDrawerComponent(homeService, languageService) {
        _classCallCheck(this, HomeDrawerComponent);

        this.homeService = homeService;
        this.languageService = languageService;
        this.langCheck = false;
      }

      _createClass(HomeDrawerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.languageService.getCurrentLanguage()); // lang check is used to set the selected language as user language once user logs in.
          // it will be only set if user changes the language from the current language to other language.

          if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'english');
            this.langCheck = true;
          }

          if (localStorage.getItem('language') === 'english') {
            this.langCheck = true;
          } else if (localStorage.getItem('language') === 'hindi') {
            this.langCheck = false;
          }

          this.languageService.setHomeLang(localStorage.getItem('language'));
        }
      }, {
        key: "langChanged",
        value: function langChanged(event) {
          console.log(event.checked);

          if (event.checked) {
            this.languageService.languageChangedFromMainStatus = true;
            localStorage.setItem('language', 'english');
            this.languageService.setHomeLang('english');
          } else {
            this.languageService.languageChangedFromMainStatus = true;
            localStorage.setItem('language', 'hindi');
            this.languageService.setHomeLang('hindi');
          }
        }
      }, {
        key: "sendWhatsAppLink",
        value: function sendWhatsAppLink() {
          this.facebookAnalytics();
          window.open('http://wa.me/918766217175?text=We%20are%20interested%20in%20Registering%20for%20Personalized%20Services');
        }
      }, {
        key: "logout",
        value: function logout() {
          var lang = localStorage.getItem('language');
          localStorage.clear();
          localStorage.setItem('language', lang);
          this.homeService.getDrawerInstance().toggle();
          window.FB.logout(function (response) {
            console.log(response); // Person is now logged out
          });
        }
      }, {
        key: "openBlog",
        value: function openBlog() {
          window.open('https://hansmatrimony.com/blog/?ngsw-bypass=true');
        }
      }, {
        key: "facebookAnalytics",
        value: function facebookAnalytics() {
          window.fbq('track', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number')
          });
          window.fbq('track', '692972151223870', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobiler_number')
          });
        }
      }]);

      return HomeDrawerComponent;
    }();

    HomeDrawerComponent.ctorParameters = function () {
      return [{
        type: _new_home_service__WEBPACK_IMPORTED_MODULE_2__["NewHomeService"]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    HomeDrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-drawer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-drawer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-drawer/home-drawer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-drawer.component.css */
      "./src/app/new-home/home-drawer/home-drawer.component.css"))["default"]]
    })], HomeDrawerComponent);
    /***/
  },

  /***/
  "./src/app/new-home/home-main/home-main.component.css":
  /*!************************************************************!*\
    !*** ./src/app/new-home/home-main/home-main.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewHomeHomeMainHomeMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.row{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n#container1{\r\n    width: 100%;height: 100%;\r\n    position: relative;\r\n    margin-top: 50px;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n\r\n}\r\n.b-r{\r\n    border-right: 1px solid white;\r\n}\r\n.jumbotron{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.mainBackImage {\r\n    height: 100%;width: 100%;-o-object-fit:cover;object-fit:cover;\r\n    background: linear-gradient(0deg, rgba(255,255,255,0) 49%, rgba(12, 154, 242, 0.966) 86%),url(https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/cover_hans.jpg) no-repeat center;\r\n    /* background: url(../../../assets/cover_hans.png) no-repeat center; */\r\n    background-size: cover;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    -webkit-clip-path: ellipse(85% 100% at 50% 0%);\r\n            clip-path: ellipse(85% 100% at 50% 0%);\r\n    z-index:0;\r\nbox-shadow: 0px 14px 12px 1px rgba(0,0,0,0.75);\r\n}\r\n.mainBack{\r\n    padding:3% 0 6% 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index:0;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    /* margin-top:5%; */\r\n}\r\n.rowM {\r\n    position:relative;\r\n    width:95vw;\r\n    display: flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 0 2%;\r\n    margin:auto;\r\n}\r\n.column1 {\r\n    flex: 1 1 60%;\r\n    padding:1% 2% 1% 2%;\r\n}\r\n.details{\r\n    padding-top:3rem;\r\n    width:100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #eaecee;\r\n    border-radius:20px;\r\n    color:black;\r\n}\r\n.classic{\r\n    width:32%!important;\r\n    margin: 0 1%;\r\n}\r\n.imageOneGradient{\r\n    width: 100%;\r\n    height: 30%;\r\n    position: absolute;\r\n    background-image: linear-gradient(0deg,transparent , #CA58FD);\r\n    /* background-image: linear-gradient(90deg, #4FB0E5, #566EE8); */\r\n}\r\n.imageOne{\r\n    position: relative;\r\n}\r\n.imageOneGradient2{\r\n    width: 100%;\r\n    height: 30%;\r\n    position: absolute;\r\n    /* background-image: linear-gradient(180deg,transparent , #0C9BF2); */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n}\r\n.infoRow{\r\n    position:relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content:center ;\r\n    margin-top:5%;\r\n    width:90%!important;\r\n    /* padding:5px; */\r\n  }\r\nh6{\r\n      float: left;\r\n  }\r\n#viewButton{\r\n    background: #34b7f1;\r\n    color: white;\r\n    font-size:1rem; \r\n    padding:5px 70px;\r\n    box-shadow:12px 12px 14px rgba(0, 0, 0, 0.2);\r\n    margin:4% 0;\r\n  }\r\n.contentArea{\r\n    display:flex;\r\n    flex-wrap:wrap;\r\n    justify-content: center;\r\n  }\r\n.column{\r\n      text-align: center;\r\n    height:-webkit-fit-content;\r\n    height:-moz-fit-content;\r\n    height:fit-content;\r\n    background:transparent;\r\n    border-radius:20px;\r\n    width:100%!important;\r\n    flex: 1 1;\r\n    margin:11px 13px 0px 13px;\r\n    padding:0 10px 0 0;\r\n    /* box-shadow: 0px 3px 3px 2px #00000049; */\r\n  }\r\n.form-control{\r\n      border:1px solid rgba(141, 138, 138, 0.514);\r\n  }\r\n.special{\r\n    display:flex;\r\n    width:100%;\r\n}\r\np{\r\n      margin:auto;\r\n  }\r\n.columnar{\r\n      text-align:center;\r\n    background:transparent;\r\n    width:0%!important;\r\n    flex: 1 1;\r\n    margin:0px;\r\n    /* padding-left:5%; */\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content:center;\r\n  }\r\n.row{\r\n      text-align:center;\r\n      margin-bottom:4%;\r\n  }\r\n.registerBtn{\r\n    color: white;\r\n    padding: 10px 65px;\r\n    border-radius: 100px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background-color: #D313AE;\r\n    z-index:1;\r\n}\r\n.rishteBtn{\r\n    color: white;\r\n    padding: 10px 50px;\r\n    border-radius: 100px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    background-color: #D313AE;\r\n    z-index:1;\r\n}\r\n.imageTwoGradient{\r\n    width: 100%;\r\n    height: 60%;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    flex-direction: row;\r\n    padding-left: 30px;\r\n    align-items: center;\r\n    scroll-behavior: smooth;\r\n    overflow-x: auto;\r\n    /* background-image: linear-gradient(0deg,#5A2090 , #0090E6); */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    flex-flow: row;\r\n    justify-content: center;\r\n}\r\n.featureCard{\r\n    width: 30%;\r\n    height: 50%;\r\n    margin-left: 20px;\r\n    border-radius: 10px;\r\n    overflow: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: space-evenly;\r\n}\r\n.headingThree {\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    justify-content: center;\r\n}\r\n/* .headingThree {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 20px 10% 20px 20%;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    justify-content: space-between;\r\n} */\r\n.infoGraphic{\r\n    width: 360px;\r\n    position: absolute;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n    /* height: 550px;\r\n    position: absolute;\r\n    bottom: -100px;\r\n    margin-left: -40px; */\r\n}\r\n.carousel-div{\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n}\r\n.temple-card{\r\n    height:45vh;\r\n    overflow:hidden;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    width:100%;\r\n    /* padding:2% 4%!important; */\r\n}\r\n.temple-name{\r\n    color: white;\r\n    font-size: 1.3rem;\r\n    font-weight:600;\r\n    margin: 0 0 3% 0;\r\n}\r\n.text-shadow{\r\n    text-shadow: 0px 0px 7px #ffffff;\r\n}\r\n.imageThreeGradient{\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 20px 0 20px 20%;\r\n    /* background-image: linear-gradient(0deg,#AD018C , #5C1F90); */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n\r\n}\r\n.innerHoriz{\r\n    width: 100%;\r\n    height: 270px;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    flex-direction: row;\r\n    overflow: auto;\r\n    scroll-behavior: smooth;\r\n    flex-flow: row;\r\n    justify-content: center;\r\n}\r\n.innerThree{\r\n    width: 20%;\r\n    height: 100%;\r\n    margin-left: 20px;\r\n    overflow: hidden;\r\n}\r\n.btnRightPad {\r\n    padding-right: 20%;\r\n}\r\n.featureCard2{\r\n    width: 80%;\r\n    height: 50%!important;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.feature2Img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.button3{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#container4{\r\n    color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 20px 0px;\r\n    /* background-image: linear-gradient(0deg, #390572,#860271); */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    overflow: hidden;\r\n}\r\n.feature4{\r\n    width: 100%;\r\n    height:22rem;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    overflow-x: hidden;\r\n    flex-flow: row;\r\n    margin-left: 20px;\r\n    justify-content: center;\r\n}\r\n.appDownload{\r\n    width:87%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    border:2px solid #5552ff;\r\n    border-radius:10px;\r\n    background-color: white;\r\n    color:#5552ff;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    margin:0 4% 8% 4%;\r\n    cursor: pointer;\r\n}\r\n.appDownload2{\r\n    width:80%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    /* height:90px;\r\n    width: 250px; */\r\n    border:2px solid #ffffff;\r\n    border-radius:10px;\r\n    background-color:transparent;\r\n    color:#ffff ff;\r\n    font-weight:bold;\r\n    font-size:1rem;\r\n    margin:0 auto 8% auto;\r\n    cursor: pointer;\r\n}\r\n.newApp{\r\n    background:#ffffff!important;\r\n}\r\n.col-4{\r\n    background:#5552ff\r\n}\r\n.SpCard{\r\n    background:white;\r\n    border-radius:15px;\r\n    width:98%;\r\n    height:180px;\r\n    position: relative;\r\n    margin-top:10%!important;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.special-font{\r\n    font-family: 'Poppins';\r\n    font-size:1.5rem!important;\r\n}\r\n.SpCardApp{\r\n    position: relative;\r\n    background:white;\r\n    border-radius:15px;\r\n    width:85%;\r\n    height:40vh;\r\n    margin-top:10%!important;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.SpCardApp #image{\r\n    position:absolute;\r\n    width:80%;\r\n    top:-6rem;\r\n}\r\n.list{\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    padding:1% 0 1% 0;\r\n}\r\n.testimonial{\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 75vh;\r\n    position: relative;\r\n     padding-top:4rem;\r\n     width: 60%;\r\n     margin: auto;\r\n}\r\n.testimonial-names{\r\n    width: 100%;\r\n    font-weight: 600;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top:4.5rem!important;\r\n}\r\n.testimonial-text{\r\n    font-style: italic;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.testimonialImage{\r\n    position:absolute;\r\n    top:-2.5rem;\r\n    height:8rem!important;\r\n    width:8rem!important;\r\n    border-radius: 50%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    margin:auto;\r\nbox-shadow: 0px 9px 23px 2px rgba(0,0,0,0.75);\r\n}\r\n.testimonialGradient{\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    height:450px;\r\n    background:white;\r\n    width: 100%;\r\n    padding: 5px 10px 10px 10px;\r\n    border-radius: 20px;\r\n    color:black;\r\n    /* background-image: linear-gradient(0deg,#248CC6 ,transparent) ; */\r\n    /* background-image: linear-gradient(90deg, #4FB0E5, #566EE8); */\r\n    font-weight: bold;\r\n    word-break: break-word;\r\n    /* text-shadow: 2px 1px black; */\r\n}\r\n#container5{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 30px 30% 20px;\r\n    /* background-image: linear-gradient(0deg, #A2C2E8,white) */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n}\r\n#playBtn {\r\n    position: relative; margin-top: 10px;\r\n    border-radius: 10px;border: 1px solid #D313AE;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-evenly;\r\n        height: 40px;\r\n}\r\nfooter{\r\n    color: #ffffff;\r\n    background-color: #06033d;\r\n    padding: 30px 20px;\r\n}\r\n#footerDiv1{\r\n    display: flex;\r\n     flex-direction: row;\r\n     margin-top: 30px;\r\n     justify-content: space-between;\r\n}\r\n#footerDiv2{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n\r\n}\r\n#iconSet{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 30%;\r\n    align-items: center;\r\n}\r\nul{\r\n    list-style-type: none;\r\n    line-height: 2;\r\n    padding-left: 20px;\r\n}\r\nli{\r\n    font-size: 14px;\r\n}\r\n#bottomText {\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n@media (min-width:1024px){\r\n    .contentArea{\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n      }\r\n}\r\n@media (max-width: 1024px){\r\n    .featureCard{\r\n        width: 70%;\r\n        height: 50%;\r\n        margin-left: 20px;\r\n        border-radius: 10px;\r\n        overflow: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: center;\r\n        justify-content: space-evenly;\r\n    }\r\n    .imageTwoGradient{\r\n        width: 100%;\r\n        height: 60%;\r\n        position: relative;\r\n        display: -webkit-box;\r\n        flex-direction: row;\r\n        padding-left: 30px;\r\n        align-items: center;\r\n        scroll-behavior: smooth;\r\n        overflow-x: auto;\r\n        /* background-image: linear-gradient(0deg,#5A2090 , #0090E6); */\r\n        background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n        flex-flow: row;\r\n    }\r\n\r\n    .innerThree{\r\n        width: 50%;\r\n        height: 100%;\r\n        margin-left: 20px;\r\n        overflow: hidden;\r\n    }\r\n    .innerHoriz{\r\n        width: 100%;\r\n        height: 270px;\r\n        padding-left: 20px;\r\n        position: relative;\r\n        display: -webkit-box;\r\n        flex-direction: row;\r\n        overflow: auto;\r\n        scroll-behavior: smooth;\r\n        flex-flow: row;\r\n        justify-content: center;\r\n    }\r\n    .imageThreeGradient{\r\n        padding: 0px;\r\n\r\n    }\r\n    .btnRightPad {\r\n        padding-right: 0px;\r\n    }\r\n    /* .featureCard2{\r\n        width: 100%;\r\n        height: 60%;\r\n        border-radius: 10px;\r\n        overflow: auto;\r\n        padding: 0px;\r\n    } */\r\n    .feature4{\r\n        width: 100%;\r\n        height:22rem;\r\n        position: relative;\r\n        display: -webkit-box;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        scroll-behavior: smooth;\r\n        overflow-x: auto;\r\n        flex-flow: row;\r\n        margin-left: 20px;\r\n    }\r\n    #container5{\r\n        width: 100%;\r\n        text-align: center;\r\n        padding: 30px 50px 20px;\r\n        /* background-image: linear-gradient(0deg, #A2C2E8,white) */\r\n        background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    }\r\n    #footerDiv1{\r\n        display: flex; flex-direction: row;margin-top: 30px;\r\n    }\r\n    #footerDiv2{\r\n        display: flex;flex-direction: column;\r\n    }\r\n\r\n    #iconSet{\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    #bottomText {\r\n        font-size: 12px;\r\n        margin-left: 5px;\r\n        margin-right: 5px;\r\n    }\r\n    /* .testimonialGradient{\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n        padding: 10px 0px 20px 10px;\r\n        border-radius: 10px;\r\n        text-align: start;\r\n        background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n        font-weight: bold;\r\n        word-break: break-word;\r\n        text-shadow: 1px 1px black;\r\n    } */\r\n}\r\n@media (max-width: 350px){\r\n    #container1{\r\n        width: 100%;height: 100%;\r\n        position: relative;\r\n        margin-top: 70px;\r\n    }\r\n    .featureCard{\r\n        width: 70%;\r\n        height: 50%;\r\n        margin-left: 20px;\r\n        border-radius: 10px;\r\n        overflow: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: center;\r\n        justify-content: space-evenly;\r\n    }\r\n}\r\n@media (max-width: 575px){\r\n    .featureCard{\r\n        width: 70%;\r\n        height: 50%;\r\n        margin-left: 20px;\r\n        border-radius: 10px;\r\n        overflow: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-content: center;\r\n        justify-content: space-evenly;\r\n    }\r\n    .imageTwoGradient{\r\n    width: 100%;\r\n    height: 60%;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    flex-direction: row;\r\n    padding-left: 30px;\r\n    align-items: center;\r\n    scroll-behavior: smooth;\r\n    overflow-x: auto;\r\n    /* background-image: linear-gradient(0deg,#5A2090 , #0090E6); */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    flex-flow: row;\r\n}\r\n/* .headingThree {\r\n    display: flex;\r\n    flex-direction: row;padding: 20px 20px 20px 40px;\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n    justify-content: space-between;\r\n} */\r\n.innerThree{\r\n    width: 50%;\r\n    height: 100%;\r\n    margin-left: 20px;\r\n    overflow: hidden;\r\n}\r\n/* .featureCard2{\r\n    width: 100%;\r\n    height: 60%;\r\n    border-radius: 10px;\r\n    overflow: auto;\r\n    padding: 0px;\r\n} */\r\n\r\n.feature4{\r\n    width: 100%;\r\n    height:22rem;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    scroll-behavior: smooth;\r\n    overflow-x: auto;\r\n    flex-flow: row;\r\n    margin-left: 20px;\r\n}\r\n#container5{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 30px 50px 20px;\r\n    /* background-image: linear-gradient(0deg, #A2C2E8,white) */\r\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\r\n}\r\n\r\n#footerDiv1{\r\n    display: flex; flex-direction: row;margin-top: 30px;\r\n}\r\n#footerDiv2{\r\n    display: flex;flex-direction: column;\r\n}\r\n#iconSet{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#bottomText {\r\n    font-size: 12px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n}\r\n@media (min-width:1024px){\r\n    .SpCardApp{\r\n        position: relative;\r\n        background:white;\r\n        border-radius:15px;\r\n        width:33%;\r\n        height:38vh;\r\n        margin-top:10%!important;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .SpCardApp #image{\r\n        position:absolute;\r\n        width:80%;\r\n        top:-12rem!important;\r\n    }\r\n    .rowM {\r\n        position: relative;\r\n        width:27vw;\r\n        display: flex;\r\n        flex-direction:column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-wrap: wrap;\r\n        padding: 0 2%;\r\n        margin:auto;\r\n    } \r\n    .appDownload{\r\n        width:52%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        border:2px solid #5552ff;\r\n        border-radius:10px;\r\n        background-color: white;\r\n        color:#5552ff;\r\n        font-weight:bold;\r\n        font-size:1rem;\r\n        margin:0 4% 8% 4%;\r\n        cursor: pointer;\r\n    }\r\n    .appDownload2{\r\n        \r\n        width:47%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        /* height:90px;\r\n        width: 250px; */\r\n        border:2px solid #ffffff;\r\n        border-radius:10px;\r\n        background-color:transparent;\r\n        color:#ffff ff;\r\n        font-weight:bold;\r\n        font-size:1rem;\r\n        margin:0 auto 8% auto;\r\n        cursor: pointer;\r\n    }\r\n    .special-font{\r\n        font-family: 'Poppins';\r\n        font-size:2rem!important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWhvbWUvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVcsQ0FBQyxZQUFZO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMERBQTBEOztBQUU5RDtBQUdBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZLENBQUMsV0FBVyxDQUFDLG1CQUFnQixDQUFoQixnQkFBZ0I7SUFDekMsMExBQTBMO0lBQzFMLHNFQUFzRTtJQUN0RSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxTQUFTO0FBR2IsOENBQThDO0FBQzlDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCwwREFBMEQ7SUFDMUQsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0QsZ0VBQWdFO0FBQ3BFO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFFQUFxRTtJQUNyRSwwREFBMEQ7QUFDOUQ7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksV0FBVztFQUNmO0FBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLFdBQVc7RUFDYjtBQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCx1QkFBdUI7RUFDekI7QUFDQTtNQUNJLGtCQUFrQjtJQUNwQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7RUFDN0M7QUFDQTtNQUNJLDJDQUEyQztFQUMvQztBQUNBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNFO01BQ0ksV0FBVztFQUNmO0FBQ0E7TUFDSSxpQkFBaUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFDQTtNQUNJLGlCQUFpQjtNQUNqQixnQkFBZ0I7RUFDcEI7QUFDRjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsU0FBUztBQUNiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFHcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUVsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiwrREFBK0Q7SUFDL0QsMERBQTBEO0lBQzFELGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBEQUEwRDtJQUMxRCx1QkFBdUI7QUFDM0I7QUFDQTs7Ozs7O0dBTUc7QUFDSDtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQjs7O3lCQUdxQjtBQUN6QjtBQUNBO0lBQ0ksMERBQTBEO0FBQzlEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUdiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLCtEQUErRDtJQUMvRCwwREFBMEQ7O0FBRTlEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFHcEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw4REFBOEQ7SUFDOUQsMERBQTBEO0lBQzFELGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBR3BCLG1CQUFtQjtJQUVuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7bUJBQ2U7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7QUFDQTtJQUNJLDBEQUEwRDtJQUMxRCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLGdCQUFnQjtLQUNoQixVQUFVO0tBQ1YsWUFBWTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsV0FBVztBQUdmLDZDQUE2QztBQUM3QztBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwyREFBMkQ7SUFDM0QsMERBQTBEO0FBQzlEO0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsbUJBQW1CLENBQUMseUJBQXlCO1FBQ3pDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFlBQVk7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0tBQ1osbUJBQW1CO0tBQ25CLGdCQUFnQjtLQUNoQiw4QkFBOEI7QUFDbkM7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCOztBQUVqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiw2QkFBNkI7TUFDL0I7QUFDTjtBQUVBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBR3BCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFFbEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsK0RBQStEO1FBQy9ELDBEQUEwRDtRQUMxRCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBR3BCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7O0lBRWhCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTs7Ozs7O09BTUc7SUFDSDtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUdwQixtQkFBbUI7UUFFbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsMkRBQTJEO1FBQzNELDBEQUEwRDtJQUM5RDtJQUNBO1FBQ0ksYUFBYSxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQjtJQUN2RDtJQUNBO1FBQ0ksYUFBYSxDQUFDLHNCQUFzQjtJQUN4Qzs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0lBQ0E7Ozs7Ozs7Ozs7O09BV0c7QUFDUDtBQUNBO0lBQ0k7UUFDSSxXQUFXLENBQUMsWUFBWTtRQUN4QixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLDZCQUE2QjtJQUNqQztBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDO0lBQ0E7SUFDQSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFHcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUVsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQiwrREFBK0Q7SUFDL0QsMERBQTBEO0lBQzFELGNBQWM7QUFDbEI7QUFDQTs7Ozs7R0FLRztBQUNIO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7OztHQU1HOztBQUVIO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBR3BCLG1CQUFtQjtJQUVuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyREFBMkQ7SUFDM0QsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksYUFBYSxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQjtBQUN2RDtBQUNBO0lBQ0ksYUFBYSxDQUFDLHNCQUFzQjtBQUN4QztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFdBQVc7UUFDWCx3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsU0FBUztRQUNULG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGFBQWE7UUFDYixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7O1FBRUksU0FBUztRQUNULGFBQWE7UUFDYixtQkFBbUI7UUFDbkI7dUJBQ2U7UUFDZix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1QixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLHdCQUF3QjtJQUM1QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWhvbWUvaG9tZS1tYWluL2hvbWUtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yb3d7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4jY29udGFpbmVyMXtcclxuICAgIHdpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpO1xyXG5cclxufVxyXG5cclxuXHJcbi5iLXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uanVtYm90cm9ue1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1haW5CYWNrSW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAxMDAlO3dpZHRoOiAxMDAlO29iamVjdC1maXQ6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSA0OSUsIHJnYmEoMTIsIDE1NCwgMjQyLCAwLjk2NikgODYlKSx1cmwoaHR0cHM6Ly9oYW5zbWF0cmltb255LnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS93ZWJJbWFnZXMvY292ZXJfaGFucy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2NvdmVyX2hhbnMucG5nKSBuby1yZXBlYXQgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoODUlIDEwMCUgYXQgNTAlIDAlKTtcclxuICAgIHotaW5kZXg6MDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE0cHggMTJweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggMTRweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5ib3gtc2hhZG93OiAwcHggMTRweCAxMnB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5tYWluQmFja3tcclxuICAgIHBhZGRpbmc6MyUgMCA2JSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OjA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpO1xyXG4gICAgLyogbWFyZ2luLXRvcDo1JTsgKi9cclxufVxyXG4ucm93TSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHdpZHRoOjk1dnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAyJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59ICBcclxuICAuY29sdW1uMSB7XHJcbiAgICBmbGV4OiAxIDEgNjAlO1xyXG4gICAgcGFkZGluZzoxJSAyJSAxJSAyJTtcclxufVxyXG4uZGV0YWlsc3tcclxuICAgIHBhZGRpbmctdG9wOjNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlY2VlO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLmNsYXNzaWN7XHJcbiAgICB3aWR0aDozMiUhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG59XHJcbi5pbWFnZU9uZUdyYWRpZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLHRyYW5zcGFyZW50ICwgI0NBNThGRCk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpOyAqL1xyXG59XHJcbi5pbWFnZU9uZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW1hZ2VPbmVHcmFkaWVudDJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZyx0cmFuc3BhcmVudCAsICMwQzlCRjIpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxufVxyXG4uaW5mb1Jvd3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXIgO1xyXG4gICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIHdpZHRoOjkwJSFpbXBvcnRhbnQ7XHJcbiAgICAvKiBwYWRkaW5nOjVweDsgKi9cclxuICB9XHJcbiAgaDZ7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAjdmlld0J1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICMzNGI3ZjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6MXJlbTsgXHJcbiAgICBwYWRkaW5nOjVweCA3MHB4O1xyXG4gICAgYm94LXNoYWRvdzoxMnB4IDEycHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW46NCUgMDtcclxuICB9XHJcbiAgLmNvbnRlbnRBcmVhe1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNvbHVtbntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgbWFyZ2luOjExcHggMTNweCAwcHggMTNweDtcclxuICAgIHBhZGRpbmc6MCAxMHB4IDAgMDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDJweCAjMDAwMDAwNDk7ICovXHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgxNDEsIDEzOCwgMTM4LCAwLjUxNCk7XHJcbiAgfVxyXG4gIC5zcGVjaWFse1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4gIHB7XHJcbiAgICAgIG1hcmdpbjphdXRvO1xyXG4gIH1cclxuICAuY29sdW1uYXJ7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOjAlIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6NSU7ICovXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NCU7XHJcbiAgfVxyXG4ucmVnaXN0ZXJCdG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDY1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzMTNBRTtcclxuICAgIHotaW5kZXg6MTtcclxufVxyXG4ucmlzaHRlQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMzEzQUU7XHJcbiAgICB6LWluZGV4OjE7XHJcbn1cclxuLmltYWdlVHdvR3JhZGllbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCM1QTIwOTAgLCAjMDA5MEU2KTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRGQjBFNSwgIzU2NkVFOCk7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mZWF0dXJlQ2FyZHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uaGVhZGluZ1RocmVlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi8qIC5oZWFkaW5nVGhyZWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwJSAyMHB4IDIwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRGQjBFNSwgIzU2NkVFOCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0gKi9cclxuLmluZm9HcmFwaGlje1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIC8qIGhlaWdodDogNTUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0xMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDsgKi9cclxufVxyXG4uY2Fyb3VzZWwtZGl2e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxufVxyXG4udGVtcGxlLWNhcmR7XHJcbiAgICBoZWlnaHQ6NDV2aDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC8qIHBhZGRpbmc6MiUgNCUhaW1wb3J0YW50OyAqL1xyXG59XHJcbi50ZW1wbGUtbmFtZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMyUgMDtcclxufVxyXG4udGV4dC1zaGFkb3d7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA3cHggI2ZmZmZmZjtcclxufVxyXG4uaW1hZ2VUaHJlZUdyYWRpZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAyMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywjQUQwMThDICwgIzVDMUY5MCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpO1xyXG5cclxufVxyXG4uaW5uZXJIb3JpentcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmlubmVyVGhyZWV7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5idG5SaWdodFBhZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbn1cclxuLmZlYXR1cmVDYXJkMntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZmVhdHVyZTJJbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uYnV0dG9uM3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNjb250YWluZXI0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMzkwNTcyLCM4NjAyNzEpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmZlYXR1cmU0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MjJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5hcHBEb3dubG9hZHtcclxuICAgIHdpZHRoOjg3JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjNTU1MmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjojNTU1MmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgbWFyZ2luOjAgNCUgOCUgNCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFwcERvd25sb2FkMntcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLyogaGVpZ2h0OjkwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7ICovXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6I2ZmZmYgZmY7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgICBtYXJnaW46MCBhdXRvIDglIGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5ld0FwcHtcclxuICAgIGJhY2tncm91bmQ6I2ZmZmZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbC00e1xyXG4gICAgYmFja2dyb3VuZDojNTU1MmZmXHJcbn1cclxuLlNwQ2FyZHtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDo5OCU7XHJcbiAgICBoZWlnaHQ6MTgwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOjEwJSFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zcGVjaWFsLWZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgZm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLlNwQ2FyZEFwcHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgICBoZWlnaHQ6NDB2aDtcclxuICAgIG1hcmdpbi10b3A6MTAlIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5TcENhcmRBcHAgI2ltYWdle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDo4MCU7XHJcbiAgICB0b3A6LTZyZW07XHJcbn1cclxuLmxpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpO1xyXG4gICAgcGFkZGluZzoxJSAwIDElIDA7XHJcbn1cclxuLnRlc3RpbW9uaWFse1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3NXZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHBhZGRpbmctdG9wOjRyZW07XHJcbiAgICAgd2lkdGg6IDYwJTtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRlc3RpbW9uaWFsLW5hbWVze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjQuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLnRlc3RpbW9uaWFsLXRleHR7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGVzdGltb25pYWxJbWFnZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi0yLjVyZW07XHJcbiAgICBoZWlnaHQ6OHJlbSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDo4cmVtIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA5cHggMjNweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcclxuLW1vei1ib3gtc2hhZG93OiAwcHggOXB4IDIzcHggMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbmJveC1zaGFkb3c6IDBweCA5cHggMjNweCAycHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4udGVzdGltb25pYWxHcmFkaWVudHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDo0NTBweDtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCMyNDhDQzYgLHRyYW5zcGFyZW50KSA7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpOyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLyogdGV4dC1zaGFkb3c6IDJweCAxcHggYmxhY2s7ICovXHJcbn1cclxuI2NvbnRhaW5lcjV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHggMzAlIDIwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI0EyQzJFOCx3aGl0ZSkgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRGQjBFNSwgIzU2NkVFOCk7XHJcbn1cclxuXHJcbiNwbGF5QnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7Ym9yZGVyOiAxcHggc29saWQgI0QzMTNBRTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5mb290ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNjAzM2Q7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbn1cclxuXHJcbiNmb290ZXJEaXYxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiNmb290ZXJEaXYye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHJcbn1cclxuI2ljb25TZXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbmxpe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiNib3R0b21UZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoxMDI0cHgpe1xyXG4gICAgLmNvbnRlbnRBcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgLmZlYXR1cmVDYXJke1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgfVxyXG4gICAgLmltYWdlVHdvR3JhZGllbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywjNUEyMDkwICwgIzAwOTBFNik7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIH1cclxuXHJcbiAgICAuaW5uZXJUaHJlZXtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmlubmVySG9yaXp7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmltYWdlVGhyZWVHcmFkaWVudHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmJ0blJpZ2h0UGFkIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAvKiAuZmVhdHVyZUNhcmQye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgLmZlYXR1cmU0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDoyMnJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAjY29udGFpbmVyNXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA1MHB4IDIwcHg7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNBMkMyRTgsd2hpdGUpICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgIH1cclxuICAgICNmb290ZXJEaXYxe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7bWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgICNmb290ZXJEaXYye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAjaWNvblNldHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAjYm90dG9tVGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAvKiAudGVzdGltb25pYWxHcmFkaWVudHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMjBweCAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IGJsYWNrO1xyXG4gICAgfSAqL1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgICAjY29udGFpbmVyMXtcclxuICAgICAgICB3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZUNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAuZmVhdHVyZUNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VUd29HcmFkaWVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIzVBMjA5MCAsICMwMDkwRTYpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG59XHJcbi8qIC5oZWFkaW5nVGhyZWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7cGFkZGluZzogMjBweCAyMHB4IDIwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzRGQjBFNSwgIzU2NkVFOCk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0gKi9cclxuLmlubmVyVGhyZWV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qIC5mZWF0dXJlQ2FyZDJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59ICovXHJcblxyXG4uZmVhdHVyZTR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoyMnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbiNjb250YWluZXI1e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHggMjBweDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjQTJDMkU4LHdoaXRlKSAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcclxufVxyXG5cclxuI2Zvb3RlckRpdjF7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93O21hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuI2Zvb3RlckRpdjJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuI2ljb25TZXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jYm90dG9tVGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MTAyNHB4KXtcclxuICAgIC5TcENhcmRBcHB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIHdpZHRoOjMzJTtcclxuICAgICAgICBoZWlnaHQ6Mzh2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuU3BDYXJkQXBwICNpbWFnZXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgdG9wOi0xMnJlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucm93TSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOjI3dnc7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogMCAyJTtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgIH0gXHJcbiAgICAuYXBwRG93bmxvYWR7XHJcbiAgICAgICAgd2lkdGg6NTIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkICM1NTUyZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiM1NTUyZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MXJlbTtcclxuICAgICAgICBtYXJnaW46MCA0JSA4JSA0JTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYXBwRG93bmxvYWQye1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOjQ3JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgLyogaGVpZ2h0OjkwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4OyAqL1xyXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjojZmZmZiBmZjtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG8gOCUgYXV0bztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc3BlY2lhbC1mb250e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICAgICAgZm9udC1zaXplOjJyZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-home/home-main/home-main.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/new-home/home-main/home-main.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeMainComponent */

  /***/
  function srcAppNewHomeHomeMainHomeMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeMainComponent", function () {
      return HomeMainComponent;
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


    var _new_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../new-home.service */
    "./src/app/new-home/new-home.service.ts");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/find-open-history-profile.service */
    "./src/app/find-open-history-profile.service.ts");

    var HomeMainComponent = /*#__PURE__*/function () {
      function HomeMainComponent(homeService, languageService, form_builder, http, router, itemService) {
        _classCallCheck(this, HomeMainComponent);

        this.homeService = homeService;
        this.languageService = languageService;
        this.form_builder = form_builder;
        this.http = http;
        this.router = router;
        this.itemService = itemService;
        this.customOptions = {
          loop: true,
          autoplay: true,
          center: true,
          dots: true,
          autoWidth: true,
          // merge: true,
          // mergeFit: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        };
        this.autoComplete = {
          strictBounds: false,
          type: 'geocode',
          fields: ['name']
        };
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']; // tslint:disable-next-line: max-line-length

        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002'];
        this.currentGender = "Boy's";
        this.BoyDetailsFilled = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.BoyDetailsFilled$ = this.BoyDetailsFilled.asObservable();
        this.kundaliForm = this.form_builder.group({
          BoyBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          BoyBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          BoyBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          BoyBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          BoyBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          BoyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          GirlName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.optionsForm = this.form_builder.group({
          Looking: [null],
          For: [null]
        });
      }

      _createClass(HomeMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('gender')) {
            var gender = localStorage.getItem('gender');

            if (gender === "Female") {
              this.currentGender = "Girl's";
              this.optionsForm.patchValue({
                Looking: 'Groom'
              });
            } else {
              this.currentGender = "Boy's";
              this.optionsForm.patchValue({
                Looking: 'Bride'
              });
            }
          }
        }
      }, {
        key: "goToCompatibility",
        value: function goToCompatibility() {
          if (this.optionsForm.value.Looking) {
            this.itemService.compatibilityGender = this.optionsForm.value.Looking === 'Groom' ? 'Female' : 'Male';
          }

          if (this.optionsForm.value.For) {
            this.itemService.compatibilityLookingFor = this.optionsForm.value.For;
          }

          this.router.navigateByUrl('/fourReg');
        }
      }, {
        key: "placeChanged",
        value: function placeChanged(str) {
          var _this10 = this;

          var city = document.querySelector('#' + str);
          setTimeout(function () {
            console.log(city.value);

            if (str === 'GirlBirthPlace') {
              _this10.kundaliForm.patchValue({
                GirlBirthPlace: city.value
              });
            } else {
              _this10.kundaliForm.patchValue({
                BoyBirthPlace: city.value
              });
            }
          }, 500);
        }
      }, {
        key: "detailsFilled",
        value: function detailsFilled() {
          if (this.currentGender === "Girl's") this.currentGender = "Boy's";else this.currentGender = "Girl's";
          this.BoyDetailsFilled.next(!this.BoyDetailsFilled.value);
        }
      }, {
        key: "openPlaystore",
        value: function openPlaystore() {
          window.open('https://play.google.com/store/apps/details?id=com.twango.me');
        }
      }, {
        key: "selected",
        value: function selected(str) {
          if (str === 'looking') {
            var value = this.optionsForm.value.Looking;

            if (value === 'Groom') {
              this.createProfile = ['Myself', 'Daughter', 'Sister', 'Other'];
            } else {
              this.createProfile = ['Myself', 'Son', 'Brother', 'Other'];
            }
          } else {
            var _value = this.optionsForm.value.For;

            if (['Daughter', 'Sister'].includes(_value)) {
              this.optionsForm.patchValue({
                Looking: 'Groom'
              });
            } else if (['Son', 'Brother'].includes(_value)) {
              this.optionsForm.patchValue({
                Looking: 'Bride'
              });
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          console.log(this.kundaliForm.value);

          if (this.kundaliForm.valid) {
            var tosend = new FormData();
            var boyDate = this.kundaliForm.get('BoyBirthDate').value + this.kundaliForm.get('BoyBirthMonth').value + this.kundaliForm.get('BoyBirthYear').value;
            var girlDate = this.kundaliForm.get('GirlBirthDate').value + this.kundaliForm.get('GirlBirthMonth').value + this.kundaliForm.get('GirlBirthYear').value;
            tosend.append('boy_birth_date', boyDate);
            tosend.append('boy_birth_time', this.kundaliForm.value.BoyBirthTime);
            tosend.append('boy_birth_place', this.kundaliForm.value.BoyBirthPlace);
            tosend.append('girl_birth_date', girlDate);
            tosend.append('girl_birth_time', this.kundaliForm.value.GirlBirthTime);
            tosend.append('girl_birth_place', this.kundaliForm.value.GirlBirthPlace);
            tosend.append('boy_name', this.kundaliForm.value.BoyName);
            tosend.append('girl_name', this.kundaliForm.value.GirlName);
            this.http.post('https://partner.hansmatrimony.com/api/getKundali', tosend).subscribe(function (response) {
              console.log(response);

              if (response.point) {
                _this11.homeService.points = response.point;
                _this11.homeService.HTMLResponse = response.full;
                _this11.homeService.HTMLResponse = _this11.homeService.HTMLResponse.split('ul').join('tr');
                _this11.homeService.HTMLResponse = _this11.homeService.HTMLResponse.split('li').join('td');
                _this11.homeService.kundaliForm = _this11.kundaliForm;
                console.log(_this11.homeService.HTMLResponse);

                _this11.router.navigateByUrl('/kundaliMatching');
              }
            });
          } else {
            console.log('form invalid');
          }
        }
      }]);

      return HomeMainComponent;
    }();

    HomeMainComponent.ctorParameters = function () {
      return [{
        type: _new_home_service__WEBPACK_IMPORTED_MODULE_2__["NewHomeService"]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_8__["FindOpenHistoryProfileService"]
      }];
    };

    HomeMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/home-main/home-main.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-main.component.css */
      "./src/app/new-home/home-main/home-main.component.css"))["default"]]
    })], HomeMainComponent);
    /***/
  },

  /***/
  "./src/app/new-home/kundali/kundali.component.css":
  /*!********************************************************!*\
    !*** ./src/app/new-home/kundali/kundali.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewHomeKundaliKundaliComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainBackImage {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index:0;\r\n    /* margin-top:5%; */\r\n}\r\n.mainBack {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index:0;\r\n  /* margin-top:5%; */\r\n}\r\n.content{\r\n    height:100%;\r\n    width:100%;\r\n    -o-object-fit:cover;\r\n       object-fit:cover;\r\n    /* background: url(https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/cover_hans.jpg) no-repeat center; */\r\n    background: linear-gradient(0deg, rgba(250, 250, 252, 0.945) 14%, rgba(246, 246, 249, 0.829) 36%, rgba(245, 245, 249, 0.815) 58%, rgba(252, 252, 252, 0.89) 82%),url('cover_hans.png') no-repeat center;\r\n    background-size: cover;\r\n}\r\n.logo {\r\n    line-height: 60px;\r\n    position: absolute;\r\n    left:0px;\r\n    top:0px;\r\n    margin: 16px 46px;\r\n    color:#252525d3!important;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    letter-spacing: 2px;\r\n}\r\n.menu ul{\r\n    position:absolute;\r\n    top:15px;\r\n    right:0px;\r\n    display:flex;\r\n    flex-direction:row;\r\n    align-items: flex-end;\r\n    justify-content: flex-end;\r\n    float:right;\r\n    list-style-type:none\r\n}\r\n.menu li{\r\n    margin:5%;\r\n}\r\n#viewButton{\r\n    background: #34b7f1;\r\n    color: white;\r\n    font-size:1rem; \r\n    padding:5px 70px;\r\n    box-shadow:12px 12px 14px rgba(0, 0, 0, 0.2);\r\n  }\r\n.rowM {\r\n    width:100vw;\r\n    display: flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 0 2%;\r\n  }\r\n.column {\r\n    flex: 1 1 50%;\r\n    padding:1% 5% 1% 3%;\r\n}\r\n.rowN {\r\n    width:100%;\r\n    display: flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 0 2%;\r\n  }\r\n.card{\r\n    margin: 0 2%;\r\n    background: #c9eeff;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border:0px;border-radius: 10px;\r\n    height:70%;\r\n  }\r\n.topText{\r\n    width:100%;\r\n    font-size:3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.rowO{\r\n  background: #c9eeff;\r\n  border-radius: 14px;\r\n  padding: 6px;\r\n}\r\n.special-font{\r\n    font-family: 'Allura';\r\n}\r\n.classic{\r\n  width:100%!important;\r\n  margin: 1% 0%;\r\n}\r\n.special{\r\n    display:flex;\r\n}\r\n.details{\r\n    height:48vh;\r\n    width:100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: #c9eeff;\r\n    border-radius:20px;\r\n}\r\n.topbar{\r\n    position:fixed;\r\n    top:0px;\r\n    width:100vw!important;\r\n}\r\n.topnav {\r\n    overflow: hidden;\r\n    background-color: transparent;\r\n  }\r\n.topnav a {\r\n    float: right;\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n  }\r\n.topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n.topnav a.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n.topnav .icon {\r\n    display: none;\r\n  }\r\ntable {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 90vw;\r\n  }\r\ntd, th {\r\n    border: 0px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n    margin: 0 2%;\r\n  }\r\ntr:nth-child(odd) {\r\n    background-color: #ebe8e8;\r\n  }\r\ntr:nth-child(even) {\r\n    background-color: #ffffff;\r\n  }\r\n::slotted(table){\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 90vw;\r\n  }\r\n::slotted(td, th ){\r\n    border: 0px solid #dddddd;\r\n    text-align: left;\r\n    padding: 8px;\r\n    margin: 0 2%;\r\n  }\r\n::slotted(tr:nth-child(odd) ){\r\n    background-color: #ebe8e8;\r\n  }\r\n::slotted(tr:nth-child(even)){\r\n    background-color: #ffffff;\r\n  }\r\n::slotted(.cb){\r\n    display:none;\r\n  }\r\n@media screen and (max-width: 600px) {\r\n    .topnav a:not(:first-child) {display: none;}\r\n    .topnav a.icon {\r\n      float: right;\r\n      display: block;\r\n    }\r\n    .row {\r\n        width:100vw;\r\n        display: flex;\r\n        flex-direction:row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-wrap: wrap;\r\n        padding: 0 1%;\r\n      }\r\n      .column {\r\n        flex: 1 1 50%;\r\n        padding:1%;\r\n      }\r\n  }\r\n@media screen and (max-width: 600px) {\r\n    .topnav.responsive {position: relative;}\r\n    .topnav.responsive .icon {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 0;\r\n    }\r\n    .topnav.responsive a {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n  }\r\n@media (min-width:1024px){\r\n    .rowM {\r\n      width:60vw;\r\n      display: flex;\r\n      flex-direction:row;\r\n      align-items: center;\r\n      justify-content: center;\r\n      flex-wrap: wrap;\r\n      padding: 0 2%;\r\n    }  \r\n    .classic{\r\n      width:32%!important;\r\n      margin: 0 1%;\r\n  }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWhvbWUva3VuZGFsaS9rdW5kYWxpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQWdCO09BQWhCLGdCQUFnQjtJQUNoQixrSEFBa0g7SUFDbEgsdU1BQXFOO0lBQ3JOLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNENBQTRDO0VBQzlDO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0VBQ2Y7QUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7RUFDZjtBQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVSxDQUFDLG1CQUFtQjtJQUM5QixVQUFVO0VBQ1o7QUFDRjtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsT0FBTztJQUNQLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFDRSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjtBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNBO0lBQ0UsNkJBQTZCLGFBQWEsQ0FBQztJQUMzQztNQUNFLFlBQVk7TUFDWixjQUFjO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixhQUFhO01BQ2Y7TUFDQTtRQUNFLGFBQWE7UUFDYixVQUFVO01BQ1o7RUFDSjtBQUVBO0lBQ0Usb0JBQW9CLGtCQUFrQixDQUFDO0lBQ3ZDO01BQ0Usa0JBQWtCO01BQ2xCLFFBQVE7TUFDUixNQUFNO0lBQ1I7SUFDQTtNQUNFLFdBQVc7TUFDWCxjQUFjO01BQ2QsZ0JBQWdCO0lBQ2xCO0VBQ0Y7QUFDQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixlQUFlO01BQ2YsYUFBYTtJQUNmO0lBQ0E7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtFQUNoQjtFQUNBIiwiZmlsZSI6InNyYy9hcHAvbmV3LWhvbWUva3VuZGFsaS9rdW5kYWxpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkJhY2tJbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6MDtcclxuICAgIC8qIG1hcmdpbi10b3A6NSU7ICovXHJcbn1cclxuLm1haW5CYWNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OjA7XHJcbiAgLyogbWFyZ2luLXRvcDo1JTsgKi9cclxufVxyXG4uY29udGVudHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9oYW5zbWF0cmltb255LnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS93ZWJJbWFnZXMvY292ZXJfaGFucy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTAsIDI1MCwgMjUyLCAwLjk0NSkgMTQlLCByZ2JhKDI0NiwgMjQ2LCAyNDksIDAuODI5KSAzNiUsIHJnYmEoMjQ1LCAyNDUsIDI0OSwgMC44MTUpIDU4JSwgcmdiYSgyNTIsIDI1MiwgMjUyLCAwLjg5KSA4MiUpLHVybCguLi8uLi8uLi9hc3NldHMvY292ZXJfaGFucy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDQ2cHg7XHJcbiAgICBjb2xvcjojMjUyNTI1ZDMhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5tZW51IHVse1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MTVweDtcclxuICAgIHJpZ2h0OjBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lXHJcbn1cclxuLm1lbnUgbGl7XHJcbiAgICBtYXJnaW46NSU7XHJcbn1cclxuI3ZpZXdCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRiN2YxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOjFyZW07IFxyXG4gICAgcGFkZGluZzo1cHggNzBweDtcclxuICAgIGJveC1zaGFkb3c6MTJweCAxMnB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuLnJvd00ge1xyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAyJTtcclxuICB9ICBcclxuICAuY29sdW1uIHtcclxuICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICBwYWRkaW5nOjElIDUlIDElIDMlO1xyXG59XHJcbi5yb3dOIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMCAyJTtcclxuICB9IFxyXG4gIC5jYXJke1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gICAgYmFja2dyb3VuZDogI2M5ZWVmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOjBweDtib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OjcwJTtcclxuICB9XHJcbi50b3BUZXh0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGZvbnQtc2l6ZTozcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnJvd097XHJcbiAgYmFja2dyb3VuZDogI2M5ZWVmZjtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxufVxyXG4uc3BlY2lhbC1mb250e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbGx1cmEnO1xyXG59XHJcbi5jbGFzc2lje1xyXG4gIHdpZHRoOjEwMCUhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMSUgMCU7XHJcbn1cclxuLnNwZWNpYWx7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuLmRldGFpbHN7XHJcbiAgICBoZWlnaHQ6NDh2aDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNjOWVlZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbn1cclxuLnRvcGJhcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjBweDtcclxuICAgIHdpZHRoOjEwMHZ3IWltcG9ydGFudDtcclxufVxyXG4udG9wbmF2IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAudG9wbmF2IC5pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gIH1cclxuICBcclxuICB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlOGU4O1xyXG4gIH1cclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgOjpzbG90dGVkKHRhYmxlKXtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogOTB2dztcclxuICB9XHJcbiAgOjpzbG90dGVkKHRkLCB0aCApe1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2RkZGRkZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbiAgfVxyXG4gIDo6c2xvdHRlZCh0cjpudGgtY2hpbGQob2RkKSApe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZThlODtcclxuICB9XHJcbiAgOjpzbG90dGVkKHRyOm50aC1jaGlsZChldmVuKSl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICA6OnNsb3R0ZWQoLmNiKXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC50b3BuYXYgYTpub3QoOmZpcnN0LWNoaWxkKSB7ZGlzcGxheTogbm9uZTt9XHJcbiAgICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucm93IHtcclxuICAgICAgICB3aWR0aDoxMDB2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBwYWRkaW5nOiAwIDElO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb2x1bW4ge1xyXG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XHJcbiAgICAgICAgcGFkZGluZzoxJTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIC5pY29uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnRvcG5hdi5yZXNwb25zaXZlIGEge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgICAucm93TSB7XHJcbiAgICAgIHdpZHRoOjYwdnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgcGFkZGluZzogMCAyJTtcclxuICAgIH0gIFxyXG4gICAgLmNsYXNzaWN7XHJcbiAgICAgIHdpZHRoOjMyJSFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICB9XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/new-home/kundali/kundali.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/new-home/kundali/kundali.component.ts ***!
    \*******************************************************/

  /*! exports provided: KundaliComponent */

  /***/
  function srcAppNewHomeKundaliKundaliComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KundaliComponent", function () {
      return KundaliComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _new_home_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../new-home.service */
    "./src/app/new-home/new-home.service.ts");

    var KundaliComponent = /*#__PURE__*/function () {
      function KundaliComponent(form_builder, http, sanitizer, homeService) {
        _classCallCheck(this, KundaliComponent);

        this.form_builder = form_builder;
        this.http = http;
        this.sanitizer = sanitizer;
        this.homeService = homeService;
        this.autoComplete = {
          strictBounds: false,
          type: 'geocode',
          fields: ['name']
        };
        this.gotRes = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.gotRes$ = this.gotRes.asObservable();
        this.showContinueBtn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this.showContinueBtn$ = this.showContinueBtn.asObservable(); // tslint:disable-next-line: max-line-length

        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']; // tslint:disable-next-line: max-line-length

        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002'];
        this.kundaliForm = this.form_builder.group({
          BoyBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(KundaliComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          if (this.homeService.points != -1) {
            this.HTMLResponse = this.homeService.HTMLResponse;
            this.points = this.homeService.points;
            this.kundaliForm = this.homeService.kundaliForm;
            this.gotRes.next(true);
            this.showContinueBtn.next(false);
            setTimeout(function () {
              var ele = document.getElementById('pointsDiv');
              ele.scrollIntoView({
                behavior: 'smooth'
              });
            }, 500);
          }

          this.kundaliForm.valueChanges.subscribe(function () {
            _this12.showContinueBtn.next(true);
          });
        }
      }, {
        key: "downloadApp",
        value: function downloadApp() {
          window.open('https://bit.ly/2YQEfbe', '_self');
        }
      }, {
        key: "transformYourHtml",
        value: function transformYourHtml(htmlTextWithStyle) {
          return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
        }
      }, {
        key: "placeChanged",
        value: function placeChanged(str) {
          var _this13 = this;

          var city = document.querySelector('#' + str);
          setTimeout(function () {
            console.log(city.value);

            if (str === 'GirlBirthPlace') {
              _this13.kundaliForm.patchValue({
                GirlBirthPlace: city.value
              });
            } else {
              _this13.kundaliForm.patchValue({
                BoyBirthPlace: city.value
              });
            }
          }, 500);
        }
      }, {
        key: "myFunction",
        value: function myFunction() {
          var x = document.getElementById("myTopnav");

          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          console.log(this.kundaliForm.value);

          if (this.kundaliForm.valid) {
            var tosend = new FormData();
            var boyDate = this.kundaliForm.get('BoyBirthDate').value + this.kundaliForm.get('BoyBirthMonth').value + this.kundaliForm.get('BoyBirthYear').value;
            var girlDate = this.kundaliForm.get('GirlBirthDate').value + this.kundaliForm.get('GirlBirthMonth').value + this.kundaliForm.get('GirlBirthYear').value;
            tosend.append('boy_birth_date', boyDate);
            tosend.append('boy_birth_time', this.kundaliForm.value.BoyBirthTime);
            tosend.append('boy_birth_place', this.kundaliForm.value.BoyBirthPlace);
            tosend.append('girl_birth_date', girlDate);
            tosend.append('girl_birth_time', this.kundaliForm.value.GirlBirthTime);
            tosend.append('girl_birth_place', this.kundaliForm.value.GirlBirthPlace);
            tosend.append('boy_name', this.kundaliForm.value.BoyName);
            tosend.append('girl_name', this.kundaliForm.value.GirlName);
            this.http.post('https://partner.hansmatrimony.com/api/getKundali', tosend).subscribe(function (response) {
              console.log(response);

              if (response.point) {
                _this14.points = response.point;
                _this14.HTMLResponse = response.full;
                _this14.HTMLResponse = _this14.HTMLResponse.split('ul').join('tr');
                _this14.HTMLResponse = _this14.HTMLResponse.split('li').join('td');
                console.log(_this14.HTMLResponse);

                _this14.gotRes.next(true);

                setTimeout(function () {
                  var ele = document.getElementById('pointsDiv');
                  ele.scrollIntoView({
                    behavior: 'smooth'
                  });
                }, 1000);
              }
            });
          } else {
            console.log('form invalid');
          }
        }
      }]);

      return KundaliComponent;
    }();

    KundaliComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _new_home_service__WEBPACK_IMPORTED_MODULE_6__["NewHomeService"]
      }];
    };

    KundaliComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-kundali',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kundali.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/kundali/kundali.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kundali.component.css */
      "./src/app/new-home/kundali/kundali.component.css"))["default"]]
    })], KundaliComponent);
    /***/
  },

  /***/
  "./src/app/new-home/new-home.component.css":
  /*!*************************************************!*\
    !*** ./src/app/new-home/new-home.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewHomeNewHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb{\r\n    background-color: #C8C8C8;\r\n}\r\n::ng-deep .mat-slide-toggle-thumb {\r\n    background-color: #c8c8c8;\r\n}\r\n::ng-deep .mat-slide-toggle-bar {\r\n    background-color: white;\r\n}\r\n::ng-deep .mat-slide-toggle.mat-checked .mat-slide-toggle-bar{\r\n    background-color: white;\r\n}\r\n.mainContainer{\r\n    width: 100%;\r\n    height: 100%;\r\n    border: 1px solid #555;\r\n}\r\n.toolBarRow{\r\n    padding: 0px;\r\n    height: auto;\r\n}\r\n.drawerSettings{\r\nwidth: 25%;\r\n}\r\n.rishteBtn{\r\n    position:absolute;\r\n    top:20px;\r\n    right:12px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    padding: 2px 2px;\r\n    border-radius: 100px;\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    background-color: #D313AE;\r\n    z-index:1;\r\n}\r\n.row{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.fixToolBar{\r\n    width: 100% ;\r\n    position: fixed; \r\n    z-index:2;\r\n    box-shadow: 1px 1px 1px #707070;\r\n}\r\n.toolText{\r\n    font-family: 'Poppins';\r\n    margin:5px 0px 5px 13px;\r\n    color: white;\r\n    font-size: 1.4rem;\r\n}\r\n.mainDivToolbar{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 5px;\r\n    background-color: #0C9BF2;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.toolBarRow2{\r\n    background-color: #0C9BF2;\r\n    padding: 0px 0px 10px;\r\n    margin-top: -10px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.b-r{\r\n    border-right: 1px solid white;\r\n}\r\n.b-l {\r\n    border-left: 1px solid white;  \r\n}\r\n.drawerImg{\r\n    width: 25px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n@media (max-width: 1024px) {\r\n    .drawerSettings{\r\n        width: 35%;\r\n        }\r\n    .toolBarRow2{\r\n            background-color: #0C9BF2;\r\n            padding: 10px 0px;\r\n            width: 100%;\r\n        }\r\n}\r\n@media (max-width: 576px) {\r\n    .toolText{\r\n        color: white;\r\n        font-size: 18px;\r\n    }\r\n    .drawerSettings{\r\n        width: 70%;\r\n        }\r\n}\r\n@media (max-width: 350px) {\r\n    .toolText{\r\n        color: white;\r\n        font-size: 16px;\r\n    }\r\n    .drawerImg{\r\n        width: 20px;\r\n        margin: 0px;\r\n    }\r\n}\r\n@media (min-width:1024px){\r\n    .rishteBtn{\r\n        position:absolute;\r\n        top:20px;\r\n        right:40px;\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        color: white;\r\n        padding: 2px 7px;\r\n        border-radius: 100px;\r\n        font-size: 13px;\r\n        font-weight: bold;\r\n        background-color: #d346b7;\r\n        z-index:1;\r\n    }\r\n    .menu-icon{\r\n        margin-left:13px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWhvbWUvbmV3LWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWO0lBQ0o7WUFDUSx5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLFdBQVc7UUFDZjtBQUNSO0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Y7QUFDUjtBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixTQUFTO0lBQ2I7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWhvbWUvbmV3LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOGM4Yzg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1haW5Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbn1cclxuLnRvb2xCYXJSb3d7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kcmF3ZXJTZXR0aW5nc3tcclxud2lkdGg6IDI1JTtcclxufVxyXG4ucmlzaHRlQnRue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MjBweDtcclxuICAgIHJpZ2h0OjEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzMTNBRTtcclxuICAgIHotaW5kZXg6MTtcclxufVxyXG4ucm93e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmZpeFRvb2xCYXJ7XHJcbiAgICB3aWR0aDogMTAwJSA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgei1pbmRleDoyO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzcwNzA3MDtcclxufVxyXG4udG9vbFRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgbWFyZ2luOjVweCAwcHggNXB4IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG4ubWFpbkRpdlRvb2xiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEM5QkYyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50b29sQmFyUm93MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzlCRjI7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iLXJ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmItbCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlOyAgXHJcbn1cclxuXHJcbi5kcmF3ZXJJbWd7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZHJhd2VyU2V0dGluZ3N7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICB9XHJcbiAgICAudG9vbEJhclJvdzJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzlCRjI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLnRvb2xUZXh0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuZHJhd2VyU2V0dGluZ3N7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgLnRvb2xUZXh0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZHJhd2VySW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEwMjRweCl7XHJcbiAgICAucmlzaHRlQnRue1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHRvcDoyMHB4O1xyXG4gICAgICAgIHJpZ2h0OjQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzQ2Yjc7XHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtaWNvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDoxM3B4O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-home/new-home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/new-home/new-home.component.ts ***!
    \************************************************/

  /*! exports provided: NewHomeComponent */

  /***/
  function srcAppNewHomeNewHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewHomeComponent", function () {
      return NewHomeComponent;
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


    var _new_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-home.service */
    "./src/app/new-home/new-home.service.ts");
    /* harmony import */


    var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../language.service */
    "./src/app/language.service.ts");

    var NewHomeComponent = /*#__PURE__*/function () {
      // langCheck = false;
      function NewHomeComponent(homeService, languageService) {
        _classCallCheck(this, NewHomeComponent);

        this.homeService = homeService;
        this.languageService = languageService;
      }

      _createClass(NewHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// console.log(this.languageService.getCurrentLanguage());
          // lang check is used to set the selected language as user language once user logs in.
          // it will be only set if user changes the language from the current language to other language.
          // if (!localStorage.getItem('language')) {
          //   localStorage.setItem('language', 'english');
          //   this.langCheck = true;
          // }
          // if (localStorage.getItem('language') === 'english') {
          //   this.langCheck = true;
          // } else if (localStorage.getItem('language')  === 'hindi')  {
          //   this.langCheck = false;
          // }
          // this.languageService.setHomeLang(localStorage.getItem('language'));
        }
      }, {
        key: "sendWhatsAppLink",
        value: function sendWhatsAppLink() {
          this.facebookAnalytics();
          window.open('http://wa.me/918766217175?text=We%20are%20interested%20in%20Registering%20for%20Personalized%20Services');
        }
      }, {
        key: "langChanged",
        value: function langChanged(event) {
          console.log(event.checked);

          if (event.checked) {
            this.languageService.languageChangedFromMainStatus = true;
            localStorage.setItem('language', 'english');
            this.languageService.setHomeLang('english');
          } else {
            this.languageService.languageChangedFromMainStatus = true;
            localStorage.setItem('language', 'hindi');
            this.languageService.setHomeLang('hindi');
          }
        }
      }, {
        key: "openPlaystore",
        value: function openPlaystore() {
          window.open('https://play.google.com/store/apps/details?id=com.twango.me');
        }
      }, {
        key: "facebookAnalytics",
        value: function facebookAnalytics() {
          window.fbq('track', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number')
          });
          window.fbq('track', '692972151223870', 'Contact', {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobiler_number')
          });
        }
      }]);

      return NewHomeComponent;
    }();

    NewHomeComponent.ctorParameters = function () {
      return [{
        type: _new_home_service__WEBPACK_IMPORTED_MODULE_2__["NewHomeService"]
      }, {
        type: _language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    NewHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-home/new-home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-home.component.css */
      "./src/app/new-home/new-home.component.css"))["default"]]
    })], NewHomeComponent);
    /***/
  },

  /***/
  "./src/app/new-home/new-home.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/new-home/new-home.service.ts ***!
    \**********************************************/

  /*! exports provided: NewHomeService */

  /***/
  function srcAppNewHomeNewHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewHomeService", function () {
      return NewHomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewHomeService = /*#__PURE__*/function () {
      function NewHomeService() {
        _classCallCheck(this, NewHomeService);

        this.points = -1;
      }

      _createClass(NewHomeService, [{
        key: "getLoginStatus",
        value: function getLoginStatus() {
          if (localStorage.getItem('mobile_number') && localStorage.getItem('mobile_number') !== '') {
            this.loggedInNumber = localStorage.getItem('mobile_number');
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getLoggedInNumber",
        value: function getLoggedInNumber() {
          return this.loggedInNumber;
        }
      }, {
        key: "getProfilePic",
        value: function getProfilePic() {
          if (localStorage.getItem('profile_photo') && localStorage.getItem('profile_photo') !== '') {
            return localStorage.getItem('profile_photo');
          } else {
            return null;
          }
        }
      }, {
        key: "saveLoggedProfilePic",
        value: function saveLoggedProfilePic(imgUrl) {
          this.loggedInProfilePic = imgUrl;
        }
      }, {
        key: "getLoggedProfilePic",
        value: function getLoggedProfilePic() {
          return this.loggedInProfilePic;
        }
      }, {
        key: "saveDrawerInstance",
        value: function saveDrawerInstance(drawer) {
          this.drawerInstance = drawer;
          console.log(drawer);
        }
      }, {
        key: "getDrawerInstance",
        value: function getDrawerInstance() {
          return this.drawerInstance;
        }
      }]);

      return NewHomeService;
    }();

    NewHomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NewHomeService);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/animations.js":
  /*!**********************************************************!*\
    !*** ./src/app/new-landing-from-component/animations.js ***!
    \**********************************************************/

  /*! exports provided: fade, landing, rightIn */

  /***/
  function srcAppNewLandingFromComponentAnimationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fade", function () {
      return fade;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "landing", function () {
      return landing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rightIn", function () {
      return rightIn;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])]);
    var landing = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('landing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      padding: '400px'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000)])]);
    var rightIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rightIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void=>*', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      paddingRight: '40px'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(1000)])]); //# sourceMappingURL=animations.js.map

    /***/
  },

  /***/
  "./src/app/new-landing-from-component/custom-bg/custom-bg.css":
  /*!********************************************************************!*\
    !*** ./src/app/new-landing-from-component/custom-bg/custom-bg.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentCustomBgCustomBgCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customBg{\r\n    /* background: linear-gradient(180deg, rgba(222, 245, 255, 0.085) 0%, rgba(222, 245, 255, 0) 46.01%, rgba(222, 245, 255, 0.5) 69.48%, rgba(222, 245, 255, 0.5) 103.51%);\r\n    border-radius: 50% 50% 50% 0%; */\r\n    /* background-image:url('../../src/assets/footer/bg.svg');\r\n */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvY3VzdG9tLWJnL2N1c3RvbS1iZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtvQ0FDZ0M7SUFDaEM7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvY3VzdG9tLWJnL2N1c3RvbS1iZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tQmd7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIyMiwgMjQ1LCAyNTUsIDAuMDg1KSAwJSwgcmdiYSgyMjIsIDI0NSwgMjU1LCAwKSA0Ni4wMSUsIHJnYmEoMjIyLCAyNDUsIDI1NSwgMC41KSA2OS40OCUsIHJnYmEoMjIyLCAyNDUsIDI1NSwgMC41KSAxMDMuNTElKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDAlOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uL3NyYy9hc3NldHMvZm9vdGVyL2JnLnN2ZycpO1xyXG4gKi9cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/custom-bg/custom-bg.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/new-landing-from-component/custom-bg/custom-bg.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomBg */

  /***/
  function srcAppNewLandingFromComponentCustomBgCustomBgTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomBg", function () {
      return CustomBg;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomBg = /*#__PURE__*/function () {
      function CustomBg() {
        _classCallCheck(this, CustomBg);
      }

      _createClass(CustomBg, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomBg;
    }();

    CustomBg = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'custom-bg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-bg.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/custom-bg/custom-bg.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-bg.css */
      "./src/app/new-landing-from-component/custom-bg/custom-bg.css"))["default"]]
    })], CustomBg);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/features/features.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/new-landing-from-component/features/features.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentFeaturesFeaturesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.features{\r\n    margin-top:100px;\r\n}\r\ndiv,.row,.col{\r\n    margin:0;\r\n    top:0;\r\n    padding:0;\r\n}\r\n.wrapper-text p{\r\n    opacity: 0;\r\n}\r\n.wrapper-text{\r\n    opacity: 0;\r\n    -webkit-animation:ani2 1s ease-out forwards;\r\n            animation:ani2 1s ease-out forwards;\r\n}\r\n.wrapper-text p{\r\n    -webkit-animation:ani2 0.75s ease-out 3s forwards;\r\n            animation:ani2 0.75s ease-out 3s forwards;\r\n}\r\n.container{\r\n    margin-top:50px;\r\n}\r\n@media only screen and (max-width: 575px){\r\n    img{\r\n        width:200px;\r\n        height:200px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 576px){\r\n    img{\r\n        width:250px;\r\n        height:250px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    img{\r\n        width:200px;\r\n        height:200px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px){\r\n    img{\r\n        width:300px;\r\n        height:300px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        font-weight:500;\r\n        text-align:center;\r\n        font-size:15px;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n    img{\r\n        width:370px;\r\n        height:370px;\r\n    }\r\n    p{\r\n        margin-top:20px;\r\n        text-align:center;\r\n        font-weight:500;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFFBQVE7SUFDUixLQUFLO0lBQ0wsU0FBUztBQUNiO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7SUFDViwyQ0FBbUM7WUFBbkMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxpREFBeUM7WUFBekMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUNBQWlDO0lBQ3JDO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQ0FBaUM7SUFDckM7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlDQUFpQztJQUNyQztBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUNBQWlDO0lBQ3JDO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5mZWF0dXJlc3tcclxuICAgIG1hcmdpbi10b3A6MTAwcHg7XHJcbn1cclxuZGl2LC5yb3csLmNvbHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbn1cclxuLndyYXBwZXItdGV4dCBwe1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4ud3JhcHBlci10ZXh0e1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjphbmkyIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcbi53cmFwcGVyLXRleHQgcHtcclxuICAgIGFuaW1hdGlvbjphbmkyIDAuNzVzIGVhc2Utb3V0IDNzIGZvcndhcmRzO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6MjUwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MzcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjM3MHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/features/features.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/new-landing-from-component/features/features.component.ts ***!
    \***************************************************************************/

  /*! exports provided: Features */

  /***/
  function srcAppNewLandingFromComponentFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Features", function () {
      return Features;
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


    var _assets_Data_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/Data/data.js */
    "./src/assets/Data/data.js");
    /* harmony import */


    var _animations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations.js */
    "./src/app/new-landing-from-component/animations.js");

    var Features = /*#__PURE__*/function () {
      function Features() {
        _classCallCheck(this, Features);

        this.features = _assets_Data_data_js__WEBPACK_IMPORTED_MODULE_2__["features"];
      }

      _createClass(Features, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Features;
    }();

    Features = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-features',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./features.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/features/features.component.html"))["default"],
      animations: [_animations_js__WEBPACK_IMPORTED_MODULE_3__["fade"], _animations_js__WEBPACK_IMPORTED_MODULE_3__["landing"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./features.component.css */
      "./src/app/new-landing-from-component/features/features.component.css"))["default"]]
    })], Features);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/footer/footer.css":
  /*!**************************************************************!*\
    !*** ./src/app/new-landing-from-component/footer/footer.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentFooterFooterCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.app-footer{\r\n    font-family:'Poppins', sans-serif;\r\n    margin-top:5.2vw;\r\n    overflow-x:hidden;\r\n}\r\nh4{\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n.texts{\r\n    text-align: center;\r\n    padding-top:150px;\r\n}\r\n.icons{\r\n    height:1.5625vw;\r\n}\r\n.googleplay{\r\n    width:16.25vw;\r\n    height:6.3vw;\r\n    cursor: pointer;\r\n}\r\nli{\r\n    font-size:1.2vw;\r\n}\r\nul{\r\n    list-style: none;\r\n    padding-left:0;\r\n}\r\nh1{\r\n    font-weight:bolder;\r\n    color:black;\r\n    font-size:3.5vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\nh2{\r\n    font-family:'Poppins', sans-serif;\r\n}\r\nh4{\r\n    font-weight:600;\r\n    font-size:1.5vw;\r\n}\r\n.footer-bottom{\r\n    background-image: url('footer.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    padding-top:60px;\r\n    margin-top:40px;\r\n    color: white;\r\n    height:auto;\r\n}\r\n.footer-add{\r\n    width:100%;\r\n    height:100px;\r\n    background-color: #24ADD8;\r\n}\r\n.footer-body{\r\n   \r\n}\r\n.imgbox{\r\n    z-index:-100;\r\n}\r\np{\r\n    font-size:1.2vw;\r\n}\r\n@media only screen and (max-width: 575px){\r\n    .app-footer{\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n    h1{\r\n        font-weight:bolder;\r\n        color:black;\r\n        font-size:5.5vw;\r\n    }\r\n    h2{\r\n        font-weight:400;\r\n        font-size:4vw;\r\n    }\r\n    h4{\r\n        font-weight:600;\r\n        font-size:4vw;\r\n    }\r\n    li{\r\n        font-size:2.5vw;\r\n    }\r\n    p{\r\n        font-size:2vw;\r\n    }\r\n    .googleplay{\r\n        width:40vw;\r\n        height:15vw;\r\n    }\r\n    .icons{\r\n        height:3vw;\r\n        padding:0px 5px;\r\n    }\r\n    .blended-col{\r\n        position:relative;\r\n        left:100px;\r\n    }\r\n    .blended-col-right{\r\n        position:relative;\r\n        right:100px;\r\n    }\r\n    .imgbox img{\r\n        width:225px;\r\n        height:225px;\r\n    }\r\n}\r\n@media only screen and (min-width:576px){\r\n    h2{\r\n        font-weight:400;\r\n        font-size:3vw;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        \r\n        font-size:5vw;\r\n    }\r\n    .googleplay{\r\n        width:28vw;\r\n        height:10vw;\r\n    }\r\n    h4{\r\n        font-weight:600;\r\n        font-size:2.2vw;\r\n    }\r\n    li{\r\n        font-size:1.7vw;\r\n    }\r\n    p{\r\n        font-size:1.6vw;\r\n    }\r\n    .blended-col{\r\n        position:relative;\r\n        left:180px;\r\n    }\r\n    .blended-col-right{\r\n        position:relative;\r\n        right:200px;\r\n    }\r\n    .imgbox img{\r\n        width:400px;\r\n        height:400px;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    h1{\r\n        font-weight:bolder;\r\n        color:black;\r\n        font-size:3.5vw;\r\n    }\r\n    h4{\r\n        font-weight:600;\r\n        font-size:1.5vw;\r\n    }\r\n    .blended-col{\r\n        position:relative;\r\n        left:180px;\r\n    }\r\n    .blended-col-right{\r\n        position:relative;\r\n        right:200px;\r\n    }\r\n    .imgbox img{\r\n        width:500px;\r\n        height:500px;\r\n    }\r\n    .googleplay{\r\n        width:22vw;\r\n        height:8vw;\r\n    }\r\n   \r\n}\r\n@media only screen and (min-width: 992px){\r\n    h1{\r\n        font-weight:bolder;\r\n        color:black;\r\n        font-size:3.5vw;\r\n    }\r\n    h4{\r\n        font-weight:600;\r\n        font-size:1.5vw;\r\n    }\r\n    .blended-col{\r\n        position:relative;\r\n        left:180px;\r\n    }\r\n    .blended-col-right{\r\n        position:relative;\r\n        right:200px;\r\n    }\r\n    .imgbox img{\r\n        width:600px;\r\n        height:600px;\r\n    }\r\n    .googleplay{\r\n        width:22vw;\r\n        height:8vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n    h1{\r\n        font-weight:bolder;\r\n        color:black;\r\n        font-size:2.5vw;\r\n    }\r\n    h2{\r\n        font-size:2vw;\r\n        font-weight:400;\r\n    }\r\n    h4{\r\n        font-weight:600;\r\n        font-size:1.5vw;\r\n    }\r\n    li{\r\n        font-size:1vw;\r\n    }\r\n    p{\r\n        font-size:1vw;\r\n    }\r\n    .googleplay{\r\n        width:16vw;\r\n        height:6vw;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBQ3JGO0lBQ0ksaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBMEQ7SUFDMUQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLGlDQUFpQztJQUNyQztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlOztRQUVmLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkOztBQUVKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50L2Zvb3Rlci9mb290ZXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLmFwcC1mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOjUuMnZ3O1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbn1cclxuaDR7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRleHRze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6MTUwcHg7XHJcbn1cclxuLmljb25ze1xyXG4gICAgaGVpZ2h0OjEuNTYyNXZ3O1xyXG59XHJcbi5nb29nbGVwbGF5e1xyXG4gICAgd2lkdGg6MTYuMjV2dztcclxuICAgIGhlaWdodDo2LjN2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5saXtcclxuICAgIGZvbnQtc2l6ZToxLjJ2dztcclxufVxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOjMuNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgZm9udC1zaXplOjEuNXZ3O1xyXG59XHJcbi5mb290ZXItYm90dG9te1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZm9vdGVyL2Zvb3Rlci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6NjBweDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5mb290ZXItYWRke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNEFERDg7XHJcbn1cclxuLmZvb3Rlci1ib2R5e1xyXG4gICBcclxufVxyXG4uaW1nYm94e1xyXG4gICAgei1pbmRleDotMTAwO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6MS4ydnc7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAuYXBwLWZvb3RlcntcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOjUuNXZ3O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjR2dztcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICAgIGZvbnQtc2l6ZToyLjV2dztcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjJ2dztcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIHdpZHRoOjQwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjE1dnc7XHJcbiAgICB9XHJcbiAgICAuaWNvbnN7XHJcbiAgICAgICAgaGVpZ2h0OjN2dztcclxuICAgICAgICBwYWRkaW5nOjBweCA1cHg7XHJcbiAgICB9XHJcbiAgICAuYmxlbmRlZC1jb2x7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDoxMDBweDtcclxuICAgIH1cclxuICAgIC5ibGVuZGVkLWNvbC1yaWdodHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDoxMDBweDtcclxuICAgIH1cclxuICAgIC5pbWdib3ggaW1ne1xyXG4gICAgICAgIHdpZHRoOjIyNXB4O1xyXG4gICAgICAgIGhlaWdodDoyMjVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTc2cHgpe1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozdnc7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOjV2dztcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIHdpZHRoOjI4dnc7XHJcbiAgICAgICAgaGVpZ2h0OjEwdnc7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIuMnZ3O1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgZm9udC1zaXplOjEuN3Z3O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MS42dnc7XHJcbiAgICB9XHJcbiAgICAuYmxlbmRlZC1jb2x7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDoxODBweDtcclxuICAgIH1cclxuICAgIC5ibGVuZGVkLWNvbC1yaWdodHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDoyMDBweDtcclxuICAgIH1cclxuICAgIC5pbWdib3ggaW1ne1xyXG4gICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICBmb250LXNpemU6My41dnc7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjEuNXZ3O1xyXG4gICAgfVxyXG4gICAgLmJsZW5kZWQtY29se1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6MTgwcHg7XHJcbiAgICB9XHJcbiAgICAuYmxlbmRlZC1jb2wtcmlnaHR7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6MjAwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nYm94IGltZ3tcclxuICAgICAgICB3aWR0aDo1MDBweDtcclxuICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICB9XHJcbiAgICAuZ29vZ2xlcGxheXtcclxuICAgICAgICB3aWR0aDoyMnZ3O1xyXG4gICAgICAgIGhlaWdodDo4dnc7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozLjV2dztcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBmb250LXNpemU6MS41dnc7XHJcbiAgICB9XHJcbiAgICAuYmxlbmRlZC1jb2x7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDoxODBweDtcclxuICAgIH1cclxuICAgIC5ibGVuZGVkLWNvbC1yaWdodHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDoyMDBweDtcclxuICAgIH1cclxuICAgIC5pbWdib3ggaW1ne1xyXG4gICAgICAgIHdpZHRoOjYwMHB4O1xyXG4gICAgICAgIGhlaWdodDo2MDBweDtcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIHdpZHRoOjIydnc7XHJcbiAgICAgICAgaGVpZ2h0Ojh2dztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgZm9udC1zaXplOjIuNXZ3O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjJ2dztcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB9XHJcbiAgICBoNHtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjEuNXZ3O1xyXG4gICAgfVxyXG4gICAgbGl7XHJcbiAgICAgICAgZm9udC1zaXplOjF2dztcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjF2dztcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIHdpZHRoOjE2dnc7XHJcbiAgICAgICAgaGVpZ2h0OjZ2dztcclxuICAgIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/footer/footer.ts":
  /*!*************************************************************!*\
    !*** ./src/app/new-landing-from-component/footer/footer.ts ***!
    \*************************************************************/

  /*! exports provided: AppFooter */

  /***/
  function srcAppNewLandingFromComponentFooterFooterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooter", function () {
      return AppFooter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppFooter = /*#__PURE__*/function () {
      function AppFooter() {
        _classCallCheck(this, AppFooter);
      }

      _createClass(AppFooter, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "downloadApp",
        value: function downloadApp() {
          window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
        }
      }]);

      return AppFooter;
    }();

    AppFooter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/footer/footer.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.css */
      "./src/app/new-landing-from-component/footer/footer.css"))["default"]]
    })], AppFooter);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentFreeKundaliMatchingKundaliComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.kundali{\r\n    margin-top:5.2vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\nh1{\r\n    font-weight:600;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\nform{ \r\n    margin-top:20px;\r\n    background: #ECF7FC;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n    border-radius: 20px;\r\n    padding:20px;\r\n    height:auto;\r\n    width:481px;\r\n    /* margin-left:20px; */\r\n}\r\nbutton{\r\n    width: 160.61px;\r\n    height: 37.98px;\r\n    background: #24ADD8;\r\n    border-radius: 7px;\r\n    border:none;\r\n    color:white;\r\n    font-weight:600;\r\n    border-radius:7px;\r\n}\r\np{\r\n    font-weight:600;\r\n}\r\ninput{\r\n    margin-bottom:10px;\r\n}\r\n@media only screen and (max-width: 575px){\r\n    .kundali{\r\n        margin-top:15vw;\r\n        font-family:'Poppins', sans-serif;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        font-size:5.5vw;\r\n    }\r\n    form{ \r\n        margin-top:20px;\r\n        background: #ECF7FC;\r\n        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n        border-radius: 20px;\r\n        padding:20px;\r\n        height:auto;\r\n        width:360px;\r\n    }\r\n    button{\r\n        width: 180.61px;\r\n        height: 41.98px;\r\n        background: #24ADD8;\r\n        border-radius: 7px;\r\n        border:none;\r\n        color:white;\r\n        font-weight:600;\r\n        border-radius:7px;\r\n    }\r\n}\r\n@media only screen and (min-width:576px){\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:4.5vw;\r\n    }\r\n    button{\r\n        width: 180.61px;\r\n        height: 41.98px;\r\n        background: #24ADD8;\r\n        border-radius: 7px;\r\n        border:none;\r\n        color:white;\r\n        font-weight:600;\r\n        border-radius:7px;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n   \r\n}\r\n@media only screen and (min-width: 992px){\r\n    \r\n}\r\n@media only screen and (min-width: 1200px){\r\n   h2{\r\n       font-size:3vw;\r\n   }\r\n   h1{\r\n    font-size:2.5vw;\r\n   }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvZnJlZUt1bmRhbGlNYXRjaGluZy9rdW5kYWxpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBQ3JGO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZixpQ0FBaUM7SUFDckM7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLDJDQUEyQztRQUMzQyxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtHQUNHO09BQ0ksYUFBYTtHQUNqQjtHQUNBO0lBQ0MsZUFBZTtHQUNoQjtBQUNIIiwiZmlsZSI6InNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvZnJlZUt1bmRhbGlNYXRjaGluZy9rdW5kYWxpLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4ua3VuZGFsaXtcclxuICAgIG1hcmdpbi10b3A6NS4ydnc7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuZm9ybXsgXHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNGN0ZDO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHdpZHRoOjQ4MXB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6MjBweDsgKi9cclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTYwLjYxcHg7XHJcbiAgICBoZWlnaHQ6IDM3Ljk4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjRBREQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6N3B4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAua3VuZGFsaXtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1dnc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1LjV2dztcclxuICAgIH1cclxuICAgIGZvcm17IFxyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRUNGN0ZDO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OmF1dG87XHJcbiAgICAgICAgd2lkdGg6MzYwcHg7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDE4MC42MXB4O1xyXG4gICAgICAgIGhlaWdodDogNDEuOThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjRBREQ4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czo3cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NnB4KXtcclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjQuNXZ3O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxODAuNjFweDtcclxuICAgICAgICBoZWlnaHQ6IDQxLjk4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI0QUREODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6N3B4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgaDJ7XHJcbiAgICAgICBmb250LXNpemU6M3Z3O1xyXG4gICB9XHJcbiAgIGgxe1xyXG4gICAgZm9udC1zaXplOjIuNXZ3O1xyXG4gICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: Kundali */

  /***/
  function srcAppNewLandingFromComponentFreeKundaliMatchingKundaliComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Kundali", function () {
      return Kundali;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/find-open-history-profile.service */
    "./src/app/find-open-history-profile.service.ts");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");
    /* harmony import */


    var src_app_new_home_new_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/new-home/new-home.service */
    "./src/app/new-home/new-home.service.ts");

    var Kundali = /*#__PURE__*/function () {
      function Kundali(homeService, languageService, form_builder, http, router, itemService) {
        _classCallCheck(this, Kundali);

        this.homeService = homeService;
        this.languageService = languageService;
        this.form_builder = form_builder;
        this.http = http;
        this.router = router;
        this.itemService = itemService;
        this.autoComplete = {
          strictBounds: false,
          type: 'geocode',
          fields: ['name']
        };
        this.createProfile = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
        this.date = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']; // tslint:disable-next-line: max-line-length

        this.month = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.years = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002'];
        this.currentGender = "Boy's";
        this.BoyDetailsFilled = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.BoyDetailsFilled$ = this.BoyDetailsFilled.asObservable();
        this.kundaliForm = this.form_builder.group({
          BoyBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthMonth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlBirthPlace: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          BoyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          GirlName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.optionsForm = this.form_builder.group({
          Looking: [null],
          For: [null]
        });
      }

      _createClass(Kundali, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('gender')) {
            var gender = localStorage.getItem('gender');

            if (gender === "Female") {
              this.currentGender = "Girl's";
              this.optionsForm.patchValue({
                Looking: 'Groom'
              });
            } else {
              this.currentGender = "Boy's";
              this.optionsForm.patchValue({
                Looking: 'Bride'
              });
            }
          }
        }
      }, {
        key: "placeChanged",
        value: function placeChanged(str) {
          var _this15 = this;

          var city = document.querySelector('#' + str);
          setTimeout(function () {
            console.log(city.value);

            if (str === 'GirlBirthPlace') {
              _this15.kundaliForm.patchValue({
                GirlBirthPlace: city.value
              });
            } else {
              _this15.kundaliForm.patchValue({
                BoyBirthPlace: city.value
              });
            }
          }, 500);
        }
      }, {
        key: "detailsFilled",
        value: function detailsFilled() {
          if (this.currentGender === "Girl's") this.currentGender = "Boy's";else this.currentGender = "Girl's";
          this.BoyDetailsFilled.next(!this.BoyDetailsFilled.value);
        }
      }, {
        key: "selected",
        value: function selected(str) {
          if (str === 'looking') {
            var value = this.optionsForm.value.Looking;

            if (value === 'Groom') {
              this.createProfile = ['Myself', 'Daughter', 'Sister', 'Other'];
            } else {
              this.createProfile = ['Myself', 'Son', 'Brother', 'Other'];
            }
          } else {
            var _value2 = this.optionsForm.value.For;

            if (['Daughter', 'Sister'].includes(_value2)) {
              this.optionsForm.patchValue({
                Looking: 'Groom'
              });
            } else if (['Son', 'Brother'].includes(_value2)) {
              this.optionsForm.patchValue({
                Looking: 'Bride'
              });
            }
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          console.log(this.kundaliForm.value);

          if (this.kundaliForm.valid) {
            var tosend = new FormData();
            var boyDate = this.kundaliForm.get('BoyBirthDate').value + this.kundaliForm.get('BoyBirthMonth').value + this.kundaliForm.get('BoyBirthYear').value;
            var girlDate = this.kundaliForm.get('GirlBirthDate').value + this.kundaliForm.get('GirlBirthMonth').value + this.kundaliForm.get('GirlBirthYear').value;
            tosend.append('boy_birth_date', boyDate);
            tosend.append('boy_birth_time', this.kundaliForm.value.BoyBirthTime);
            tosend.append('boy_birth_place', this.kundaliForm.value.BoyBirthPlace);
            tosend.append('girl_birth_date', girlDate);
            tosend.append('girl_birth_time', this.kundaliForm.value.GirlBirthTime);
            tosend.append('girl_birth_place', this.kundaliForm.value.GirlBirthPlace);
            tosend.append('boy_name', this.kundaliForm.value.BoyName);
            tosend.append('girl_name', this.kundaliForm.value.GirlName);
            this.http.post('https://partner.hansmatrimony.com/api/getKundali', tosend).subscribe(function (response) {
              console.log(response);

              if (response.point) {
                _this16.homeService.points = response.point;
                _this16.homeService.HTMLResponse = response.full;
                _this16.homeService.HTMLResponse = _this16.homeService.HTMLResponse.split('ul').join('tr');
                _this16.homeService.HTMLResponse = _this16.homeService.HTMLResponse.split('li').join('td');
                _this16.homeService.kundaliForm = _this16.kundaliForm;
                console.log(_this16.homeService.HTMLResponse);

                _this16.router.navigateByUrl('/kundaliMatching');
              }
            });
          } else {
            console.log('form invalid');
          }
        }
      }]);

      return Kundali;
    }();

    Kundali.ctorParameters = function () {
      return [{
        type: src_app_new_home_new_home_service__WEBPACK_IMPORTED_MODULE_8__["NewHomeService"]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_6__["FindOpenHistoryProfileService"]
      }];
    };

    Kundali = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'kundali',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kundali.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kundali.component.css */
      "./src/app/new-landing-from-component/freeKundaliMatching/kundali.component.css"))["default"]]
    })], Kundali);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/hero/hero.css":
  /*!**********************************************************!*\
    !*** ./src/app/new-landing-from-component/hero/hero.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentHeroHeroCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.hero{\r\n    font-family:'Poppins';\r\n    overflow-x: hidden;\r\n}\r\n.mobile-screen-center{\r\n    text-align: center;\r\n}\r\n.logo-holder{\r\n    margin-left:20px;\r\n}\r\nspan{\r\n    font-family:'Poppins';\r\n}\r\nbutton{\r\n    outline:none;\r\n    border:none;\r\n    border-radius:10px;\r\n}\r\n.logo{\r\n    width:8.05vw;\r\n    height:auto;\r\n}\r\n.logo-text{\r\n    width:8.4vw;\r\n    height:auto;\r\n}\r\n.googleplay{\r\n    width:140px;\r\n    height:54px;\r\n    cursor:pointer;\r\n}\r\nli{\r\n    margin-right:40px;\r\n    font-weight:600;\r\n    list-style:none;\r\n}\r\n.illustration{\r\n    width:100%;\r\n    height:auto;\r\n}\r\n.groom-btn{\r\n    width:120px;\r\n    height:50px;\r\n    border:none;\r\n    background-color:#24ADD8;\r\n    border-radius:10px;\r\n    color:white;\r\n}\r\n.bride-btn{\r\n    width:120px;\r\n    height:50px;\r\n    border:none;\r\n    background-color:#EBF7FC;\r\n    border-radius:10px;\r\n    color:black;\r\n}\r\n.myself-btn{\r\n    width:120px;\r\n    height:50px;\r\n    border:none;\r\n    background-color:#24ADD8;\r\n    border-radius:10px;\r\n    color:white;\r\n}\r\n.down{\r\n    border:none;\r\n    border-radius:5px;\r\n\r\n}\r\n.register-btn{\r\n    width:230px;\r\n    height:50px;\r\n    border:none;\r\n    margin-top:20px;\r\n    background-color:#24ADD8;\r\n    border-radius:10px;\r\n    color:white;\r\n}\r\n@media only screen and (min-width:768px){\r\n    .stripes{\r\n        position:absolute;\r\n        left:4.5%;\r\n        top:27%;\r\n    }\r\n    .stripes2{\r\n        position:absolute;\r\n        left:40%;\r\n        bottom:-15%;\r\n    }\r\n    .stripes3{\r\n        position:absolute;\r\n        left:50%;\r\n        top:45%;\r\n    }\r\n    .vector-bottom{\r\n        position:absolute;\r\n        bottom: -20%;\r\n        width: 100px;\r\n        height:100px;\r\n    }\r\n    .content {\r\n        position: absolute;\r\n        left: 35%;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n    }\r\n    .logo-holder{\r\n        margin-left:60px;\r\n    }\r\n}\r\n@media only screen and (max-width:767px){\r\n    .stripes{\r\n        position:absolute;\r\n        width:50px;\r\n        height:50px;\r\n        left:0%;\r\n        top:27%;\r\n    }\r\n    .stripes2{\r\n        position:absolute;\r\n        width:50px;\r\n        height:50px;\r\n        right:0%;\r\n        top:10%;\r\n    }\r\n    .stripes3{\r\n        display:none;\r\n    }\r\n    .vector-bottom{\r\n        position:absolute;\r\n        bottom: 20%;\r\n        width: 50px;\r\n        height:50px;\r\n    }\r\n    .content {\r\n        justify-content:center;\r\n        margin-top:80px;\r\n    }\r\n    .logo{\r\n        width:20vw;\r\n        height:auto;\r\n    }\r\n    .logo-text{\r\n        width:20vw;\r\n        height:auto;\r\n    }\r\n    h2{\r\n        font-size:24px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvaGVyby9oZXJvLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxPQUFPO0lBQ1g7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsV0FBVztJQUNmO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsUUFBUTtRQUNSLE9BQU87SUFDWDtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBRVIsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFdBQVc7UUFDWCxPQUFPO1FBQ1AsT0FBTztJQUNYO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFdBQVc7UUFDWCxRQUFRO1FBQ1IsT0FBTztJQUNYO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uZXctbGFuZGluZy1mcm9tLWNvbXBvbmVudC9oZXJvL2hlcm8uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLmhlcm97XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucyc7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLm1vYmlsZS1zY3JlZW4tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dvLWhvbGRlcntcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJztcclxufVxyXG5idXR0b257XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxufVxyXG4ubG9nb3tcclxuICAgIHdpZHRoOjguMDV2dztcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5sb2dvLXRleHR7XHJcbiAgICB3aWR0aDo4LjR2dztcclxuICAgIGhlaWdodDphdXRvO1xyXG59XHJcbi5nb29nbGVwbGF5e1xyXG4gICAgd2lkdGg6MTQwcHg7XHJcbiAgICBoZWlnaHQ6NTRweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmxpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbn1cclxuLmlsbHVzdHJhdGlvbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxufVxyXG4uZ3Jvb20tYnRue1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmJyaWRlLWJ0bntcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0VCRjdGQztcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5teXNlbGYtYnRue1xyXG4gICAgd2lkdGg6MTIwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmRvd257XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cclxufVxyXG4ucmVnaXN0ZXItYnRue1xyXG4gICAgd2lkdGg6MjMwcHg7XHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgIC5zdHJpcGVze1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6NC41JTtcclxuICAgICAgICB0b3A6MjclO1xyXG4gICAgfVxyXG4gICAgLnN0cmlwZXMye1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6NDAlO1xyXG4gICAgICAgIGJvdHRvbTotMTUlO1xyXG4gICAgfVxyXG4gICAgLnN0cmlwZXMze1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgIHRvcDo0NSU7XHJcbiAgICB9XHJcbiAgICAudmVjdG9yLWJvdHRvbXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IC0yMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDoxMDBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMzUlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcbiAgICAubG9nby1ob2xkZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NjBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLnN0cmlwZXN7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBsZWZ0OjAlO1xyXG4gICAgICAgIHRvcDoyNyU7XHJcbiAgICB9XHJcbiAgICAuc3RyaXBlczJ7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICByaWdodDowJTtcclxuICAgICAgICB0b3A6MTAlO1xyXG4gICAgfVxyXG4gICAgLnN0cmlwZXMze1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIC52ZWN0b3ItYm90dG9te1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMjAlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgIH1cclxuICAgIC5sb2dvLXRleHR7XHJcbiAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/hero/hero.ts":
  /*!*********************************************************!*\
    !*** ./src/app/new-landing-from-component/hero/hero.ts ***!
    \*********************************************************/

  /*! exports provided: Hero */

  /***/
  function srcAppNewLandingFromComponentHeroHeroTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hero", function () {
      return Hero;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/find-open-history-profile.service */
    "./src/app/find-open-history-profile.service.ts");

    var Hero = /*#__PURE__*/function () {
      function Hero(router, form_builder, itemService) {
        _classCallCheck(this, Hero);

        this.router = router;
        this.form_builder = form_builder;
        this.itemService = itemService;
        this.name = "Myself";
        this.info = [];
        this.bride = true;
        this.groom = false;
        this.mobileBreakpoint = 768;
        this.currentGender = "Boy's";
        this.isCollapsed = true;
        this.optionsForm = this.form_builder.group({
          Looking: [null],
          For: [null]
        });
      }

      _createClass(Hero, [{
        key: "downloadApp",
        value: function downloadApp() {
          window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
        }
      }, {
        key: "goToCompatibility",
        value: function goToCompatibility() {
          if (this.bride === true) {
            this.itemService.compatibilityGender = 'Male';
          }

          if (this.groom === true) {
            this.itemService.compatibilityGender = 'Female';
          }

          if (this.name) {
            this.itemService.compatibilityLookingFor = this.name;
          }

          this.router.navigateByUrl('/fourReg');
        }
      }, {
        key: "groomToggle",
        value: function groomToggle() {
          this.bride = false;
          this.groom = true;
          console.log(this.bride, this.groom);
        }
      }, {
        key: "brideToggle",
        value: function brideToggle() {
          this.bride = true;
          this.groom = false;
        }
      }, {
        key: "getName",
        value: function getName() {}
      }, {
        key: "mySelf",
        value: function mySelf(id) {
          console.log(document.getElementById(id).innerHTML);
          this.name = document.getElementById(id).innerHTML;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mobileScreen();

          if (localStorage.getItem('gender')) {
            var gender = localStorage.getItem('gender');

            if (gender === "Female") {
              this.currentGender = "Girl's";
              this.optionsForm.patchValue({
                Looking: 'Groom'
              });
            } else {
              this.currentGender = "Boy's";
              this.optionsForm.patchValue({
                Looking: 'Bride'
              });
            }
          }
        }
      }, {
        key: "resize",
        value: function resize() {
          this.innerWidth = window.innerWidth;
          console.log(this.innerWidth);
          return this.innerWidth;
        }
      }, {
        key: "mobileScreen",
        value: function mobileScreen() {
          window.onload = this.resize;
          window.onresize = this.resize;

          if (this.resize() < this.mobileBreakpoint) {
            this.smallScreen = true;
          } else {
            this.smallScreen = false;
          }

          console.log(this.smallScreen);
        }
      }]);

      return Hero;
    }();

    Hero.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__["FindOpenHistoryProfileService"]
      }];
    };

    Hero = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'hero',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hero.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/hero/hero.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hero.css */
      "./src/app/new-landing-from-component/hero/hero.css"))["default"]]
    })], Hero);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/howItWorks/how-it-works.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/new-landing-from-component/howItWorks/how-it-works.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentHowItWorksHowItWorksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.wrapper-text{\r\n    opacity: 0;\r\n    -webkit-animation:ani2 0.5s ease-out forwards;\r\n            animation:ani2 0.5s ease-out forwards;\r\n}\r\n.wrapper-text h2{\r\n    opacity: 0;\r\n}\r\n.wrapper-text h2{\r\n    -webkit-animation:ani2 0.75s ease-out 3s forwards;\r\n            animation:ani2 0.75s ease-out 3s forwards;\r\n}\r\n@-webkit-keyframes ani2{\r\n    100%{opacity:1;}\r\n}\r\n@keyframes ani2{\r\n    100%{opacity:1;}\r\n}\r\nbutton{\r\n    box-shadow:10px 10px 10px 2px lightgrey;\r\n}\r\ndiv,h1,button,h2,h3{\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n.left{\r\n    border-right:1px dashed #24ADD8;\r\n    margin-left:-18px;\r\n}\r\n.right{\r\n    text-align:left\r\n}\r\n.right-text{\r\n    text-align:right;\r\n    margin-right:4vw;\r\n}\r\nh2{\r\n    margin:15vw;\r\n    text-align:center;\r\n    font-weight:bold;\r\n    font-size:4vw;\r\n}\r\nh3{\r\n    font-size:3vw;\r\n    font-weight:600;\r\n}\r\n@media only screen and (max-width: 330px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:4px;\r\n    }\r\n    button{\r\n        margin-bottom:100px;\r\n        width: 200px;\r\n        height: 40px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:4vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-6vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:35vw;\r\n        height:35vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:35vw;\r\n        height:35vw;\r\n    \r\n    }\r\n    h3{\r\n        font-size:3.2vw;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:2.2vw;\r\n        margin-bottom:60px;\r\n    }\r\n    h2{\r\n        margin:15vw;\r\n        text-align:center;\r\n        font-weight:bold;\r\n        font-size:5vw;\r\n    }\r\n    .right{\r\n        text-align:left;\r\n    }\r\n    \r\n}\r\n@media only screen and (min-width: 331px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-18px;\r\n    }\r\n    button{\r\n        margin-bottom:100px;\r\n        width: 200px;\r\n        height: 40px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:4vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-5vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:35vw;\r\n        height:35vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:32vw;\r\n        height:32vw;\r\n    \r\n    }\r\n    h3{\r\n        font-size:3.5vw;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:2.5vw;\r\n        \r\n        margin-bottom:60px;\r\n    }\r\n    h2{\r\n        margin:15vw;\r\n        text-align:center;\r\n        font-weight:bold;\r\n        font-size:4.5vw;\r\n    }\r\n    .right{\r\n        text-align:left;\r\n    }\r\n    \r\n}\r\n@media only screen and (min-width: 576px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-18px;\r\n    }\r\n    button{\r\n        margin-bottom:60px;\r\n        width: 200px;\r\n        height: 40px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:3.3vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-3.7vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n        margin-left:0vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    \r\n    }\r\n    p{\r\n        font-size:1.7vw;\r\n        \r\n    }\r\n    h2{\r\n        margin:15vw;\r\n        text-align:center;\r\n        font-weight:bold;\r\n        font-size:3vw;\r\n    }\r\n    h3{\r\n        font-size:3vw;\r\n        font-weight:600;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-28px;\r\n    }\r\n    button{\r\n        margin-bottom:60px;\r\n        width: 200px;\r\n        height: 40px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:2.3vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-3vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    \r\n    }\r\n    p{\r\n        font-size:1.9vw;\r\n        \r\n    }\r\n    h2{\r\n        font-size:4vw;\r\n        font-weight:600;\r\n    }\r\n    h3{\r\n        font-size:3vw;\r\n        font-weight:600;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-18px;\r\n    }\r\n    button{\r\n        margin-bottom:100px;\r\n        width: 250px;\r\n        height: 50px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:2.3vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-2.5vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    \r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-18px;\r\n    }\r\n    button{\r\n        margin-bottom:100px;\r\n        width: 358px;\r\n        height: 78px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:2.5vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-2vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    \r\n    }\r\n    p{\r\n        font-size:1.2vw;\r\n        \r\n    }\r\n    h3{\r\n        font-size:1.7vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 1600px){\r\n    .left{\r\n        border-right:1px dashed #24ADD8;\r\n        margin-left:-18px;\r\n    }\r\n    button{\r\n        margin-bottom:100px;\r\n        width: 400px;\r\n        height: 80px;\r\n        border:none;\r\n        border-radius:15px;\r\n        background: #24ADD8;\r\n        color: white;\r\n        font-weight:400;\r\n        font-size:2vw;\r\n    }\r\n    .join{\r\n        background-color:#24ADD8;\r\n        width:2vw;\r\n        height:2vw;\r\n        margin-left:-2vw;\r\n    }\r\n    .img-left{\r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:35vw;\r\n        height:auto;\r\n    }\r\n    .img-right{\r\n    \r\n        margin-top:-7vw;\r\n        margin-bottom:10vw;\r\n        width:30vw;\r\n        height:30vw;\r\n    \r\n    }\r\n    p{\r\n        font-size:1.1vw;\r\n        \r\n    }\r\n    h3{\r\n        font-size:2vw;\r\n    }\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvaG93SXRXb3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7SUFDSSxVQUFVO0lBQ1YsNkNBQXFDO1lBQXJDLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpREFBeUM7WUFBekMseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxLQUFLLFNBQVMsQ0FBQztBQUNuQjtBQUZBO0lBQ0ksS0FBSyxTQUFTLENBQUM7QUFDbkI7QUFDQTtJQUNJLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsU0FBUztRQUNULFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBOztRQUVJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7QUFFRTtJQUNFO1FBQ0ksK0JBQStCO1FBQy9CLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsU0FBUztRQUNULFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBOztRQUVJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7O1FBRWYsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25COztBQUVKO0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFNBQVM7UUFDVCxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLCtCQUErQjtRQUMvQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtRQUNaLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFNBQVM7UUFDVCxVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTs7UUFFSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXOztJQUVmO0lBQ0E7UUFDSSxlQUFlOztJQUVuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsU0FBUztRQUNULFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBOztRQUVJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7O0lBRWY7QUFDSjtBQUNBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixTQUFTO1FBQ1QsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7O1FBRUksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksZUFBZTs7SUFFbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7SUFDakI7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixTQUFTO1FBQ1QsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVztJQUNmO0lBQ0E7O1FBRUksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksZUFBZTs7SUFFbkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9uZXctbGFuZGluZy1mcm9tLWNvbXBvbmVudC9ob3dJdFdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLndyYXBwZXItdGV4dHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246YW5pMiAwLjVzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG59XHJcbi53cmFwcGVyLXRleHQgaDJ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbi53cmFwcGVyLXRleHQgaDJ7XHJcbiAgICBhbmltYXRpb246YW5pMiAwLjc1cyBlYXNlLW91dCAzcyBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaTJ7XHJcbiAgICAxMDAle29wYWNpdHk6MTt9XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYm94LXNoYWRvdzoxMHB4IDEwcHggMTBweCAycHggbGlnaHRncmV5O1xyXG59XHJcbmRpdixoMSxidXR0b24saDIsaDN7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmxlZnR7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IGRhc2hlZCAjMjRBREQ4O1xyXG4gICAgbWFyZ2luLWxlZnQ6LTE4cHg7XHJcbn1cclxuLnJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0XHJcbn1cclxuLnJpZ2h0LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjR2dztcclxufVxyXG5oMntcclxuICAgIG1hcmdpbjoxNXZ3O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjR2dztcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTozdnc7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMzBweCl7XHJcbiAgICAubGVmdHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IGRhc2hlZCAjMjRBREQ4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjRweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNEFERDg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6NHZ3O1xyXG4gICAgfVxyXG4gICAgLmpvaW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgICAgIHdpZHRoOjJ2dztcclxuICAgICAgICBoZWlnaHQ6MnZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi02dnc7XHJcbiAgICB9XHJcbiAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTB2dztcclxuICAgICAgICB3aWR0aDozNXZ3O1xyXG4gICAgICAgIGhlaWdodDozNXZ3O1xyXG4gICAgfVxyXG4gICAgLmltZy1yaWdodHtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzV2dztcclxuICAgICAgICBoZWlnaHQ6MzV2dztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOjMuMnZ3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjIuMnZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbjoxNXZ3O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOjV2dztcclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzMXB4KXtcclxuICAgIC5sZWZ0e1xyXG4gICAgICAgIGJvcmRlci1yaWdodDoxcHggZGFzaGVkICMyNEFERDg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTE4cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjRBREQ4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjR2dztcclxuICAgIH1cclxuICAgIC5qb2lue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI0QUREODtcclxuICAgICAgICB3aWR0aDoydnc7XHJcbiAgICAgICAgaGVpZ2h0OjJ2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDotNXZ3O1xyXG4gICAgfVxyXG4gICAgLmltZy1sZWZ0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzV2dztcclxuICAgICAgICBoZWlnaHQ6MzV2dztcclxuICAgIH1cclxuICAgIC5pbWctcmlnaHR7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW4tdG9wOi03dnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHZ3O1xyXG4gICAgICAgIHdpZHRoOjMydnc7XHJcbiAgICAgICAgaGVpZ2h0OjMydnc7XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTozLjV2dztcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToyLjV2dztcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW46MTV2dztcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0LjV2dztcclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAubGVmdHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IGRhc2hlZCAjMjRBREQ4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xOHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjRBREQ4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjMuM3Z3O1xyXG4gICAgfVxyXG4gICAgLmpvaW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgICAgIHdpZHRoOjJ2dztcclxuICAgICAgICBoZWlnaHQ6MnZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0zLjd2dztcclxuICAgIH1cclxuICAgIC5pbWctbGVmdHtcclxuICAgICAgICBtYXJnaW4tdG9wOi03dnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHZ3O1xyXG4gICAgICAgIHdpZHRoOjMwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjMwdnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHZ3O1xyXG4gICAgfVxyXG4gICAgLmltZy1yaWdodHtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzB2dztcclxuICAgICAgICBoZWlnaHQ6MzB2dztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MS43dnc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW46MTV2dztcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTozdnc7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6M3Z3O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5sZWZ0e1xyXG4gICAgICAgIGJvcmRlci1yaWdodDoxcHggZGFzaGVkICMyNEFERDg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTI4cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNEFERDg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6Mi4zdnc7XHJcbiAgICB9XHJcbiAgICAuam9pbntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNEFERDg7XHJcbiAgICAgICAgd2lkdGg6MnZ3O1xyXG4gICAgICAgIGhlaWdodDoydnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTN2dztcclxuICAgIH1cclxuICAgIC5pbWctbGVmdHtcclxuICAgICAgICBtYXJnaW4tdG9wOi03dnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHZ3O1xyXG4gICAgICAgIHdpZHRoOjMwdnc7XHJcbiAgICAgICAgaGVpZ2h0OjMwdnc7XHJcbiAgICB9XHJcbiAgICAuaW1nLXJpZ2h0e1xyXG4gICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDotN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTB2dztcclxuICAgICAgICB3aWR0aDozMHZ3O1xyXG4gICAgICAgIGhlaWdodDozMHZ3O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjl2dztcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgfVxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOjN2dztcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAubGVmdHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6MXB4IGRhc2hlZCAjMjRBREQ4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xOHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI0QUREODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyLjN2dztcclxuICAgIH1cclxuICAgIC5qb2lue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI0QUREODtcclxuICAgICAgICB3aWR0aDoydnc7XHJcbiAgICAgICAgaGVpZ2h0OjJ2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDotMi41dnc7XHJcbiAgICB9XHJcbiAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTB2dztcclxuICAgICAgICB3aWR0aDozMHZ3O1xyXG4gICAgICAgIGhlaWdodDozMHZ3O1xyXG4gICAgfVxyXG4gICAgLmltZy1yaWdodHtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzB2dztcclxuICAgICAgICBoZWlnaHQ6MzB2dztcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIC5sZWZ0e1xyXG4gICAgICAgIGJvcmRlci1yaWdodDoxcHggZGFzaGVkICMyNEFERDg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTE4cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMDBweDtcclxuICAgICAgICB3aWR0aDogMzU4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3OHB4O1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjRBREQ4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjIuNXZ3O1xyXG4gICAgfVxyXG4gICAgLmpvaW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgICAgIHdpZHRoOjJ2dztcclxuICAgICAgICBoZWlnaHQ6MnZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0ydnc7XHJcbiAgICB9XHJcbiAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTB2dztcclxuICAgICAgICB3aWR0aDozMHZ3O1xyXG4gICAgICAgIGhlaWdodDozMHZ3O1xyXG4gICAgfVxyXG4gICAgLmltZy1yaWdodHtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzB2dztcclxuICAgICAgICBoZWlnaHQ6MzB2dztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MS4ydnc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6MS43dnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpe1xyXG4gICAgLmxlZnR7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OjFweCBkYXNoZWQgIzI0QUREODtcclxuICAgICAgICBtYXJnaW4tbGVmdDotMThweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwMHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNEFERDg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6MnZ3O1xyXG4gICAgfVxyXG4gICAgLmpvaW57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjRBREQ4O1xyXG4gICAgICAgIHdpZHRoOjJ2dztcclxuICAgICAgICBoZWlnaHQ6MnZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0ydnc7XHJcbiAgICB9XHJcbiAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotN3Z3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTB2dztcclxuICAgICAgICB3aWR0aDozNXZ3O1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgfVxyXG4gICAgLmltZy1yaWdodHtcclxuICAgIFxyXG4gICAgICAgIG1hcmdpbi10b3A6LTd2dztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MzB2dztcclxuICAgICAgICBoZWlnaHQ6MzB2dztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MS4xdnc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6MnZ3O1xyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/howItWorks/how-it-works.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/new-landing-from-component/howItWorks/how-it-works.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: HowItWorks */

  /***/
  function srcAppNewLandingFromComponentHowItWorksHowItWorksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowItWorks", function () {
      return HowItWorks;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_Data_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../assets/Data/data.js */
    "./src/assets/Data/data.js");
    /* harmony import */


    var _animations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../animations.js */
    "./src/app/new-landing-from-component/animations.js");

    var HowItWorks = /*#__PURE__*/function () {
      function HowItWorks(router) {
        _classCallCheck(this, HowItWorks);

        this.router = router;
        this.mobileBreakpoint = 320;
        this.works = _assets_Data_data_js__WEBPACK_IMPORTED_MODULE_3__["works"];
      }

      _createClass(HowItWorks, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.iPhone();
          this.iPhone5 = this.iPhone();
          console.log(this.iPhone5);
        }
      }, {
        key: "goToCompatibility",
        value: function goToCompatibility() {
          this.router.navigateByUrl('/fourReg');
        }
      }, {
        key: "resize",
        value: function resize() {
          this.innerWidth = window.innerWidth;
          return this.innerWidth;
        }
      }, {
        key: "iPhone",
        value: function iPhone() {
          window.onload = this.resize;
          window.onresize = this.resize;
          console.log(this.innerWidth);

          if (this.resize() <= this.mobileBreakpoint) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return HowItWorks;
    }();

    HowItWorks.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HowItWorks = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'how-it-works',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./how-it-works.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/howItWorks/how-it-works.component.html"))["default"],
      animations: [_animations_js__WEBPACK_IMPORTED_MODULE_4__["landing"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./how-it-works.component.css */
      "./src/app/new-landing-from-component/howItWorks/how-it-works.component.css"))["default"]]
    })], HowItWorks);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/matchmakers/matchmakers.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/new-landing-from-component/matchmakers/matchmakers.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentMatchmakersMatchmakersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n.match-makers{\r\n   font-family:'Poppins', sans-serif;\r\n   margin-top:15vw;\r\n   margin-left:0px;\r\n   margin-right:0px;\r\n   overflow-x:hidden;\r\n}\r\n/* .temple-card{\r\n    height:45vh;\r\n    overflow:hidden;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    width:100%;\r\n} */\r\nh1{\r\n    font-weight:600;\r\n    margin-bottom:60px;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n.slide{\r\n    padding:20px;\r\n}\r\n/* .slide{\r\n    padding:20px;\r\n    -webkit-transform: scale(1.25);\r\n    -moz-transform: scale(1.25);\r\n    transform: scale(1.25);\r\n}\r\n.slick-center {\r\n    -webkit-transform: scale(0.95);\r\n    -moz-transform: scale(0.75);\r\n    transform: scale(0.75);\r\n} */\r\n@media only screen and (max-width: 575px){\r\n    img{\r\n        border-radius:20px;\r\n        padding:20px;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:5.5vw;\r\n    }\r\n    .slick-center {\r\n        transform: scale(1.15);\r\n    }\r\n}\r\n@media only screen and (min-width:576px){\r\n    img{\r\n        border-radius:20px;\r\n        padding:20px;\r\n    }\r\n    .slide{\r\n        padding:20px;\r\n        transform: scale(1.35);\r\n    }\r\n    .slick-center {\r\n        transform: scale(0.95);\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:4.5vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    img{\r\n        border-radius:10px;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:5.5vw;\r\n    }\r\n   \r\n}\r\n@media only screen and (min-width: 992px){\r\n    img{\r\n        border-radius:10px;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n   h1{\r\n       font-size:3vw;\r\n   }\r\n   img{\r\n       border-radius:10px;\r\n   }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvbWF0Y2htYWtlcnMvbWF0Y2htYWtlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7R0FDRyxpQ0FBaUM7R0FDakMsZUFBZTtHQUNmLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsaUJBQWlCO0FBQ3BCO0FBQ0E7Ozs7Ozs7O0dBUUc7QUFDSDtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7Ozs7Ozs7Ozs7R0FVRztBQUVIO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFHSSxzQkFBc0I7SUFDMUI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtRQUdaLHNCQUFzQjtJQUMxQjtJQUNBO1FBR0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUNBO0dBQ0c7T0FDSSxhQUFhO0dBQ2pCO0dBQ0E7T0FDSSxrQkFBa0I7R0FDdEI7QUFDSCIsImZpbGUiOiJzcmMvYXBwL25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50L21hdGNobWFrZXJzL21hdGNobWFrZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4ubWF0Y2gtbWFrZXJze1xyXG4gICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgIG1hcmdpbi10b3A6MTV2dztcclxuICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICBvdmVyZmxvdy14OmhpZGRlbjtcclxufVxyXG4vKiAudGVtcGxlLWNhcmR7XHJcbiAgICBoZWlnaHQ6NDV2aDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufSAqL1xyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNsaWRle1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG59XHJcbi8qIC5zbGlkZXtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbn1cclxuLnNsaWNrLWNlbnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xyXG59ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICBmb250LXNpemU6NS41dnc7XHJcbiAgICB9XHJcbiAgICAuc2xpY2stY2VudGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU3NnB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNsaWRle1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMzUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNSk7XHJcbiAgICB9XHJcbiAgICAuc2xpY2stY2VudGVyIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0LjV2dztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1LjV2dztcclxuICAgIH1cclxuICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgaDF7XHJcbiAgICAgICBmb250LXNpemU6M3Z3O1xyXG4gICB9XHJcbiAgIGltZ3tcclxuICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/matchmakers/matchmakers.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/new-landing-from-component/matchmakers/matchmakers.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MatchMakers */

  /***/
  function srcAppNewLandingFromComponentMatchmakersMatchmakersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchMakers", function () {
      return MatchMakers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MatchMakers = /*#__PURE__*/function () {
      function MatchMakers() {
        _classCallCheck(this, MatchMakers);

        this.customOptions = {
          loop: true,
          autoplay: true,
          center: true,
          dots: true,
          margin: 80,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        };
      }

      _createClass(MatchMakers, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MatchMakers;
    }();

    MatchMakers = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'matchmakers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./matchmakers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/matchmakers/matchmakers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./matchmakers.component.css */
      "./src/app/new-landing-from-component/matchmakers/matchmakers.component.css"))["default"]]
    })], MatchMakers);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/new-landing-from-component.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/new-landing-from-component.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentNewLandingFromComponentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50L25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/new-landing-from-component.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/new-landing-from-component.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NewLandingFromComponentComponent */

  /***/
  function srcAppNewLandingFromComponentNewLandingFromComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewLandingFromComponentComponent", function () {
      return NewLandingFromComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewLandingFromComponentComponent = /*#__PURE__*/function () {
      function NewLandingFromComponentComponent() {
        _classCallCheck(this, NewLandingFromComponentComponent);
      }

      _createClass(NewLandingFromComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewLandingFromComponentComponent;
    }();

    NewLandingFromComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-landing-from-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-landing-from-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/new-landing-from-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-landing-from-component.component.css */
      "./src/app/new-landing-from-component/new-landing-from-component.component.css"))["default"]]
    })], NewLandingFromComponentComponent);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/newApp/new-app.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/new-landing-from-component/newApp/new-app.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentNewAppNewAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\ndiv,h2,h3,h5{\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n.new-app{\r\n    margin-top:80px;\r\n}\r\nh2{\r\n    font-weight:bolder;\r\n    font-size:3.3vw;\r\n}\r\nh5{\r\n    font-weight:400;\r\n    font-size:2.7vw;\r\n}\r\nhr.one{\r\n    border:0.8px solid black;\r\n}\r\nhr.two{\r\n    border:0.8px solid lightgray;\r\n    margin-left:5px;\r\n    margin-top:-15px;\r\n}\r\n.googleplay{\r\n    cursor: pointer;\r\n}\r\n@media only screen and (max-width: 576px){\r\n    .new-app-illustration{\r\n        height:45vw;\r\n        width:45vw;\r\n        margin-top:10px;\r\n        margin-bottom:10px;\r\n    }\r\n    .googleplay{\r\n        height:13vw;\r\n        width:35vw;\r\n        margin-left:-1.4vw; \r\n        margin-bottom:10px;\r\n    }\r\n    h2{\r\n        font-weight:700;\r\n        font-size:4.5vw;\r\n    }\r\n    h5{\r\n        font-weight:400;\r\n        font-size:4vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 768px){\r\n    .new-app-illustration{\r\n        height:35vw;\r\n        width:35vw;\r\n    }\r\n    .googleplay{\r\n        height:10vw;\r\n        width:25vw;\r\n        margin-left:-1.4vw; \r\n    }\r\n    h2{\r\n        font-weight:bolder;\r\n        font-size:2.5vw;\r\n    }\r\n    h5{\r\n        font-weight:400;\r\n        font-size:2vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px){\r\n    .new-app-illustration{\r\n        height:35vw;\r\n        width:35vw;\r\n    }\r\n    .googleplay{\r\n        height:10vw;\r\n        width:25vw;\r\n        margin-left:-1.4vw; \r\n    }\r\n    h2{\r\n        font-weight:bolder;\r\n        font-size:2.5vw;\r\n    }\r\n    h5{\r\n        font-weight:400;\r\n        font-size:2vw;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px){\r\n    img{\r\n        height:6.3vw;\r\n        width:16.25vw;\r\n        margin-left:-1.4vw; \r\n    }\r\n    .new-app-illustration{\r\n        height:26vw;\r\n        width:26vw;\r\n    }\r\n    h2{\r\n        font-weight:bolder;\r\n        font-size:2.2vw;\r\n    }\r\n    h5{\r\n        font-weight:400;\r\n        font-size:1.5vw;\r\n    }\r\n    .googleplay{\r\n        height:8vw;\r\n        width:20vw;\r\n        margin-left:-1.4vw; \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvbmV3QXBwL25ldy1hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7SUFDakI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvbmV3QXBwL25ldy1hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbmRpdixoMixoMyxoNXtcclxuICAgIGZvbnQtZmFtaWx5OidQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4ubmV3LWFwcHtcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxufVxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTozLjN2dztcclxufVxyXG5oNXtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIGZvbnQtc2l6ZToyLjd2dztcclxufVxyXG5oci5vbmV7XHJcbiAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbn1cclxuaHIudHdve1xyXG4gICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbn1cclxuLmdvb2dsZXBsYXl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLm5ldy1hcHAtaWxsdXN0cmF0aW9ue1xyXG4gICAgICAgIGhlaWdodDo0NXZ3O1xyXG4gICAgICAgIHdpZHRoOjQ1dnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIGhlaWdodDoxM3Z3O1xyXG4gICAgICAgIHdpZHRoOjM1dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTEuNHZ3OyBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjQuNXZ3O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmV3LWFwcC1pbGx1c3RyYXRpb257XHJcbiAgICAgICAgaGVpZ2h0OjM1dnc7XHJcbiAgICAgICAgd2lkdGg6MzV2dztcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIGhlaWdodDoxMHZ3O1xyXG4gICAgICAgIHdpZHRoOjI1dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTEuNHZ3OyBcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgICAgICBmb250LXNpemU6Mi41dnc7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOjJ2dztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIC5uZXctYXBwLWlsbHVzdHJhdGlvbntcclxuICAgICAgICBoZWlnaHQ6MzV2dztcclxuICAgICAgICB3aWR0aDozNXZ3O1xyXG4gICAgfVxyXG4gICAgLmdvb2dsZXBsYXl7XHJcbiAgICAgICAgaGVpZ2h0OjEwdnc7XHJcbiAgICAgICAgd2lkdGg6MjV2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDotMS40dnc7IFxyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyLjV2dztcclxuICAgIH1cclxuICAgIGg1e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmb250LXNpemU6MnZ3O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6Ni4zdnc7XHJcbiAgICAgICAgd2lkdGg6MTYuMjV2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDotMS40dnc7IFxyXG4gICAgfVxyXG4gICAgLm5ldy1hcHAtaWxsdXN0cmF0aW9ue1xyXG4gICAgICAgIGhlaWdodDoyNnZ3O1xyXG4gICAgICAgIHdpZHRoOjI2dnc7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOjIuMnZ3O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjV2dztcclxuICAgIH1cclxuICAgIC5nb29nbGVwbGF5e1xyXG4gICAgICAgIGhlaWdodDo4dnc7XHJcbiAgICAgICAgd2lkdGg6MjB2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDotMS40dnc7IFxyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/newApp/new-app.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/new-landing-from-component/newApp/new-app.component.ts ***!
    \************************************************************************/

  /*! exports provided: NewApp */

  /***/
  function srcAppNewLandingFromComponentNewAppNewAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewApp", function () {
      return NewApp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewApp = /*#__PURE__*/function () {
      function NewApp() {
        _classCallCheck(this, NewApp);

        this.mobileBreakpoint = 480;
      }

      _createClass(NewApp, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.detectMobileScreen();
        }
      }, {
        key: "downloadApp",
        value: function downloadApp() {
          window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
        }
      }, {
        key: "resize",
        value: function resize() {
          this.innerWidth = window.innerWidth;
          return this.innerWidth;
        }
      }, {
        key: "detectMobileScreen",
        value: function detectMobileScreen() {
          window.onload = this.resize;
          window.onresize = this.resize;
          console.log(this.innerWidth);

          if (this.resize() < this.mobileBreakpoint) {
            this.mobileScreen = true;
          } else {
            this.mobileScreen = false;
          }
        }
      }]);

      return NewApp;
    }();

    NewApp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'new-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/newApp/new-app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-app.component.css */
      "./src/app/new-landing-from-component/newApp/new-app.component.css"))["default"]]
    })], NewApp);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/offlineCenters/offline-centers.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/offlineCenters/offline-centers.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentOfflineCentersOfflineCentersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\nh1{\r\n    font-weight:bolder;\r\n    margin-bottom:60px;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\n.match-makers{\r\n    overflow-x:hidden;\r\n}\r\n\r\n.slide{\r\n    padding:20px;\r\n}\r\n\r\n.featureCard2{\r\n    width: 95%;\r\n    height: auto;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.feature2Img{\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n\r\n.temple-card{\r\n    /* height:45vh; */\r\n    overflow:hidden;\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    /* width:100%; */\r\n}\r\n\r\n.center{\r\n    transform: scale(1.15);\r\n    z-index:3000;\r\n    border:1px solid black;\r\n}\r\n\r\np{\r\n    text-align:center;\r\n    margin-top:20px;\r\n}\r\n\r\n@media only screen and (max-width: 575px){\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        margin-top:20px;\r\n        font-size:5.5vw;\r\n    }\r\n    p{\r\n        font-size:4vw; \r\n    }\r\n    .slick-center {\r\n        transform: scale(1.15);\r\n    }\r\n    .match-makers{\r\n        font-family:'Poppins', sans-serif;\r\n        margin-top:6.25vw;\r\n        margin-left:0px;\r\n        margin-right:0px;\r\n     }\r\n}\r\n\r\n@media only screen and (min-width: 576px){\r\n    .match-makers{\r\n   font-family:'Poppins', sans-serif;\r\n   margin-top:10vw;\r\n   margin-left:0px;\r\n   margin-right:0px;\r\n}\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:4.5vw;\r\n    }\r\n    p{\r\n        font-size:1.8vw; \r\n    }\r\n    .slide{\r\n        padding:20px;\r\n        transform: scale(1.25);\r\n    }\r\n    .slick-center {\r\n        transform: scale(0.95);\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 768px){\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:20px;\r\n        font-size:4.5vw;\r\n        margin-top:20px;\r\n    }\r\n    p{\r\n        font-size:2vw; \r\n    }\r\n    .slick-center {\r\n        transform: scale(0.75);\r\n    }\r\n    .match-makers{\r\n        font-family:'Poppins', sans-serif;\r\n        margin-top:6.25vw;\r\n        margin-left:0px;\r\n        margin-right:0px;\r\n     }\r\n   \r\n}\r\n\r\n@media only screen and (min-width: 992px){\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:20px;\r\n        font-size:4vw;\r\n        margin-top:20px;\r\n    }\r\n    p{\r\n        font-size:2vw; \r\n    }\r\n    .slick-center {\r\n        transform: scale(0.75);\r\n    }\r\n    .match-makers{\r\n        font-family:'Poppins', sans-serif;\r\n        margin-top:6.25vw;\r\n        margin-left:0px;\r\n        margin-right:0px;\r\n     }\r\n}\r\n\r\n@media only screen and (min-width: 1200px){\r\n   h1{\r\n       font-size:2.5vw;\r\n       margin-bottom:60px;\r\n   }\r\n   p{\r\n    font-size:1.5vw; \r\n}\r\n.slide{\r\n    padding:20px;\r\n    transform: scale(1.15);\r\n}\r\n.slick-center {\r\n    transform: scale(0.85);\r\n}\r\n.match-makers{\r\n    font-family:'Poppins', sans-serif;\r\n    margin-top:10vw;\r\n    margin-left:0px;\r\n    margin-right:0px;\r\n }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvb2ZmbGluZUNlbnRlcnMvb2ZmbGluZS1jZW50ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGOztBQUVyRjtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFHSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFHSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtLQUNuQjtBQUNMOztBQUNBO0lBQ0k7R0FDRCxpQ0FBaUM7R0FDakMsZUFBZTtHQUNmLGVBQWU7R0FDZixnQkFBZ0I7QUFDbkI7SUFDSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUdaLHNCQUFzQjtJQUMxQjtJQUNBO1FBR0ksc0JBQXNCO0lBQzFCOztBQUVKOztBQUNBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFHSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtLQUNuQjs7QUFFTDs7QUFDQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBR0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7S0FDbkI7QUFDTDs7QUFDQTtHQUNHO09BQ0ksZUFBZTtPQUNmLGtCQUFrQjtHQUN0QjtHQUNBO0lBQ0MsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUdaLHNCQUFzQjtBQUMxQjtBQUNBO0lBR0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50L29mZmxpbmVDZW50ZXJzL29mZmxpbmUtY2VudGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmgxe1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYXRjaC1tYWtlcnN7XHJcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRle1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG59XHJcbi5mZWF0dXJlQ2FyZDJ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uZmVhdHVyZTJJbWd7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLnRlbXBsZS1jYXJke1xyXG4gICAgLyogaGVpZ2h0OjQ1dmg7ICovXHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIC8qIHdpZHRoOjEwMCU7ICovXHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgei1pbmRleDozMDAwO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxufVxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICBmb250LXNpemU6NS41dnc7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0dnc7IFxyXG4gICAgfVxyXG4gICAgLnNsaWNrLWNlbnRlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgfVxyXG4gICAgLm1hdGNoLW1ha2Vyc3tcclxuICAgICAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo2LjI1dnc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gICAgLm1hdGNoLW1ha2Vyc3tcclxuICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICBtYXJnaW4tdG9wOjEwdnc7XHJcbiAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgbWFyZ2luLXJpZ2h0OjBweDtcclxufVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICBmb250LXNpemU6NC41dnc7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxLjh2dzsgXHJcbiAgICB9XHJcbiAgICAuc2xpZGV7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIH1cclxuICAgIC5zbGljay1jZW50ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgICAgICBmb250LXNpemU6NC41dnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MnZ3OyBcclxuICAgIH1cclxuICAgIC5zbGljay1jZW50ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgIH1cclxuICAgIC5tYXRjaC1tYWtlcnN7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6Ni4yNXZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgIH1cclxuICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTo0dnc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MnZ3OyBcclxuICAgIH1cclxuICAgIC5zbGljay1jZW50ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgIH1cclxuICAgIC5tYXRjaC1tYWtlcnN7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6Ni4yNXZ3O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgIGgxe1xyXG4gICAgICAgZm9udC1zaXplOjIuNXZ3O1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gICB9XHJcbiAgIHB7XHJcbiAgICBmb250LXNpemU6MS41dnc7IFxyXG59XHJcbi5zbGlkZXtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbn1cclxuLnNsaWNrLWNlbnRlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG59XHJcbi5tYXRjaC1tYWtlcnN7XHJcbiAgICBmb250LWZhbWlseTonUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOjEwdnc7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/offlineCenters/offline-centers.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/offlineCenters/offline-centers.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: OfflineCenters */

  /***/
  function srcAppNewLandingFromComponentOfflineCentersOfflineCentersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfflineCenters", function () {
      return OfflineCenters;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OfflineCenters = /*#__PURE__*/function () {
      function OfflineCenters() {
        _classCallCheck(this, OfflineCenters);

        this.slidesToShow = 3;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.mobileBreakpoint = 480;
        this.slides = [{
          img: "../../../assets/offlineCenters/center1.jpg",
          details: "Shree Shiv Sai Dham Mandir"
        }, {
          img: "../../../assets/offlineCenters/center2.jpg",
          details: "Shree Lakshmi Narayan Mandir"
        }, {
          img: "../../../assets/offlineCenters/center3.jpg",
          details: "Shree Sanatan Dharam Mandir"
        }];
        this.slideConfig = {
          "slidesToShow": this.adjustsslidesToShow(),
          "slidesToScroll": 3,
          "autoplay": true,
          "dots": true,
          "centerMode": true,
          "centerPadding": '40px'
        };
        this.customOptions = {
          loop: true,
          autoplay: true,
          center: true,
          dots: true,
          autoWidth: true,
          // merge: true,
          // mergeFit: true,
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        };
      }

      _createClass(OfflineCenters, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adjustsslidesToShow();
        }
      }, {
        key: "adjustsslidesToShow",
        value: function adjustsslidesToShow() {
          this.innerWidth = window.innerWidth;

          if (this.innerWidth < this.mobileBreakpoint) {
            return 1;
          } else {
            return 3;
          }
        }
      }]);

      return OfflineCenters;
    }();

    OfflineCenters = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'offline-centers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offline-centers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/offlineCenters/offline-centers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offline-centers.component.css */
      "./src/app/new-landing-from-component/offlineCenters/offline-centers.component.css"))["default"]]
    })], OfflineCenters);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.css":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.css ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentTestimonialsTestimonialCardsTestimonialCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFsLWNhcmRzL3Rlc3RpbW9uaWFsLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGIiwiZmlsZSI6InNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFsLWNhcmRzL3Rlc3RpbW9uaWFsLWNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: TestimonialCards */

  /***/
  function srcAppNewLandingFromComponentTestimonialsTestimonialCardsTestimonialCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialCards", function () {
      return TestimonialCards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestimonialCards = /*#__PURE__*/function () {
      function TestimonialCards() {
        _classCallCheck(this, TestimonialCards);
      }

      _createClass(TestimonialCards, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialCards;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TestimonialCards.prototype, "testimonial", void 0);
    TestimonialCards = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'testimonial-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./testimonial-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./testimonial-cards.component.css */
      "./src/app/new-landing-from-component/testimonials/testimonial-cards/testimonial-cards.component.css"))["default"]]
    })], TestimonialCards);
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/testimonials/testimonials.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/new-landing-from-component/testimonials/testimonials.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewLandingFromComponentTestimonialsTestimonialsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n\r\n.testimonials{\r\n    overflow-x:hidden;\r\n}\r\n\r\n.testimonials{\r\n    margin-top:18.625vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\nh1{\r\n    margin-bottom:20px;\r\n    font-weight:bolder;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\n.container{\r\n    margin:6.25vw 20px;\r\n}\r\n\r\n/* #testimonial-image{\r\n    width:15.625vw;\r\n    height:21.875vw;\r\n    position:relative;\r\n    right:8vw;\r\n    bottom:7.8125vw;\r\n    border-radius:10px;\r\n} */\r\n\r\nh2{\r\n    font-size:1.75vw;\r\n    font-family:'Poppins', sans-serif;\r\n}\r\n\r\np{\r\n    font-size:1vw;\r\n}\r\n\r\n@media only screen and (max-width: 575px){\r\n    .testimonial-text{\r\n        margin-left:10px;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:19vw\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:270px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        border-radius:10px;\r\n        margin-left:auto;\r\n        margin-right:auto;\r\n    }\r\n    .comma{\r\n        width:30px;\r\n        height:40px;\r\n        margin-bottom:10px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 576px){\r\n    .container{\r\n        margin-top:80px;\r\n    }\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:14vw;\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:250px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:auto;;\r\n        margin-right:auto;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:13vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 720px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:280px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:10vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 768px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:270px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:10vw;\r\n        bottom:8vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 992px){\r\n    #testimonialImage{\r\n        width:150px;\r\n        height: 210px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:8vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:220px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:131px;\r\n        height:184px;\r\n        position:relative;\r\n        right:8vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-size:18px;\r\n    }\r\n    h2{\r\n        font-size:14px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:10px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1024px){\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:250px;\r\n        height:300px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:140px;\r\n        height:196px;\r\n        position:relative;\r\n        right:8vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:4.5vw;\r\n    }\r\n    h2{\r\n        font-size:18px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:12px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:20px;\r\n        height:29px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1200px){\r\n    #testimonialImage{\r\n        width:100px;\r\n        height: 150px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:10vw;\r\n    }\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:400px;\r\n        height:330px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    #testimonialImage{\r\n        width:200px;\r\n        height: 280px;\r\n        position:relative;\r\n        bottom:3vw;\r\n        right:6vw\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:3.2vw;\r\n    }\r\n    h2{\r\n        font-size:32px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:14px;\r\n        font-weight:400;\r\n    }\r\n    .comma{\r\n        width:40px;\r\n        height:50px;\r\n        margin-bottom:10px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (min-width: 1600px){\r\n    .container{\r\n        margin-top:80px;\r\n        /* margin-left:auto;\r\n        margin-right:auto; */\r\n    }\r\n    .row{\r\n        width:400px;\r\n        height:450px;\r\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\r\n        margin-left:40px;\r\n        margin-right:40px;\r\n        border-radius:10px;\r\n    }\r\n    .testimonial-image{\r\n        width:300px;\r\n        height:420px;\r\n        position:relative;\r\n        right:14vw;\r\n        bottom:5vw;\r\n    }\r\n    h1{\r\n        font-weight:600;\r\n        margin-bottom:60px;\r\n        font-size:3.7vw;\r\n    }\r\n    h2{\r\n        font-size:32px;\r\n        font-weight:bolder;\r\n    }\r\n    p{\r\n        font-size:12px;\r\n        font-weight:500;\r\n    }\r\n    .comma{\r\n        width:40px;\r\n        height:50px;\r\n        margin-bottom:10px;\r\n        margin-left:15px;\r\n    }\r\n    hr.one{\r\n        border:0.8px solid black;\r\n    }\r\n    hr.two{\r\n        border:0.8px solid lightgray;\r\n        margin-left:5px;\r\n        margin-top:-15px;\r\n    }\r\n    \r\n    \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWxhbmRpbmctZnJvbS1jb21wb25lbnQvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFxRjs7QUFFckY7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7Ozs7Ozs7R0FPRzs7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1Y7SUFDSjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0Msa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLDRCQUE0QjtRQUM1QixlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Y7NEJBQ29CO0lBQ3hCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLDJDQUEyQztRQUMzQyxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7QUFFSjs7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZUFBZTtRQUNmOzRCQUNvQjtJQUN4QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtRQUNmOzRCQUNvQjtJQUN4QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1Y7SUFDSjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZjs0QkFDb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osMkNBQTJDO1FBQzNDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7Ozs7QUFJSiIsImZpbGUiOiJzcmMvYXBwL25ldy1sYW5kaW5nLWZyb20tY29tcG9uZW50L3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4udGVzdGltb25pYWxze1xyXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbn1cclxuXHJcbi50ZXN0aW1vbmlhbHN7XHJcbiAgICBtYXJnaW4tdG9wOjE4LjYyNXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbmgxe1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW46Ni4yNXZ3IDIwcHg7XHJcbn0gICAgXHJcbi8qICN0ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgIHdpZHRoOjE1LjYyNXZ3O1xyXG4gICAgaGVpZ2h0OjIxLjg3NXZ3O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICByaWdodDo4dnc7XHJcbiAgICBib3R0b206Ny44MTI1dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn0gKi9cclxuaDJ7XHJcbiAgICBmb250LXNpemU6MS43NXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6J1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6MXZ3O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgLnRlc3RpbW9uaWFsLXRleHR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbiAgICAjdGVzdGltb25pYWxJbWFnZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTozdnc7XHJcbiAgICAgICAgcmlnaHQ6MTl2d1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6MjcwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDozMHB4O1xyXG4gICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIH1cclxuICAgIGhyLm9uZXtcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBoci50d297XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgfVxyXG4gICAgI3Rlc3RpbW9uaWFsSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206M3Z3O1xyXG4gICAgICAgIHJpZ2h0OjE0dnc7XHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgICAgICB3aWR0aDoxMzFweDtcclxuICAgICAgICBoZWlnaHQ6MTg0cHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6MTN2dztcclxuICAgICAgICBib3R0b206OHZ3O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgIGhlaWdodDoyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCl7XHJcbiAgICAjdGVzdGltb25pYWxJbWFnZXtcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTozdnc7XHJcbiAgICAgICAgcmlnaHQ6MTB2dztcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87ICovXHJcbiAgICB9XHJcbiAgICAucm93e1xyXG4gICAgICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyODBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsLWltYWdle1xyXG4gICAgICAgIHdpZHRoOjEzMXB4O1xyXG4gICAgICAgIGhlaWdodDoxODRweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICByaWdodDoxMHZ3O1xyXG4gICAgICAgIGJvdHRvbTo4dnc7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgfVxyXG4gICAgLmNvbW1he1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB9XHJcbiAgICBoci5vbmV7XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaHIudHdve1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgICN0ZXN0aW1vbmlhbEltYWdle1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOjN2dztcclxuICAgICAgICByaWdodDoxMHZ3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgKi9cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI3MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTMxcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE4NHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OjEwdnc7XHJcbiAgICAgICAgYm90dG9tOjh2dztcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MjlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgIH1cclxuICAgIGhyLm9uZXtcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgYmxhY2s7XHJcbiAgICB9XHJcbiAgICBoci50d297XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMTVweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgICN0ZXN0aW1vbmlhbEltYWdle1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOjN2dztcclxuICAgICAgICByaWdodDo4dnc7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvOyAqL1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6MjIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgICAgICB3aWR0aDoxMzFweDtcclxuICAgICAgICBoZWlnaHQ6MTg0cHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6OHZ3O1xyXG4gICAgICAgIGJvdHRvbTo1dnc7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgIH1cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgfVxyXG4gICAgLmNvbW1he1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjI5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB9XHJcbiAgICBoci5vbmV7XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaHIudHdve1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOjgwcHg7XHJcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgKi9cclxuICAgIH1cclxuICAgIC5yb3d7XHJcbiAgICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6NDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICB9XHJcbiAgICAudGVzdGltb25pYWwtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE5NnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0Ojh2dztcclxuICAgICAgICBib3R0b206NXZ3O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICBmb250LXNpemU6NC41dnc7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICAgIGhlaWdodDoyOXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgI3Rlc3RpbW9uaWFsSW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206M3Z3O1xyXG4gICAgICAgIHJpZ2h0OjEwdnc7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvOyAqL1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBoZWlnaHQ6MzMwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuICAgICN0ZXN0aW1vbmlhbEltYWdle1xyXG4gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOjN2dztcclxuICAgICAgICByaWdodDo2dndcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOjMuMnZ3O1xyXG4gICAgfVxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjMycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICB9XHJcbiAgICAuY29tbWF7XHJcbiAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICB9XHJcbiAgICBoci5vbmV7XHJcbiAgICAgICAgYm9yZGVyOjAuOHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaHIudHdve1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgICAgICAvKiBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDphdXRvOyAqL1xyXG4gICAgfVxyXG4gICAgLnJvd3tcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBoZWlnaHQ6NDUwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBtYXJnaW4tbGVmdDo0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuICAgIC50ZXN0aW1vbmlhbC1pbWFnZXtcclxuICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICBoZWlnaHQ6NDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6MTR2dztcclxuICAgICAgICBib3R0b206NXZ3O1xyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NjBweDtcclxuICAgICAgICBmb250LXNpemU6My43dnc7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MzJweDtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIH1cclxuICAgIC5jb21tYXtcclxuICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgfVxyXG4gICAgaHIub25le1xyXG4gICAgICAgIGJvcmRlcjowLjhweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIGhyLnR3b3tcclxuICAgICAgICBib3JkZXI6MC44cHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0xNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/new-landing-from-component/testimonials/testimonials.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/new-landing-from-component/testimonials/testimonials.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: Testimonials */

  /***/
  function srcAppNewLandingFromComponentTestimonialsTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Testimonials", function () {
      return Testimonials;
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


    var _assets_Data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/Data/data */
    "./src/assets/Data/data.js");

    var Testimonials = /*#__PURE__*/function () {
      function Testimonials() {
        _classCallCheck(this, Testimonials);

        this.slidesToShow = 3;
        this.mobileBreakpoint = 600;
        this.slides = [{
          img: "http://placehold.it/350x150/000000"
        }, {
          img: "http://placehold.it/350x150/111111"
        }, {
          img: "http://placehold.it/350x150/333333"
        }];
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
              items: 1
            },
            576: {
              items: 2
            },
            600: {
              items: 2
            },
            1000: {
              items: 3
            }
          }
        };
        this.testimonials = _assets_Data_data__WEBPACK_IMPORTED_MODULE_2__["testimonials"];
        console.log(this.testimonials);
      }

      _createClass(Testimonials, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adjustsslidesToShow();
        }
      }, {
        key: "resize",
        value: function resize() {
          this.innerWidth = window.innerWidth;
          return this.innerWidth;
        }
      }, {
        key: "adjustsslidesToShow",
        value: function adjustsslidesToShow() {
          window.onload = this.resize;
          window.onresize = this.resize;
          console.log(this.resize());

          if (this.resize() <= this.mobileBreakpoint) {
            return 1;
          } else if (this.resize() <= 768) {
            return 2;
          } else {
            return 2;
          }
        }
      }]);

      return Testimonials;
    }();

    Testimonials = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'testimonials',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./testimonials.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-landing-from-component/testimonials/testimonials.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./testimonials.component.css */
      "./src/app/new-landing-from-component/testimonials/testimonials.component.css"))["default"]]
    })], Testimonials);
    /***/
  },

  /***/
  "./src/app/notifications.service.ts":
  /*!******************************************!*\
    !*** ./src/app/notifications.service.ts ***!
    \******************************************/

  /*! exports provided: NotificationsService */

  /***/
  function srcAppNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
      return NotificationsService;
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


    var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js");
    /* harmony import */


    var _firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _firebase_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @firebase/messaging */
    "./node_modules/@firebase/messaging/dist/index.esm.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var NotificationsService = /*#__PURE__*/function () {
      function NotificationsService() {
        _classCallCheck(this, NotificationsService);
      }

      _createClass(NotificationsService, [{
        key: "init",
        value: function init() {
          return new Promise(function (resolve, reject) {
            navigator.serviceWorker.ready.then(function (registration) {
              // Don't crash an error if messaging not supported
              if (!_firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].messaging.isSupported()) {
                resolve();
                return;
              }

              var messaging = _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].messaging(); // Register the Service Worker


              messaging.useServiceWorker(registration); // Initialize your VAPI key

              messaging.usePublicVapidKey(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase.vapidKey); // Optional and not covered in the article
              // Listen to messages when your app is in the foreground

              messaging.onMessage(function (payload) {
                console.log(payload);
              }); // Optional and not covered in the article
              // Handle token refresh

              messaging.onTokenRefresh(function () {
                messaging.getToken().then(function (refreshedToken) {
                  console.log(refreshedToken);
                })["catch"](function (err) {
                  console.error(err);
                });
              });
              resolve();
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "requestPermission",
        value: function requestPermission() {
          var _this17 = this;

          return new Promise(function (resolve) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var messaging;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (Notification) {
                        _context3.next = 3;
                        break;
                      }

                      resolve();
                      return _context3.abrupt("return");

                    case 3:
                      if (_firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].messaging.isSupported()) {
                        _context3.next = 6;
                        break;
                      }

                      resolve();
                      return _context3.abrupt("return");

                    case 6:
                      _context3.prev = 6;
                      messaging = _firebase_app__WEBPACK_IMPORTED_MODULE_2__["firebase"].messaging();
                      Notification.requestPermission(function (status) {
                        console.log(status);
                      });
                      _context3.next = 11;
                      return messaging.getToken();

                    case 11:
                      this.token = _context3.sent;
                      console.log('User notifications token:', this.token);
                      _context3.next = 17;
                      break;

                    case 15:
                      _context3.prev = 15;
                      _context3.t0 = _context3["catch"](6);

                    case 17:
                      resolve();

                    case 18:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[6, 15]]);
            }));
          });
        }
      }, {
        key: "getCurrentToken",
        value: function getCurrentToken() {
          return this.token ? this.token : '';
        }
      }]);

      return NotificationsService;
    }();

    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationsService);
    /***/
  },

  /***/
  "./src/app/offers/lockdown-off/lockdown-off.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/offers/lockdown-off/lockdown-off.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOffersLockdownOffLockdownOffComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n::ng-deep .mat-dialog-container{\r\n    padding: 0px;\r\n    border-radius: 10px;\r\n    background-image: url('https://hansmatrimony.s3.ap-south-1.amazonaws.com/webImages/320+grey.jpg');\r\n    background-size: contain;\r\n}\r\n::ng-deep .mat-dialog-content{\r\n    max-height: 79vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop{\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n}\r\n#cancel{\r\n    position: absolute;\r\n    z-index: 99999999;\r\n    right: 0;\r\n    top: -5px;\r\n}\r\n#topBanner{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#bannerDiv{\r\n    width: auto;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: auto;\r\n    position: relative;\r\n    padding-top: 10px;\r\n}\r\n#bannerImg{\r\n    width: auto;\r\n    height: 10%;\r\n    margin-top: 20px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n#bannerText {\r\n    position: absolute;\r\n    font-size: 2rem;\r\n    color: white;\r\n    top: 5px;\r\n    left: 25%;\r\n    font-weight: 500;\r\n}\r\n#offerHeadLine{\r\n    color: #737373;\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n}\r\n.subHeading{\r\n    font-size: 1.4rem;\r\n    color: #797979;\r\n    margin-top: 20px;\r\n\r\n}\r\n.subHeading2{\r\n    margin-top: 50px;\r\n}\r\n.timer {\r\n    display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-evenly;\r\n        margin: 30px 0px 0px;\r\n}\r\n.offer-btn{\r\n    background: #D313AE;\r\n            color: white;\r\n            font-size: 1.5rem;\r\n            font-weight: bold;\r\n            padding: 10px 50px;\r\n            border-radius: 10px;\r\n            margin: 30px 0px\r\n}\r\n@media (max-width: 575px) {\r\n    #bannerText {\r\n        position: absolute;\r\n        font-size: 2rem;\r\n        color: white;\r\n        top: 5px;\r\n        left: 20%;\r\n        font-weight: 500;\r\n    }\r\n\r\n}\r\n@media (max-width: 350px) {\r\n    #bannerText {\r\n        position: absolute;\r\n        font-size: 1.6rem;\r\n        color: white;\r\n        top: 10px;\r\n        left: 20%;\r\n        font-weight: 500;\r\n    }\r\n    #offerHeadLine{\r\n        color: #737373;\r\n        font-weight: bold;\r\n        margin-top: 20px;\r\n        font-size: 1.4rem;\r\n    }\r\n    .subHeading{\r\n        font-size: 1.1rem;\r\n        color: #797979;\r\n        margin-top: 20px;\r\n    \r\n    }\r\n    .subHeading2 {\r\n        margin-top: 20px;\r\n    }\r\n    .timer {\r\n        display: flex;\r\n            flex-direction: row;\r\n            align-items: center;\r\n            justify-content: space-evenly;\r\n            margin: 10px 0px 0px;\r\n    }\r\n    .offer-btn{\r\n        background: #D313AE;\r\n                color: white;\r\n                font-size: 1.5rem;\r\n                font-weight: bold;\r\n                padding: 10px 50px;\r\n                border-radius: 10px;\r\n                margin: 10px 0px\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL2xvY2tkb3duLW9mZi9sb2NrZG93bi1vZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlHQUFpRztJQUNqRyx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMkVBQTJFO0FBQy9FO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCOztBQUVwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO1FBQ1QsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0Isb0JBQW9CO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7WUFDWCxZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CO0FBQ1o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osUUFBUTtRQUNSLFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osU0FBUztRQUNULFNBQVM7UUFDVCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxnQkFBZ0I7O0lBRXBCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7WUFDVCxtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLDZCQUE2QjtZQUM3QixvQkFBb0I7SUFDNUI7SUFDQTtRQUNJLG1CQUFtQjtnQkFDWCxZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkI7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzL2xvY2tkb3duLW9mZi9sb2NrZG93bi1vZmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9oYW5zbWF0cmltb255LnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS93ZWJJbWFnZXMvMzIwK2dyZXkuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBtYXgtaGVpZ2h0OiA3OXZoO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcclxufVxyXG5cclxuI2NhbmNlbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbiN0b3BCYW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Jhbm5lckRpdntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuI2Jhbm5lckltZ3tcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbiNiYW5uZXJUZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI29mZmVySGVhZExpbmV7XHJcbiAgICBjb2xvcjogIzczNzM3MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnN1YkhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbn1cclxuXHJcbi5zdWJIZWFkaW5nMntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnRpbWVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwcHggMHB4O1xyXG59XHJcbi5vZmZlci1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDMxM0FFO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCA1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAjYmFubmVyVGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgI2Jhbm5lclRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgI29mZmVySGVhZExpbmV7XHJcbiAgICAgICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIC5zdWJIZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5zdWJIZWFkaW5nMiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC50aW1lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm9mZmVyLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRDMxM0FFO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/offers/lockdown-off/lockdown-off.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/offers/lockdown-off/lockdown-off.component.ts ***!
    \***************************************************************/

  /*! exports provided: LockdownOffComponent */

  /***/
  function srcAppOffersLockdownOffLockdownOffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LockdownOffComponent", function () {
      return LockdownOffComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");

    var LockdownOffComponent = /*#__PURE__*/function () {
      function LockdownOffComponent(dialogRef, languageService) {
        _classCallCheck(this, LockdownOffComponent);

        this.dialogRef = dialogRef;
        this.languageService = languageService;
        this.seconds = 59;
        this.minutes = 0;
      }

      _createClass(LockdownOffComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.setTimer();
          setTimeout(function () {
            _this18.closeDialog();
          }, 10000);
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "setTimer",
        value: function setTimer() {
          var _this19 = this;

          this.minutes = Math.floor(Math.random() * 20) + 10;
          console.log(this.seconds);
          var timer = setInterval(function () {
            _this19.seconds = _this19.seconds - 1;

            if (_this19.seconds === -1 && _this19.minutes !== 0) {
              _this19.seconds = 60;
              _this19.minutes = _this19.minutes - 1;
            } else if (_this19.minutes === 0 && _this19.seconds === 0) {
              clearInterval(timer);
            }
          }, 1000);
        }
      }]);

      return LockdownOffComponent;
    }();

    LockdownOffComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    LockdownOffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lockdown-off',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lockdown-off.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/lockdown-off/lockdown-off.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lockdown-off.component.css */
      "./src/app/offers/lockdown-off/lockdown-off.component.css"))["default"]]
    })], LockdownOffComponent);
    /***/
  },

  /***/
  "./src/app/offers/offer-one/offer-one.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/offers/offer-one/offer-one.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOffersOfferOneOfferOneComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n::ng-deep .mat-dialog-container{\r\n    background: transparent;\r\n    padding: 0px;\r\n    border-radius: 20px;\r\n}\r\n::ng-deep .mat-dialog-content{\r\n    max-height: 79vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop{\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n}\r\nmain{\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n.topDiv{\r\n    position: relative;\r\n    background: transparent;\r\n    margin-top: 100px;\r\n}\r\n#profileImage{\r\n    width: 150px;\r\n    height: 150px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -75px;\r\n    background: white;\r\n}\r\n.contentText {\r\n    color: #797979;\r\n    margin-top: 15px;\r\n    font-size: 1.3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL29mZmVyLW9uZS9vZmZlci1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSwyRUFBMkU7QUFDL0U7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9vZmZlcnMvb2ZmZXItb25lL29mZmVyLW9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBtYXgtaGVpZ2h0OiA3OXZoO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNzUpLCByZ2JhKDAsIDAsIDAsIDAuNzUpKTtcclxufVxyXG5cclxubWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnRvcERpdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlSW1hZ2V7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNzVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGVudFRleHQge1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/offers/offer-one/offer-one.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/offers/offer-one/offer-one.component.ts ***!
    \*********************************************************/

  /*! exports provided: OfferOneComponent */

  /***/
  function srcAppOffersOfferOneOfferOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferOneComponent", function () {
      return OfferOneComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");

    var OfferOneComponent = /*#__PURE__*/function () {
      function OfferOneComponent(dialogRef, data, languageService) {
        _classCallCheck(this, OfferOneComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
        this.numberGenerated = false;
      }

      _createClass(OfferOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "generateRandom",
        value: function generateRandom() {
          if (!this.numberGenerated) {
            this.generatedNumber = '+91 - ' + Math.floor(Math.random() * 10000 + 70000) + 'XXXXX';
            this.numberGenerated = true;
            return this.generatedNumber;
          } else {
            return this.generatedNumber;
          }
        }
      }, {
        key: "getProfilePhoto",
        value: function getProfilePhoto() {
          console.log(this.data.data.profile);

          if (this.data.data && this.data.data.photo) {
            return this.data.data.photo;
          } else if (this.data.data && this.data.data.carousel) {
            var carousel = JSON.parse(this.data.data.carousel);
            var keys = Object.keys(carousel); // console.log(carousel[index]);

            return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[0]];
          } else {
            if (this.data.data && this.data.data.gender === 'Male') {
              return '../../assets/male_pic.png';
            } else {
              return '../../assets/female_pic.png';
            }
          }
        }
      }]);

      return OfferOneComponent;
    }();

    OfferOneComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    OfferOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-one',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer-one.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-one/offer-one.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer-one.component.css */
      "./src/app/offers/offer-one/offer-one.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], OfferOneComponent);
    /***/
  },

  /***/
  "./src/app/offers/offer-two/offer-two.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/offers/offer-two/offer-two.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOffersOfferTwoOfferTwoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-dialog-container{\r\n    background: transparent;\r\n    padding: 0px;\r\n    border-radius: 20px;\r\n}\r\n::ng-deep .mat-dialog-content{\r\n    max-height: 79vh;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n::ng-deep .cdk-overlay-dark-backdrop{\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75));\r\n}\r\nmain{\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n.topDiv{\r\n    position: relative;\r\n    background: transparent;\r\n    margin-top: 100px;\r\n}\r\n#profileImage{\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: -60px;\r\n    background: white;\r\n}\r\n.contentText {\r\n    color: #797979;\r\n    margin-top: 15px;\r\n    font-size: 1.3rem;\r\n}\r\n#cross {\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: grey;\r\n    border: none;\r\n    position: absolute;\r\n    right: 0px;\r\n    border-radius: 100%;\r\n    top: -15px;\r\n    padding: 7px;\r\n}\r\n@media (max-width: 350px) {\r\n    #cross {\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: grey;\r\n    border: none;\r\n    position: absolute;\r\n    right: 10px;\r\n    border-radius: 100%;\r\n    top: 20px;\r\n    padding: 7px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL29mZmVyLXR3by9vZmZlci10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDJFQUEyRTtBQUMvRTtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUE7SUFDSTtJQUNBLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vZmZlcnMvb2ZmZXItdHdvL29mZmVyLXR3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIG1heC1oZWlnaHQ6IDc5dmg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC43NSksIHJnYmEoMCwgMCwgMCwgMC43NSkpO1xyXG59XHJcblxyXG5tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4udG9wRGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuI3Byb2ZpbGVJbWFnZXtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC02MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW50VGV4dCB7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuI2Nyb3NzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICNjcm9zcyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/offers/offer-two/offer-two.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/offers/offer-two/offer-two.component.ts ***!
    \*********************************************************/

  /*! exports provided: OfferTwoComponent */

  /***/
  function srcAppOffersOfferTwoOfferTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferTwoComponent", function () {
      return OfferTwoComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");

    var OfferTwoComponent = /*#__PURE__*/function () {
      function OfferTwoComponent(dialogRef, data, languageService) {
        _classCallCheck(this, OfferTwoComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.languageService = languageService;
      }

      _createClass(OfferTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close();
        }
      }, {
        key: "userPhoto",
        value: function userPhoto() {
          if (localStorage.getItem('profile_photo')) {
            return localStorage.getItem('profile_photo');
          } else {
            if (this.data.data.profile.gender === 'Male') {
              return '../../assets/male_pic.png';
            } else {
              return '../../assets/female_pic.png';
            }
          }
        }
      }, {
        key: "getProfilePhoto",
        value: function getProfilePhoto() {
          console.log(this.data.data.profile);

          if (this.data.data.profile && this.data.data.family) {
            return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.data.data.profile.photo;
          } else if (this.data.data.profile.carousel) {
            var carousel = JSON.parse(this.data.data.profile.carousel);
            var keys = Object.keys(carousel); // console.log(carousel[index]);

            return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[0]];
          } else {
            if (this.data.data.profile.gender === 'Male') {
              return '../../assets/male_pic.png';
            } else {
              return '../../assets/female_pic.png';
            }
          }
        }
      }]);

      return OfferTwoComponent;
    }();

    OfferTwoComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    OfferTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offer-two',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offer-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offer-two/offer-two.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offer-two.component.css */
      "./src/app/offers/offer-two/offer-two.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], OfferTwoComponent);
    /***/
  },

  /***/
  "./src/app/phone-number-screen/phone-number-screen.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/phone-number-screen/phone-number-screen.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhoneNumberScreenPhoneNumberScreenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.containerOne{\r\n    padding: 5% 0px;\r\n    background-color: #34b7f1;\r\n}\r\n.containerTwo{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 5% 0px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.short-width{\r\n    width: 25%;\r\n    margin: auto auto;\r\n}\r\n.submitImage{\r\n    width: 50px;\r\n}\r\n@media (max-width: 900px) {\r\n    .containerOne{\r\n        padding: 25% 0px;\r\n    }\r\n    .containerTwo{\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: center;\r\n        padding: 25% 0px 0px;\r\n        font-size: 24px;\r\n        margin: 0px;\r\n    }\r\n    .short-width{\r\n        width: 80%;\r\n    }\r\n    \r\n}\r\n@media screen and (max-width: 350px) {\r\n    .submitImage{\r\n        width: 40px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvbmUtbnVtYmVyLXNjcmVlbi9waG9uZS1udW1iZXItc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsV0FBVztJQUNmO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9waG9uZS1udW1iZXItc2NyZWVuL3Bob25lLW51bWJlci1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyT25le1xyXG4gICAgcGFkZGluZzogNSUgMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0YjdmMTtcclxufVxyXG4uY29udGFpbmVyVHdve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JSAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zaG9ydC13aWR0aHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdEltYWdle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmNvbnRhaW5lck9uZXtcclxuICAgICAgICBwYWRkaW5nOiAyNSUgMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lclR3b3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNSUgMHB4IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2hvcnQtd2lkdGh7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgLnN1Ym1pdEltYWdle1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/phone-number-screen/phone-number-screen.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/phone-number-screen/phone-number-screen.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PhoneNumberScreenComponent */

  /***/
  function srcAppPhoneNumberScreenPhoneNumberScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhoneNumberScreenComponent", function () {
      return PhoneNumberScreenComponent;
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


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var _notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../notifications.service */
    "./src/app/notifications.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../verify-otp/verify-otp.component */
    "./src/app/verify-otp/verify-otp.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PhoneNumberScreenComponent = /*#__PURE__*/function () {
      function PhoneNumberScreenComponent(formBuilder, http, notification, spinner, dialog, breakPointObserver, ngxNotificationService, router) {
        _classCallCheck(this, PhoneNumberScreenComponent);

        this.formBuilder = formBuilder;
        this.http = http;
        this.notification = notification;
        this.spinner = spinner;
        this.dialog = dialog;
        this.breakPointObserver = breakPointObserver;
        this.ngxNotificationService = ngxNotificationService;
        this.router = router;
        this.pollingCount = 0; // stop true caller polling

        this.stopPolling = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this.phoneNumber = this.formBuilder.group({
          phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(PhoneNumberScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.numberCheck = null;

          if (localStorage.getItem('mobile_number')) {
            this.router.navigateByUrl('home');
          } else {
            localStorage.removeItem('id');
            localStorage.removeItem('gender');
            localStorage.removeItem('mobile_number');
            localStorage.removeItem('is_lead');
            localStorage.removeItem('RegisterNumber');
          }

          this.spinner.hide(); // open true caller for login if installed
          // this.callTruecaller();
        }
      }, {
        key: "submitPhone",
        value: function submitPhone() {
          var _this20 = this;

          this.spinner.show();
          localStorage.setItem('is_lead', '');

          if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '' && !localStorage.getItem('fcm_app')) {
            var _params2;

            // tslint:disable-next-line: max-line-length
            this.http.get(' https://partner.hansmatrimony.com/api/auth', {
              params: (_params2 = {}, _defineProperty(_params2, 'phone_number', this.phoneNumber.value.phone), _defineProperty(_params2, 'fcm_id', this.notification.getCurrentToken()), _params2)
            }).subscribe(function (res) {
              console.log(res);
              _this20.authData = res;

              if (res.registered === 1) {
                _this20.openVerificationDialog(res.is_lead);
              } else {
                localStorage.setItem('RegisterNumber', _this20.phoneNumber.value.phone);

                _this20.analyticsEvent('Four Page Registration Page Zero'); // gtag app + web


                window.gtag('config', 'G-1ES443XD0F', {
                  user_id: _this20.phoneNumber.value.phone
                });

                _this20.ngxNotificationService.info('You are not registered with us, Kindly register');

                _this20.router.navigateByUrl('fourReg');
              }

              _this20.spinner.hide();
            }, function (err) {
              _this20.spinner.hide();

              console.log(err);
            });
          } else if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '' && localStorage.getItem('fcm_app')) {
            var _params3;

            this.http.get(' https://partner.hansmatrimony.com/api/auth', {
              params: (_params3 = {}, _defineProperty(_params3, 'phone_number', this.phoneNumber.value.phone), _defineProperty(_params3, 'fcm_app', localStorage.getItem('fcm_app')), _params3)
            }).subscribe(function (res) {
              console.log(res);
              _this20.authData = res;

              if (res.registered === 1) {
                _this20.openVerificationDialog(res.is_lead);
              } else {
                localStorage.setItem('RegisterNumber', _this20.phoneNumber.value.phone);

                _this20.analyticsEvent('Four Page Registration Page Zero'); // gtag app + web


                window.gtag('config', 'G-1ES443XD0F', {
                  user_id: _this20.phoneNumber.value.phone
                });

                _this20.ngxNotificationService.info('You are not registered with us, Kindly register');

                _this20.router.navigateByUrl('fourReg');
              }

              _this20.spinner.hide();
            }, function (err) {
              _this20.spinner.hide();

              console.log(err);
            });
          } else {
            this.ngxNotificationService.info('Enter a valid number');
            this.spinner.hide();
          }
        }
      }, {
        key: "openVerificationDialog",
        value: function openVerificationDialog(isLead) {
          var _this21 = this;

          var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogConfig"]();
          dialogConfig.hasBackdrop = true;
          this.breakPointObserver.observe(['(min-width: 1024px)']).subscribe(function (result) {
            if (result.matches) {
              console.log('screen is greater than  1024px');
              dialogConfig.maxWidth = '30vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = false;
            } else {
              console.log('screen is less than  1024px');
              dialogConfig.minWidth = '90vw';
              dialogConfig.maxHeight = '80vh';
              dialogConfig.disableClose = false;
            }
          });
          dialogConfig.data = {
            mobile: this.phoneNumber.value.phone,
            is_lead: isLead
          };
          var dialogRef = this.dialog.open(_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_10__["VerifyOtpComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
              if (data.success === 'verified') {
                localStorage.setItem('authData', JSON.stringify(_this21.authData));
                localStorage.setItem('mobile_number', _this21.phoneNumber.value.phone);
                localStorage.setItem('is_lead', data.is_lead);
                localStorage.setItem('id', _this21.authData.id);

                _this21.router.navigateByUrl('chat');
              } else {
                return;
              }
            }
          });
        }
      }, {
        key: "analyticsEvent",
        value: function analyticsEvent(event) {
          window.ga('send', 'event', event, '', {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + event + ' successful');
            }
          }); // gtag app + web

          window.gtag('event', event, {
            event_callback: function event_callback() {
              console.log('Tracking gtag ' + event + ' successful');
            }
          });
        } // check and login through true caller

      }, {
        key: "callTruecaller",
        value: function callTruecaller() {
          var _this22 = this;

          // tslint:disable-next-line: max-line-length
          var randomNumber = Math.floor(Math.random() * 100000000) + 1000000;
          window.location = "truecallersdk://truesdk/web_verify?requestNonce=".concat(randomNumber, "&partnerKey=0Jsfr258a371a13bd4fbf905228721f9fa2c2&partnerName=Hans Matrimony&lang=en&title=Login&skipOption=USE ANOTHER MOBILE NUMBER");
          setTimeout(function () {
            if (document.hasFocus()) {
              console.log('True caller not found'); // Truecaller app not present on the device and you redirect the user
              // to your alternate verification page
            } else {
              _this22.getUserFromTrueCaller(randomNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(function (e) {
                throw new Error('True Caller Not Responding');
              })).subscribe(function (response) {
                _this22.pollingCount++;
                console.log(response);

                if (_this22.pollingCount < 10) {
                  if (response.status === 1) {
                    console.log(response.data);
                    var trueData = JSON.parse(response.data);

                    if (trueData.phoneNumbers && trueData.phoneNumbers[0]) {
                      console.log(trueData);

                      _this22.loginUsingTruecaller(trueData.phoneNumbers[0]);
                    }

                    _this22.stopPolling.next();
                  } else if (response.status !== 0) {
                    _this22.ngxNotificationService.error('True Caller Not Responding');

                    _this22.stopPolling.next();
                  }
                } else {
                  _this22.stopPolling.next();
                }
              }, function (err) {
                _this22.ngxNotificationService.error('True Caller Not Responding');

                console.log(err);

                _this22.stopPolling.next();
              }); // Truecaller app present on the device and the profile overlay opens
              // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
              // callback URL - post which, you can refresh the session at your frontend and complete the user  verification

            }
          }, 600);
        }
      }, {
        key: "getUserFromTrueCaller",
        value: function getUserFromTrueCaller(requestId) {
          var _this23 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["timer"])(1, 3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function () {
            return _this23.http.get("https://partner.hansmatrimony.com/api/getTrueCallerResponse?requestId=".concat(requestId));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["retry"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.stopPolling));
        }
      }, {
        key: "loginUsingTruecaller",
        value: function loginUsingTruecaller(mob) {
          var _this24 = this;

          this.spinner.show();
          localStorage.setItem('is_lead', '');

          if (mob && !localStorage.getItem('fcm_app')) {
            var _params4;

            // tslint:disable-next-line: max-line-length
            this.http.get(' https://partner.hansmatrimony.com/api/auth', {
              params: (_params4 = {}, _defineProperty(_params4, 'phone_number', mob), _defineProperty(_params4, 'fcm_id', this.notification.getCurrentToken()), _params4)
            }).subscribe(function (res) {
              console.log(res);
              _this24.authData = res;

              if (res.registered === 1) {
                _this24.analyticsEvent('Logged In Using Truecaller');

                localStorage.setItem('mobile_number', mob);
                localStorage.setItem('is_lead', res.is_lead);
                localStorage.setItem('id', res.id);
                localStorage.setItem('authData', JSON.stringify(res));

                _this24.router.navigateByUrl('chat');
              } else {
                localStorage.setItem('RegisterNumber', mob);

                _this24.analyticsEvent('Four Page Registration Page Zero'); // gtag app + web


                window.gtag('config', 'G-1ES443XD0F', {
                  user_id: mob
                });

                _this24.ngxNotificationService.info('You are not registered with us, Kindly register');

                _this24.router.navigateByUrl('fourReg');
              }

              _this24.spinner.hide();
            }, function (err) {
              _this24.spinner.hide();

              console.log(err);
            });
          } else if (mob && localStorage.getItem('fcm_app')) {
            var _params5;

            this.http.get(' https://partner.hansmatrimony.com/api/auth', {
              params: (_params5 = {}, _defineProperty(_params5, 'phone_number', mob), _defineProperty(_params5, 'fcm_app', localStorage.getItem('fcm_app')), _params5)
            }).subscribe(function (res) {
              console.log(res);
              _this24.authData = res;

              if (res.registered === 1) {
                _this24.analyticsEvent('Logged In Using Truecaller');

                localStorage.setItem('mobile_number', mob);
                localStorage.setItem('is_lead', res.is_lead);
                localStorage.setItem('id', res.id);
                localStorage.setItem('authData', JSON.stringify(res));

                _this24.router.navigateByUrl('chat');
              } else {
                localStorage.setItem('RegisterNumber', mob);

                _this24.analyticsEvent('Four Page Registration Page Zero'); // gtag app + web


                window.gtag('config', 'G-1ES443XD0F', {
                  user_id: mob
                });

                _this24.ngxNotificationService.info('You are not registered with us, Kindly register');

                _this24.router.navigateByUrl('fourReg');
              }

              _this24.spinner.hide();
            }, function (err) {
              _this24.spinner.hide();

              console.log(err);
            });
          } else {
            this.ngxNotificationService.info('Enter a valid number');
            this.spinner.hide();
          }
        }
      }]);

      return PhoneNumberScreenComponent;
    }();

    PhoneNumberScreenComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__["NgxNotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PhoneNumberScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phone-number-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phone-number-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phone-number-screen/phone-number-screen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phone-number-screen.component.css */
      "./src/app/phone-number-screen/phone-number-screen.component.css"))["default"]]
    })], PhoneNumberScreenComponent);
    /***/
  },

  /***/
  "./src/app/photo-upload-crop/photo-upload-crop.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/photo-upload-crop/photo-upload-crop.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoUploadCropPhotoUploadCropComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".uploadPhotoBtn{\r\n    height:6vh!important;  \r\n    width:50%;\r\n    padding:0 20px;\r\n    border-radius: 2px!important;\r\n    background:#00c2cb!important;\r\n    margin:auto;\r\n    display:flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content:center;\r\n    font-size:1rem;\r\n    color:white;\r\n    border:0px!important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tdXBsb2FkLWNyb3AvcGhvdG8tdXBsb2FkLWNyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLG9CQUFvQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLXVwbG9hZC1jcm9wL3Bob3RvLXVwbG9hZC1jcm9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkUGhvdG9CdG57XHJcbiAgICBoZWlnaHQ6NnZoIWltcG9ydGFudDsgIFxyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgcGFkZGluZzowIDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHghaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDojMDBjMmNiIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjowcHghaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/photo-upload-crop/photo-upload-crop.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/photo-upload-crop/photo-upload-crop.component.ts ***!
    \******************************************************************/

  /*! exports provided: PhotoUploadCropComponent */

  /***/
  function srcAppPhotoUploadCropPhotoUploadCropComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoUploadCropComponent", function () {
      return PhotoUploadCropComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PhotoUploadCropComponent = /*#__PURE__*/function () {
      function PhotoUploadCropComponent(dialogRef) {
        _classCallCheck(this, PhotoUploadCropComponent);

        this.dialogRef = dialogRef;
        this.imageChangedEvent = '';
        this.croppedImage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.croppedImage$ = this.croppedImage.asObservable();
      }

      _createClass(PhotoUploadCropComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.croppedImage$.subscribe(function (data) {
            console.log('cropped image change event fired');
            if (_this25.croppedImage.value) _this25.createBlobImageFileAndShow(data);
          });
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage.next(event.base64);
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {// show message
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          console.log('Dialog Close called');
          this.dialogRef.close(this.dataFile);
        }
      }, {
        key: "createBlobImageFileAndShow",
        value: function createBlobImageFileAndShow(data) {
          var _this26 = this;

          console.log(' data file created');
          this.dataURItoBlob(data.replace(/^data:image\/(png|jpg);base64,/, '')).subscribe(function (blob) {
            var imageBlob = blob;

            var imageName = _this26.generateName();

            _this26.dataFile = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
          });
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var byteString = window.atob(dataURI);
            var arrayBuffer = new ArrayBuffer(byteString.length);
            var int8Array = new Uint8Array(arrayBuffer);

            for (var i = 0; i < byteString.length; i++) {
              int8Array[i] = byteString.charCodeAt(i);
            }

            var blob = new Blob([int8Array], {
              type: 'image/jpeg'
            });
            observer.next(blob);
            observer.complete();
          });
        }
      }, {
        key: "generateName",
        value: function generateName() {
          var date = new Date().valueOf();
          var text = '';
          var possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

          for (var i = 0; i < 5; i++) {
            text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
          }

          return date + '.' + text + '.jpeg';
        }
      }]);

      return PhotoUploadCropComponent;
    }();

    PhotoUploadCropComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    PhotoUploadCropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-upload-crop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-upload-crop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-upload-crop/photo-upload-crop.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-upload-crop.component.css */
      "./src/app/photo-upload-crop/photo-upload-crop.component.css"))["default"]]
    })], PhotoUploadCropComponent);
    /***/
  },

  /***/
  "./src/app/subscriptionservice.service.ts":
  /*!************************************************!*\
    !*** ./src/app/subscriptionservice.service.ts ***!
    \************************************************/

  /*! exports provided: SubscriptionserviceService */

  /***/
  function srcAppSubscriptionserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionserviceService", function () {
      return SubscriptionserviceService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var SubscriptionserviceService = /*#__PURE__*/function () {
      function SubscriptionserviceService(http, route, spinner, ngxNotificationService) {
        _classCallCheck(this, SubscriptionserviceService);

        this.http = http;
        this.route = route;
        this.spinner = spinner;
        this.ngxNotificationService = ngxNotificationService;
      } // load razor pay dynamically


      _createClass(SubscriptionserviceService, [{
        key: "loadRazorPayScript",
        value: function loadRazorPayScript() {
          var razor = document.getElementById('razorPay');

          if (!razor) {
            var fileName = document.createElement('script');
            fileName.async = true;
            fileName.setAttribute('type', 'text/javascript');
            fileName.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
            fileName.id = 'razorPay';
            document.body.appendChild(fileName);
          }
        } // testing mid -> bkjPis66135619933053

      }, {
        key: "loadPayTmScript",
        value: function loadPayTmScript() {
          var payt = document.getElementById('paytm');

          if (!payt) {
            var fileName = document.createElement('script');
            fileName.async = false;
            fileName.setAttribute('type', 'application/javascript');
            fileName.setAttribute('crossorigin', 'anonymous');
            fileName.setAttribute('src', 'https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/bkjPis66135619933053.js'); // fileName.setAttribute('onload', `${this.onScriptLoad()}`);

            fileName.id = 'paytm';
            document.body.appendChild(fileName);
          }
        }
      }, {
        key: "onScriptLoad",
        value: function onScriptLoad() {
          console.log('opened');
          var config = {
            'root': '',
            'flow': 'DEFAULT',
            'data': {
              'orderId': 'ORDER_ID_12345',
              'token': 'fe795335ed3049c78a57271075f2199e1526969112097',
              'tokenType': 'TXN_TOKEN',
              'amount': '4594'
              /* update amount */

            },
            'handler': {
              'notifyMerchant': function notifyMerchant(eventName, data) {
                console.log('notifyMerchant handler function called');
                console.log('eventName => ', eventName);
                console.log('data => ', data);
              },
              'style': {
                'bodyColor': 'balck',
                'themeBackgroundColor': 'black',
                'themeColor': 'black',
                'headerBackgroundColor': 'black',
                'headerColor': 'black',
                'errorColor': 'red',
                'successColor': 'green'
              }
            }
          };
          console.log(document.getElementById('paytm'));

          if (window.Paytm && window.Paytm.CheckoutJS) {
            window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
              // initialze configuration using init method 
              window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                // after successfully updating configuration, invoke Blink Checkout
                window.Paytm.CheckoutJS.invoke();
              })["catch"](function onError(error) {
                console.log('error => ', error);
              });
            });
          } else {
            console.log('Not FOund');
          }
        }
      }, {
        key: "payNowT",
        value: function payNowT(amt, type, plan, name, email, phone, points) {
          var _this27 = this;

          var notes = {
            service: ''
          };
          var keyId;

          if (amt === 3100) {
            notes.service = 'Limited';
          } else if (amt === 5100) {
            notes.service = 'Supreme';
          } else if (amt === 81000) {
            notes.service = 'Premium';
          }

          if (type === 'test') {
            keyId = 'rzp_test_yoGDlvEoQBRXkL'; // key secret = ldssg0DvQNi6AXA0iJZ7Inzj;
          } else if (type === 'live') {
            keyId = 'rzp_live_AkjH8AZSSZBdRn'; // secretkey -> 9jDuywER4AX1aGoiFeYDziIV
          }

          var key = keyId;
          var options = {
            'key': key,
            'amount': amt * 100,
            'name': ' Hans Matrimony',
            'description': 'Order #',
            'handler': function handler(response) {
              console.log(response);

              if (plan === 0) {
                _this27.captureStandardPayment(response, amt, points);
              } else {
                alert('Payment Successfull \n' + ' We will get back to you shortly \n' + 'Your Payment ID: ' + response.razorpay_payment_id);

                _this27.analyticsEvent("RazorPay Payment Completed For ".concat(localStorage.getItem('selected_plan') ? localStorage.getItem('selected_plan') === 'plan 1' ? '2800' : localStorage.getItem('selected_plan') === 'plan 2' ? '5500' : localStorage.getItem('selected_plan') === 'plan 3' ? '8500' : '2800' : '2800'));
              }
            },
            'prefill': {
              'name': name ? name : '',
              'email': email ? email : '',
              'contact': phone ? phone : ''
            },
            'notes': notes,
            'theme': {
              'color': 'blue'
            }
          };
          var rzp = new Razorpay(options);
          rzp.open();
        }
      }, {
        key: "payNowCustom",
        value: function payNowCustom(amt, type, plan, name, email, phone, mode, orderId, cust_id) {
          var _this28 = this;

          var notes = {
            service: ''
          };
          var keyId;

          if (amt === 3100) {
            notes.service = 'Limited';
          } else if (amt === 5100) {
            notes.service = 'Supreme';
          } else if (amt === 81000) {
            notes.service = 'Premium';
          }

          if (type === 'test') {
            keyId = 'rzp_test_37I1EC7DpM6Dqq'; // key secret = WoNRYehcPCDC5s4w6J8MUjqn;
          } else if (type === 'live') {
            keyId = 'rzp_live_LUlMqhHJCUOuRY'; // secretkey -> in1Tc9W8vzyUS08JuP82aJvU
          }

          var key = keyId;
          var options = {
            'key': key,
            'amount': amt * 100,
            'currency': 'INR',
            'name': ' Hans Matrimony',
            'description': 'Order #' + orderId,
            'customer_id': cust_id,
            'order_id': orderId,
            'recurring': 1,
            'handler': function handler(response) {
              console.log(response);

              if (plan === 0) {
                _this28.facebookAnalytics('Purchase', amt);

                alert('Payment Successfull \n' + 'Your Payment ID: ' + response.razorpay_payment_id);

                _this28.authorizeFirstPaymentCustom(response);
              } else {
                alert('Payment Successfull \n' + ' We will get back to you shortly \n' + 'Your Payment ID: ' + response.razorpay_payment_id);
              }
            },
            'prefill': {
              'name': name,
              'email': email,
              'contact': phone,
              'method': mode
            },
            'notes': notes,
            'theme': {
              'color': 'blue'
            }
          };
          var rzp = new Razorpay(options);
          rzp.open();
        }
      }, {
        key: "authorizeFirstPaymentCustom",
        value: function authorizeFirstPaymentCustom(response) {
          var formData = new FormData();
          formData.append('id', localStorage.getItem('id'));
          formData.append('payment_id', response.razorpay_payment_id);
          this.http.post('https://partner.hansmatrimony.com/api/authorizeFirstPayment', formData).subscribe(function (data) {
            console.log(data);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "analyticsEvent",
        value: function analyticsEvent(event) {
          window.ga('send', 'event', event, '', {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + event + ' successful');
            }
          }); // gtag app + web

          window.gtag('event', event, {
            event_callback: function event_callback() {
              console.log('Tracking gtag ' + event + ' successful');
            }
          });
        }
      }, {
        key: "captureStandardPayment",
        value: function captureStandardPayment(response, amount, points) {
          var _this29 = this;

          var formData = new FormData();
          formData.append('mobile', localStorage.getItem('mobile_number'));
          formData.append('payment_id', response.razorpay_payment_id);
          formData.append('amount', amount);
          formData.append('id', localStorage.getItem('id'));
          formData.append('is_lead', localStorage.getItem('is_lead'));
          formData.append('whatsapp_point', points);
          formData.append('currency', 'INR');
          this.http.post('https://partner.hansmatrimony.com/api/paymentCapture', formData).subscribe(function (data) {
            console.log(data);

            if (data.status === 1) {
              alert('Payment Successful, Credits has been added to your account.');

              _this29.analyticsEvent("RazorPay Payment Completed For ".concat(localStorage.getItem('selected_plan') ? localStorage.getItem('selected_plan') === 'plan 1' ? '2800' : localStorage.getItem('selected_plan') === 'plan 2' ? '5500' : localStorage.getItem('selected_plan') === 'plan 3' ? '8500' : '2800' : '2800'));

              _this29.facebookAnalytics('Subscribe', amount);

              _this29.route.navigateByUrl('chat?razorVerifyPayment');
            } else {
              _this29.ngxNotificationService.error('Something went wrong. Please try again later.');
            }
          }, function (err) {
            console.log(err);

            _this29.ngxNotificationService.error('Something went wrong. Please try again later.');
          });
        }
      }, {
        key: "facebookAnalytics",
        value: function facebookAnalytics(event, amount) {
          window.fbq('track', event, {
            value: amount,
            currency: 'INR',
            content_name: localStorage.getItem('mobile_number')
          });
          window.fbq('track', '692972151223870', event, {
            value: amount,
            currency: 'INR',
            content_name: localStorage.getItem('mobiler_number')
          });
        } // for verifying the paytm payment we will check if the url has verifyPayment keyword

      }, {
        key: "getTransactionStatus",
        value: function getTransactionStatus() {
          var _this30 = this;

          return new Promise(function (res, rej) {
            var formData = new FormData();
            formData.append('orderId', localStorage.getItem('oId'));
            formData.append('is_lead', localStorage.getItem('is_lead'));
            formData.append('mobile', localStorage.getItem('mobile_number')); // set credits according to the plan number

            formData.append('whatsapp_point', localStorage.getItem('selected_plan') ? localStorage.getItem('selected_plan') === 'plan 1' ? '45' : localStorage.getItem('selected_plan') === 'plan 2' ? '90' : localStorage.getItem('selected_plan') === 'plan 3' ? '45' : '45' : '45');
            formData.append('id', localStorage.getItem('id'));

            _this30.http.post('https://partner.hansmatrimony.com/api/transactionStatus', formData).subscribe(function (data) {
              console.log(data);
              localStorage.removeItem('oId');
              localStorage.removeItem('selected_plan');

              if (data.status === 1) {
                alert('Payment Successful, Credits has been added to your account.'); // set amount according to the plan number

                _this30.analyticsEvent("Paytm Payment Completed For ".concat(localStorage.getItem('selected_plan') ? localStorage.getItem('selected_plan') === 'plan 1' ? '2800' : localStorage.getItem('selected_plan') === 'plan 2' ? '5500' : localStorage.getItem('selected_plan') === 'plan 3' ? '8500' : '2800' : '2800')); // set amount according to the plan number


                _this30.facebookAnalytics('Subscribe', localStorage.getItem('selected_plan') ? localStorage.getItem('selected_plan') === 'plan 1' ? '2800' : localStorage.getItem('selected_plan') === 'plan 2' ? '5500' : localStorage.getItem('selected_plan') === 'plan 3' ? '8500' : '2800' : '2800');

                res(1);

                _this30.route.navigateByUrl('chat');
              } else {
                res(0);

                _this30.ngxNotificationService.error(data.error_description);

                _this30.route.navigateByUrl('chat');
              }
            }, function (err) {
              console.log(err);
              rej(err);

              _this30.ngxNotificationService.error('Something went wrong. Please try again later.');

              localStorage.removeItem('oId');
              localStorage.removeItem('selected_plan');

              _this30.route.navigateByUrl('chat');
            });
          });
        }
      }]);

      return SubscriptionserviceService;
    }();

    SubscriptionserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"]
      }];
    };

    SubscriptionserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SubscriptionserviceService);
    /***/
  },

  /***/
  "./src/app/terms-and-conditions/terms-and-conditions.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/terms-and-conditions/terms-and-conditions.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTermsAndConditionsTermsAndConditionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "li {\r\n    line-height: 2;\r\n    margin-top: 20px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    text-align: justify;\r\n}\r\nimg {\r\n    width: 20%;\r\n}\r\n@media (max-width: 1024px) {\r\n\r\n    img {\r\n       \r\n        width: 50%;\r\n    }\r\n    li {\r\n        line-height: 2;\r\n        margin-top: 20px;\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n        text-align: justify;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBOztJQUVJOztRQUVJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBsaSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
    \************************************************************************/

  /*! exports provided: TermsAndConditionsComponent */

  /***/
  function srcAppTermsAndConditionsTermsAndConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
      return TermsAndConditionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsAndConditionsComponent = /*#__PURE__*/function () {
      function TermsAndConditionsComponent() {
        _classCallCheck(this, TermsAndConditionsComponent);
      }

      _createClass(TermsAndConditionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.scrollTo(0, 0);
        }
      }]);

      return TermsAndConditionsComponent;
    }();

    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms-and-conditions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms-and-conditions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/terms-and-conditions/terms-and-conditions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms-and-conditions.component.css */
      "./src/app/terms-and-conditions/terms-and-conditions.component.css"))["default"]]
    })], TermsAndConditionsComponent);
    /***/
  },

  /***/
  "./src/app/tiktok-ads-form/tiktok-ads-form.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/tiktok-ads-form/tiktok-ads-form.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTiktokAdsFormTiktokAdsFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textRegister {\r\n    font-weight:bolder;\r\n    padding-top:1rem;\r\n    text-align: center;\r\n     color: #285fdd\r\n}\r\n::ng-deep .mat-select-value {\r\n    color: black !important;\r\n}\r\n.fieldFit{\r\n    height:60px;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlrdG9rLWFkcy1mb3JtL3Rpa3Rvay1hZHMtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7S0FDakI7QUFDTDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdGlrdG9rLWFkcy1mb3JtL3Rpa3Rvay1hZHMtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRSZWdpc3RlciB7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICBwYWRkaW5nLXRvcDoxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGNvbG9yOiAjMjg1ZmRkXHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcbi5maWVsZEZpdHtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tiktok-ads-form/tiktok-ads-form.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/tiktok-ads-form/tiktok-ads-form.component.ts ***!
    \**************************************************************/

  /*! exports provided: TiktokAdsFormComponent */

  /***/
  function srcAppTiktokAdsFormTiktokAdsFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TiktokAdsFormComponent", function () {
      return TiktokAdsFormComponent;
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


    var _angular_material___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/ */
    "./node_modules/@angular/material/esm2015/material.js");

    var TiktokAdsFormComponent = /*#__PURE__*/function () {
      function TiktokAdsFormComponent(dialogRef, http, dialog, _formBuilder, router, ngxNotificationService, spinner) {
        _classCallCheck(this, TiktokAdsFormComponent);

        this.dialogRef = dialogRef;
        this.http = http;
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.ngxNotificationService = ngxNotificationService;
        this.spinner = spinner;
        this.changeNumber = false;
        this.isCompleted1 = false;
        this.otpStatus = false;
        this.createProfile = ['स्वयं', 'बेटा', 'बेटी', 'भाई', 'बहन', 'अन्य'];
        this.PageOne = this._formBuilder.group({
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(TiktokAdsFormComponent, [{
        key: "Cross_click",
        value: function Cross_click() {
          this.dialog.closeAll();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this31 = this;

          if (this.PageOne.valid) {
            var tiktokForm = new FormData();
            tiktokForm.append('mobile', this.PageOne.value.phone);
            tiktokForm.append('looking_for', '');
            console.log('mobile', this.PageOne.value.phone);
            return this.http.post('https://partner.hansmatrimony.com/api/tiktok', tiktokForm).subscribe(function (res) {
              console.log(res);

              if (res.success === 1) {
                _this31.Analytics('TikTok Submit', 'TikTok FormSubmit', 'TikTok Form Submitted');

                _this31.dialog.closeAll();

                _this31.ngxNotificationService.success('आपके रिस्पांस के लिए धन्यवाद् हम आपको जल्द संपर्क करेंगे।');
              }
            });
          } else {
            this.ngxNotificationService.warning('Please Enter mobile number');
          }
        }
      }, {
        key: "Analytics",
        value: function Analytics(type, category, action) {
          window.ga('send', 'event', category, action, {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + type + ' successful');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TiktokAdsFormComponent;
    }();

    TiktokAdsFormComponent.ctorParameters = function () {
      return [{
        type: _angular_material___WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_material___WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_3__["NgxNotificationService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('otpModal', {
      "static": false
    })], TiktokAdsFormComponent.prototype, "otpModal", void 0);
    TiktokAdsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tiktok-ads-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tiktok-ads-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tiktok-ads-form/tiktok-ads-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tiktok-ads-form.component.css */
      "./src/app/tiktok-ads-form/tiktok-ads-form.component.css"))["default"]]
    })], TiktokAdsFormComponent);
    /***/
  },

  /***/
  "./src/app/todays-payment-popup/todays-payment-popup.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/todays-payment-popup/todays-payment-popup.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodaysPaymentPopupTodaysPaymentPopupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\r\n  color: white!important;\r\n}\r\nb {\r\n  color: white;\r\n}\r\nmain {\r\n  position: relative;\r\n  z-index: 0;\r\n  background: white;\r\n  border-radius: 20px 20px 20px 20px;\r\n  padding-bottom: 5px;\r\n  overflow: hidden;\r\n}\r\n#backBtn {\r\n  position: absolute;\r\n  left: 10px;\r\n  top: 10px;\r\n  z-index: 99999;\r\n}\r\n.planArea {\r\n  position: relative;\r\n  height:-webkit-fit-content;\r\n  height:-moz-fit-content;\r\n  height:fit-content;\r\n  padding-top:0px;\r\n  overflow-y: scroll;\r\n  height:48vh\r\n}\r\n#offBanner {\r\n  position: relative;\r\n  display: flex;\r\n  width: 100%;\r\n  z-index: 10;\r\n  height: 1.9rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nul {\r\n  margin-top: 5px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  color:rgb(12, 12, 12);\r\n  -webkit-padding-start: 5px!important;\r\n          padding-inline-start: 5px!important;\r\n  -webkit-margin-after:0px!important;\r\n          margin-block-end:0px!important;\r\n}\r\n#offBannerImg {\r\n  position: absolute;\r\n  z-index:99999999;\r\n  border-radius: 8px;\r\n  bottom: -15px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n#cancel {\r\n  position: absolute;\r\n  z-index: 99999999;\r\n  right: 1%;\r\n}\r\n#footer {\r\n  margin: auto;\r\n  text-align: center;\r\n  justify-content: center;\r\n  width: 60%;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  z-index: 99999999;\r\n  background-image: url(/../../../assets/trapazoid.png);\r\n  background-position: center center;\r\n  background-size: 100% 100%;\r\n  border-radius: 0px 0px 10px 10px !important;\r\n}\r\n#topBanner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 25vh;\r\n  text-align: center;\r\n  background: white !important;\r\n  border: 0px !important;\r\n  border-radius: 20px 20px;\r\n}\r\n#bannerDiv {\r\n  width: auto;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  /* height: 45%; */\r\n  position: relative;\r\n  padding-top: 0px;\r\n}\r\n/* #bannerDiv ::after , ::before{\r\n  box-sizing: none!important;\r\n} */\r\n* {\r\n  box-sizing: content-box;\r\n}\r\n*:before,\r\n*:after {\r\n  box-sizing: content-box;\r\n}\r\n:focus {\r\n  outline: 0 !important;\r\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0) !important;\r\n}\r\n.planrow {\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: stretch;\r\n  margin: 3% 1% 0% 1%;\r\n}\r\n.planRow2 {\r\n  background:#f0f1f0;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction:row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0% 1% 4% 1%;\r\n  padding:0 3% 0 3%!important;\r\n  border-radius: 0 0 15px 15px;\r\n  font-size:15px;\r\n}\r\n.plancolumn {\r\n  position: relative;\r\n  padding-top: 1rem;\r\n  padding-bottom: 0rem;\r\n  padding-left: 1rem;\r\n  font-size: 1rem;\r\n  flex: 50%;\r\n  display: inline-block;\r\n  vertical-align: middle!important;\r\n}\r\nbutton.btn-small {\r\n  position: absolute;\r\n  z-index: 1000 !important;\r\n  right: 5.5%;\r\n  top: 32%;\r\n  vertical-align: middle !important;\r\n  background: #ff39c4;\r\n  border:0px;\r\n}\r\n.methods{\r\n  color: #4A5D6A;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 1.3rem;\r\n}\r\n.payOpt{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  padding: 0px 40px;\r\n}\r\n#razor {\r\n  height: 50px;\r\n  color: black;\r\n  width: 100%;\r\n  font-family: 'Roboto', sans-serif !important;\r\n  font-weight: 500;\r\n  font-size: 1.2em;\r\n  background-color: white;\r\n  border-radius: 50px;\r\n  border: 1px solid #00c2cb;\r\n}\r\n#paytm {\r\n  height: 50px;\r\n  color: black;\r\n  margin: 20px 0px;\r\n  width: 100%;\r\n  border-radius: 50px;\r\n  background-color: white;\r\n  border: 1px solid #00c2cb;\r\n}\r\n.month {\r\n  font-weight: 500;\r\n  padding:0px 3px 0px 3px;\r\n  font-style: normal!important;\r\n  font-size:0.8rem;\r\n  position: absolute;\r\n  top: -11px !important;\r\n  right: 5%;\r\n  background: #00c2cb;\r\n  border-radius: 3px 3px 3px 3px;\r\n}\r\n@media (max-width: 575px) {\r\n  #footer {\r\n    margin: auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n    width: 70%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 99999999;\r\n    background-image: url(/../../../assets/trapazoid.png);\r\n    background-position: center center;\r\n    background-size: 100% 100%;\r\n    border-radius: 0px 0px 10px 10px !important;\r\n  }\r\n\r\n  .plancolumn {\r\n    padding-top: 0.8rem;\r\n    padding-bottom: 0rem;\r\n    padding-left: 0.8rem;\r\n    font-size: 1rem;\r\n    flex: 40%;\r\n    display: inline-block;\r\n    vertical-align: middle!important;\r\n  }\r\n}\r\n@media (max-width: 375px) {\r\n  .plancolumn {\r\n    padding-top: 0.8rem;\r\n    padding-bottom: 0rem;\r\n    padding-left: 0.8rem;\r\n    font-size: 0.7rem !important;\r\n    flex: 40%;\r\n    display: inline-block;\r\n    vertical-align: middle!important;\r\n  }\r\n  button.btn-small {\r\n    position: absolute;\r\n    right: 5.5%;\r\n    top: 25%;\r\n    vertical-align: middle !important;\r\n    background: #ff39c4;\r\n    border:0px;\r\n  }\r\n  #offBanner {\r\n    position: relative;\r\n    display: flex;\r\n    width: 100%;\r\n    z-index: 10;\r\n    height: 1.5rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  #footer {\r\n    margin: auto;\r\n    text-align: center;\r\n    justify-content: center;\r\n    width: 80%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 99999999;\r\n    background-image: url(/../../../assets/trapazoid.png);\r\n    background-position: center center;\r\n    background-size: 100% 100%;\r\n    border-radius: 0px 0px 10px 10px !important;\r\n  }\r\n  #offBannerImg {\r\n    position: absolute;\r\n    z-index:99999999;\r\n    border-radius: 8px;\r\n    bottom: -10px;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n  }\r\n  #topBanner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 25vh;\r\n    text-align: center;\r\n    background: white !important;\r\n    border: 0px !important;\r\n    border-radius: 20px 20px;\r\n  }\r\n  .specialCase {\r\n    font-size: 1.1rem !important;\r\n  }\r\n  #razor {\r\n    font-size: 1em;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kYXlzLXBheW1lbnQtcG9wdXAvdG9kYXlzLXBheW1lbnQtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixvQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLGtDQUE4QjtVQUE5Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFEQUFxRDtFQUNyRCxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBOztHQUVHO0FBQ0g7RUFHVSx1QkFBdUI7QUFDakM7QUFDQTs7RUFJVSx1QkFBdUI7QUFDakM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscURBQXFEO0lBQ3JELGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0NBQWdDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscURBQXFEO0lBQ3JELGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RvZGF5cy1wYXltZW50LXBvcHVwL3RvZGF5cy1wYXltZW50LXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcbmIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jYmFja0J0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5wbGFuQXJlYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDpmaXQtY29udGVudDtcclxuICBwYWRkaW5nLXRvcDowcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDo0OHZoXHJcbn1cclxuI29mZkJhbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgaGVpZ2h0OiAxLjlyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG51bCB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjpyZ2IoMTIsIDEyLCAxMik7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDowcHghaW1wb3J0YW50O1xyXG59XHJcbiNvZmZCYW5uZXJJbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4Ojk5OTk5OTk5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3R0b206IC0xNXB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY2FuY2VsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5OTk5OTk7XHJcbiAgcmlnaHQ6IDElO1xyXG59XHJcbiNmb290ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uLy4uL2Fzc2V0cy90cmFwYXpvaWQucG5nKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI3RvcEJhbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjV2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweDtcclxufVxyXG4jYmFubmVyRGl2IHtcclxuICB3aWR0aDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAvKiBoZWlnaHQ6IDQ1JTsgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4vKiAjYmFubmVyRGl2IDo6YWZ0ZXIgLCA6OmJlZm9yZXtcclxuICBib3gtc2l6aW5nOiBub25lIWltcG9ydGFudDtcclxufSAqL1xyXG4qIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuOmZvY3VzIHtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wbGFucm93IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW46IDMlIDElIDAlIDElO1xyXG59XHJcbi5wbGFuUm93MiB7XHJcbiAgYmFja2dyb3VuZDojZjBmMWYwO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCUgMSUgNCUgMSU7XHJcbiAgcGFkZGluZzowIDMlIDAgMyUhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbn1cclxuLnBsYW5jb2x1bW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZsZXg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbn1cclxuYnV0dG9uLmJ0bi1zbWFsbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcclxuICByaWdodDogNS41JTtcclxuICB0b3A6IDMyJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZmMzljNDtcclxuICBib3JkZXI6MHB4O1xyXG59XHJcbi5tZXRob2Rze1xyXG4gIGNvbG9yOiAjNEE1RDZBO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59XHJcbi5wYXlPcHR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZzogMHB4IDQwcHg7XHJcbn1cclxuI3Jhem9yIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGMyY2I7XHJcbn1cclxuI3BheXRtIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBjMmNiO1xyXG59XHJcbi5tb250aCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOjBweCAzcHggMHB4IDNweDtcclxuICBmb250LXN0eWxlOiBub3JtYWwhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTowLjhyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTExcHggIWltcG9ydGFudDtcclxuICByaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZDogIzAwYzJjYjtcclxuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICNmb290ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi8uLi9hc3NldHMvdHJhcGF6b2lkLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBsYW5jb2x1bW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmbGV4OiA0MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLnBsYW5jb2x1bW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjhyZW07XHJcbiAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogNDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGJ1dHRvbi5idG4tc21hbGwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUuNSU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjM5YzQ7XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gIH1cclxuICAjb2ZmQmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICNmb290ZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC8uLi8uLi8uLi9hc3NldHMvdHJhcGF6b2lkLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjb2ZmQmFubmVySW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6OTk5OTk5OTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgI3RvcEJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4O1xyXG4gIH1cclxuICAuc3BlY2lhbENhc2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgI3Jhem9yIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/todays-payment-popup/todays-payment-popup.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/todays-payment-popup/todays-payment-popup.component.ts ***!
    \************************************************************************/

  /*! exports provided: TodaysPaymentPopupComponent */

  /***/
  function srcAppTodaysPaymentPopupTodaysPaymentPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodaysPaymentPopupComponent", function () {
      return TodaysPaymentPopupComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/language.service */
    "./src/app/language.service.ts");
    /* harmony import */


    var src_app_subscriptionservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/subscriptionservice.service */
    "./src/app/subscriptionservice.service.ts");
    /* harmony import */


    var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-kc-notification */
    "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
    /* harmony import */


    var src_app_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/analytics.service */
    "./src/app/analytics.service.ts");

    var TodaysPaymentPopupComponent = /*#__PURE__*/function () {
      function TodaysPaymentPopupComponent(dialogRef, data, languageService, subscriptionservice, http, analyticsService, ngxNotificationService) {
        _classCallCheck(this, TodaysPaymentPopupComponent);

        this.dialogRef = dialogRef;
        this.languageService = languageService;
        this.subscriptionservice = subscriptionservice;
        this.http = http;
        this.analyticsService = analyticsService;
        this.ngxNotificationService = ngxNotificationService;
        this.seconds = 59;
        this.minutes = 0;
        this.plans = [];
        this.show1 = true;
        this.show2 = false;
        this.chooseMethod = false;
        this.data = null;
        this.plan = 0;
        this.images = ['../../../assets/popupone.png', '../../../assets/popuptwo.png', '../../../assets/popupthree.png'];
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.data = data;
      }

      _createClass(TodaysPaymentPopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.subscriptionservice.loadRazorPayScript();
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          this.http.get('https://partner.hansmatrimony.com/api/getWebsitePlan', {
            headers: headers
          }).subscribe(function (res) {
            if (localStorage.getItem('showRemarrigePlan') && localStorage.getItem('showRemarrigePlan') == '1') {
              var _iterator = _createForOfIteratorHelper(res),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var a = _step.value;

                  if (a.plan_type === 'Self Service Plan') {
                    _this32.plans.push(a);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } else {
              var _iterator2 = _createForOfIteratorHelper(res),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _a = _step2.value;

                  if (_a.plan_type === 'Self Service Plan' && _a.plan_name != "Re-Marriage") {
                    _this32.plans.push(_a);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } //this.plans = res;


            console.log(_this32.plans);
          }, function (err) {
            _this32.subscriptionservice.loadRazorPayScript();
          });

          if (localStorage.getItem('id')) {
            this.getCredits();
          }

          if (this.data) {
            this.plan = this.data.plan;
            this.price = this.data.price;
            this.credits = this.data.credits; //this.chooseMethod = this.data.chooseMethod;

            this.selectedContainer = this.data.selectedContainer;
            localStorage.setItem('selected_plan', 'plan ' + String(this.data.selectedContainer));
            console.log('plan ' + String(this.data.selectedContainer) + ' is selected');
            this.chooseMethod = this.data.chooseMethod; // is set to true.

            this.getPaytmOrderId();
            this.subscriptionViewed();
          }

          this.setTimer();
          setTimeout(function () {
            _this32.closeDialog();
          }, 100000);
        }
      }, {
        key: "getImagePhoto",
        value: function getImagePhoto(index) {
          this.images[index];
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          localStorage.removeItem('oId');
          localStorage.removeItem('selected_plan');
          this.dialogRef.close();
        }
      }, {
        key: "getCredits",
        value: function getCredits() {
          var _this33 = this;

          return this.http.post('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), {
            params: _defineProperty({}, 'id', localStorage.getItem('id'))
          }).subscribe(function (data) {
            _this33.points = data.whatsapp_points;
            console.log(_this33.points);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getRazorPay",
        value: function getRazorPay(amt, type, plan, name, email, phone) {
          if (plan === 0) {
            return this.subscriptionservice.payNowT(amt, type, 0, name, email, phone, this.credits);
          } else {
            return this.subscriptionservice.payNowT(amt, type, 1, name, email, phone, this.credits);
          }
        }
      }, {
        key: "HandlePayment",
        value: function HandlePayment() {
          if (this.price) {
            if (localStorage.getItem('mobile_number')) {
              console.log(localStorage.getItem('mobile_number'));
              this.getRazorPay(this.price, 'live', this.plan, '', '', localStorage.getItem('mobile_number'));
            } else {
              this.getRazorPay(this.price, 'live', this.plan, '', '', '');
            }

            this.closeDialog();
            this.analyticsService.googleAnalytics('RazorPay Payement Gateway Opened For ' + this.price);
          } else {
            this.ngxNotificationService.error('Something Went Wrong');
          }
        }
      }, {
        key: "setTimer",
        value: function setTimer() {
          var _this34 = this;

          this.minutes = Math.floor(Math.random() * 20) + 10;
          console.log(this.seconds);
          var timer = setInterval(function () {
            _this34.seconds = _this34.seconds - 1;

            if (_this34.seconds === -1 && _this34.minutes !== 0) {
              _this34.seconds = 60;
              _this34.minutes = _this34.minutes - 1;
            } else if (_this34.minutes === 0 && _this34.seconds === 0) {
              clearInterval(timer);
            }
          }, 1000);
        }
      }, {
        key: "goBack",
        value: function goBack() {
          localStorage.removeItem('oId');
          localStorage.removeItem('selected_plan');
          this.chooseMethod = false;
        }
      }, {
        key: "setAmount",
        value: function setAmount(index) {
          return this.plans[index].amount - this.plans[index].amount * this.plans[index].discount / 100;
        }
      }, {
        key: "setContent",
        value: function setContent(index) {
          var content = this.plans[index].content.split('\n');
          return content;
        }
      }, {
        key: "container",
        value: function container(index) {
          this.price = this.setAmount(index);
          this.credits = this.plans[index].content.split(" ")[0];
          this.selectedContainer = index;
          localStorage.setItem('selected_plan', 'plan ' + String(index));
          this.chooseMethod = true;
          this.getPaytmOrderId();
          this.subscriptionViewed();
        }
      }, {
        key: "container1",
        value: function container1() {
          this.price = '2800';
          this.credits = '45';
          localStorage.setItem('selected_plan', 'plan 1');
          this.selectedContainer = 1;
          console.log('plan 1 selected'); // this.HandlePayment();

          this.chooseMethod = true;
          this.getPaytmOrderId();
          this.subscriptionViewed();
        }
      }, {
        key: "container2",
        value: function container2() {
          this.price = '4500';
          this.credits = '90';
          localStorage.setItem('selected_plan', 'plan 2');
          this.selectedContainer = 2;
          console.log('plan 2 selected'); // this.HandlePayment();

          this.chooseMethod = true;
          this.getPaytmOrderId();
          this.subscriptionViewed();
        }
      }, {
        key: "container3",
        value: function container3() {
          this.price = '8500';
          this.credits = '45';
          localStorage.setItem('selected_plan', 'plan 3');
          this.selectedContainer = 3;
          console.log('plan 3 selected'); // this.HandlePayment();

          this.chooseMethod = true;
          this.getPaytmOrderId();
          this.subscriptionViewed();
        }
      }, {
        key: "getPaytmOrderId",
        value: function getPaytmOrderId() {
          var _this35 = this;

          var formData = new FormData();
          formData.append('mobile', localStorage.getItem('mobile_number'));
          formData.append('amount', this.price);
          this.http.post('https://partner.hansmatrimony.com/api/order', formData).subscribe(function (data) {
            console.log(data);

            if (data) {
              var paytmData = JSON.parse(data.response);
              _this35.oId = data.order_id;
              localStorage.setItem('oId', data.order_id);
              _this35.txnToken = paytmData.body.txnToken; // testing mId
              // this.mId = 'bkjPis66135619933053';
              // production mId

              _this35.mId = 'Twango57803369412564';
            }
          }, function (err) {
            console.log('error', err);
          });
        }
      }, {
        key: "onPaytm",
        value: function onPaytm() {
          this.analyticsService.googleAnalytics('Paytm Payement Gateway Opened For ' + this.price);
          var form = document.getElementById('pay'); // tslint:disable-next-line: max-line-length
          // staging/ testing url
          // (form as any).action = `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=${this.oId}`;
          // production url

          form.action = "https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=Twango57803369412564&orderId=".concat(this.oId);
          form.submit();
        }
      }, {
        key: "subscriptionViewed",
        value: function subscriptionViewed() {
          var _this36 = this;

          var formData = new FormData();
          formData.append('mobile', localStorage.getItem('mobile_number'));
          this.http.post('https://partner.hansmatrimony.com/api/isSubscriptionViewed', formData).subscribe(function (data) {
            console.log(data);

            _this36.analyticsService.googleAnalytics('Subscription Seen');

            _this36.analyticsService.facebookAnalytics('InitiateCheckout');
          });
        }
      }]);

      return TodaysPaymentPopupComponent;
    }();

    TodaysPaymentPopupComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: src_app_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]
      }, {
        type: src_app_subscriptionservice_service__WEBPACK_IMPORTED_MODULE_5__["SubscriptionserviceService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_analytics_service__WEBPACK_IMPORTED_MODULE_7__["AnalyticsService"]
      }, {
        type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__["NgxNotificationService"]
      }];
    };

    TodaysPaymentPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todays-payment-popup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todays-payment-popup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todays-payment-popup/todays-payment-popup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todays-payment-popup.component.css */
      "./src/app/todays-payment-popup/todays-payment-popup.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], TodaysPaymentPopupComponent);
    /***/
  },

  /***/
  "./src/app/verify-otp/verify-otp.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/verify-otp/verify-otp.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyOtpVerifyOtpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".root {\r\n    background-color: white;\r\n    width: 100%;\r\n    padding: 30px 10px;\r\n    font-family: 'Gotham Rounded Book',Roboto, \"Helvetica Neue\", sans-serif !important;\r\n    position: relative;\r\n}\r\n#cancel{\r\n    position: absolute;\r\n    z-index: 99999999;\r\n    right: 0px;\r\n    top: 0px;\r\n}\r\n.heading {\r\n    color: #58D1FD;\r\n}\r\n.subHeading {\r\n    color: #c8c8c8;\r\n    font-size: 1em;\r\n}\r\n.formSetting{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n.otpField {\r\n    width: 50px;\r\n    margin: 0px 5px;\r\n}\r\n.otpField input {\r\n    color: black;\r\n    text-align: center;\r\n}\r\n.verifyBtn {\r\n    background-color: #58D1FD;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    padding: 8px 50px;\r\n    border: none;\r\n    border-radius: 50px;\r\n    margin: 50px auto 0px;\r\n    display: block;\r\n}\r\n.resendBtnDisabled{\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #c8c8c8;\r\n    font-size: 1em;\r\n    float: right;\r\n    margin-right: 15px;\r\n    padding: 0px 0px 10px;\r\n}\r\n.resendBtn {\r\n    background-color: transparent;\r\n    border: 1px solid #58D1FD;\r\n    color: #58D1FD;\r\n    font-size: 1em;\r\n    float: right;\r\n    margin-right: 15px;\r\n    border-radius: 50px;\r\n    padding: 5px 20px;\r\n}\r\n#secs {\r\n    color: red;\r\n}\r\n#changeNumber {\r\n    color: #58D1FD;\r\n    font-size: 1em;\r\n    background-color: transparent;\r\n    border: none;\r\n    display: block;\r\n    margin: 20px auto 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LW90cC92ZXJpZnktb3RwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrRkFBa0Y7SUFDbEYsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixRQUFRO0FBQ1o7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1vdHAvdmVyaWZ5LW90cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIFJvdW5kZWQgQm9vaycsUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jY2FuY2Vse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuLmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICM1OEQxRkQ7XHJcbn1cclxuLnN1YkhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNjOGM4Yzg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLmZvcm1TZXR0aW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5vdHBGaWVsZCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxufVxyXG5cclxuLm90cEZpZWxkIGlucHV0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnZlcmlmeUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThEMUZEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogOHB4IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5yZXNlbmRCdG5EaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNjOGM4Yzg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTBweDtcclxufVxyXG4ucmVzZW5kQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU4RDFGRDtcclxuICAgIGNvbG9yOiAjNThEMUZEO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbn1cclxuXHJcbiNzZWNzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiNjaGFuZ2VOdW1iZXIge1xyXG4gICAgY29sb3I6ICM1OEQxRkQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/verify-otp/verify-otp.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/verify-otp/verify-otp.component.ts ***!
    \****************************************************/

  /*! exports provided: VerifyOtpComponent */

  /***/
  function srcAppVerifyOtpVerifyOtpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function () {
      return VerifyOtpComponent;
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


    var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../language.service */
    "./src/app/language.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var VerifyOtpComponent = /*#__PURE__*/function () {
      function VerifyOtpComponent(languageService, http, snackBar, spinner, dialogRef, data) {
        _classCallCheck(this, VerifyOtpComponent);

        this.languageService = languageService;
        this.http = http;
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.dialogRef = dialogRef;
        this.data = data;
        this.showTimer = false;
      }

      _createClass(VerifyOtpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.languageService.setVerificationLanguage();
          this.spinner.hide();
          this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            otp1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9)]),
            otp2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9)]),
            otp3: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9)]),
            otp4: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9)])
          });
          this.sendOtp();
        }
      }, {
        key: "changePlaces",
        value: function changePlaces(event) {
          var element = document.querySelector("#verify".concat(event + 1)); // get the sibling element

          console.log(event);

          if (element == null) {
            // check if its null
            var button = document.querySelector('.verifyBtn');
            button.focus();
          } else {
            element.focus();
          } // focus if not null


          console.log('cngd');
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          var _this37 = this;

          if (this.otpForm.valid) {
            var otp = new FormData();
            otp.append('otp', "".concat(this.otpForm.value.otp1).concat(this.otpForm.value.otp2).concat(this.otpForm.value.otp3).concat(this.otpForm.value.otp4));
            otp.append('mobile', this.data.mobile);
            return this.http.post('https://partner.hansmatrimony.com/api/verifyOTP', otp).subscribe(function (res) {
              console.log('verify res', res);

              if (res.type === 'success') {
                _this37.showSnackBar('OTP Verified!!');

                _this37.dialogRef.close({
                  success: 'verified',
                  is_lead: _this37.data.is_lead
                });
              } else {
                _this37.showSnackBar('Invalid OTP');
              }
            });
          } else {
            this.showSnackBar('Invalid OTP');
          }
        }
      }, {
        key: "sendOtp",
        value: function sendOtp() {
          var _this38 = this;

          console.log('number', this.data.mobile);
          var formData = new FormData();
          formData.append('mobile', this.data.mobile);
          return this.http.post('https://partner.hansmatrimony.com/api/sendOTP', formData).subscribe(function (res) {
            console.log(res);

            if (res.type === 'success') {
              _this38.showSnackBar('Otp Sent Successfully');

              _this38.setTimer();
            } else {
              _this38.showSnackBar('Something Went Wrong, Try Again Later');

              _this38.dialogRef.close();
            }
          });
        }
      }, {
        key: "setTimer",
        value: function setTimer() {
          var _this39 = this;

          this.seconds = 45;
          this.showTimer = true;
          var timer = setInterval(function () {
            _this39.seconds = _this39.seconds - 1;

            if (_this39.seconds === 0) {
              clearInterval(timer);
              _this39.showTimer = false;
            }
          }, 1000);
        }
      }, {
        key: "changeNumber",
        value: function changeNumber() {
          this.dialogRef.close();
        }
      }, {
        key: "cross_click",
        value: function cross_click() {
          this.dialogRef.close();
        }
      }, {
        key: "showSnackBar",
        value: function showSnackBar(message) {
          this.snackBar.open(message, '', {
            duration: 1500
          });
        }
      }]);

      return VerifyOtpComponent;
    }();

    VerifyOtpComponent.ctorParameters = function () {
      return [{
        type: _language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    VerifyOtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-otp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-otp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-otp/verify-otp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-otp.component.css */
      "./src/app/verify-otp/verify-otp.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], VerifyOtpComponent);
    /***/
  },

  /***/
  "./src/app/view-centres/view-centres.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/view-centres/view-centres.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewCentresViewCentresComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media only screen and (max-width: 900px) {\r\n    .HeadText {\r\n        margin: auto;\r\n         font-size: 18px;\r\n        display: inline-block;\r\n        color:#285fdd;\r\n        font-weight: bolder;\r\n        text-align: center;\r\n    }\r\n    .headRow {\r\n        margin-top: -32px;\r\n         margin-left:10px\r\n    }\r\n    .sizeIt {\r\n        width: 100px;\r\n    }\r\n    .cardImg {\r\n        width: 100px;\r\n         background-color: white;\r\n    }\r\n    .cardText {\r\n        background-color: white;\r\n        padding-top: 0px;\r\n        \r\n    }\r\n    .cardBodyText {\r\n        width:100px;\r\n        padding: 10px 0px 0px 0px;\r\n        margin: 0px;\r\n        text-align: left;\r\n        background-color: white;\r\n    }\r\n    .cardBodyText1 {\r\n        width:100px;\r\n        padding: 15px 0px 0px 0px;\r\n        margin: 0px;\r\n        text-align: left;\r\n        background-color: white;\r\n    }\r\n    .card-header {\r\n        background-color: white;\r\n        padding: 0px;\r\n        margin: 10px 0px 0px 10px;\r\n    }\r\n    .nearByTemple{\r\n        width: 60%;\r\n        border: 1px solid grey;\r\n        border-radius: 4px;\r\n    }\r\n\r\n}\r\n\r\n.nearByTemple{\r\n    width: 60%;\r\n    border: 1px solid grey;\r\n    border-radius: 4px;\r\n}\r\n\r\n*{\r\n    background-color:white;\r\n\r\n}\r\n\r\n.HeadText {\r\n    margin: 10px auto auto;\r\n     font-size: 22px;\r\n    display: inline-block;\r\n    color:#285fdd;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n\r\n.headRow {\r\n    margin-top: -45px;\r\n     margin-left:10px\r\n}\r\n\r\n.first-box{\r\nposition: relative;\r\nheight: auto;\r\nmin-height: 25%;\r\nwidth: 48%;\r\nmargin: 40px 0px;\r\nleft: 25%;\r\ntext-align: center;\r\nbox-shadow: 7px 7px 10px #a46c6c;\r\n}\r\n\r\n.mobSizeText {\r\ndisplay: block;\r\n}\r\n\r\n.second-box{\r\nposition: relative;\r\nheight: auto;\r\nmin-height: 20%;\r\nwidth: 48%;\r\nmargin: 40px 0px;\r\nleft: 25%;\r\nbox-shadow: 7px 7px 10px #a46c6c;\r\n}\r\n\r\n.mobSize {\r\nmargin-bottom: 10px;\r\ntext-align: center;\r\npadding: 5px\r\n}\r\n\r\n.breakIt {\r\nword-wrap: break-word;\r\n}\r\n\r\np{\r\ntext-align: center;\r\npadding-top:20px;\r\n}\r\n\r\n/* td{\r\n min-width: 220px; \r\n} */\r\n\r\nth{\r\nwidth: auto;\r\nmax-width: 388px;}\r\n\r\n.sub{\r\n    margin-left: 16px;\r\n\r\n}\r\n\r\n.sizeIt {\r\n    width: 150px;\r\n}\r\n\r\n.cardImg {\r\n    width: 200px;\r\n     background-color: white;\r\n}\r\n\r\n.cardText {\r\n    background-color: white;\r\n    padding-top: 20px;\r\n    \r\n}\r\n\r\n.cardBodyText {\r\n    width:200px;\r\n    padding: 10px 0px 0px 0px;\r\n    margin: 0px;\r\n    text-align: left;\r\n    background-color: white;\r\n}\r\n\r\n.cardBodyText1 {\r\n    width:200px;\r\n    padding: 10px 0px 0px 0px;\r\n    margin: 0px;\r\n    text-align: left;\r\n    background-color: white;\r\n}\r\n\r\n.column-l{\r\nfloat: left;\r\nwidth: 40%;\r\npadding: 5px;\r\n}\r\n\r\n.column-r {\r\nfloat: right;\r\nwidth: 60%;\r\npadding: 5px; \r\nmax-height: 250px\r\n}\r\n\r\n.card-header {\r\n    background-color: white;\r\n    padding: 0px;\r\n    margin: 10px 0px 0px 10px;\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n*{\r\n    font-size: 10px;\r\n}\r\ntd{\r\n    min-width: 74px;\r\n}\r\n.first-box{\r\n    width: 83%;\r\n    left: 9%;\r\n}\r\n.second-box{\r\n    width: 83%;\r\n    left: 9%;\r\n\r\n}\r\n.mobSize{\r\n    width: 50%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin: 0px;\r\n}\r\n.mobSizeText {\r\n    display: block;\r\n    }\r\n    .cardImg {\r\n        width: 100px;\r\n         background-color: white;\r\n    }\r\n    .cardText {\r\n        background-color: white;\r\n        padding-top: 0px;\r\n    }\r\n    .sizeIt {\r\n        width: 100px;\r\n    }\r\n    .cardBodyText1 {\r\n        width:100px;\r\n        padding: 15px 0px 0px 0px;\r\n        margin: 0px;\r\n        text-align: left;\r\n        background-color: white;\r\n    }\r\n    .cardBodyText {\r\n        width: 150px;\r\n        padding: 10px 0px 0px 0px;\r\n        margin: 0px;\r\n        text-align: left;\r\n        background-color: white;\r\n    }\r\n    .nearByTemple{\r\n        width: 60%;\r\n        border: 1px solid grey;\r\n        border-radius: 4px;\r\n        \r\n    }\r\n    .colTemple {\r\n        border: 1px solid black;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jZW50cmVzL3ZpZXctY2VudHJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxZQUFZO1NBQ1gsZUFBZTtRQUNoQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtTQUNoQjtJQUNMO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO1NBQ1gsdUJBQXVCO0lBQzVCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsZ0JBQWdCOztJQUVwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztBQUVKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUNBO0lBQ0ksc0JBQXNCO0tBQ3JCLGVBQWU7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0tBQ2hCO0FBQ0w7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLGVBQWU7QUFDZixVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsZ0NBQWdDO0FBQ2hDOztBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixlQUFlO0FBQ2YsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1QsZ0NBQWdDO0FBQ2hDOztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQjs7QUFDQTs7R0FFRzs7QUFDSDtBQUNBLFdBQVc7QUFDWCxnQkFBZ0IsQ0FBQzs7QUFDakI7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFlBQVk7S0FDWCx1QkFBdUI7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCOztBQUVyQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVixZQUFZO0FBQ1o7O0FBRUE7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWLFlBQVk7QUFDWjtBQUNBOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixRQUFRO0FBQ1o7QUFDQTtJQUNJLFVBQVU7SUFDVixRQUFROztBQUVaO0FBQ0E7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZDtJQUNBO1FBQ0ksWUFBWTtTQUNYLHVCQUF1QjtJQUM1QjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztRQUNYLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHNCQUFzQjtRQUN0QixrQkFBa0I7O0lBRXRCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctY2VudHJlcy92aWV3LWNlbnRyZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5IZWFkVGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiMyODVmZGQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaGVhZFJvdyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OjEwcHhcclxuICAgIH1cclxuICAgIC5zaXplSXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkSW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRUZXh0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNhcmRCb2R5VGV4dCB7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRCb2R5VGV4dDEge1xyXG4gICAgICAgIHdpZHRoOjEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmVhckJ5VGVtcGxle1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubmVhckJ5VGVtcGxle1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbip7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5cclxufVxyXG4uSGVhZFRleHQge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gYXV0bztcclxuICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjojMjg1ZmRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRSb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MTBweFxyXG59XHJcbi5maXJzdC1ib3h7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuaGVpZ2h0OiBhdXRvO1xyXG5taW4taGVpZ2h0OiAyNSU7XHJcbndpZHRoOiA0OCU7XHJcbm1hcmdpbjogNDBweCAwcHg7XHJcbmxlZnQ6IDI1JTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5ib3gtc2hhZG93OiA3cHggN3B4IDEwcHggI2E0NmM2YztcclxufVxyXG4ubW9iU2l6ZVRleHQge1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG4uc2Vjb25kLWJveHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5oZWlnaHQ6IGF1dG87XHJcbm1pbi1oZWlnaHQ6IDIwJTtcclxud2lkdGg6IDQ4JTtcclxubWFyZ2luOiA0MHB4IDBweDtcclxubGVmdDogMjUlO1xyXG5ib3gtc2hhZG93OiA3cHggN3B4IDEwcHggI2E0NmM2YztcclxufVxyXG4ubW9iU2l6ZSB7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxucGFkZGluZzogNXB4XHJcbn1cclxuXHJcbi5icmVha0l0IHtcclxud29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5we1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmctdG9wOjIwcHg7XHJcbn1cclxuLyogdGR7XHJcbiBtaW4td2lkdGg6IDIyMHB4OyBcclxufSAqL1xyXG50aHtcclxud2lkdGg6IGF1dG87XHJcbm1heC13aWR0aDogMzg4cHg7fVxyXG4uc3Vie1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcblxyXG59XHJcbi5zaXplSXQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jYXJkSW1nIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmRUZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBcclxufVxyXG4uY2FyZEJvZHlUZXh0IHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkQm9keVRleHQxIHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb2x1bW4tbHtcclxuZmxvYXQ6IGxlZnQ7XHJcbndpZHRoOiA0MCU7XHJcbnBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbHVtbi1yIHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG53aWR0aDogNjAlO1xyXG5wYWRkaW5nOiA1cHg7IFxyXG5tYXgtaGVpZ2h0OiAyNTBweFxyXG59XHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbip7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxudGR7XHJcbiAgICBtaW4td2lkdGg6IDc0cHg7XHJcbn1cclxuLmZpcnN0LWJveHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBsZWZ0OiA5JTtcclxufVxyXG4uc2Vjb25kLWJveHtcclxuICAgIHdpZHRoOiA4MyU7XHJcbiAgICBsZWZ0OiA5JTtcclxuXHJcbn1cclxuLm1vYlNpemV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLm1vYlNpemVUZXh0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNhcmRJbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY2FyZFRleHQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuc2l6ZUl0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZEJvZHlUZXh0MSB7XHJcbiAgICAgICAgd2lkdGg6MTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHggMHB4IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLmNhcmRCb2R5VGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5uZWFyQnlUZW1wbGV7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5jb2xUZW1wbGUge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/view-centres/view-centres.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/view-centres/view-centres.component.ts ***!
    \********************************************************/

  /*! exports provided: ViewCentresComponent */

  /***/
  function srcAppViewCentresViewCentresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewCentresComponent", function () {
      return ViewCentresComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ViewCentresComponent = /*#__PURE__*/function () {
      function ViewCentresComponent(http) {
        _classCallCheck(this, ViewCentresComponent);

        this.http = http;
        this.centres = [];
      }

      _createClass(ViewCentresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          this.http.get('https://partner.hansmatrimony.com/api/viewCentres', {
            headers: headers
          }).subscribe(function (res) {
            _this40.centres = res;
            console.log(_this40.centres);
            var l = _this40.centres.length;

            for (var i = 0; i < l; i++) {
              if (i % 2 === 0) {
                // tslint:disable-next-line: max-line-length
                _this40.centres[i].profile_photo = 'https://matchmakerz.s3.ap-south-1.amazonaws.com/static/matchmakerz/profile_pic/temple.pngimage.jpg';
              } else {
                // tslint:disable-next-line: max-line-length
                _this40.centres[i].profile_photo = 'https://matchmakerz.s3.ap-south-1.amazonaws.com/static/matchmakerz/profile_pic/temple_yellow.pngimage.jpg';
              }
            }
          });
        }
      }]);

      return ViewCentresComponent;
    }();

    ViewCentresComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViewCentresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-centres',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-centres.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-centres/view-centres.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-centres.component.css */
      "./src/app/view-centres/view-centres.component.css"))["default"]]
    })], ViewCentresComponent);
    /***/
  },

  /***/
  "./src/assets/Data/data.js":
  /*!*********************************!*\
    !*** ./src/assets/Data/data.js ***!
    \*********************************/

  /*! exports provided: features, works, testimonials */

  /***/
  function srcAssetsDataDataJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "features", function () {
      return features;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "works", function () {
      return works;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "testimonials", function () {
      return testimonials;
    });

    var features = [{
      id: 1,
      details1: "Verified matches from",
      details2: "50+ Temples in India",
      image: '../../assets/featuresIllustrations/illustration1.jpg'
    }, {
      id: 2,
      details1: "More than 50,000",
      details2: "suitable matches",
      image: '../../assets/featuresIllustrations/illustration2.jpg'
    }, {
      id: 3,
      details1: "Get Your Personal Matchmaker",
      details2: "from 1000+Matchmakers",
      image: '../../assets/featuresIllustrations/illustration3.jpg'
    }];
    var works = [{
      id: 1,
      header: "Join",
      details1: "Join our platform easily by providing your basic",
      details2: "details either online or offline at the temple centres.",
      image: '../../assets/howItWorksIllustrations/illustration1.jpg',
      flex: "row"
    }, {
      id: 2,
      header: "Get temple Verified Matches",
      details1: "Profiles are verified by the matchmakers at",
      details2: "hans matrimony temple centres to give you the",
      details3: " best profiles possible",
      image: '../../assets/howItWorksIllustrations/illustration2.jpg',
      flex: "row-reverse"
    }, {
      id: 3,
      header: "Get Personalized Matches",
      details1: "Contact our matchmakers to get your personalised preferences",
      details2: "matches anytime. Our matchmakers will share",
      details3: "profiles on a daily/weekly basis as per your",
      details4: "preferences",
      image: '../../assets/howItWorksIllustrations/illustration3.jpg',
      flex: "row"
    }, {
      id: 4,
      header: "Contact profiles you like",
      details1: "Choose your perfect matches and contact them by",
      details2: "becoming our prime member in just a single tap.",
      image: '../../assets/howItWorksIllustrations/illustration4.jpg',
      flex: "row-reverse"
    }, {
      id: 5,
      header: "Find your life partner",
      details1: "We at Hans Matrimony are dedicated to help you find",
      details2: "your life partner. Sign up and leave the hassle to us",
      image: '../../assets/howItWorksIllustrations/illustration5.jpg',
      flex: "row"
    }];
    var testimonials = [{
      id: 1,
      title: "Akshay & Riya",
      paragraph: "Libero gravida egestas quam orci. Vulputate volutpat, sed sagittis, amet arcu amet quam scelerisque. Mi commodo vitae at eleifend aenean. Placerat tempor viverra platea nec leo integer senectus",
      image: "../../assets/testimonials/image1.jpg"
    }, {
      id: 1,
      title: "Lakshay & Priya",
      paragraph: "Libero gravida egestas quam orci. Vulputate volutpat, sed sagittis, amet arcu amet quam scelerisque. Mi commodo vitae at eleifend aenean. Placerat tempor viverra platea nec leo integer senectus.",
      image: "../../assets/testimonials/image1.jpg"
    }, {
      id: 1,
      title: "Akash & Rina",
      paragraph: "Libero gravida egestas quam orci. Vulputate volutpat, sed sagittis, amet arcu amet quam scelerisque. Mi commodo vitae at eleifend aenean. Placerat tempor viverra platea nec leo integer senectus.",
      image: "../../assets/testimonials/image1.jpg"
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyCU-ZHkKEBJgfbcotGjEqrsU6C2aB9tDj4',
        authDomain: 'hanswebapp-b30da.firebaseapp.com',
        databaseURL: 'https://hanswebapp-b30da.firebaseio.com',
        projectId: 'hanswebapp-b30da',
        storageBucket: 'hanswebapp-b30da.appspot.com',
        messagingSenderId: '485274545846',
        appId: '1:485274545846:web:2574d9fbff3d2b0bec4017',
        measurementId: 'G-6Y2VQMSDV5',
        vapidKey: 'BM-CiqqzLOGPQ0C53Dj4p-5qvmIjTOzyjWNBqPUVHNwxR4JNMWurhJU2nqJi3RjZH1qr1Vn4ue3E5g8Gzz2nP0A'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\HansMatrimony\FInal\HansPwa\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map