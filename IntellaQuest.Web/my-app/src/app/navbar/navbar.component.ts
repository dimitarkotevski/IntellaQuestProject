import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { ResponseListModel } from '../models/response';
import { Category } from '../models/category';

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
      private router: Router,
      private authService: AuthService,
      private categoryService: CategoryService
    ){
      this.refreshState = new EventEmitter();
    }

  ngOnInit(): void {
    this.id = this.authService.getLoggedUserId();
    this.username = this.authService.getLoggedUsername();

    this.categoryService.getAllCategories().subscribe((result:ResponseListModel<Category>) => {
      this.categories = result.Items;
    })
  }
  logout(){
    this.authService.logout();
    this.refreshState.emit();
    window.location.replace('/')
  }
}
