import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class OrderService{
    private baseApi = "api/";

    constructor(private http: HttpClient) { }

    GetUserOrders(userId:string | null) {
        return this.http.post<any>(this.baseApi+'/Identity/GetUserOrders',{userId: userId})
    }
}