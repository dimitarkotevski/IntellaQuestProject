import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';
import { CategoryService } from '../services/category.service';
import { ResponseListModel } from '../models/response';
import { Category } from '../models/category';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories?: Category[] | null | undefined;
  @Input() isUserAuthenticated?: boolean;
  @Input() refreshState: EventEmitter<any>;
  username?: string;
  id?: string | null;

  constructor(
      private authService: AuthService,
      private categoryService: CategoryService,
      private toastr: ToastrService,
    ){
      this.refreshState = new EventEmitter();
    }

  ngOnInit(): void {
    this.id = this.authService.GetLoggedUserId();
    this.username = this.authService.GetLoggedUsername();

    // this.categoryService.getAllCategories().subscribe((result:ResponseListModel<Category>) => {
    //   this.categories = result.Items;
    // })
  }
  logout(){
    this.authService.Logout();
    this.refreshState.emit();
    this.toastr.success("Success logout!");
    window.location.replace('/')
  }
}
