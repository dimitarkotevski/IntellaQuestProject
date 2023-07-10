import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './authentification/register/register.component';
import { LoginComponent } from './authentification/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { OrderGridComponent } from './order-grid/order-grid.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sort/:sort', component: HomeComponent },
  { path: 'category/:category',component: CategoryProductsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'cart', component: CartComponent},
  { path: 'favourite', component: FavouriteComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'error-404',component: ErrorPageComponent },
  { path: 'orders', component: OrderGridComponent },
  { path: 'orders/:id/details', component: OrderDetailComponent},
  { path: '**', redirectTo: '/error-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
