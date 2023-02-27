import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DeleteComponent } from './delete/delete.component';
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    AddEditComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
  ],
  entryComponents: [AddEditComponent, DeleteComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
