import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

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
      private authService:AuthentificationService) { }

  ngOnInit(): void {
    if(this.authService.IsAuthenticated()){
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
