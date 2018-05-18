(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mookie-home/mookie-home.component */ "./src/app/components/mookie-home/mookie-home.component.ts");
/* harmony import */ var _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mookie-pagenotfound/mookie-pagenotfound.component */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts");
/* harmony import */ var _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mookie-social/mookie-social.component */ "./src/app/components/mookie-social/mookie-social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_2__["MookieHomeComponent"] },
    { path: "**", component: _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["MookiePagenotfoundComponent"] },
    { path: 'thesecret', component: _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_4__["MookieSocialComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img src=\"assets/3dMocha.png\"/> -->\n\n<body>\n  <!-- Stripe modal -->\n  <div class=\"modal fade\" id=\"stripeModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <!-- {{mookie.modalTitle}} -->\n          <h2> Mookie Dough Customer Experience</h2>\n        </div>\n        <div class=\"modal-body\">\n          <h4> Thank you for shopping with us</h4>\n          <img class=\"thankshopper\" src=\"../imgs/Media/header2.png\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  -->\n\n  <!-- Etc Modal -->\n  <div class=\"modal fade container\" id=\"myModal\" role=\"dialog\" style=\"color:black;\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <!-- {{mookie.modalTitle}} -->\n          <button type=\"button\" class=\"close myClose\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <!-- {{mookie.modalBody}} -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--  -->\n\n  <!-- Product Modal -->\n  <div class=\"modal fade\" id=\"productModal\" role=\"dialog\">\n    <!-- <productwidget info=\"mookie.modal\"></productwidget> -->\n  </div>\n\n  <!-- Mookie Header -->\n  <app-mookie-header></app-mookie-header>\n\n  <!-- Main Angular view where routes will be rendered-->\n  <!-- <div class=\"main-view\" ng-show=\"main.loadme\" ng-view></div> -->\n  <router-outlet></router-outlet>\n\n  <!-- Mookie footer -->\n  <app-mookie-footer></app-mookie-footer>\n\n<!-- <script src=\"../mookiedoughfrontend/js/scripts.js\"></script> -->\n</body>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  line-height: normal !important; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.social-bar a {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  text-decoration: none;\n  margin-right: 18px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: color 0.3s; }\n\n.social-bar.text-center a {\n  margin-left: 9px;\n  margin-right: 9px; }\n\n.social-bar.text-right a {\n  margin-left: 18px;\n  margin-right: 0; }\n\n.text-center .social-bar a {\n  margin-left: 9px;\n  margin-right: 9px; }\n\n.text-right .social-bar a {\n  margin-left: 18px;\n  margin-right: 0; }\n\n.add-cart-note {\n  display: none;\n  height: 200px;\n  width: 100%; }\n\n.add-cart-note.ng-hide {\n  display: none; }\n\n.nav, .pagination, .carousel, .panel-title a {\n  cursor: pointer; }\n\n.shownCheck {\n  display: inline-block; }\n\n.hiddenCheck {\n  display: none !important; }\n\n.hidden-plus {\n  display: none !important; }\n\n.mookie-product {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.image-container {\n  height: 250px; }\n\n.mookie-img {\n  display: block;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  align-content: middle; }\n\nproduct {\n  max-height: 300px;\n  position: relative;\n  display: block;\n  margin-bottom: 100px;\n  /* overflow-y:hidden; */\n  align-content: left; }\n\n.mookie-product .mookie-product-thumbnail {\n  height: 200px;\n  width: 100%;\n  padding-bottom: 15px; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details {\n  width: 100%; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-price {\n  color: #111111;\n  font-weight: bold; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-title {\n  width: 90%; }\n\n.mookie-product .mookie-shop-item-tools .mookie-shop-item-details .mookie-shop-item-title .mookie-title {\n  color: #111111;\n  font-size: 15px;\n  /* color:black; */\n  /* #606060 */\n  font-family: \"Work Sans\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  overflow-wrap: normal;\n  word-wrap: break-word;\n  word-break: normal;\n  width: 100%;\n  white-space: normal; }\n\n.mookie-add-to-cart {\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n\n.mookie-add-to-cart-plus {\n  /* display:block; */\n  /* position:absolute;\r\n\tright:10px;\r\n\tbottom:5px; */\n  min-height: 30px;\n  min-width: 30px;\n  display: inline-block;\n  border-radius: 60px;\n  box-shadow: 0px 0px 2px #111111;\n  padding: 0.5em 0.6em; }\n\n/* Css from theme.css */\n\n.page-preloader {\n  position: fixed;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #ffffff;\n  transition: all 0.5s; }\n\n.page-preloading .page-wrapper {\n  opacity: 0;\n  transition: all 0.5s 0.3s; }\n\n.page-preloading .page-preloader {\n  visibility: visible;\n  opacity: 1; }\n\n.page-preloading.loading-done .page-wrapper {\n  opacity: 1; }\n\n.page-preloading.loading-done .page-preloader {\n  visibility: hidden;\n  opacity: 0; }\n\n.page-preloading.loading-done.link-clicked .page-wrapper {\n  opacity: 0; }\n\n.preloader {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  margin-top: -30px;\n  margin-left: -30px; }\n\n.count {\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 16px;\n  font-size: 12px;\n  color: black;\n  text-align: right;\n  border-radius: 50%;\n  top: -2px;\n  right: -17px; }\n\n.shop-count {\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  color: white;\n  background-color: #333333;\n  top: -5px;\n  right: -5px;\n  /* font-size: 10px; */\n  text-align: center;\n  font: 10px Arial, sans-serif;\n  padding: 4px; }\n\n/* Main Navigation Mobile */\n\n@-webkit-keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none; } }\n\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 15px, 0);\n    transform: translate3d(0, 15px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@-webkit-keyframes slideUpLong {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 25px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none; } }\n\n@keyframes slideUpLong {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.socialMedia {\n  display: none; }\n\ni.icon-black {\n  color: black; }\n\n/* Base class */\n\n.scroll-to-top-btn {\n  display: block;\n  /* position: absolute;\r\n  width: 48px; */\n  height: 48px;\n  font-size: 24px;\n  color: #606060;\n  line-height: 44px;\n  text-align: center;\n  text-decoration: none;\n  right: 20px;\n  bottom: 0;\n  background-color: #fff;\n  border: 2px solid #ededed;\n  border-bottom: 0;\n  cursor: pointer;\n  transition: color 0.3s; }\n\n.scroll-to-top-btn > i {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg); }\n\n.scroll-to-top-btn:hover {\n  color: #999; }\n\n/* Index only Css */\n\n/* Other Css should be moved to other files */\n\n@media screen and (max-width: 480px) {\n  .scroll-to-top-btn {\n    height: 42px;\n    font-size: 20px;\n    line-height: 38px; } }\n\nheader {\n  transition: top 0.2s ease-in-out; }\n\n.nav-up {\n  top: -80px; }\n\n/* Form control inputs */\n\n.form-control {\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  height: 48px;\n  font-size: 14px;\n  color: #606060;\n  text-transform: none;\n  border: 2px solid #ededed;\n  border-radius: 5px;\n  background-color: #fff;\n  padding: 0 16px;\n  margin-bottom: 24px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  transition: all 0.3s; }\n\n.form-control:focus {\n  border-color: #77cde3;\n  outline: none; }\n\n.form-control::-moz-placeholder {\n  color: #606060;\n  opacity: 1; }\n\n.form-control:-ms-input-placeholder {\n  color: #606060; }\n\n.form-control::-webkit-input-placeholder {\n  color: #606060; }\n\n.form-control.placeholder {\n  color: #606060; }\n\n.ssb-facebook {\n  background-color: #3b5998;\n  color: white;\n  vertical-align: top; }\n\n.ssb-google {\n  background-color: #dd4b39;\n  color: white;\n  vertical-align: top; }\n\n.ssb-twitter {\n  background-color: #55acee;\n  color: white;\n  vertical-align: top; }\n\n.ssb-instagram {\n  background: #f09433;\n  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);\n  color: white;\n  vertical-align: top; }\n\n.fuschia-gradient {\n  background: linear-gradient(#F93268, #4731B9); }\n\n.default-gradient-s {\n  background: #333333;\n  background: linear-gradient(45deg, #333333 0%, #474747 25%, #5f5f5f 50%, #5f5f5f 75%, #867e7e 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#ffffff', GradientType=1); }\n\n.default-gradient {\n  background: #000046;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #f5f5f5, #333333);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 10px; }\n\n.gray-gradient {\n  /* background:linear-gradient(rgb(190, 159, 73),rgb(44, 49, 75)); */\n  background: linear-gradient(#be9f49, #333333); }\n\n.widget-title {\n  margin-top: 0px; }\n\n.toolbar {\n  color: black;\n  position: absolute;\n  font-size: 36px;\n  right: 5px;\n  bottom: 0px;\n  /* height: 80px; */\n  width: auto;\n  display: flex;\n  align-items: flex-end; }\n\n.mookieIcon {\n  color: #333333;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  display: inline-flex;\n  vertical-align: text-top;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n\n.mookieIcon:hover {\n  color: #333333; }\n\na.mobile-menu-toggle {\n  /* display: none; */\n  display: inline-flex;\n  color: #333333; }\n\n/* a.mobile-menu-toggle:after {\r\n\tdisplay: none;\r\n\tcolor: black;\r\n\tfont-family: 'Material Icons';\r\n\tcontent: \"\\e5cd\";\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(-20px) scale(0.7);\r\n\t-moz-transform: translateY(-20px) scale(0.7);\r\n\t-ms-transform: translateY(-20px) scale(0.7);\r\n\t-o-transform: translateY(-20px) scale(0.7);\r\n\ttransform: translateY(-20px) scale(0.7);\r\n\t-webkit-transition: transform 0.3s, opacity 0.15s;\r\n\t-o-transition: transform 0.3s, opacity 0.15s;\r\n\ttransition: transform 0.3s, opacity 0.15s;\r\n} */\n\na.mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n\n/* a.mobile-menu-toggle.active:after {\r\n\tdisplay: inline-block;\r\n\topacity: 1;\r\n\t-webkit-transform: translateY(0) scale(1);\r\n\t-moz-transform: translateY(0) scale(1);\r\n\t-ms-transform: translateY(0) scale(1);\r\n\t-o-transform: translateY(0) scale(1);\r\n\ttransform: translateY(0) scale(1);\r\n\t-webkit-transition: transform 0.3s, opacity 0.15s;\r\n\t-o-transition: transform 0.3s, opacity 0.15s;\r\n\ttransition: transform 0.3s, opacity 0.15s;\r\n} */\n\na.mobile-menu-toggle.active .menu {\n  display: none;\n  color: black; }\n\na.mobile-menu-toggle.active .cross {\n  color: black;\n  display: inline-flex; }\n\na.mobile-menu-toggle .cross {\n  display: none; }\n\na.mobile-menu-toggle > i {\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  opacity: 1;\n  -webkit-transform: translateY(0) scale(1);\n  transform: translateY(0) scale(1);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n\n.mobile-menu-toggle.active > i {\n  opacity: 0;\n  -webkit-transform: translateY(-20px) scale(0.7);\n  transform: translateY(-20px) scale(0.7);\n  transition: opacity 0.15s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.15s;\n  transition: transform 0.3s, opacity 0.15s, -webkit-transform 0.3s; }\n\n.no-scroll-body {\n  overflow: hidden; }\n\n@media screen and (max-width: 1070px) {\n  a.mobile-menu-toggle {\n    display: inline-flex;\n    vertical-align: text-top; } }\n\n.close.myClose {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute;\n  top: 50%;\n  right: 5px; }\n\n.modal {\n  color: black;\n  text-align: center; }\n\n@media screen and (min-width: 768px) {\n  .modal:before {\n    display: inline-block;\n    vertical-align: middle;\n    /* content: \" \"; */\n    height: 100%; }\n  .modal-dialog {\n    display: inline-block;\n    text-align: center;\n    vertical-align: middle; } }\n\n.modal-header {\n  overflow: hidden;\n  border: 1px solid transparent;\n  position: relative; }\n\n.inlineButton {\n  width: auto;\n  display: inline-block; }\n\n.form-submit {\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.flexvertical-align {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.row.match-my-cols {\n  overflow: hidden; }\n\n.row.match-my-cols [class*=\"col-\"].sethalf {\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n  /* \r\n    margin-bottom: -99999px;\r\n    padding-bottom: 99999px; */ }\n\n@media screen and (max-width: 990px) {\n  .row.match-my-cols [class*=\"col-\"].sethalf {\n    -webkit-transform: none;\n            transform: none; } }\n\n.black-a {\n  background-color: #333333;\n  border-color: #333333; }\n\n.thankshopper {\n  width: 100%; }\n\n.secretsocial {\n  color: #333333;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n\n.secretsocial:hover {\n  color: #333333; }\n\n.subscribe-form {\n  margin-bottom: 10px; }\n\n#logo {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0; }\n\n@media screen and (max-width: 400px) {\n  #logo {\n    position: relative;\n    float: left; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mookie-header/mookie-header.component */ "./src/app/components/mookie-header/mookie-header.component.ts");
/* harmony import */ var _components_mookie_footer_mookie_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mookie-footer/mookie-footer.component */ "./src/app/components/mookie-footer/mookie-footer.component.ts");
/* harmony import */ var _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mookie-home/mookie-home.component */ "./src/app/components/mookie-home/mookie-home.component.ts");
/* harmony import */ var _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mookie-pagenotfound/mookie-pagenotfound.component */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts");
/* harmony import */ var _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mookie-social/mookie-social.component */ "./src/app/components/mookie-social/mookie-social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_mookie_header_mookie_header_component__WEBPACK_IMPORTED_MODULE_4__["MookieHeaderComponent"],
                _components_mookie_footer_mookie_footer_component__WEBPACK_IMPORTED_MODULE_5__["MookieFooterComponent"],
                _components_mookie_home_mookie_home_component__WEBPACK_IMPORTED_MODULE_6__["MookieHomeComponent"],
                _components_mookie_pagenotfound_mookie_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["MookiePagenotfoundComponent"],
                _components_mookie_social_mookie_social_component__WEBPACK_IMPORTED_MODULE_8__["MookieSocialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- New footer -->\n<footer id=\"main-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <p>&copy; 2018 all rights reserved. Mookie Dough LLC</p>\n        <br>\n        <p ng-if=\"mookie.numberOfSiteVisitors > 0\"> Site has been accessed {{mookie.numberOfSiteVisitors}} times.</p>\n        <br>\n        <h3 class=\"widget-title\">\n          <small>Subscribe to the Mookie Dough email list</small>\n        </h3>\n        <form class=\"subscribe-form\" novalidate>\n          <input type=\"email\" name=\"EMAIL\" placeholder=\"Your e-mail\" ng-model=\"subEmail\">\n          <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n            <input type=\"text\" name=\"\" tabindex=\"-1\" value=\"\">\n          </div>\n          <button type=\"submit\" ng-click=\"main.addSubscription(subEmail)\">\n            <i class=\"material-icons send\"></i>\n          </button>\n          <!-- <p ng-show=\"main.subMessage\"> {{main.subMessage}}</p> -->\n        </form>\n\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Relevant Links</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"/about\">About us</a>\n          </li>\n          <li>\n            <a href=\"/menu\">Menu</a>\n          </li>\n          <li>\n            <a href=\"/thesecret\">Social Media</a>\n          </li>\n          <li>\n            <a href=\"/register\">Sign in</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-2\">\n        <h6>Our team</h6>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a href=\"https://www.linkedin.com/in/abempah/\">Bempah</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/akim-richards-a8303610a/\">Akim</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/dellarontay/\">Dellarontay</a>\n          </li>\n          <li>\n            <a href=\"https://www.linkedin.com/in/oluwaseyi-olaleye-a523b210a/\">Oluwaseyi</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  padding-top: 10px;\n  background-color: #333333;\n  color: #ffffff; }\n\n#main-footer {\n  background: #333333;\n  color: white;\n  padding: 6rem 0;\n  /* font-size: 0.8rem; */ }\n\n#main-footer h6 {\n  color: #718FA9; }\n\n#main-footer a {\n  color: #6C6F73; }\n"

/***/ }),

/***/ "./src/app/components/mookie-footer/mookie-footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-footer/mookie-footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieFooterComponent", function() { return MookieFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieFooterComponent = /** @class */ (function () {
    function MookieFooterComponent() {
    }
    MookieFooterComponent.prototype.ngOnInit = function () {
    };
    MookieFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-footer',
            template: __webpack_require__(/*! ./mookie-footer.component.html */ "./src/app/components/mookie-footer/mookie-footer.component.html"),
            styles: [__webpack_require__(/*! ./mookie-footer.component.scss */ "./src/app/components/mookie-footer/mookie-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieFooterComponent);
    return MookieFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-sticky nav-down\">\n  <div id=\"logo\" href=\"/home\">\n    <a href=\"/home\">\n      <img src=\"../updatedFrontend/toplogo.svg\" alt=\"App Loading\">\n    </a>\n  </div>\n  <nav class=\"main-navigation text-center\">\n    <ul class=\"menu\">\n      <li>\n        <a href=\"/home\">\n          <span>Home</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/menu\">\n          <span>menu</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/thesecret\">\n          <span>the secret</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/coterie\">\n          <span>coterie est.2017</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"/about\">\n          <span>about us</span>\n        </a>\n      </li>\n      <li ng-show=\"!mookie.loggedIn\">\n        <a href=\"/register\">\n          Sign In/Up\n        </a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"toolbar\">\n    <div class=\"inner\">\n      <a href=\"#\" class=\"mobile-menu-toggle mookieIcon\">\n        <i class=\"fas fa-bars fa-xs fa-fw menu\"></i>\n        <i class=\"fas fa-times fa-xs fa-fw cross\"></i>\n      </a>\n      <a href=\"/account\" class=\"mookieIcon\" ng-show=\"mookie.loggedIn\">\n        <i class=\"fas fa-user fa-xs fa-fw\"></i>\n      </a>\n      <a href=\"/shopping-cart\" class=\"mookieIcon\" ng-show=\"mookie.cartItemCount > 0\">\n        <i class=\"fas fa-shopping-cart fa-xs fa-fw\"></i>\n        <span class=\"shop-count\">{{mookie.cartItemCount}}</span>\n      </a>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  /* border-bottom: 1px solid #CCCCCC;\r\n\tborder-bottom-width: 1px;\r\n\tborder-bottom-style: solid;\r\n\tborder-bottom-color: rgb(204, 204, 204); */\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  max-height: 80px;\n  min-height: 80px;\n  background-color: #fff;\n  padding-left: 5px;\n  top: 0;\n  left: 0; }\n\n.navbar.navbar-sticky {\n  position: fixed; }\n\n.navbar.navbar-sticky + * {\n  margin-top: 100px; }\n\n.main-navigation > .menu li > a {\n  display: block;\n  color: #606060;\n  font-size: 14px;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-decoration: none; }\n\n.main-navigation {\n  display: block;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: calc(100% - 80px);\n  top: 80px;\n  left: 0;\n  background-color: #ffffff;\n  padding: 0;\n  overflow-y: auto;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.3s, opacity 0.3s; }\n\n.main-navigation > .menu {\n  display: none;\n  color: black;\n  list-style: none;\n  margin: 0;\n  padding: 20px 0; }\n\n.main-navigation > .menu > li {\n  display: block; }\n\n.main-navigation > .menu > li > a {\n  line-height: 1.5;\n  padding: 12px 15px; }\n\n.main-navigation.open {\n  visibility: visible;\n  opacity: 1; }\n\n.main-navigation.open > .menu {\n  display: block;\n  -webkit-animation: slideUpLong 0.5s;\n  animation: slideUpLong 0.5s; }\n"

/***/ }),

/***/ "./src/app/components/mookie-header/mookie-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-header/mookie-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieHeaderComponent", function() { return MookieHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieHeaderComponent = /** @class */ (function () {
    function MookieHeaderComponent() {
    }
    MookieHeaderComponent.prototype.ngOnInit = function () {
    };
    MookieHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-header',
            template: __webpack_require__(/*! ./mookie-header.component.html */ "./src/app/components/mookie-header/mookie-header.component.html"),
            styles: [__webpack_require__(/*! ./mookie-header.component.scss */ "./src/app/components/mookie-header/mookie-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieHeaderComponent);
    return MookieHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mookie-home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-home/mookie-home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/mookie-home/mookie-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: MookieHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieHomeComponent", function() { return MookieHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieHomeComponent = /** @class */ (function () {
    function MookieHomeComponent() {
    }
    MookieHomeComponent.prototype.ngOnInit = function () {
    };
    MookieHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-home',
            template: __webpack_require__(/*! ./mookie-home.component.html */ "./src/app/components/mookie-home/mookie-home.component.html"),
            styles: [__webpack_require__(/*! ./mookie-home.component.scss */ "./src/app/components/mookie-home/mookie-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieHomeComponent);
    return MookieHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mookie-pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MookiePagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookiePagenotfoundComponent", function() { return MookiePagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookiePagenotfoundComponent = /** @class */ (function () {
    function MookiePagenotfoundComponent() {
    }
    MookiePagenotfoundComponent.prototype.ngOnInit = function () {
    };
    MookiePagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-pagenotfound',
            template: __webpack_require__(/*! ./mookie-pagenotfound.component.html */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./mookie-pagenotfound.component.scss */ "./src/app/components/mookie-pagenotfound/mookie-pagenotfound.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookiePagenotfoundComponent);
    return MookiePagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container socialMedia\">\n  <div class=\"text-center\">\n    <p>Check out our instagram and Twitter Feeds</p>\n    <a href=\"https://instagram.com/_mookie_dough\" class=\"secretsocial\">\n      <i class=\"fab fa-instagram\"></i>\n    </a>\n    <a href=\"https://twitter.com/_Mookie_Dough\" class=\"secretsocial\">\n      <i class=\"fab fa-twitter\"></i>\n    </a>\n  </div>\n\n  <!-- <insta style=\"width: 100%; border: 0; display:block;\"></insta> -->\n\n  <a class=\"twitter-timeline\" href=\"https://twitter.com/_Mookie_Dough?ref_src=twsrc%5Etfw\">Tweets by _Mookie_Dough</a>\n  <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mookie-social/mookie-social.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/mookie-social/mookie-social.component.ts ***!
  \*********************************************************************/
/*! exports provided: MookieSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MookieSocialComponent", function() { return MookieSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MookieSocialComponent = /** @class */ (function () {
    function MookieSocialComponent() {
    }
    MookieSocialComponent.prototype.ngOnInit = function () {
    };
    MookieSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mookie-social',
            template: __webpack_require__(/*! ./mookie-social.component.html */ "./src/app/components/mookie-social/mookie-social.component.html"),
            styles: [__webpack_require__(/*! ./mookie-social.component.scss */ "./src/app/components/mookie-social/mookie-social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MookieSocialComponent);
    return MookieSocialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dellarontay\Documents\GitHub\MookieDough\alamodeTest\Alamode\public\A6Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map