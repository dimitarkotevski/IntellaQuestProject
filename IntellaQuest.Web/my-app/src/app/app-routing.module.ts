import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [
  {
    path:'categories', 
    component: CategoryComponent
  },
  {
    path:'products', 
    component: ProductComponent
  },
  {
    path:'customers', 
    component: CustomerComponent
  },
  {
    path:'orders', 
    component: OrderComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
