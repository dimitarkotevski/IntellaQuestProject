import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() isAuthenticated?: boolean;

  username: string = "";
  password: string = "";
  constructor(
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(["/"])
    }
  }
  loginUser(){
    this.authService.login(this.username, this.password).subscribe(()=>{
      window.location.replace('/')
    })
  }
}
