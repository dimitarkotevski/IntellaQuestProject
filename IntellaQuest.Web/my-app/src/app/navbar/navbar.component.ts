import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isUserAuthenticated?: boolean;
  username: string="username";

  constructor(
    private router: Router,
    private authService: AuthService,
    ){}

  ngOnInit(): void {
    console.log(this.isUserAuthenticated);
  }
  logout(){
    this.authService.logout();
    window.location.replace('/')
  }
}
