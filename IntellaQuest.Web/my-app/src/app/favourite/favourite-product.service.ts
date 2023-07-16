import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FavouriteProductService{

    private baseApi = "api/FavouriteProducts/";

    constructor(private http: HttpClient) { }


    GetFavouriteProducts(Id:string | null): Observable<any>  {
        return this.http.post<any>(this.baseApi+'GetUserFavouriteProducts',{userId: Id})
      }
    
      AddFavouriteProducts(userId:string | null, productId: string | null): Observable<any>  {
        if(userId && productId){
          return this.http.post<any>(this.baseApi+'UserAddFavouriteProduct',{userId: userId, productId: productId})
        }
        else{
          return of(null);
        }
      }
      DeleteFavouriteProduct(userId:string | null, productId: string| null){
        if(userId && productId){
          return this.http.post<any>(this.baseApi+'RemoveFavouriteProduct',{userId: userId, productId: productId})
        }else{
          return null;
        }
      }
}