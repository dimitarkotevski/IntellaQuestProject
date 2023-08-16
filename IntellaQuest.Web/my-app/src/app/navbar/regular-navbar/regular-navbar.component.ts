import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthentificationService } from 'src/app/authentification/authentification.service';
import { CategoryService } from 'src/app/category-products/category.service';

@Component({
  selector: 'app-regular-navbar',
  templateUrl: './regular-navbar.component.html',
  styleUrls: ['./regular-navbar.component.css']
})
export class RegularNavbarComponent implements OnInit {

  categories?: Category[] | null | undefined;
  @Input() isUserAuthenticated?: boolean;
  @Input() refreshState: EventEmitter<any>;
  @Output() changeCategoryNavBar = new EventEmitter<any>();
  @Input() categoryNavBar?: boolean ;
  username?: string;
  amount: any;
  id?: string | null;

  constructor(
    private authService: AuthentificationService,
    private categoryService: CategoryService,
  ) { 
    this.refreshState = new EventEmitter();
  }

  ngOnInit(): void {
    this.username = this.authService.GetLoggedUsername();
    this.id = this.authService.GetLoggedUserId();
    this.authService.GetAmountMoneyOfUser(this.id)?.subscribe(res=>{
      if(res === 0){
        this.amount = null;
      }else{
        this.amount ="( $"+res+")";
      }
    })
  }

  logout(){
    this.authService.Logout();
    this.refreshState.emit();
    window.location.replace('/')
  }

  disableNavbar(){
    this.changeCategoryNavBar.emit();
  }
}
