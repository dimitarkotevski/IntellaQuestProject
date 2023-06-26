import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductsFilter } from '../models/products-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ResponseListModel } from '../models/response';
import { Product } from '../models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  favouriteProduct?: Product[] | null | undefined;
  products: any;
  search: string = 'search'
  totalItems?: number
  activeSorting?: string ='Popular';
  sortingNames?: string[];
  productFilter?: ProductsFilter={
    SearchString:"",
    SortName: "Popular",
    PageNeeded: "",
    Price: "",
  };

  queryParam: string = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.productService.getAll(this.productFilter).subscribe((result:ResponseListModel<Product>) => {
          this.products = result.Items;
          this.totalItems = result.TotalItems;
      });
      // this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
      //   this.favouriteProduct = result.Items;
      // })
  }

  removeDuplicateParams(paramsString: string): string {
    const paramsArray = paramsString.split('&');
    const uniqueParamsArray = [...new Set(paramsArray)];
    return uniqueParamsArray.join('&');
  }

  changeSorting(sorting: string): void {
    this.activeSorting = sorting;
    this.productFilter ={
      SearchString:"",
      SortName: sorting,
      PageNeeded: "",
      Price: "",
    };
    this.productService.getAll(this.productFilter).subscribe(products => {
      this.products = products.Items;
      this.totalItems = products.recordsTotal;
    });
  }
  changeRoute(url:string){
    this.router.navigate(['/search?q=',url]);
  }
  // checkIfFavouriteProductExist(product: Product){
  //   const flag = this.favouriteProduct?.includes(product,0);
  //   return flag;
  // }
}
