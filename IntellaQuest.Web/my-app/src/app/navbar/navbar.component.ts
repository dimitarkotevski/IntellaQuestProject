import { Component, ElementRef, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isUserAuthenticated?: boolean;
  @Input() refreshState: EventEmitter<any>;
  username: string="username";

  constructor(
    private router: Router,
    private authService: AuthService,
    ){
      this.refreshState = new EventEmitter();
    }

  ngOnInit(): void {
    console.log(this.authService.getTokenInformation());
  }
  logout(){
    this.authService.logout();
    this.refreshState.emit();
    window.location.replace('/')
  }
}
