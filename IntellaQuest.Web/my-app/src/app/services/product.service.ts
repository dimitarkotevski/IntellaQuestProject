// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//     private baseApi = "api/";

//   constructor(private http: HttpClient) { }

//   getAll(filter:any) {
//     return this.http.post<any>(this.baseApi+'products/gettable',filter)
//   }
//   get(Id:number) {
//     return this.http.post<any>(this.baseApi+'products/get/'+Id,JSON)
//   }
//   delete(Id:number){
//     return this.http.post<any>(this.baseApi+'products/delete/'+Id,JSON)
//   }
//   createOrUpdate(model : any){
//     if(model.Id){
//       return this.http.post<string | boolean>(this.baseApi+"products/edit", model);
//     }else{
//       return this.http.post<string | boolean>(this.baseApi+"products/create", model);
//     }
//   }
// }