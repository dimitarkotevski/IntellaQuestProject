import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart?: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if(!this.authService.IsAuthenticated()){
      this.router.navigate(["login"]);
    }

    this.authService.GetUserCartProducts(this.authService.GetLoggedUserId())?.subscribe((res)=>{
      this.shoppingCart = res;
    })

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
      this.authService.RemoveCartDetail(id)?.subscribe(()=>{

        this.authService.GetUserCartProducts(this.authService.GetLoggedUserId())?.subscribe((res)=>{
          this.shoppingCart = res;
        })

        this.toastr.success("Success remove cart product")
      });
    }else{
      this.toastr.error("Something is wrong")
    }
  }

}
