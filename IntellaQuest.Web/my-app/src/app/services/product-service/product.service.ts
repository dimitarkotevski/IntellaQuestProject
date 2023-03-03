import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from 'src/app/category';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(filter:any) {
    return this.http.post<Category>('products/gettable',filter)
  }
  get(Id:number) {
    return this.http.post<Category>('products/get/'+Id,JSON)
  }
  delete(Id:number){
    return this.http.post<Category>('products/delete/'+Id,JSON)
  }
  createOrUpdate(model : Product){
    if(model.Id){
      return this.http.post<string | boolean>("products/edit", model);
    }else{
      return this.http.post<string | boolean>("products/create", model);
    }
  }
}
