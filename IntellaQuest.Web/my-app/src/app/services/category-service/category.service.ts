import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShopReponse } from 'src/app/shop-response';
import { ShopRequest } from 'src/app/shop-request';
import { Category } from 'src/app/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  
  getById(Id: number) {
    return this.http.post<Category>("categories/get/"+Id,JSON);
  }
  create(newCategory:Category){
    return this.http.post<any>("categories/create",newCategory);
  }
  edit(category: Category) {
    return this.http.post<Category>("categories/edit",category);
  }
  getAll(shopRequest: ShopRequest) {
    return this.http.post<ShopReponse>('categories/all',shopRequest)
  }
  delete(Id:number){
    return this.http.post<any>("categories/DeleteById/"+Id,JSON)
  }
  allTable(){
    return this.http.post<any>("categories/alltable",JSON)
  }
}
