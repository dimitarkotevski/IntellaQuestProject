import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminToolUserService {

  private baseApi = 'api/Product';

  constructor(
    private http: HttpClient,
  ) { }

  getTable(){

  }
  getById(id:string){

  }
  create(){

  }
  update(){

  }
  delete(id:string){

  }
  
}
