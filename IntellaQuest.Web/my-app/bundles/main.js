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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 4202);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 5000);













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
    { path: '**', redirectTo: '/error-404' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);
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
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".right[_ngcontent-%COMP%]{\r\n\tpadding-right: 10%\r\n}\r\n.left[_ngcontent-%COMP%]{\r\n\tpadding-left: 10%;\r\n}"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ 3175);
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
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 5000);



























const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService,
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__.JWT_OPTIONS, useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__.JWT_OPTIONS },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__.JwtHelperService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            //RouterModule.forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
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
        _category_products_category_products_component__WEBPACK_IMPORTED_MODULE_14__.CategoryProductsComponent,
        _navbar_categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_15__.CategoriesNavbarComponent,
        _navbar_regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_16__.RegularNavbarComponent,
        _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_19__.ProductsGridComponent,
        _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent,
        _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_21__.BreadcrumbComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3075);





function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
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
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { isAuthenticated: "isAuthenticated" }, decls: 23, vars: 3, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form-label"], [1, "form-group"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-floating", "mb-3"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "solid_button_orange", "w-100", 3, "click"], [1, "card-footer", "text-muted"], ["href", "/register"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3075);




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
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 5, consts: [[1, "container", "p-4"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-10", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "form-label"], [1, "form-group"], [1, "form-floating", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "solid_button_orange", "w-100", 3, "click"], [1, "card-footer", "text-muted"], ["href", "/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [""] });


/***/ }),

/***/ 723:
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);



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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2313);


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

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

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
    } }, styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products-grid/products-grid.component */ 3296);






function CategoryProductsComponent_app_breadcrumb_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", false)("itemDetail", ctx_r0.category.Name);
} }
class CategoryProductsComponent {
    constructor(route, categoryService) {
        this.route = route;
        this.categoryService = categoryService;
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
                });
            }
        });
    }
}
CategoryProductsComponent.ɵfac = function CategoryProductsComponent_Factory(t) { return new (t || CategoryProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService)); };
CategoryProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CategoryProductsComponent, selectors: [["app-category-products"]], decls: 15, vars: 2, consts: [[1, "container"], [3, "isItem", "itemDetail", 4, "ngIf"], [1, "row"], [1, "col-lg-3"], [1, "card", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-user-circle", "fa-10x"], [1, "py-3", "text-capitalize"], [1, "col-lg-9"], [3, "products"], [3, "isItem", "itemDetail"]], template: function CategoryProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CategoryProductsComponent_app_breadcrumb_1_Template, 1, 2, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Profile image");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Jao brate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-products-grid", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", ctx.products == null ? null : ctx.products.Items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__.ProductsGridComponent], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);


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
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../by-pass-security */ 4391);





function FavouriteComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 9)(4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 13)(10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "span", 15)(14, "button", 16)(15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 19)(19, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "product-detail/", product_r3.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, product_r3.Image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r3.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", (product_r3.Price == null ? null : product_r3.Price.toFixed(2)) || "/", "");
} }
function FavouriteComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FavouriteComponent_div_2_div_1_Template, 21, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.responseModel == null ? null : ctx_r0.responseModel.Items);
} }
function FavouriteComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "List of favourite product is empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 28)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Keep buying");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
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
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
FavouriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FavouriteComponent, selectors: [["app-favourite"]], decls: 4, vars: 4, consts: [[1, "container"], [3, "isItem", "itemDetail"], ["class", "row py-3", 4, "ngIf"], [4, "ngIf"], [1, "row", "py-3"], ["class", "py-lg-2 py-md-2 py-sm-2 col-sm-6 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "py-lg-2", "py-md-2", "py-sm-2", "col-sm-6", "col-md-6", "col-lg-4"], [1, "shop__thumb", "h-100"], [1, "row"], [3, "href"], [1, "shop-thumb__img"], [1, "img-responsive", "m-auto", 3, "src"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"], [1, "col-lg-8", "col-md-6", "col", "p-2"], [1, "btn", "h-100", "w-100", "responsive-button", "solid_button"], [1, "d-none", "text-uppercase", "strong", "d-lg-block"], [1, "d-block", "d-lg-none", "fa-solid", "fa-cart-shopping"], [1, "col-lg-4", "col-md-6", "col", "p-2"], [1, "btn", "h-100", "w-100", "solid_favourite"], [1, "fa-regular", "fa-heart"], [1, "text-center"], [1, "card", 2, "text-align", "-webkit-center"], [1, "card-body"], [1, "circle"], [1, "fa-regular", "fa-5x", "fa-heart"], [1, "p-3"], ["href", "/", 1, "solid_color"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FavouriteComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FavouriteComponent_div_3_Template, 12, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", false)("itemDetail", "Favourite Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.responseModel == null ? null : ctx.responseModel.TotalItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.responseModel == null ? null : ctx.responseModel.TotalItems));
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_2__.ByPassSecurityPipe], styles: [".circle[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 200px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    border-radius: 50%; \r\n    background-color: rgb(230 82 40 / 0.25);\r\n    color: coral;\r\n  }"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 9808);


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);

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
    } }, styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ 276);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products-grid/products-grid.component */ 3296);







const _c0 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(router, productService, sanitizer) {
        this.router = router;
        this.productService = productService;
        this.sanitizer = sanitizer;
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
        if (this.activeSorting === 'Popular') {
            this.router.navigate(['sort/popular']);
        }
        this.productService.getAll(this.productFilter).subscribe((result) => {
            this.products = result.Items;
            this.totalItems = result.TotalItems;
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
    getImage(image) {
        var returnImage = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + image);
        return returnImage;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 21, vars: 16, consts: [[1, "container", "pt-3"], [1, "row"], [1, "shop__sorting"], [3, "ngClass", "click"], [1, "btn", 3, "click"], [3, "products"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div")(4, "ul", 2)(5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_5_listener() { return ctx.changeSorting("Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() { return ctx.changeRoute("popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_8_listener() { return ctx.changeSorting("Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_9_listener() { return ctx.changeRoute("newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_11_listener() { return ctx.changeSorting("BestSelling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_12_listener() { return ctx.changeRoute("best-selling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Best Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_14_listener() { return ctx.changeSorting("PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() { return ctx.changeRoute("price-low"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Price (low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_17_listener() { return ctx.changeSorting("PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() { return ctx.changeRoute("price-high"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Price (high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-products-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, ctx.activeSorting === "Popular"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.activeSorting === "Newest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.activeSorting === "BestSelling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, ctx.activeSorting === "PriceLow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, ctx.activeSorting === "PriceHigh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("products", ctx.products);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _products_grid_products_grid_component__WEBPACK_IMPORTED_MODULE_2__.ProductsGridComponent], styles: ["body[_ngcontent-%COMP%]{margin-top:20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.shop-index__section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop-index__section.alt[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  border-width: 1px 0 1px 0;\r\n  border-style: solid;\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n  font-family: 'Questrial', sans-serif;\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n  margin-bottom: 60px;\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop__slideshow[_ngcontent-%COMP%] {\r\n  margin-top: -18px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item__container[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item-container__inner[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.shop-slideshow__heading[_ngcontent-%COMP%] {\r\n  margin: 0 0 20px 0;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 46px;\r\n  line-height: 1.2;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  border-radius: 0;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%]:hover, .shop-slideshow__btn[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  background-color: white;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    padding: 0 30px;\r\n    text-align: center;\r\n  }\r\n  .shop-slideshow__heading[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n  .shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  width: 30px;\r\n  height: 70px;\r\n  opacity: 0;\r\n  transform: translateY(-50%);\r\n  transition: opacity .3s;\r\n}\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%]:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.shop-slideshow__control[data-slide=\"next\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 10px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]:hover   .shop-slideshow__control[_ngcontent-%COMP%] {\r\n  opacity: .3;\r\n}\r\n\r\n\r\n\r\n.shop-index-features__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index-features__icon[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.shop-index-blog__post[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n \r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.shop-index-blog__body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shop-index-blog__content[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  color: #777777;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .shop-index-blog__img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n    left: 50%;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 60px;\r\n    border-right: 0;\r\n  }\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-bottom: 0;\r\n  }\r\n  .shop-index-blog__post[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 42px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 11px 12px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 11px 30px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    text-align: right;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border-radius: 21px 0 0 21px;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    margin-left: -3px;\r\n    border-radius: 0 21px 21px 0;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-item__info[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  background-color: white;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-item-cart__title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.shop-item-cart__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  color: #F7C41F;\r\n}\r\n\r\n.shop-item__intro[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.shop-item__add[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.shop-item__img[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-item-img__main[_ngcontent-%COMP%] {\r\n  width: calc(100% - 110px);\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  opacity: .5;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover, .shop-item-img__aside[_ngcontent-%COMP%]    > img.active[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-item-img__main[_ngcontent-%COMP%] {\r\n    width: calc(100% - 60px);\r\n  }\r\n  .shop-item-img__aside[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__price[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n.shop-filter__price[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__color[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 2px 2px 0;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.shop__sorting[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: -20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  text-align: right;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 15px 15px;\r\n  margin-bottom: -1px;\r\n  border-bottom: 2px solid transparent;\r\n  color: #757575;\r\n  transition: all .05s linear;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #ed3e49;\r\n  border-bottom-color: #ed3e49;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__sorting[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-bottom: 0;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n\r\n\r\n.checkout__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.checkout-cart__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.checkout-cart-item__img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.checkout-cart-item__content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.checkout-cart-item__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.checkout-cart-item__footer[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.checkout-cart-item__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  border-top: 1px solid #e9e9e9;\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding: 40px 40px;\r\n  border-right: 1px solid #e9e9e9;\r\n  color: #aaa;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n  color: #333333;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-total__block[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 15px 20px;\r\n    border: 0;\r\n    border-top: 1px solid #e9e9e9;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #e9e9e9;\r\n  }\r\n}\r\n\r\n.checkout-total__heading[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.checkout-total__price[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 9px 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.checkout__submit[_ngcontent-%COMP%] {\r\n  padding: 15px 40px;\r\n}\r\n\r\n\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d9534f;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #b52b27;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  color: #d9534f;\r\n}\r\n\r\n\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background-color: #eee;\r\n  text-align: center;\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n}\r\n\r\n\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 10px solid #eee;\r\n  background-color: #333333;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  border-width: 7px;\r\n}\r\n\r\n\r\n\r\n.input_qty[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):last-child {\r\n  float: right;\r\n  border-right: 0;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > output[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: inherit;\r\n  padding: 0;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 20px;\r\n  border: 0;\r\n  line-height: 20px;\r\n  color: #ccc;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 0 !important;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-weight: 600;\r\n}\r\n\r\n.solid-active[_ngcontent-%COMP%]{\r\n  color:coral;\r\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);




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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".solid-active[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid coral;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .solid-active[_ngcontent-%COMP%]{\r\n    border-right: 1px solid coral;\r\n  }\r\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category.service */ 4655);
/* harmony import */ var _regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regular-navbar/regular-navbar.component */ 3059);
/* harmony import */ var _categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-navbar/categories-navbar.component */ 9162);






class NavbarComponent {
    constructor(authService, categoryService) {
        this.authService = authService;
        this.categoryService = categoryService;
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
        window.location.replace('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 3, vars: 2, consts: [[3, "isUserAuthenticated", "refreshState"], [1, "solid-hide-on-sm"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-regular-navbar", 0)(2, "app-categories-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isUserAuthenticated", ctx.isUserAuthenticated)("refreshState", ctx.refreshState);
    } }, directives: [_regular_navbar_regular_navbar_component__WEBPACK_IMPORTED_MODULE_2__.RegularNavbarComponent, _categories_navbar_categories_navbar_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesNavbarComponent], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ 4655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);






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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegularNavbarComponent_div_9_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Logout ");
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
    }
    logout() {
        this.authService.logout();
        this.refreshState.emit();
        window.location.replace('/');
    }
}
RegularNavbarComponent.ɵfac = function RegularNavbarComponent_Factory(t) { return new (t || RegularNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__.CategoryService)); };
RegularNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegularNavbarComponent, selectors: [["app-regular-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 37, vars: 5, consts: [[1, "navbar", "navbar-expand-md", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "flex-grow-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "solid-gray", "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "solid-button-hide  nav-item", 4, "ngIf"], [1, "hide-in-width-screen"], [1, "nav-item"], [1, "dropdown-divider"], [1, "nav-item", "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["routerLink", "/settings", 1, "nav-item", "nav-link"], ["aria-hidden", "true", 1, "fa", "fa-cog"], ["routerLink", "/favourite", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-heart"], [1, "responsive-text"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-cart-shopping"], [1, "solid-button-sm-show", "hide-in-width-screen"], ["href", "#", 1, "nav-item", "nav-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-s15", "fa-sign-in"], [1, "solid-button-hide", "nav-item"], [1, "nav-link", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "avatar", "dropdown-toggle"], [1, "fa", "fa-user"], [1, "px-1"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], ["routerLink", "/settings", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", 3, "click"]], template: function RegularNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ShoppingDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegularNavbarComponent_div_8_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegularNavbarComponent_div_9_Template, 17, 4, "div", 8);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".avatar[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    color: gray;\r\n    padding: 0px;\r\n}\r\n.whiteBackground[_ngcontent-%COMP%]{\r\n\tbackground-color: white;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\twidth: 100%;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\tposition: relative;\r\n\twidth:auto;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: black;\r\n\tdisplay: block;\r\n\tfont: bold 12px/20px sans-serif;\r\n\tpadding: 10px 25px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\ttransition: all .25s ease;\r\n}\r\n.dropdownmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n\tbackground: white;\r\n}\r\n#submenu[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 35px;\r\n\tvisibility: hidden;\r\n\tz-index: 1;\r\n}\r\nli[_ngcontent-%COMP%]:hover   ul#submenu[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttop: 40px;\t\r\n\tvisibility: visible;\r\n}\r\n#submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfloat: none;\r\n\twidth: 100%;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tbackground: #DF4B05;\r\n}\r\n#submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tbackground-color:white;\r\n}\r\n.solid-gray[_ngcontent-%COMP%]:hover{\r\n\tbackground-color: coral;\r\n}\r\n@media (min-width: 768px){\r\n\t.solid-button-hide[_ngcontent-%COMP%]{\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.solid-button-sm-show[_ngcontent-%COMP%]{\r\n\t\ttext-align: none;\r\n\t}\r\n\t.hide-in-width-screen[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n@media (max-width: 767px){\r\n\t.solid-button-hide[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.solid-button-sm-show[_ngcontent-%COMP%]{\r\n\t\ttext-align: block;\r\n\t}\r\n\t.solid-container[_ngcontent-%COMP%]{\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t\r\n}"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../by-pass-security */ 4391);






function ProductDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-breadcrumb", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8)(9, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "div", 11)(17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isItem", true)("itemDetail", ctx_r0.productDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, ctx_r0.productDetail.Image), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.productDetail.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.productDetail.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r0.productDetail.Price == null ? null : ctx_r0.productDetail.Price.toFixed(2)) || "/");
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
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [3, "isItem", "itemDetail"], [1, "card", "w-100"], [1, "card-body"], [1, "row"], [1, "col-lg-6", "col-md-12", "text-md-center", "w-100", "h-100"], ["alt", "...", 1, "img-responsive", 3, "src"], [1, "container-sm", "py-sm-2", "col-lg-6", "col-md-12"], [1, "card-title"], [1, "card-text"], [1, "col-lg-5"], [1, "btn", "solid_button", "w-100"], [1, "col-lg-2"], [1, "fa-regular", "fa-heart"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProductDetailComponent_div_0_Template, 25, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.productDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_2__.ByPassSecurityPipe], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _by_pass_security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../by-pass-security */ 4391);



function ProductsGridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "byPassSecurity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 0)(13, "span", 10)(14, "button", 11)(15, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14)(19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "product-detail/", product_r1.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, product_r1.Image), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", (product_r1.Price == null ? null : product_r1.Price.toFixed(2)) || "/", "");
} }
class ProductsGridComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsGridComponent.ɵfac = function ProductsGridComponent_Factory(t) { return new (t || ProductsGridComponent)(); };
ProductsGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsGridComponent, selectors: [["app-products-grid"]], inputs: { products: "products" }, decls: 2, vars: 1, consts: [[1, "row"], ["class", "py-lg-2 py-md-2 py-sm-2 col-sm-6 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "py-lg-2", "py-md-2", "py-sm-2", "col-sm-6", "col-md-6", "col-lg-4"], [1, "shop__thumb", "h-100"], [3, "href"], [1, "shop-thumb__img"], [1, "img-responsive", "m-auto", 3, "src"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"], [1, "col-lg-8", "col-md-6", "col", "p-2"], [1, "btn", "h-100", "w-100", "responsive-button", "solid_button"], [1, "d-none", "text-uppercase", "strong", "d-lg-block"], [1, "d-block", "d-lg-none", "fa-solid", "fa-cart-shopping"], [1, "col-lg-4", "col-md-6", "col", "p-2"], [1, "btn", "h-100", "w-100", "solid_favourite"], [1, "fa-regular", "fa-heart"]], template: function ProductsGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsGridComponent_div_1_Template, 21, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_by_pass_security__WEBPACK_IMPORTED_MODULE_0__.ByPassSecurityPipe], styles: [""] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 9808);




function ProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Profile image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "div", 4)(20, "div", 13)(21, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 4)(28, "div", 13)(29, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4)(36, "div", 13)(37, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 4)(44, "div", 13)(45, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 4)(52, "div", 13)(53, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 21)(59, "div", 12)(60, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Payment info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "No Payment Information Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.userDetails.FirstName, " ", ctx_r0.userDetails.LastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.Email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.Username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.State, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.Address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.userDetails.Description, " ");
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
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 3, consts: [[1, "container"], [3, "isItem", "itemDetail"], ["class", "tab-pane fade show active", "id", "account", "role", "tabpanel", 4, "ngIf"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "row"], [1, "col-lg-4"], [1, "card", "h-100"], [1, "card-body", "text-center"], [1, "fas", "fa-user-circle", "fa-10x"], [1, "py-3", "text-capitalize"], [1, "col-lg-8"], [1, "card"], [1, "card-body"], [1, "col-sm-3"], [1, "mb-0"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "col-sm-9", "text-secondary"], [1, "fa-solid", "fa-person"], [1, "fa-solid", "fa-globe"], [1, "fa-solid", "fa-location-dot"], [1, "fa-solid", "fa-pencil"], [1, "card", "mt-sm-3"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 65, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isItem", false)("itemDetail", "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userDetails);
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [""] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 520);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 3175);




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
    getFavouriteProducts(Id) {
        return this.http.post(this.baseUrl + '/GetUserFavouriteProducts/', { userId: Id });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 520);


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

/***/ 6082:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 520);


class ProductService {
    constructor(http) {
        this.http = http;
        this.baseApi = "api/";
    }
    getAll(filter) {
        return this.http.post(this.baseApi + 'products/All', filter);
    }
    getImage(id) {
        return this.http.post(this.baseApi + '/products/GetProductImage/' + id, JSON);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 723);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3075);



class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 102, vars: 2, consts: [[1, "container", "pt-3"], [3, "isItem", "itemDetail"], [1, "row"], [1, "col-md-5", "col-xl-4"], [1, "card"], ["role", "tablist", 1, "list-group", "list-group-flush"], ["data-toggle", "list", "href", "#account", "role", "tab", 1, "list-group-item", "list-group-item-action", "solid-active"], ["data-toggle", "list", "href", "#password", "role", "tab", 1, "list-group-item", "list-group-item-action"], ["data-toggle", "list", "href", "#", "role", "tab", 1, "list-group-item", "list-group-item-action"], [1, "col-md-7", "col-xl-8"], [1, "tab-content"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "col-md-8"], [1, "form-group"], ["for", "inputUsername"], ["type", "text", "id", "inputUsername", "placeholder", "Username", 1, "form-control"], ["rows", "2", "id", "inputBio", "placeholder", "Tell something about yourself", 1, "form-control"], ["type", "submit", 1, "btn", "solid_button_orange"], [1, "card", "mt-3"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputFirstName"], ["type", "text", "id", "inputFirstName", "placeholder", "First name", 1, "form-control"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last name", 1, "form-control"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["id", "password", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card-title"], ["for", "inputPasswordCurrent"], ["type", "password", "id", "inputPasswordCurrent", 1, "form-control"], ["href", "#"], ["for", "inputPasswordNew"], ["type", "password", "id", "inputPasswordNew", 1, "form-control"], ["for", "inputPasswordNew2"], ["type", "password", "id", "inputPasswordNew2", 1, "form-control"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Profile Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Delete account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 4)(16, "div", 12)(17, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Public info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "form")(21, "div", 2)(22, "div", 15)(23, "div", 16)(24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16)(28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21)(34, "div", 12)(35, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Private info");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "form")(39, "div", 22)(40, "div", 23)(41, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23)(45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16)(49, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 16)(53, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16)(57, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22)(61, "div", 23)(62, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 36)(66, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "select", 38)(69, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 40)(74, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 43)(80, "div", 4)(81, "div", 14)(82, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "form")(85, "div", 16)(86, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "small")(90, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 16)(93, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 16)(97, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Verify password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isItem", false)("itemDetail", "Settings");
    } }, directives: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"]], styles: [""] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
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