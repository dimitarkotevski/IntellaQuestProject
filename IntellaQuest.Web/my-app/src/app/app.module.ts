import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
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
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    FavouriteComponent,
    SettingsComponent,
    ProductDetailComponent,
    FooterComponent,
    NavigationPanelComponent
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
