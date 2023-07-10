import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() products: Product[] | null | undefined;

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
    if(!userId){
      window.location.replace('/login')
    }else{
      this.toastr.error("Not implemented!");
    }
  }
}
