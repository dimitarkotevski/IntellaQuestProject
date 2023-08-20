import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestModel } from '../../admin-tool-models/admin-tool-request-model';
import { OrderGridViewModel } from 'src/app/models/order-grid';
import { ResponseModel } from '../../admin-tool-models/admin-tool-response-model';
import { OrderViewModel } from '../../admin-tool-models/order-view-model';

@Injectable({
  providedIn: 'root'
})
export class AdminToolOrderService {

  private baseApi = 'api/Order/';

  constructor(
    private http: HttpClient,
  ) { }

  getTable(request: RequestModel){
    return this.http.post<ResponseModel<OrderGridViewModel>>(this.baseApi+"All", request);
  }
  getById(id:string){
    return this.http.post<OrderViewModel>
  }
  create(){

  }
  update(){

  }
  delete(id:string){

  }
}
