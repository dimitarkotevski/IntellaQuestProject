import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
import { ResponseListModel } from '../models/response';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { RequestModel } from '../models/request';
import { ProductService } from '../customer-components/product-components/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  
  //@Input() category?: Category;
  products?: ResponseListModel<Product>;
  category?: Category;
  brands?: any;
  isLoading: boolean = true;
  filterCategory:RequestModel = new RequestModel();

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.refreshState(this.filterCategory);
  }

  refreshState(filter: RequestModel): void{
    this.isLoading = true;
    this.route.paramMap.subscribe(params => {
      const categoryUrl = params.get('category');
      if(categoryUrl){
        this.categoryService.GetCategoryByUrl(categoryUrl).subscribe((res:any)=>{
          this.category = res;
          this.productService.GetAllBrands(res.Id)?.subscribe((res)=>{
            this.brands = res;
          })
        })
        
        this.categoryService.getProductsByCategoryUrl(categoryUrl,filter).subscribe((res : ResponseListModel<Product>)=>{
          this.products = res;
          this.isLoading=false;
        })
      }
    });
  }

}
