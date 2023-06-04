"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.isUserAuthenticated = false;
    }
    ngOnInit() {
        this.isUserAuthenticated = this.authService.isAuthenticated();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "isUserAuthenticated"], [1, "left", "right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isUserAuthenticated", ctx.isUserAuthenticated);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".right[_ngcontent-%COMP%]{\r\n\tpadding-right: 10%\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n\tpadding-left: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7QUFDRDtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0e1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwJVxyXG59XHJcbi5sZWZ0e1xyXG5cdHBhZGRpbmctbGVmdDogMTAlO1xyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);















const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);



class HomeComponent {
    constructor(productService) {
        this.productService = productService;
        this.isUserAuthenticated = false;
    }
    ngOnInit() {
        this.productService.getAll(null).subscribe(products => {
            this.products = products.data;
            this.totalItems = products.recordsTotal;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 208, vars: 0, consts: [[1, "container", "pt-3"], [1, "row"], [1, "col-sm-4", "col-md-3"], [1, "well"], [1, "col-sm-12"], [1, "input-group"], ["type", "text", "placeholder", "Search products...", 1, "form-control"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "shop__filter"], [1, "headline"], [1, "radio"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_1", "value", "", "checked", ""], ["for", "shop-filter-price_1"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_2", "value", ""], ["for", "shop-filter-price_2"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_3", "value", ""], ["for", "shop-filter-price_3"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_4", "value", "specify"], ["for", "shop-filter-price_4"], [1, "form-group", "shop-filter__price"], [1, "col-xs-4"], ["for", "shop-filter-price_from", 1, "sr-only"], ["id", "shop-filter-price_from", "type", "number", "min", "0", "placeholder", "From", "disabled", "", 1, "form-control"], ["for", "shop-filter-price_to", 1, "sr-only"], ["id", "shop-filter-price_to", "type", "number", "min", "0", "placeholder", "To", "disabled", "", 1, "form-control"], ["type", "submit", "disabled", "", 1, "btn", "btn-block", "btn-default"], [1, "checkbox"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_1", "checked", ""], ["for", "shop-filter-checkbox_1"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_2"], ["for", "shop-filter-checkbox_2"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_3"], ["for", "shop-filter-checkbox_3"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_4"], ["for", "shop-filter-checkbox_4"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_5"], ["for", "shop-filter-checkbox_5"], ["type", "radio", "name", "shop-filter__radio", "id", "shop-filter-radio_1", "value", "", "checked", ""], ["for", "shop-filter-radio_1"], ["type", "radio", "name", "shop-filter__radio", "id", "shop-filter-radio_2", "value", ""], ["for", "shop-filter-radio_2"], ["type", "radio", "name", "shop-filter__radio", "id", "shop-filter-radio_3", "value", ""], ["for", "shop-filter-radio_3"], ["type", "radio", "name", "shop-filter__radio", "id", "shop-filter-radio_4", "value", ""], ["for", "shop-filter-radio_4"], ["type", "radio", "name", "shop-filter__radio", "id", "shop-filter-radio_5", "value", ""], ["for", "shop-filter-radio_5"], [1, "shop-filter__color"], ["type", "text", "id", "shop-filter-color_1", "value", "", "data-input-color", "black"], ["for", "shop-filter-color_1", 2, "background-color", "black"], ["type", "text", "id", "shop-filter-color_2", "value", "", "data-input-color", "gray"], ["for", "shop-filter-color_2", 2, "background-color", "gray"], ["type", "text", "id", "shop-filter-color_3", "value", "", "data-input-color", "brown"], ["for", "shop-filter-color_3", 2, "background-color", "brown"], ["type", "text", "id", "shop-filter-color_4", "value", "", "data-input-color", "beige"], ["for", "shop-filter-color_4", 2, "background-color", "beige"], ["type", "text", "id", "shop-filter-color_5", "value", "", "data-input-color", "white"], ["for", "shop-filter-color_5", 2, "background-color", "white"], [1, "col-sm-8", "col-md-9"], [1, "shop__sorting"], [1, "active"], ["href", "#"], [1, "col-sm-6", "col-md-4"], [1, "shop__thumb"], [1, "shop-thumb__img"], ["src", "https://www.bootdey.com/image/200x200/87CEFA/000000", "alt", "...", 1, "img-responsive"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_old"], [1, "shop-thumb-price_new"], ["src", "https://www.bootdey.com/image/200x200/20B2AA/000000", "alt", "...", 1, "img-responsive"], ["src", "https://www.bootdey.com/image/200x200/FFB6C1/000000", "alt", "...", 1, "img-responsive"], ["src", "https://www.bootdey.com/image/200x200/FFA07A/000000", "alt", "...", 1, "img-responsive"], ["src", "https://www.bootdey.com/image/200x200/48D1CC/000000", "alt", "...", 1, "img-responsive"], [1, "pagination", "pull-right"], [1, "disabled"], [1, "sr-only"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form")(4, "div", 3)(5, "div", 1)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10)(13, "h3", 11)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Under $25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "$25 to $50");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "$50 to $100");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Other (specify)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21)(33, "div", 1)(34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "label", 23)(36, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "label", 25)(39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22)(41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h3", 11)(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Adidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Calvin Klein");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Columbia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Tommy Hilfiger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Not specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h3", 11)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "100% Cotton");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Bamboo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Leather");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Polyester");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Not specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h3", 11)(90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 50)(94, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 52)(97, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 54)(100, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "input", 56)(103, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "input", 58)(106, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 60)(108, "ul", 61)(109, "li", 62)(110, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li")(113, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li")(116, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Bestselling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li")(119, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Price (low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "li")(122, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Price (high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 1)(125, "div", 64)(126, "div", 65)(127, "a", 63)(128, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 69)(133, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "$80.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "$59.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 64)(138, "div", 65)(139, "a", 63)(140, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " $59.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 64)(147, "div", 65)(148, "a", 63)(149, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, " $59.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 64)(156, "div", 65)(157, "a", 63)(158, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, " $59.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 64)(165, "div", 65)(166, "a", 63)(167, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, " $59.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 64)(174, "div", 65)(175, "a", 63)(176, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "h5", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " Product Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " $59.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 1)(183, "div", 4)(184, "ul", 76)(185, "li", 77)(186, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li", 62)(189, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "li")(194, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li")(197, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "li")(200, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "li")(203, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "li")(206, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["body[_ngcontent-%COMP%]{margin-top:20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.shop-index__section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop-index__section.alt[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  border-width: 1px 0 1px 0;\r\n  border-style: solid;\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n  font-family: 'Questrial', sans-serif;\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n  margin-bottom: 60px;\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop__slideshow[_ngcontent-%COMP%] {\r\n  margin-top: -18px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item__container[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item-container__inner[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.shop-slideshow__heading[_ngcontent-%COMP%] {\r\n  margin: 0 0 20px 0;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 46px;\r\n  line-height: 1.2;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  border-radius: 0;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%]:hover, .shop-slideshow__btn[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  background-color: white;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    padding: 0 30px;\r\n    text-align: center;\r\n  }\r\n  .shop-slideshow__heading[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n  .shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  width: 30px;\r\n  height: 70px;\r\n  opacity: 0;\r\n  transform: translateY(-50%);\r\n  transition: opacity .3s;\r\n}\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%]:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.shop-slideshow__control[data-slide=\"next\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 10px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]:hover   .shop-slideshow__control[_ngcontent-%COMP%] {\r\n  opacity: .3;\r\n}\r\n\r\n\r\n\r\n.shop-index-features__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index-features__icon[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.shop-index-blog__post[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n \r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.shop-index-blog__body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shop-index-blog__content[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  color: #777777;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .shop-index-blog__img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n    left: 50%;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 60px;\r\n    border-right: 0;\r\n  }\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-bottom: 0;\r\n  }\r\n  .shop-index-blog__post[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 42px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 11px 12px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 11px 30px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    text-align: right;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border-radius: 21px 0 0 21px;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    margin-left: -3px;\r\n    border-radius: 0 21px 21px 0;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__thumb[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  text-align: center;\r\n  transition: border-color 0.1s, box-shadow 0.1s;\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]:hover {\r\n  border-color: rgba(0, 0, 0, 0.07);\r\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #333333;\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.shop-thumb__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-thumb__title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-thumb__price[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n.shop-thumb-price_old[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.shop-thumb-price_new[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n.shop-item__info[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  background-color: white;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-item-cart__title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.shop-item-cart__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  color: #F7C41F;\r\n}\r\n\r\n.shop-item__intro[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.shop-item__add[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.shop-item__img[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-item-img__main[_ngcontent-%COMP%] {\r\n  width: calc(100% - 110px);\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  opacity: .5;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover, .shop-item-img__aside[_ngcontent-%COMP%]    > img.active[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-item-img__main[_ngcontent-%COMP%] {\r\n    width: calc(100% - 60px);\r\n  }\r\n  .shop-item-img__aside[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__price[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n.shop-filter__price[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__color[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 2px 2px 0;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.shop__sorting[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: -20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  text-align: right;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 15px 15px;\r\n  margin-bottom: -1px;\r\n  border-bottom: 2px solid transparent;\r\n  color: #757575;\r\n  transition: all .05s linear;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #ed3e49;\r\n  border-bottom-color: #ed3e49;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__sorting[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-bottom: 0;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n\r\n\r\n.checkout__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.checkout-cart__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.checkout-cart-item__img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.checkout-cart-item__content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.checkout-cart-item__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.checkout-cart-item__footer[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.checkout-cart-item__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  border-top: 1px solid #e9e9e9;\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding: 40px 40px;\r\n  border-right: 1px solid #e9e9e9;\r\n  color: #aaa;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n  color: #333333;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-total__block[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 15px 20px;\r\n    border: 0;\r\n    border-top: 1px solid #e9e9e9;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #e9e9e9;\r\n  }\r\n}\r\n\r\n.checkout-total__heading[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.checkout-total__price[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 9px 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.checkout__submit[_ngcontent-%COMP%] {\r\n  padding: 15px 40px;\r\n}\r\n\r\n\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d9534f;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #b52b27;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  color: #d9534f;\r\n}\r\n\r\n\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background-color: #eee;\r\n  text-align: center;\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n}\r\n\r\n\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 10px solid #eee;\r\n  background-color: #333333;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  border-width: 7px;\r\n}\r\n\r\n\r\n\r\n.input_qty[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):last-child {\r\n  float: right;\r\n  border-right: 0;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > output[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: inherit;\r\n  padding: 0;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 20px;\r\n  border: 0;\r\n  line-height: 20px;\r\n  color: #ccc;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 0 !important;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e21hcmdpbi10b3A6MjBweDt9XHJcblxyXG4vKipcclxuICogU2hvcFxyXG4gKi9cclxuLyoqIFNob3A6IEluZGV4ICoqL1xyXG4vKiBHZW5lcmFsICovXHJcbi5zaG9wLWluZGV4X19zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4uc2hvcC1pbmRleF9fc2VjdGlvbi5hbHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAxcHggMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uc2hvcC1pbmRleF9faGVhZGluZyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG4uc2hvcC1pbmRleF9faGVhZGluZyArIHAge1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLyogU2hvcDogU2xpZGVzaG93ICovXHJcbi5zaG9wX19zbGlkZXNob3cge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLnNob3BfX3NsaWRlc2hvdyAuY2Fyb3VzZWwtaW5uZXIgLml0ZW1fX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtLWNvbnRhaW5lcl9faW5uZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc2hvcF9fc2xpZGVzaG93IC5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLnNob3Atc2xpZGVzaG93X19oZWFkaW5nIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDZweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX3N1YmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2J0biB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2J0bjpob3ZlcixcclxuLnNob3Atc2xpZGVzaG93X19idG46Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaG9wLXNsaWRlc2hvd19faGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5zaG9wLXNsaWRlc2hvd19fc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbi8qIENhcm91c2VsIGNvbnRyb2xzICovXHJcbi5zaG9wLXNsaWRlc2hvd19fY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19jb250cm9sOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19jb250cm9sW2RhdGEtc2xpZGU9XCJuZXh0XCJdIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3c6aG92ZXIgLnNob3Atc2xpZGVzaG93X19jb250cm9sIHtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4vKiBGZWF0dXJlcyAqL1xyXG4uc2hvcC1pbmRleC1mZWF0dXJlc19faXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2ljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2hlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2hlYWRpbmcgKyBwIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4vKiBCbG9nIHBvc3QgKi9cclxuLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19wb3N0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faW1nOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gXHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faW1nID4gaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19fYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faGVhZGluZzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMTVweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19jb250ZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zaG9wLWluZGV4LWJsb2dfX2ltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX2hlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nOmFmdGVyIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX3Bvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIE5ld3NsZXR0ZXIgKi9cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaG9wLWluZGV4X19uZXdzbGV0dGVyIC5zaG9wLWluZGV4X19oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2hvcC1pbmRleF9fbmV3c2xldHRlciBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIGhlaWdodDogNDJweDtcclxuICBwYWRkaW5nOiAxMXB4IDEycHg7XHJcbn1cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHBhZGRpbmc6IDExcHggMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2hvcC1pbmRleF9fbmV3c2xldHRlciAuc2hvcC1pbmRleF9faGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHggMCAwIDIxcHg7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4X19uZXdzbGV0dGVyIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMXB4IDIxcHggMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG4vKiogU2hvcDogVGh1bWJuYWlscyAqKi9cclxuLnNob3BfX3RodW1iIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcywgLXdlYmtpdC1ib3gtc2hhZG93IDAuMXM7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcywgYm94LXNoYWRvdyAwLjFzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMsIGJveC1zaGFkb3cgMC4xcztcclxufVxyXG4uc2hvcF9fdGh1bWI6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxufVxyXG4uc2hvcF9fdGh1bWIgPiBhIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uc2hvcF9fdGh1bWIgPiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNob3AtdGh1bWJfX2ltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2hvcC10aHVtYl9fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNob3AtdGh1bWJfX3ByaWNlIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4uc2hvcC10aHVtYi1wcmljZV9vbGQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5zaG9wLXRodW1iLXByaWNlX25ldyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4vKiogU2hvcDogSXRlbSAqKi9cclxuLnNob3AtaXRlbV9faW5mbyB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNob3AtaXRlbS1jYXJ0X190aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcbi5zaG9wLWl0ZW0tY2FydF9fcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRjdDNDFGO1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ludHJvIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2FkZCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fbWFpbiB7XHJcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTEwcHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWc6aG92ZXIsXHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSA+IGltZy5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wLWl0ZW0taW1nX19tYWluIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuc2hvcC1pdGVtLWltZ19fYXNpZGUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBGaWx0ZXIgKiovXHJcbi5zaG9wX19maWx0ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLyogU2hvcCBmaWx0ZXI6IFByaWNpbmcgKi9cclxuLnNob3AtZmlsdGVyX19wcmljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uc2hvcC1maWx0ZXJfX3ByaWNlIFtjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi8qIFNob3AgZmlsdGVyOiBDb2xvcnMgKi9cclxuLnNob3AtZmlsdGVyX19jb2xvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAycHggMnB4IDA7XHJcbn1cclxuLnNob3AtZmlsdGVyX19jb2xvciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvcC1maWx0ZXJfX2NvbG9yIGxhYmVsIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyoqIFNob3A6IFNvcnRpbmcgKiovXHJcbi5zaG9wX19zb3J0aW5nIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSA+IGE6aG92ZXIsXHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICBjb2xvcjogI2VkM2U0OTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWQzZTQ5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wX19zb3J0aW5nIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBDaGVja291dCAqKi9cclxuLmNoZWNrb3V0X19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydF9faXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19pbWcge1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19oZWFkaW5nIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW1fX2Zvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNoZWNrb3V0LXRvdGFsX19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2hlY2tvdXQtdG90YWxfX2Jsb2NrIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIH1cclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2hlYWRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaGVja291dC10b3RhbF9fcHJpY2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDlweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uY2hlY2tvdXRfX3N1Ym1pdCB7XHJcbiAgcGFkZGluZzogMTVweCA0MHB4O1xyXG59XHJcbi8qKiBTaG9wOiBPcmRlciBDb25maXJtYXRpb24gKi9cclxuLnNob3AtY29uZl9faGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1jb25mX19oZWFkaW5nICsgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRm9ybXNcclxuICovXHJcbi5mb3JtLWNvbnRyb2wsXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKiBIYXMgZXJyb3IgKi9cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNiNTJiMjc7XHJcbn1cclxuLmhhcy1lcnJvciAuaGVscC1ibG9jayB7XHJcbiAgY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuLyogQ2hlY2tib3hlcyAqL1xyXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG59XHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbn1cclxuLyogUmFkaW9zICovXHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJhZGlvIGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnJhZGlvIGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDEwcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbn1cclxuLyogUXVhbnRpdHkgKi9cclxuLmlucHV0X3F0eSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5wdXRfcXR5IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6bGFzdC1jaGlsZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuLmlucHV0X3F0eSBsYWJlbCA+IG91dHB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmlucHV0X3F0eV9zbSBsYWJlbCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCkge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5pbnB1dF9xdHlfc20gbGFiZWwgb3V0cHV0IHtcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
    }
    loginUser() {
        this.authService.login(this.username, this.password).subscribe(res => {
            window.location.replace('/');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 2, consts: [[1, "container"], [1, "bs-component"], [1, "form-group", "w-25"], [1, "form-label", "mt-4"], [1, "form-floating", "mb-3"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-default", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function NavbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function NavbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 15)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 18)(5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
class NavbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.username = "username";
    }
    ngOnInit() {
        console.log(this.isUserAuthenticated);
    }
    logout() {
        this.authService.logout();
        window.location.replace('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated" }, decls: 17, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "flex-grow-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/favourite", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-heart"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-cart-shopping"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-s15", "fa-sign-in"], [1, "nav-link", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "avatar", "dropdown-toggle"], [1, "fa", "fa-user"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["aria-hidden", "true", 1, "fa", "fa-cog"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ShoppingDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_div_10_Template, 15, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".avatar[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    color: gray;\r\n    padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class RegisterComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".modal[_ngcontent-%COMP%] {\r\n    \r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    \r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .close-button[_ngcontent-%COMP%] {\r\n    \r\n    margin-top: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gICAgLyogU3R5bGVzIGZvciB0aGUgb3ZlcmxheSBvciBiYWNrZHJvcCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgLyogU3R5bGVzIGZvciB0aGUgbW9kYWwgY29udGVudCAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2UtYnV0dG9uIHtcclxuICAgIC8qIFN0eWxlcyBmb3IgdGhlIGNsb3NlIGJ1dHRvbiAqL1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class AuthService {
    constructor(http) {
        this.http = http;
        //https://localhost:44305/
        this.baseUrl = 'api/Identity';
    }
    login(username, password) {
        return this.http.post(this.baseUrl + "/Login", { Username: username, Password: password }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(response => {
            if (response.success && response.token) {
                localStorage.setItem('token', response.token);
            }
            return response.success;
        }));
    }
    logout() {
        localStorage.removeItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isAuthenticated() {
        const token = this.getToken();
        return token !== null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class ProductService {
    constructor(http) {
        this.http = http;
        this.baseApi = "api/";
    }
    getAll(filter) {
        return this.http.post(this.baseApi + 'products/gettable', filter);
    }
    get(Id) {
        return this.http.post(this.baseApi + 'products/get/' + Id, JSON);
    }
    delete(Id) {
        return this.http.post(this.baseApi + 'products/delete/' + Id, JSON);
    }
    createOrUpdate(model) {
        if (model.Id) {
            return this.http.post(this.baseApi + "products/edit", model);
        }
        else {
            return this.http.post(this.baseApi + "products/create", model);
        }
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6804:
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 23, vars: 0, consts: [[1, "dropdown", "border-1"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu"], ["href", "#"], [1, "divider"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "li", 0)(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3)(6, "li")(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "One more separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map