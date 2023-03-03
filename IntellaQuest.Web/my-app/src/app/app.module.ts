import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService,SharedModule } from 'codera-shared';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { DeleteComponent } from './delete/delete.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DragulaModule } from 'ng2-dragula';
import { ToastrModule } from 'ngx-toastr';
import { APP_INITIALIZER } from '@angular/core';
import { MyCategoryPickerComponent } from './my-category-picker/my-category-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    AddEditComponent,
    DeleteComponent,
    MyCategoryPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    SharedModule,
    DragulaModule.forRoot(),
		ToastrModule.forRoot(),
    
    TranslateModule.forRoot({
			loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
    },
    isolate: false
		}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AddEditComponent, DeleteComponent,MyCategoryPickerComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ApplicationService],
      multi: true
  },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

 }

 export function httpLoaderFactory(http: HttpClient) {
  const date = new Date();
  return new TranslateHttpLoader(http, '/mocquest/bundles/assets/locales/', `.json?ts=${date.getTime()}`);
}

export function initApp(applicationService: ApplicationService) {
  applicationService.setAlternativeApplicationContext(`Base/GetAppContext`, "");
  const result = () => applicationService.initAlternativeApplicationContext();
  return result;
}