import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-regular-navbar',
  templateUrl: './regular-navbar.component.html',
  styleUrls: ['./regular-navbar.component.css']
})
export class RegularNavbarComponent implements OnInit {

  categories?: Category[] | null | undefined;
  @Input() isUserAuthenticated?: boolean;
  @Input() refreshState: EventEmitter<any>;
  username?: string;
  id?: string | null;

  constructor(
    private authService: AuthService,
    private categoryService: CategoryService,
  ) { 
    this.refreshState = new EventEmitter();
  }

  ngOnInit(): void {
    this.username = this.authService.getLoggedUsername();
    this.id = this.authService.getLoggedUserId();
  }

  logout(){
    this.authService.logout();
    this.refreshState.emit();
    window.location.replace('/')
  }
}
