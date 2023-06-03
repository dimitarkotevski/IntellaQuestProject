import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { UserLogin } from '../models/login/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    //private authService:AuthService
    ) { }

  ngOnInit(): void {
  }
  loginUser(){
    // this.authService.login(this.username, this.password).subscribe(res=>{
    //   console.log(res);
    // })
  }
}
