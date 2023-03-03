import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:'categories', component: CategoryComponent
  },
  {
    path:'products', component: ProductComponent
  },
  {
    path:'customers', component: CustomerComponent
  },
  {
    path:'orders', component: OrderComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
