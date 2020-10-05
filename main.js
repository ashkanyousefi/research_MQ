(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final/final.component */ "./src/app/final/final.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./onboarding/onboarding.component */ "./src/app/onboarding/onboarding.component.ts");












var routes = [
    { path: 'onboarding', component: _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_9__["OnboardingComponent"] },
    { path: 'chat', component: _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_5__["ChatListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"] },
    { path: 'pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_0__["PricingComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"] },
    { path: 'final', component: _final_final_component__WEBPACK_IMPORTED_MODULE_1__["FinalComponent"] },
    { path: '', redirectTo: '/onboarding', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ledger-cover';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-list/chat-list.component */ "./src/app/chat-list/chat-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onboarding/onboarding.component */ "./src/app/onboarding/onboarding.component.ts");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-gauge */ "./node_modules/angular-gauge/__ivy_ngcc__/esm5/angular-gauge.js");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./final/final.component */ "./src/app/final/final.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_gauge__WEBPACK_IMPORTED_MODULE_12__["GaugeModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_7__["ChatListComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
        _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_11__["OnboardingComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__["PricingComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
        _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
        _final_final_component__WEBPACK_IMPORTED_MODULE_17__["FinalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], angular_gauge__WEBPACK_IMPORTED_MODULE_12__["GaugeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_7__["ChatListComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"],
                    _onboarding_onboarding_component__WEBPACK_IMPORTED_MODULE_11__["OnboardingComponent"],
                    _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_13__["PricingComponent"],
                    _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                    _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutComponent"],
                    _final_final_component__WEBPACK_IMPORTED_MODULE_17__["FinalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    angular_gauge__WEBPACK_IMPORTED_MODULE_12__["GaugeModule"].forRoot(),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat-list/chat-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-list/chat-list.component.ts ***!
  \**************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");








var _c0 = ["scrollframe"];
function ChatListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var fill_r11 = ctx.fill;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r11 === 100);
} }
function ChatListComponent_div_12_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} }
function ChatListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatListComponent_div_12_img_1_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chat_r13.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", chat_r13.sender ? "bg-secondary ml-auto mr-4 receiver-message" : "bg-primary mr-auto ml-2 sender-message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r13.message);
} }
function ChatListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Typing... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_14_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Analyzing Your Data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Overall Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatListComponent_div_14_div_8_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-progressbar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.counter < 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.counter * 20);
} }
function ChatListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Website and Web Server Security Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GDPR compliance Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cookies Security Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HTTP Headers Security Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.router.navigate(["/result"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "See The Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatListComponent_div_20_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_div_20_div_1_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var button_r22 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.stateMachine(button_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](button_r22);
} }
function ChatListComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatListComponent_div_20_div_1_div_1_Template, 3, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.currentState().object.options);
} }
function ChatListComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatListComponent_div_20_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.onSubmitText(ctx_r25.textForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "https://");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r19.textForm);
} }
function ChatListComponent_div_20_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatListComponent_div_20_div_3_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onSubmitText(ctx_r27.textForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.textForm);
} }
function ChatListComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatListComponent_div_20_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatListComponent_div_20_div_2_Template, 10, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatListComponent_div_20_div_3_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentState().object.inputType === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentState().object.inputType === "text-website");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.currentState().object.inputType === "text-number");
} }
var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(formBuilder, data, rateConfig, router) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.rateConfig = rateConfig;
        this.router = router;
        this.chats = [
            { sender: 0, message: 'Hello, How can I help you?' }
        ];
        this.state = 'hello';
        this.name = 'John';
        this.processing = false;
        this.counter = 0;
        this.typing = false;
        rateConfig.max = 5;
        rateConfig.readonly = true;
        this.textForm = this.formBuilder.group({
            answer: ''
        });
    }
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentName.subscribe(function (name) { return _this.name = name; });
        this.data.stateMap.subscribe(function (stateMap) { return _this.stateMap = stateMap; });
        console.log(JSON.parse(localStorage.getItem('users')));
    };
    ChatListComponent.prototype.ngAfterViewChecked = function () {
        this.scrollContainer = this.scrollFrame.nativeElement;
    };
    ChatListComponent.prototype.scrollToBottom = function () {
        this.scrollContainer.scroll({
            top: this.scrollContainer.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    };
    ChatListComponent.prototype.currentState = function () {
        var _this = this;
        return {
            object: this.stateMap.items.filter(function (st) { return st.status === _this.state; })[0],
            index: this.stateMap.items.findIndex(function (st) { return st.status === _this.state; }),
        };
    };
    ChatListComponent.prototype.stateMachine = function (answer) {
        this.chats.push({ sender: 1, message: answer });
        switch (this.currentState().object.status) {
            case 'hello':
                if (answer === 'Logout') {
                    localStorage.removeItem('user');
                    this.router.navigate(['/login']);
                }
                else {
                    this.changeState('url', answer);
                }
                break;
            case 'url':
                if (this.websiteValidator(answer)) {
                    this.changeState('sql', answer);
                }
                else {
                    this.changeState('reurl', answer);
                }
                break;
            case 'reurl':
                if (this.websiteValidator(answer)) {
                    this.changeState('sql', answer);
                }
                else {
                    this.changeState('reurl', answer);
                }
                break;
            case 'sql':
                if (answer === 'Yes') {
                    this.changeState('sqlresult', answer);
                }
                else {
                    this.changeState('result', answer);
                }
                break;
            case 'sqlresult':
                this.changeState('result', answer);
                break;
            case 'result':
                this.changeState('finish', answer);
                break;
            default:
        }
    };
    ChatListComponent.prototype.changeState = function (newState, answer) {
        var _this = this;
        if (newState === 'finish') {
            this.showResult();
        }
        else {
            this.typing = true;
            setTimeout(function () {
                _this.stateMap.items[_this.currentState().index].answer = answer;
                _this.state = newState;
                _this.chats.push({ sender: 0, message: _this.currentState().object.message });
                _this.typing = false;
                setTimeout(function () { _this.scrollToBottom(); }, 100);
            }, 1500);
            this.data.changeStateMap(this.stateMap);
        }
        setTimeout(function () { _this.scrollToBottom(); }, 100);
    };
    ChatListComponent.prototype.onSubmitText = function (answer) {
        console.log(answer);
        this.stateMachine(answer.answer);
    };
    ChatListComponent.prototype.showResult = function () {
        var _this = this;
        this.counter = 0;
        this.processing = true;
        var timerId = setInterval(function () {
            _this.counter += 1;
            console.log(_this.counter);
            setTimeout(function () { _this.scrollToBottom(); }, 100);
        }, 2000);
        setTimeout(function () { clearInterval(timerId); }, 12000);
    };
    ChatListComponent.prototype.websiteValidator = function (url) {
        if (url.includes('.')) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatListComponent.ɵfac = function ChatListComponent_Factory(t) { return new (t || ChatListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ChatListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatListComponent, selectors: [["app-chat-list"]], viewQuery: function ChatListComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFrame = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])], decls: 21, vars: 11, consts: [[1, "fixed-top", "container", "pb-5", 2, "height", "80%", "overflow", "scroll", "z-index", "1"], ["scrollframe", ""], [1, "text-center", "p-4"], ["src", "assets/img/profile.jpg", 1, "big-profile-img", "mx-auto", "mb-2"], [3, "rate", "readonly"], [1, "text-black-50"], [1, "mb-5"], ["class", "row mt-n4", 4, "ngFor", "ngForOf"], ["class", "row mt-n4", 4, "ngIf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "fixed-bottom container bg-white", "style", "z-index: 2;", 4, "ngIf"], [1, "star"], [1, "row", "mt-n4"], ["src", "assets/img/profile.jpg", "class", "small-profile-img mt-4 ml-2", 4, "ngIf"], [1, "my-4", "p-3", "text-white", 3, "ngClass"], ["src", "assets/img/profile.jpg", 1, "small-profile-img", "mt-4", "ml-2"], [1, "my-4", "p-3", "text-white", "bg-primary", "mr-auto", "ml-2", "sender-message"], [1, "spinner-grow", "spinner-grow-sm", "text-light", "mr-1"], [1, "text-center", "mt-3"], [1, "text-center"], [1, "row"], [1, "col", "text-left"], ["class", "col text-right", 4, "ngIf"], [1, "mt-2"], ["type", "primary", "height", "10px", 3, "value"], [1, "col", "text-right"], [1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "col"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "fixed-bottom", "container", "bg-white", 2, "z-index", "2"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-custom", "btn-block", "col", "p-3", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon3", 1, "input-group-text"], ["id", "answer", "type", "text", "formControlName", "answer", "placeholder", "Your Answer", "aria-label", "Your Answer", "aria-describedby", "basic-addon2", 1, "form-control"], [1, "input-group-append"], ["type", "button", "type", "submit", 1, "btn", "btn-outline-secondary"], ["id", "answer", "type", "number", "formControlName", "answer", "placeholder", "Your Answer", "aria-label", "Your Answer", "aria-describedby", "basic-addon2", 1, "form-control"]], template: function ChatListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Maya");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-rating", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatListComponent_ng_template_8_Template, 2, 2, "ng-template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Personal Assistant");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatListComponent_div_12_Template, 4, 3, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatListComponent_div_13_Template, 5, 0, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatListComponent_div_14_Template, 11, 2, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatListComponent_div_15_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatListComponent_div_16_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatListComponent_div_17_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatListComponent_div_18_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChatListComponent_div_19_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ChatListComponent_div_20_Template, 4, 3, "div", 11);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", 5)("readonly", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typing);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter > 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.processing && !ctx.typing);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".sender-message[_ngcontent-%COMP%] {\n  border-radius: 0px 16px 16px 16px;\n  max-width: 70%;\n}\n\n.receiver-message[_ngcontent-%COMP%] {\n  border-radius: 16px 0px 16px 16px;\n  max-width: 70%;\n}\n\n.big-profile-img[_ngcontent-%COMP%] {\n  width: 120px;\n  border-radius: 60px;\n}\n\n.small-profile-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n}\n\n.star[_ngcontent-%COMP%] {\n  color: #868485;\n}\n\n.filled[_ngcontent-%COMP%] {\n  color: #7444cc;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  color: #222222;\n  background-color: #eeeeee;\n  border-top: 1px solid #dddddd;\n  border-radius: 0;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbmRlci1tZXNzYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE2cHggMTZweCAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5yZWNlaXZlci1tZXNzYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweCAwcHggMTZweCAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi5iaWctcHJvZmlsZS1pbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG59XG4uc21hbGwtcHJvZmlsZS1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnN0YXIge1xuICBjb2xvcjogIzg2ODQ4NTtcbn1cbi5maWxsZWQge1xuICBjb2xvcjogIzc0NDRjYztcbn1cbi5idG4tY3VzdG9tIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiLnNlbmRlci1tZXNzYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE2cHggMTZweCAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cblxuLnJlY2VpdmVyLW1lc3NhZ2Uge1xuICBib3JkZXItcmFkaXVzOiAxNnB4IDBweCAxNnB4IDE2cHg7XG4gIG1heC13aWR0aDogNzAlO1xufVxuXG4uYmlnLXByb2ZpbGUtaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xufVxuXG4uc21hbGwtcHJvZmlsZS1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uc3RhciB7XG4gIGNvbG9yOiAjODY4NDg1O1xufVxuXG4uZmlsbGVkIHtcbiAgY29sb3I6ICM3NDQ0Y2M7XG59XG5cbi5idG4tY3VzdG9tIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"] });
    return ChatListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-list',
                templateUrl: './chat-list.component.html',
                styleUrls: ['./chat-list.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { scrollFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollframe', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");








function CheckoutComponent_li_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faCheck);
} }
function CheckoutComponent_li_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTimes);
} }
function CheckoutComponent_li_20_strong_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, item_r1.maximumCoverage, "USD", "symbol", "0.0"));
} }
function CheckoutComponent_li_20_strong_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CUSTOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "text-muted": a0 }; };
function CheckoutComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CheckoutComponent_li_20_span_1_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CheckoutComponent_li_20_span_2_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_li_20_strong_3_Template, 3, 6, "strong", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_li_20_strong_4_Template, 2, 0, "strong", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !item_r1.available));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.maximumCoverage && item_r1.maximumCoverage != 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.maximumCoverage == 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
} }
var _c1 = function (a0) { return { "checked": a0 }; };
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(data, router) {
        this.data = data;
        this.router = router;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.option1 = false;
        this.option2 = false;
        this.option3 = false;
        this.option4 = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentPlan.subscribe(function (currentPlan) { return _this.plan = currentPlan; });
    };
    CheckoutComponent.prototype.toggleVisibility = function (e) {
        this.option1 = e.target.checked;
    };
    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 65, vars: 19, consts: [[1, "pricing", "px-4"], [1, "container"], [1, "row"], [1, "col", "my-4"], [1, "font-weight-bolder"], [1, "col-lg-4"], [1, "card", "mb-5", "mb-lg-0"], [1, "card-body"], [1, "card-title", "text-muted", "text-uppercase", "text-center"], [1, "card-price", "text-center"], [1, "period"], [1, "fa-ul"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card", "px-4", "py-3", "mt-2", 3, "ngClass"], [1, "form-check"], ["type", "checkbox", "id", "defaultCheck1", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "defaultCheck1", 1, "form-check-label"], ["type", "checkbox", "id", "defaultCheck2", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "defaultCheck2", 1, "form-check-label"], [1, "row", "mt-4"], ["type", "checkbox", "id", "defaultCheck3", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "defaultCheck3", 1, "form-check-label"], [1, "float-right"], ["type", "checkbox", "id", "defaultCheck4", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "defaultCheck4", 1, "form-check-label"], [1, "btn", "btn-block", "btn-primary", "btn-lg", "text-uppercase", 3, "click"], [3, "ngClass"], ["class", "fa-li text-primary", 4, "ngIf"], ["class", "fa-li", 4, "ngIf"], [4, "ngIf"], [1, "fa-li", "text-primary"], [3, "icon"], [1, "fa-li"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select Add-ons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "/month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckoutComponent_li_20_Template, 6, 8, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Select Add-ons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Free:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_33_listener($event) { return ctx.option1 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 24/7 Surveillance System ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_38_listener($event) { return ctx.option2 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Knowledge Center Subscription ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Premium:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_49_listener($event) { return ctx.option3 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Cloud Backup ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "$15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_Template_input_ngModelChange_56_listener($event) { return ctx.option4 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Data Risk Intelligence ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_Template_button_click_63_listener() { return ctx.router.navigate(["/final"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Checkout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.plan.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.plan.price, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plan.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.option1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.option1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.option2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.option2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.option3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.option3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.option4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.option4);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["section.pricing[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.pricing[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.pricing[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.pricing[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 80%;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  transition: all 0.2s;\n}\n\n.pricing[_ngcontent-%COMP%]   .card.checked[_ngcontent-%COMP%] {\n  border-color: #7444cd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFDQSw4Q0FBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUU7RUFDSSxxQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLnByaWNpbmcge1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIH1cbiAgXG4gIC5wcmljaW5nIC5jYXJkIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAucHJpY2luZyBociB7XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgfVxuICBcbiAgLnByaWNpbmcgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAucHJpY2luZyAuY2FyZC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLnByaWNpbmcgLmNhcmQtcHJpY2UgLnBlcmlvZCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgXG4gIC5wcmljaW5nIHVsIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIFxuICAucHJpY2luZyAudGV4dC1tdXRlZCB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG4gIFxuICAucHJpY2luZyAuYnRuIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIH1cbiAgXG4gIC5wcmljaW5nIC5jYXJkLmNoZWNrZWR7XG4gICAgICBib3JkZXItY29sb3I6ICM3NDQ0Y2Q7XG4gIH0iLCJzZWN0aW9uLnByaWNpbmcge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4ucHJpY2luZyAuY2FyZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucHJpY2luZyBociB7XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG5cbi5wcmljaW5nIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wcmljaW5nIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByaWNpbmcgLnRleHQtbXV0ZWQge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5wcmljaW5nIC5idG4ge1xuICBmb250LXNpemU6IDgwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4ucHJpY2luZyAuY2FyZC5jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzQ0NGNkO1xufSJdfQ== */"] });
    return CheckoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pricing-item.model */ "./src/app/pricing-item.model.ts");
/* harmony import */ var _pricing_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.model */ "./src/app/pricing.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_map_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-map.model */ "./src/app/state-map.model.ts");
/* harmony import */ var _state_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.model */ "./src/app/state.model.ts");







var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('default message');
        this.currentPlanId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.stateSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _state_map_model__WEBPACK_IMPORTED_MODULE_4__["StateMap"]([
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('hello', 'Hello, How can I help you?', 'button', ['Start', 'Logout'], ''),
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('url', 'Enter your website URL', 'text-website', [], ''),
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('reurl', 'Please enter a valid website URL', 'text-website', [], ''),
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('sql', 'Have you had penetration test?', 'button', ['Yes', 'No'], ''),
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('sqlresult', 'What was the penetration test result?', 'text-number', [], ''),
            new _state_model__WEBPACK_IMPORTED_MODULE_5__["State"]('result', 'Ready to see the result?', 'button', ['Yes', 'No, Start Over'], ''),
        ]));
        this.pricingList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([
            new _pricing_model__WEBPACK_IMPORTED_MODULE_1__["Pricing"](1, 'Basic Plan', 55, [
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Data Loss', 25000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Privacy Liability', 0, false),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Network Liability', 0, false),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Cyber Extortion', 0, false),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Notification Cost', 0, false),
            ]),
            new _pricing_model__WEBPACK_IMPORTED_MODULE_1__["Pricing"](2, 'Optimal Plan', 65, [
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Data Loss', 50000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Privacy Liability', 25000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Network Liability', 25000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Cyber Extortion', 0, false),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Notification Cost', 10000, true),
            ]),
            new _pricing_model__WEBPACK_IMPORTED_MODULE_1__["Pricing"](3, 'Premium Plan', 75, [
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Data Loss', 75000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Privacy Liability', 50000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Network Liability', 50000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Cyber Extortion', 25000, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Notification Cost', 10000, true),
            ]),
            new _pricing_model__WEBPACK_IMPORTED_MODULE_1__["Pricing"](4, 'Custom Plan', 99, [
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Data Loss', -1, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Privacy Liability', -1, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Network Liability', -1, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Cyber Extortion', -1, true),
                new _pricing_item_model__WEBPACK_IMPORTED_MODULE_0__["PricingItem"]('Notification Cost', -1, true),
            ]),
        ]);
        this.currentName = this.messageSource.asObservable();
        this.stateMap = this.stateSource.asObservable();
        this.plans = this.pricingList.asObservable();
        this.currentPlan = this.currentPlanId.asObservable();
    }
    DataService.prototype.changeName = function (name) {
        this.messageSource.next(name);
    };
    DataService.prototype.changeStateMap = function (stateMap) {
        this.stateSource.next(stateMap);
    };
    DataService.prototype.choosePlan = function (plan) {
        this.currentPlanId.next(plan);
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/final/final.component.ts":
/*!******************************************!*\
  !*** ./src/app/final/final.component.ts ***!
  \******************************************/
/*! exports provided: FinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalComponent", function() { return FinalComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");





var FinalComponent = /** @class */ (function () {
    function FinalComponent(router) {
        this.router = router;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"];
    }
    FinalComponent.prototype.ngOnInit = function () {
        this.refrence = Math.round(Math.random() * 100000);
    };
    FinalComponent.ɵfac = function FinalComponent_Factory(t) { return new (t || FinalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    FinalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FinalComponent, selectors: [["app-final"]], decls: 19, vars: 2, consts: [[1, "pricing", "px-4"], [1, "container"], [1, "row", "mt-5"], [1, "col-lg-4"], [1, "card", "mb-5", "py-4"], [1, "card-body"], [1, "card-title", "text-success", "text-uppercase", "text-center"], [3, "icon"], [1, "card-price", "text-center", "text-muted", "my-4"], [1, "card-price", "text-center", "mt-4"], [1, "text-center"], [1, "btn", "btn-block", "btn-primary", "btn-lg", "text-uppercase", "mt-4", 3, "click"]], template: function FinalComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Thank You!");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Your request succesfully submitted in our system. We will call you as soon as possible.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Refrence Code:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinalComponent_Template_button_click_17_listener() { return ctx.router.navigate(["/chat"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Back to Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCheck);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.refrence);
        } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmFsL2ZpbmFsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FinalComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FinalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-final',
                templateUrl: './final.component.html',
                styleUrls: ['./final.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, data, router) {
        this.formBuilder = formBuilder;
        this.data = data;
        this.router = router;
        this.errorMessage = '';
        this.loginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentName.subscribe(function (name) { return _this.name = name; });
        this.users = JSON.parse(localStorage.getItem('users'));
    };
    LoginComponent.prototype.onSubmit = function (value) {
        if ((value.email === 'a@b.com' && value.password === '1') || this.check(value)) {
            this.data.changeName(value.email);
            localStorage.setItem('user', JSON.stringify(value));
            if (!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify([{ name: 'A', email: 'a@b.com', password: '1' }]));
            }
            this.router.navigate(['chat']);
        }
        else {
            this.errorMessage = 'Email or password is wrong.';
        }
    };
    LoginComponent.prototype.check = function (value) {
        if (this.users.find(function (x) { return x.email === value.email; })) {
            return this.users.find(function (x) { return x.email === value.email; }).password === value.password;
        }
        else {
            return false;
        }
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 2, consts: [[1, "container", "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", 1, "logo"], [1, "pt-4", "font-weight-bolder"], ["class", "alert alert-danger mt-4", "role", "alert", 4, "ngIf"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], ["type", "button", 1, "btn", "btn-link", "btn-block", "text-center", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "mt-4"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.loginForm.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "We'll never share your email with anyone else.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.router.navigate(["/register"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "New Member? Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICB3aWR0aDogMzAlO1xufSIsIi5sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/onboarding/onboarding.component.ts":
/*!****************************************************!*\
  !*** ./src/app/onboarding/onboarding.component.ts ***!
  \****************************************************/
/*! exports provided: OnboardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingComponent", function() { return OnboardingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var _c0 = function (a0, a1, a2) { return { "slide1": a0, "slide2": a1, "slide3": a2 }; };
var _c1 = function (a0, a1) { return { "active": a0, "deactive": a1 }; };
var OnboardingComponent = /** @class */ (function () {
    function OnboardingComponent(router) {
        this.router = router;
        this.currentSlide = 1;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    }
    // action triggered when user swipes
    OnboardingComponent.prototype.swipe = function (currentIndex, action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        // swipe right, next avatar
        if (action === this.SWIPE_ACTION.RIGHT && this.currentSlide > 1) {
            this.currentSlide -= 1;
        }
        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT && this.currentSlide < 3) {
            this.currentSlide += 1;
        }
        console.log('swipe:' + this.currentSlide);
    };
    OnboardingComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.router.navigate(['/chat']);
        }
    };
    OnboardingComponent.ɵfac = function OnboardingComponent_Factory(t) { return new (t || OnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    OnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnboardingComponent, selectors: [["app-onboarding"]], decls: 24, vars: 17, consts: [[1, "slider-container", 3, "ngClass"], [1, "slide", "p-3", "text-center", 3, "swipeleft", "swiperight"], ["src", "assets/img/logo.png", 1, "logo"], ["src", "assets/img/ob1.png", 1, "slide-image"], [1, "mt-3"], ["src", "assets/img/ob2.png", 1, "slide-image"], [1, "pt-3"], ["src", "assets/img/ob3.png", 1, "slide-image"], [1, "btn", "btn-primary", "btn-block", "mt-3", 3, "click"], [1, "btn", "btn-outline-secondary", "btn-block", "mt-3", 3, "click"], [1, "indicator", "d-flex", "justify-content-center", "p-4"], [1, "dot", "m-1", 3, "ngClass"]], template: function OnboardingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function OnboardingComponent_Template_div_swipeleft_1_listener($event) { return ctx.swipe(1, $event.type); })("swiperight", function OnboardingComponent_Template_div_swiperight_1_listener($event) { return ctx.swipe(3, $event.type); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "End to end cyber insurance and surveillance system");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function OnboardingComponent_Template_div_swipeleft_6_listener($event) { return ctx.swipe(2, $event.type); })("swiperight", function OnboardingComponent_Template_div_swiperight_6_listener($event) { return ctx.swipe(3, $event.type); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "End to end cyber insurance and surveillance system 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("swipeleft", function OnboardingComponent_Template_div_swipeleft_11_listener($event) { return ctx.swipe(3, $event.type); })("swiperight", function OnboardingComponent_Template_div_swiperight_11_listener($event) { return ctx.swipe(3, $event.type); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2 Minutes to get your cyber risk and insurance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingComponent_Template_button_click_16_listener() { return ctx.router.navigate(["/login"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OnboardingComponent_Template_button_click_18_listener() { return ctx.router.navigate(["/register"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.currentSlide == 1, ctx.currentSlide == 2, ctx.currentSlide == 3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.currentSlide == 1, ctx.currentSlide != 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.currentSlide == 2, ctx.currentSlide != 2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, ctx.currentSlide == 3, ctx.currentSlide != 3));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".slider-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  width: 300%;\n  height: 100%;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 33.333%;\n  height: 100%;\n  float: left;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.slider-container[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%]   .slide-image[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 80%;\n}\n.slide1[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  left: 0;\n}\n.slide2[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  left: -100%;\n}\n.slide3[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  left: -200%;\n}\n.indicator[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\n.indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 8px;\n}\n.indicator[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  width: 8px;\n  background-color: gray;\n}\n.indicator[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n  width: 16px;\n  background-color: #2d348d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9vbmJvYXJkaW5nL29uYm9hcmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29uYm9hcmRpbmcvb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRUo7QURESTtFQUNFLFVBQUE7QUNHTjtBRERJO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FDR047QURDQTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtBQ0VGO0FEQUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNHRjtBRERBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0lGO0FESEU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjtBREhFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNLSjtBREhFO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmRpbmcvb25ib2FyZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuc2xpZGUge1xuICAgIHdpZHRoOiAzMy4zMzMlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgIH1cbiAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgfVxufVxuLnNsaWRlMSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBsZWZ0OiAwO1xufVxuLnNsaWRlMiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBsZWZ0OiAtMTAwJTtcbn1cbi5zbGlkZTMge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgbGVmdDogLTIwMCU7XG59XG5cbi5pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5kb3Qge1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAuZGVhY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgfVxuICAuYWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICB3aWR0aDogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDhkO1xuICB9XG59XG4iLCIuc2xpZGVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZSB7XG4gIHdpZHRoOiAzMy4zMzMlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlIC5sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZSAuc2xpZGUtaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnNsaWRlMSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBsZWZ0OiAwO1xufVxuXG4uc2xpZGUyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGxlZnQ6IC0xMDAlO1xufVxuXG4uc2xpZGUzIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGxlZnQ6IC0yMDAlO1xufVxuXG4uaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmluZGljYXRvciAuZG90IHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbmRpY2F0b3IgLmRlYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG4uaW5kaWNhdG9yIC5hY3RpdmUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgd2lkdGg6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDM0OGQ7XG59Il19 */"] });
    return OnboardingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnboardingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-onboarding',
                templateUrl: './onboarding.component.html',
                styleUrls: ['./onboarding.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pricing-item.model.ts":
/*!***************************************!*\
  !*** ./src/app/pricing-item.model.ts ***!
  \***************************************/
/*! exports provided: PricingItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingItem", function() { return PricingItem; });
var PricingItem = /** @class */ (function () {
    function PricingItem(title, maximumCoverage, available) {
        this.title = title;
        this.maximumCoverage = maximumCoverage;
        this.available = available;
    }
    return PricingItem;
}());



/***/ }),

/***/ "./src/app/pricing.model.ts":
/*!**********************************!*\
  !*** ./src/app/pricing.model.ts ***!
  \**********************************/
/*! exports provided: Pricing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pricing", function() { return Pricing; });
var Pricing = /** @class */ (function () {
    function Pricing(id, name, price, items) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.items = items;
    }
    return Pricing;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");







function PricingComponent_div_9_li_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faCheck);
} }
function PricingComponent_div_9_li_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faTimes);
} }
function PricingComponent_div_9_li_11_strong_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 1, item_r3.maximumCoverage, "USD", "symbol", "0.0"));
} }
function PricingComponent_div_9_li_11_strong_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CUSTOM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "text-muted": a0 }; };
function PricingComponent_div_9_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PricingComponent_div_9_li_11_span_1_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PricingComponent_div_9_li_11_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PricingComponent_div_9_li_11_strong_3_Template, 3, 6, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PricingComponent_div_9_li_11_strong_4_Template, 2, 0, "strong", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !item_r3.available));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.maximumCoverage && item_r3.maximumCoverage != 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.maximumCoverage == 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.title, " ");
} }
function PricingComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PricingComponent_div_9_li_11_Template, 6, 8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingComponent_div_9_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var plan_r1 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.choosePlan(plan_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var plan_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](plan_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", plan_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", plan_r1.items);
} }
var PricingComponent = /** @class */ (function () {
    function PricingComponent(router, data) {
        this.router = router;
        this.data = data;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
    }
    PricingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.plans.subscribe(function (plans) { return _this.plans = plans; });
        this.data.currentPlan.subscribe(function (currentPlan) { return _this.currentPlan = currentPlan; });
    };
    PricingComponent.prototype.choosePlan = function (plan) {
        this.data.choosePlan(plan);
        this.router.navigate(['/checkout']);
    };
    PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 10, vars: 1, consts: [[1, "pricing", "px-4"], [1, "container"], [1, "row"], [1, "col", "my-4"], [1, "font-weight-bolder"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "card", "mb-5", "mb-lg-0"], [1, "card-body"], [1, "card-title", "text-muted", "text-uppercase", "text-center"], [1, "card-price", "text-center"], [1, "period"], [1, "fa-ul"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "btn", "btn-block", "btn-primary", "btn-lg", "text-uppercase", 3, "click"], [3, "ngClass"], ["class", "fa-li text-primary", 4, "ngIf"], ["class", "fa-li", 4, "ngIf"], [4, "ngIf"], [1, "fa-li", "text-primary"], [3, "icon"], [1, "fa-li"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose a plan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Flexible plans and pricing allows you to easy run your business");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PricingComponent_div_9_Template, 14, 3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plans);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["section.pricing[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.pricing[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.pricing[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.pricing[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 80%;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUNBLDhDQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ucHJpY2luZyB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgfVxuICBcbiAgLnByaWNpbmcgLmNhcmQge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5wcmljaW5nIGhyIHtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xuICB9XG4gIFxuICAucHJpY2luZyAuY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5wcmljaW5nIC5jYXJkLXByaWNlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAucHJpY2luZyAuY2FyZC1wcmljZSAucGVyaW9kIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBcbiAgLnByaWNpbmcgdWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5wcmljaW5nIC50ZXh0LW11dGVkIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgXG4gIC5wcmljaW5nIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgfVxuICAiLCJzZWN0aW9uLnByaWNpbmcge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4ucHJpY2luZyAuY2FyZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucHJpY2luZyBociB7XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG5cbi5wcmljaW5nIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wcmljaW5nIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByaWNpbmcgLnRleHQtbXV0ZWQge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5wcmljaW5nIC5idG4ge1xuICBmb250LXNpemU6IDgwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufSJdfQ== */"] });
    return PricingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html',
                styleUrls: ['./pricing.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function RegisterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
} }
var _c0 = function (a0) { return { "is-invalid": a0 }; };
function duplicatePassword(input) {
    if (!input.root || !input.root.get('password')) {
        return null;
    }
    var exactMatch = input.root.get('password').value === input.value;
    return exactMatch ? null : { mismatchedPassword: true };
}
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
        ]);
        this.password2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
            duplicatePassword
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
        ]);
        this.registerForm = this.formBuilder.group({
            name: this.name,
            email: this.email,
            password: this.password,
            password2: this.password2,
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.users = JSON.parse(localStorage.getItem('users'));
        if (!JSON.parse(localStorage.getItem('users'))) {
            this.users = [{ name: 'K1', email: 'a@b.com', password: '1' }];
            localStorage.setItem('users', JSON.stringify(this.users));
        }
    };
    RegisterComponent.prototype.onSubmit = function (value) {
        if (this.users.find(function (x) { return x.email === value.email; })) {
            this.errorMessage = 'This email is already registred. Please Login!';
        }
        else {
            this.users.push(value);
            localStorage.setItem('users', JSON.stringify(this.users));
            localStorage.setItem('user', JSON.stringify(value));
            console.log(localStorage.getItem(this.users));
            this.router.navigate(['/chat']);
        }
    };
    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 51, vars: 32, consts: [[1, "container", "p-5"], [1, "text-center"], ["src", "assets/img/logo.png", 1, "logo"], [1, "pt-4", "font-weight-bolder"], ["class", "alert alert-danger mt-4", "role", "alert", 4, "ngIf"], [1, "mt-4", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "aria-describedby", "name-help", "placeholder", "ex: John Doe", "required", "", 1, "form-control", 3, "ngClass", "formControl"], [3, "hidden"], ["id", "name-help", 1, "form-text", "text-danger", 3, "hidden"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "aria-describedby", "email-help", "placeholder", "Enter email", "required", "", 1, "form-control", 3, "ngClass", "formControl"], ["id", "email-help", 1, "form-text", "text-danger", 3, "hidden"], ["id", "email-help", 1, "form-text", "text-muted", 3, "hidden"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngClass", "formControl"], ["id", "password-help", 1, "form-text", "text-danger", 3, "hidden"], ["for", "password2"], ["type", "password", "id", "password2", "formControlName", "password2", "placeholder", "Retype Password", "required", "", 1, "form-control", 3, "ngClass", "formControl"], ["type", "submit", "type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled"], ["type", "button", 1, "btn", "btn-link", "btn-block", "text-center", "mb-5", 3, "click"], ["role", "alert", 1, "alert", "alert-danger", "mt-4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterComponent_div_5_Template, 2, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.registerForm.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email is invalid");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We'll never share your email with anyone else.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Password must be minimum 6 characters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Retype Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password is required");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Password must be minimum 6 characters");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Passwords are not the same");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_49_listener() { return ctx.router.navigate(["/login"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Already have an accont? Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, !ctx.name.valid && !ctx.name.untouched))("formControl", ctx.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.name.valid || ctx.name.untouched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.email.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, !ctx.email.valid && !ctx.email.untouched))("formControl", ctx.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.email.valid || ctx.email.untouched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.email.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.email.hasError("email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.email.untouched && !ctx.email.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, !ctx.password.valid && !ctx.password.untouched))("formControl", ctx.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.password.valid || ctx.password.untouched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.password.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.password.hasError("minlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, !ctx.password2.valid && !ctx.password2.untouched))("formControl", ctx.password2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.password2.valid || ctx.password2.untouched);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.password2.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.password2.hasError("minlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.registerForm.get("password").value === ctx.registerForm.get("password2").value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".logo[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICB3aWR0aDogMzAlO1xufSIsIi5sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */"] });
    return RegisterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var angular_gauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-gauge */ "./node_modules/angular-gauge/__ivy_ngcc__/esm5/angular-gauge.js");




var ResultComponent = /** @class */ (function () {
    function ResultComponent(router) {
        this.router = router;
        this.overalRisk = 0;
        this.risk1 = 0;
        this.risk2 = 0;
        this.risk3 = 0;
        this.risk4 = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.overalRisk = 60;
            _this.risk1 = 60;
            _this.risk2 = 40;
            _this.risk3 = 70;
            _this.risk4 = 50;
        }, 100);
    };
    ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], decls: 28, vars: 30, consts: [[1, "container", "px-4", "pb-5"], [1, "overal", "text-center"], [1, "mx-auto", 3, "max", "dialStartAngle", "dialEndAngle", "value", "animated", "animationDuration"], [1, "mt-n4", "font-weight-bold"], [1, "row", "detail"], [1, "col", "text-center"], [1, "mt-n4"], [1, "col", "text-center", "mt-4"], [1, "row"], [1, "col", "mt-5"], [1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mwl-gauge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your Security Risk Index ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mwl-gauge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Website and Web Server Security Analysis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mwl-gauge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " GDPR compliance Analysis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mwl-gauge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cookies Security Analysis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mwl-gauge", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " HTTP Headers Security Analysis ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_26_listener() { return ctx.router.navigate(["/pricing"]); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 40)("dialEndAngle", 140)("value", ctx.overalRisk)("animated", true)("animationDuration", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 40)("dialEndAngle", 140)("value", ctx.risk1)("animated", true)("animationDuration", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 40)("dialEndAngle", 140)("value", ctx.risk2)("animated", true)("animationDuration", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 40)("dialEndAngle", 140)("value", ctx.risk3)("animated", true)("animationDuration", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("dialStartAngle", 40)("dialEndAngle", 140)("value", ctx.risk4)("animated", true)("animationDuration", 1);
        } }, directives: [angular_gauge__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["section.pricing[_ngcontent-%COMP%] {\n  background: #fc42a5;\n  background: linear-gradient(to right, #7444cc, #fc42a5);\n}\n\n.pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 1rem;\n  transition: all 0.2s;\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\n}\n\n.pricing[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.9rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin: 0;\n}\n\n.pricing[_ngcontent-%COMP%]   .card-price[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.pricing[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.pricing[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.pricing[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 80%;\n  border-radius: 5rem;\n  letter-spacing: 0.1rem;\n  font-weight: bold;\n  padding: 1rem;\n  opacity: 0.7;\n  transition: all 0.2s;\n}\n\n\n\n@media (min-width: 992px) {\n  .pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n    margin-top: -0.25rem;\n    margin-bottom: 0.25rem;\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);\n  }\n\n  .pricing[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .btn[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsbUJBQUE7RUFDQSx1REFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw4Q0FBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0RGOztBRElBLDBCQUFBOztBQUVBO0VBQ0U7SUFDRSxvQkFBQTtJQUNBLHNCQUFBO0lBQ0EsOENBQUE7RUNGRjs7RURJQTtJQUNFLFVBQUE7RUNERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ucHJpY2luZyB7XG4gIC8vIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNjJFNiwgIzMzQUVGRik7XG4gIGJhY2tncm91bmQ6ICNmYzQyYTU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzc0NDRjYywgI2ZjNDJhNSk7XG59XG5cbi5wcmljaW5nIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnByaWNpbmcgaHIge1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG4ucHJpY2luZyAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaWNpbmcgLmNhcmQtcHJpY2Uge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbjogMDtcbn1cblxuLnByaWNpbmcgLmNhcmQtcHJpY2UgLnBlcmlvZCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ucHJpY2luZyB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcmljaW5nIC50ZXh0LW11dGVkIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucHJpY2luZyAuYnRuIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvcGFjaXR5OiAwLjc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4vKiBIb3ZlciBFZmZlY3RzIG9uIENhcmQgKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmljaW5nIC5jYXJkOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgLnByaWNpbmcgLmNhcmQ6aG92ZXIgLmJ0biB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIiwic2VjdGlvbi5wcmljaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZjNDJhNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzQ0NGNjLCAjZmM0MmE1KTtcbn1cblxuLnByaWNpbmcgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ucHJpY2luZyBociB7XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG5cbi5wcmljaW5nIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJpY2luZyAuY2FyZC1wcmljZSAucGVyaW9kIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5wcmljaW5nIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnByaWNpbmcgLnRleHQtbXV0ZWQge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5wcmljaW5nIC5idG4ge1xuICBmb250LXNpemU6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi8qIEhvdmVyIEVmZmVjdHMgb24gQ2FyZCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcmljaW5nIC5jYXJkOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAucHJpY2luZyAuY2FyZDpob3ZlciAuYnRuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59Il19 */"] });
    return ResultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm5/angular-fontawesome.js");





var _c0 = function (a0) { return { "active": a0 }; };
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.menuActive = false;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.openMenu = function () {
        console.log('hi');
        this.menuActive = true;
    };
    SidebarComponent.prototype.closeMenu = function () {
        this.menuActive = false;
    };
    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 30, vars: 7, consts: [["id", "sidebar", 3, "ngClass"], [1, "sidebar-header"], [1, "list-unstyled", "components"], [1, "active"], ["href", "#homeSubmenu", "data-toggle", "collapse", "aria-expanded", "false"], ["href", "#"], [1, "list-unstyled", "CTAs"], ["href", "", 1, "download"], ["href", "", 1, "article"], [1, "overlay", 3, "ngClass", "click"], [1, "topbar", "p-2", "fixed-top"], ["type", "button", "id", "sidebarCollapse", 1, "btn", "btn-light", 3, "click"], [3, "icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ledger Cover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Some Heading");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Setting");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Some Button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Other Button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_26_listener() { return ctx.closeMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_28_listener() { return ctx.openMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.menuActive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.menuActive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["#sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: -250px;\n  height: 100vh;\n  z-index: 999;\n  background: #ffffff;\n  transition: all 0.3s;\n  overflow-y: scroll;\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\n}\n#sidebar.active[_ngcontent-%COMP%] {\n  left: 0;\n}\n.overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 998;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n}\n.overlay.active[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #7444cd;\n  background: #fff;\n  text-decoration: none;\n}\nul.CTAs[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nul.CTAs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\na.download[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #7444cd;\n}\na.article[_ngcontent-%COMP%], a.article[_ngcontent-%COMP%]:hover {\n  background: #7444cd !important;\n  color: #fff !important;\n}\n\n.topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background-color: #fafafa;\n  z-index: 997;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Vc2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9sZWRnZXItY292ZXIvc3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7dURBQUE7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDRko7QURLQTtFQUNJLE9BQUE7QUNGSjtBREtBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQ0ZKO0FESUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNESjtBRElBOztFQUVJLDhCQUFBO0VBQ0Esc0JBQUE7QUNESjtBREtBOzt1REFBQTtBQUdBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jc2lkZWJhciB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTI1MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHotaW5kZXg6IDk5ODtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNzaWRlYmFyIHVsIHAge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICM3NDQ0Y2Q7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsLkNUQXMge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsLkNUQXMgYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5hLmRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjNzQ0NGNkO1xufVxuXG5hLmFydGljbGUsXG5hLmFydGljbGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3NDQ0Y2QgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFRPUCBCQVJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4udG9wYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHotaW5kZXg6IDk5Nztcbn0iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBTSURFQkFSIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI3NpZGViYXIge1xuICB3aWR0aDogMjUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMjUwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4jc2lkZWJhci5hY3RpdmUge1xuICBsZWZ0OiAwO1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHotaW5kZXg6IDk5ODtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jc2lkZWJhciB1bCBwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuI3NpZGViYXIgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM3NDQ0Y2Q7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwuQ1RBcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbnVsLkNUQXMgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmEuZG93bmxvYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzc0NDRjZDtcbn1cblxuYS5hcnRpY2xlLFxuYS5hcnRpY2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc0NDRjZCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBUT1AgQkFSXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRvcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgei1pbmRleDogOTk3O1xufSJdfQ== */"] });
    return SidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/state-map.model.ts":
/*!************************************!*\
  !*** ./src/app/state-map.model.ts ***!
  \************************************/
/*! exports provided: StateMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMap", function() { return StateMap; });
var StateMap = /** @class */ (function () {
    function StateMap(items) {
        this.items = items;
    }
    StateMap.prototype.setItems = function (items) {
        this.items = items;
    };
    return StateMap;
}());



/***/ }),

/***/ "./src/app/state.model.ts":
/*!********************************!*\
  !*** ./src/app/state.model.ts ***!
  \********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State = /** @class */ (function () {
    function State(status, message, inputType, options, answer) {
        this.status = status;
        this.message = message;
        this.inputType = inputType;
        this.options = options;
        this.answer = answer;
    }
    State.prototype.setAnswer = function (answer) {
        this.answer = answer;
    };
    return State;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/User/Documents/Projects/ledger-cover/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map