"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([[179],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentification/register/register.component */ 6754);
/* harmony import */ var _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentification/login/login.component */ 1911);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite/favourite.component */ 6499);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 3009);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-products/category-products.component */ 4252);
/* harmony import */ var _order_grid_order_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-grid/order-grid.component */ 1482);
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-detail/order-detail.component */ 6661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'sort/:sort', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'category/:category', component: _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_9__.CategoryProductsComponent },
    { path: 'register', component: _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent },
    { path: 'favourite', component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__.FavouriteComponent },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent },
    { path: 'product-detail/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__.ProductDetailComponent },
    { path: 'error-404', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__.ErrorPageComponent },
    { path: 'orders', component: _order_grid_order_grid_component__WEBPACK_IMPORTED_MODULE_10__.OrderGridComponent },
    { path: 'orders/:id/details', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__.OrderDetailComponent },
    { path: '**', redirectTo: '/error-404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favourite/favourite.component */ 6499);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 3009);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-page/error-page.component */ 7446);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./by-pass-security */ 4391);
/* harmony import */ var _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category-products/category-products.component */ 4252);
/* harmony import */ var _navbar_categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/categories-navbar/categories-navbar.component */ 9162);
/* harmony import */ var _navbar_regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/regular-navbar/regular-navbar.component */ 3059);
/* harmony import */ var _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authentification/login/login.component */ 1911);
/* harmony import */ var _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authentification/register/register.component */ 6754);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products-grid/products-grid.component */ 3296);
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/carousel/carousel.component */ 276);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _order_grid_order_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./order-grid/order-grid.component */ 1482);
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order-detail/order-detail.component */ 6661);
/* harmony import */ var _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cart-detail/cart-detail.component */ 2110);
/* harmony import */ var _convert_date__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./convert-date */ 5143);
/* harmony import */ var _order_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order-pipe */ 5080);
/* harmony import */ var _side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./side-filter/side-filter.component */ 7579);
/* harmony import */ var _loading_item_loading_item_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./loading-item/loading-item.component */ 1125);
/* harmony import */ var _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./loading-items/loading-items.component */ 8271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 3184);






































const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService,
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__.JWT_OPTIONS, useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__.JWT_OPTIONS },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_31__.JwtHelperService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule.forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: false,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _authentification_login_login_component__WEBPACK_IMPORTED_MODULE_17__.LoginComponent,
        _authentification_register_register_component__WEBPACK_IMPORTED_MODULE_18__.RegisterComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__.CartComponent,
        _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_8__.FavouriteComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__.SettingsComponent,
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__.ProductDetailComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent,
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__.ErrorPageComponent,
        _by_pass_security__WEBPACK_IMPORTED_MODULE_13__.ByPassSecurityPipe,
        _convert_date__WEBPACK_IMPORTED_MODULE_25__.DateConverter,
        _order_pipe__WEBPACK_IMPORTED_MODULE_26__.OrderStatusPipe,
        _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_14__.CategoryProductsComponent,
        _navbar_categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_15__.CategoriesNavbarComponent,
        _navbar_regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_16__.RegularNavbarComponent,
        _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_19__.ProductsGridComponent,
        _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__.BreadcrumbComponent,
        _order_grid_order_grid_component__WEBPACK_IMPORTED_MODULE_22__.OrderGridComponent,
        _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_23__.OrderDetailComponent,
        _cart_detail_cart_detail_component__WEBPACK_IMPORTED_MODULE_24__.CartDetailComponent,
        _side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_27__.SideFilterComponent,
        _loading_item_loading_item_component__WEBPACK_IMPORTED_MODULE_28__.LoadingItemComponent,
        _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_29__.LoadingItemsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_35__.ToastrModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 1911:
/*!***********************************************************!*\
  !*** ./src/app/authentification/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.errorMessage = "";
        this.username = "";
        this.password = "";
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(["/"]);
        }
    }
    loginUser() {
        if (this.username === "" || this.password === "") {
            this.errorMessage = "Fields are required";
            return;
        }
        this.authService.login(this.username, this.password).subscribe(() => {
            window.location.replace('/');
        }, (error) => {
            this.errorMessage = error.error.exception;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { isAuthenticated: "isAuthenticated" }, decls: 23, vars: 5, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form-label"], [1, "form-group"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-floating", "mb-3"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "solid_button_orange", "w-100", 3, "click"], [1, "card-footer", "text-muted"], [3, "routerLink"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 8)(12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "No account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Register here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6754:
/*!*****************************************************************!*\
  !*** ./src/app/authentification/register/register.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.errorMessage = "";
        this.email = "";
        this.username = "";
        this.firstName = "";
        this.lastName = "";
        this.password = "";
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(["/"]);
        }
    }
    registerUser() {
        if (this.username === "") {
            this.errorMessage = "Username is required";
            return;
        }
        if (this.password === "") {
            this.errorMessage = "Password is required";
            return;
        }
        // this.authService.registerUser().subscribe(()=>{
        //   window.location.replace('/')
        // },
        // (error) => {
        //   this.errorMessage = error.error.exception;
        // })
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 7, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form-label"], [1, "form-group"], [1, "form-floating", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "solid_button_orange", "w-100", 3, "click"], [1, "card-footer", "text-muted"], [3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6)(20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_20_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Already have account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6723:
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span")(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 7)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.itemDetail.Category == null ? null : ctx_r0.itemDetail.Category.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.itemDetail == null ? null : ctx_r0.itemDetail.Name);
} }
function BreadcrumbComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "span")(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7)(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.itemDetail);
} }
class BreadcrumbComponent {
    constructor(userAuth) {
        this.userAuth = userAuth;
        this.isItem = false;
    }
    ngOnInit() {
        this.user = this.userAuth.getLoggedUsername();
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], inputs: { isItem: "isItem", itemDetail: "itemDetail" }, decls: 2, vars: 2, consts: [["class", "container p-3 solid-navigation-panel-font", 4, "ngIf"], ["class", "container solid-navigation-panel-font", 4, "ngIf"], [1, "container", "p-3", "solid-navigation-panel-font"], [1, "navigationLink", "py-md-3", "py-sm-3", "py-lg-3"], ["href", "/", 1, "text-decoration-none"], [1, "fa-solid", "fa-house", "solid-nav-panel-item"], [1, "fa-solid", "fa-solid", "fa-2xs", "fa-angle-right"], [1, "solid_color"], [1, "container", "solid-navigation-panel-font"], [1, "navigationLink", "p-3"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 14, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 10, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4391:
/*!*************************************!*\
  !*** ./src/app/by-pass-security.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ByPassSecurityPipe": () => (/* binding */ ByPassSecurityPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class ByPassSecurityPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + value);
    }
}
ByPassSecurityPipe.ɵfac = function ByPassSecurityPipe_Factory(t) { return new (t || ByPassSecurityPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
ByPassSecurityPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "byPassSecurity", type: ByPassSecurityPipe, pure: true });


/***/ }),

/***/ 2110:
/*!******************************************************!*\
  !*** ./src/app/cart-detail/cart-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartDetailComponent": () => (/* binding */ CartDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CartDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartDetailComponent.ɵfac = function CartDetailComponent_Factory(t) { return new (t || CartDetailComponent)(); };
CartDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailComponent, selectors: [["app-cart-detail"]], decls: 2, vars: 0, template: function CartDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cart-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../by-pass-security */ 4391);








const _c0 = function (a1) { return ["/product-detail", a1]; };
function CartComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 6)(4, "div")(5, "a", 7)(6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 12)(15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.handleMinus(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.handlePlus(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div")(30, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_2_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const detail_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.deleteProductCartDetail(detail_r2.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Delete from Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, detail_r2.Product.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](detail_r2.Product == null ? null : detail_r2.Product.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, detail_r2.Product.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, detail_r2.Product.Image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](detail_r2.Product == null ? null : detail_r2.Product.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", detail_r2.Product == null ? null : detail_r2.Product.Price.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", detail_r2 == null ? null : detail_r2.Quantity);
} }
function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 14)(2, "div", 19)(3, "div", 5)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "List of cart product is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 23)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Keep buying");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
} }
class CartComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    ngOnInit() {
        var _a;
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(["login"]);
        }
        (_a = this.authService.getUserCartProducts(this.authService.getLoggedUserId())) === null || _a === void 0 ? void 0 : _a.subscribe((res) => {
            this.shoppingCart = res;
        });
    }
    handleMinus(i) {
        if (this.shoppingCart.ShoppingCartDetails[i].Quantity > 1) {
            this.shoppingCart.ShoppingCartDetails[i].Quantity--;
        }
    }
    handlePlus(i) {
        this.shoppingCart.ShoppingCartDetails[i].Quantity++;
    }
    deleteProductCartDetail(id) {
        var _a;
        if (id) {
            (_a = this.authService.removeCartDetail(id)) === null || _a === void 0 ? void 0 : _a.subscribe(() => {
                var _a;
                (_a = this.authService.getUserCartProducts(this.authService.getLoggedUserId())) === null || _a === void 0 ? void 0 : _a.subscribe((res) => {
                    this.shoppingCart = res;
                });
                this.toastr.success("Success remove cart product");
            });
        }
        else {
            this.toastr.error("Something is wrong");
        }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 4, vars: 4, consts: [[1, "container"], [3, "isItem", "itemDetail"], ["class", "card my-3", 4, "ngFor", "ngForOf"], ["class", "container", 4, "ngIf"], [1, "card", "my-3"], [1, "card-body"], [1, "col-lg-12"], [1, "solid-color-a", 3, "routerLink"], [1, "row"], [1, "col-lg-3", "col-sm-12"], [3, "routerLink"], ["alt", "...", 1, "img-responsive", 3, "src"], [1, "col-lg-6", "col-sm-12", "solid-side-borders"], [1, "col-lg-3", "col-sm-12", "text-center"], [1, "text-center"], [1, "wrapper"], [1, "plusminus", 3, "click"], ["type", "number", 1, "num", 3, "ngModel"], [1, "w-100", "btn", "btn-danger", 3, "click"], [1, "card", 2, "text-align", "-webkit-center"], [1, "circle"], [1, "fa-5x", "fa-solid", "fa-bag-shopping"], [1, "p-3"], ["href", "/", 1, "solid_color"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CartComponent_div_2_Template, 32, 13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CartComponent_div_3_Template, 12, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", false)("itemDetail", "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.shoppingCart.ShoppingCartDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shoppingCart.ShoppingCartDetails.length == 0);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_2__.ByPassSecurityPipe], styles: ["input[_ngcontent-%COMP%] {\r\n    text-align: center;  \r\n    border: 1px solid #6C757D;\r\n    top: 50%;\r\n  } \r\n  \r\n  input[type=\"number\"][_ngcontent-%COMP%] {\r\n    -webkit-appearance: textfield !important;\r\n    appearance: textfield !important;\r\n    } \r\n  \r\n  input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n      -webkit-appearance: none;\r\n    } \r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    border: 2px #dcd3d3 solid;\r\n    width: 100%;\r\n    height: 20%;\r\n    display: flex;\r\n    border-radius: 15px;\r\n  } \r\n  \r\n  .plusminus[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 30%;\r\n    background: white;\r\n    border: none;\r\n    font-size: 40px;\r\n    color: #5f5fce;\r\n  } \r\n  \r\n  .num[_ngcontent-%COMP%] {\r\n    width: 39%;\r\n    border: none;\r\n    font-size: 30px;\r\n  } \r\n  \r\n  .circle[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 200px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    border-radius: 50%; \r\n    background-color: rgb(230 82 40 / 0.25);\r\n    color: coral;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsUUFBUTtFQUNWOztFQUVBO0lBQ0Usd0NBQXdDO0lBRXhDLGdDQUFnQztJQUNoQzs7RUFFRjs7TUFFSSx3QkFBd0I7SUFDMUI7O0VBRUY7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUdBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFFLGdDQUFnQztJQUNwRCx1Q0FBdUM7SUFDdkMsWUFBWTtFQUNkIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZDNzU3RDtcclxuICAgIHRvcDogNTAlO1xyXG4gIH0gXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICAgIGFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAycHggI2RjZDNkMyBzb2xpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnBsdXNtaW51cyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogIzVmNWZjZTtcclxuICB9XHJcbiAgXHJcbiAgLm51bSB7XHJcbiAgICB3aWR0aDogMzklO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5jaXJjbGUge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBtYXkgcmVxdWlyZSB2ZW5kb3IgcHJlZml4ZXMgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAgODIgNDAgLyAwLjI1KTtcclxuICAgIGNvbG9yOiBjb3JhbDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 4252:
/*!******************************************************************!*\
  !*** ./src/app/category-products/category-products.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryProductsComponent": () => (/* binding */ CategoryProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-filter/side-filter.component */ 7579);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products-grid/products-grid.component */ 3296);
/* harmony import */ var _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading-items/loading-items.component */ 8271);








function CategoryProductsComponent_app_breadcrumb_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isItem", false)("itemDetail", ctx_r0.category.Name);
} }
function CategoryProductsComponent_app_products_grid_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-products-grid", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("products", ctx_r1.products == null ? null : ctx_r1.products.Items);
} }
function CategoryProductsComponent_app_loading_items_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading-items");
} }
class CategoryProductsComponent {
    constructor(route, categoryService) {
        this.route = route;
        this.categoryService = categoryService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const categoryUrl = params.get('category');
            if (categoryUrl) {
                this.categoryService.GetCategoryByUrl(categoryUrl).subscribe((res) => {
                    this.category = res;
                });
                this.categoryService.getProductsByCategoryUrl(categoryUrl).subscribe((res) => {
                    this.products = res;
                    this.isLoading = false;
                });
            }
        });
    }
}
CategoryProductsComponent.ɵfac = function CategoryProductsComponent_Factory(t) { return new (t || CategoryProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
CategoryProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CategoryProductsComponent, selectors: [["app-category-products"]], decls: 8, vars: 3, consts: [[1, "container"], [3, "isItem", "itemDetail", 4, "ngIf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9"], [3, "products", 4, "ngIf"], [4, "ngIf"], [3, "isItem", "itemDetail"], [3, "products"]], template: function CategoryProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CategoryProductsComponent_app_breadcrumb_1_Template, 1, 2, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-side-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CategoryProductsComponent_app_products_grid_6_Template, 1, 1, "app-products-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CategoryProductsComponent_app_loading_items_7_Template, 1, 0, "app-loading-items", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _side_filter_side_filter_component__WEBPACK_IMPORTED_MODULE_2__.SideFilterComponent, _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_3__.ProductsGridComponent, _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_4__.LoadingItemsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5143:
/*!*********************************!*\
  !*** ./src/app/convert-date.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateConverter": () => (/* binding */ DateConverter)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DateConverter {
    constructor() { }
    transform(date) {
        if (!date) {
            return 0;
        }
        const timestamp = parseInt(date.substr(6)); // Extract the timestamp without "/Date(" and "/)"
        var formatedDate = new Date(timestamp);
        return formatedDate.getDate() + "/" + formatedDate.getMonth() + "/" + formatedDate.getFullYear();
    }
}
DateConverter.ɵfac = function DateConverter_Factory(t) { return new (t || DateConverter)(); };
DateConverter.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateConverter", type: DateConverter, pure: true });


/***/ }),

/***/ 9010:
/*!****************************************!*\
  !*** ./src/app/countries/countries.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countries": () => (/* binding */ countries)
/* harmony export */ });
const countries = [
    { name: 'North Macedonia' },
    { name: 'Albania' },
    { name: 'Bosnia and Hercegovina' },
    { name: 'Bulgaria' },
    { name: 'Greece' },
    { name: 'Serbia' },
    { name: 'Croatia' },
    { name: 'Slovenia' }
];


/***/ }),

/***/ 7446:
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);


class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 11, vars: 2, consts: [[1, "container", "solid-lg-content"], [3, "isItem", "itemDetail"], [1, "p-5", "card", "text-center"], [1, "solid_color", "solid-lg-text"], ["href", "/", 1, "solid-color-a"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The Page you are looking for doesn't exist or an other error occured. Go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home Page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isItem", false)("itemDetail", "Error page");
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products-grid/products-grid.component */ 3296);
/* harmony import */ var _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-items/loading-items.component */ 8271);








function FavouriteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-products-grid", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasRemoveProductButton", true)("products", ctx_r0.responseModel == null ? null : ctx_r0.responseModel.Items);
} }
function FavouriteComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "List of favourite product is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 12)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Keep buying");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
} }
function FavouriteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FavouriteComponent_div_3_div_1_Template, 12, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx_r1.responseModel == null ? null : ctx_r1.responseModel.TotalItems));
} }
function FavouriteComponent_app_loading_items_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-items");
} }
class FavouriteComponent {
    constructor(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.isLoading = true;
    }
    ngOnInit() {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(["login"]);
        }
        this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result) => {
            this.responseModel = result;
            this.isLoading = false;
        });
    }
    deleteFavouriteProduct(id) {
        var _a;
        if (id) {
            (_a = this.authService.deleteFavouriteProduct(this.authService.getLoggedUserId(), id)) === null || _a === void 0 ? void 0 : _a.subscribe(() => {
                this.toastr.success("Success deleted favourite product");
                this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result) => {
                    this.responseModel = result;
                });
            });
        }
    }
}
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
FavouriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FavouriteComponent, selectors: [["app-favourite"]], decls: 5, vars: 5, consts: [[1, "container"], [3, "isItem", "itemDetail"], ["class", "py-3", 4, "ngIf"], [4, "ngIf"], [1, "py-3"], [3, "hasRemoveProductButton", "products"], [1, "text-center"], [1, "card", 2, "text-align", "-webkit-center"], [1, "card-body"], [1, "circle"], [1, "fa-regular", "fa-5x", "fa-heart"], [1, "p-3"], ["href", "/", 1, "solid_color"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FavouriteComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FavouriteComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FavouriteComponent_app_loading_items_4_Template, 1, 0, "app-loading-items", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isItem", false)("itemDetail", "Favourite Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.responseModel == null ? null : ctx.responseModel.TotalItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__.ProductsGridComponent, _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_3__.LoadingItemsComponent], styles: [".circle[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 200px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    border-radius: 50%; \r\n    background-color: rgb(230 82 40 / 0.25);\r\n    color: coral;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFFLGdDQUFnQztJQUNwRCx1Q0FBdUM7SUFDdkMsWUFBWTtFQUNkIiwiZmlsZSI6ImZhdm91cml0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIG1heSByZXF1aXJlIHZlbmRvciBwcmVmaXhlcyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCA4MiA0MCAvIDAuMjUpO1xyXG4gICAgY29sb3I6IGNvcmFsO1xyXG4gIH0iXX0= */"] });


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
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 70, vars: 1, consts: [[1, "bg-light", "text-muted", "solid-top-margin", "solid-footer"], [1, "d-flex", "text-sm-center", "justify-content-sm-center", "justify-content-lg-around", "container", "p-4", "border-bottom"], [1, "me-5", "d-none", "d-lg-block"], [1, "row", "text-center"], ["href", "#", 1, "col"], [1, "fab", "p-2", "fa-facebook-f", "solid-nav-panel-footer"], [1, "fab", "p-2", "fa-twitter", "solid-nav-panel-footer"], [1, "fab", "p-2", "fa-instagram", "solid-nav-panel-footer"], [1, "fab", "p-2", "fa-linkedin", "solid-nav-panel-footer"], [1, "fab", "p-2", "fa-github", "solid-nav-panel-footer"], [1, "container", "text-md-start", "mt-5"], [1, "row", "mt-3"], [1, "col-md-3", "col-lg-4", "col-xl-3", "mx-auto", "mb-4"], [1, "text-uppercase", "fw-bold", "mb-4"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], ["href", "#!", 1, "solid-nav-panel-footer"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mb-4"], [1, "left-solid-text", "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mb-md-0", "mb-4"], [1, "fas", "fa-home", "me-3"], [1, "fas", "fa-envelope", "me-3"], [1, "fas", "fa-phone", "me-3"], [1, "fas", "fa-print", "me-3"], ["class", "bg-white text-center p-4", "style", "background-color: rgba(0, 0, 0, 0.05);", 4, "ngIf"], [1, "bg-white", "text-center", "p-4", 2, "background-color", "rgba(0, 0, 0, 0.05)"], ["href", "https://shopping-dev.com/", 1, "text-reset", "fw-bold"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem metus, molestie vel ante id, vehicula rhoncus risus. Sed iaculis rutrum dolor, sed porttitor diam tristique non. Phasellus cursus dui risus, et imperdiet dolor venenatis id. ");
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

/***/ 276:
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 26, vars: 0, consts: [["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://solutionhubtech.com/wp-content/uploads/2021/01/Lenovo-laptop-repair-Delhi-2.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://plecom.imgix.net/bo-761993-1500x500.jpg?auto=format", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "https://cdn.shopify.com/s/files/1/0355/8296/7943/files/Untitled-1_be05ce94-d08f-4120-896c-6bd713c4b039.jpg?v=1648257013", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "https://techlingo.co/wp-content/uploads/2022/09/Logitech-G502X-Cover-Image-1500x500.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "https://cdn.shopify.com/s/files/1/0355/8296/7943/files/blackbluee.jpg?v=1638686898", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2)(3, "li", 3)(4, "li", 4)(5, "li", 5)(6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ 276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products-grid/products-grid.component */ 3296);
/* harmony import */ var _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-items/loading-items.component */ 8271);







function HomeComponent_app_products_grid_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-products-grid", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasRemoveProductButton", false)("products", ctx_r0.products);
} }
function HomeComponent_app_loading_items_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading-items");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
        this.isUserAuthenticated = false;
        this.search = 'search';
        this.activeSorting = 'Popular';
        this.isLoading = true;
        this.message = "";
        this.type = "";
        this.productFilter = {
            SearchString: "",
            SortName: "Popular",
            PageNeeded: "",
            Price: "",
        };
        this.queryParam = "";
    }
    ngOnInit() {
        if (this.activeSorting === 'Popular') {
            this.router.navigate(['sort/popular']);
        }
        this.productService.getAll(this.productFilter).subscribe((result) => {
            this.products = result.Items;
            this.totalItems = result.TotalItems;
            this.isLoading = false;
        });
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
        this.router.navigate(["sort/" + url]);
    }
    addToFavourite(Id) {
        console.log("in favourite");
        this.message = 'Success message';
        this.type = 'success';
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 22, vars: 17, consts: [[1, "container", "mt-3"], [1, "shop__sorting"], [3, "ngClass", "click"], [1, "btn", "solid-no-radius", 3, "click"], [3, "hasRemoveProductButton", "products", 4, "ngIf"], [4, "ngIf"], [3, "hasRemoveProductButton", "products"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div")(3, "div")(4, "ul", 1)(5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_5_listener() { return ctx.changeSorting("Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() { return ctx.changeRoute("popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_8_listener() { return ctx.changeSorting("Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_9_listener() { return ctx.changeRoute("newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_11_listener() { return ctx.changeSorting("BestSelling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { return ctx.changeRoute("best-selling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Best Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_14_listener() { return ctx.changeSorting("PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() { return ctx.changeRoute("price-low"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Price (low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_17_listener() { return ctx.changeSorting("PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() { return ctx.changeRoute("price-high"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Price (high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, HomeComponent_app_products_grid_20_Template, 1, 2, "app-products-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, HomeComponent_app_loading_items_21_Template, 1, 0, "app-loading-items", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.activeSorting === "Popular"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.activeSorting === "Newest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.activeSorting === "BestSelling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx.activeSorting === "PriceLow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.activeSorting === "PriceHigh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__.ProductsGridComponent, _loading_items_loading_items_component__WEBPACK_IMPORTED_MODULE_3__.LoadingItemsComponent], styles: ["body[_ngcontent-%COMP%]{margin-top:20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.shop-index__section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop-index__section.alt[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  border-width: 1px 0 1px 0;\r\n  border-style: solid;\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n  font-family: 'Questrial', sans-serif;\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n  margin-bottom: 60px;\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop__slideshow[_ngcontent-%COMP%] {\r\n  margin-top: -18px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item__container[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item-container__inner[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.shop-slideshow__heading[_ngcontent-%COMP%] {\r\n  margin: 0 0 20px 0;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 46px;\r\n  line-height: 1.2;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  border-radius: 0;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%]:hover, .shop-slideshow__btn[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  background-color: white;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    padding: 0 30px;\r\n    text-align: center;\r\n  }\r\n  .shop-slideshow__heading[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n  .shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  width: 30px;\r\n  height: 70px;\r\n  opacity: 0;\r\n  transform: translateY(-50%);\r\n  transition: opacity .3s;\r\n}\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%]:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.shop-slideshow__control[data-slide=\"next\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 10px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]:hover   .shop-slideshow__control[_ngcontent-%COMP%] {\r\n  opacity: .3;\r\n}\r\n\r\n\r\n\r\n.shop-index-features__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index-features__icon[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.shop-index-blog__post[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n \r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.shop-index-blog__body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shop-index-blog__content[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  color: #777777;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .shop-index-blog__img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n    left: 50%;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 60px;\r\n    border-right: 0;\r\n  }\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-bottom: 0;\r\n  }\r\n  .shop-index-blog__post[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 42px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 11px 12px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 11px 30px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    text-align: right;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border-radius: 21px 0 0 21px;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    margin-left: -3px;\r\n    border-radius: 0 21px 21px 0;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-item__info[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  background-color: white;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-item-cart__title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.shop-item-cart__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  color: #F7C41F;\r\n}\r\n\r\n.shop-item__intro[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.shop-item__add[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.shop-item__img[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-item-img__main[_ngcontent-%COMP%] {\r\n  width: calc(100% - 110px);\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  opacity: .5;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover, .shop-item-img__aside[_ngcontent-%COMP%]    > img.active[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-item-img__main[_ngcontent-%COMP%] {\r\n    width: calc(100% - 60px);\r\n  }\r\n  .shop-item-img__aside[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__price[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n.shop-filter__price[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__color[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 2px 2px 0;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.shop__sorting[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: -20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  text-align: right;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 15px 15px;\r\n  margin-bottom: -1px;\r\n  border-bottom: 2px solid transparent;\r\n  color: #757575;\r\n  transition: all .05s linear;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #ed3e49;\r\n  border-bottom-color: #ed3e49;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__sorting[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-bottom: 0;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n\r\n\r\n.checkout__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.checkout-cart__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.checkout-cart-item__img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.checkout-cart-item__content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.checkout-cart-item__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.checkout-cart-item__footer[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.checkout-cart-item__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  border-top: 1px solid #e9e9e9;\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding: 40px 40px;\r\n  border-right: 1px solid #e9e9e9;\r\n  color: #aaa;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n  color: #333333;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-total__block[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 15px 20px;\r\n    border: 0;\r\n    border-top: 1px solid #e9e9e9;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #e9e9e9;\r\n  }\r\n}\r\n\r\n.checkout-total__heading[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.checkout-total__price[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 9px 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.checkout__submit[_ngcontent-%COMP%] {\r\n  padding: 15px 40px;\r\n}\r\n\r\n\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d9534f;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #b52b27;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  color: #d9534f;\r\n}\r\n\r\n\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background-color: #eee;\r\n  text-align: center;\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n}\r\n\r\n\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 10px solid #eee;\r\n  background-color: #333333;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  border-width: 7px;\r\n}\r\n\r\n\r\n\r\n.input_qty[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):last-child {\r\n  float: right;\r\n  border-right: 0;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > output[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: inherit;\r\n  padding: 0;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 20px;\r\n  border: 0;\r\n  line-height: 20px;\r\n  color: #ccc;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 0 !important;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-weight: 600;\r\n}\r\n\r\n.solid-active[_ngcontent-%COMP%]{\r\n  color:coral;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGVBQWUsQ0FBQzs7QUFFckI7O0VBRUU7O0FBQ0Ysa0JBQWtCOztBQUNsQixZQUFZOztBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBQ0Esb0JBQW9COztBQUNwQjtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFDQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUlGLDJCQUEyQjtFQUczQix1QkFBdUI7QUFDakM7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBLGFBQWE7O0FBQ2I7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhOztFQUViLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsY0FBYzs7QUFDZDtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsMkNBQTJDO0FBQzdDOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTzs7QUFFVDs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFDQSxlQUFlOztBQUNmO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjtBQUNGOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixxQ0FBcUM7QUFDdkM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMsVUFBVTtBQUNaOztBQUNBO0VBQ0U7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBLG1CQUFtQjs7QUFDbkI7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0EseUJBQXlCOztBQUN6QjtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSx3QkFBd0I7O0FBQ3hCO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDJDQUEyQztFQUMzQyxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsY0FBYztFQUdOLDJCQUEyQjtBQUNyQzs7QUFDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUNBLHFCQUFxQjs7QUFDckI7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUNBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQSw4QkFBOEI7O0FBQzlCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUdBOztFQUVFOztBQUNGOztFQUdVLGdCQUFnQjtFQUN4QixhQUFhO0FBQ2Y7O0FBQ0EsY0FBYzs7QUFDZDtFQUNFLHFCQUFxQjtFQUViLDJCQUEyQjtBQUNyQzs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0EsZUFBZTs7QUFDZjtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0EsV0FBVzs7QUFDWDtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQSxhQUFhOztBQUNiO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YseUJBQXlCO09BR3BCLGlCQUFpQjtBQUN4Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUNBQXlDO0FBQzNDOztBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7bWFyZ2luLXRvcDoyMHB4O31cclxuXHJcbi8qKlxyXG4gKiBTaG9wXHJcbiAqL1xyXG4vKiogU2hvcDogSW5kZXggKiovXHJcbi8qIEdlbmVyYWwgKi9cclxuLnNob3AtaW5kZXhfX3NlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5zaG9wLWluZGV4X19zZWN0aW9uLmFsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxuICBib3JkZXItd2lkdGg6IDFweCAwIDFweCAwO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5zaG9wLWluZGV4X19oZWFkaW5nIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5zaG9wLWluZGV4X19oZWFkaW5nICsgcCB7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4vKiBTaG9wOiBTbGlkZXNob3cgKi9cclxuLnNob3BfX3NsaWRlc2hvdyB7XHJcbiAgbWFyZ2luLXRvcDogLTE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4uc2hvcF9fc2xpZGVzaG93IC5jYXJvdXNlbC1pbm5lciAuaXRlbV9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNob3BfX3NsaWRlc2hvdyAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0tY29udGFpbmVyX19pbm5lciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uc2hvcC1zbGlkZXNob3dfX2hlYWRpbmcge1xyXG4gIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zaG9wLXNsaWRlc2hvd19fc3ViaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogJ1F1ZXN0cmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zaG9wLXNsaWRlc2hvd19fYnRuIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zaG9wLXNsaWRlc2hvd19fYnRuOmhvdmVyLFxyXG4uc2hvcC1zbGlkZXNob3dfX2J0bjpmb2N1cyB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNob3BfX3NsaWRlc2hvdyAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNob3Atc2xpZGVzaG93X19oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLnNob3Atc2xpZGVzaG93X19zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuLyogQ2Fyb3VzZWwgY29udHJvbHMgKi9cclxuLnNob3Atc2xpZGVzaG93X19jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMTBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2NvbnRyb2w6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2NvbnRyb2xbZGF0YS1zbGlkZT1cIm5leHRcIl0ge1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnNob3BfX3NsaWRlc2hvdzpob3ZlciAuc2hvcC1zbGlkZXNob3dfX2NvbnRyb2wge1xyXG4gIG9wYWNpdHk6IC4zO1xyXG59XHJcbi8qIEZlYXR1cmVzICovXHJcbi5zaG9wLWluZGV4LWZlYXR1cmVzX19pdGVtIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2hvcC1pbmRleC1mZWF0dXJlc19faWNvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4uc2hvcC1pbmRleC1mZWF0dXJlc19faGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2hvcC1pbmRleC1mZWF0dXJlc19faGVhZGluZyArIHAge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbi8qIEJsb2cgcG9zdCAqL1xyXG4uc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX3Bvc3RzID4gW2NsYXNzKj1cImNvbC1cIl06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX3Bvc3Qge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2ltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19pbWc6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiBcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19pbWcgPiBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19ib2R5IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2hlYWRpbmcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0xNXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbi5zaG9wLWluZGV4LWJsb2dfX2NvbnRlbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19faW1nIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19faGVhZGluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX2hlYWRpbmc6YWZ0ZXIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX3Bvc3RzID4gW2NsYXNzKj1cImNvbC1cIl06bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19fcG9zdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLyogTmV3c2xldHRlciAqL1xyXG4uc2hvcC1pbmRleF9fbmV3c2xldHRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgLnNob3AtaW5kZXhfX2hlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaG9wLWluZGV4X19uZXdzbGV0dGVyIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIHBhZGRpbmc6IDExcHggMTJweDtcclxufVxyXG4uc2hvcC1pbmRleF9fbmV3c2xldHRlciBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgcGFkZGluZzogMTFweCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaG9wLWluZGV4X19uZXdzbGV0dGVyIC5zaG9wLWluZGV4X19oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAuc2hvcC1pbmRleF9fbmV3c2xldHRlciBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjFweCAwIDAgMjFweDtcclxuICB9XHJcbiAgLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDIxcHggMjFweCAwO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKiogU2hvcDogSXRlbSAqKi9cclxuLnNob3AtaXRlbV9faW5mbyB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNob3AtaXRlbS1jYXJ0X190aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcbi5zaG9wLWl0ZW0tY2FydF9fcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRjdDNDFGO1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ludHJvIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2FkZCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fbWFpbiB7XHJcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTEwcHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWc6aG92ZXIsXHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSA+IGltZy5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wLWl0ZW0taW1nX19tYWluIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuc2hvcC1pdGVtLWltZ19fYXNpZGUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBGaWx0ZXIgKiovXHJcbi5zaG9wX19maWx0ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLyogU2hvcCBmaWx0ZXI6IFByaWNpbmcgKi9cclxuLnNob3AtZmlsdGVyX19wcmljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uc2hvcC1maWx0ZXJfX3ByaWNlIFtjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi8qIFNob3AgZmlsdGVyOiBDb2xvcnMgKi9cclxuLnNob3AtZmlsdGVyX19jb2xvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAycHggMnB4IDA7XHJcbn1cclxuLnNob3AtZmlsdGVyX19jb2xvciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvcC1maWx0ZXJfX2NvbG9yIGxhYmVsIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyoqIFNob3A6IFNvcnRpbmcgKiovXHJcbi5zaG9wX19zb3J0aW5nIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSA+IGE6aG92ZXIsXHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICBjb2xvcjogI2VkM2U0OTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWQzZTQ5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wX19zb3J0aW5nIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBDaGVja291dCAqKi9cclxuLmNoZWNrb3V0X19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydF9faXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19pbWcge1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19oZWFkaW5nIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW1fX2Zvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNoZWNrb3V0LXRvdGFsX19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2hlY2tvdXQtdG90YWxfX2Jsb2NrIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIH1cclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2hlYWRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaGVja291dC10b3RhbF9fcHJpY2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDlweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uY2hlY2tvdXRfX3N1Ym1pdCB7XHJcbiAgcGFkZGluZzogMTVweCA0MHB4O1xyXG59XHJcbi8qKiBTaG9wOiBPcmRlciBDb25maXJtYXRpb24gKi9cclxuLnNob3AtY29uZl9faGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1jb25mX19oZWFkaW5nICsgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRm9ybXNcclxuICovXHJcbi5mb3JtLWNvbnRyb2wsXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKiBIYXMgZXJyb3IgKi9cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNiNTJiMjc7XHJcbn1cclxuLmhhcy1lcnJvciAuaGVscC1ibG9jayB7XHJcbiAgY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuLyogQ2hlY2tib3hlcyAqL1xyXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG59XHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbn1cclxuLyogUmFkaW9zICovXHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJhZGlvIGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnJhZGlvIGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDEwcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbn1cclxuLyogUXVhbnRpdHkgKi9cclxuLmlucHV0X3F0eSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5wdXRfcXR5IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6bGFzdC1jaGlsZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuLmlucHV0X3F0eSBsYWJlbCA+IG91dHB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmlucHV0X3F0eV9zbSBsYWJlbCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCkge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5pbnB1dF9xdHlfc20gbGFiZWwgb3V0cHV0IHtcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc29saWQtYWN0aXZle1xyXG4gIGNvbG9yOmNvcmFsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1125:
/*!********************************************************!*\
  !*** ./src/app/loading-item/loading-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingItemComponent": () => (/* binding */ LoadingItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoadingItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingItemComponent.ɵfac = function LoadingItemComponent_Factory(t) { return new (t || LoadingItemComponent)(); };
LoadingItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingItemComponent, selectors: [["app-loading-item"]], decls: 2, vars: 0, template: function LoadingItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8271:
/*!**********************************************************!*\
  !*** ./src/app/loading-items/loading-items.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingItemsComponent": () => (/* binding */ LoadingItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LoadingItemsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingItemsComponent.ɵfac = function LoadingItemsComponent_Factory(t) { return new (t || LoadingItemsComponent)(); };
LoadingItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingItemsComponent, selectors: [["app-loading-items"]], decls: 19, vars: 0, consts: [[1, "row"], [1, "col-lg-4", "col-sm-6", "col-md-6"], [1, "sk_bg", "big"], [1, "sk_sm", "small"], [1, "col-lg-4", "col-sm-12", "col-md-6"]], template: function LoadingItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2)(9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2)(12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 2)(15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 2)(18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".sk_bg[_ngcontent-%COMP%] {\r\n  animation-duration: 1s;\r\n  animation-fill-mode: forwards;\r\n  animation-iteration-count: infinite;\r\n  animation-name: sk_bg_animation;\r\n  animation-timing-function: linear;\r\n  background: white;\r\n  background: linear-gradient(to right, #eee 33%, #ddd 70%, #eee 90%);\r\n  background-size: 800px 104px;\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n  \r\n  \r\n  .sk_bg.big[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n  }\r\n  \r\n  \r\n  .sk_bg.small[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n  }\r\n  \r\n  \r\n  .sk_bg.small2[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n  }\r\n  \r\n  \r\n  @keyframes sk_bg_animation{\r\n    0%{background-position:-468px 0}\r\n    100%{background-position:468px 0}\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixtRUFBbUU7RUFDbkUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOzs7RUFHRTtJQUNFLGFBQWE7RUFDZjs7O0VBR0E7SUFDRSxZQUFZO0VBQ2Q7OztFQUdBO0lBQ0UsWUFBWTtFQUNkOzs7RUFHQTtJQUNFLEdBQUcsNEJBQTRCO0lBQy9CLEtBQUssMkJBQTJCO0VBQ2xDIiwiZmlsZSI6ImxvYWRpbmctaXRlbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2tfYmcge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNrX2JnX2FuaW1hdGlvbjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWVlIDMzJSwgI2RkZCA3MCUsICNlZWUgOTAlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDgwMHB4IDEwNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgLnNrX2JnLmJpZyB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2tfYmcuc21hbGwge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2tfYmcuc21hbGwyIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQGtleWZyYW1lcyBza19iZ19hbmltYXRpb257XHJcbiAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00NjhweCAwfVxyXG4gICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjQ2OHB4IDB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBza19iZ19hbmltYXRpb257XHJcbiAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi00NjhweCAwfVxyXG4gICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjQ2OHB4IDB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 1572:
/*!*********************************************!*\
  !*** ./src/app/models/enum/order-status.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatus": () => (/* binding */ OrderStatus)
/* harmony export */ });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Canceled"] = 0] = "Canceled";
    OrderStatus[OrderStatus["OnHold"] = 1] = "OnHold";
    OrderStatus[OrderStatus["PendingPayment"] = 2] = "PendingPayment";
    OrderStatus[OrderStatus["Completed"] = 3] = "Completed";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ 9162:
/*!*************************************************************************!*\
  !*** ./src/app/navbar/categories-navbar/categories-navbar.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesNavbarComponent": () => (/* binding */ CategoriesNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function (a1) { return ["/category", a1]; };
function CategoriesNavbarComponent_nav_0_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("solid-active", ctx_r1.isLinkActive(category_r2.Url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, category_r2.Url));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r2.Name);
} }
function CategoriesNavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CategoriesNavbarComponent_nav_0_li_3_Template, 3, 6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
class CategoriesNavbarComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe((result) => {
            this.categories = result.Items;
        });
    }
    isLinkActive(url) {
        if (!url) {
            return false;
        }
        const currentUrl = window.location.pathname;
        return currentUrl.endsWith(url); // Check if the current URL ends with the specified category URL
    }
}
CategoriesNavbarComponent.ɵfac = function CategoriesNavbarComponent_Factory(t) { return new (t || CategoriesNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
CategoriesNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesNavbarComponent, selectors: [["app-categories-navbar"]], decls: 1, vars: 1, consts: [["class", "bg-white navbar solid-hide-on-sm navbar-expand-md navbar-expand-lg p-0", 4, "ngIf"], [1, "bg-white", "navbar", "solid-hide-on-sm", "navbar-expand-md", "navbar-expand-lg", "p-0"], [1, "container", "container-sm"], [1, "navbar-nav", "w-100"], ["class", "solid-active nav-item solid-gray-text", 3, "solid-active", 4, "ngFor", "ngForOf"], [1, "solid-active", "nav-item", "solid-gray-text"], [1, "nav-link", "p-2", "solid-gray-text", 3, "routerLink"]], template: function CategoriesNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CategoriesNavbarComponent_nav_0_Template, 4, 1, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".solid-active[_ngcontent-%COMP%]{\r\n  border-bottom: 2px solid coral;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .solid-active[_ngcontent-%COMP%]{\r\n    border-right: 2px solid coral;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6ImNhdGVnb3JpZXMtbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29saWQtYWN0aXZle1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBjb3JhbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLnNvbGlkLWFjdGl2ZXtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGNvcmFsO1xyXG4gIH1cclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category.service */ 4655);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regular-navbar/regular-navbar.component */ 3059);
/* harmony import */ var _categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-navbar/categories-navbar.component */ 9162);







class NavbarComponent {
    constructor(authService, categoryService, toastr) {
        this.authService = authService;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.refreshState = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.id = this.authService.getLoggedUserId();
        this.username = this.authService.getLoggedUsername();
        // this.categoryService.getAllCategories().subscribe((result:ResponseListModel<Category>) => {
        //   this.categories = result.Items;
        // })
    }
    logout() {
        this.authService.logout();
        this.refreshState.emit();
        this.toastr.success("Success logout!");
        window.location.replace('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 3, vars: 2, consts: [[3, "isUserAuthenticated", "refreshState"], [1, "solid-hide-on-sm"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-regular-navbar", 0)(2, "app-categories-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isUserAuthenticated", ctx.isUserAuthenticated)("refreshState", ctx.refreshState);
    } }, directives: [_regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_2__.RegularNavbarComponent, _categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesNavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3059:
/*!*******************************************************************!*\
  !*** ./src/app/navbar/regular-navbar/regular-navbar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegularNavbarComponent": () => (/* binding */ RegularNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






function RegularNavbarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
const _c0 = function (a1) { return ["/profile", a1]; };
function RegularNavbarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31)(7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " My orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegularNavbarComponent_div_9_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r1.id));
} }
class RegularNavbarComponent {
    constructor(authService, categoryService) {
        this.authService = authService;
        this.categoryService = categoryService;
        this.refreshState = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.username = this.authService.getLoggedUsername();
        this.id = this.authService.getLoggedUserId();
    }
    logout() {
        this.authService.logout();
        this.refreshState.emit();
        window.location.replace('/');
    }
}
RegularNavbarComponent.ɵfac = function RegularNavbarComponent_Factory(t) { return new (t || RegularNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService)); };
RegularNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegularNavbarComponent, selectors: [["app-regular-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 37, vars: 5, consts: [[1, "navbar", "navbar-expand-md", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "/", 1, "navbar-brand", "flex-grow-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "solid-gray", "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "solid-button-hide  nav-item", 4, "ngIf"], [1, "hide-in-width-screen"], [1, "nav-item"], [1, "dropdown-divider"], [1, "nav-item", "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["routerLink", "/settings", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-cog"], ["routerLink", "/favourite", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-heart"], [1, "responsive-text"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-cart-shopping"], [1, "solid-button-sm-show", "hide-in-width-screen"], ["href", "#", 1, "nav-item", "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-s15", "fa-sign-in"], [1, "solid-button-hide", "nav-item"], [1, "nav-link", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "avatar", "dropdown-toggle"], [1, "fa", "fa-user"], [1, "px-1"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["routerLink", "/settings", 1, "dropdown-item"], ["routerLink", "/orders", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fa-solid", "fa-bag-shopping"], [1, "dropdown-item", 3, "click"]], template: function RegularNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ShoppingDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegularNavbarComponent_div_8_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegularNavbarComponent_div_9_Template, 20, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Profile Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Change Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "a", 16)(23, "i", 17)(24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Favourite");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegularNavbarComponent_Template_a_click_34_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUserAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUserAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.id));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".avatar[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    color: gray;\r\n    padding: 0px;\r\n}\r\n.whiteBackground[_ngcontent-%COMP%]{\r\n\tbackground-color: white;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tposition: relative;\r\n\twidth:auto;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: black;\r\n\tdisplay: block;\r\n\tfont: bold 12px/20px sans-serif;\r\n\tpadding: 10px 25px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\ttransition: all .25s ease;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n\tbackground: white;\r\n}\r\n#submenu[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 35px;\r\n\tvisibility: hidden;\r\n\tz-index: 1;\r\n}\r\nli[_ngcontent-%COMP%]:hover   ul#submenu[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop: 40px;\t\r\n\tvisibility: visible;\r\n}\r\n#submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: none;\r\n\twidth: 100%;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tbackground: #DF4B05;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tbackground-color:white;\r\n}\r\n.solid-gray[_ngcontent-%COMP%]:hover{\r\n\tbackground-color: coral;\r\n}\r\n@media (min-width: 768px){\r\n\t.solid-button-hide[_ngcontent-%COMP%]{\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.solid-button-sm-show[_ngcontent-%COMP%]{\r\n\t\ttext-align: none;\r\n\t}\r\n\t.hide-in-width-screen[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n@media (max-width: 767px){\r\n\t.solid-button-hide[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.solid-button-sm-show[_ngcontent-%COMP%]{\r\n\t\ttext-align: block;\r\n\t}\r\n\t.solid-container[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ3VsYXItbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUtyQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsT0FBTztDQUNQLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7QUFDQTtDQUNDLFVBQVU7Q0FDVixTQUFTLEVBQUUsMERBQTBEO0NBQ3JFLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7QUFDWjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUVBO0NBQ0M7RUFDQyxhQUFhO0NBQ2Q7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsYUFBYTtDQUNkO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxpQkFBaUI7Q0FDbEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjs7O0FBR0QiLCJmaWxlIjoicmVndWxhci1uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLndoaXRlQmFja2dyb3VuZHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZHJvcGRvd25tZW51IHVsLCAuZHJvcGRvd25tZW51IGxpIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG4uZHJvcGRvd25tZW51IHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kcm9wZG93bm1lbnUgbGkge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDphdXRvO1xyXG59XHJcbi5kcm9wZG93bm1lbnUgYSB7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQ6IGJvbGQgMTJweC8yMHB4IHNhbnMtc2VyaWY7XHJcblx0cGFkZGluZzogMTBweCAyNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuXHQtbXMtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZTtcclxuXHQtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbn1cclxuLmRyb3Bkb3dubWVudSBsaTpob3ZlciBhIHtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4jc3VibWVudSB7XHJcblx0bGVmdDogMDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDM1cHg7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxubGk6aG92ZXIgdWwjc3VibWVudSB7XHJcblx0b3BhY2l0eTogMTtcclxuXHR0b3A6IDQwcHg7XHQvKiBhZGp1c3QgdGhpcyBhcyBwZXIgdG9wIG5hdiBwYWRkaW5nIHRvcCAmIGJvdHRvbSBjb21lcyAqL1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuI3N1Ym1lbnUgbGkge1xyXG5cdGZsb2F0OiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbiNzdWJtZW51IGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICNERjRCMDU7XHJcbn1cclxuI3N1Ym1lbnUgYSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4uc29saWQtZ3JheTpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcclxuXHQuc29saWQtYnV0dG9uLWhpZGV7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHQuc29saWQtYnV0dG9uLXNtLXNob3d7XHJcblx0XHR0ZXh0LWFsaWduOiBub25lO1xyXG5cdH1cclxuXHQuaGlkZS1pbi13aWR0aC1zY3JlZW57XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG5cdC5zb2xpZC1idXR0b24taGlkZXtcclxuXHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG5cdC5zb2xpZC1idXR0b24tc20tc2hvd3tcclxuXHRcdHRleHQtYWxpZ246IGJsb2NrO1xyXG5cdH1cclxuXHQuc29saWQtY29udGFpbmVye1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cclxuXHRcclxufSJdfQ== */"] });


/***/ }),

/***/ 6661:
/*!********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailComponent": () => (/* binding */ OrderDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OrderDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderDetailComponent.ɵfac = function OrderDetailComponent_Factory(t) { return new (t || OrderDetailComponent)(); };
OrderDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailComponent, selectors: [["app-order-detail"]], decls: 2, vars: 0, template: function OrderDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "order-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1482:
/*!****************************************************!*\
  !*** ./src/app/order-grid/order-grid.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderGridComponent": () => (/* binding */ OrderGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/order.service */ 8132);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _convert_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../convert-date */ 5143);
/* harmony import */ var _order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-pipe */ 5080);







function OrderGridComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Active order");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderGridComponent_div_6_tr_15_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "orderStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, order_r3.OrderStatus));
} }
function OrderGridComponent_div_6_tr_15_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "orderStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, order_r3.OrderStatus));
} }
function OrderGridComponent_div_6_tr_15_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "orderStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, order_r3.OrderStatus));
} }
function OrderGridComponent_div_6_tr_15_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "orderStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, order_r3.OrderStatus));
} }
function OrderGridComponent_div_6_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "dateConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, OrderGridComponent_div_6_tr_15_td_8_Template, 3, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, OrderGridComponent_div_6_tr_15_td_9_Template, 3, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, OrderGridComponent_div_6_tr_15_td_10_Template, 3, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, OrderGridComponent_div_6_tr_15_td_11_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 7, order_r3.DateCreated) || "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](order_r3.NumberOfProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", (order_r3.TotalAmount == null ? null : order_r3.TotalAmount.toFixed(2)) || "/", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", order_r3.OrderStatus == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", order_r3.OrderStatus == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", order_r3.OrderStatus == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", order_r3.OrderStatus == 3);
} }
function OrderGridComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "My orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 5)(4, "thead")(5, "tr")(6, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Order date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Number of products");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, OrderGridComponent_div_6_tr_15_Template, 12, 9, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.orders);
} }
class OrderGridComponent {
    constructor(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
    }
    ngOnInit() {
        this.orderService.GetUserOrders(this.authService.getLoggedUserId()).subscribe((res) => {
            console.log(res);
            this.orders = res.Items;
        });
    }
}
OrderGridComponent.ɵfac = function OrderGridComponent_Factory(t) { return new (t || OrderGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
OrderGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrderGridComponent, selectors: [["app-order-grid"]], decls: 7, vars: 4, consts: [[1, "container"], [3, "isItem", "itemDetail"], [1, "card"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "table", "table-responsive-md", "table-hover"], ["scope", "col"], ["scope", "col", 1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "bg-danger text-white text-center", 4, "ngIf"], ["class", "bg-info text-white text-center", 4, "ngIf"], ["class", "bg-warning text-white text-center", 4, "ngIf"], ["class", "bg-success text-white text-center", 4, "ngIf"], [1, "bg-danger", "text-white", "text-center"], [1, "bg-info", "text-white", "text-center"], [1, "bg-warning", "text-white", "text-center"], [1, "bg-success", "text-white", "text-center"]], template: function OrderGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, OrderGridComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, OrderGridComponent_div_6_Template, 16, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isItem", false)("itemDetail", "My orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.orders);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_convert_date__WEBPACK_IMPORTED_MODULE_3__.DateConverter, _order_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5080:
/*!*******************************!*\
  !*** ./src/app/order-pipe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderStatusPipe": () => (/* binding */ OrderStatusPipe)
/* harmony export */ });
/* harmony import */ var _models_enum_order_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/enum/order-status */ 1572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class OrderStatusPipe {
    transform(value) {
        switch (value) {
            case _models_enum_order_status__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.Canceled:
                return 'Canceled';
            case _models_enum_order_status__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.OnHold:
                return 'On Hold';
            case _models_enum_order_status__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.PendingPayment:
                return 'Pending Payment';
            case _models_enum_order_status__WEBPACK_IMPORTED_MODULE_0__.OrderStatus.Completed:
                return 'Completed';
            default:
                return '';
        }
        return undefined;
    }
}
OrderStatusPipe.ɵfac = function OrderStatusPipe_Factory(t) { return new (t || OrderStatusPipe)(); };
OrderStatusPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "orderStatus", type: OrderStatusPipe, pure: true });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../by-pass-security */ 4391);






function ProductDetailComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 9)(7, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6)(17, "div", 12)(18, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailComponent_div_0_div_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r2.addToFavourite(ctx_r2.productDetail.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, ctx_r1.productDetail.Image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.productDetail.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", (ctx_r1.productDetail.Price == null ? null : ctx_r1.productDetail.Price.toFixed(2)) || "/", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.productDetail.Description);
} }
function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductDetailComponent_div_0_div_2_Template, 26, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", true)("itemDetail", ctx_r0.productDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.productDetail);
} }
class ProductDetailComponent {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.message = "";
        this.type = "";
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.productService.get(id).subscribe((result) => {
                    this.productDetail = result;
                });
            }
        });
    }
    addToFavourite(Id) {
        console.log("in favourite");
        this.message = 'Success message';
        this.type = 'success';
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "isItem", "itemDetail"], ["class", "card w-100", 4, "ngIf"], [1, "card", "w-100"], [1, "card-body"], [1, "row"], [1, "col-lg-6", "col-md-12", "text-md-center", "w-100", "h-100"], ["alt", "...", 1, "img-responsive", 3, "src"], [1, "container-sm", "py-sm-2", "col-lg-6", "col-md-6"], [1, "card-title"], [1, "card-text"], [1, "col-lg-5"], [1, "btn", "solid_button", "w-100"], [1, "col-lg-2"], [1, "btn", "solid_button", "w-100", 3, "click"], [1, "fa-regular", "fa-heart"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 3, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.productDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_2__.ByPassSecurityPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3296:
/*!**********************************************************!*\
  !*** ./src/app/products-grid/products-grid.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsGridComponent": () => (/* binding */ ProductsGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../by-pass-security */ 4391);






function ProductsGridComponent_div_1_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsGridComponent_div_1_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.addToFavourite(product_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductsGridComponent_div_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsGridComponent_div_1_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.deleteFavouriteProduct(product_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/product-detail", a1]; };
function ProductsGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0)(13, "span", 10)(14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsGridComponent_div_1_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const product_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.addToCart(product_r1.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 12)(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductsGridComponent_div_1_button_20_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProductsGridComponent_div_1_button_21_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, product_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, product_r1.Image), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", (product_r1.Price == null ? null : product_r1.Price.toFixed(2)) || "/", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.hasRemoveProductButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hasRemoveProductButton);
} }
class ProductsGridComponent {
    constructor(toastr, authService) {
        this.toastr = toastr;
        this.authService = authService;
        this.isLoading = true;
    }
    ngOnInit() {
    }
    addToFavourite(productId) {
        var userId = this.authService.getLoggedUserId();
        if (!userId) {
            window.location.replace('/login');
        }
        if (productId) {
            this.authService.addFavouriteProducts(userId, productId).subscribe(() => {
                this.toastr.success("Product added!");
            }, () => {
                this.toastr.warning("Product already in favourite products!");
            });
        }
        else {
            this.toastr.error("Product can't be added!");
        }
    }
    addToCart(productId) {
        var _a;
        var userId = this.authService.getLoggedUserId();
        if (!userId && !productId) {
            window.location.replace('/login');
        }
        else {
            (_a = this.authService.addProductToCart(this.authService.getLoggedUserId(), productId || null)) === null || _a === void 0 ? void 0 : _a.subscribe(() => {
                this.toastr.success("Successs added product to cart");
            });
        }
    }
    deleteFavouriteProduct(id) {
        var _a;
        if (id) {
            (_a = this.authService.deleteFavouriteProduct(this.authService.getLoggedUserId(), id)) === null || _a === void 0 ? void 0 : _a.subscribe(() => {
                this.toastr.success("Success deleted favourite product");
                this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result) => {
                    this.products = result.Items;
                });
            });
        }
    }
}
ProductsGridComponent.ɵfac = function ProductsGridComponent_Factory(t) { return new (t || ProductsGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProductsGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsGridComponent, selectors: [["app-products-grid"]], inputs: { hasRemoveProductButton: "hasRemoveProductButton", products: "products" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "py-lg-2 py-md-2 py-sm-2 col-sm-6 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "py-lg-2", "py-md-2", "py-sm-2", "col-sm-6", "col-md-6", "col-lg-4"], [1, "shop__thumb", "h-100"], [3, "routerLink"], [1, "shop-thumb__img"], [1, "img-responsive", "m-auto", 3, "src"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"], [1, "col-lg-8", "col-md-6", "col", "p-2"], [1, "btn", "h-100", "w-100", "responsive-button", "solid_button", 3, "click"], [1, "d-none", "text-uppercase", "strong", "d-lg-block"], [1, "d-block", "d-lg-none", "fa-solid", "fa-cart-shopping"], [1, "col-lg-4", "col-md-6", "col", "p-2"], ["class", "btn h-100 w-100 solid_favourite", 3, "click", 4, "ngIf"], [1, "btn", "h-100", "w-100", "solid_favourite", 3, "click"], [1, "fa-regular", "fa-heart"], [1, "fa-solid", "fa-trash"]], template: function ProductsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsGridComponent_div_1_Template, 22, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_1__.ByPassSecurityPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy1ncmlkLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);




function ProfileComponent_app_breadcrumb_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-breadcrumb", 3);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isItem", false)("itemDetail", "Account");
} }
function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Profile image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "div", 5)(20, "div", 14)(21, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5)(28, "div", 14)(29, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5)(36, "div", 14)(37, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5)(44, "div", 14)(45, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 5)(52, "div", 14)(53, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 22)(59, "div", 13)(60, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Payment info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "No Payment Information Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r1.userDetails.FirstName, " ", ctx_r1.userDetails.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.userDetails.Email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.userDetails.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.userDetails.State, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.userDetails.Address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.userDetails.Description, " ");
} }
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        if (!this.authService.getLoggedUserId()) {
            window.location.replace("/error-404");
        }
        this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response) => {
            this.userDetails = response;
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [[1, "container"], [3, "isItem", "itemDetail", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "account", "role", "tabpanel", 4, "ngIf"], [3, "isItem", "itemDetail"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-lg-4"], [1, "card", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-user-circle", "fa-10x"], [1, "py-3", "text-capitalize"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "col-sm-3"], [1, "mb-0"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "col-sm-9", "text-secondary"], [1, "fa-solid", "fa-person"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-location-dot"], [1, "fa-solid", "fa-pencil"], [1, "card", "mt-sm-3"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileComponent_app_breadcrumb_1_Template, 1, 2, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 65, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);




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
    registerUser() {
    }
    addProductToCart(userId, productId) {
        if (userId && productId) {
            return this.http.post(this.baseUrl + '/UserAddProductToCart/', { userId: userId, productId: productId });
        }
        else {
            return null;
        }
    }
    getUserCartProducts(userId) {
        if (userId) {
            return this.http.post(this.baseUrl + '/GetUserCartProducts/', { userId: userId });
        }
        else {
            return null;
        }
    }
    getFavouriteProducts(Id) {
        return this.http.post(this.baseUrl + '/GetUserFavouriteProducts/', { userId: Id });
    }
    addFavouriteProducts(userId, productId) {
        if (userId && productId) {
            return this.http.post(this.baseUrl + '/UserAddFavouriteProduct/', { userId: userId, productId: productId });
        }
        else {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
        }
    }
    deleteFavouriteProduct(userId, productId) {
        if (userId && productId) {
            return this.http.post(this.baseUrl + '/RemoveFavuriteProduct/', { userId: userId, productId: productId });
        }
        else {
            return null;
        }
    }
    removeCartDetail(detailId) {
        if (detailId) {
            return this.http.post(this.baseUrl + '/RemoveCartDetail/', { detailsId: detailId });
        }
        else {
            return;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4655:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class CategoryService {
    constructor(http) {
        this.http = http;
        this.baseApi = "api/";
    }
    getAllCategories() {
        return this.http.post(this.baseApi + 'Categories/AllCategories', null);
    }
    getProductsByCategoryUrl(Url) {
        return this.http.post(this.baseApi + 'Categories/GetProductsByCategory', { Url: Url });
    }
    GetCategoryByUrl(Url) {
        return this.http.post(this.baseApi + 'Categories/GetCategoryByUrl', { Url: Url });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8132:
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);


class OrderService {
    constructor(http) {
        this.http = http;
        this.baseApi = "api/";
    }
    GetUserOrders(userId) {
        return this.http.post(this.baseApi + '/Identity/GetUserOrders', { userId: userId });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _countries_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../countries/countries */ 9010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4101);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 6723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);







function SettingsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Public info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 23)(6, "div", 24)(7, "div", 25)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_18_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.userDetails.FirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 25)(12, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_18_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.userDetails.LastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14)(16, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_18_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.userDetails.Email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 31)(20, "div", 14)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_18_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.userDetails.Username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 23)(25, "div", 14)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "textarea", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_18_Template_textarea_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.userDetails.Description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_div_18_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.updateUserPublicInfo(ctx_r8.userDetails.Username, ctx_r8.userDetails.Description); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userDetails.FirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userDetails.LastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userDetails.Email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userDetails.Username);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.userDetails.Description);
} }
function SettingsComponent_div_21_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](country_r10.name);
} }
function SettingsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Private info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 14)(5, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.userDetails.Address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 24)(9, "div", 25)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.userDetails.City = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 38)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "select", 39)(17, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SettingsComponent_div_21_option_19_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 42)(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Zip");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_21_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.userDetails.ZipCode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.Address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.City);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.countriesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r1.userDetails.ZipCode);
} }
const _c0 = function (a0) { return { "solid-active": a0 }; };
const _c1 = function (a0) { return { "show active": a0 }; };
class SettingsComponent {
    constructor(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.countriesList = _countries_countries__WEBPACK_IMPORTED_MODULE_0__.countries;
        this.activeTab = 'account';
    }
    ngOnInit() {
        this.authService.getUserDetails(this.authService.getLoggedUserId()).subscribe((response) => {
            this.userDetails = response;
        });
    }
    updateUserPublicInfo(username, description) {
        this.toastr.success('Update info');
    }
    switchTab(tab) {
        this.activeTab = tab;
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 52, vars: 28, consts: [[1, "container"], [3, "isItem", "itemDetail"], [1, "row"], [1, "col-md-4", "col-xl-4"], [1, "card"], [1, ""], [1, "list-group-item", "btn", "left-solid-text", "nav-link", 3, "ngClass", "click"], [1, "col-md-8", "col-xl-8"], [1, "tab-content"], ["id", "account", 1, "tab-pane", "fade", 3, "ngClass"], ["class", "card-body", 4, "ngIf"], ["id", "address", 1, "tab-pane", "fade", 3, "ngClass"], ["id", "password", 1, "tab-pane", "fade", 3, "ngClass"], [1, "card-body"], [1, "form-group"], ["for", "inputPasswordCurrent"], ["type", "password", "id", "inputPasswordCurrent", 1, "form-control"], ["for", "inputPasswordNew"], ["type", "password", "id", "inputPasswordNew", 1, "form-control"], ["for", "inputPasswordNew2"], ["type", "password", "id", "inputPasswordNew2", 1, "form-control"], ["type", "submit", 1, "btn", "solid_button_orange"], ["id", "deleteaccount", 1, "tab-pane", "fade", 3, "ngClass"], [1, "col-md-12"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "text", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-6"], ["type", "text", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "solid_button_orange", 3, "click"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-4"], ["id", "inputState", 1, "form-control"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "col-md-2"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_6_listener() { return ctx.switchTab("account"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Profile Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_8_listener() { return ctx.switchTab("address"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Address Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_10_listener() { return ctx.switchTab("password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SettingsComponent_Template_a_click_12_listener() { return ctx.switchTab("deleteaccount"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Delete account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "div", 8)(16, "div", 9)(17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SettingsComponent_div_18_Template, 31, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SettingsComponent_div_21_Template, 26, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12)(23, "div", 4)(24, "div", 13)(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14)(29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 14)(33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 14)(37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Verify password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 22)(43, "div", 4)(44, "div", 13)(45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 14)(49, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Delete account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", false)("itemDetail", "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.activeTab === "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.activeTab === "address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, ctx.activeTab === "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](18, _c0, ctx.activeTab === "deleteaccount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, ctx.activeTab === "account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c1, ctx.activeTab === "address"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c1, ctx.activeTab === "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](26, _c1, ctx.activeTab === "deleteaccount"));
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".sidebar[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 150px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    padding-top: 40px;\r\n    background-color: lightblue;\r\n    }\r\n    \r\n    .sidebar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    font-size: 24px;\r\n    display: block;\r\n    }\r\n    \r\n    .body-text[_ngcontent-%COMP%] {\r\n    margin-left: 150px;\r\n    font-size: 18px;\r\n    }\r\n    \r\n    .my-tab[_ngcontent-%COMP%] {\r\n        background-color: lightgray;\r\n        border: none;\r\n        border-radius: 0;\r\n      }\r\n    \r\n    .my-tab.active[_ngcontent-%COMP%] {\r\n        background-color: teal;\r\n        color: white;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0I7O0lBRUE7SUFDQSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZDs7SUFFQTtJQUNBLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7O0lBSUE7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtRQUNaLGdCQUFnQjtNQUNsQjs7SUFFQTtRQUNFLHNCQUFzQjtRQUN0QixZQUFZO01BQ2QiLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGViYXIgZGl2IHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9keS10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5teS10YWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLm15LXRhYi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9Il19 */"] });


/***/ }),

/***/ 7579:
/*!******************************************************!*\
  !*** ./src/app/side-filter/side-filter.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideFilterComponent": () => (/* binding */ SideFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SideFilterComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideFilterComponent.ɵfac = function SideFilterComponent_Factory(t) { return new (t || SideFilterComponent)(); };
SideFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideFilterComponent, selectors: [["app-side-filter"]], decls: 5, vars: 0, consts: [[1, "card", "h-100"], [1, "card-body", "text-center"]], template: function SideFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Place for filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlLWZpbHRlci5jb21wb25lbnQuY3NzIn0= */"] });


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
/******/ __webpack_require__.O(0, [736], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map