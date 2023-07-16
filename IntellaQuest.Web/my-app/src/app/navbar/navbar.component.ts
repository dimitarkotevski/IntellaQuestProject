import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification/authentification.service';
import { CategoryService } from '../category-products/category.service';
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
      private authService: AuthentificationService,
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
