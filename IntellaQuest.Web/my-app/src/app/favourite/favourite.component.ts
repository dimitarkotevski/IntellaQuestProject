import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Product } from '../models/product';
import { ResponseListModel } from '../models/response';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  responseModel?: ResponseListModel<Product>;
  constructor(
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()){
      window.location.replace('/')
    }

    this.authService.getFavouriteProducts(this.authService.getLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
      this.responseModel = result;
    })
  }

}
