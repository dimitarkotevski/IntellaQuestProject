import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private baseApi = "api/";

  constructor(private http: HttpClient) { }

  getAll(filter:any) {
    return this.http.post<any>(this.baseApi+'products/All',filter)
  }
  getImage(id: any): Observable<Blob> {
    return this.http.post<any>(this.baseApi+'/products/GetProductImage/'+id,JSON);
  }
  get(Id:string) {
    return this.http.post<any>(this.baseApi+'products/get/'+Id,JSON)
  }
  delete(Id:number){
    return this.http.post<any>(this.baseApi+'products/delete/'+Id,JSON)
  }
  createOrUpdate(model : any){
    if(model.Id){
      return this.http.post<string | boolean>(this.baseApi+"products/edit", model);
    }else{
      return this.http.post<string | boolean>(this.baseApi+"products/create", model);
    }
  }
}