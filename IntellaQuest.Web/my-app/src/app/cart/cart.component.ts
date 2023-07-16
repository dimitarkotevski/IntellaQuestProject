import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';
import { OrderService } from '../customer-components/order-components/order.service';
import { ShoppingCartService } from '../customer-components/cart-components/shopping-cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() shoppingCart?: any;
  isLoading: boolean = true;

  constructor(
    private authService: AuthentificationService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if(!this.authService.IsAuthenticated()){
      this.router.navigate(["login"]);
    }

    this.refreshState();

  }

  refreshState(): void {
    this.shoppingCartService.GetUserCartProducts(this.authService.GetLoggedUserId())?.subscribe((res) => {
      this.shoppingCart = res;
      this.isLoading = false;
    });
  }

  handleMinus(i:number){
    if(this.shoppingCart.ShoppingCartDetails[i].Quantity>1){
      this.shoppingCart.ShoppingCartDetails[i].Quantity--;
    }
  }
  handlePlus(i:number){
    this.shoppingCart.ShoppingCartDetails[i].Quantity++;
  }

  deleteProductCartDetail(id:string){
    if(id){
      this.shoppingCartService.RemoveCartDetail(id)?.subscribe(()=>{

        this.shoppingCartService.GetUserCartProducts(this.authService.GetLoggedUserId())?.subscribe((res)=>{
          this.shoppingCart = res;
        })

        this.toastr.success("Success remove cart product")
      });
    }else{
      this.toastr.error("Something is wrong")
    }
  }

}
