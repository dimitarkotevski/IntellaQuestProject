import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ByPassSecurityPipe } from './by-pass-security';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { CategoriesNavbarComponent } from './navbar/categories-navbar/categories-navbar.component';
import { RegularNavbarComponent } from './navbar/regular-navbar/regular-navbar.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

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
    CartComponent,
    FavouriteComponent,
    SettingsComponent,
    ProductDetailComponent,
    FooterComponent,
    ErrorPageComponent,
    ByPassSecurityPipe,
    CategoryProductsComponent,
    CategoriesNavbarComponent,
    RegularNavbarComponent,
    ProductsGridComponent,
    CarouselComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
  ],
  providers: [
    AuthService,
    ProductService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
