import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './customer-components/product-components/product.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductDetailComponent } from './customer-components/product-components/product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './customer-components/error-page/error-page.component';
import { ByPassSecurityPipe } from './utils/by-pass-security';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CategoriesNavbarComponent } from './navbar/categories-navbar/categories-navbar.component';
import { RegularNavbarComponent } from './navbar/regular-navbar/regular-navbar.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { CarouselComponent } from './customer-components/carousel/carousel.component';
import { BreadcrumbComponent } from './customer-components/breadcrumb/breadcrumb.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailComponent } from './customer-components/order-components/order-detail/order-detail.component';
import { SideFilterComponent } from './customer-components/side-filter/side-filter.component';
import { LoadingDetailComponent } from './customer-components/loading-components/loading-detail/loading-detail.component';
import { AuthentificationService } from './authentification/authentification.service';
import { CartGridComponent } from './customer-components/cart-components/cart-grid/cart-grid.component';
import { LoadingGridComponent } from './customer-components/loading-components/loading-grid/loading-grid.component';
import { OrderGridComponent } from './customer-components/order-components/order-grid/order-grid.component';
import { ProductsGridComponent } from './customer-components/product-components/products-grid/products-grid.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './customer-components/order-components/order.service';
import { CategoryService } from './category-products/category.service';
import { AdminToolComponent } from './admin-components/admin-tool/admin-tool.component';
import { AdminToolProductsComponent } from './admin-components/admin-tool-products/admin-tool-products.component';
import { AdminToolOrdersComponent } from './admin-components/admin-tool-orders/admin-tool-orders.component';
import { AdminToolUsersComponent } from './admin-components/admin-tool-users/admin-tool-users.component';
import { DateConverter } from './utils/convert-date';
import { OrderStatusPipe } from './utils/order-pipe';




const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartGridComponent,
    FavouriteComponent,
    SettingsComponent,
    ProductDetailComponent,
    FooterComponent,
    ErrorPageComponent,
    ByPassSecurityPipe,
    DateConverter,
    OrderStatusPipe,
    CategoryProductsComponent,
    CategoriesNavbarComponent,
    RegularNavbarComponent,
    ProductsGridComponent,
    CarouselComponent,
    BreadcrumbComponent,
    OrderGridComponent,
    OrderDetailComponent,
    SideFilterComponent,
    LoadingDetailComponent,
    LoadingGridComponent,
    CartComponent,
    OrderComponent,
    AdminToolComponent,
    AdminToolProductsComponent,
    AdminToolOrdersComponent,
    AdminToolUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthentificationService,
    ProductService,
    OrderService,
    CategoryService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
