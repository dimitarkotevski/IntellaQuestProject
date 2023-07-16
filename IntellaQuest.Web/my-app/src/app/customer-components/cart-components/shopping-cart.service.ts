import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class ShoppingCartService{

    private baseApi = 'api/ShoppingCarts';

    constructor(
        private http: HttpClient,
        ) {}

    AddProductToCart(userId: string | null , productId: string | null){
        if(userId && productId){
          return this.http.post<any>(this.baseApi+'/AddProductToShoppingCart/',{userId: userId, productId: productId})
        }else{
          return null;
        }
      }
    
      GetUserCartProducts(userId: string | null){
        if(userId){
          return this.http.post<any>(this.baseApi+'/GetUserShoppingCartWithProducts/',{userId: userId})
        }else{
          return null;
        }
      }
    
    
      RemoveCartDetail(detailId:string){
        if(detailId){
          return this.http.post<any>(this.baseApi+'/RemoveProductFromShoppingCart/',{ detailsId : detailId })
        }else{
          return
        }
      }
  }