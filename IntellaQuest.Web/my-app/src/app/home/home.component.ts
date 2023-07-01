import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductsFilter } from '../models/products-filter';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ResponseListModel } from '../models/response';
import { Product } from '../models/product';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  favouriteProduct?: Product[] | null | undefined;
  categories?: Category[] | null | undefined;
  products: Product[] | null | undefined;
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
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    ) { }

  ngOnInit(): void {
    if(this.activeSorting==='Popular'){
      this.router.navigate(['popular']);
    }

    this.productService.getAll(this.productFilter).subscribe((result:ResponseListModel<Product>) => {
          this.products = result.Items;
          this.totalItems = result.TotalItems;
      });
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
  changeRoute(url: string): void {
    this.router.navigate([url]);
  }

  getImage(image:any){
    var returnImage= this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + image);
    console.log(returnImage)
    return returnImage;
  }
  // getImage(image: any): any {
  //   const blob = new Blob([image], { type: 'image/jpeg' });
  //   const imageUrl = URL.createObjectURL(blob);
  //   const value = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  //   console.log(value)
  //   return imageUrl;
  //   const base64String = btoa( image);
  //  return "data:image/png;base64, "+ base64String;
  // }
}
