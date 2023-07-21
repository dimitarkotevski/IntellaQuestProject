import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private baseApi = "api/Products/";

  constructor(private http: HttpClient) { }

  getAll(filter:any) {
    return this.http.post<any>(this.baseApi+'All',filter)
  }
  get(Id:string) {
    return this.http.post<any>(this.baseApi+'Get/'+Id,JSON)
  }
  delete(Id:number){
    return this.http.post<any>(this.baseApi+'Delete/'+Id,JSON)
  }
  createOrUpdate(model : any){
    if(model.Id){
      return this.http.post<string | boolean>(this.baseApi+"Edit", model);
    }else{
      return this.http.post<string | boolean>(this.baseApi+"Create", model);
    }
  }
  GetAllBrands(categoryId:string){
    if(categoryId){
      return this.http.post<string | boolean>(this.baseApi+"GetAllBrands", {categoryId: categoryId});
    }else{
      return null;
    }
  }
}