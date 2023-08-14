import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../../../models/product';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../../../authentification/authentification.service';
import { ResponseListModel } from '../../../models/response';
import { FavouriteProductService } from 'src/app/favourite/favourite-product.service';
import { ShoppingCartService } from 'src/app/customer-components/cart-components/shopping-cart.service';
import { FavouriteComponent } from 'src/app/favourite/favourite.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  @Input() hasRemoveProductButton?: boolean;
  @Input() products: Product[] | null | undefined;
  @Input() orderProducts: any;
  @Input() shoppingCart: any | null | undefined;
  @Input() type: "home" | "cart" | "favourite" | "order" | undefined;
  @Output() refreshState = new EventEmitter<any>();

  isLoading: boolean = true;
  
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthentificationService,
    private favouriteProductService: FavouriteProductService,
    private shoppingCartService: ShoppingCartService
    ) { 
        if(this.type === undefined || this.type == undefined){
          this.type = 'home';
        }
      }

  ngOnInit(): void {
    console.log(this.orderProducts);
    console.log(this.type);
  }

  addToFavourite(productId: string | undefined){
    var userId = this.authService.GetLoggedUserId();
    if(!userId){
      window.location.replace('/login')
    }
    if(productId){
      this.favouriteProductService.AddFavouriteProducts(userId,productId).subscribe(
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
    var userId = this.authService.GetLoggedUserId();
    if(!userId && !productId){
      window.location.replace('/login')
    }else{
      this.shoppingCartService.AddProductToCart(this.authService.GetLoggedUserId(),productId || null)?.subscribe(()=>{
        this.toastr.success("Successs added product to cart");
      })
    }
  }

  deleteFavouriteProduct(id:string | undefined){
    if(id){
      this.favouriteProductService.DeleteFavouriteProduct(this.authService.GetLoggedUserId(),id)?.subscribe(()=>{
        this.toastr.success("Success deleted favourite product");
        this.refresh();
      })
    }
  }



  handleMinus(i:number){
    if(this.shoppingCart.ShoppingCartDetails[i].Quantity>1){
      this.shoppingCart.ShoppingCartDetails[i].Quantity--;
      this.shoppingCartService.MinusQuantity(this.shoppingCart.ShoppingCartDetails[i].Id)?.subscribe(res=>{

      })
    }
  }
  handlePlus(i:number){
    this.shoppingCart.ShoppingCartDetails[i].Quantity++;
    this.shoppingCartService.PlusQuantity(this.shoppingCart.ShoppingCartDetails[i].Id)?.subscribe((res)=>{

    })
  }

  deleteProductCartDetail(id:string){
    if(id){
      this.shoppingCartService.RemoveCartDetail(id)?.subscribe(()=>{
        this.toastr.success("Success remove cart product")
        this.refresh();
      });
    }else{
      this.toastr.error("Something is wrong")
    }
  }




  refresh() {
    const that = this;
    if (that.refreshState) {
      that.refreshState.emit();
    }
  }
}
