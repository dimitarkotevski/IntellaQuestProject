import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string ="";

  email: string = "";
  username: string = "";
  firstName: string = "";
  lastName: string = "";
  password: string = "";

  constructor(
      private router: Router,
      private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(["/"])
    }
  }
  registerUser(){
    if(this.username ===""){
      this.errorMessage = "Username is required";
      return;
    }
    if(this.password ===""){
      this.errorMessage = "Password is required";
      return;
    }
    // this.authService.registerUser().subscribe(()=>{
    //   window.location.replace('/')
    // },
    // (error) => {
    //   this.errorMessage = error.error.exception;
    // })
  }
}
