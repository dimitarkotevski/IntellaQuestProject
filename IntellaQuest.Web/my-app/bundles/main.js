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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-edit/add-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-edit/add-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <form  #entityForm=\"ngForm\" (ngSubmit)=\"save(entityForm)\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">{{title}}</h4>\n      <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\"></button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <div >\n          <div class=\"input-group-prepend\">\n            <label for=\"category_name\" class=\"form-label\">Category Name: </label>\n          </div>\n          <input required [(ngModel)]=\"entity.Name\" type=\"text\" name=\"category_name\" class=\"form-control\">\n          <div *ngIf=\"(entityForm.invalid && entityForm.touched) || showErrorMassage\" class=\"text-danger\">\n            {{error}}\n          </div>\n        </div>\n        <br/>\n        <div >\n          <div class=\"input-group-prepend\">\n            <label class=\"form-label\" for=\"category_status\">Status</label>\n          </div>\n          <select required [(ngModel)]=\"entity.Status\" name=\"category_status\" class=\"custom-select form-select\" id=\"category_status\">\n            <option value=true>Active</option>\n            <option value=false>Inactive</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-success\" >Save</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  </form>"

/***/ }),

/***/ "./src/app/add-edit/add-edit.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-edit/add-edit.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1lZGl0L2FkZC1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-edit/add-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-edit/add-edit.component.ts ***!
  \************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category-service/category.service */ "./src/app/services/category-service/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddEditComponent = /** @class */ (function () {
    function AddEditComponent(activeModal, serviceCategory) {
        this.activeModal = activeModal;
        this.serviceCategory = serviceCategory;
        this.successCreatedMassage = {
            type: 'success',
            message: 'Successfully created',
        };
        this.successEditMassage = {
            type: 'success',
            message: 'Successfully edited',
        };
    }
    AddEditComponent.prototype.ngOnInit = function () {
        this.title = 'Add';
        this.error = 'Category Name is required';
    };
    AddEditComponent.prototype.save = function (entityForm) {
        var _this = this;
        if (!entityForm.valid) {
            this.showErrorMassage = true;
            return;
        }
        else {
            if (this.entity.Id) {
                this.serviceCategory.edit(this.entity).subscribe(function (res) {
                    _this.activeModal.close();
                    // this.refreshData()
                    _this.openAlert(_this.successEditMassage);
                });
            }
            else {
                this.serviceCategory.create(this.entity).subscribe(function (res) {
                    _this.activeModal.close();
                    // this.refreshData()
                    _this.openAlert(_this.successCreatedMassage);
                });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], AddEditComponent.prototype, "openAlert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddEditComponent.prototype, "entity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("FormAddEdit"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], AddEditComponent.prototype, "FormAddEdit", void 0);
    AddEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit',
            template: __webpack_require__(/*! ./add-edit.component.html */ "./src/app/add-edit/add-edit.component.html"),
            styles: [__webpack_require__(/*! ./add-edit.component.scss */ "./src/app/add-edit/add-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], AddEditComponent);
    return AddEditComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: 'categories', component: _category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"]
    },
    {
        path: 'products', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    },
    {
        path: 'customers', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]
    },
    {
        path: 'orders', component: _order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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

module.exports = "\n<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">ShopApp</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <li><a routerLink=\"/categories\" \n            routerLinkActive=\"active\" \n            ariaCurrentWhenActive=\"categories\"\n            class=\"nav-item nav-link\" href=\"#\">Categories</a></li>\n      <li><a routerLink=\"/products\"   \n            routerLinkActive=\"active\" \n            ariaCurrentWhenActive=\"products\"  \n            class=\"nav-item nav-link\" href=\"#\">Products</a></li>\n      <li><a routerLink=\"/customers\"  \n            routerLinkActive=\"active\" \n            ariaCurrentWhenActive=\"page\"      \n            class=\"nav-item nav-link\" href=\"#\">Customers</a></li>\n      <li><a routerLink=\"/orders\"     \n            routerLinkActive=\"active\" \n            ariaCurrentWhenActive=\"page\" \n            class=\"nav-item nav-link\" href=\"#\">Orders</a></li>\n    </div>\n  </div>\n  </div>\n  \n</nav> -->\n\n\n<fluent-tabs \n      *ngIf=\"tabsConfig\" \n      [config]=\"tabsConfig\"></fluent-tabs>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var codera_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codera-shared */ "./node_modules/codera-shared/fesm5/codera-shared.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.prepareTabs = function () {
        var that = this;
        this.tabsConfig =
            [
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentTabConfig"]({
                    title: function () {
                        return "<span><i class='far fa-check-square'></i>Category</span>";
                    },
                    show: true,
                    componentClass: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]
                }),
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentTabConfig"]({
                    title: function () {
                        return "<span><i class='far fa-check-square'></i>Product</span>";
                    },
                    show: true,
                    componentClass: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
                })
            ];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.prepareTabs();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/*! exports provided: AppModule, httpLoaderFactory, initApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var codera_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codera-shared */ "./node_modules/codera-shared/fesm5/codera-shared.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/add-edit/add-edit.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./my-category-picker/my-category-picker.component */ "./src/app/my-category-picker/my-category-picker.component.ts");


 // <-- NgModel lives here



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_11__["CategoryComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_12__["CustomerComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
                _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_8__["AddEditComponent"],
                _delete_delete_component__WEBPACK_IMPORTED_MODULE_13__["DeleteComponent"],
                _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_20__["MyCategoryPickerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                codera_shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_18__["DragulaModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
                        useFactory: httpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    },
                    isolate: false
                }),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_8__["AddEditComponent"], _delete_delete_component__WEBPACK_IMPORTED_MODULE_13__["DeleteComponent"], _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_20__["MyCategoryPickerComponent"]],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: initApp,
                    deps: [codera_shared__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"]],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());

function httpLoaderFactory(http) {
    var date = new Date();
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http, '/mocquest/bundles/assets/locales/', ".json?ts=" + date.getTime());
}
function initApp(applicationService) {
    applicationService.setAlternativeApplicationContext("Base/GetAppContext", "");
    var result = function () { return applicationService.initAlternativeApplicationContext(); };
    return result;
}


/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Category table</h1>\n<br/>\n  <!-- BUTTON TO SHOW MODAL -->\n  <button class=\"btn btn-outline-primary\" (click)=\"openAddEditModal()\">\n    Add Category\n  </button>\n  <hr class=\"w-50\"/>\n  <form class=\"form-inline\">\n    <span class=\"form-group d-inline\">\n      <input type=\"text\" [(ngModel)]=\"shopRequest.SearchString\" name=\"SearchString\" placeholder=\"Search...\">\n      <select class=\"custom-select-sm form-select-sm\" [(ngModel)]=\"shopRequest.SearchStatus\" name=\"SearchStatus\">\n        <option value=\"true\">Active</option>\n        <option value=\"false\">Inactive</option>\n      </select>\n      <input  type=\"button\" (click)=\"refreshData()\"  value=\"Search\" />\n      <input type=\"button\" (click)=\"reset()\"  value=\"Reset\" />\n    </span>\n  </form>\n  <hr/>\n  <!-- ALERTS -->\n  <p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\" [dismissible]=\"false\">{{ alert.message }}</ngb-alert>\n  </p>\n  <!-- TABLE -->\n  <div class=\"table-responsive-sm\">\n    <table mat-table class=\"table table-striped table-hover\">\n      <thead class=\"thead-dark\">\n        <th>\n          <span class=\"btn-link\" (click)=\"sort('CategoryName')\">Category Name\n            <span *ngIf=\"shopRequest.SortName=='CategoryName' && shopRequest.isAscending=='asc'\">↑</span> \n            <span *ngIf=\"shopRequest.SortName=='CategoryName' && shopRequest.isAscending=='desc'\">↓</span>\n          </span>\n        </th>\n        <th>\n          <span class=\"btn-link\" (click)=\"sort('CategoryStatus')\">Category Status\n            <span *ngIf=\"shopRequest.SortName=='CategoryStatus' && shopRequest.isAscending=='asc'\">↑</span> \n            <span *ngIf=\"shopRequest.SortName=='CategoryStatus' && shopRequest.isAscending=='desc'\">↓</span>\n          </span>\n        </th>\n        <th>Edit</th>\n        <th>Delete</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let category of categories\">\n          <td>{{category.Name}}</td>\n          <td>{{category.Status==true ? 'Active' : 'Inactive'}}</td>\n          <td>\n            <button class=\"btn btn-secondary\"  (click)=\"openAddEditModal(category.Id)\">Edit</button>\n          </td>\n          <td>\n            <button class=\"btn btn-danger\" (click)=\"openModalDelete(category.Id)\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- PAGINATION -->\n  <div class=\"row\">\n    <div class=\"col-4\">\n      Showing {{ shopResponse.TotalItems==0? 0 : (shopResponse.CurrentPage-1) * shopResponse.Size +1 }} to\n                    {{\n                        (shopResponse.CurrentPage * shopResponse.Size) > shopResponse.TotalItems  ?\n                        shopResponse.TotalItems  :\n                        (shopResponse.CurrentPage * shopResponse.Size)\n                    }}  of total\n                    {{shopResponse.TotalItems}} items.\n    </div>\n    <div class=\"col-6\">\n\n      <ngb-pagination\n      (pageChange)=\"pageChange($event)\"\n      [collectionSize]=\"shopResponse.TotalItems\"\n      [(page)]=\"shopResponse.CurrentPage\"\n      [pageSize]=\"shopResponse.Size\"\n      [boundaryLinks]=\"true\"\n      size=\"md\">\n      </ngb-pagination>\n    </div>\n    <div class=\"col-2\"><span> Page size: </span>\n        <select (change)=\"pageSizeChange(shopResponse.Size)\" class=\"form-select-sm\" [(ngModel)]=\"shopResponse.Size\">\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"25\">25</option>\n          <option value=\"50\">50</option>\n      </select>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvQzpcXFVzZXJzXFxEaW1pdGFyS290ZXZza2lcXERvY3VtZW50c1xccHJvamVjdHNcXEludGVsbGFRdWVzdFByb2plY3RcXEludGVsbGFRdWVzdC5XZWJcXG15LWFwcC9zcmNcXGFwcFxcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category-service/category.service */ "./src/app/services/category-service/category.service.ts");
/* harmony import */ var _shop_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shop-response */ "./src/app/shop-response.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-edit/add-edit.component */ "./src/app/add-edit/add-edit.component.ts");
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../delete/delete.component */ "./src/app/delete/delete.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, modalService) {
        this.categoryService = categoryService;
        this.modalService = modalService;
        this.alerts = [];
        this.successMassage = {
            type: 'success',
            message: 'Successfully',
        };
        this.successCreatedMassage = {
            type: 'success',
            message: 'Successfully created',
        };
        this.successEditMassage = {
            type: 'success',
            message: 'Successfully edited',
        };
        this.shopResponse = new _shop_response__WEBPACK_IMPORTED_MODULE_3__["ShopReponse"]();
        this.shopRequest = {
            SearchStatus: null,
            SearchString: "",
            PageNeeded: 1,
            Size: 5
        };
    }
    CategoryComponent.prototype.closeAlert = function (alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    };
    CategoryComponent.prototype.openAlert = function (alert) {
        var _this = this;
        this.alerts.push(alert);
        setTimeout(function () { return _this.closeAlert(alert); }, 5000);
    };
    CategoryComponent.prototype.ngOnInit = function () {
        this.refreshData();
    };
    CategoryComponent.prototype.reset = function () {
        this.shopRequest.SearchString = "";
        this.shopRequest.SearchStatus = null;
        this.refreshData();
    };
    CategoryComponent.prototype.sort = function (sortName) {
        this.shopRequest.SortName = sortName;
        if (!this.shopRequest.isAscending) {
            this.shopRequest.isAscending = 'asc';
        }
        else if (this.shopRequest.isAscending == 'asc') {
            this.shopRequest.isAscending = 'desc';
        }
        else if (this.shopRequest.isAscending == 'desc') {
            this.shopRequest.isAscending = 'asc';
        }
        this.refreshData();
    };
    CategoryComponent.prototype.refreshData = function () {
        var _this = this;
        this.categoryService.getAll(this.shopRequest).subscribe(function (res) {
            _this.shopResponse = res;
            _this.categories = _this.shopResponse.Items;
        });
    };
    CategoryComponent.prototype.pageChange = function ($event) {
        this.shopRequest.PageNeeded = $event;
        this.refreshData();
    };
    CategoryComponent.prototype.pageSizeChange = function (size) {
        this.shopRequest.Size = size;
        this.refreshData();
    };
    CategoryComponent.prototype.openAddEditModal = function (Id) {
        var _this = this;
        if (Id) {
            this.categoryService.getById(Id).subscribe(function (response) {
                _this.category = response;
                var modalRef = _this.modalService.open(_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"], { centered: true });
                modalRef.result.then(function () {
                    _this.refreshData();
                });
                modalRef.componentInstance.entity = _this.category;
                modalRef.componentInstance.openAlert = _this.openAlert.bind(_this);
            });
        }
        else {
            this.category = {
                Id: undefined,
                Name: '',
                Status: false
            };
            var modalRef = this.modalService.open(_add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"], { centered: true });
            modalRef.componentInstance.entity = this.category;
            modalRef.result.then(function () {
                _this.refreshData();
            });
            modalRef.componentInstance.openAlert = this.openAlert.bind(this);
        }
    };
    CategoryComponent.prototype.openModalDelete = function (Id) {
        var _this = this;
        var modalRef = this.modalService.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_6__["DeleteComponent"], { centered: true });
        modalRef.componentInstance.Id = Id;
        modalRef.result.then(function () {
            _this.refreshData();
        });
        modalRef.componentInstance.openAlert = this.openAlert.bind(this);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], CategoryComponent);
    return CategoryComponent;
}());

;


/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  customer works!\n</div>\n"

/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// @NgModule ({
//   imports: [
//     MatSlideToggleModule,
//   ]
// })
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/delete/delete.component.html":
/*!**********************************************!*\
  !*** ./src/app/delete/delete.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\"></button>\n</div>\n<div class=\"modal-body\">\n  <div>Are you sure that you want to delete?</div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteEntity(Id)\">Yes</button>\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/delete/delete.component.scss":
/*!**********************************************!*\
  !*** ./src/app/delete/delete.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGV0ZS9kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/delete/delete.component.ts":
/*!********************************************!*\
  !*** ./src/app/delete/delete.component.ts ***!
  \********************************************/
/*! exports provided: DeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComponent", function() { return DeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/category-service/category.service */ "./src/app/services/category-service/category.service.ts");




var DeleteComponent = /** @class */ (function () {
    function DeleteComponent(activeModal, servicecategory) {
        this.activeModal = activeModal;
        this.servicecategory = servicecategory;
        this.successMassage = {
            type: 'success',
            message: 'Successfully',
        };
    }
    DeleteComponent.prototype.ngOnInit = function () {
        this.title = 'Delete';
    };
    DeleteComponent.prototype.deleteEntity = function (Id) {
        var _this = this;
        this.servicecategory.delete(Id).subscribe(function () {
            _this.activeModal.close();
            _this.openAlert(_this.successMassage);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], DeleteComponent.prototype, "openAlert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeleteComponent.prototype, "entity", void 0);
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/delete/delete.component.html"),
            styles: [__webpack_require__(/*! ./delete.component.scss */ "./src/app/delete/delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], DeleteComponent);
    return DeleteComponent;
}());



/***/ }),

/***/ "./src/app/my-category-picker/my-category-picker.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/my-category-picker/my-category-picker.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group-sm pt-3\">\n  <select class=\"form-control\" [(ngModel)]=\"categoryId\" (change)=\"onChange()\" >\n    <option  *ngFor=\"let item of categories\" [value]=\"item.Id\">{{item.Name}}</option>\n  </select>\n</div>"

/***/ }),

/***/ "./src/app/my-category-picker/my-category-picker.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/my-category-picker/my-category-picker.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWNhdGVnb3J5LXBpY2tlci9teS1jYXRlZ29yeS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/my-category-picker/my-category-picker.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/my-category-picker/my-category-picker.component.ts ***!
  \********************************************************************/
/*! exports provided: MyCategoryPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCategoryPickerComponent", function() { return MyCategoryPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category-service/category.service */ "./src/app/services/category-service/category.service.ts");



var MyCategoryPickerComponent = /** @class */ (function () {
    function MyCategoryPickerComponent(categoryService) {
        this.categoryService = categoryService;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MyCategoryPickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryId = !this.model ? this.categoryId = "" : this.categoryId = this.model.Id;
        this.categoryService.allTable().subscribe(function (res) {
            _this.categories = res.data;
        });
    };
    MyCategoryPickerComponent.prototype.onChange = function () {
        this.model = {
            Id: this.categoryId,
        };
        this.modelChange.emit(this.model);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyCategoryPickerComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyCategoryPickerComponent.prototype, "Category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MyCategoryPickerComponent.prototype, "modelChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MyCategoryPickerComponent.prototype, "FormGroup", void 0);
    MyCategoryPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-category-picker',
            template: __webpack_require__(/*! ./my-category-picker.component.html */ "./src/app/my-category-picker/my-category-picker.component.html"),
            styles: [__webpack_require__(/*! ./my-category-picker.component.scss */ "./src/app/my-category-picker/my-category-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_category_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], MyCategoryPickerComponent);
    return MyCategoryPickerComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  order works!\n</div>"

/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><br/> <br/>\n  <header-information headerTitle=\"{{ pageTitle | translate }}\"\n  [hasBreadcrumbs]=\"true\"\n  [renderButtonsPosition]=\"renderButtonsTypes.Right\"\n  [(headerItemsConfig)]=\"headerItemsConfig\"\n  [fluentTableConfig]=\"fluentTableConfig\">\n</header-information>\n\n<fluent-search [config]=\"fluentSearchConfig\" [(model)]=\"currentFilter\"></fluent-search>\n\n  <fluent-table [customApiUrl]=\"source\" [config]=\"fluentTableConfig\" [source]=\"''\">\n    \n  </fluent-table>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var codera_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codera-shared */ "./node_modules/codera-shared/fesm5/codera-shared.js");
/* harmony import */ var _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-service/product.service */ "./src/app/services/product-service/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../my-category-picker/my-category-picker.component */ "./src/app/my-category-picker/my-category-picker.component.ts");









var ProductComponent = /** @class */ (function () {
    // !constructor
    function ProductComponent(titleService, toastr, productService, dynamicService, viewContainerRef, applicationService, viewContainer) {
        var _this = this;
        this.titleService = titleService;
        this.toastr = toastr;
        this.productService = productService;
        this.dynamicService = dynamicService;
        this.viewContainerRef = viewContainerRef;
        this.applicationService = applicationService;
        this.viewContainer = viewContainer;
        this.source = [];
        this.renderButtonsTypes = codera_shared__WEBPACK_IMPORTED_MODULE_2__["RenderButtonsPosition"];
        this.currentFilter = [];
        //  END OF getFluentTableConfig()
        this.summonDialog = function () {
            _this.model = new _product__WEBPACK_IMPORTED_MODULE_4__["Product"]();
            _this.model = {
                Id: null,
                Name: "",
                Description: "",
                Category: null,
            };
            _this.modalConfig = _this.getModalConfig(_this.model);
            _this.modalConfig.modalHeader = "New";
            _this.dynamicService.addComponent(_this.viewContainer, codera_shared__WEBPACK_IMPORTED_MODULE_2__["ModalFormComponent"], [
                { config: _this.modalConfig },
                { model: _this.model },
            ], true);
        };
        this.bulkChangeStatus = function () {
            _this.dynamicService.addComponent(_this.viewContainer, codera_shared__WEBPACK_IMPORTED_MODULE_2__["BulkChangeStatusComponent"], [
                { fluentTable: _this.fluentTableConfig },
                { url: "ChangeRequestType/BulkChangeStatus" },
                { modalOptions: { size: "sm" } },
            ]);
        };
        this.bulkDelete = function () {
            _this.dynamicService.addComponent(_this.viewContainer, codera_shared__WEBPACK_IMPORTED_MODULE_2__["BulkDeleteComponent"], [
                { fluentTable: _this.fluentTableConfig },
                { url: "ChangeRequestType/BulkDelete" },
                { modalOptions: { size: "sm" } },
            ], true);
        };
        this.onCreateUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // * BEGIN ngOnInit()
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.source = "Products/getTable";
        this.applicationSettings = this.applicationService.getApplicationSettings();
        this.fluentTableConfig = this.getFluentTableConfig();
        this.pageTitle = "Product";
        this.headerItemsConfig = new codera_shared__WEBPACK_IMPORTED_MODULE_2__["HeaderItemsConfig"]([
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["HeaderButtonItem"]({
                name: "new-change-request-type",
                icon: "fa fa-plus",
                label: "Add new product",
                action: that.summonDialog,
            }),
        ]);
        this.configModal();
        // * fluentSearchConfig
        this.fluentSearchConfig = new codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentSearchConfig"]({
            controls: [
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                    new codera_shared__WEBPACK_IMPORTED_MODULE_2__["InputControl"]({
                        field: "Name",
                        type: "text",
                        label: "Name",
                        css: "col-xs-12 col-sm-12 col-md-2 col-lg-2",
                    }),
                    new codera_shared__WEBPACK_IMPORTED_MODULE_2__["ComponentControl"]({
                        componentClass: _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_8__["MyCategoryPickerComponent"],
                        field: "Category",
                        label: "Category",
                        css: "col-12",
                        value: this.categoryValue,
                        data: [{ Category: this.categoryValue }],
                    }),
                ]),
            ],
            searchAction: function () {
                that.fluentTableConfig.applyFilter(that.currentFilter);
            },
            resetAction: function () {
                that.fluentTableConfig.grouping = undefined;
                that.fluentTableConfig.sorting = [{ Name: "asc" }];
                _this.categoryValue = null;
                console.log();
                that.fluentTableConfig.applyFilterAndGrouping(that.currentFilter);
                that.fluentTableComponent.table.groupedRows = undefined;
                that.fluentTableComponent.table.sorts = [{ prop: "Name", dir: "asc" }];
            },
        });
    };
    /////////////////////
    // END OF ngOnInit //
    /////////////////////
    ProductComponent.prototype.configModal = function () {
        var that = this;
        //HERE
        that.modalConfig = new codera_shared__WEBPACK_IMPORTED_MODULE_2__["ModalFormConfig"]("Product", [
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //0
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["InputControl"]({
                    type: "text",
                    field: "Name",
                    label: "Name",
                    min: 1,
                    max: 255,
                    required: true,
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                }),
            ]),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //0
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["InputControl"]({
                    type: "text",
                    field: "Description",
                    label: "Description",
                    min: 1,
                    max: 255,
                }),
            ]),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //1
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["ComponentControl"]({
                    componentClass: _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_8__["MyCategoryPickerComponent"],
                    field: "Category",
                    label: "Category",
                    css: "col-12",
                    required: true,
                }),
            ]),
        ], [
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["CustomAction"]({
                actionType: "submit",
                field: "Submit",
                value: "Submit",
                callback: function (row) {
                    that.model.Status;
                    that.productService.createOrUpdate(that.model).subscribe(function (response) {
                        that.onCreateUpdate.emit(response);
                        that.modalConfig.modalRef.close();
                        that.fluentTableConfig.notifyDataChanged("item-updated");
                    }, function (error) {
                        console.log(error.error.exception);
                        that.toastr.show(error.error.exception);
                    });
                },
                css: "btn btn-primary",
            }),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["CancelAction"]({
                field: "Cancel",
                value: "Cancel",
                callback: function () { },
                css: "btn btn-default",
            }),
        ]);
    };
    ProductComponent.prototype.getFluentTableConfig = function () {
        var that = this;
        return new codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentTableConfig"]({
            columns: [
                {
                    field: "Name",
                    title: "Name",
                    sortable: "Name",
                    type: "string",
                },
                {
                    field: "Description",
                    title: "Description",
                    type: "string",
                },
                {
                    field: "Category.Name",
                    title: "Category",
                    type: "string",
                },
                {
                    field: "Category.Status",
                    title: "Category Status",
                    type: "custom",
                    render: function (row) {
                        return row.Category.Status;
                    },
                },
                {
                    field: "editAction",
                    title: "Edit",
                    type: "action",
                    handler: function (row) {
                        that.productService.get(row.Id).subscribe(function (x) {
                            that.model = x;
                            that.dynamicService.addComponent(that.viewContainerRef, codera_shared__WEBPACK_IMPORTED_MODULE_2__["ModalFormComponent"], [{ config: that.modalConfig }, { model: that.model }]);
                        });
                    },
                    render: function (row) {
                        return "<a class=\"btn btn-primary btn-sm btn-default yellow-stripe pull-right btn-overlay\"><i class=\"fa fa-pencil\"></i>&nbsp;<span>Edit</span></a>";
                    },
                    flexGrow: 0.28,
                },
                {
                    field: "deleteAction",
                    title: "Delete",
                    type: "action",
                    handler: function (row) {
                        that.dynamicService.addComponent(that.viewContainerRef, codera_shared__WEBPACK_IMPORTED_MODULE_2__["TextConfirmationModalComponent"], [
                            { modalHeader: "Delete" },
                            { modalText: "Do you want to delete " + row.Name + " ?" },
                            { submitButtonText: "yes" },
                            {
                                modalOptions: {
                                    size: "sm",
                                },
                            },
                            {
                                successCallback: function () {
                                    that.productService
                                        .delete(row.Id)
                                        .subscribe(function () {
                                        return that.fluentTableConfig.notifyDataChanged("item-deleted");
                                    });
                                },
                            },
                        ], true);
                    },
                    render: function (row) {
                        return "<a class=\"btn btn-danger btn-sm btn-default red-stripe pull-right btn-overlay\"><i class=\"far fa-trash-alt\"></i>&nbsp;<span>Delete</span></a>";
                    },
                    flexGrow: 0.28,
                },
            ],
            sorting: {
                Name: "asc",
            },
            filter: null,
            footer: {
                show: true,
                showExports: true,
                showPageSize: true,
                showPaging: true,
                showRefreshButton: true,
            },
        });
    };
    // ADD PRODUCT
    ProductComponent.prototype.getModalConfig = function (model, onSave) {
        var that = this;
        return new codera_shared__WEBPACK_IMPORTED_MODULE_2__["ModalFormConfig"]("New", [
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //0
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["InputControl"]({
                    type: "text",
                    field: "Name",
                    label: "Name",
                    min: 1,
                    max: 255,
                    required: true,
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                }),
            ]),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //0
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["InputControl"]({
                    type: "text",
                    field: "Description",
                    label: "Description",
                    min: 1,
                    max: 255,
                }),
            ]),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["RowControl"]([
                //1
                new codera_shared__WEBPACK_IMPORTED_MODULE_2__["ComponentControl"]({
                    componentClass: _my_category_picker_my_category_picker_component__WEBPACK_IMPORTED_MODULE_8__["MyCategoryPickerComponent"],
                    field: "Category",
                    label: "Category",
                    css: "col-12",
                    required: true,
                }),
            ]),
        ], [
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["CustomAction"]({
                actionType: "submit",
                field: "Submit",
                value: "Submit",
                callback: function (row) {
                    that.model.Status;
                    that.productService.createOrUpdate(that.model).subscribe(function (response) {
                        that.onCreateUpdate.emit(response);
                        that.modalConfig.modalRef.close();
                        that.fluentTableConfig.notifyDataChanged("item-updated");
                    }, function (error) {
                        console.log(error.error.exception);
                        that.toastr.show(error.error.exception);
                    });
                },
                css: "btn btn-primary",
            }),
            new codera_shared__WEBPACK_IMPORTED_MODULE_2__["CancelAction"]({
                field: "Cancel",
                value: "[ISOQuest].[Common].Buttons.Cancel",
                callback: function () { },
                css: "btn btn-default",
            }),
        ]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentTableComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", codera_shared__WEBPACK_IMPORTED_MODULE_2__["FluentTableComponent"])
    ], ProductComponent.prototype, "fluentTableComponent", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product",
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _services_product_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            codera_shared__WEBPACK_IMPORTED_MODULE_2__["DynamicService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            codera_shared__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/category-service/category.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/category-service/category.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getById = function (Id) {
        return this.http.post("categories/get/" + Id, JSON);
    };
    CategoryService.prototype.create = function (newCategory) {
        return this.http.post("categories/create", newCategory);
    };
    CategoryService.prototype.edit = function (category) {
        return this.http.post("categories/edit", category);
    };
    CategoryService.prototype.getAll = function (shopRequest) {
        return this.http.post('categories/all', shopRequest);
    };
    CategoryService.prototype.delete = function (Id) {
        return this.http.post("categories/DeleteById/" + Id, JSON);
    };
    CategoryService.prototype.allTable = function () {
        return this.http.post("categories/alltable", JSON);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/product-service/product.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/product-service/product.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAll = function (filter) {
        return this.http.post('products/gettable', filter);
    };
    ProductService.prototype.get = function (Id) {
        return this.http.post('products/get/' + Id, JSON);
    };
    ProductService.prototype.delete = function (Id) {
        return this.http.post('products/delete/' + Id, JSON);
    };
    ProductService.prototype.createOrUpdate = function (model) {
        if (model.Id) {
            return this.http.post("products/edit", model);
        }
        else {
            return this.http.post("products/create", model);
        }
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shop-response.ts":
/*!**********************************!*\
  !*** ./src/app/shop-response.ts ***!
  \**********************************/
/*! exports provided: ShopReponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopReponse", function() { return ShopReponse; });
var ShopReponse = /** @class */ (function () {
    function ShopReponse() {
    }
    return ShopReponse;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DimitarKotevski\Documents\projects\IntellaQuestProject\IntellaQuest.Web\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map