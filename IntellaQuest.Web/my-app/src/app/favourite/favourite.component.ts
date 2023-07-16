import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';
import { Product } from '../models/product';
import { ResponseListModel } from '../models/response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FavouriteProductService } from './favourite-product.service';
import { ProductsGridComponent } from '../customer-components/product-components/products-grid/products-grid.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit, OnChanges {
  responseModel?: ResponseListModel<Product>;

  isLoading: boolean = true;

  constructor(
    private authService: AuthentificationService,
    private favouriteProductService: FavouriteProductService,
    private toastr: ToastrService,
    private router: Router,
    ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshState();
  }

  ngOnInit(): void {
    if(!this.authService.IsAuthenticated()){
      this.router.navigate(["login"]);
    }

    this.refreshState();

  }

  refreshState(){
    this.favouriteProductService.GetFavouriteProducts(this.authService.GetLoggedUserId()).subscribe((response:ResponseListModel<Product>)=>{
      this.responseModel = response;
      this.isLoading = false;
    })
  }

  deleteFavouriteProduct(id:string | undefined){
    if(id){
      this.favouriteProductService.DeleteFavouriteProduct(this.authService.GetLoggedUserId(),id)?.subscribe(()=>{
        this.toastr.success("Success deleted favourite product");
        this.favouriteProductService.GetFavouriteProducts(this.authService.GetLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
          this.responseModel = result;
        })
      })
    }
  }
}
