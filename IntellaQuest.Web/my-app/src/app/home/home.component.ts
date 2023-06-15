import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductsFilter } from '../models/products-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserAuthenticated: boolean = false;
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
    private route: ActivatedRoute,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.productFilter = params;
      this.queryParam =this.removeDuplicateParams( new HttpParams({ fromObject: params }).toString());
      console.log(this.queryParam);
      if(params['SortName'] || params['SortName'][0]){
        this.activeSorting = params['SortName']
      }
    });

    this.productService.getAll(this.productFilter).subscribe(products => {
          this.products = products.Items;
          this.totalItems = products.recordsTotal;
      });
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
}
