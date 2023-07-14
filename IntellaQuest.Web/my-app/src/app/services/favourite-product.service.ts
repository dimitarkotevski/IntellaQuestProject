import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FavouriteProductService{

    private baseApi = "api/FavouriteProducts/";

    constructor(private http: HttpClient) { }

}