function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bless-bless-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bless/bless-payment/bless-payment.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bless/bless-payment/bless-payment.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlessBlessPaymentBlessPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"root\" *ngIf=\"showSpinner\">\r\n        <mat-spinner diameter=\"50\"></mat-spinner>\r\n        <span>Please wait!! Getting Things Ready</span>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./src/app/bless/bless-payment/bless-payment.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/bless/bless-payment/bless-payment.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlessBlessPaymentBlessPaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".root {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxlc3MvYmxlc3MtcGF5bWVudC9ibGVzcy1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmxlc3MvYmxlc3MtcGF5bWVudC9ibGVzcy1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vdCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/bless/bless-payment/bless-payment.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/bless/bless-payment/bless-payment.component.ts ***!
    \****************************************************************/

  /*! exports provided: BlessPaymentComponent */

  /***/
  function srcAppBlessBlessPaymentBlessPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlessPaymentComponent", function () {
      return BlessPaymentComponent;
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


    var src_app_subscriptionservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/subscriptionservice.service */
    "./src/app/subscriptionservice.service.ts");

    var BlessPaymentComponent = /*#__PURE__*/function () {
      function BlessPaymentComponent(subscription) {
        _classCallCheck(this, BlessPaymentComponent);

        this.subscription = subscription;
        this.showSpinner = true;
      }

      _createClass(BlessPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadRazorPayScript();
        }
      }, {
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
            fileName.setAttribute('onload', "".concat(this.onloadOfScript()));
          }
        }
      }, {
        key: "onloadOfScript",
        value: function onloadOfScript() {
          var _this = this;

          setTimeout(function () {
            _this.showSpinner = false;

            _this.subscription.payNowT(3100, 'live', 0, 'Siddharth', 'orksiddharth@gmail.com', 9910395820, 45);
          }, 2500);
        }
      }]);

      return BlessPaymentComponent;
    }();

    BlessPaymentComponent.ctorParameters = function () {
      return [{
        type: src_app_subscriptionservice_service__WEBPACK_IMPORTED_MODULE_2__["SubscriptionserviceService"]
      }];
    };

    BlessPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bless-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bless-payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bless/bless-payment/bless-payment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bless-payment.component.css */
      "./src/app/bless/bless-payment/bless-payment.component.css"))["default"]]
    })], BlessPaymentComponent);
    /***/
  },

  /***/
  "./src/app/bless/bless-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/bless/bless-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: BlessRoutingModule */

  /***/
  function srcAppBlessBlessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlessRoutingModule", function () {
      return BlessRoutingModule;
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


    var _bless_payment_bless_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bless-payment/bless-payment.component */
    "./src/app/bless/bless-payment/bless-payment.component.ts");

    var routes = [{
      path: '',
      component: _bless_payment_bless_payment_component__WEBPACK_IMPORTED_MODULE_3__["BlessPaymentComponent"]
    }];

    var BlessRoutingModule = function BlessRoutingModule() {
      _classCallCheck(this, BlessRoutingModule);
    };

    BlessRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BlessRoutingModule);
    /***/
  },

  /***/
  "./src/app/bless/bless.module.ts":
  /*!***************************************!*\
    !*** ./src/app/bless/bless.module.ts ***!
    \***************************************/

  /*! exports provided: BlessModule */

  /***/
  function srcAppBlessBlessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlessModule", function () {
      return BlessModule;
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


    var _bless_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bless-routing.module */
    "./src/app/bless/bless-routing.module.ts");
    /* harmony import */


    var _bless_payment_bless_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bless-payment/bless-payment.component */
    "./src/app/bless/bless-payment/bless-payment.component.ts");
    /* harmony import */


    var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../angular-material/angular-material.module */
    "./src/app/angular-material/angular-material.module.ts");

    var BlessModule = function BlessModule() {
      _classCallCheck(this, BlessModule);
    };

    BlessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_bless_payment_bless_payment_component__WEBPACK_IMPORTED_MODULE_4__["BlessPaymentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _bless_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlessRoutingModule"], _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
    })], BlessModule);
    /***/
  }
}]);
//# sourceMappingURL=bless-bless-module-es5.js.map