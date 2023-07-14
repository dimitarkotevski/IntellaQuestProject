import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { Product } from '../models/product';
import { ResponseListModel } from '../models/response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  responseModel?: ResponseListModel<Product>;
  isLoading: boolean = true;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    if(!this.authService.IsAuthenticated()){
      this.router.navigate(["login"]);
    }

    this.authService.GetFavouriteProducts(this.authService.GetLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
      this.responseModel = result;
      this.isLoading = false;
    })
  }

  deleteFavouriteProduct(id:string | undefined){
    if(id){
      this.authService.DeleteFavouriteProduct(this.authService.GetLoggedUserId(),id)?.subscribe(()=>{
        this.toastr.success("Success deleted favourite product");
        this.authService.GetFavouriteProducts(this.authService.GetLoggedUserId()).subscribe((result:ResponseListModel<Product>)=>{
          this.responseModel = result;
        })
      })
    }
  }
}
