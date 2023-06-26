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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite/favourite.component */ 6499);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 3009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent },
    { path: 'favourite', component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__.FavouriteComponent },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent },
    { path: 'product-detail/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__.ProductDetailComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);





class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.isUserAuthenticated = false;
    }
    ngOnInit() {
        this.refreshState();
    }
    refreshState() {
        this.isUserAuthenticated = this.authService.isAuthenticated();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "isUserAuthenticated", "refreshState"], [1, "grayBackground"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("refreshState", function AppComponent_Template_app_navbar_refreshState_0_listener() { return ctx.refreshState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isUserAuthenticated", ctx.isUserAuthenticated);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".right[_ngcontent-%COMP%]{\r\n\tpadding-right: 10%\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n\tpadding-left: 10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDO0FBQ0Q7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmlnaHR7XHJcblx0cGFkZGluZy1yaWdodDogMTAlXHJcbn1cclxuLmxlZnR7XHJcblx0cGFkZGluZy1sZWZ0OiAxMCU7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favourite/favourite.component */ 6499);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 3009);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);




















const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService,
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JWT_OPTIONS, useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JWT_OPTIONS },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__.JwtHelperService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            //RouterModule.forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_13__.RegisterComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__.CartComponent,
        _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_10__.FavouriteComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__.SettingsComponent,
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_12__.ProductDetailComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 2, vars: 0, consts: [[1, "container", "pt-3"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cart works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6499:
/*!**************************************************!*\
  !*** ./src/app/favourite/favourite.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouriteComponent": () => (/* binding */ FavouriteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function FavouriteComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "a", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18)(8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20)(11, "span", 21)(12, "button", 22)(13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 25)(17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "product-detail/", product_r3.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r3.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", product_r3.Price, "");
} }
function FavouriteComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavouriteComponent_div_10_div_1_Template, 19, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.responseModel.Items);
} }
function FavouriteComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " List empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FavouriteComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result) => {
            this.responseModel = result;
            console.log(result);
        });
    }
}
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
FavouriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FavouriteComponent, selectors: [["app-favourite"]], decls: 12, vars: 2, consts: [[1, "container", "pt-3"], [1, "d-flex", "justify-content-end"], [1, "mr-auto", "p-2"], [1, "solid_color"], [1, "pull-right"], [1, "solid_hover_color", "justify-content-center", "align-self-center"], [1, "solid_hover_color", "no_border_btn"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["class", "row py-3", 4, "ngIf"], [4, "ngIf"], [1, "row", "py-3"], ["class", "col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "shop__thumb"], [3, "href"], [1, "shop-thumb__img"], ["src", "https://hhstsyoejx.gjirafa.net/gjirafa50core/images/3605/3605.jpeg?q=80", "alt", "...", 1, "img-responsive", "m-auto"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"], [1, "row"], [1, "col-lg-8", "col-md-6", "col-sm-6", "p-2"], [1, "btn", "h-100", "w-100", "responsive-button", "solid_button"], [1, "d-none", "d-lg-block"], [1, "d-block", "d-lg-none", "fa-solid", "fa-cart-shopping"], [1, "col-lg-4", "col-md-6", "col-sm-6", "p-2"], [1, "btn", "w-100", "h-100", "solid_favourite"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Favourite product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "span", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Delete all favourite list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FavouriteComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FavouriteComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.responseModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.responseModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvdXJpdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function FooterComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ShoppingDev.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx_r0.currentYear, " Copyright: ");
} }
class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 1, consts: [[1, "bg-light", "text-muted", "solid-footer"], [1, "d-flex", "justify-content-lg-around", "p-4", "border-bottom"], [1, "me-5", "d-none", "d-lg-block"], [1, "row", "text-center"], ["href", "#", 1, "col"], [1, "fab", "text-dark", "fa-facebook-f"], [1, "fab", "text-dark", "fa-twitter"], [1, "fab", "text-dark", "fa-instagram"], [1, "fab", "text-dark", "fa-linkedin"], [1, "fab", "text-dark", "fa-github"], [1, "container", "text-md-start", "mt-5"], [1, "row", "mt-3"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], [1, "text-uppercase", "fw-bold", "mb-4"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "#!", 1, "text-reset"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], [1, "left-solid-text", "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], [1, "fas", "fa-home", "me-3"], [1, "fas", "fa-envelope", "me-3"], [1, "fas", "fa-phone", "me-3"], [1, "fas", "fa-print", "me-3"], ["class", "bg-white text-center p-4", "style", "background-color: rgba(0, 0, 0, 0.05);", 4, "ngIf"], [1, "bg-white", "text-center", "p-4", 2, "background-color", "rgba(0, 0, 0, 0.05)"], ["href", "https://shopping-dev.com/", 1, "text-reset", "fw-bold"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "section", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get connected with us on social networks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section")(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shopping Dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14)(25, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p")(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p")(31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p")(34, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Favourite Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p")(37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16)(40, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Customer care");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p")(43, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "For us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p")(46, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p")(49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Technical support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p")(52, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17)(55, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Skopje, Pelisterska 5, MKD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " admin@example.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " +389 555 555");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " +389 555 555");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, FooterComponent_div_69_Template, 4, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentYear);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function HomeComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 21)(3, "div", 29)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29)(7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "-5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 31)(10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 35)(15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 21)(18, "span", 37)(19, "button", 38)(20, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 41)(24, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "product-detail/", product_r1.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", product_r1.Price.toFixed(2), "");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(router, authService, productService) {
        this.router = router;
        this.authService = authService;
        this.productService = productService;
        this.isUserAuthenticated = false;
        this.search = 'search';
        this.activeSorting = 'Popular';
        this.productFilter = {
            SearchString: "",
            SortName: "Popular",
            PageNeeded: "",
            Price: "",
        };
        this.queryParam = "";
    }
    ngOnInit() {
        this.productService.getAll(this.productFilter).subscribe((result) => {
            this.products = result.Items;
            this.totalItems = result.TotalItems;
        });
        // this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
        //   this.favouriteProduct = result.Items;
        // })
    }
    removeDuplicateParams(paramsString) {
        const paramsArray = paramsString.split('&');
        const uniqueParamsArray = [...new Set(paramsArray)];
        return uniqueParamsArray.join('&');
    }
    changeSorting(sorting) {
        this.activeSorting = sorting;
        this.productFilter = {
            SearchString: "",
            SortName: sorting,
            PageNeeded: "",
            Price: "",
        };
        this.productService.getAll(this.productFilter).subscribe(products => {
            this.products = products.Items;
            this.totalItems = products.recordsTotal;
        });
    }
    changeRoute(url) {
        this.router.navigate(['/search?q=', url]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 47, vars: 16, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://solutionhubtech.com/wp-content/uploads/2021/01/Lenovo-laptop-repair-Delhi-2.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://plecom.imgix.net/bo-761993-1500x500.jpg?auto=format", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "https://cdn.shopify.com/s/files/1/0355/8296/7943/files/Untitled-1_be05ce94-d08f-4120-896c-6bd713c4b039.jpg?v=1648257013", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "https://techlingo.co/wp-content/uploads/2022/09/Logitech-G502X-Cover-Image-1500x500.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "https://cdn.shopify.com/s/files/1/0355/8296/7943/files/blackbluee.jpg?v=1638686898", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container", "pt-3"], [1, "row"], [1, ""], [1, "shop__sorting"], [3, "ngClass", "click"], ["href", "", 3, "click"], ["class", "py-lg-2 py-md-2 py-sm-2 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "py-lg-2", "py-md-2", "py-sm-2", "col-sm-6", "col-md-4", "col-lg-3"], [1, "shop__thumb"], [1, "col-6"], [1, "right-solid-text"], [3, "href"], [1, "shop-thumb__img"], ["src", "https://hhstsyoejx.gjirafa.net/gjirafa50core/images/3605/3605.jpeg?q=80", "alt", "...", 1, "img-responsive", "m-auto"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"], [1, "col-lg-8", "col-md-6", "col-sm-6", "p-2"], [1, "btn", "h-100", "w-100", "responsive-button", "solid_button"], [1, "d-none", "d-lg-block"], [1, "d-block", "d-lg-none", "fa-solid", "fa-cart-shopping"], [1, "col-lg-4", "col-md-6", "col-sm-6", "p-2"], [1, "btn", "h-100", "w-100", "solid_favourite"], [1, "fa-regular", "fa-heart"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "li", 2)(3, "li", 3)(4, "li", 4)(5, "li", 5)(6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "div", 22)(29, "ul", 23)(30, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_30_listener() { return ctx.changeSorting("Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_31_listener() { return ctx.changeRoute("SortName=Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_33_listener() { return ctx.changeSorting("Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_34_listener() { return ctx.changeRoute("SortName=Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_36_listener() { return ctx.changeSorting("Bestselling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_37_listener() { return ctx.changeRoute("SortName=BestSelling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Best Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_39_listener() { return ctx.changeSorting("PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_40_listener() { return ctx.changeRoute("SortName=PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Price (low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_42_listener() { return ctx.changeSorting("PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_43_listener() { return ctx.changeRoute("SortName=PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Price (high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, HomeComponent_div_46_Template, 26, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.activeSorting === "Popular"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.activeSorting === "Newest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.activeSorting === "Bestselling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.activeSorting === "PriceLow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.activeSorting === "PriceHigh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["body[_ngcontent-%COMP%]{margin-top:20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.shop-index__section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop-index__section.alt[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  border-width: 1px 0 1px 0;\r\n  border-style: solid;\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n  font-family: 'Questrial', sans-serif;\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n  margin-bottom: 60px;\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop__slideshow[_ngcontent-%COMP%] {\r\n  margin-top: -18px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item__container[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item-container__inner[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.shop-slideshow__heading[_ngcontent-%COMP%] {\r\n  margin: 0 0 20px 0;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 46px;\r\n  line-height: 1.2;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  border-radius: 0;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%]:hover, .shop-slideshow__btn[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  background-color: white;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    padding: 0 30px;\r\n    text-align: center;\r\n  }\r\n  .shop-slideshow__heading[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n  .shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  width: 30px;\r\n  height: 70px;\r\n  opacity: 0;\r\n  transform: translateY(-50%);\r\n  transition: opacity .3s;\r\n}\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%]:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.shop-slideshow__control[data-slide=\"next\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 10px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]:hover   .shop-slideshow__control[_ngcontent-%COMP%] {\r\n  opacity: .3;\r\n}\r\n\r\n\r\n\r\n.shop-index-features__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index-features__icon[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.shop-index-blog__post[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n \r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.shop-index-blog__body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shop-index-blog__content[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  color: #777777;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .shop-index-blog__img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n    left: 50%;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 60px;\r\n    border-right: 0;\r\n  }\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-bottom: 0;\r\n  }\r\n  .shop-index-blog__post[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 42px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 11px 12px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 11px 30px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    text-align: right;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border-radius: 21px 0 0 21px;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    margin-left: -3px;\r\n    border-radius: 0 21px 21px 0;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-item__info[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  background-color: white;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-item-cart__title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.shop-item-cart__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  color: #F7C41F;\r\n}\r\n\r\n.shop-item__intro[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.shop-item__add[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.shop-item__img[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-item-img__main[_ngcontent-%COMP%] {\r\n  width: calc(100% - 110px);\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  opacity: .5;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover, .shop-item-img__aside[_ngcontent-%COMP%]    > img.active[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-item-img__main[_ngcontent-%COMP%] {\r\n    width: calc(100% - 60px);\r\n  }\r\n  .shop-item-img__aside[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__price[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n.shop-filter__price[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__color[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 2px 2px 0;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.shop__sorting[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: -20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  text-align: right;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 15px 15px;\r\n  margin-bottom: -1px;\r\n  border-bottom: 2px solid transparent;\r\n  color: #757575;\r\n  transition: all .05s linear;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #ed3e49;\r\n  border-bottom-color: #ed3e49;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__sorting[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-bottom: 0;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n\r\n\r\n.checkout__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.checkout-cart__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.checkout-cart-item__img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.checkout-cart-item__content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.checkout-cart-item__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.checkout-cart-item__footer[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.checkout-cart-item__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  border-top: 1px solid #e9e9e9;\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding: 40px 40px;\r\n  border-right: 1px solid #e9e9e9;\r\n  color: #aaa;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n  color: #333333;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-total__block[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 15px 20px;\r\n    border: 0;\r\n    border-top: 1px solid #e9e9e9;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #e9e9e9;\r\n  }\r\n}\r\n\r\n.checkout-total__heading[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.checkout-total__price[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 9px 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.checkout__submit[_ngcontent-%COMP%] {\r\n  padding: 15px 40px;\r\n}\r\n\r\n\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d9534f;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #b52b27;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  color: #d9534f;\r\n}\r\n\r\n\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background-color: #eee;\r\n  text-align: center;\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n}\r\n\r\n\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 10px solid #eee;\r\n  background-color: #333333;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  border-width: 7px;\r\n}\r\n\r\n\r\n\r\n.input_qty[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):last-child {\r\n  float: right;\r\n  border-right: 0;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > output[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: inherit;\r\n  padding: 0;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 20px;\r\n  border: 0;\r\n  line-height: 20px;\r\n  color: #ccc;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 0 !important;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGVBQWUsQ0FBQzs7QUFFckI7O0VBRUU7O0FBQ0Ysa0JBQWtCOztBQUNsQixZQUFZOztBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0Esb0JBQW9COztBQUNwQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUlGLDJCQUEyQjtFQUczQix1QkFBdUI7QUFDakM7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBLGFBQWE7O0FBQ2I7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhOztFQUViLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsY0FBYzs7QUFDZDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsMkNBQTJDO0FBQzdDOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTzs7QUFFVDs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFDQSxlQUFlOztBQUNmO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjtBQUNGOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMsVUFBVTtBQUNaOztBQUNBO0VBQ0U7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBLG1CQUFtQjs7QUFDbkI7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0EseUJBQXlCOztBQUN6QjtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSx3QkFBd0I7O0FBQ3hCO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsY0FBYztFQUdOLDJCQUEyQjtBQUNyQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUNBLHFCQUFxQjs7QUFDckI7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQSw4QkFBOEI7O0FBQzlCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUdBOztFQUVFOztBQUNGOztFQUdVLGdCQUFnQjtFQUN4QixhQUFhO0FBQ2Y7O0FBQ0EsY0FBYzs7QUFDZDtFQUNFLHFCQUFxQjtFQUViLDJCQUEyQjtBQUNyQzs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsZUFBZTs7QUFDZjtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0EsV0FBVzs7QUFDWDtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQSxhQUFhOztBQUNiO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YseUJBQXlCO09BR3BCLGlCQUFpQjtBQUN4Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUNBQXlDO0FBQzNDOztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXttYXJnaW4tdG9wOjIwcHg7fVxyXG5cclxuLyoqXHJcbiAqIFNob3BcclxuICovXHJcbi8qKiBTaG9wOiBJbmRleCAqKi9cclxuLyogR2VuZXJhbCAqL1xyXG4uc2hvcC1pbmRleF9fc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLnNob3AtaW5kZXhfX3NlY3Rpb24uYWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNob3AtaW5kZXhfX2hlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnNob3AtaW5kZXhfX2hlYWRpbmcgKyBwIHtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi8qIFNob3A6IFNsaWRlc2hvdyAqL1xyXG4uc2hvcF9fc2xpZGVzaG93IHtcclxuICBtYXJnaW4tdG9wOiAtMThweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtX19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc2hvcF9fc2xpZGVzaG93IC5jYXJvdXNlbC1pbm5lciAuaXRlbS1jb250YWluZXJfX2lubmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNob3BfX3NsaWRlc2hvdyAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5zaG9wLXNsaWRlc2hvd19faGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQ2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19zdWJoZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19idG4ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19idG46aG92ZXIsXHJcbi5zaG9wLXNsaWRlc2hvd19fYnRuOmZvY3VzIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2hvcF9fc2xpZGVzaG93IC5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2hvcC1zbGlkZXNob3dfX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAuc2hvcC1zbGlkZXNob3dfX3N1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4vKiBDYXJvdXNlbCBjb250cm9scyAqL1xyXG4uc2hvcC1zbGlkZXNob3dfX2NvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG59XHJcbi5zaG9wLXNsaWRlc2hvd19fY29udHJvbDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaG9wLXNsaWRlc2hvd19fY29udHJvbFtkYXRhLXNsaWRlPVwibmV4dFwiXSB7XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogMTBweDtcclxufVxyXG4uc2hvcF9fc2xpZGVzaG93OmhvdmVyIC5zaG9wLXNsaWRlc2hvd19fY29udHJvbCB7XHJcbiAgb3BhY2l0eTogLjM7XHJcbn1cclxuLyogRmVhdHVyZXMgKi9cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2l0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaG9wLWluZGV4LWZlYXR1cmVzX19pY29uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5zaG9wLWluZGV4LWZlYXR1cmVzX19oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zaG9wLWluZGV4LWZlYXR1cmVzX19oZWFkaW5nICsgcCB7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLyogQmxvZyBwb3N0ICovXHJcbi5zaG9wLWluZGV4LWJsb2dfX3Bvc3RzID4gW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19fcG9zdCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2ltZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuIFxyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2ltZyA+IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2JvZHkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faGVhZGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2hlYWRpbmc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTE1cHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19fY29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuc2hvcC1pbmRleC1ibG9nX19pbWcge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19faGVhZGluZzphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wLWluZGV4LWJsb2dfX3Bvc3RzID4gW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICB9XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19wb3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4vKiBOZXdzbGV0dGVyICovXHJcbi5zaG9wLWluZGV4X19uZXdzbGV0dGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2hvcC1pbmRleF9fbmV3c2xldHRlciAuc2hvcC1pbmRleF9faGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogNDJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgcGFkZGluZzogMTFweCAxMnB4O1xyXG59XHJcbi5zaG9wLWluZGV4X19uZXdzbGV0dGVyIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBwYWRkaW5nOiAxMXB4IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgLnNob3AtaW5kZXhfX2hlYWRpbmcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4X19uZXdzbGV0dGVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4IDAgMCAyMXB4O1xyXG4gIH1cclxuICAuc2hvcC1pbmRleF9fbmV3c2xldHRlciBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjFweCAyMXB4IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi8qKiBTaG9wOiBJdGVtICoqL1xyXG4uc2hvcC1pdGVtX19pbmZvIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uc2hvcC1pdGVtLWNhcnRfX3RpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuLnNob3AtaXRlbS1jYXJ0X19wcmljZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNGN0M0MUY7XHJcbn1cclxuLnNob3AtaXRlbV9faW50cm8ge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNob3AtaXRlbV9fYWRkIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbn1cclxuLnNob3AtaXRlbV9faW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19tYWluIHtcclxuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNob3AtaXRlbS1pbWdfX2FzaWRlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSA+IGltZyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG9wYWNpdHk6IC41O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSA+IGltZzpob3ZlcixcclxuLnNob3AtaXRlbS1pbWdfX2FzaWRlID4gaW1nLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNob3AtaXRlbS1pbWdfX21haW4ge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgfVxyXG4gIC5zaG9wLWl0ZW0taW1nX19hc2lkZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcbn1cclxuLyoqIFNob3A6IEZpbHRlciAqKi9cclxuLnNob3BfX2ZpbHRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4vKiBTaG9wIGZpbHRlcjogUHJpY2luZyAqL1xyXG4uc2hvcC1maWx0ZXJfX3ByaWNlIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbi5zaG9wLWZpbHRlcl9fcHJpY2UgW2NsYXNzKj0nY29sLSddIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLyogU2hvcCBmaWx0ZXI6IENvbG9ycyAqL1xyXG4uc2hvcC1maWx0ZXJfX2NvbG9yIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiAwIDJweCAycHggMDtcclxufVxyXG4uc2hvcC1maWx0ZXJfX2NvbG9yIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zaG9wLWZpbHRlcl9fY29sb3IgbGFiZWwge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiogU2hvcDogU29ydGluZyAqKi9cclxuLnNob3BfX3NvcnRpbmcge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uc2hvcF9fc29ydGluZyA+IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSA+IGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzc1NzU3NTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMDVzIGxpbmVhcjtcclxuICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMDVzIGxpbmVhcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMDVzIGxpbmVhcjtcclxufVxyXG4uc2hvcF9fc29ydGluZyA+IGxpID4gYTpob3ZlcixcclxuLnNob3BfX3NvcnRpbmcgPiBsaSA+IGE6Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc2hvcF9fc29ydGluZyA+IGxpLmFjdGl2ZSA+IGEge1xyXG4gIGNvbG9yOiAjZWQzZTQ5O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlZDNlNDk7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNob3BfX3NvcnRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zaG9wX19zb3J0aW5nID4gbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zaG9wX19zb3J0aW5nID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpLmFjdGl2ZSA+IGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuLyoqIFNob3A6IENoZWNrb3V0ICoqL1xyXG4uY2hlY2tvdXRfX2Jsb2NrIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5jaGVja291dC1jYXJ0X19pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW1fX2ltZyB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19jb250ZW50IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW1fX2hlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fZm9vdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19wcmljZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG59XHJcbi5jaGVja291dC10b3RhbF9fYmxvY2sgPiAucm93ID4gW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gIHBhZGRpbmc6IDQwcHggNDBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcbi5jaGVja291dC10b3RhbF9fYmxvY2sgPiAucm93ID4gW2NsYXNzKj1cImNvbC1cIl06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jaGVja291dC10b3RhbF9fYmxvY2sge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAuY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIH1cclxuICAuY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgfVxyXG59XHJcbi5jaGVja291dC10b3RhbF9faGVhZGluZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoZWNrb3V0LXRvdGFsX19wcmljZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogOXB4IDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi5jaGVja291dF9fc3VibWl0IHtcclxuICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbn1cclxuLyoqIFNob3A6IE9yZGVyIENvbmZpcm1hdGlvbiAqL1xyXG4uc2hvcC1jb25mX19oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbi5zaG9wLWNvbmZfX2hlYWRpbmcgKyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3Jtc1xyXG4gKi9cclxuLmZvcm0tY29udHJvbCxcclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi8qIEhhcyBlcnJvciAqL1xyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0ZjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uaGFzLWVycm9yIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogI2I1MmIyNztcclxufVxyXG4uaGFzLWVycm9yIC5oZWxwLWJsb2NrIHtcclxuICBjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG4vKiBDaGVja2JveGVzICovXHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNoZWNrYm94IGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbn1cclxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYwMGNcIjtcclxufVxyXG4vKiBSYWRpb3MgKi9cclxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucmFkaW8gbGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4ucmFkaW8gbGFiZWw6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuICBib3JkZXItd2lkdGg6IDdweDtcclxufVxyXG4vKiBRdWFudGl0eSAqL1xyXG4uaW5wdXRfcXR5IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5pbnB1dF9xdHkgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmlucHV0X3F0eSBsYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0X3F0eSBsYWJlbCA+IHNwYW46bm90KC5vdXRwdXQpIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KTpsYXN0LWNoaWxkIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gb3V0cHV0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5pbnB1dF9xdHlfc20gbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbnB1dF9xdHlfc20gbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmlucHV0X3F0eV9zbSBsYWJlbCBvdXRwdXQge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"] });


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
        if (this.authService.isAuthenticated()) {
            this.router.navigate(["/"]);
        }
    }
    loginUser() {
        this.authService.login(this.username, this.password).subscribe(() => {
            window.location.replace('/');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { isAuthenticated: "isAuthenticated" }, decls: 21, vars: 2, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-header"], [1, "form-label"], [1, "card-body"], [1, "form-group"], [1, "form-floating", "mb-3"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "solid_button_orange", "w-100", 3, "click"], [1, "card-footer", "text-muted"], ["href", "/register"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "No account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function NavbarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 22)(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26)(7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Profile Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Change Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " My Favourite Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " My Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.id));
} }
class NavbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.refreshState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.id = this.authService.getLoggedUserId();
        this.username = this.authService.getLoggedUsername();
    }
    logout() {
        this.authService.logout();
        this.refreshState.emit();
        window.location.replace('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 89, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "flex-grow-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/favourite", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-heart"], [1, "responsive-text"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-cart-shopping"], [1, "bg-white", "navbar", "navbar-expand-lg", "p-0", "dropdownmenu"], ["href", "#"], ["id", "submenu"], ["href", "http://www.jochaho.com/wordpress/difference-between-svg-vs-canvas/"], ["href", "http://www.jochaho.com/wordpress/new-features-in-html5/"], ["href", "http://www.jochaho.com/wordpress/creating-links-to-sections-within-a-webpage/"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-s15", "fa-sign-in"], [1, "nav-link", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "avatar", "dropdown-toggle"], [1, "fa", "fa-user"], [1, "px-1"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["routerLink", "/settings", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fa", "fa-cog"], [1, "dropdown-divider"], ["routerLink", "/favourite", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ShoppingDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavbarComponent_div_9_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavbarComponent_div_10_Template, 24, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "a", 9)(13, "i", 10)(14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Favourite");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nav", 14)(22, "div", 1)(23, "ul")(24, "li")(25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Articles on HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 16)(28, "li")(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Difference between SVG vs. Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "New features in HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Creating links to sections within a webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Articles on HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul", 16)(41, "li")(42, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Difference between SVG vs. Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li")(45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "New features in HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Creating links to sections within a webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Articles on HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 16)(54, "li")(55, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Difference between SVG vs. Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "New features in HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Creating links to sections within a webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li")(64, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Articles on HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ul", 16)(67, "li")(68, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Difference between SVG vs. Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li")(71, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "New features in HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li")(74, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Creating links to sections within a webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li")(77, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Articles on HTML5 & CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "ul", 16)(80, "li")(81, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Difference between SVG vs. Canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "New features in HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Creating links to sections within a webpage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isUserAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".avatar[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    color: gray;\r\n    padding: 0px;\r\n}\r\n.whiteBackground[_ngcontent-%COMP%]{\r\n\tbackground-color: white;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tposition: relative;\r\n\twidth:auto;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: black;\r\n\tdisplay: block;\r\n\tfont: bold 12px/20px sans-serif;\r\n\tpadding: 10px 25px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\ttransition: all .25s ease;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n\tbackground: white;\r\n}\r\n#submenu[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 35px;\r\n\tvisibility: hidden;\r\n\tz-index: 1;\r\n}\r\nli[_ngcontent-%COMP%]:hover   ul#submenu[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop: 40px;\t\r\n\tvisibility: visible;\r\n}\r\n#submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: none;\r\n\twidth: 100%;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tbackground: #DF4B05;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tbackground-color:white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCwrQkFBK0I7Q0FDL0Isa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FLckIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLE9BQU87Q0FDUCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsU0FBUyxFQUFFLDBEQUEwRDtDQUNyRSxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4ud2hpdGVCYWNrZ3JvdW5ke1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kcm9wZG93bm1lbnUgdWwsIC5kcm9wZG93bm1lbnUgbGkge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5kcm9wZG93bm1lbnUgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLmRyb3Bkb3dubWVudSBsaSB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOmF1dG87XHJcbn1cclxuLmRyb3Bkb3dubWVudSBhIHtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udDogYm9sZCAxMnB4LzIwcHggc2Fucy1zZXJpZjtcclxuXHRwYWRkaW5nOiAxMHB4IDI1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG5cdC1vLXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxufVxyXG4uZHJvcGRvd25tZW51IGxpOmhvdmVyIGEge1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbiNzdWJtZW51IHtcclxuXHRsZWZ0OiAwO1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMzVweDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5saTpob3ZlciB1bCNzdWJtZW51IHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHRvcDogNDBweDtcdC8qIGFkanVzdCB0aGlzIGFzIHBlciB0b3AgbmF2IHBhZGRpbmcgdG9wICYgYm90dG9tIGNvbWVzICovXHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4jc3VibWVudSBsaSB7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuI3N1Ym1lbnUgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogI0RGNEIwNTtcclxufVxyXG4jc3VibWVudSBhIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3009:
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "span")(3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 7)(15, "div", 8)(16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8)(26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "<3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.productDetail.Category == null ? null : ctx_r0.productDetail.Category.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.productDetail == null ? null : ctx_r0.productDetail.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.productDetail.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.productDetail.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r0.productDetail.Price == null ? null : ctx_r0.productDetail.Price.toFixed(2)) || "/");
} }
class ProductDetailComponent {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.productService.get(id).subscribe((result) => {
                    this.productDetail = result;
                    console.log(result);
                });
            }
            console.log(id);
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 1, vars: 1, consts: [["class", "container py-3", 4, "ngIf"], [1, "container", "py-3"], [1, "navigationLink", "py-lg-3"], ["href", "/", 1, "text-decoration-none"], [1, "fa-solid", "fa-house"], [1, "fa-sharp", "fa-solid", "fa-arrow-right", "fa-2xs"], [1, "card", "w-100"], [1, "card-body"], [1, "row"], [1, "col-lg-6", "col-md-12", "text-md-center", "w-100", "h-100"], ["src", "https://www.bootdey.com/image/400x400/87CEFA/000000", "alt", "...", 1, "img-responsive"], [1, "col-lg-6", "col-md-12"], [1, "card-title"], [1, "card-text"], [1, "col-lg-5"], [1, "col-lg-2"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 32, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8)(12, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "div", 13)(17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15)(27, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15)(31, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15)(35, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Address 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 22)(39, "div", 8)(40, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 25)(44, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "select", 27)(47, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29)(52, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 32)(56, "div", 4)(57, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Payment info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " No Payment Information Available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails.Description);
} }
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response) => {
            this.userDetails = response;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 1, consts: [[1, "container", "pt-3"], ["class", "tab-pane fade show active", "id", "account", "role", "tabpanel", 4, "ngIf"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "inputFirstName"], ["type", "text", "id", "inputFirstName", "placeholder", "First name", 1, "form-control"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last name", 1, "form-control"], [1, "col-md-6", "form-group"], ["for", "inputUsername"], [1, "form-group"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], [1, "form-row"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], [1, "card", "mt-3"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 61, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


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
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 0, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-header"], [1, "form-label"], [1, "card-body"], [1, "form-group"], [1, "form-floating", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "username", "placeholder", "Username", 1, "form-control"], ["type", "text", "placeholder", "First name", 1, "form-control"], ["type", "text", "placeholder", "Last name", 1, "form-control"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "btn", "solid_button_orange", "w-100"], [1, "card-footer", "text-muted"], ["href", "/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7)(20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Already have account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);




class AuthService {
    constructor(http, tokenHelper) {
        this.http = http;
        this.tokenHelper = tokenHelper;
        //https://localhost:44305/
        this.baseUrl = 'api/Identity';
    }
    getUserDetails(id) {
        return this.http.post(`${this.baseUrl}/UserDetails/${id}`, null);
    }
    getLoggedUsername() {
        return localStorage.getItem('username') || undefined;
    }
    login(username, password) {
        return this.http.post(this.baseUrl + "/Login", { Username: username, Password: password }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            if (response.Id && response.Token && response.Username) {
                localStorage.setItem('id', response.Id);
                localStorage.setItem('username', response.Username);
                localStorage.setItem('token', response.Token);
                return true;
            }
            return false;
        }));
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('username');
    }
    getLoggedUserId() {
        return localStorage.getItem('id') || null;
    }
    getToken() {
        return localStorage.getItem('token') || null;
    }
    isAuthenticated() {
        const token = this.getToken();
        return token !== null;
    }
    getTokenInformation() {
        if (this.isAuthenticated()) {
            return this.tokenHelper.decodeToken(this.getToken() || '') || null;
        }
        return null;
    }
    getFavouriteProducts(Id) {
        return this.http.post(this.baseUrl + '/GetUserFavouriteProducts/', { userId: Id });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
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
        return this.http.post(this.baseApi + 'products/All', filter);
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

/***/ 4586:
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);


class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 103, vars: 0, consts: [[1, "container", "pt-3"], [1, "h3", "mb-3"], [1, "row"], [1, "col-md-5", "col-xl-4"], [1, "card"], ["role", "tablist", 1, "list-group", "list-group-flush"], ["data-toggle", "list", "href", "#account", "role", "tab", 1, "list-group-item", "list-group-item-action", "solid_button_orange"], ["data-toggle", "list", "href", "#password", "role", "tab", 1, "list-group-item", "list-group-item-action"], ["data-toggle", "list", "href", "#", "role", "tab", 1, "list-group-item", "list-group-item-action"], [1, "col-md-7", "col-xl-8"], [1, "tab-content"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "col-md-8"], [1, "form-group"], ["for", "inputUsername"], ["type", "text", "id", "inputUsername", "placeholder", "Username", 1, "form-control"], ["rows", "2", "id", "inputBio", "placeholder", "Tell something about yourself", 1, "form-control"], ["type", "submit", 1, "btn", "solid_button_orange"], [1, "card", "mt-3"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputFirstName"], ["type", "text", "id", "inputFirstName", "placeholder", "First name", 1, "form-control"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last name", 1, "form-control"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["id", "password", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card-title"], ["for", "inputPasswordCurrent"], ["type", "password", "id", "inputPasswordCurrent", 1, "form-control"], ["href", "#"], ["for", "inputPasswordNew"], ["type", "password", "id", "inputPasswordNew", 1, "form-control"], ["for", "inputPasswordNew2"], ["type", "password", "id", "inputPasswordNew2", 1, "form-control"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "div", 4)(17, "div", 12)(18, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Public info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "form")(22, "div", 2)(23, "div", 15)(24, "div", 16)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21)(35, "div", 12)(36, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Private info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14)(39, "form")(40, "div", 22)(41, "div", 23)(42, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23)(46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16)(50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16)(54, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16)(58, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22)(62, "div", 23)(63, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36)(67, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 38)(70, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 40)(75, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 43)(81, "div", 4)(82, "div", 14)(83, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "form")(86, "div", 16)(87, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "small")(91, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 16)(94, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16)(98, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Verify password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


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