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
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 9);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'search?q=', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent },
    { path: 'favourite', component: _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_5__.FavouriteComponent },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent },
    { path: 'product/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__.ProductDetailComponent },
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
        this.refreshState();
    }
    refreshState() {
        this.isUserAuthenticated = this.authService.isAuthenticated();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "isUserAuthenticated", "refreshState"], [1, "left", "right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("refreshState", function AppComponent_Template_app_navbar_refreshState_0_listener() { return ctx.refreshState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 6804);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/product.service */ 6082);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ 6630);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favourite/favourite.component */ 6499);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ 4586);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 9);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);



















const routes = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
        _services_product_service__WEBPACK_IMPORTED_MODULE_8__.ProductService,
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JWT_OPTIONS, useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JWT_OPTIONS },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JwtHelperService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            //RouterModule.forRoot(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__.CartComponent,
        _favourite_favourite_component__WEBPACK_IMPORTED_MODULE_11__.FavouriteComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__.SettingsComponent,
        _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__.ProductDetailComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FavouriteComponent {
    constructor() { }
    ngOnInit() {
    }
}
FavouriteComponent.ɵfac = function FavouriteComponent_Factory(t) { return new (t || FavouriteComponent)(); };
FavouriteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavouriteComponent, selectors: [["app-favourite"]], decls: 2, vars: 0, consts: [[1, "container", "pt-3"]], template: function FavouriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " favourite works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXZvdXJpdGUuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/product.service */ 6082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function HomeComponent_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "a", 57)(3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 65)(8, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r1.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", product_r1.Price.toFixed(2), "");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(router, route, productService) {
        this.router = router;
        this.route = route;
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
        this.route.queryParams.subscribe(params => {
            this.productFilter = params;
            this.queryParam = this.removeDuplicateParams(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams({ fromObject: params }).toString());
            console.log(this.queryParam);
            if (params['SortName'] || params['SortName'][0]) {
                this.activeSorting = params['SortName'];
            }
        });
        this.productService.getAll(this.productFilter).subscribe(products => {
            this.products = products.Items;
            this.totalItems = products.recordsTotal;
        });
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 129, vars: 16, consts: [[1, "container", "pt-3"], [1, "row"], [1, "col-sm-4", "col-md-3"], [1, "well"], [1, "col-sm-12"], [1, "input-group"], ["type", "text", "placeholder", "Search products...", 1, "form-control"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "shop__filter"], [1, "headline"], [1, "radio"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_1", "value", "", "checked", ""], ["for", "shop-filter-price_1"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_2", "value", ""], ["for", "shop-filter-price_2"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_3", "value", ""], ["for", "shop-filter-price_3"], ["type", "radio", "name", "shop-filter__price", "id", "shop-filter-price_4", "value", "specify"], ["for", "shop-filter-price_4"], [1, "form-group", "shop-filter__price"], [1, "col-xs-4"], ["for", "shop-filter-price_from", 1, "sr-only"], ["id", "shop-filter-price_from", "type", "number", "min", "0", "placeholder", "From", "disabled", "", 1, "form-control"], ["for", "shop-filter-price_to", 1, "sr-only"], ["id", "shop-filter-price_to", "type", "number", "min", "0", "placeholder", "To", "disabled", "", 1, "form-control"], ["type", "submit", "disabled", "", 1, "btn", "btn-block", "btn-default"], [1, "checkbox"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_1"], ["for", "shop-filter-checkbox_1"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_2"], ["for", "shop-filter-checkbox_2"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_3"], ["for", "shop-filter-checkbox_3"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_4"], ["for", "shop-filter-checkbox_4"], ["type", "checkbox", "value", "", "id", "shop-filter-checkbox_5"], ["for", "shop-filter-checkbox_5"], [1, "shop-filter__color"], ["type", "text", "id", "shop-filter-color_1", "value", "", "data-input-color", "black"], ["for", "shop-filter-color_1", 2, "background-color", "black"], ["type", "text", "id", "shop-filter-color_2", "value", "", "data-input-color", "gray"], ["for", "shop-filter-color_2", 2, "background-color", "gray"], ["type", "text", "id", "shop-filter-color_3", "value", "", "data-input-color", "brown"], ["for", "shop-filter-color_3", 2, "background-color", "brown"], ["type", "text", "id", "shop-filter-color_4", "value", "", "data-input-color", "beige"], ["for", "shop-filter-color_4", 2, "background-color", "beige"], ["type", "text", "id", "shop-filter-color_5", "value", "", "data-input-color", "white"], ["for", "shop-filter-color_5", 2, "background-color", "white"], [1, "col-sm-8", "col-md-9"], [1, "shop__sorting"], [3, "ngClass", "click"], [3, "click"], ["class", "col-sm-6 col-md-4", 4, "ngFor", "ngForOf"], [1, "pagination", "pull-right"], [1, "disabled"], ["href", "#"], [1, "active"], [1, "sr-only"], [1, "col-sm-6", "col-md-4"], [1, "shop__thumb"], [1, "shop-thumb__img"], ["src", "https://www.bootdey.com/image/200x200/87CEFA/000000", "alt", "...", 1, "img-responsive"], [1, "shop-thumb__title"], [1, "shop-thumb__price"], [1, "shop-thumb-price_new"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Acer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Asus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Lenovo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Dell");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Not specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h3", 11)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 40)(71, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 42)(74, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "input", 44)(77, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 46)(80, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 48)(83, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 50)(85, "ul", 51)(86, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_86_listener() { return ctx.changeSorting("Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_87_listener() { return ctx.changeRoute("SortName=Popular"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_89_listener() { return ctx.changeSorting("Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_90_listener() { return ctx.changeRoute("SortName=Newest"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Newest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_92_listener() { return ctx.changeSorting("Bestselling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_93_listener() { return ctx.changeRoute("SortName=BestSelling"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Best Selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_95_listener() { return ctx.changeSorting("PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_96_listener() { return ctx.changeRoute("SortName=PriceLow"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Price (low)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_98_listener() { return ctx.changeSorting("PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_99_listener() { return ctx.changeRoute("SortName=PriceHigh"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Price (high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](102, HomeComponent_div_102_Template, 10, 2, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 1)(104, "div", 4)(105, "ul", 55)(106, "li", 56)(107, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li", 58)(110, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li")(115, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li")(118, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li")(121, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li")(124, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li")(127, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.activeSorting === "Popular"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.activeSorting === "Newest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.activeSorting === "Bestselling"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.activeSorting === "PriceLow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.activeSorting === "PriceHigh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: ["body[_ngcontent-%COMP%]{margin-top:20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.shop-index__section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop-index__section.alt[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f5;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  border-width: 1px 0 1px 0;\r\n  border-style: solid;\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 60px;\r\n  font-family: 'Questrial', sans-serif;\r\n}\r\n\r\n.shop-index__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-top: -50px;\r\n  margin-bottom: 60px;\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop__slideshow[_ngcontent-%COMP%] {\r\n  margin-top: -18px;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item__container[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item-container__inner[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 600px;\r\n}\r\n\r\n.shop-slideshow__heading[_ngcontent-%COMP%] {\r\n  margin: 0 0 20px 0;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 46px;\r\n  line-height: 1.2;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  color: white;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%] {\r\n  border: 2px solid white;\r\n  border-radius: 0;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-slideshow__btn[_ngcontent-%COMP%]:hover, .shop-slideshow__btn[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  background-color: white;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__slideshow[_ngcontent-%COMP%]   .carousel-inner[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    padding: 0 30px;\r\n    text-align: center;\r\n  }\r\n  .shop-slideshow__heading[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n  .shop-slideshow__subheading[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 10px;\r\n  width: 30px;\r\n  height: 70px;\r\n  opacity: 0;\r\n  transform: translateY(-50%);\r\n  transition: opacity .3s;\r\n}\r\n\r\n.shop-slideshow__control[_ngcontent-%COMP%]:hover {\r\n  opacity: 1 !important;\r\n}\r\n\r\n.shop-slideshow__control[data-slide=\"next\"][_ngcontent-%COMP%] {\r\n  left: auto;\r\n  right: 10px;\r\n}\r\n\r\n.shop__slideshow[_ngcontent-%COMP%]:hover   .shop-slideshow__control[_ngcontent-%COMP%] {\r\n  opacity: .3;\r\n}\r\n\r\n\r\n\r\n.shop-index-features__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index-features__icon[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  \r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  line-height: 100px;\r\n  text-align: center;\r\n  font-size: 24px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.shop-index-features__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n}\r\n\r\n.shop-index-blog__post[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  float: left;\r\n  margin-right: 30px;\r\n  margin-bottom: 20px;\r\n  width: 90px;\r\n  height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n \r\n}\r\n\r\n.shop-index-blog__img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\n.shop-index-blog__body[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 0;\r\n  margin-bottom: 30px;\r\n  line-height: 1.5;\r\n}\r\n\r\n.shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: -15px;\r\n  left: 0;\r\n  width: 30px;\r\n  height: 2px;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shop-index-blog__content[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  color: #777777;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .shop-index-blog__img[_ngcontent-%COMP%] {\r\n    float: none;\r\n    margin-right: 0;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .shop-index-blog__heading[_ngcontent-%COMP%]:after {\r\n    left: 50%;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding-top: 0;\r\n    padding-bottom: 60px;\r\n    border-right: 0;\r\n  }\r\n  .shop-index-blog__posts[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    padding-bottom: 0;\r\n  }\r\n  .shop-index-blog__post[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%] {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 42px;\r\n  text-align: center;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  height: 42px;\r\n  padding: 11px 12px;\r\n}\r\n\r\n.shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 11px 30px;\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   .shop-index__heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    text-align: right;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n    border-radius: 21px 0 0 21px;\r\n  }\r\n  .shop-index__newsletter[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n    margin-left: -3px;\r\n    border-radius: 0 21px 21px 0;\r\n    width: auto;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__thumb[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding: 20px;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  text-align: center;\r\n  transition: border-color 0.1s, box-shadow 0.1s;\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]:hover {\r\n  border-color: rgba(0, 0, 0, 0.07);\r\n  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07);\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #333333;\r\n}\r\n\r\n.shop__thumb[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.shop-thumb__img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.shop-thumb__title[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.shop-thumb__price[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n}\r\n\r\n.shop-thumb-price_old[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.shop-thumb-price_new[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n\r\n\r\n.shop-item__info[_ngcontent-%COMP%] {\r\n  padding: 30px;\r\n  margin-bottom: 40px;\r\n  background-color: white;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.shop-item-cart__title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  line-height: 1.3;\r\n}\r\n\r\n.shop-item-cart__price[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  font-weight: 400;\r\n  color: #F7C41F;\r\n}\r\n\r\n.shop-item__intro[_ngcontent-%COMP%] {\r\n  color: #777777;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding-bottom: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.shop-item__add[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\r\n  padding: 15px 20px;\r\n}\r\n\r\n.shop-item__img[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-item-img__main[_ngcontent-%COMP%] {\r\n  width: calc(100% - 110px);\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: auto;\r\n  float: left;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  margin-bottom: 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  opacity: .5;\r\n}\r\n\r\n.shop-item-img__aside[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]:hover, .shop-item-img__aside[_ngcontent-%COMP%]    > img.active[_ngcontent-%COMP%] {\r\n  border-color: rgba(0, 0, 0, 0.05);\r\n  opacity: 1;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop-item-img__main[_ngcontent-%COMP%] {\r\n    width: calc(100% - 60px);\r\n  }\r\n  .shop-item-img__aside[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\n\r\n\r\n.shop__filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__price[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n\r\n.shop-filter__price[_ngcontent-%COMP%]   [class*='col-'][_ngcontent-%COMP%] {\r\n  padding: 2px;\r\n}\r\n\r\n\r\n\r\n.shop-filter__color[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 2px 2px 0;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.shop-filter__color[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  height: 30px;\r\n  background: transparent;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.shop__sorting[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-left: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: -20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  text-align: right;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 15px 15px;\r\n  margin-bottom: -1px;\r\n  border-bottom: 2px solid transparent;\r\n  color: #757575;\r\n  transition: all .05s linear;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: #ed3e49;\r\n  border-bottom-color: #ed3e49;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .shop__sorting[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    border-bottom: 0;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .shop__sorting[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n\r\n\r\n.checkout__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.checkout-cart__item[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.checkout-cart-item__img[_ngcontent-%COMP%] {\r\n  max-width: 80px;\r\n  margin-right: 10px;\r\n  float: left;\r\n}\r\n\r\n.checkout-cart-item__content[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.checkout-cart-item__heading[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n}\r\n\r\n.checkout-cart-item__footer[_ngcontent-%COMP%] {\r\n  padding: 10px 0;\r\n  margin-top: 10px;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.checkout-cart-item__price[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n  border-top: 1px solid #e9e9e9;\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n  padding: 40px 40px;\r\n  border-right: 1px solid #e9e9e9;\r\n  color: #aaa;\r\n}\r\n\r\n.checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n  border-right: 0;\r\n  color: #333333;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .checkout-total__block[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\r\n    padding: 15px 20px;\r\n    border: 0;\r\n    border-top: 1px solid #e9e9e9;\r\n  }\r\n  .checkout-total__block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 1px solid #e9e9e9;\r\n  }\r\n}\r\n\r\n.checkout-total__heading[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.checkout-total__price[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin: 9px 0;\r\n  font-size: 17px;\r\n}\r\n\r\n.checkout__submit[_ngcontent-%COMP%] {\r\n  padding: 15px 40px;\r\n}\r\n\r\n\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.shop-conf__heading[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n\r\n\r\n.form-control[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  border-color: #d9534f;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #b52b27;\r\n}\r\n\r\n.has-error[_ngcontent-%COMP%]   .help-block[_ngcontent-%COMP%] {\r\n  color: #d9534f;\r\n}\r\n\r\n\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  background-color: #eee;\r\n  text-align: center;\r\n  font-family: \"FontAwesome\";\r\n}\r\n\r\n.checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\r\n  content: \"\\f00c\";\r\n}\r\n\r\n\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-right: 15px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  border: 10px solid #eee;\r\n  background-color: #333333;\r\n}\r\n\r\n.radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n  border-width: 7px;\r\n}\r\n\r\n\r\n\r\n.input_qty[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  line-height: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 40px;\r\n  height: 40px;\r\n  float: left;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):last-child {\r\n  float: right;\r\n  border-right: 0;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: rgba(0, 0, 0, 0.02);\r\n}\r\n\r\n.input_qty[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > output[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  line-height: inherit;\r\n  padding: 0;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 20px;\r\n  border: 0;\r\n  line-height: 20px;\r\n  color: #ccc;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output) {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 0 !important;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.output):hover {\r\n  background-color: transparent;\r\n  color: #333333;\r\n}\r\n\r\n.input_qty_sm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {\r\n  color: #ccc;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e21hcmdpbi10b3A6MjBweDt9XHJcblxyXG4vKipcclxuICogU2hvcFxyXG4gKi9cclxuLyoqIFNob3A6IEluZGV4ICoqL1xyXG4vKiBHZW5lcmFsICovXHJcbi5zaG9wLWluZGV4X19zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG4uc2hvcC1pbmRleF9fc2VjdGlvbi5hbHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAxcHggMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uc2hvcC1pbmRleF9faGVhZGluZyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVlc3RyaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG4uc2hvcC1pbmRleF9faGVhZGluZyArIHAge1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgY29sb3I6ICM3Nzc3Nzc7XHJcbn1cclxuLyogU2hvcDogU2xpZGVzaG93ICovXHJcbi5zaG9wX19zbGlkZXNob3cge1xyXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuLnNob3BfX3NsaWRlc2hvdyAuY2Fyb3VzZWwtaW5uZXIgLml0ZW1fX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtLWNvbnRhaW5lcl9faW5uZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uc2hvcF9fc2xpZGVzaG93IC5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLnNob3Atc2xpZGVzaG93X19oZWFkaW5nIHtcclxuICBtYXJnaW46IDAgMCAyMHB4IDA7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDZweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX3N1YmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWVzdHJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2J0biB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uc2hvcC1zbGlkZXNob3dfX2J0bjpob3ZlcixcclxuLnNob3Atc2xpZGVzaG93X19idG46Zm9jdXMge1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wX19zbGlkZXNob3cgLmNhcm91c2VsLWlubmVyIC5pdGVtIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zaG9wLXNsaWRlc2hvd19faGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG4gIC5zaG9wLXNsaWRlc2hvd19fc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcbi8qIENhcm91c2VsIGNvbnRyb2xzICovXHJcbi5zaG9wLXNsaWRlc2hvd19fY29udHJvbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjNzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19jb250cm9sOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNob3Atc2xpZGVzaG93X19jb250cm9sW2RhdGEtc2xpZGU9XCJuZXh0XCJdIHtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaG9wX19zbGlkZXNob3c6aG92ZXIgLnNob3Atc2xpZGVzaG93X19jb250cm9sIHtcclxuICBvcGFjaXR5OiAuMztcclxufVxyXG4vKiBGZWF0dXJlcyAqL1xyXG4uc2hvcC1pbmRleC1mZWF0dXJlc19faXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2ljb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2hlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnNob3AtaW5kZXgtZmVhdHVyZXNfX2hlYWRpbmcgKyBwIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4vKiBCbG9nIHBvc3QgKi9cclxuLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19wb3N0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19pbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faW1nOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gXHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faW1nID4gaW1nIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19fYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLnNob3AtaW5kZXgtYmxvZ19faGVhZGluZzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMTVweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uc2hvcC1pbmRleC1ibG9nX19jb250ZW50IHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5zaG9wLWluZGV4LWJsb2dfX2ltZyB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX2hlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19oZWFkaW5nOmFmdGVyIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNob3AtaW5kZXgtYmxvZ19fcG9zdHMgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAuc2hvcC1pbmRleC1ibG9nX19wb3N0cyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4LWJsb2dfX3Bvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIE5ld3NsZXR0ZXIgKi9cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaG9wLWluZGV4X19uZXdzbGV0dGVyIC5zaG9wLWluZGV4X19oZWFkaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2hvcC1pbmRleF9fbmV3c2xldHRlciBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIGhlaWdodDogNDJweDtcclxuICBwYWRkaW5nOiAxMXB4IDEycHg7XHJcbn1cclxuLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gIHBhZGRpbmc6IDExcHggMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2hvcC1pbmRleF9fbmV3c2xldHRlciAuc2hvcC1pbmRleF9faGVhZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnNob3AtaW5kZXhfX25ld3NsZXR0ZXIgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIxcHggMCAwIDIxcHg7XHJcbiAgfVxyXG4gIC5zaG9wLWluZGV4X19uZXdzbGV0dGVyIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMXB4IDIxcHggMDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxufVxyXG4vKiogU2hvcDogVGh1bWJuYWlscyAqKi9cclxuLnNob3BfX3RodW1iIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcywgLXdlYmtpdC1ib3gtc2hhZG93IDAuMXM7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcywgYm94LXNoYWRvdyAwLjFzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMsIGJveC1zaGFkb3cgMC4xcztcclxufVxyXG4uc2hvcF9fdGh1bWI6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcclxufVxyXG4uc2hvcF9fdGh1bWIgPiBhIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uc2hvcF9fdGh1bWIgPiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNob3AtdGh1bWJfX2ltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2hvcC10aHVtYl9fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNob3AtdGh1bWJfX3ByaWNlIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG4uc2hvcC10aHVtYi1wcmljZV9vbGQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbi5zaG9wLXRodW1iLXByaWNlX25ldyB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4vKiogU2hvcDogSXRlbSAqKi9cclxuLnNob3AtaXRlbV9faW5mbyB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuLnNob3AtaXRlbS1jYXJ0X190aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcbi5zaG9wLWl0ZW0tY2FydF9fcHJpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRjdDNDFGO1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ludHJvIHtcclxuICBjb2xvcjogIzc3Nzc3NztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2FkZCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG59XHJcbi5zaG9wLWl0ZW1fX2ltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fbWFpbiB7XHJcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTEwcHgpO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMTBweCk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG4uc2hvcC1pdGVtLWltZ19fYXNpZGUgPiBpbWc6aG92ZXIsXHJcbi5zaG9wLWl0ZW0taW1nX19hc2lkZSA+IGltZy5hY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wLWl0ZW0taW1nX19tYWluIHtcclxuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIH1cclxuICAuc2hvcC1pdGVtLWltZ19fYXNpZGUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBGaWx0ZXIgKiovXHJcbi5zaG9wX19maWx0ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuLyogU2hvcCBmaWx0ZXI6IFByaWNpbmcgKi9cclxuLnNob3AtZmlsdGVyX19wcmljZSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4uc2hvcC1maWx0ZXJfX3ByaWNlIFtjbGFzcyo9J2NvbC0nXSB7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi8qIFNob3AgZmlsdGVyOiBDb2xvcnMgKi9cclxuLnNob3AtZmlsdGVyX19jb2xvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAycHggMnB4IDA7XHJcbn1cclxuLnNob3AtZmlsdGVyX19jb2xvciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvcC1maWx0ZXJfX2NvbG9yIGxhYmVsIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyoqIFNob3A6IFNvcnRpbmcgKiovXHJcbi5zaG9wX19zb3J0aW5nIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjA1cyBsaW5lYXI7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaSA+IGE6aG92ZXIsXHJcbi5zaG9wX19zb3J0aW5nID4gbGkgPiBhOmZvY3VzIHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICBjb2xvcjogI2VkM2U0OTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZWQzZTQ5O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5zaG9wX19zb3J0aW5nIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuc2hvcF9fc29ydGluZyA+IGxpID4gYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgLnNob3BfX3NvcnRpbmcgPiBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbi8qKiBTaG9wOiBDaGVja291dCAqKi9cclxuLmNoZWNrb3V0X19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydF9faXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19pbWcge1xyXG4gIG1heC13aWR0aDogODBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1pdGVtX19oZWFkaW5nIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW1fX2Zvb3RlciB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuLmNoZWNrb3V0LWNhcnQtaXRlbV9fcHJpY2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNoZWNrb3V0LXRvdGFsX19ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZTllOTtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2Jsb2NrID4gLnJvdyA+IFtjbGFzcyo9XCJjb2wtXCJdOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY2hlY2tvdXQtdG90YWxfX2Jsb2NrIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcclxuICB9XHJcbiAgLmNoZWNrb3V0LXRvdGFsX19ibG9jayA+IC5yb3cgPiBbY2xhc3MqPVwiY29sLVwiXTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gIH1cclxufVxyXG4uY2hlY2tvdXQtdG90YWxfX2hlYWRpbmcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5jaGVja291dC10b3RhbF9fcHJpY2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDlweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uY2hlY2tvdXRfX3N1Ym1pdCB7XHJcbiAgcGFkZGluZzogMTVweCA0MHB4O1xyXG59XHJcbi8qKiBTaG9wOiBPcmRlciBDb25maXJtYXRpb24gKi9cclxuLnNob3AtY29uZl9faGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4uc2hvcC1jb25mX19oZWFkaW5nICsgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogRm9ybXNcclxuICovXHJcbi5mb3JtLWNvbnRyb2wsXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKiBIYXMgZXJyb3IgKi9cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6ICNkOTUzNGY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhhcy1lcnJvciAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNiNTJiMjc7XHJcbn1cclxuLmhhcy1lcnJvciAuaGVscC1ibG9jayB7XHJcbiAgY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuLyogQ2hlY2tib3hlcyAqL1xyXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG59XHJcbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbn1cclxuLyogUmFkaW9zICovXHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnJhZGlvIGxhYmVsIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLnJhZGlvIGxhYmVsOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDEwcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbn1cclxuLyogUXVhbnRpdHkgKi9cclxuLmlucHV0X3F0eSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaW5wdXRfcXR5IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dF9xdHkgbGFiZWwgPiBzcGFuOm5vdCgub3V0cHV0KSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6bGFzdC1jaGlsZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4uaW5wdXRfcXR5IGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuLmlucHV0X3F0eSBsYWJlbCA+IG91dHB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmlucHV0X3F0eV9zbSBsYWJlbCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCkge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXRfcXR5X3NtIGxhYmVsID4gc3Bhbjpub3QoLm91dHB1dCk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5pbnB1dF9xdHlfc20gbGFiZWwgb3V0cHV0IHtcclxuICBjb2xvcjogI2NjYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"] });


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
        this.authService.login(this.username, this.password).subscribe(res => {
            window.location.replace('/');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { isAuthenticated: "isAuthenticated" }, decls: 16, vars: 2, consts: [[1, "container"], [1, "bs-component"], [1, "form-group", "w-25"], [1, "form-label", "mt-4"], [1, "form-floating", "mb-3"], ["type", "username", "placeholder", "Username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], [1, "form-floating"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingPassword"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-default", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_10_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} }
class NavbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.username = "username";
        this.refreshState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        console.log(this.authService.getTokenInformation());
    }
    logout() {
        this.authService.logout();
        this.refreshState.emit();
        window.location.replace('/');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { isUserAuthenticated: "isUserAuthenticated", refreshState: "refreshState" }, decls: 17, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", "flex-grow-1"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/favourite", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-heart"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "fa", "fa-s15", "fa-cart-shopping"], ["routerLink", "/login", 1, "nav-link"], [1, "fa", "fa-s15", "fa-sign-in"], [1, "nav-link", "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "avatar", "dropdown-toggle"], [1, "fa", "fa-user"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["routerLink", "/profile", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["routerLink", "/settings", 1, "dropdown-item"], ["aria-hidden", "true", 1, "fa", "fa-cog"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ 9:
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProductDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 2, vars: 0, template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, consts: [[1, "container", "pt-3"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " My profile\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);




class AuthService {
    constructor(http, tokenHelper) {
        this.http = http;
        this.tokenHelper = tokenHelper;
        //https://localhost:44305/
        this.baseUrl = 'api/Identity';
    }
    userDetails(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
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
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 116, vars: 0, consts: [[1, "container", "pt-3"], [1, "h3", "mb-3"], [1, "row"], [1, "col-md-5", "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], ["role", "tablist", 1, "list-group", "list-group-flush"], ["data-toggle", "list", "href", "#account", "role", "tab", 1, "list-group-item", "list-group-item-action", "active"], ["data-toggle", "list", "href", "#password", "role", "tab", 1, "list-group-item", "list-group-item-action"], ["data-toggle", "list", "href", "#", "role", "tab", 1, "list-group-item", "list-group-item-action"], [1, "col-md-7", "col-xl-8"], [1, "tab-content"], ["id", "account", "role", "tabpanel", 1, "tab-pane", "fade", "show", "active"], [1, "card-body"], [1, "col-md-8"], [1, "form-group"], ["for", "inputUsername"], ["type", "text", "id", "inputUsername", "placeholder", "Username", 1, "form-control"], ["rows", "2", "id", "inputBio", "placeholder", "Tell something about yourself", 1, "form-control"], [1, "col-md-4"], [1, "text-center"], ["alt", "Andrew Jones", "src", "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", "width", "128", "height", "128", 1, "rounded-circle", "img-responsive", "mt-2"], [1, "mt-2"], [1, "btn", "btn-primary"], ["aria-hidden", "true", "data-prefix", "fas", "data-icon", "upload", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", "data-fa-i2svg", "", 1, "svg-inline--fa", "fa-upload", "fa-w-16"], ["fill", "currentColor", "d", "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card", "mt-3"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputFirstName"], ["type", "text", "id", "inputFirstName", "placeholder", "First name", 1, "form-control"], ["for", "inputLastName"], ["type", "text", "id", "inputLastName", "placeholder", "Last name", 1, "form-control"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["id", "password", "role", "tabpanel", 1, "tab-pane", "fade"], [1, "card-title"], ["for", "inputPasswordCurrent"], ["type", "password", "id", "inputPasswordCurrent", 1, "form-control"], ["href", "#"], ["for", "inputPasswordNew"], ["type", "password", "id", "inputPasswordNew", 1, "form-control"], ["for", "inputPasswordNew2"], ["type", "password", "id", "inputPasswordNew2", 1, "form-control"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Delete account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "div", 4)(20, "div", 5)(21, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Public info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14)(24, "form")(25, "div", 2)(26, "div", 15)(27, "div", 16)(28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Biography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20)(36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23)(39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "For best results, use an image at least 128px by 128px in .jpg format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28)(48, "div", 5)(49, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Private info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14)(52, "form")(53, "div", 29)(54, "div", 30)(55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30)(59, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16)(63, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16)(67, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16)(71, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29)(75, "div", 30)(76, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 43)(80, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "select", 45)(83, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 47)(88, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Save changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 50)(94, "div", 4)(95, "div", 14)(96, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "form")(99, "div", 16)(100, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Current password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "small")(104, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16)(107, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16)(111, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Verify password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Save changes");
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