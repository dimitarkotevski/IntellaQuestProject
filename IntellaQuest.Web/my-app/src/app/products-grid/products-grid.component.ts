import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { ResponseListModel } from '../models/response';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() hasRemoveProductButton?: boolean;
  @Input() products: Product[] | null | undefined;
  isLoading: boolean = true;
  
  constructor(
    private toastr: ToastrService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  addToFavourite(productId: string | undefined){
    var userId = this.authService.getLoggedUserId();
    if(!userId){
      window.location.replace('/login')
    }
    if(productId){
      this.authService.addFavouriteProducts(userId,productId).subscribe(
      ()=>{
        this.toastr.success("Product added!");
      },
      ()=>{
        this.toastr.warning("Product already in favourite products!");
      });
    }else{
      this.toastr.error("Product can't be added!");
    }
  }

  addToCart(productId: string | undefined){
    var userId = this.authService.getLoggedUserId();
    if(!userId && !productId){
      window.location.replace('/login')
    }else{
      this.authService.addProductToCart(this.authService.getLoggedUserId(),productId || null)?.subscribe(()=>{
        this.toastr.success("Successs added product to cart");
      })
    }
  }

  deleteFavouriteProduct(id:string | undefined){
    if(id){
      this.authService.deleteFavouriteProduct(this.authService.getLoggedUserId(),id)?.subscribe(()=>{
        this.toastr.success("Success deleted favourite product");
        this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
          this.products = result.Items;
        })
      })
    }
  }
}
