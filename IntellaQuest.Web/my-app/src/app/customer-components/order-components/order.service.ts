import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class OrderService{
    private baseApi = "api/Orders";

    constructor(private http: HttpClient) { }

    GetUserNotActiveOrders(userId:string | null) {
        return this.http.post<any>(this.baseApi+'/GetUserNotActiveOrders',{userId: userId})
    }

    GetUserActiveOrder(userId:string | null) {
        return this.http.post<any>(this.baseApi+'/GetUserActiveOrder',{userId: userId})
    }
}