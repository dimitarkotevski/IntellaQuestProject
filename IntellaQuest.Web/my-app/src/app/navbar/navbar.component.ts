import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';
import { CategoryService } from '../category-products/category.service';
import { ResponseListModel } from '../models/response';
import { CategoryViewModel } from '../models/category';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isUserAuthenticated?: boolean;
  @Input() refreshState: EventEmitter<any>;

  categories?: CategoryViewModel[] | null | undefined;
  categoryNavBar = true;
  username?: string;
  id?: string | null;

  constructor(
      private authService: AuthentificationService,
      private categoryService: CategoryService,
      private toastr: ToastrService,
    ){
      this.refreshState = new EventEmitter();
    }

  ngOnInit(): void {
    this.id = this.authService.getLoggedUserId();
    this.username = this.authService.getLoggedUsername();
  }
  logout(){
    this.authService.logout();
    this.refreshState.emit();
    this.toastr.success("Success logout!");
    window.location.replace('/')
  }

  changeCategoryNavBar(){
    if(this.categoryNavBar==true){
      this.categoryNavBar = false;
    }else{
      this.categoryNavBar=true;
    }
  }
}
