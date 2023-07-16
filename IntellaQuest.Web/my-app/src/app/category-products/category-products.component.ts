import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
import { ResponseListModel } from '../models/response';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  
  //@Input() category?: Category;
  products?: ResponseListModel<Product>;
  category?: Category;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryUrl = params.get('category');
      if(categoryUrl){
        this.categoryService.GetCategoryByUrl(categoryUrl).subscribe((res:any)=>{
          this.category = res;
        })
        
        this.categoryService.getProductsByCategoryUrl(categoryUrl).subscribe((res : ResponseListModel<Product>)=>{
          this.products = res;
          this.isLoading=false;
        })
      }
    });
  }

}
