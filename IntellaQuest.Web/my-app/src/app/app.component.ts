import { Component } from '@angular/core';
import { FluentTabConfig } from 'codera-shared';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tabsConfig: FluentTabConfig[];

  prepareTabs(){
    const that = this;
    this.tabsConfig = 
      [
        new FluentTabConfig({
            title: () => {
                return `<span><i class='far fa-check-square'></i>Category</span>`;
            },
            show: true,
            componentClass: CategoryComponent
        }),
        new FluentTabConfig({
            title: () => {
                return `<span><i class='far fa-check-square'></i>Product</span>`;
            },
            show: true,
            componentClass: ProductComponent
        })
    ]
  }

  ngOnInit(){
    this.prepareTabs();
  }


}
